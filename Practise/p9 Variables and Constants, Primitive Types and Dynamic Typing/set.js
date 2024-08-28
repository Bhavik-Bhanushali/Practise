const s = new Set([1,2,3,4,5])
console.log(s)
console.log(s.size)
s.add(6)
s.add(7)
console.log(s)
console.log(s.size)
s.add(7)
s.add(7)
s.add(7)
s.add(7)
s.add(7)
console.log(s)
console.log(s.size)
console.log(typeof s)
console.log(s instanceof Set)
s.forEach(x => console.log(x))
console.log(s.has(0))
console.log(s.has(1))
console.log(s.values())
console.log(s.keys())
console.log(s.entries())