import React, {Suspense} from 'react';
import {render} from "react-dom";
import "./app/styles/index.scss";
import App from "./app/App";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "shared/contexts/Theme";
import './shared/config/i18n';

const root = document.getElementById('root');

render(
    <BrowserRouter>
        <ThemeProvider>
            <Suspense fallback="">
                <App/>
            </Suspense>
        </ThemeProvider>
    </BrowserRouter>,
    root
);