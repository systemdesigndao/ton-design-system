(module
  (func $factorial (param $n i64) (result i64)
    (local $result i64)
    (local.set $result (i64.const 1))
    (block $break
      (loop $loop
        (br_if $break (i64.eqz (local.get $n)))
        (local.set $result
          (i64.mul (local.get $result) (local.get $n))
        )
        (local.set $n
          (i64.sub (local.get $n) (i64.const 1))
        )
        (br $loop)
      )
    )
    (local.get $result)
  )
  (export "factorial" (func $factorial))
)
