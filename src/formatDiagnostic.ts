import { sys } from "typescript";
import os from "os";
import type { Diagnostic } from "typescript";

function formatDiagnostic(error: Diagnostic) {
  const { sys, formatDiagnostic } = require("typescript");
  const formatDiagnosticHost = {
    getCanonicalFileName: (fileName: string) => fileName,
    getCurrentDirectory: sys.getCurrentDirectory,
    getNewLine: () => os.EOL,
  };
  return formatDiagnostic(error, formatDiagnosticHost);
}

export default formatDiagnostic;
