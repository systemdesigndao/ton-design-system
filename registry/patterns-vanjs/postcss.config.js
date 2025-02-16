import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import tailwindcss from "@tailwindcss/postcss";

export default {
	plugins: [
		tailwindcss(),
		autoprefixer(),
		...(process.env.NODE_ENV === "production"
			? [cssnano({ preset: "default" })]
			: []),
	],
};
