import { jsx } from '../package/jsx';
import { JSXType, JSXChild } from "../package/types/jsx"
// --

const defaultElement = 'span';

export const Title1 = ({ type = defaultElement, children }: { type?: JSXType, children: JSXChild }) => {
    return jsx(type, { className: 'text-title1' }, children);
}

export const Title2 = ({ type = defaultElement, children }: { type?: JSXType, children: JSXChild }) => {
    return jsx(type, { className: 'text-title2' }, children);
}

export const Title3 = ({ type = defaultElement, children }: { type?: JSXType, children: JSXChild }) => {
    return jsx(type, { className: 'text-title3' }, children);
}

export const Headline1 = ({ type = defaultElement, children }: { type?: JSXType, children: JSXChild }) => {
    return jsx(type, { className: 'text-headline1' }, children);
}

export const Headline2 = ({ type = defaultElement, children }: { type?: JSXType, children: JSXChild }) => {
    return jsx(type, { className: 'text-headline2' }, children);
}

export const Headline3 = ({ type = defaultElement, children }: { type?: JSXType, children: JSXChild }) => {
    return jsx(type, { className: 'text-headline3' }, children);
}

export const Regular1 = ({ type = defaultElement, children }: { type?: JSXType, children: JSXChild }) => {
    return jsx(type, { className: 'text-regular1' }, children);
}

export const Regular2 = ({ type = defaultElement, children }: { type?: JSXType, children: JSXChild }) => {
    return jsx(type, { className: 'text-regular2' }, children);
}

export const Subtitle1 = ({ type = defaultElement, children }: { type?: JSXType, children: JSXChild }) => {
    return jsx(type, { className: 'text-subtitle1' }, children);
}

export const Subtitle2 = ({ type = defaultElement, children }: { type?: JSXType, children: JSXChild }) => {
    return jsx(type, { className: 'text-subtitle2' }, children);
}

export const Subtitle3 = ({ type = defaultElement, children }: { type?: JSXType, children: JSXChild }) => {
    return jsx(type, { className: 'text-subtitle3' }, children);
}

export const Caption1 = ({ type = defaultElement, children }: { type?: JSXType, children: JSXChild }) => {
    return jsx(type, { className: 'text-caption1' }, children);
}

export const Caption2 = ({ type = defaultElement, children }: { type?: JSXType, children: JSXChild }) => {
    return jsx(type, { className: 'text-caption2' }, children);
}

export const Caption3 = ({ type = defaultElement, children }: { type?: JSXType, children: JSXChild }) => {
    return jsx(type, { className: 'text-caption3' }, children);
}

export const Caption4 = ({ type = defaultElement, children }: { type?: JSXType, children: JSXChild }) => {
    return jsx(type, { className: 'text-caption4' }, children);
}