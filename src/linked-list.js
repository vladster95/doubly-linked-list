const Node = require('./node');

class LinkedList {
    constructor() {
        this.d = new Node([], 0, 1);
        this.length = this.d.data.length;
        this._head;
        this._tail;
    }

    append(data) {
        if (this.isEmpty()) {
            this.d.data.push(data);
            this.length = this.d.data.length;
            this._head = this.d;
            this._tail = this.d;
        } else {
            this.d.data.push(data);
            this.length = this.d.data.length;

        }
        return this;
    }

    head() {
        if (this.d.data.length > 0) {
            return this.d.data[0];
        } else {
            return null;
        }
    }

    tail() {
        if (this.d.data.length > 0) {
            return this.d.data[this.d.data.length - 1];
        } else {
            return null;
        }
    }

    at(index) {
        if (this.d.data[index] != null) {
            return this.d.data[index];
        } else {

        }
    }

    insertAt(index, data) {
        if (this.d.data[index] != null) {
            this.d.data.splice(index, 0, data);
            this.length = this.d.data.length;
        } else {

        }
        return this;
    }

    isEmpty() {
        if (this.length) {
            return false;
        } else {
            return true;
        }
    }

    clear() {
        this.d.data = [];
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        this.d.data.splice(index, 1);
        this.length = this.d.data.length;
        return this;
    }

    reverse() {
        this.d.data.reverse();
        return this;
    }

    indexOf(data) {
        for (let i = 0; i < this.d.data.length; i++) {
            if (this.d.data[i] === data) {
                return i;
            }
        }
        return -1;
    }
}

module.exports = LinkedList;
