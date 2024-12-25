import React from 'react'
import Image from 'next/image'

const courses = [
  { name: '眼精疲労コース', duration: '60分', price: 20000 },
  { name: '腰痛肩こりコース', duration: '60分', price: 20000 },
  { name: '不眠リラックスコース', duration: '60分', price: 20000 },
]

const PricingPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">料金表</h1>
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2">コース名</th>
              <th className="text-left py-2">時間</th>
              <th className="text-left py-2">料金（税別）</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={index} className="border-b">
                <td className="py-2">{course.name}</td>
                <td className="py-2">{course.duration}</td>
                <td className="py-2">¥{course.price.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">お支払い方法</h2>
        <p className="mb-4">クレジットカード決済のみとなります。</p>
        <div className="flex space-x-4">
          <Image src="/placeholder.svg" alt="Visa" width={50} height={30} />
          <Image src="/placeholder.svg" alt="Mastercard" width={50} height={30} />
          <Image src="/placeholder.svg" alt="American Express" width={50} height={30} />
          <Image src="/placeholder.svg" alt="Diners Club" width={50} height={30} />
          <Image src="/placeholder.svg" alt="JCB" width={50} height={30} />
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">キャンセルポリシー</h2>
        <p>予約のキャンセルは、予約時間の24時間前までにご連絡ください。それ以降のキャンセルは、キャンセル料が発生する場合があります。</p>
      </div>
    </div>
  )
}

export default PricingPage

