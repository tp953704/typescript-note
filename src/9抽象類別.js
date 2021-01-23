"use strict";
class Sorter {
    constructor(input) {
        this.input = input;
    }
    sort() {
        // 泡泡排序
        for (let i = this.input.lenght; i > 0; i -= 1) {
            for (let j = 0; j < i - 1; j += 1) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    }
}
class StringSort extends Sorter {
    constructor(input) {
        super(input);
    }
    compare(index1, index2) {
        // 比較
        return true;
    }
    swap(index1, index2) {
        // 比較
    }
}
//# sourceMappingURL=9%E6%8A%BD%E8%B1%A1%E9%A1%9E%E5%88%A5.js.map