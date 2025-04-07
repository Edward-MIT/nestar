// Task ZU
function sumOfUnique(nums: number[]): number {
  const countMap: Record<number, number> = {};

  for (const num of nums) {
    countMap[num] = (countMap[num] || 0) + 1;
  }

  let sum = 0;
  for (const num in countMap) {
    if (countMap[num] === 1) {
      sum += parseInt(num);
    }
  }

  return sum;
}

console.log(sumOfUnique([1, 2, 3, 2])); // 4
console.log(sumOfUnique([1, 1, 1, 1])); // 0
console.log(sumOfUnique([4, 5, 6, 5, 4])); // 6
