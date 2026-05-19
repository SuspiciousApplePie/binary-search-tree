function TreeNode(data, left = null, right = null) {
  return { data, left, right };
}

export function Tree(arr) {
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

    const mid = Math.floor((sorted.length - 1) / 2);

    const data = sorted[mid];
    const left = sorted.slice(0, mid);
    const right = sorted.slice(mid + 1, sorted.length);
    const node = TreeNode(data, buildTree(left), buildTree(right));
    return node;
  }

  const helperIncludes = (value, node) => {
    let status = false;

    if (!node) return status;

    if (value === node.data) {
      status = true;
      return status;
    }

    if (helperIncludes(value, node.left) || helperIncludes(value, node.right)) {
      status = true;
      return status;
    }

    return status;
  };

  const helperInsert = (value, node) => {
    if (helperIncludes(value, root)) return;
    if (!node) return TreeNode(value);
    if (value < node.data) {
      node.left = helperInsert(value, node.left);
    } else {
      node.right = helperInsert(value, node.right);
    }

    return node;
  };

  return {
    includes: (value) => {
      return helperIncludes(value, root);
    },

    insert: (value) => {
      helperInsert(value, root);
    },
  };
}
