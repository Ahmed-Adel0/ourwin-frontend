/**
 * Logger Utility
 *
 * Safe logging utility that only logs in development mode
 * Prevents data leakage in production
 */

const isDev = process.env.NODE_ENV === "development";

export const logger = {
  /**
   * Log information (development only)
   * @param {...any} args - Arguments to log
   */
  log: (...args) => {
    if (isDev) {
      console.log("[LOG]", ...args);
    }
  },

  /**
   * Log errors (always logged, but sanitized in production)
   * @param {...any} args - Arguments to log
   */
  error: (...args) => {
    if (isDev) {
      console.error("[ERROR]", ...args);
    } else {
      // In production, only log error messages, not sensitive data
      const sanitized = args.map((arg) => {
        if (typeof arg === "object" && arg !== null) {
          // Remove sensitive fields
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { password, token, apiKey, ...safe } = arg;
          return safe;
        }
        return arg;
      });
      console.error("[ERROR]", ...sanitized);
    }
  },

  /**
   * Log warnings (development only)
   * @param {...any} args - Arguments to log
   */
  warn: (...args) => {
    if (isDev) {
      console.warn("[WARN]", ...args);
    }
  },

  /**
   * Log debug information (development only)
   * @param {...any} args - Arguments to log
   */
  debug: (...args) => {
    if (isDev) {
      console.debug("[DEBUG]", ...args);
    }
  },
};

export default logger;
