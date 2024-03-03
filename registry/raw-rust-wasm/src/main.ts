import './style.css'
import { App } from './App.tsx';
import { render } from './package/jsx.ts';
import init from '@/rust_wasm_module/rust_wasm_module';

init().then((module) => console.log(module.greet()));

const appElement = App();

if (appElement instanceof Node) {
    const rootApp = document.querySelector<HTMLDivElement>('#app')!;

    render(rootApp, appElement);
}