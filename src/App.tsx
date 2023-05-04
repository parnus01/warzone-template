import { ClerkProvider } from '@clerk/clerk-react';
import { ThemeProvider } from './ThemeProvider';
import { AppRoutes } from './routes';
import { BrowserRouter } from 'react-router-dom';

export default function App() {
  const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
  return (
    <BrowserRouter>
      <ThemeProvider>
        <ClerkProvider publishableKey={clerkPubKey}>
          <AppRoutes />
        </ClerkProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
