import van from "vanjs-core";
import { count } from "@/state";

const { div, span, button } = van.tags;

const JointComponent1 = div(
	span({ class: "font-bold text-white-5 dark:text-white-2" }, "❤️", count, " "),
	button({ onclick: () => ++count.val }, "👍"),
	button({ onclick: () => --count.val }, span({}, "👎")),
);

export default JointComponent1;

