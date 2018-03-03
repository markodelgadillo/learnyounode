function addition(arr) {
  let sum = 0
  for (i = 2; i < arr.length; i++) {
    sum += Number(arr[i])
  }
  return sum
}

process.stdout.write(String(addition(process.argv)) + '\ncd')
