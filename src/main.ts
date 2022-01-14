import { createApp } from 'vue'
import App from './App.vue'
import {registerCustomElements, getAllCustomElementsNames} from '../index';
import "./assets/styles/global.css";

registerCustomElements();

getAllCustomElementsNames();

const app = createApp(App);

app.mount('#app');