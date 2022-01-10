import { createApp } from 'vue'
import App from './App.vue'
import {registerCustomElements} from '../index';
import "./assets/styles/global.css";

registerCustomElements();

const app = createApp(App);

app.mount('#app');