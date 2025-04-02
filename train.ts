


function countNumberAndLetters(str: string): { number: number, letter: number } {
    let count = { number: 0, letter: 0 };

    for (let char of str) {
        if (/[0-9]/.test(char)) {
            count.number++;
        } else if (/[a-zA-Z]/.test(char)) {
            count.letter++;
        }
    }

    return count;
}

console.log(countNumberAndLetters("string152%\u00a5")); // { number: 3, letter: 6 }



// function findDuplicates(arr: number[]): number[] {
//     const countMap: Record<number, number> = {};
//     const result: number[] = [];

//     for (const num of arr) {
//         countMap[num] = (countMap[num] || 0) + 1;
//     }

//     for (const [key, value] of Object.entries(countMap)) {
//         if (value >= 2) {
//             result.push(Number(key));
//         }
//     }

//     return result;
// }

// // Test
// console.log(findDuplicates([1, 2, 3, 4, 5, 4, 3, 4])); // [3, 4]

// function areArraysEqual(arr1: number[], arr2: number[]): boolean {
//     // Agar uzunliklari har xil bo'lsa, tekshirishda qiyinchilik bo'lmasligi uchun saralanadi
//     const sortedArr1 = [...arr1].sort((a, b) => a - b);
//     const sortedArr2 = [...arr2].sort((a, b) => a - b);

//     // Har ikkala massivning uzunligi bir xil bo'lishi kerak
//     if (sortedArr1.length !== sortedArr2.length) return false;

//     // Har bir elementni tekshirish
//     for (let i = 0; i < sortedArr1.length; i++) {
//         if (sortedArr1[i] !== sortedArr2[i]) return false;
//     }

//     return true;
// }

// // Test misollar
// console.log(areArraysEqual([1, 2, 3], [3, 1, 2]));      // true
// console.log(areArraysEqual([1, 2, 3], [3, 1, 2, 1]));   // true
// console.log(areArraysEqual([1, 2, 3], [4, 1, 2]));

// // task zo


// function areParenthesesBalanced(str: string): boolean {
//   let balance = 0;

//   for (const char of str) {
//       if (char === '(') {
//           balance++;
//       } else if (char === ')') {
//           balance--;
//       }

//       // Agar istalgan nuqtada balans manfiy bo'lsa, qavslar noto‘g‘ri joylashgan bo‘ladi
//       if (balance < 0) {
//           return false;
//       }
//   }

//   // Yakuniy balans 0 bo'lishi kerak
//   return balance === 0;
// }

// // Test misollar
// console.log(areParenthesesBalanced("string()ichida(qavslar)soni()balansda")); // true
// console.log(areParenthesesBalanced("((qavslar) noto‘g‘ri")); // false
// console.log(areParenthesesBalanced("qavslar(ochiladi)lekin(yopilmaydi")); // false





// task ZN

// function rotateArray(arr: number[], index: number): number[] {
//   const part1 = arr.slice(0, index);
//   const part2 = arr.slice(index);

//   return [...part2, ...part1];
// }
// console.log(rotateArray([1, 2, 3, 4, 5, 6], 3));



// task ZM
// function reverseInteger(num: number): number {

//   const reversed = num.toString().split('').reverse().join('');

//   return parseInt(reversed, 10);
// }

// console.log(reverseInteger(123456789));

// Task ZL

// function stringToKebab(str: string): string {
//   return str
//       .trim()
//       .toLowerCase()
//       .replace(/\s+/g, '-')
//       .replace(/[^a-z0-9-]/g, '');
// }
// console.log(stringToKebab("I love Kebab"));




// TASK ZK
// function printNumbers(): void {
//     let num: number = 1;
//     const interval: NodeJS.Timeout = setInterval(() => {
//       console.log(num);
//       if (num === 5) {
//         clearInterval(interval); // 5 ga yetganda intervalni to‘xtatamiz
//       }
//       num++;
//     }, 1000);
//   }

//   printNumbers();


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
