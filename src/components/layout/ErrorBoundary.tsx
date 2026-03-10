import { Component } from 'react';
import type { ReactNode, ErrorInfo } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  message: string;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, message: '' };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, message: error.message };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('[ErrorBoundary]', error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center px-8 text-center bg-background-light dark:bg-background-dark">
          <div className="size-24 rounded-[2rem] bg-primary/10 flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-5xl text-primary font-black">error</span>
          </div>
          <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 dark:text-slate-100 mb-3">
            Something went wrong
          </h2>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-8 max-w-[280px]">
            {this.state.message || 'An unexpected error occurred.'}
          </p>
          <button
            onClick={() => this.setState({ hasError: false, message: '' })}
            className="bg-primary text-white px-10 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-lg shadow-primary/20 hover:bg-orange-600 active:scale-95 transition-all"
          >
            Try Again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
