import { Tree } from "./binarySearchTree.js";

describe("Includes test", () => {
  test("Contains value in one size", () => {
    const tree = Tree([5]);
    expect(tree.includes(5)).toBe(true);
  });

  test("Contains value in multiple valued array", () => {
    const tree = Tree([1, 5, 3]);
    expect(tree.includes(5)).toBe(true);
  });

  test("Does not contain value in multiple valued array", () => {
    const tree = Tree([1, 5, 3]);
    expect(tree.includes(4)).toBe(false);
  });
});
