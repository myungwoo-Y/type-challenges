type MyAwaited<T> = T extends PromiseLike<infer inner> ? MyAwaited<inner> : T
