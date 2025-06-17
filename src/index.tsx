import { createRoot } from 'react-dom/client';
import AppSetup from './app/AppSetup';
import App from './app/App';

const rootEl = document.getElementById('root') as HTMLElement;

createRoot(rootEl).render(
  <AppSetup>
    <App />
  </AppSetup>,
);
