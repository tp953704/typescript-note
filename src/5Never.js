// never 執行步道結尾的第 方都算never
function forever() {
    while (true) {
    }
}
// never 是所有型別的子集， 因為任何集合都包含例外狀況
function throwError() {
    throw new Error('Will never excute next line...');
}
function throwError1() {
    throw new Error('Will never excute next line...');
}
;
export {};
//# sourceMappingURL=5Never.js.map