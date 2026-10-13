/**
 * Console Welcome Message
 * Displays a friendly message in the console explaining the development environment
 */

export function displayWelcomeMessage(): void {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  // Clear console for a fresh start (optional)
  // console.clear();

  // Atlas Sanctum header
  console.log(
    '%c🏛️ Atlas Sanctum RVX Platform',
    'font-size: 18px; font-weight: bold; color: #10b981; font-family: system-ui;'
  );

  console.log(
    '%cRegenerative Value Exchange • Value Beyond Profit',
    'font-size: 12px; color: #64748b; font-family: system-ui;'
  );

  console.log(''); // Blank line

  // Development info
  console.log(
    '%c📊 Platform Metrics',
    'font-size: 14px; font-weight: bold; color: #3b82f6;'
  );

  console.log('%c├─ Total Regenerative Value: $1.34T', 'color: #64748b;');
  console.log('%c├─ Active RVT Tokens: 847M', 'color: #64748b;');
  console.log('%c├─ Beneficiaries Served: 35.2M', 'color: #64748b;');
  console.log('%c└─ Verification Rate: 83%', 'color: #64748b;');

  console.log(''); // Blank line

  // Important note about Figma Make warnings
  console.log(
    '%c⚠️  Development Environment Note',
    'font-size: 14px; font-weight: bold; color: #f59e0b;'
  );

  console.log(
    '%cYou may see warnings from "figma.com/devtools_worker" or similar sources.',
    'color: #94a3b8;'
  );

  console.log(
    '%cThese are normal Figma Make development environment messages and do not affect functionality.',
    'color: #94a3b8; font-style: italic;'
  );

  console.log(
    '%cThey will not appear in production deployments.',
    'color: #94a3b8; font-style: italic;'
  );

  console.log(''); // Blank line

  // Helpful dev info
  console.log(
    '%c🛠️  Development Tools',
    'font-size: 14px; font-weight: bold; color: #8b5cf6;'
  );

  console.log(
    '%cError Handler:',
    'color: #64748b; font-weight: bold;'
  );
  console.log(
    '%c  import { errorHandler } from "./lib/errorHandler";',
    'color: #94a3b8; font-family: monospace; font-size: 11px;'
  );

  console.log(
    '%cDocumentation:',
    'color: #64748b; font-weight: bold;'
  );
  console.log(
    '%c  See /ERROR_HANDLING_GUIDE.md for details',
    'color: #94a3b8; font-family: monospace; font-size: 11px;'
  );

  console.log(''); // Blank line

  console.log(
    '%c✨ Ready to build regenerative impact!',
    'font-size: 12px; color: #10b981; font-weight: bold;'
  );

  console.log(''); // Final blank line
}

// Auto-display when imported
if (typeof window !== 'undefined') {
  displayWelcomeMessage();
}
