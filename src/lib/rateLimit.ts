interface RequestInfo {
  timestamp: number;
  count: number;
}

const requests = new Map<string, RequestInfo>();

const RATE_LIMIT_INTERVAL = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 5; // 5 requests per minute

export function rateLimit(ip: string): boolean {
  const now = Date.now();
  const requestInfo = requests.get(ip);

  if (!requestInfo || (now - requestInfo.timestamp > RATE_LIMIT_INTERVAL)) {
    // First request or interval expired, reset count
    requests.set(ip, { timestamp: now, count: 1 });
    return false;
  } else {
    // Within the interval, increment count
    requestInfo.count++;
    if (requestInfo.count > RATE_LIMIT_MAX_REQUESTS) {
      // Rate limited
      return true;
    }
    requests.set(ip, requestInfo);
    return false;
  }
}

// Clean up old requests periodically (e.g., every 5 minutes)
setInterval(() => {
  const now = Date.now();
  for (const [ip, info] of requests.entries()) {
    if (now - info.timestamp > RATE_LIMIT_INTERVAL * 2) { // Remove entries older than twice the interval
      requests.delete(ip);
    }
  }
}, 5 * 60 * 1000); 