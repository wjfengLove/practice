// 1. keyof T 取出类型T的所有键，组成一个联合类型
type Person = { name: string; age: number }
type IKeys = keyof Person

// 2. extends两种用途
// 用途一：泛型约束 如：
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}
// 用途二：条件类型判断 如：
type IsString<T> = T extends string ? true : false

// 3. in 遍历联合类型每一个成员，生成新的类型
type Keys = 'name' | 'age'
type PersonInfo = { [K in Keys]: K extends 'name' ? string : number }
// 等价于
type PersonInfoEquivalent = {
  name: string
  age: number
}

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

function get<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}
const person = { name: 'Alice', age: 29 }
const names = get(person, 'name') // 类型推断为 string
