import type { FC } from 'hono/jsx'
import { Layout } from '../layouts'

export const En: FC<{contactEmail: string}> = ({contactEmail}) => {
  return (
    <Layout lang="en">
      <div style={{ fontFamily: 'sans-serif', margin: '2em', lineHeight: 1.6 }}>
        <h1>App Support Page</h1>

        <section>
          <h2>Contact Us</h2>
          <p>If you have any issues or questions, please contact us via the links below:</p>
          <ul>
            <li><a href={`mailto:${contactEmail}`}>Contact via email</a></li>
          </ul>
        </section>

        <section>
          <h2>Support Hours</h2>
          <p>We respond on weekdays from 9:00 to 18:00 JST.</p>
        </section>
      </div>
    </Layout>
  )
}
