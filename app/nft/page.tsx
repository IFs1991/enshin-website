import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const NFTPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-dark-text">NFTについて</h1>
      <div className="bg-white dark:bg-dark-surface rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-dark-text">えん鍼NFTの概要</h2>
        <div className="flex flex-col md:flex-row items-center mb-4">
          <Image src="/placeholder.svg" alt="えん鍼NFTデザイン" width={300} height={300} className="rounded-lg mb-4 md:mb-0 md:mr-4" />
          <div>
            <p className="mb-2 text-gray-700 dark:text-dark-text"><strong>発行数:</strong> 200個</p>
            <p className="mb-2 text-gray-700 dark:text-dark-text"><strong>コントラクトアドレス:</strong> 0x1234...5678</p>
            <p className="mb-4 text-gray-600 dark:text-dark-text-muted">えん鍼NFTは、施術体験とデジタルアートを組み合わせたユニークな体験型NFTです。チケットとして購入し、実際の施術を受けることで、高画質版のNFTがエアドロップされます。このNFTは、えん鍼コミュニティの一員であることを証明し、様々な特典を受けられる鍵となります。</p>
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-dark-surface rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-dark-text">NFT購入方法</h2>
        <ol className="list-decimal list-inside mb-4 text-gray-700 dark:text-dark-text">
          <li className="mb-2">チケミーでNFTチケットを購入する</li>
          <li className="mb-2">購入したチケットを使用して施術を受ける</li>
          <li className="mb-2">施術後、高画質版で二次流通可能なNFTがエアドロップされる</li>
        </ol>
        <p className="mb-4 text-gray-600 dark:text-dark-text-muted">
          NFTチケットを購入し、実際に施術を受けることで、えん鍼の体験とデジタルアートの両方を手に入れることができます。
          エアドロップされるNFTは二次流通が可能で、将来的な価値の上昇が期待できます。
        </p>
        <Link href="https://tixee.me" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
          チケミーでえん鍼NFTチケットを購入する →
        </Link>
      </div>
      <div className="bg-white dark:bg-dark-surface rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-dark-text">なぜNFTを使うのか</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-dark-text">エンジニアの魂を宿すデジタル証明</h3>
          <p className="text-gray-600 dark:text-dark-text-muted">
            コードがGitHubに刻まれるように、施術体験はNFTに刻まれます。これは単なる記録ではなく、自己投資の証であり、
            技術者としてのアイデンティティを表現するものです。えん鍼のNFTは、あなたが自身の健康とパフォーマンス向上に
            真剣に取り組んでいることを示す、デジタル時代の勲章とも言えるでしょう。
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-dark-text">無形の施術を、未来へのデジタルアセットへ</h3>
          <p className="text-gray-600 dark:text-dark-text-muted">
            施術という無形の体験を、唯一無二のNFTとしてデジタル化します。これは単に思い出を記録するだけでなく、
            あなたの健康へのコミットメントを表すデジタル資産となります。さらに、えん鍼の評価が高まるにつれて、
            このNFTの価値も上昇する可能性があります。健康投資が、文字通り価値を生み出す未来を想像してみてください。
          </p>
        </div>
      </div>
      <div className="bg-white dark:bg-dark-surface rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-dark-text">NFT保有者特典</h2>
        <ul className="list-disc list-inside mb-4 text-gray-600 dark:text-dark-text-muted">
          <li>限定イベントへの参加権</li>
          <li>えん鍼施術の優先予約権</li>
          <li>えん鍼コミュニティへのアクセス権</li>
          <li>特別な健康情報や技術情報の提供</li>
        </ul>
        <p className="mb-4 text-gray-600 dark:text-dark-text-muted">
          えん鍼の知名度が上がるにつれて、NFTの価値が上昇する可能性があります。これは単なる投資としてだけでなく、えん鍼の成長に参加する機会でもあります。
        </p>
      </div>
      <div className="bg-white dark:bg-dark-surface rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-dark-text">えん鍼NFTコミュニティ</h2>
        <p className="mb-4 text-gray-600 dark:text-dark-text-muted">
          えん鍼NFTを保有することで、エンジニアの健康と技術革新をテーマにしたユニークなコミュニティに参加できます。このコミュニティでは、以下のような活動を行っています：
        </p>
        <ul className="list-disc list-inside mb-4 text-gray-600 dark:text-dark-text-muted">
          <li>健康管理や生産性向上に関するディスカッション</li>
          <li>最新技術トレンドの共有と議論</li>
          <li>メンバー同士のネットワーキング</li>
          <li>「BONSAI NFT CLUB」との交流イベント</li>
        </ul>
        <p className="text-gray-600 dark:text-dark-text-muted">
          えん鍼NFTコミュニティは、単なる施術サービスの枠を超え、エンジニアの皆様の成長と繋がりを支援する場を提供します。
        </p>
      </div>
    </div>
  )
}

export default NFTPage

