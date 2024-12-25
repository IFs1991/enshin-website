# ビルドステージ
FROM node:18-alpine AS builder

WORKDIR /app

# 依存関係ファイルをコピー
COPY package*.json ./
COPY next.config.js ./

# 依存関係のインストール
RUN npm ci

# ソースコードをコピー
COPY . .

# publicディレクトリの作成（存在しない場合）
RUN mkdir -p public

# アプリケーションのビルド
RUN npm run build

# 実行ステージ
FROM node:18-alpine AS runner

WORKDIR /app

# 本番環境用の環境変数
ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0
ENV PORT=3000

# 必要なファイルのみをコピー
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public/ ./public/
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.next/standalone/ ./
COPY --from=builder /app/.next/static/ ./.next/static/

# アプリケーションの起動
EXPOSE 3000
CMD ["node", "server.js"]