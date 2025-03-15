import van from "vanjs-core";
import App from "./app";
import "./index.css";

const app = document.querySelector<HTMLDivElement>("#app");

app && van.add(app, App());
