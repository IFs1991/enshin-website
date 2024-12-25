'use client'
import React from 'react'

const ReservationPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* ページヘッダー - 予約ページのメインタイトル */}
      <h1 className="text-3xl font-bold mb-8 text-center">施術予約</h1>

      {/* 予約システムの説明セクション - ユーザーへの重要な案内事項 */}
      <div className="max-w-2xl mx-auto mb-8 text-gray-600">
        <p className="mb-4">
          ご予約は下記フォームより24時間受け付けております。
          必要事項をご記入の上、送信ボタンをクリックしてください。
          ご予約確認後、自動返信メールをお送りいたします。
        </p>
        <p className="mb-4">
          なお、メールが届かない場合は、お手数ですが直接お電話にてご連絡ください。
          前日・当日のキャンセルはご遠慮いただいております。
        </p>
      </div>

      {/* Google Formsの埋め込みセクション - モダンなスタイリングとアクセシビリティ対応 */}
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <div className="relative w-full">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScE8SRvAezLyrNfic7PWyzywPVO_oNllCJgaqznlZUWu6_cJA/viewform?embedded=true"
            className="w-full min-h-[2310px] border-0"
            title="予約フォーム"
            aria-label="予約フォーム"
          >
            読み込んでいます...
          </iframe>
        </div>
      </div>

      {/* 注意事項と補足情報セクション - 明確な構造化とアクセシビリティ */}
      <div className="max-w-2xl mx-auto mt-8 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">ご予約に関する注意事項</h2>
        <div className="space-y-3 text-gray-600">
          <p>・予約フォーム送信後、自動返信メールが届きます。</p>
          <p>・自動返信メールが届かない場合は、予約が完了していない可能性がございます。</p>
          <p>・当日のキャンセルは、次回のご予約をお受けできない場合がございます。</p>
          <p>・施術開始時間の5分前までにお越しください。</p>
        </div>

        {/* 連絡先情報セクション - セマンティックな構造化 */}
        <section className="mt-6 pt-6 border-t border-gray-200">
          <h3 className="font-semibold mb-2">お問い合わせ先</h3>
          <div className="space-y-2 text-gray-600">
            <p>電話番号：XXX-XXXX-XXXX</p>
            <p>営業時間：9:00-22:00</p>
            <p>定休日：水曜日</p>
            <p>住所：XXX県XXX市XXX町X-X-X</p>
          </div>
        </section>

        {/* 緊急連絡セクション - 視覚的な強調と重要性の表現 */}
        <section className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-red-600 font-medium">
            ※当日のキャンセルや急な変更が必要な場合は、
            必ずお電話にてご連絡ください。
          </p>
        </section>
      </div>
    </div>
  )
}

export default ReservationPage