import type { FC } from 'hono/jsx'
import { Layout } from '../layouts'

export const En: FC<{contactEmail: string}> = ({contactEmail}) => {
  return (
    <Layout lang="en">
      <h1>Privacy Policy</h1>
      <p>Pixhibit ("the App") values your privacy and is committed to protecting your personal information.</p>

      <h2>1. Information We Collect</h2>
      <ul>
        <li>Usage logs and crash reports</li>
        <li>Analytics data (e.g., via Google Analytics)</li>
      </ul>

      <h2>2. Purpose of Use</h2>
      <ul>
        <li>To provide and improve the service</li>
        <li>To fix bugs and offer user support</li>
      </ul>

      <h2>3. Sharing of Information</h2>
      <p>We do not share personal data with third parties except when required by law.</p>

      <h2>4. Contact</h2>
      <p>For any inquiries regarding privacy, please contact us at:</p>
      <p><a href={`mailto:${contactEmail}`}>{contactEmail}</a></p>

      <p>Effective Date: October 6, 2025</p>
    </Layout>
  );
}
