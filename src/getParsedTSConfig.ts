import { dirname } from "path";

import type { ParsedCommandLine } from "typescript";

import getTsConfigPath from "./getTsConfigPath";
import formatDiagnostic from "./formatDiagnostic";

/**
 * Structured tsconfig configuration
 * @param cwd
 * @return {Partial<ParsedCommandLine>}
 */
function getParsedTSConfig(cwd?: string): Partial<ParsedCommandLine> {
  try {
    function parseTsconfig(path: string): ParsedCommandLine | void {
      const {
        readConfigFile,
        sys,
        parseJsonConfigFileContent,
      } = require("typescript");
      const result = readConfigFile(path, sys.readFile);

      if (result?.error) {
        console.log(formatDiagnostic(result.error));
        return;
      }
      const parsed = parseJsonConfigFileContent(
        result.config,
        {
          useCaseSensitiveFileNames: false,
          readDirectory: sys.readDirectory,
          fileExists: sys.fileExists,
          readFile: sys.readFile,
        },
        dirname(path)
      );
      if (parsed?.errors?.length) {
        console.log(formatDiagnostic(parsed?.errors?.[0]));
        return;
      }
      return parsed;
    }

    return parseTsconfig(getTsConfigPath(cwd)) || {};
  } catch (e) {
    return {};
  }
}

export default getParsedTSConfig;
