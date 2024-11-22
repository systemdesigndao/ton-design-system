import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export const Lottie = (props: Parameters<typeof DotLottieReact>[0]) => {
    return <DotLottieReact {...props} />
}