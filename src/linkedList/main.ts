import { LinkedList } from "./linkedList";

const myList = new LinkedList<number>();

myList.add(1);
myList.add(3);
myList.add(5);
myList.print();
myList.add(0, 0);
myList.add(2, 2);
myList.add(4, 4);
myList.print();
myList.delete(0);
myList.delete(3);
myList.print();
console.log(myList.get(0));
console.log(myList.get(2));
console.log(myList.get(3));
myList.update(100, 3);
myList.print();
console.log(myList.length);
myList.reverse();
myList.print();