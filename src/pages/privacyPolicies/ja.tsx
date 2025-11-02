import type { FC } from 'hono/jsx'
import { Layout } from '../layouts'

export const Ja: FC<{contactEmail: string}> = ({contactEmail}) => {
  return (
    <Layout lang="ja">
      <h1>プライバシーポリシー</h1>
      <p>Pixhibit（以下「当アプリ」）は、ユーザーの個人情報を適切に取り扱うことを重視しています。</p>

      <h2>1. 収集する情報</h2>
      <ul>
        <li>アプリ利用時の操作ログやエラーログ</li>
        <li>利用状況などの分析データ（Google Analytics などを使用する場合）</li>
      </ul>

      <h2>2. 利用目的</h2>
      <ul>
        <li>サービスの提供および品質向上</li>
        <li>不具合の修正やユーザーサポート</li>
      </ul>

      <h2>3. 第三者への提供</h2>
      <p>法令に基づく場合を除き、第三者に個人情報を提供することはありません。</p>

      <h2>4. お問い合わせ</h2>
      <p>プライバシーに関するお問い合わせは以下までお願いいたします：</p>
      <p><a href={`mailto:${contactEmail}`}>{contactEmail}</a></p>

      <p>制定日：2025年10月6日</p>
    </Layout>
  );
}
