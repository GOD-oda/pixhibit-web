import type { FC } from 'hono/jsx'

export const Layout: FC<{ lang?: string; children?: any }> = (props) => {
  return (
    <html lang={props.lang || 'en'}>
    <head>
      <meta charSet="utf-8" />
      <title>Pixhibit</title>
    </head>
    <body>{props.children}</body>
    </html>
  );
}
