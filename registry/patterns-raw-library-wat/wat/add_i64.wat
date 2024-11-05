(module
  (func $add_i64 (param $x i64) (param $y i64) (result i64)
    local.get $x
    local.get $y
    i64.add
  )
  (export "add_i64" (func $add_i64))
)