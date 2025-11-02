import { Hono } from 'hono'
import {PrivacyPolicies} from "./pages/privacyPolicies";
import {Supports} from "./pages/supports";

export type Bindings = {
  CONTACT_EMAIL: string;
}

const app = new Hono<{Bindings: Bindings}>()

app.get('/privacy', (c) => {
  const lang = c.req.query('lang');

  return c.html(<PrivacyPolicies env={c.env} lang={lang} />);
})

app.get('/support', (c) => {
  const lang = c.req.query('lang');

  return c.html(<Supports env={c.env} lang={lang} />);
})

export default app
