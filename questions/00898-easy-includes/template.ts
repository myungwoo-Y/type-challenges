type Equal<T, U> = (<G>() => G extends T ? 1 : 2) extends
(<G>() => G extends U ? 1 : 2) ? true : false

type Includes<T extends readonly unknown[], U> = T extends [infer First, ...infer Last]
  ? Equal<First, U> extends true
    ? true
    : Includes<Last, U>
  : false
