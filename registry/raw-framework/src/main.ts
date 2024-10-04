import { Title1 } from "./components/Typography";
import { raw, render, tags } from "./package/raw";

const { button, span, div } = tags;

// just array of [0, ..., 99]
const counters = Array.from({ length: 100 });

export const Counter = () => {
    // reactive state
    const state = raw.createState(0);
    // reactive update dom
    const updateSpan = () => {
        spanValue.replaceChildren(span({}, `❤️ ${state.val} `));
    };
    // reactive subscription to update dom
    state.subscribers.add(updateSpan);
    // components with reactive actions
    const incrementButton = button({
        onclick: () => state.set(state.val + 1),
    }, "👍");
    const decrementButton = button({
        onclick: () => state.set(state.val - 1),
    }, "👎");
    const spanValue = span({}, `❤️ ${state.val} `);
    const removeButton = button({
        // or onClick, doesn't matter
        onclick: () => {
            counterElement.remove();
            // unsubscribe to update dom
            state.subscribers.delete(updateSpan);
        },
    }, "🗑️ Remove");
    const counterElement = div({}, spanValue, incrementButton, decrementButton, removeButton);
    return counterElement;
};

function App() {
    // main content
    const content = div({ class: 'p-sm h-dvh flex flex-col relative dark:bg-black-5 bg-gradient-to-r from-orange-2 to-orange-3 overflow-auto' });
    // append Title1
    content.append(Title1({ children: span({}, 'Counters') }));
    // append Counters
    counters.forEach(() => {
        const counterElement = Counter();
        content.append(counterElement);
    });
    return content;
}

render(App());
