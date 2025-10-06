import type { FC } from 'hono/jsx'
import { Layout } from '../layouts'

export const Ja: FC = () => {
  return (
    <Layout lang="ja">
      <div style={{ fontFamily: 'sans-serif', margin: '2em', lineHeight: 1.6 }}>
        <h1>アプリサポートページ</h1>

        <section>
          <h2>お問い合わせ</h2>
          <p>問題や質問がある場合は、以下のリンクからお問い合わせください：</p>
          <ul>
            <li><a href="mailto:support@example.com">メールで問い合わせ</a></li>
          </ul>
        </section>

        <section>
          <h2>サポート時間</h2>
          <p>平日 9:00～18:00（日本時間）に対応しています。</p>
        </section>
      </div>
    </Layout>
  )
}
