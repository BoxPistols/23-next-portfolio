# Next.js 13

## 概要

Next.jsとは、サーバーサイドレンダリングと自動コード分割を可能にするReactフレームワークであり、Reactアプリケーションを構築およびスケーリングすることが容易になります。ホットコードリローディング、自動ルーティング、最適化されたパフォーマンスなどの機能により、簡素化された開発体験を提供します。

- SSR: Next.js ではサーバー側レンダリングが可能になり、パフォーマンスと SEO を向上させることができます。
- 自動コード分割: Next.js はコードを自動的に小さなチャンクに分割するため、ページの読み込み時間を短縮できます。
- ホットコードのリロード: コードに加えられた変更はブラウザに自動的に反映されるため、開発がより迅速かつ効率的になります。
- 自動ルーティング: Next.js はファイル システムに基づいてルートを自動的に生成し、ページの整理と移動を容易にします。
- TypeScript のサポート: Next.js には TypeScript のサポートが組み込まれており、コードの品質と保守性を向上させることができます。
- 大規模でアクティブなコミュニティ: Next.js には大規模でアクティブなコミュニティがあり、開発に役立つリソースやプラグインが多数あります

[Link / About Next.js](./AboutNext.md)

### バージョン13の特徴

- サーバーレス関数のサポート: Next.js 13では、サーバーレス関数をサポートしています。これにより、APIエンドポイントを簡単に作成できます。
- イメージコンポーネント: Next.js 13では、イメージコンポーネントが導入されました。これにより、画像の最適化や、画像の遅延読み込みなどが簡単に行えるようになりました。
- パフォーマンスの改善: Next.js 13では、パフォーマンスが改善されています。特に、初回読み込みの速度が向上しています。
- Web Vitalsのサポート: Next.js 13では、Web Vitalsをサポートしています。これにより、ページのパフォーマンスを測定し、改善することができます。
- セキュリティの改善: Next.js 13では、セキュリティが改善されています。特に、XSS攻撃に対する防御が強化されています。

---

## 導入　　

```ts
npx create-next-app@latest app-name
```

*nodeが古くてエラーが出る時</br>
voltaのケース `volta install node@latest`

### ファイルクリーニング

元のCSSファイルの削除、および影響箇所の削除

### ページ設定

- src/app配下に
  - blog/フォルダ作成
    - page.tsx作成

```typescript
const Blog = () => {
  return (
    <div>
      <h1>Blog</h1>
    </div>
  )
}
export default Blog
```

これでlocalhist:3000/blogでページ認識される

#### v12との違い

| URL |   v12   |   v13   |
|:-----------|:------------|:------------|
|  /  | /pages/index.tsx | /app/page.tsx |
| /blog | pages/blog.tsx | /app/blog/page.tsx |
| /contact | pages/contact.tsx | /app/contact/page.tsx |

### マークダウンブログの基盤

```ts
npm install raw-loader gray-matter react-markdown
```

- raw-Loader=マークダウンの読み込み
- gray-matter=frontmatter部分の処理
- react-markdownはマークダウンの本文部分の処理

---

Next.jsのv12で採用されていた以下のデータを取り扱う専用関数は、以下の通りです。

getServerSideProps
getStaticProps
getStaticPaths
しかし、V13で導入されたappフォルダでは、データの取り扱い方に変更が加えられたため、これらの関数は廃止されました。代替として、通常のJavaScriptコードで行う方法に簡略化されています。これは、V13が「Reactサーバーコンポーネント」を採用したためです。
