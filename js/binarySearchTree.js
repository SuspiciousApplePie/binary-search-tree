export function TreeNode(data, left = null, right = null) {
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

  const getSuccessor = (node) => {
    let cur = node.right;
    while (cur.left) {
      cur = cur.left;
    }
    return cur;
  };

  const helperLevelForEach = (callback, queue = Queue()) => {
    const dequeuedData = queue.dequeue();
    if (dequeuedData) {
      callback(dequeuedData.data);
      if (dequeuedData.left) {
        queue.enqueue(dequeuedData.left);
      }
      if (dequeuedData.right) {
        queue.enqueue(dequeuedData.right);
      }
      helperLevelForEach(callback, queue);
    }
  };

  const helperDeleteItem = (value, node) => {
    if (!node) return null;

    if (value < node.data) {
      node.left = helperDeleteItem(value, node.left);
    } else if (value > node.data) {
      node.right = helperDeleteItem(value, node.right);
    } else {
      if (!node.left) return node.right;
      if (!node.right) return node.left;

      const succ = getSuccessor(node);
      node.data = succ.data;
      node.right = helperDeleteItem(succ.data, node.right);

      return node;
    }
  };

  return {
    includes: (value) => {
      return helperIncludes(value, root);
    },

    insert: (value) => {
      helperInsert(value, root);
    },
    deleteItem: (value) => {
      console.log(root);
      helperDeleteItem(value, root);
      console.log(root);
    },

    levelOrderForEach: (callback) => {
      const queue = Queue();
      queue.enqueue(root);
      helperLevelForEach(callback, queue);
    },
  };
}

export function QueueNode(value = null, nextNode = null) {
  return {
    value,
    nextNode,
  };
}

export function Queue() {
  let head = null;
  let tail = null;

  return {
    enqueue: (value) => {
      if (!head) {
        head = QueueNode(value);
        tail = head;
      } else {
        tail.nextNode = QueueNode(value);
        tail = tail.nextNode;
      }
    },

    dequeue: () => {
      if (head) {
        const dequeuedValue = head.value;
        head = head.nextNode;
        if (!head) tail = head;
        return dequeuedValue;
      }

      return null;
    },
  };
}
