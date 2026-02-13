"use client";

import React from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { mockTrades } from "@/lib/mockData";

// Build cumulative PnL history from trades
const pnlHistory = mockTrades.reduce<{ name: string; pnl: number }[]>((acc, trade, i) => {
	const prev = acc.length > 0 ? acc[acc.length - 1].pnl : 0;
	acc.push({
		name: `#${i + 1}`,
		pnl: +(prev + trade.pnl).toFixed(2),
	});
	return acc;
}, []);

const ChartSection: React.FC = () => {
	return (
		<div className="bg-zinc-900 rounded-lg p-4 border border-zinc-800 shadow min-h-[260px]">
			<h2 className="text-zinc-300 text-sm font-semibold mb-2">PnL History</h2>
			<ResponsiveContainer width="100%" height={200}>
				<AreaChart data={pnlHistory} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
					<defs>
						<linearGradient id="pnlColor" x1="0" y1="0" x2="0" y2="1">
							<stop offset="5%" stopColor="#22d3ee" stopOpacity={0.8}/>
							<stop offset="95%" stopColor="#22d3ee" stopOpacity={0}/>
						</linearGradient>
					</defs>
					<CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
					<XAxis dataKey="name" tick={{ fill: '#a1a1aa', fontSize: 12 }} hide />
					<YAxis tick={{ fill: '#a1a1aa', fontSize: 12 }} width={40} axisLine={false} tickLine={false} />
					<Tooltip contentStyle={{ background: '#18181b', border: 'none', color: '#fff' }} labelStyle={{ color: '#a1a1aa' }} />
					<Area type="monotone" dataKey="pnl" stroke="#22d3ee" fillOpacity={1} fill="url(#pnlColor)" />
				</AreaChart>
			</ResponsiveContainer>
		</div>
	);
};

export default ChartSection;
