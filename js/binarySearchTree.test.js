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

describe("Insert test", () => {
  test("Check lower number work.", () => {
    const tree = Tree([5]);
    tree.insert(3);
    expect(tree.includes(3)).toBe(true);
  });

  test("Check higher number work.", () => {
    const tree = Tree([3]);
    tree.insert(5);
    expect(tree.includes(5)).toBe(true);
  });

  test("Check higher number work in multiple data array.", () => {
    const tree = Tree([3, 8, 1, 6, 4]);
    tree.insert(5);
    expect(tree.includes(5)).toBe(true);
  });

  test("Check lower number work in multiple data array.", () => {
    const tree = Tree([3, 8, 1, 6, 4]);
    tree.insert(7);
    expect(tree.includes(7)).toBe(true);
  });
});
