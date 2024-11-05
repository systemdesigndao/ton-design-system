import './style.css'
import { App } from './App.tsx';
import { render } from './package/jsx.ts';

const appElement = App();

if (appElement instanceof Node) {
    const rootApp = document.querySelector<HTMLDivElement>('#app')!;

    render(rootApp, appElement);
}