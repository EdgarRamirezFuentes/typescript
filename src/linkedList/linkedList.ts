import { ListNode } from "./listNode";

type Nullable<T> = T | undefined;

class LinkedList<T> {
    private head?: Nullable<ListNode<T>>;
    length: number = 0;

    constructor();
    constructor(nodes: ListNode<T>[]);

    constructor(nodes?: ListNode<T>[]) {
        if(nodes) {
            nodes.forEach(node => {
                this.add(node.getValue());
            });
        }
    }

    add(value: T): void;
    add(value: T, position: number): void;

    add(value: T, position?: number): void {
        if (position === undefined) {
            this.addEnd(value);
        } else {
            this.addAtPosition(value, position);       
        }

        this.length += 1;
    }

    private addBegin(value: T) {
        const newHead = new ListNode<T>(value);

        if (!this.head) {
            this.head = newHead;
            return;
        }
        
        const previousHead = this.head;
        newHead.next = previousHead;
        this.head = newHead;
    }

    private addEnd(value: T): void {
        const newNode = new ListNode<T>(value);

        if (!this.head) {
            this.addBegin(value);
            return;
        }

        let currentNode = this.head;

        while (currentNode.next) {
            currentNode = currentNode.next;
        }

        currentNode.next = newNode;
    }

    private addAtPosition(value: T, position: number): void {
        if (position >= this.length || position < 0) {
            throw new Error("Invalid position.");
        }
        
        if (!this.head) {
            this.addBegin(value);
            return;
        }

        let currentNode: ListNode<T> = this.head;
        let previousNode: Nullable<ListNode<T>> = undefined;

        while(--position > -1 && currentNode.next) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        if (!previousNode) {
            this.addBegin(value);
        } else {
            const newNode = new ListNode<T>(value);
            previousNode.next = newNode;
            newNode.next = currentNode;
        }
    }

    delete(): void;
    delete(position:number):void;

    delete(position?: number): void {
        if (position === undefined) {
            this.deleteEnd();
        } else {
            this.deleteAtPosition(position);
        }

        this.length -= 1;
    }

    private deleteBegin(): void {
        if (!this.head) { 
            throw new Error("Cannot delete a node from an empty list."); 
        }

        if (!this.head.next) {
            this.head = undefined;
            return;
        }

        this.head = this.head.next;
    }

    private deleteEnd(): void {
        if (!this.head) { 
            throw new Error("Cannot delete a node from an empty list."); 
        }

        // Unique node.
        if (!this.head.next) { 
            this.head = undefined; 
            return;
        }

        let currentNode = this.head;
        
        while (currentNode.next) {
            // Deleting the last node in the list.
            if (!currentNode.next.next) {
                currentNode.next = undefined;
                break;
            }

            currentNode = currentNode.next;
        }
    }

    private deleteAtPosition(position: number): void {
        if (!this.head) {
            throw new Error("Cannot delete a node from an empty list.");
        }

        if (position >= this.length || position < 0) {  
            throw new Error("Invalid position.") ;
        }

        let currentNode = this.head;
        let previousNode: Nullable<ListNode<T>> = undefined;

        while(--position > -1 && currentNode.next) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        if (!previousNode) {
            this.deleteBegin();
        } else {
            previousNode.next = currentNode.next;
        }
    }

    get(position: number): T {
        if (!this.head) {
            throw new Error("Cannot get an item from an empty list.");
        }

        if (position >= this.length || position < 0) {
            throw new Error("Invalid position.");
        }

        let currentNode = this.head;

        while (--position > -1 && currentNode.next) {
            currentNode = currentNode?.next;
        }

        return currentNode.getValue();
    }

    update(value: T, position: number) {
        if (!this.head) {
            throw new Error("Cannot update an empty list.");
        }

        if (position >= this.length || position < 0) {
            throw new Error("Invalid position.");
        }

        let currentNode = this.head;

        while(--position > -1 && currentNode.next) {
            currentNode = currentNode.next;
        }

        currentNode.setValue(value);
    }

    reverse(): void {
        if(!this.head) {
            throw new Error('Cannot reverse an empty list.');
        }

        let currentNode: Nullable<ListNode<T>> = this.head;
        let previousNode: Nullable<ListNode<T>> = undefined;
        let nextNode: Nullable<ListNode<T>> = undefined;

        while(currentNode) {
            nextNode = currentNode.next;
            currentNode.next = previousNode;
            previousNode = currentNode;
            currentNode = nextNode;
        }

        this.head = previousNode;
    }

    print(): void {
        if (!this.head) { return; }

        let currentNode: Nullable<ListNode<T>> = this.head;

        while(currentNode) { 
            console.log(` \n\n| ${currentNode.getValue()} | \n\n | \n v`);
            currentNode = currentNode.next;

        }
        console.log("end \n\n");
    }
}

export { LinkedList };