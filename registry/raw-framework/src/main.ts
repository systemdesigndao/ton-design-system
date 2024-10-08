import { Title1 } from "./components/Typography";
import { binder, raw, render, tags } from "./package/raw";

const { button, span, div } = tags;

// Компонент для каждого счетчика, создающий свое состояние
const Counter = () => {
    const countState = raw.createState(0);

    // Текстовое значение счетчика с сердцем
    const spanValue = () => binder(countState, () => span({}, `❤️ ${countState.val} `));

    // Кнопка инкремента
    const incrementButton = () =>
        binder(countState, () =>
            button({ onClick: () => countState.set(countState.val + 1) }, "👍")
        );

    // Кнопка декремента
    const decrementButton = () =>
        binder(countState, () =>
            button({ onClick: () => countState.set(countState.val - 1) }, "👎")
        );

    // Кнопка удаления
    const removeButton = () =>
        button({
            onclick: () => {
                counterElement.remove();
            }
        }, "🗑️ Remove");

    // Контейнер для всего счетчика
    const counterElement = div(
        {},
        spanValue(),
        incrementButton(),
        decrementButton(),
        removeButton()
    );

    return counterElement;
};

// Основное приложение, которое отрисовывает 100 счетчиков с кнопками
const App = () => {
    const content = div(
        { class: 'p-sm h-dvh flex flex-col relative dark:bg-black-5 bg-gradient-to-r from-orange-2 to-orange-3 overflow-auto' },
        Title1({ children: span({}, 'Counters') })
    );

    // 1K counters
    Array.from({ length: 1e4 }, () => content.append(Counter()));

    return content;
};

// Рендерим приложение
render(App());