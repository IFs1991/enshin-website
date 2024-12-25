import Image from 'next/image'

const AccessPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">アクセス</h1>
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">店舗情報</h2>
        <p><strong>店舗名:</strong> えん鍼 -Enshin-</p>
        <p><strong>住所:</strong> 〒123-4567 東京都渋谷区○○町1-2-3 ○○ビル4F</p>
        <p><strong>電話番号:</strong> 03-1234-5678</p>
        <p><strong>営業時間:</strong> 10:00 - 20:00</p>
        <p><strong>定休日:</strong> 水曜日</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">アクセス方法</h2>
        <h3 className="text-xl font-semibold mb-2">電車でお越しの場合</h3>
        <p className="mb-4">○○線 △△駅 A出口から徒歩5分</p>
        <h3 className="text-xl font-semibold mb-2">バスでお越しの場合</h3>
        <p className="mb-4">○○バス停から徒歩2分</p>
        <h3 className="text-xl font-semibold mb-2">お車でお越しの場合</h3>
        <p className="mb-4">近隣のコインパーキングをご利用ください。</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">地図</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7479754683745!2d139.7016359!3d35.6580339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b857628235d%3A0xcdd8aef709a2b520!2z5riL6LC344K544AF44Gu6aeQ!5e0!3m2!1sja!2sjp!4v1652345678901!5m2!1sja!2sjp"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">外観・入口</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Image src="/placeholder.svg" alt="店舗外観" width={400} height={300} className="rounded-lg" />
          <Image src="/placeholder.svg" alt="店舗入口" width={400} height={300} className="rounded-lg" />
        </div>
      </div>
    </div>
  )
}

export default AccessPage

