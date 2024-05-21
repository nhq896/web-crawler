const { sortPages } = require("./report");
const { test, expect } = require("@jest/globals");

test("sortPages 2 pages", () => {
  const input = {
    "https://www.wagslane.dev/path": 1,
    "https://www.wagslane.dev": 3,
  };
  const actual = sortPages(input);
  const expected = [
    ["https://www.wagslane.dev", 3],
    ["https://www.wagslane.dev/path", 1],
  ];
  expect(actual).toEqual(expected);
});

test("sortPages 5 pages", () => {
  const input = {
    "https://www.wagslane.dev/path": 1,
    "https://www.wagslane.dev": 3,
    "https://www.wagslane.dev/path2": 5,
    "https://www.wagslane.dev/path3": 2,
    "https://www.wagslane.dev/path4": 9,
  };
  const actual = sortPages(input);
  const expected = [
    ["https://www.wagslane.dev/path4", 9],
    ["https://www.wagslane.dev/path2", 5],
    ["https://www.wagslane.dev", 3],
    ["https://www.wagslane.dev/path3", 2],
    ["https://www.wagslane.dev/path", 1],
  ];
  expect(actual).toEqual(expected);
});
