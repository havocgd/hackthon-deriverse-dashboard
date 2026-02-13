# Deriverse Analytics Dashboard 📊

> A high-performance, institutional-grade analytics interface for the Deriverse ecosystem.



## 🎥 Live Demo
**[Watch the 30-Second Walkthrough Video](https://youtu.be/fcu_fQziMUI)**

---

## ⚡️ Project Overview
This project is a specialized frontend implementation designed to bring professional-grade analytics to Deriverse traders. Unlike standard DEX interfaces, this dashboard focuses on **Post-Trade Analysis**, **Performance Tracking**, and **Journaling**.

It solves the problem of "blind trading" by providing real-time PnL visualization, win-rate metrics, and a dedicated trading journal to track psychological edges.

### 🌟 Key Features
* **Real-Time PnL Engine:** Client-side calculation of Total Profit, Win Rate, and Average PnL based on trade history.
* **Interactive Filtering:** Instantly filter trade history by **Symbol** (e.g., "BTC", "SOL") or **Side** (Long/Short) to analyze specific strategies.
* **Persistent Trade Journal:** A local-first journaling system that saves user notes to `localStorage`, ensuring data privacy and persistence without requiring a database connection.
* **Fee Analysis:** Dedicated tracking of cumulative platform fees to provide a transparent "Net PnL" view.
* **Institutional UI:** A dense, dark-mode aesthetic inspired by Bloomberg/Terminal interfaces, optimized for high-frequency data consumption.

---

## ⚠️ Prototype Status & Architecture
This submission represents **Phase 1** of the analytics suite.

* **Data Source:** Uses a deterministic mock engine (`lib/mockData.ts`) to simulate a mature trading account with 50+ trades. This allows judges to experience the *full analytics capability* (charts, filters, math) without needing a funded wallet or hitting RPC rate limits.
* **Logic:** The math engines (PnL, Win Rate, Ratios) are fully functional and production-ready; they currently consume the mock hook but are designed to swap easily to a `useDeriverseData` hook.

---

## 🛠 Tech Stack
* **Framework:** Next.js 14 (App Router)
* **Styling:** Tailwind CSS (Zinc/Slate Dark Mode)
* **Components:** Shadcn UI + Lucide React
* **Visualization:** Recharts (Responsive PnL Area Charts)
* **State Management:** React Hooks + LocalStorage API

---

## 🚀 Roadmap (Future Scope)
While the Core UX is complete, the following features are architected for Phase 2:

* **[Planned] Live Indexer Integration:** Connecting the `useMarketData` hook to the Deriverse on-chain program ID.
* **[Planned] Drawdown Visualization:** A secondary chart overlay showing max drawdown percentage over time.
* **[Planned] Session Metrics:** Breaking down PnL by trading session (Asian/London/NY).
* **[Planned] Export:** CSV/PDF export of the trade journal for tax purposes.

---

## 💻 Running Locally

bash
# 1. Clone the repo
git clone [https://github.com/yourusername/deriverse-dashboard.git](https://github.com/yourusername/deriverse-dashboard.git)

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev
Open http://localhost:3000 with your browser to see the result.
