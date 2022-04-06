class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  IsEmpty() {
    if (!this.head) {
      return "Its empty";
    }
    return this.head;
  }
  PushBack(value) {
    this.push(value);
  }

  PushBackN(arr) {
    /* Your Code Here */

    for (let i = 0; i < arr.length; i++) this.push(arr[i]);
  }
  push(val) {
    let temp = new Node(val);
    ///store new value in a temp Node where Node.val is val and node.next is null
    ///then check to see if new value is first value. Head should always have a value. if it doesn't you just recieved first value
    ///so set the temp value to head. let tail also point to head, which has temp
    if (!this.head) {
      this.head = temp;
      this.tail = this.head;
    } else {
      this.tail.next = temp;
      this.tail = temp;
    }
    return this;
  }

  pop() {
    if (!this.head) {
      return -1;
    }

    let cur = this.head;
    let tempTail = cur;

    while (cur.next) {
      tempTail = cur;
      cur = cur.next;
    }
    this.tail = tempTail;
    this.tail.next = null;

    return cur;
  }

  Iterate() {
    let temp = this.head;
    while (temp != null) {
      console.log(temp.val);
      temp = temp.next;
    }
  }

  insertAtFront(data) {
    if (!this.head) {
      return -1;
    }
    let temp = new Node(data);
    temp.next = this.head;
    this.head = temp;
  }

  /**
   * Removes the first node of this list.
   * @returns {any} The data from the removed node.
   */
  removeHead() {
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
  }

  // EXTRA
  /**
   * Calculates the average of this list.
   * @returns {number|NaN} The average of the node's data.
   */
  average() {
    let temp = this.head;
    let sum = 0,
      ct = 0;
    while (temp.next != null) {
      sum += temp.val;
      ct++;
      temp = temp.next;
    }

    console.log(sum, ct);
    return sum / ct;
  }

  secondToLast() {
    if (this.head.next.next == null) {
      this.head = head.next;
      return;
    }
    let temp = new Node();
    temp = this.head;
    let temp2 = temp.next;
    let temp3 = temp2.next;
    while (temp3.next != null) {
      temp = temp.next;
      temp2 = temp.next;
      temp3 = temp2.next;
    }
    temp.next = temp3;

    return;
  }

  /**
   * Removes the node that has the matching given val as it's data.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} val The value to compare to the node's data to find the
   *    node to be removed.
   * @returns {boolean} Indicates if a node was removed or not.
   */
  removeVal(val) {
    let temp = this.head;
    let temp2 = new Node();
    while (temp != null && temp.val != val) {
      temp2 = temp;
      temp = temp.next;
    }
    if (temp == null) return;
    temp2.next = temp.next;
  }

  // EXTRA
  /**
   * Inserts a new node before a node that has the given value as its data.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} newVal The value to use for the new node that is being added.
   * @param {any} targetVal The value to use to find the node that the newVal
   *    should be inserted in front of.
   * @returns {boolean} To indicate whether the node was pre-pended or not.
   */
  prepend(newVal, targetVal) {}

  removeBack() {
    // let temp = new Node();
    let temp = this.head;
    // let temp2 = temp.next;
    // let temp3 = temp2.next;
    while (temp.next.next != null) {
      temp = temp.next;
    }


    temp.next = null;

    return;
  }

  /**
   * Determines whether or not the given search value exists in this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} val The data to search for in the nodes of this list.
   * @returns {boolean}
   */

  contains(val) {
    let temp = this.head;
    let temp2 = new Node();
    while (temp != null && temp.val != val) {
      temp2 = temp;
      temp = temp.next;
    }
    if (temp == null) return "no";
    return "yes";
  }

  /**
   * Determines whether or not the given search value exists in this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} val The data to search for in the nodes of this list.
   * @param {?ListNode} current The current node during the traversal of this list
   *    or null when the end of the list has been reached.
   * @returns {boolean}
   */
  containsRecursive(val, current = this.head) {
    if (current == null) return false;
    if (current.val == val) return true;

    return val, current.next;
  }

  // EXTRA
  /**
   * Recursively finds the maximum integer data of the nodes in this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {ListNode} runner The start or current node during traversal, or null
   *    when the end of the list is reached.
   * @param {ListNode} maxNode Keeps track of the node that contains the current
   *    max integer as it's data.
   * @returns {?number} The max int or null if none.
   */
  recursiveMax(runner = this.head, maxNode = this.head) {
    if (runner.next == null) return maxNode.val;

    runner = runner.next;
    if (runner.val > maxNode.val) {
      maxNode = runner;
      
    }
    return this.recursiveMax(runner, maxNode);
  }
}
let test_data0 = 1230;
let test_data1 = 123;
let test_data2 = 234;
let test_data3 = 345;
let test_data4 = [111, 222, 333, 444, 555];

/* Create our list */
let list = new SinglyLinkedList();
/* Insert nodes into the list: */

list.PushBack(test_data1);
list.PushBack(test_data0);
list.PushBack(test_data2);
list.PushBack(test_data3);
/* Insert array of nodes into the list: */
list.PushBackN(test_data4);
list.pop();
list.insertAtFront(325);
list.insertAtFront(3);
/* Iterate our list, so we can see our node values */
list.Iterate((value) => console.log(value));
list.removeHead();
console.log("*********************");
list.Iterate((value) => console.log(value));
console.log("*********************");
console.log(list.average());
list.secondToLast();
console.log("*********************");
list.Iterate((value) => console.log(value));
console.log("*********************");
list.removeVal(222);
console.log("*********************");
list.Iterate((value) => console.log(value));
console.log("*********************");
list.removeBack();
console.log("*********************");
list.Iterate((value) => console.log(value));
console.log("*********************");

console.log(list.contains(325));
console.log("*********************");
console.log(list.containsRecursive(325));
console.log("*********************");
console.log(list.recursiveMax());
console.log("*********************");
