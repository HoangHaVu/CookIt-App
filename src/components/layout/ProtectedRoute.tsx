import { Navigate } from 'react-router-dom';
import { useAppStore } from '../../lib/store';
import type { ReactNode } from 'react';

export function ProtectedRoute({ children }: { children: ReactNode }) {
  const isAuthenticated = useAppStore((s) => s.isAuthenticated);
  return isAuthenticated ? <>{children}</> : <Navigate to="/onboarding" replace />;
}
