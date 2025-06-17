import { StrictMode, type FC, type ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '../components/ErrorFallback';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '../api/queryClient.ts';
import { CartProvider } from '../contexts/CartContext.tsx';
import { BrowserRouter } from 'react-router-dom';

interface Props {
  children: ReactNode;
}

const AppSetup: FC<Props> = ({ children }) => {
  return (
    <StrictMode>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <QueryClientProvider client={queryClient}>
          <CartProvider>
            <BrowserRouter>{children}</BrowserRouter>
          </CartProvider>
        </QueryClientProvider>
      </ErrorBoundary>
    </StrictMode>
  );
};

export default AppSetup;
