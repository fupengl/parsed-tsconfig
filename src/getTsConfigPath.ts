import { join } from "path";
import { existsSync } from "fs";

/**
 * Returns the tsconfig path that exists in the current directory
 * @param cwd default `process.cwd()`
 */
function getTsConfigPath(cwd: string = process.cwd()): string {
  const tsconfigPath = join(cwd, "tsconfig.json");
  if (existsSync(tsconfigPath)) {
    return tsconfigPath;
  }
  throw new Error("tsconfig file does not exist");
}

export default getTsConfigPath;
