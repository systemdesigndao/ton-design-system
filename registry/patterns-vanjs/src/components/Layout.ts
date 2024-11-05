import van, { ChildDom } from "vanjs-core";

const { div } = van.tags;

const Layout = ({ children }: { children: ChildDom }) => {
    return div({ class: 'h-screen w-full bg-white-0 dark:bg-white-5' }, children);
}

export default Layout;