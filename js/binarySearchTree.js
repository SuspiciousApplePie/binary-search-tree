function TreeNode(data, left = null, right = null) {
  return { data, left, right };
}

function Tree(arr) {
  const root = buildTree(arr);
  function buildTree(arr) {
    if (!arr.length) {
      return;
    }
    const filtered = arr.reduce((filtered, value) => {
      if (!filtered.includes(value)) {
        filtered.push(value);
      }
      return filtered;
    }, []);
    const sorted = filtered.sort((a, b) => a - b);
    let mid;
    if (filtered.length % 2 === 0) {
      mid = Math.floor((filtered.length - 1) / 2);
    } else {
      mid = Math.floor(filtered.length / 2);
    }
    const data = filtered[mid];
    const left = filtered.slice(0, mid);
    const right = filtered.slice(mid + 1, filtered.length);
    const node = TreeNode(data, buildTree(left), buildTree(right));
    return node;
  }
}

const tree1 = Tree([1, 2, 4, 6, 10, 11, 12]);
