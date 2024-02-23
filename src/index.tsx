import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import App from './app/App';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import 'shared/config/i18n/i18n';


import { createRoot } from 'react-dom/client';
import { StoreProvider } from 'app/providers/StoreProvider';

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(
    <StoreProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>

);
