import { LinkedList } from '../../src/linkedList/linkedList';
import { ListNode } from '../../src/linkedList/listNode';

test('adds a value in the beginning', () => {
    const list = new LinkedList<number>([new ListNode<number>(1)]);
    list.add(0, 0);

    expect(list.get(0)).toBe(0);
    expect(list.length).toBe(2);
});

test('adds a value in the end', () => {
    const list = new LinkedList<number>([new ListNode<number>(0)]);
    list.add(1);

    expect(list.get(1)).toBe(1);
    expect(list.length).toBe(2);
});

test('adds a value at position 2', () => {
    const nodes = [
        new ListNode<number>(0),
        new ListNode<number>(1),
        new ListNode<number>(3),
    ];
    const list = new LinkedList<number>(nodes);
    list.add(2, 2);

    expect(list.get(2)).toBe(2);
    expect(list.length).toBe(4);
});

test('deletes the first value of the list', () => {
    const nodes = [
        new ListNode<number>(0),
        new ListNode<number>(1),
        new ListNode<number>(2),
        new ListNode<number>(3),
    ];
    const list = new LinkedList<number>(nodes);
    list.delete(0);

    expect(list.length).toBe(3);
    expect(list.get(0)).toBe(1);
});

test('deletes the last value of the list', () => {
    const nodes = [
        new ListNode<number>(0),
        new ListNode<number>(1),
        new ListNode<number>(2),
        new ListNode<number>(3),
    ];
    const list = new LinkedList<number>(nodes);
    list.delete();

    expect(list.length).toBe(3);
    expect(list.get(2)).toBe(2);
});

test('deletes the value at position 2 of the list', () => {
    const nodes = [
        new ListNode<number>(0),
        new ListNode<number>(1),
        new ListNode<number>(2),
        new ListNode<number>(3),
    ];
    const list = new LinkedList<number>(nodes);
    list.delete(2);

    expect(list.length).toBe(3);
    expect(list.get(2)).toBe(3);
});

test('updates the first value of the list', () => {
    const nodes = [
        new ListNode<number>(0),
        new ListNode<number>(1),
        new ListNode<number>(2),
        new ListNode<number>(3),
    ];
    const list = new LinkedList<number>(nodes);

    list.update(-1, 0);

    expect(list.get(0)).toBe(-1);
});

test('updates the last value of the list', () => {
    const nodes = [
        new ListNode<number>(0),
        new ListNode<number>(1),
        new ListNode<number>(2),
        new ListNode<number>(3),
    ];
    const list = new LinkedList<number>(nodes);

    list.update(-1, 0);

    expect(list.get(0)).toBe(-1);
});

test('updates the value at position 2 of the list', () => {
    const nodes = [
        new ListNode<number>(0),
        new ListNode<number>(1),
        new ListNode<number>(2),
        new ListNode<number>(3),
    ];
    const list = new LinkedList<number>(nodes);

    list.update(-1, 2);

    expect(list.get(2)).toBe(-1);
});

test('reverses a list', () => {
    const nodes = [
        new ListNode<number>(0),
        new ListNode<number>(1),
        new ListNode<number>(3),
    ];
    const list = new LinkedList<number>(nodes);
    list.reverse();

    expect(list.get(0)).toBe(3);
    expect(list.get(1)).toBe(1);
    expect(list.get(2)).toBe(0);
});


test('throws Error when getting a value from empty list', () => {
    const list = new LinkedList<number>();
    expect(() => list.get(3)).toThrow();
});

test('throws Error when getting a value with no valid position', () => {
    const nodes = [
        new ListNode<number>(0),
        new ListNode<number>(1),
        new ListNode<number>(3),
    ];
    const list = new LinkedList<number>(nodes);

    expect(() => list.get(10)).toThrow();
});

test('throws Error when deleting a value from an empty list', () => {
    const list = new LinkedList<number>();

    expect(() => list.delete());
});

test('throws Error when deleting a value with no valid position', () => {
    const nodes = [
        new ListNode<number>(0),
        new ListNode<number>(1),
        new ListNode<number>(3),
    ];
    const list = new LinkedList<number>(nodes);

    expect(() => list.delete(10)).toThrow();
});

test('throws Error when updating a value from an empty list', () => {
    const list = new LinkedList<number>();

    expect(() => list.update(0, 1)).toThrow();
});

test('throws Error when updating a value with no valid position', () => {
    const nodes = [
        new ListNode<number>(0),
        new ListNode<number>(1),
        new ListNode<number>(3),
    ];
    const list = new LinkedList<number>(nodes);

    expect(() => list.update(10, 10)).toThrow();
});

test('throws Error when reversing an empty list', () => {
    const list = new LinkedList<number>();
   
   expect(() => list.reverse()).toThrow();
});
