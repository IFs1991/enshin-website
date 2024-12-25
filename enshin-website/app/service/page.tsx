import Image from 'next/image'

const courses = [
  {
    name: '眼精疲労コース',
    description: 'デジタルデバイスの長時間使用によるストレスを軽減し、目の疲れを改善します。',
    effects: ['目の疲れの軽減', '頭痛の緩和', '集中力の向上'],
    mechanism: '目の周りのツボを刺激し、血行を促進することで眼精疲労を改善します。'
  },
  {
    name: '腰痛肩こりコース',
    description: '長時間のデスクワークによる腰痛や肩こりを緩和し、身体の柔軟性を高めます。',
    effects: ['腰痛・肩こりの緩和', '姿勢の改善', '筋肉の柔軟性向上'],
    mechanism: '腰や肩周りの筋肉をほぐし、血行を促進することで痛みや凝りを軽減します。'
  },
  {
    name: '不眠リラックスコース',
    description: 'ストレスや緊張を和らげ、質の高い睡眠とリラックスした状態をサポートします。',
    effects: ['睡眠の質の向上', 'ストレス軽減', '全身のリラックス'],
    mechanism: '自律神経のバランスを整え、体内時計の調整を助けることで、心身の緊張を緩和します。'
  }
]

const ServicePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-dark-text">サービス紹介</h1>
      {courses.map((course, index) => (
        <div key={index} className="mb-12 bg-white dark:bg-dark-surface rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-dark-text">{course.name}</h2>
          <p className="mb-4 text-gray-600 dark:text-dark-text-muted">{course.description}</p>
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-dark-text">期待できる効果:</h3>
            <ul className="list-disc list-inside">
              {course.effects.map((effect, i) => (
                <li key={i} className="text-gray-600 dark:text-dark-text-muted">{effect}</li>
              ))}
            </ul>
          </div>
          <p className="text-sm text-gray-500 dark:text-dark-text-muted">{course.mechanism}</p>
        </div>
      ))}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-dark-text">施術風景</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Image src="/placeholder.svg" alt="施術風景1" width={500} height={300} className="rounded-lg" />
          <Image src="/placeholder.svg" alt="施術風景2" width={500} height={300} className="rounded-lg" />
        </div>
      </div>
    </div>
  )
}

export default ServicePage

