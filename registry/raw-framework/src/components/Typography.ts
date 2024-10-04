import { TagFunction, tags } from '@/package/raw';

const { a } = tags;
const defaultClassNames = "text-black-5 dark:text-white-1";

const variants = {
    title1: "text-title1 font-bolder",
};

export const Title1 = ({ type = a, children }: { type?: TagFunction, children: HTMLElement }) => {
    return type({ class: `${defaultClassNames} ${variants.title1}` }, children);
}