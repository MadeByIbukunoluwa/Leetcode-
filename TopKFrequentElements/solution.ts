function topKFrequent(nums: number[], k: number): number[] {
  interface obj {
    [key: string]: number;
  }
  if (nums.length == 1) return nums;

  let frequencyCounter: obj = {};

  for (let num of nums) {
    frequencyCounter[num] = (frequencyCounter[num] || 0) + 1;
  }
  let resultArray = [];

  let entries = Object.entries(frequencyCounter).sort(([, a], [, b]) => b - a);

  for (let i = 0; i < k; i++) {
    resultArray.push(entries[i][0]);
  }
  return resultArray;
}

function topKFrequent(nums: number[], k: number): number[] {
    const freq: { [key: number]: number } = {};
    for (const n of nums) {
        if (freq[n] === undefined) freq[n] = 0;
        freq[n] += 1;
    }
    return Object.entries(freq)
        .sort((a, b) => b[1] - a[1])
        .slice(0, k)
        .map(v => Number(v[0]));
};