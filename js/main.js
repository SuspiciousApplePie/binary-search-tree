import { Tree } from "./binarySearchTree.js";

const tree = Tree([80, 77, 49, 33, 12, 8, 90, 45, 74, 34]);
console.log(tree.isBalance());
tree.levelOrderForEach((value) => {
  console.log(value);
});

tree.levelOrderForEachLoop((value) => {
  console.log(value);
});

tree.preOrderForEach((value) => {
  console.log(value);
});
tree.postOrderForEach((value) => {
  console.log(value);
});
tree.inOrderForEach((value) => {
  console.log(value);
});

tree.insert(101);
tree.insert(309);
tree.insert(545);
tree.insert(784);
tree.insert(901);
tree.insert(1001);

console.log(tree.isBalance());
tree.rebalance();
console.log(tree.isBalance());

tree.levelOrderForEach((value) => {
  console.log(value);
});

tree.levelOrderForEachLoop((value) => {
  console.log(value);
});

tree.preOrderForEach((value) => {
  console.log(value);
});
tree.postOrderForEach((value) => {
  console.log(value);
});
tree.inOrderForEach((value) => {
  console.log(value);
});
