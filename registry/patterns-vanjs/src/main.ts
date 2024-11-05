import "./style.css";
import van from "vanjs-core";
import App from "./app";

const app = document.querySelector<HTMLDivElement>("#app");

app && van.add(app, App());
