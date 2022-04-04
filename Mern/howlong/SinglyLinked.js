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

    for(let i = 0; i<arr.length; i++)
        this.push(arr[i])
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

  Iterate(){
      let temp = this.head
      while(temp!=null){
          console.log(temp.val)
          temp = temp.next
      }
  }
}
let test_data1=123;
let test_data2=234;
let test_data3=345;
let test_data4=[111,222,333,444,555];

/* Create our list */
let list=new SinglyLinkedList();
/* Insert nodes into the list: */
list.PushBack(test_data1);
list.PushBack(test_data2);
list.PushBack(test_data3);
/* Insert array of nodes into the list: */
list.PushBackN(test_data4);
list.pop()
/* Iterate our list, so we can see our node values */
list.Iterate(value=>console.log(value));