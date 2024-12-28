import React from 'react'

// 共通のセクションコンポーネント
interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <div className="bg-white rounded-lg shadow-md p-6 mb-8">
    <h2 className="text-2xl font-semibold mb-4">{title}</h2>
    {children}
  </div>
)

const ConceptPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">コンセプト / 由来</h1>

      <Section title="えん鍼のコンセプト">
        <p className="mb-4">
          えん鍼は、「エンジニアのパフォーマンスを最大化する」というコンセプトのもと、エンジニアの皆様に特化した鍼灸施術サービスを提供しています。
          長時間のデスクワークや集中作業によって蓄積される身体的・精神的な疲労を解消し、クリエイティブな仕事に必要な集中力と生産性を高めることを目指しています。
        </p>
      </Section>

      <Section title="えん鍼の由来">
        <p className="mb-4">
          「えん鍼」という名前は、「エンジニア」と「鍼灸」を組み合わせて生まれました。
          「えん」には、エンジニアの「エン」だけでなく、「縁」や「円」という意味も込められています。
          エンジニアの皆様と私たちを結ぶ「縁」、そして心身の調和を表す「円」。
          これらの意味を込めて、「えん鍼」と名付けました。
        </p>
      </Section>

      <Section title="えん鍼の特徴">
        <ul className="list-disc list-inside mb-4">
          <li>エンジニア特化型の施術メニュー</li>
          <li>最新のテクノロジーを活用した予約システム</li>
          <li>Web3技術を活用したNFTコミュニティの形成</li>
          <li>エンジニアの健康課題に対する深い理解と解決策の提供</li>
        </ul>
        <p>
          えん鍼は、従来の鍼灸院とは一線を画す、エンジニアのための新しい形の鍼灸サービスです。
          最新のWeb3技術を取り入れ、NFTの発行やコミュニティ形成を通じて、単なる施術以上の価値を提供します。
        </p>
      </Section>
    </div>
  )
}

export default ConceptPage

