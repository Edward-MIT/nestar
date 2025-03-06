// TASK ZK
function printNumbers(): void {
    let num: number = 1;
    const interval: NodeJS.Timeout = setInterval(() => {
      console.log(num);
      if (num === 5) {
        clearInterval(interval); // 5 ga yetganda intervalni to‘xtatamiz
      }
      num++;
    }, 1000);
  }

  printNumbers();


// MIT TASK ZJ

// function reduceNestedArray(arr: any[]): number {
//     return arr.reduce((sum, item) => {
//         if (Array.isArray(item)) {
//             return sum + reduceNestedArray(item);
//         }
//         if (typeof item === 'number') {
//             return sum + item;
//         }
//         return sum;
//     }, 0);
// }

// console.log(reduceNestedArray([1, [1, 2, [4]]]));
