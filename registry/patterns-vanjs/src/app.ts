import "./style.css";
import van from "vanjs-core";
import { count } from "./state";

const { div, span, button } = van.tags;

const App = () => {
  return div(
    { class: '' },
    span({}, "❤️", count, " "),
    button({ onclick: () => ++count.val }, "👍"),
    button({ onclick: () => --count.val }, span({}, '👎')),
  );
};

export default App;