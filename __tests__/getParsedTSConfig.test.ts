import * as path from "path";
import getParsedTSConfig, { getTsConfigPath } from "../src";

describe("getParsedTSConfig", () => {
  it("test getTsConfigPath", () => {
    const realFile = path.join(__dirname, "../tsconfig.json");
    expect(getTsConfigPath(path.join(__dirname, "../tsconfig.json"))).toBe(
      realFile
    );
    expect(getTsConfigPath()).toBe(realFile);
  });

  it("test compilerOptions", () => {
    const { options, raw } = getParsedTSConfig();
    expect(options?.module).toBe(1);
    expect(raw.compilerOptions).toEqual(
      require("../tsconfig.json").compilerOptions
    );
  });
});
