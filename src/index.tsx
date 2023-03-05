import React, { Suspense } from 'react';
import { render } from 'react-dom';
import './01_app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import App from './01_app/App';
import { ThemeProvider } from './06_shared/contexts/Theme';
import './06_shared/config/i18n';

const root = document.getElementById('root');

render(
    <BrowserRouter>
        <ThemeProvider>
            <Suspense fallback="">
                <App />
            </Suspense>
        </ThemeProvider>
    </BrowserRouter>,
    root,
);
