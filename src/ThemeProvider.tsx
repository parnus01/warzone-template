import { MantineProvider, MantineThemeOverride } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';

export const theme: MantineThemeOverride = {
  colorScheme: 'dark',
  fontFamily: 'SeedFont, sans-serif',
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      <ModalsProvider>
        {
          <>
            <Notifications position={'bottom-left'} />
            {children}
          </>
        }
      </ModalsProvider>
    </MantineProvider>
  );
}
