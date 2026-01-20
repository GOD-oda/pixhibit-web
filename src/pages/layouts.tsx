import type { FC } from 'hono/jsx'

export const Layout: FC<{ lang?: string; children?: any }> = (props) => {
  return (
    <html lang={props.lang || 'en'}>
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Pixhibit - Privacy Policy</title>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
          line-height: 1.7;
          color: #333;
          background-color: #f9fafb;
          padding: 20px;
        }

        .container {
          max-width: 800px;
          margin: 0 auto;
          background-color: #ffffff;
          padding: 48px;
          border-radius: 12px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        h1 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #111827;
          margin-bottom: 32px;
          padding-bottom: 16px;
          border-bottom: 2px solid #e5e7eb;
        }

        h2 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1f2937;
          margin-top: 48px;
          margin-bottom: 16px;
        }

        h3 {
          font-size: 1.2rem;
          font-weight: 600;
          color: #374151;
          margin-top: 24px;
          margin-bottom: 12px;
        }

        p {
          margin-bottom: 16px;
          color: #4b5563;
        }

        ol, ul {
          margin-bottom: 24px;
          padding-left: 24px;
        }

        ol {
          list-style-type: decimal;
        }

        ul {
          list-style-type: disc;
        }

        li {
          margin-bottom: 12px;
          color: #4b5563;
          padding-left: 8px;
        }

        li strong {
          color: #111827;
          font-weight: 600;
        }

        a {
          color: #2563eb;
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border-color 0.2s;
        }

        a:hover {
          border-bottom-color: #2563eb;
        }

        .footer-text {
          margin-top: 48px;
          padding-top: 24px;
          border-top: 1px solid #e5e7eb;
          font-size: 0.875rem;
          color: #6b7280;
        }

        @media (max-width: 768px) {
          body {
            padding: 12px;
          }

          .container {
            padding: 24px;
          }

          h1 {
            font-size: 2rem;
          }

          h2 {
            font-size: 1.3rem;
            margin-top: 32px;
          }

          h3 {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </head>
    <body>
      <div class="container">
        {props.children}
      </div>
    </body>
    </html>
  );
}
