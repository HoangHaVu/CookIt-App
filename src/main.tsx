import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ErrorBoundary } from './components/layout/ErrorBoundary'
import './index.css'

// Apply persisted dark mode before first render to avoid flash
try {
  const stored = localStorage.getItem('cookit-storage');
  if (stored) {
    const parsed = JSON.parse(stored);
    if (parsed?.state?.darkMode === true) {
      document.documentElement.classList.add('dark');
    }
  }
} catch {
  // ignore localStorage errors
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
    </React.StrictMode>
)
