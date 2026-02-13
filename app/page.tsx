
import StatsCard from "@/components/dashboard/StatsCard";
import ChartSection from "@/components/dashboard/ChartSection";
import Journal from "@/components/dashboard/Journal";
import TradeTable from "@/components/dashboard/TradeTable";
import { mockTrades } from "@/lib/mockData";

function getTotalProfit(trades: typeof mockTrades) {
  return trades.reduce((acc, t) => acc + t.pnl, 0).toFixed(2);
}

function getWinRate(trades: typeof mockTrades) {
  const wins = trades.filter(t => t.pnl > 0).length;
  return ((wins / trades.length) * 100).toFixed(1) + "%";
}

function getAvgPnl(trades: typeof mockTrades) {
  return (trades.reduce((acc, t) => acc + t.pnl, 0) / trades.length).toFixed(2);
}

function getTradeCount(trades: typeof mockTrades) {
  return trades.length;
}

function getTotalFees(trades: typeof mockTrades) {
  return (trades.length * 2.5).toFixed(2);
}

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-zinc-950 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <StatsCard label="Total Profit" value={`$${getTotalProfit(mockTrades)}`} />
          <StatsCard label="Win Rate" value={getWinRate(mockTrades)} />
          <StatsCard label="Avg PnL" value={`$${getAvgPnl(mockTrades)}`} />
          <StatsCard label="Trades" value={mockTrades.length} />
          <StatsCard label="Fees Paid" value={<span className="text-red-400">${getTotalFees(mockTrades)}</span>} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <ChartSection />
          </div>
          <div className="md:col-span-1">
            <Journal />
          </div>
        </div>
      </div>
      <TradeTable trades={mockTrades} />
    </main>
  );
}
