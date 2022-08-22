// Linked Lists in Typescript
export class LinkedList {
    head: null | ListNode;

    constructor(head = null) {
        this.head = head;
    }

    public printList(): void {
        let hCopy = this.head;

        if(!hCopy) console.log(`Empty list!`);

        let printArr = [];
        let i = 1;

        while(hCopy.next) {
            printArr.push(`${i}: ${hCopy.data}`);
            i++;
            hCopy = hCopy.next;
        }

        console.log(printArr.join(`, `));
    }

    public getSize(): number {
        let hCopy = this.head;
        if(!hCopy) return 0;
        let i = 1;
        while(hCopy.next) {
            i++;
            hCopy = hCopy.next;
        }
        return i;
    }

    public clear(): void {
        this.head = null;
    }

    public getFirst(): null | ListNode {
        return this.head;
    }

    public getLast(): null | ListNode {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next;
            }
        }
        return lastNode;
    }
}

export class ListNode {
    data: any;
    next: ListNode | null;

    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

