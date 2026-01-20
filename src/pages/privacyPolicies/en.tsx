import type { FC } from 'hono/jsx'
import { Layout } from '../layouts'

export const En: FC<{contactEmail: string}> = ({contactEmail}) => {
  return (
    <Layout lang="en">
      <h1>Privacy Policy</h1>
      <p>Pixhibit (hereinafter referred to as "the Company") values the protection of users' personal information and commits to handling it appropriately. This Privacy Policy sets forth the handling of personal information in the services provided by the Company (hereinafter referred to as "the Service").</p>

      <h2>Article 1 (Definitions)</h2>
      <p>The definitions of terms used in this Privacy Policy are as follows:</p>
      <ol>
        <li><strong>"Personal Information"</strong> refers to information that can identify a specific individual, such as name, email address, and other descriptions.</li>
        <li><strong>"History Information and Characteristic Information"</strong> refers to the history of services used, products purchased, pages and advertisements viewed, search keywords, date and time of use, method of use, usage environment, IP address, cookie information, location information, device identification information, etc.</li>
        <li><strong>"Personal Related Information"</strong> refers to information about a living individual that does not fall under any of the categories of personal information, pseudonymized information, or anonymized information.</li>
      </ol>

      <h2>Article 2 (Purpose of Use)</h2>
      <p>The Company uses the collected information for the following purposes:</p>
      <ol>
        <li>To provide, maintain, protect, and improve the Service</li>
        <li>To provide guidance regarding the Service and respond to inquiries</li>
        <li>To analyze and research the usage status of the Service</li>
        <li>To fix bugs and provide user support</li>
        <li>To investigate and respond to violations of terms related to the Service</li>
        <li>To improve the Service and develop new features</li>
        <li>To create and analyze statistical data</li>
        <li>To verify user identity</li>
        <li>To comply with legal requirements</li>
        <li>For purposes incidental to the above</li>
      </ol>

      <h2>Article 3 (Provision to Third Parties)</h2>
      <p>The Company will not provide personal information to third parties without user consent, except in the following cases:</p>
      <ol>
        <li>When based on laws and regulations</li>
        <li>When it is necessary for the protection of the life, body, or property of an individual and it is difficult to obtain the consent of the person</li>
        <li>When it is particularly necessary for improving public health or promoting the sound growth of children and it is difficult to obtain the consent of the person</li>
        <li>When it is necessary to cooperate with a national agency, a local government, or an individual or entity entrusted by them in executing affairs prescribed by laws and regulations, and obtaining the consent of the person is likely to impede the execution of such affairs</li>
      </ol>

      <h2>Article 4 (Disclosure of Personal Data)</h2>
      <p>Users may make the following requests to the Company in accordance with the provisions of the Personal Information Protection Act:</p>
      <ol>
        <li>Disclosure of personal data</li>
        <li>Correction, addition, or deletion of personal data</li>
        <li>Suspension or erasure of use of personal data</li>
        <li>Suspension of provision of personal data to third parties</li>
      </ol>
      <p>To make the above requests, please contact us at the inquiry address listed at the end of this policy. The Company will respond in accordance with laws and regulations after confirming your identity.</p>

      <h2>Article 5 (Changes to the Privacy Policy)</h2>
      <p>The Company may change this Privacy Policy due to legal amendments, changes to the Service, or other reasons. The revised Privacy Policy shall become effective when posted on this website.</p>

      <h2>Article 6 (Inquiries)</h2>
      <p>For inquiries regarding this Privacy Policy, please contact us at:</p>
      <p><a href={`mailto:${contactEmail}`}>{contactEmail}</a></p>

      <div class="footer-text">
        <p>Effective Date: October 6, 2025</p>
        <p>Last Revised: January 20, 2026</p>
      </div>
    </Layout>
  );
}
