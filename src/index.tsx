import {render} from "react-dom";
import "./app/styles/index.scss";
import App from "./app/App";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "shared/contexts/themeContext";

const root = document.getElementById('root');

render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>,
    root
);