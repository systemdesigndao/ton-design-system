(module
  (func $add_i32 (param $x i32) (param $y i32) (result i32)
    local.get $x
    local.get $y
    i32.add
  )
  (export "add_i32" (func $add_i32))
)