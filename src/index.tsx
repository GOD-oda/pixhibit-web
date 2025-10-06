import { Hono } from 'hono'
import {PrivacyPolicies} from "./pages/privacyPolicies";
import {Supports} from "./pages/supports";

const app = new Hono()

app.get('/privacy', (c) => {
  const lang = c.req.query('lang');

  return c.html(<PrivacyPolicies lang={lang} />);
})

app.get('/support', (c) => {
  const lang = c.req.query('lang');

  return c.html(<Supports lang={lang} />);
})

export default app
