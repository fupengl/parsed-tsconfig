import getParsedTSConfig from "../src";

describe("getParsedTSConfig", () => {
  it("test compilerOptions", () => {
    const { options, raw } = getParsedTSConfig();
    expect(options?.module).toBe(1);
    expect(raw.compilerOptions).toEqual(
      require("../tsconfig.json").compilerOptions
    );
  });
});
