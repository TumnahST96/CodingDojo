class BSTNode {
  constructor(value) {
    this.left = undefined;
    this.right = undefined;
    this.value = value;
  }
}

class BST {
  constructor() {
    this.root = undefined;
  }

  /* Time Complexity:  O(1) */
  /* Space Complexity: O(1) */
  /* Determine whether the BST is empty */
  IsEmpty() {
    /* Your Code Here */
    if (!this.root) return true;
    return false;
  }

  /* Time Complexity:  O(N) */
  /* Space Complexity: O(1) */
  /* Find the smallest number in the BST */
  MinR(node) {
    /* Your Code Here */
    /* Call me recursively */
    if (!this.root) return false;

    if (node.left == null) return node.value;
    return this.MinR(node.left);
  }

  /* Time Complexity:  O(N) */
  /* Space Complexity: O(1) */
  /* Find the largest number in the BST */
  MaxR(node) {
    /* Your Code Here */
    /* Call me recursively */
    if (!this.root) return false;

    if (node.right == null) return node.value;
    return this.MaxR(node.right);
  }

  Min() {
    /* Your Code Here */
    // if()
  }

  Max() {
    /* Your Code Here */
  }

  /* Determine whether the given value exists within the tree */
  Contains(value) {
    /* Your Code Here */
    if (!this.root) return false;
    // if (value =< root.value) {
    // //     if(value==root.value) return true;
    // //     return this.Contains()
    // //   if (node.left == null) return node.value;
    // //   return this.MinR(node.left);
    // }
  }

  /* Determine whether the given value exists within the tree RECURSIVELY */
  ContainsRecursive(node, value) {
    /* Your Code Here */
    /* Call me recursively! */
  }

  /* I'm just here to print your BST In-Order. */
  /* Could use me as an example to solve above algos. */
  Log(node, fmt = "") {
    if (!node) return fmt;
    fmt = this.Log(node.left, fmt);
    fmt += node.value + "->";
    fmt = this.Log(node.right, fmt);
    return fmt;
  }
  /* Ordering: Node, Left, Right */
  /* Description: Traverse / Iterate the tree Pre-Order. */
  PreOrder(node) {
    if (!node) return;
    /* Call me recursively */
    console.log(node.value);
    this.PreOrder(node.left);
    /* Call me recursively */
    this.PreOrder(node.right);
  }

  /* Ordering: Left, Node, Right */
  /* Description: Traverse / Iterate the tree In-Order. */
  /* console.log(node.value) each node's value */
  InOrder(node) {
    if (!node) return;

    this.InOrder(node.left);
    console.log(node.value);
    this.PreOrder(node.right);
  }

  /* Left, Right, Node */
  /* Description: Traverse / Iterate the tree Post-Order. */
  /* console.log(node.value) each node's value */
  PostOrder(node) {
    if (!node) return;
    /* Call me recursively */
    this.PostOrder(node.left);
    /* Call me recursively */
    this.PostOrder(node.right);
    console.log(node.value);
  }
}
/*****************************************************************************/
/* Code Tests Below */
/*****************************************************************************/
let bst = new BST();
console.log(bst.IsEmpty()); /* Expected: true */

bst.root = new BSTNode(100);
bst.root.left = new BSTNode(50);
bst.root.right = new BSTNode(150);

bst.root.left.left = new BSTNode(25);
bst.root.left.right = new BSTNode(75);

bst.root.right.left = new BSTNode(125);
bst.root.right.right = new BSTNode(175);

// console.log(bst.Log(bst.root)); /* Uncomment me if you want to see your tree */
console.log(bst.IsEmpty()); /* Expected: false */
console.log("Min Node");
console.log(bst.MinR(bst.root)); /* Expected: 25 */
console.log("Max Node");
console.log(bst.MaxR(bst.root)); /* Expected: 175 */
console.log("Pre Order Root--Left--Right");
bst.PreOrder(bst.root);
console.log("In Order Left--Root--Right");
bst.InOrder(bst.root);
console.log("Post Order Left--Right--Root");
bst.PostOrder(bst.root);
