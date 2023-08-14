function solution(s, letter) {
  // implement
  let occurances = 0
  for (let i in s) {
    s[i] === letter ?
     occurances++ :
     occurances = occurances
  }
  return occurances
}

console.log(solution('this is a test', 's'))
console.log(solution('this is a test', 'z'))
