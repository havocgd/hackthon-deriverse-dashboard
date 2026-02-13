"use client";

import React, { useState } from "react";
import { Trade } from "@/lib/mockData";

interface TradeTableProps {
	trades: Trade[];
}

const TradeTable: React.FC<TradeTableProps> = ({ trades }) => {
	const [search, setSearch] = useState("");
	const [side, setSide] = useState("all");

	const filteredTrades = trades.filter(trade => {
		const symbolMatch = trade.symbol.toLowerCase().includes(search.toLowerCase());
		const sideMatch = side === "all" || trade.side === side;
		return symbolMatch && sideMatch;
	});

	return (
		<div className="bg-zinc-900 rounded-lg p-4 border border-zinc-800 shadow mt-6 overflow-x-auto">
			<h2 className="text-zinc-300 text-sm font-semibold mb-2">Trade History</h2>
			<div className="flex gap-2 mb-3">
				<input
					className="bg-zinc-800 text-zinc-100 rounded px-2 py-1 text-xs flex-1 focus:outline-none focus:ring-2 focus:ring-cyan-400"
					placeholder="Search Symbol"
					value={search}
					onChange={e => setSearch(e.target.value)}
				/>
				<select
					className="bg-zinc-800 text-zinc-100 rounded px-2 py-1 text-xs focus:outline-none focus:ring-2 focus:ring-cyan-400"
					value={side}
					onChange={e => setSide(e.target.value)}
				>
					<option value="all">All</option>
					<option value="buy">Buy</option>
					<option value="sell">Sell</option>
				</select>
			</div>
			<table className="min-w-full text-xs text-zinc-200">
				<thead>
					<tr className="bg-zinc-800">
						<th className="px-2 py-1 text-left font-semibold">Symbol</th>
						<th className="px-2 py-1 text-left font-semibold">Side</th>
						<th className="px-2 py-1 text-right font-semibold">Price</th>
						<th className="px-2 py-1 text-right font-semibold">PnL</th>
					</tr>
				</thead>
				<tbody>
					{filteredTrades.length === 0 ? (
						<tr>
							<td colSpan={4} className="text-center text-zinc-500 py-3">No trades found</td>
						</tr>
					) : (
						filteredTrades.map((trade, i) => (
							<tr key={i} className="border-b border-zinc-800 hover:bg-zinc-800/60">
								<td className="px-2 py-1 font-mono">{trade.symbol}</td>
								<td className={`px-2 py-1 font-semibold ${trade.side === "buy" ? "text-green-400" : "text-red-400"}`}>{trade.side.toUpperCase()}</td>
								<td className="px-2 py-1 text-right">{trade.price}</td>
								<td className={`px-2 py-1 text-right font-bold ${trade.pnl > 0 ? "text-green-400" : trade.pnl < 0 ? "text-red-400" : "text-zinc-300"}`}>
									{trade.pnl > 0 ? "+" : ""}{trade.pnl}
								</td>
							</tr>
						))
					)}
				</tbody>
			</table>
		</div>
	);
};

export default TradeTable;
