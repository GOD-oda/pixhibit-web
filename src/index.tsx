import { Hono } from 'hono'
import {PrivacyPolicies} from "./pages/privacyPolicies";

const app = new Hono()

app.get('/privacy', (c) => {
  const lang = c.req.query('lang');

  return c.html(<PrivacyPolicies lang={lang} />);
})

export default app
