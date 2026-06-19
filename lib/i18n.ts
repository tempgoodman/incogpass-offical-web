// i18n dictionary — all display copy lives here so the UI is fully ready
// for multi-language toggling. Add new languages by extending `locales`.

export type Lang = "en" | "zh"

export const languages: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "zh", label: "繁" },
]

export const locales = {
  en: {
    nav: {
      merchants: "For Merchants",
      technology: "Technology",
      home: "Home",
      getApp: "Get the App",
    },
    hero: {
      badge: "Privacy-First Loyalty",
      headline: "Escape the Surveillance. The Zero-Data Loyalty Pass for Local Shops.",
      subheadline:
        "Scan to join in 1 second. Generate dynamic, one-time QR codes for every transaction. Decouple your payments from your identity. Support local, stay invisible.",
      primaryCta: "Download App",
      secondaryCta: "How it works",
      imageAlt: "Smartphone showing a glowing dynamic QR code beside a privacy shield",
    },
    compare: {
      title: "The Problem vs. The Solution",
      subtitle: "Loyalty programs were never supposed to cost you your privacy.",
      old: {
        tag: "The Old Way",
        title: "Traditional CRM",
        body: "Link your payments (Octopus / WeChat), give up your phone number, and let massive corporations track every coffee you buy. Risk of spam calls.",
        points: ["Payment linked to identity", "Phone number harvested", "Constant spam & tracking"],
      },
      new: {
        tag: "The incogpass Way",
        title: "incogpass",
        body: "Identity and payments are strictly separated. The shop recognizes your dynamic token, not your name. Zero data leaks.",
        points: ["Payment & identity separated", "No phone number required", "Zero data leaks"],
      },
    },
    steps: {
      title: "How incogpass Works",
      subtitle: "Three steps to invisible loyalty.",
      items: [
        {
          title: "1-Second Onboarding",
          body: "Open the app, scan the shop's QR, instantly become a member. No forms.",
        },
        {
          title: "Dynamic Privacy Shield",
          body: "Every time you claim a reward, the app generates a one-time QR code. Merchants verify the token, not the person.",
        },
        {
          title: "Zero Noise",
          body: "Never receive a spam call again. Total immunity from data scraping.",
        },
      ],
    },
    footer: {
      tagline: "Support local, stay invisible.",
      links: {
        privacy: "Privacy Policy",
        terms: "Terms",
        merchant: "Merchant Portal",
        contact: "Contact",
        joinWaitlist: "Join Waitlist",
      },
      rights: "All rights reserved.",
    },
    tech: {
      hero: {
        badge: "Technology & Whitepaper",
        headline: "How It Works: The Mathematics of Absolute Privacy.",
        subheadline:
          "We don't just promise privacy; we mathematically guarantee it. Powered by Zero-Knowledge concepts and Cryptographic Hashing.",
      },
      diagram1: {
        chip: "01 — Dynamic Tokenization",
        title: "Dynamic QR Shield",
        body: "Your app generates a unique, time-limited QR code for every interaction. Shops verify the token, not your identity. Once scanned, the code self-destructs.",
        nodes: ["You", "Secret Key", "Time Limit", "Store"],
        caption: "One-time token · self-destructs after scan",
      },
      diagram2: {
        chip: "02 — Identity Isolation",
        title: "Isolated Identities",
        body: "You are a different person to every shop. We use one-way hashing to generate a unique ID per merchant. Shops cannot collude to track your cross-store behavior.",
        you: "One You",
        shopA: "Shop A sees",
        shopB: "Shop B sees",
        cardA: "ID #A1-9F2C",
        cardB: "ID #B7-3E08",
        formulaLabel: "One-way hash function",
        formula: "UID_merchant = Hash(User_ID + Merchant_ID)",
        formulaNote: "Irreversible. The same person produces a different UID at every store, so merchants can never link your activity across shops.",
      },
      diagram3: {
        chip: "03 — Blind-Matching Proxy",
        title: "The Communications Firewall",
        body: "Merchants command the system to reward 'UID #8923'. Our servers do the matching and push the notification. The merchant never touches your contact details.",
        merchant: "Merchant",
        merchantNote: "Reward UID #8923",
        box: "incogpass Black Box",
        boxNote: "Blind matching engine",
        user: "You",
        userNote: "Notification delivered",
      },
      faq: {
        title: "Frequently Asked Questions",
        subtitle: "The hard questions about cryptography and trust.",
        items: [
          {
            q: "If there's no phone number, how do I prove my membership?",
            a: "Your device's secure enclave holds the cryptographic proof. When you claim a reward, the app signs a challenge locally and presents a verifiable token — no personal identifier ever leaves your phone.",
          },
          {
            q: "Can the government or hackers steal my data from incogpass?",
            a: "We don't store PII (Personally Identifiable Information). A hack would only reveal useless, hashed tokens that cannot be reversed into a name, number, or payment method.",
          },
        ],
      },
    },
    merchants: {
      hero: {
        badge: "For Merchants & BIDs",
        headline: "Drive Footfall. Skip the Privacy Headache.",
        subheadline:
          "The ultimate zero-friction loyalty and marketing platform for independent shops. Grow your returning customers without ever handling personal data.",
        primaryCta: "Join Merchant Waitlist",
        secondaryCta: "Apply for Early Access",
      },
      values: {
        title: "Built for busy shop owners",
        subtitle: "Powerful marketing, zero compliance risk.",
        items: [
          {
            title: "Set up in 5 Minutes",
            body: "No complex POS integration. Use a merchant app or web dashboard to scan customer dynamic QRs instantly.",
          },
          {
            title: "Blind Proxy Marketing",
            body: "Send targeted push notifications to your regulars (e.g., \"Quiet Tuesday? 20% off today!\") without knowing their phone numbers or emails.",
          },
          {
            title: "100% Privacy Bulletproof",
            body: "You store zero personal data. Complete immunity from privacy compliance risks (e.g. Hong Kong PDPO) and data breaches.",
          },
        ],
      },
      bid: {
        badge: "Community & BID",
        title: "Revitalize the High Street: The District-Wide Pass.",
        body: "Perfect for Business Improvement Districts (BIDs) and Local Councils. Launch a unified loyalty network for your entire street or town. Customers download one app, but every merchant maintains isolated, secure customer lists.",
        imageAlt: "Illustration of a connected high street with linked independent shops",
        points: [
          "Increase cross-shopping",
          "Provide district-wide analytics without tracking individuals",
          "Funded by regeneration grants",
        ],
        cta: "Apply for a BID Pilot",
      },
      proxy: {
        title: "How \"Proxy Marketing\" Works",
        subtitle: "Reach the right customers — without ever seeing who they are.",
        steps: [
          {
            label: "Step 1 — Merchant",
            title: "Set a campaign",
            body: "\"Send to customers who visited 3+ times.\"",
          },
          {
            label: "Step 2 — incogpass Black Box",
            title: "Securely match hashed UIDs",
            body: "Our blind-matching engine resolves who qualifies — using hashed tokens, never identities.",
          },
          {
            label: "Step 3 — Customer",
            title: "Receives a push notification",
            body: "The offer lands safely on their app. Their contact details never left their phone.",
          },
        ],
      },
      pricing: {
        title: "Pricing & Pilot Tiers",
        subtitle: "Start free. Scale to a whole district.",
        perMonth: "/month",
        tiers: [
          {
            name: "Micro Shop",
            price: "Free",
            tagline: "For getting started",
            features: ["Basic stamp collection", "Manual QR scanning", "Single location"],
            cta: "Start for Free",
            featured: false,
          },
          {
            name: "Active Marketer",
            price: "£29",
            tagline: "For growing regulars",
            features: ["Everything in Micro Shop", "Proxy push notifications", "Customer analytics", "Automated campaigns"],
            cta: "Start 14-day trial",
            featured: true,
          },
          {
            name: "BID / High Street Pilot",
            price: "Custom",
            tagline: "For districts & councils",
            features: ["District-wide deployment", "Dedicated onboarding support", "Aggregated footfall insights", "Multi-merchant network"],
            cta: "Contact Sales",
            featured: false,
          },
        ],
        popular: "Most popular",
      },
      earlyAccess: {
        headline: "Become a Pioneer Merchant",
        body: "We are currently in closed beta. Join our waitlist to be among the first local shops to experience the future of private loyalty programs. Secure your early-bird benefits today.",
        shopNameLabel: "Shop Name",
        shopNamePlaceholder: "e.g. The Corner Bakery",
        emailLabel: "Contact Email",
        emailPlaceholder: "you@yourshop.com",
        cta: "Join Waitlist",
        successMessage: "You're on the list! We'll be in touch soon.",
      },
      footer: {
        contactSales: "Contact Sales",
        applyPilot: "Apply for Pilot",
      },
    },
  },
  zh: {
    nav: {
      merchants: "商戶專區",
      technology: "技術原理",
      home: "首頁",
      getApp: "下載應用程式",
    },
    hero: {
      badge: "私隱至上的會員系統",
      headline: "擺脫監控。為本地小店而設的零數據會員通行證。",
      subheadline:
        "一秒掃描即可加入。每筆交易自動生成動態、一次性 QR 碼。將你的付款與身份徹底分離。支持本地，保持隱形。",
      primaryCta: "下載應用程式",
      secondaryCta: "運作原理",
      imageAlt: "智能電話顯示動態 QR 碼，旁邊有私隱盾牌",
    },
    compare: {
      title: "問題 vs 解決方案",
      subtitle: "會員獎賞，從來不應以你的私隱作交換。",
      old: {
        tag: "傳統做法",
        title: "傳統 CRM",
        body: "綁定你的付款方式（八達通／微信），交出電話號碼，讓大企業追蹤你買的每一杯咖啡。承受滋擾電話的風險。",
        points: ["付款與身份綁定", "電話號碼被收集", "持續滋擾及追蹤"],
      },
      new: {
        tag: "incogpass 做法",
        title: "incogpass",
        body: "身份與付款嚴格分離。店舖辨識的是你的動態代碼，而非你的姓名。零數據外洩。",
        points: ["付款與身份分離", "無需電話號碼", "零數據外洩"],
      },
    },
    steps: {
      title: "incogpass 運作原理",
      subtitle: "三步達成隱形會員體驗。",
      items: [
        {
          title: "一秒加入",
          body: "打開應用程式，掃描店舖 QR 碼，即時成為會員。無需填表。",
        },
        {
          title: "動態私隱盾牌",
          body: "每次領取獎賞時，應用程式都會生成一次性 QR 碼。商戶驗證的是代碼，而非個人身份。",
        },
        {
          title: "零滋擾",
          body: "從此告別滋擾電話。徹底免疫於數據抓取。",
        },
      ],
    },
    footer: {
      tagline: "支持本地，保持隱形。",
      links: {
        privacy: "私隱政策",
        terms: "條款",
        merchant: "商戶入口",
        contact: "聯絡我們",
        joinWaitlist: "加入候補名單",
      },
      rights: "版權所有。",
    },
    tech: {
      hero: {
        badge: "技術與白皮書",
        headline: "運作原理：絕對私隱的數學基礎。",
        subheadline:
          "我們不只是承諾私隱，而是以數學方式保證它。由零知識概念及密碼學雜湊技術驅動。",
      },
      diagram1: {
        chip: "01 — 動態代碼化",
        title: "動態 QR 盾牌",
        body: "你的應用程式會為每次互動生成獨一無二、有時限的 QR 碼。店舖驗證的是代碼，而非你的身份。一經掃描，代碼即自動銷毀。",
        nodes: ["你", "密鑰", "時限", "店舖"],
        caption: "一次性代碼 · 掃描後即自動銷毀",
      },
      diagram2: {
        chip: "02 — 身份隔離",
        title: "隔離的身份",
        body: "在每間店舖眼中，你都是不同的人。我們以單向雜湊為每個商戶生成獨立的 ID。店舖無法串通追蹤你跨店的行為。",
        you: "同一個你",
        shopA: "A 店看到",
        shopB: "B 店看到",
        cardA: "ID #A1-9F2C",
        cardB: "ID #B7-3E08",
        formulaLabel: "單向雜湊函數",
        formula: "UID_merchant = Hash(User_ID + Merchant_ID)",
        formulaNote: "不可逆。同一個人在每間店都會產生不同的 UID，因此商戶永遠無法串連你跨店的活動。",
      },
      diagram3: {
        chip: "03 — 盲匹配代理",
        title: "通訊防火牆",
        body: "商戶向系統下達指��，獎賞「UID #8923」。由我們的伺服器進行匹配並推送通知。商戶永遠接觸不到你的聯絡資料。",
        merchant: "商戶",
        merchantNote: "獎賞 UID #8923",
        box: "incogpass 黑盒",
        boxNote: "盲匹配引擎",
        user: "你",
        userNote: "通知已送達",
      },
      faq: {
        title: "常見問題",
        subtitle: "關於密碼學與信任的尖銳提問。",
        items: [
          {
            q: "若沒有電話號碼，我如何證明自己的會員身份？",
            a: "你裝置的安全隔離區（Secure Enclave）保存著密碼學證明。當你領取獎賞時，應用程式會在本機簽署一個挑戰並提交可驗證的代碼——任何個人識別資料都不會離開你的手機。",
          },
          {
            q: "政府或黑客能否從 incogpass 竊取我的數據？",
            a: "我們不儲存個人識別資料（PII）。即使被入侵，黑客也只會取得無用的雜湊代碼，無法還原成姓名、號碼或付款方式。",
          },
        ],
      },
    },
    merchants: {
      hero: {
        badge: "商戶與 BID 專區",
        headline: "帶動人流。免除私隱煩惱。",
        subheadline:
          "為獨立小店而設、零摩擦的終極會員與行銷平台。在從不接觸個人資料的情況下，培養更多回頭客。",
        primaryCta: "加入商戶候補名單",
        secondaryCta: "申請早期使用權",
      },
      values: {
        title: "專為忙碌的店主而設",
        subtitle: "強大的行銷功能，零合規風險。",
        items: [
          {
            title: "五分鐘完成設定",
            body: "無需複雜的 POS 整合。使用商戶應用程式或網頁儀表板，即時掃描顧客的動態 QR 碼。",
          },
          {
            title: "盲代理行銷",
            body: "向你的熟客發送針對性推送通知（例如「星期二人流少？今日全單八折！」），無需知道他們的電話號碼或電郵。",
          },
          {
            title: "100% 私隱無懈可擊",
            body: "你不儲存任何個人資料。徹底免疫於私隱合規風險（如香港個人資料（私隱）條例）及數據外洩。",
          },
        ],
      },
      bid: {
        badge: "社區與 BID",
        title: "活化商業街：全區通用通行證。",
        body: "專為商業改善區（BID）及地方議會而設。為你的整條街道或城鎮推出統一的會員網絡。顧客只需下載一個應用程式，而每間商戶都各自保有獨立、安全的客戶名單。",
        imageAlt: "互相連結的商業街插圖，串連各間獨立小店",
        points: [
          "促進跨店消費",
          "提供全區分析而不追蹤個別人士",
          "由活化資助計劃支持",
        ],
        cta: "申請 BID 試行計劃",
      },
      proxy: {
        title: "「代理行銷」如何運作",
        subtitle: "在從不知道對方是誰的情況下，觸及合適的顧客。",
        steps: [
          {
            label: "第一步 — 商戶",
            title: "設定行銷活動",
            body: "「發送給到訪 3 次或以上的顧客。」",
          },
          {
            label: "第二步 — incogpass 黑盒",
            title: "安全匹配雜湊 UID",
            body: "我們的盲匹配引擎判斷誰符合資格——只用雜湊代碼，絕不涉及身份。",
          },
          {
            label: "第三步 — 顧客",
            title: "收到推送通知",
            body: "優惠安全送達其應用程式。他們的聯絡資料從未離開過手機。",
          },
        ],
      },
      pricing: {
        title: "價格與試行方案",
        subtitle: "免費起步，可擴展至整個社區。",
        perMonth: "／月",
        tiers: [
          {
            name: "微型小店",
            price: "免費",
            tagline: "適合起步",
            features: ["基本印花收集", "手動掃描 QR 碼", "單一地點"],
            cta: "免費開始",
            featured: false,
          },
          {
            name: "積極行銷者",
            price: "£29",
            tagline: "適合培養熟客",
            features: ["包含微型小店所有功能", "代理推送通知", "顧客分析", "自動化行銷活動"],
            cta: "開始 14 天試用",
            featured: true,
          },
          {
            name: "BID／商業街試行",
            price: "客製化",
            tagline: "適合社區與議會",
            features: ["全區部署", "專屬導入支援", "綜合人流洞察", "多商戶網絡"],
            cta: "聯絡銷售團隊",
            featured: false,
          },
        ],
        popular: "最受歡迎",
      },
      earlyAccess: {
        headline: "成為先驅商戶",
        body: "我們目前正處於封閉測試階段。加入候補名單，成為首批體驗私隱會員計劃未來的本地小店。立即確保你的早鳥優惠。",
        shopNameLabel: "店舖名稱",
        shopNamePlaceholder: "例如：街角麵包店",
        emailLabel: "聯絡電郵",
        emailPlaceholder: "you@yourshop.com",
        cta: "加入候補名單",
        successMessage: "你已加入名單！我們將盡快與你聯絡。",
      },
      footer: {
        contactSales: "聯絡銷售團隊",
        applyPilot: "申請試行計劃",
      },
    },
  },
} as const

export type Dict = (typeof locales)["en"]
