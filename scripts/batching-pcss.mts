
import {$, argv} from 'zx'


const getItemsStylesDir = async () => {
    return await $`ls src/assets/styles`;
}

export const dev = async () => {
    const styles = (await getItemsStylesDir()).stdout.split('\n');
    styles.splice(styles.length - 1, 1)

    for (const style of styles) {
        $`postcss ./src/assets/styles/${style} --output ./src/stories/styles/${style.split('.')[0]}.css --env development --watch --verbose`
    }
}

export const prod = () => {

}

dev()