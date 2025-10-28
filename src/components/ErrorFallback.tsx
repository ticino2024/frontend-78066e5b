import { FallbackProps } from 'react-error-boundary';
import { AlertCircle, RefreshCw } from 'lucide-react';

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full">
          <AlertCircle className="w-6 h-6 text-red-600" />
        </div>
        <h1 className="mt-4 text-2xl font-bold text-center text-gray-900">
          Oops! Something went wrong
        </h1>
        <p className="mt-2 text-center text-gray-600">
          We encountered an unexpected error. Please try refreshing the page.
        </p>
        {error && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-700 font-mono break-all">
              {error.message}
            </p>
          </div>
        )}
        <button
          onClick={resetErrorBoundary}
          className="mt-6 w-full btn btn-primary flex items-center justify-center gap-2"
        >
          <RefreshCw className="w-4 h-4" />
          Try Again
        </button>
      </div>
    </div>
  );
}

export default ErrorFallback;
