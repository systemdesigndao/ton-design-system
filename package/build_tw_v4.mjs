import esbuild from "esbuild";
import cssModulesPlugin from "esbuild-css-modules-plugin";

esbuild.build({
  entryPoints: ["./tw_v4.ts"],
  bundle: true,
  outdir: "../lib",
  format: "esm",
  plugins: [cssModulesPlugin()],
  loader: { ".css": "css" },
});
