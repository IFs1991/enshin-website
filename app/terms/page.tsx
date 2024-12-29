import React from 'react';

export default function Terms() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">特定商取引法に基づく表記</h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">事業者の名称</h2>
          <p>えん鍼</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">代表者名</h2>
          <p>[代表者名を入力]</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">所在地</h2>
          <p>[所在地を入力]</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">連絡先</h2>
          <p>電話番号：[電話番号を入力]</p>
          <p>メールアドレス：[メールアドレスを入力]</p>
          <p>受付時間：[営業時間を入力]</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">料金</h2>
          <div className="space-y-2">
            <p>施術料金：[料金体系を入力]</p>
            <p>※価格はすべて税込表示となります。</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">予約・キャンセルについて</h2>
          <div className="space-y-2">
            <p>予約方法：オンライン予約システム、お電話にて承ります。</p>
            <p>キャンセル料：</p>
            <ul className="list-disc pl-6">
              <li>予約日の前日まで：無料</li>
              <li>予約当日：施術料金の50%</li>
              <li>無断キャンセル：施術料金の100%</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">支払方法</h2>
          <div className="space-y-2">
            <p>以下の支払方法をご利用いただけます：</p>
            <ul className="list-disc pl-6">
              <li>現金</li>
              <li>クレジットカード（VISA, MasterCard, JCB, American Express）</li>
              <li>電子マネー（PayPay, LINE Pay）</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">施術について</h2>
          <div className="space-y-2">
            <p>施術時間：[施術時間を入力]</p>
            <p>施術内容：[施術内容の概要を入力]</p>
            <p>※施術の効果には個人差があります。</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">返金・返品について</h2>
          <div className="space-y-2">
            <p>施術サービスの性質上、原則として返金はお受けできません。</p>
            <p>ただし、当院の責めに帰すべき事由がある場合は、個別にご相談させていただきます。</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">その他の特記事項</h2>
          <div className="space-y-2">
            <p>・施術前の体調確認をさせていただきます。</p>
            <p>・体調不良や妊娠中の方は、事前にご相談ください。</p>
            <p>・重度の疾患をお持ちの方は、医師に相談の上でご利用ください。</p>
          </div>
        </section>
      </div>

      <p className="text-sm text-gray-600 mt-8">
        最終更新日：2023年12月25日
      </p>
    </div>
  );
}