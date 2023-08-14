function solution(a) {
  // implement
  let result = 0
  a.forEach((num) => {
    result += num
  })
  return result
}

console.log(solution([]))
console.log(solution([1, 2]))
console.log(solution([2, 4, 8]))
