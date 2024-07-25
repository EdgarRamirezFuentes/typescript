class ListNode<T> {
    private value: T;
    next ?: ListNode<T>;

    constructor(value: T, next?: ListNode<T>) {
        this.value = value;
        this.next = next;
    }

    getValue(): T {
        return this.value;
    }

    setValue(value: T): void {
        this.value = value;
    }
}

export { ListNode };