import { Hono } from 'hono'
import { Ja } from './pages/privacyPolicies/ja'
import { En } from './pages/privacyPolicies/en'

const app = new Hono()

app.get('/privacy', (c) => {
  const lang = c.req.query('lang');
  if (lang === 'ja') {
    return c.html(<Ja />);
  }

  return c.html(<En />);
})

export default app
