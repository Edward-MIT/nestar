// MIT TASK ZJ

function reduceNestedArray(arr: any[]): number {
    return arr.reduce((sum, item) => {
        if (Array.isArray(item)) {
            return sum + reduceNestedArray(item);
        }
        if (typeof item === 'number') {
            return sum + item;
        }
        return sum;
    }, 0);
}

console.log(reduceNestedArray([1, [1, 2, [4]]]));
