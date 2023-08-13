function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  interface obj {
    [key: string]: number;
  }
  let freqCounterS: obj = {};

  let freqCounterT: obj = {};

  for (let char of s) {
    freqCounterS[char] = (freqCounterS[char] || 0) + 1;
  }
  for (let char of t) {
    freqCounterT[char] = (freqCounterT[char] || 0) + 1;
  }
  for (let prop in freqCounterS) {
    // if the chars are not the same , return false
    if (Object.keys(freqCounterT).includes(prop) == false) return false;
    // if the char count is not equal return false
    if (freqCounterS[prop] !== freqCounterT[prop]) {
      return false;
    }
  }

  return true;
}
