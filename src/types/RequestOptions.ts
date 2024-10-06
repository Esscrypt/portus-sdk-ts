export interface RequestOptions {
    version?: string;
    network?: string;
    debug?: boolean;
    enableRetry?: boolean;
    maxRetries?: number;
    retryDelay?: number; // in milliseconds
    source?: string;
    [key: string]: any; // Allow for any additional options
  }
  