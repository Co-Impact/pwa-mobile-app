import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ThemeProvider} from "./theme/ThemeProvider.tsx";
import {CacheProviderRTL} from "./theme/CacheProvider.tsx";

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <CacheProviderRTL>
          <ThemeProvider>
              <QueryClientProvider client={queryClient}>
                  <App />
              </QueryClientProvider>
          </ThemeProvider>
      </CacheProviderRTL>
  </StrictMode>,
)
