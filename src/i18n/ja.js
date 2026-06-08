export default {
  nav: {
    homeAria: (name) => `${name} — ホーム`,
    toggleAria: "英語と日本語を切り替える",
  },
  navLinks: {
    skills: "スキル・経歴",
    education: "学歴",
    achievements: "実績",
    projects: "プロジェクト",
    openSource: "オープンソース",
    extraCurricular: "課外活動",
    contactMe: "お問い合わせ",
  },
  hero: {
    greeting1: "こんにちは！",
    greeting2: "私は",
  },
  aboutMe: {
    name: "北出 義章",
    intro:
      "日本出身のソフトウェアエンジニア。技術を磨くか、次の大きなアイデアを考えているかのどちらかで忙しい日々を送っています。",
    tagLine:
      "フルスタックエンジニア · AI・自動化 · 9年以上の本番開発経験",
  },
  sections: {
    skills: "スキル・経歴",
    education: "学歴",
    achievements: {
      title: "キャリアハイライト",
      subtitle:
        "9年以上の本番環境におけるフルスタック・AIエンジニアリングの主要な成果。",
    },
    projects: {
      title: "プロジェクト",
      subtitle:
        "現代のフルスタック開発を形づくるAI・自動化・プラットフォーム製品。",
    },
    openSource: {
      title: "オープンソース貢献",
      errorTitle: "このセクションの読み込みに失敗しました。",
      errorBody: "数秒待ってからページを再読み込みしてください。",
      filterAll: "すべて",
    },
    extraCurricular: "課外活動",
  },
  common: {
    techStack: "技術スタック",
    visitSite: "サイトを見る",
    resume: "履歴書",
    madeWith: (name) => `Made with 💙 by ${name} & the Open Source Community`,
    openProject: (title) => `${title} を開く`,
  },
  letsConnect: {
    line1: "Let's",
    line2: "Connect",
    ariaLabel: "LinkedInでつながる",
  },
  skillCategories: [
    "言語",
    "フレームワーク・ライブラリ",
    "AI・自動化",
    "クラウド・DevOps・データベース",
  ],
  stats: ["経験年数", "技術スタック", "勤務企業数"],
  educationList: [
    {
      degree: "工学士",
      duration: "2012年8月 - 2016年8月",
      content1: "専攻：情報技術",
    },
    {
      degree: "",
      duration: "2016年5月 - 2016年6月",
      content1:
        "シンガポール国立大学で開催された第5期 Polkadot Blockchain Academy を優秀な成績で修了。",
    },
  ],
  achievements: [
    {
      event: "LLMドキュメントオーケストレーション",
      position: "NextGen Systems · シニアフルスタックエンジニア",
      content1:
        "instructor.js と Zod バリデーションを用い、GPT-4・Claude・Gemini・Grok 対応のAI文書解析を構築。",
      content2:
        "LLMプロバイダーとベクトルストアのコスト対効果分析を主導し、アーキテクチャ方針を決定。",
    },
    {
      event: "オンボーディングフロー再構築",
      position: "完了率14%向上",
      content1:
        "Next.js・Python API・イベントトラッキングにまたがる脆弱なサインアップフローを再構築。",
      content2:
        "バリデーションのエッジケース、重複アカウント、リリース後のファネル盲点を解消。",
    },
    {
      event: "AI入札マッチングプラットフォーム",
      position: "フルスタック開発",
      content1:
        "Node.js・MongoDB・React によるAI入札マッチングプラットフォームを設計・開発。",
      content2:
        "DigitalOcean へのデプロイと CI/CD パイプラインを一貫して実装。",
    },
    {
      event: "AI業務自動化",
      position: "monoya · Python開発者",
      content1:
        "React・FastAPI・OpenAI API を用いたAI業務自動化プラットフォームの開発を主導。",
      content2:
        "pandas と Watson NLU で顧客満足度シグナルを分析。",
    },
    {
      event: "OCR・ワークフロー自動化",
      position: "Gunosy, Inc. · ソフトウェア開発者",
      content1:
        "OCR処理とインテリジェントなデータ抽出で手作業業務を自動化。",
      content2:
        "Celery・RabbitMQ・MySQL・Django による分散ワーカーを構築。",
    },
    {
      event: "エンタープライズWeb開発",
      position: "NS Solutions Corp · Web開発者",
      content1:
        "Joomla・WordPress・Drupal など各種CMSと連携したクライアントサイトを構築。",
      content2:
        "厳しい納期の中で、アクセシビリティに配慮したレスポンシブUIを提供。",
    },
  ],
  experiences: [
    {
      positions: [
        {
          title: "シニアフルスタックエンジニア",
          duration: "2024年10月 - 2026年4月",
          content: [
            "React・Node.js・Python を用いたAI支援Webアプリを開発し、業務効率化とデータ処理の自動化を推進。",
            "Next.js・Python API・イベントトラッキングにまたがるサインアップフローを再構築し、オンボーディング完了率を14%改善。バリデーションのエッジケース、重複アカウント、リリース後のファネル盲点を修正。",
          ],
        },
      ],
    },
    {
      positions: [
        {
          title: "Python開発者",
          duration: "2021年4月 - 2024年9月",
          content: [
            "React・FastAPI・OpenAI API を用いたAI業務自動化プラットフォームの開発を主導。",
            "Linuxサーバー上のDevOps業務全般（DB管理、Grafana構築、メトリクス監視）を担当し、システムの安定稼働を確保。",
          ],
        },
      ],
    },
    {
      positions: [
        {
          title: "ソフトウェア開発者",
          duration: "2019年7月 - 2021年3月",
          content: [
            "Python と PHP でエンタープライズ向けバックエンドおよびAI処理サービスを構築。",
            "サービス指向アーキテクチャに基づき、Python 2.7、Django 1.5、JSF 2、Spring 2、AJAX、HTML、CSS をフロントエンドに採用。",
            "コールセンター業務の効率化のため Python・Bash ツールを開発。データ変換スクリプト、AMQP/RabbitMQ、REST、JSON、API連携用CRUDスクリプトを実装。",
          ],
        },
      ],
    },
    {
      positions: [
        {
          title: "Web開発者",
          duration: "2016年9月 - 2019年6月",
          content: [
            "Joomla・WordPress・Drupal など各種CMSと連携したWebサイトを構築。",
            "モダンな HTML・CSS・JavaScript を用いたクロスブラウザ対応のレスポンシブWebアプリを開発。",
          ],
        },
      ],
    },
  ],
  projects: [
    "自然な会話と深いプロダクト文脈で複雑なサポート問い合わせを解決するAIファーストのカスタマーサービスエージェント。",
    "AIによる抽出で請求書・データキャプチャワークフローを自動化するインテリジェント文書処理プラットフォーム。",
    "本番AIアプリケーションのトレース・評価・監視を大規模に行うLLMオブザーバビリティプラットフォーム。",
    "職場アプリを接続し文脈に応じた回答を提供するエンタープライズAI検索・ナレッジアシスタント。",
    "ビジュアルUIでDocker・Kubernetes環境のデプロイと運用を行うコンテナ管理プラットフォーム。",
    "プロジェクトと業務横断のカスタムワークフロー・自動化・チーム連携を構築するWork OS。",
    "実務的なビジネス可視化・分析・意思決定支援に焦点を当てた日本のAIプラットフォーム。",
    "日本企業向けの記帳・レポート・財務ワークフローを自動化するAI会計ソリューション。",
    "営業・タスク・ワークフロー自動化を一元化する日本チーム向け業務プラットフォーム。",
  ],
};
