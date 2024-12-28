import Image from 'next/image'

const FounderPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-dark-text">創設者紹介</h1>
      <div className="bg-white dark:bg-dark-surface rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row items-center">
          <Image
            src="/images/founder/iwasawa-photo.jpg"
            alt="岩沢太の写真"
            width={300}
            height={300}
            className="rounded-lg mb-4 md:mb-0 md:mr-8"
          />
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-dark-text">岩沢 太</h2>
            <p className="text-gray-600 dark:text-dark-text-muted mb-4">えん鍼 創設者 / 鍼灸師 / エンジニア</p>
            <p className="text-gray-700 dark:text-dark-text mb-4">
              鍼灸師として10年以上のキャリアを持ち、2023年には海外クルーズ船にて多くの方の健康をサポートしてまいりました。
              帰国後、生成AIの可能性に感銘を受け、縁あってスタートアップの世界へ。そこでエンジニアの皆様と交流を深める中で、
              長時間労働やハードな開発業務による身体的な負担を目の当たりにしました。私自身もプログラミングを学ぶ中で、
              肩や目の疲れといったエンジニア特有の悩みを実感するようになりました。鍼灸師として、この状況をなんとかしたい、
              エンジニアの皆様が心身ともに健康で、最高のパフォーマンスを発揮できる環境を作りたい、その想いから「えん鍼」を開院するに至りました。
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-dark-surface rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-dark-text">えん鍼設立の想い</h2>
        <p className="text-gray-700 dark:text-dark-text mb-4">
          私自身、鍼灸師として多くの方の身体の不調と向き合ってきました。同時に、新しい技術を生み出すエンジニアの創造性は、
          社会にとって不可欠なものであると強く感じています。しかし、その創造性を支える身体が悲鳴を上げている現状を何とかしたい。
          海外での経験、スタートアップでの刺激、そしてプログラミングを通じて得たエンジニアリングへの理解。
          これらの経験が私に「エンジニア専門の鍼灸院」という新たな道を指し示しました。
        </p>
        <p className="text-gray-700 dark:text-dark-text mb-4">
          「えん鍼」では、単に不調を改善するだけでなく、鍼灸を通じてエンジニア本来のパフォーマンスを引き出すことを目指します。
          エンジニアの皆様が健康で、情熱を持って仕事に取り組めるよう、全力でサポートさせていただきます。
        </p>
      </div>
      <div className="bg-white dark:bg-dark-surface rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-dark-text">メッセージ</h2>
        <p className="text-gray-700 dark:text-dark-text mb-4">
          エンジニアの皆様、私は鍼灸師とエンジニア、二つの視点を持つからこそ、皆様の抱える課題を深く理解し、
          独自の価値を提供できると確信しています。長時間のデスクワーク、締め切りに追われるストレス、
          集中力を要する作業による目や肩への負担。これらの問題に対して、東洋医学の知恵と最新の技術を融合させた
          アプローチで、皆様の健康とパフォーマンス向上をサポートします。
        </p>
        <p className="text-gray-700 dark:text-dark-text mb-4">
          「えん鍼」を通じて、エンジニアの皆様が心身ともに健康で、創造性を最大限に発揮できる環境を作り出したい。
          そして、皆様の健康とイノベーションが両立する未来を目指しています。共に、テクノロジーと健康の新しい
          関係性を築いていけることを楽しみにしています。
        </p>
        <p className="text-gray-700 dark:text-dark-text">
          皆様のご来院を心よりお待ちしております。一緒に、最高のコンディションで最高のパフォーマンスを発揮できる未来を作りましょう。
        </p>
      </div>
    </div>
  )
}

export default FounderPage

