"use client";

import React, { useEffect, useState } from "react";

type JournalEntry = {
	id: string;
	symbol: string;
	direction: "buy" | "sell";
	note: string;
	createdAt: string;
};

const LOCAL_KEY = "journalEntries";

function loadEntries(): JournalEntry[] {
	if (typeof window === "undefined") return [];
	try {
		return JSON.parse(localStorage.getItem(LOCAL_KEY) || "[]");
	} catch {
		return [];
	}
}

function saveEntries(entries: JournalEntry[]) {
	if (typeof window !== "undefined") {
		localStorage.setItem(LOCAL_KEY, JSON.stringify(entries));
	}
}

const Journal: React.FC = () => {
	const [entries, setEntries] = useState<JournalEntry[]>([]);
	const [symbol, setSymbol] = useState("");
	const [direction, setDirection] = useState<"buy" | "sell">("buy");
	const [note, setNote] = useState("");

	useEffect(() => {
		setEntries(loadEntries());
	}, []);

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		if (!symbol.trim() || !note.trim()) return;
		const newEntry: JournalEntry = {
			id: Date.now().toString(),
			symbol: symbol.trim().toUpperCase(),
			direction,
			note: note.trim(),
			createdAt: new Date().toISOString(),
		};
		const updated = [newEntry, ...entries];
		setEntries(updated);
		saveEntries(updated);
		setSymbol("");
		setDirection("buy");
		setNote("");
	}

	return (
		<div className="bg-zinc-900 rounded-lg p-4 border border-zinc-800 shadow min-h-[260px]">
			<h2 className="text-zinc-300 text-sm font-semibold mb-2">Trade Journal</h2>
			<form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-4">
				<div className="flex gap-2">
					<input
						className="bg-zinc-800 text-zinc-100 rounded px-2 py-1 text-sm flex-1 focus:outline-none focus:ring-2 focus:ring-cyan-400"
						placeholder="Symbol (e.g. BTCUSD)"
						value={symbol}
						onChange={e => setSymbol(e.target.value)}
						required
					/>
					<select
						className="bg-zinc-800 text-zinc-100 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
						value={direction}
						onChange={e => setDirection(e.target.value as "buy" | "sell")}
					>
						<option value="buy">Buy</option>
						<option value="sell">Sell</option>
					</select>
				</div>
				<textarea
					className="bg-zinc-800 text-zinc-100 rounded px-2 py-1 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-cyan-400"
					placeholder="Note"
					value={note}
					onChange={e => setNote(e.target.value)}
					rows={2}
					required
				/>
				<button
					type="submit"
					className="bg-cyan-600 hover:bg-cyan-500 text-white rounded px-3 py-1 text-sm font-semibold mt-1 self-end"
				>
					Add Entry
				</button>
			</form>
			<div className="divide-y divide-zinc-800 max-h-40 overflow-y-auto">
				{entries.length === 0 && (
					<div className="text-zinc-500 text-xs py-2 text-center">No journal entries yet.</div>
				)}
				{entries.map(entry => (
					<div key={entry.id} className="py-2">
						<div className="flex items-center gap-2 mb-1">
							<span className="text-xs font-bold text-cyan-400">{entry.symbol}</span>
							<span className={`text-xs font-semibold ${entry.direction === "buy" ? "text-green-400" : "text-red-400"}`}>{entry.direction.toUpperCase()}</span>
							<span className="text-zinc-500 text-xs ml-auto">{new Date(entry.createdAt).toLocaleString()}</span>
						</div>
						<div className="text-zinc-200 text-sm whitespace-pre-line">{entry.note}</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Journal;
