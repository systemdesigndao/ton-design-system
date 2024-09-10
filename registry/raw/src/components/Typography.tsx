import { jsx } from '@/package/jsx';
import { JSXType, JSXChild } from "@/package/types/jsx";
import { cva } from 'class-variance-authority';

const defaultElement = 'span';

const typographyVariants = cva(
    "text-dark-1 dark:text-white", // not properly working in 'raw'
    {
        variants: {
            type: {
                title1: "text-title1",
                title2: "text-title2",
                title3: "text-title3",
                headline1: "text-headline1",
                headline2: "text-headline2",
                headline3: "text-headline3",
                regular1: "text-regular1",
                regular2: "text-regular2",
                regular3: "text-regular3",
                subtitle1: "text-subtitle1",
                subtitle2: "text-subtitle2",
                subtitle3: "text-subtitle3",
                subtitle4: "text-subtitle4",
                caption1: "text-caption1",
                caption2: "text-caption2",
                caption3: "text-caption3",
                caption4: "text-caption4",
            },
        },
    }
);
  
export const Title1 = ({ type = defaultElement, children }: { type?: JSXType, children: JSXChild }) => {
    return jsx(type, { className: typographyVariants({ type: 'title1' }) }, children);
}

export const Title2 = ({ type = defaultElement, children }: { type?: JSXType, children: JSXChild }) => {
    return jsx(type, { className: typographyVariants({ type: 'title2' }) }, children);
}

export const Title3 = ({ type = defaultElement, children }: { type?: JSXType, children: JSXChild }) => {
    return jsx(type, { className: typographyVariants({ type: 'title3' }) }, children);
}

export const Headline1 = ({ type = defaultElement, children }: { type?: JSXType, children: JSXChild }) => {
    return jsx(type, { className: typographyVariants({ type: 'headline1' }) }, children);
}

export const Headline2 = ({ type = defaultElement, children }: { type?: JSXType, children: JSXChild }) => {
    return jsx(type, { className: typographyVariants({ type: 'headline2' }) }, children);
}

export const Headline3 = ({ type = defaultElement, children }: { type?: JSXType, children: JSXChild }) => {
    return jsx(type, { className: typographyVariants({ type: 'headline3' }) }, children);
}

export const Regular1 = ({ type = defaultElement, children }: { type?: JSXType, children: JSXChild }) => {
    return jsx(type, { className: typographyVariants({ type: 'regular1' }) }, children);
}

export const Regular2 = ({ type = defaultElement, children }: { type?: JSXType, children: JSXChild }) => {
    return jsx(type, { className: typographyVariants({ type: 'regular2' }) }, children);
}

export const Regular3 = ({ type = defaultElement, children }: { type?: JSXType, children: JSXChild }) => {
    return jsx(type, { className: typographyVariants({ type: 'regular3' }) }, children);
}


export const Subtitle1 = ({ type = defaultElement, children }: { type?: JSXType, children: JSXChild }) => {
    return jsx(type, { className: typographyVariants({ type: 'subtitle1' }) }, children);
}

export const Subtitle2 = ({ type = defaultElement, children }: { type?: JSXType, children: JSXChild }) => {
    return jsx(type, { className: typographyVariants({ type: 'subtitle2' }) }, children);
}

export const Subtitle3 = ({ type = defaultElement, children }: { type?: JSXType, children: JSXChild }) => {
    return jsx(type, { className: typographyVariants({ type: 'subtitle3' }) }, children);
}

export const Caption1 = ({ type = defaultElement, children }: { type?: JSXType, children: JSXChild }) => {
    return jsx(type, { className: typographyVariants({ type: 'caption1' }) }, children);
}

export const Caption2 = ({ type = defaultElement, children }: { type?: JSXType, children: JSXChild }) => {
    return jsx(type, { className: typographyVariants({ type: 'caption2' }) }, children);
}

export const Caption3 = ({ type = defaultElement, children }: { type?: JSXType, children: JSXChild }) => {
    return jsx(type, { className: typographyVariants({ type: 'caption3' }) }, children);
}

export const Caption4 = ({ type = defaultElement, children }: { type?: JSXType, children: JSXChild }) => {
    return jsx(type, { className: typographyVariants({ type: 'caption4' }) }, children);
}