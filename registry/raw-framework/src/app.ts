
import { signal, tags } from './package/raw';

const { div, span, button } = tags;

function Counter() {
    let count = signal(0);

    return div({},
        span({}, "❤️ ", count, " "),
        button({ onclick: () => count.set(count.get() + 1) }, "👍"),
        button({ onclick: () => count.set(count.get() - 1) }, tags.span({}, '👎')),
    );
}

export function App() {
    let content = div({ class: 'p-sm h-dvh flex flex-col relative dark:bg-black-5 bg-gradient-to-r from-orange-2 to-orange-3 overflow-auto' });
    let i = 0;
    let lessThan = (x: number) =>  i < x;
    while (lessThan(1e4)) {
        i++;
        content.appendChild(Counter());
    }
    return content;
}