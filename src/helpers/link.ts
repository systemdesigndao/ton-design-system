export const openLinkInNewTab = (link?: string) => {
    if (link !== undefined) window.open(link, '_blank');
}