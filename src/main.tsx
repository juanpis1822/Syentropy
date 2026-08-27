import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import LoadingScreen from './components/LoadingScreen.tsx';
import './index.css';

function Root() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <StrictMode>
      <BrowserRouter>
        {isLoading && <LoadingScreen onFinish={() => setIsLoading(false)} />}
        <App />
      </BrowserRouter>
    </StrictMode>
  );
}

createRoot(document.getElementById('root')!).render(<Root />);
