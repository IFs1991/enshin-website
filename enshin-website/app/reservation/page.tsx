'use client'
import React, { useState } from 'react'
import { Calendar } from '@/components/ui/calendar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from '@/components/ui/checkbox'

const ReservationPage = () => {
  // 予約フォームの状態管理
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [agreed, setAgreed] = useState(false)
  const [selectedService, setSelectedService] = useState("")
  const [selectedTime, setSelectedTime] = useState("")

  // フォーム送信時の処理
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // フォームデータの処理をここに実装
    console.log({
      service: selectedService,
      date: date,
      time: selectedTime,
      agreed: agreed
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* ページタイトル */}
      <h1 className="text-3xl font-bold mb-8 text-center">予約</h1>

      {/* 予約フォーム */}
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        {/* 基本情報入力セクション */}
        <div className="mb-4">
          <Label htmlFor="name">お名前</Label>
          <Input type="text" id="name" required />
        </div>

        <div className="mb-4">
          <Label htmlFor="email">メールアドレス</Label>
          <Input type="email" id="email" required />
        </div>

        <div className="mb-4">
          <Label htmlFor="phone">電話番号</Label>
          <Input type="tel" id="phone" required />
        </div>

        {/* コース選択セクション */}
        <div className="mb-4">
          <Label>希望メニュー</Label>
          <Select value={selectedService} onValueChange={setSelectedService}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="コースを選択してください" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="acupuncture">眼精疲労コース</SelectItem>
              <SelectItem value="massage">腰痛肩こりコース</SelectItem>
              <SelectItem value="fascia">不眠リラックスコース</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* 日付選択セクション */}
        <div className="mb-4">
          <Label>希望日</Label>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </div>

        {/* 時間選択セクション */}
        <div className="mb-4">
          <Label>希望時間</Label>
          <Select value={selectedTime} onValueChange={setSelectedTime}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="時間を選択してください" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="09:00">09:00</SelectItem>
              <SelectItem value="10:00">10:00</SelectItem>
              <SelectItem value="11:00">11:00</SelectItem>
              <SelectItem value="12:00">12:00</SelectItem>
              <SelectItem value="13:00">13:00</SelectItem>
              <SelectItem value="14:00">14:00</SelectItem>
              <SelectItem value="15:00">15:00</SelectItem>
              <SelectItem value="16:00">16:00</SelectItem>
              <SelectItem value="17:00">17:00</SelectItem>
              <SelectItem value="18:00">18:00</SelectItem>
              <SelectItem value="19:00">19:00</SelectItem>
              <SelectItem value="20:00">20:00</SelectItem>
              <SelectItem value="21:00">21:00</SelectItem>
              <SelectItem value="22:00">22:00</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* 利用規約同意セクション */}
        <div className="mb-4 flex items-center">
          <Checkbox
            id="agreement"
            checked={agreed}
            onCheckedChange={(checked) => setAgreed(checked as boolean)}
          />
          <Label htmlFor="agreement" className="ml-2">
            <a href="/terms" className="text-blue-600 hover:underline">
              利用規約
            </a>
            に同意します
          </Label>
        </div>

        {/* 送信ボタン - 規約同意時のみ有効 */}
        <Button type="submit" disabled={!agreed} className="w-full">
          予約する
        </Button>
      </form>
    </div>
  )
}

export default ReservationPage