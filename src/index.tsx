import {render} from "react-dom";
import "./index.scss";
import App from "./App";
import {BrowserRouter} from "react-router-dom";

const root = document.getElementById('root');

render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    root
);