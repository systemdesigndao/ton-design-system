import { jsx } from './package/jsx'

import { Button } from "./components/Button"
import { Caption1, Caption2, Caption3, Caption4, Headline1, Headline2, Headline3, Regular1, Regular2, Subtitle1, Subtitle2, Subtitle3, Title1, Title2, Title3 } from './components/Typography'

// [...args]: any, rslt: 'number' | 'string'
async function callWasm<T>(module: 'add_i32.wasm' | 'add_i64.wasm' | 'factorial.wasm' = "add_i32.wasm" as const) {
  try {
    const response = await fetch(module);
    const wasmModule = await WebAssembly.instantiateStreaming(response);
    const fn = wasmModule.instance.exports;
    return fn as T;
  } catch (err) {
    throw new Error(err?.toString());
  }
}

type WasmAdd_i32Module = { add_i32: any };

async function add_i32Module() {
  try {
    const wasm = await callWasm<WasmAdd_i32Module>('add_i32.wasm');
    return wasm
  } catch (err) {
    throw new Error(err?.toString());
  }
}

type WasmAdd_i64Module = { add_i64: any };

async function add_i64Module() {
  try {
    const wasm = await callWasm<WasmAdd_i64Module>('add_i64.wasm');
    return wasm
  } catch (err) {
    throw new Error(err?.toString());
  }
}

type WasmFactorialModule = { factorial: (x: bigint) => bigint };

async function factorialModule() {
  try {
    const wasm = await callWasm<WasmFactorialModule>('factorial.wasm');
    return wasm
  } catch (err) {
    throw new Error(err?.toString());
  }
}

export const App = () => {
  return (
    <div className='px-2 py-2 h-full flex flex-col'>
      <Button className="custom-classname w-fit">Cross-platform button (default)</Button>
      <div className="flex flex-col">
        <Title1>Title1</Title1>
        <Title2>Title2</Title2>
        <Title3>Title3</Title3>
        <Headline1>Headline1</Headline1>
        <Headline2>Headline2</Headline2>
        <Headline3>Headline3</Headline3>
        <Regular1>Regular1</Regular1>
        <Regular2>Regular2</Regular2>
        <Subtitle1>Subtitle1</Subtitle1>
        <Subtitle2>Subtitle2</Subtitle2>
        <Subtitle3>Subtitle 3</Subtitle3>
        <Caption1>Caption1</Caption1>
        <Caption2>Caption 2</Caption2>
        <Caption3>Caption 3</Caption3>
        <Caption4>Caption 4</Caption4>
      </div>

      <Button className="custom-classname w-fit" onClick={async () => {
        const result = (await factorialModule()).factorial(5n)
        console.log(result);
      }}>factorial(5n)</Button>
      <Button className="custom-classname w-fit" onClick={async () => {
        const add_i64Result = (await add_i32Module()).add_i32(1, 2);
        console.log(add_i64Result);
      }}>1 + 2 = 3 (i32)</Button>
      <Button className="custom-classname w-fit" onClick={async () => {
        const add_i64Result = (await add_i64Module()).add_i64(1n, 2n);
        console.log(add_i64Result);
      }}>1n + 2n = 3n (i64)</Button>
    </div>
  )
}