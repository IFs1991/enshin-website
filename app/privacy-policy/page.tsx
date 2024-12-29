import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">プライバシーポリシー</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. 個人情報の取り扱いについて</h2>
        <p className="mb-4">えん鍼（以下、「当院」）は、お客様の個人情報保護の重要性を認識し、以下の方針に基づき個人情報の保護に努めます。</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. 収集する個人情報の範囲</h2>
        <p className="mb-4">当院は、以下の個人情報を収集する場合があります：</p>
        <ul className="list-disc pl-6 mb-4">
          <li>氏名</li>
          <li>電話番号</li>
          <li>メールアドレス</li>
          <li>住所</li>
          <li>予約に関する情報</li>
          <li>健康状態に関する情報</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. 個人情報の利用目的</h2>
        <p className="mb-4">収集した個人情報は、以下の目的で利用いたします：</p>
        <ul className="list-disc pl-6 mb-4">
          <li>施術予約の管理・確認</li>
          <li>施術サービスの提供</li>
          <li>お客様との連絡・対応</li>
          <li>サービス改善のための分析</li>
          <li>当院からのお知らせの送付</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. 個人情報の第三者提供</h2>
        <p className="mb-4">当院は、以下の場合を除き、お客様の個人情報を第三者に提供いたしません：</p>
        <ul className="list-disc pl-6 mb-4">
          <li>お客様の同意がある場合</li>
          <li>法令に基づく場合</li>
          <li>人の生命、身体または財産の保護のために必要な場合</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. 個人情報の安全管理</h2>
        <p className="mb-4">当院は、個人情報の漏洩、滅失、毀損の防止その他の個人情報の安全管理のために必要かつ適切な措置を講じます。</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. 個人情報の開示・訂正・削除</h2>
        <p className="mb-4">お客様は、当院が保有する個人情報の開示、訂正、削除等を請求することができます。その場合は、当院の連絡窓口までご連絡ください。</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. プライバシーポリシーの変更</h2>
        <p className="mb-4">当院は、必要に応じて本プライバシーポリシーを変更することがあります。変更後のプライバシーポリシーは、当ウェブサイトに掲載した時点から効力を生じるものとします。</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. お問い合わせ窓口</h2>
        <p className="mb-4">
          個人情報の取り扱いに関するお問い合わせは、以下の連絡先までご連絡ください：<br />
          えん鍼<br />
          電話番号：[電話番号を入力]<br />
          メールアドレス：[メールアドレスを入力]<br />
          受付時間：[営業時間を入力]
        </p>
      </section>

      <p className="text-sm text-gray-600 mt-8">
        制定日：2023年12月25日<br />
        最終更新日：2023年12月25日
      </p>
    </div>
  );
}