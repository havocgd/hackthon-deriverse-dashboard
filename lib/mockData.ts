// Generates 50 realistic crypto trades
export type Trade = {
	symbol: string;
	side: 'buy' | 'sell';
	price: number;
	pnl: number;
};

const symbols = ['BTCUSD', 'ETHUSD', 'SOLUSD', 'AVAXUSD', 'DOGEUSD', 'BNBUSD'];
function randomFromArray<T>(arr: T[]): T {
	return arr[Math.floor(Math.random() * arr.length)];
}

function randomPrice(symbol: string): number {
	switch (symbol) {
		case 'BTCUSD': return +(30000 + Math.random() * 10000).toFixed(2);
		case 'ETHUSD': return +(2000 + Math.random() * 1000).toFixed(2);
		case 'SOLUSD': return +(50 + Math.random() * 50).toFixed(2);
		case 'AVAXUSD': return +(20 + Math.random() * 20).toFixed(2);
		case 'DOGEUSD': return +(0.05 + Math.random() * 0.2).toFixed(4);
		case 'BNBUSD': return +(250 + Math.random() * 100).toFixed(2);
		default: return +(100 + Math.random() * 100).toFixed(2);
	}
}

function randomPnl(): number {
	// PnL between -500 and +500, with more small wins/losses
	const base = Math.pow(Math.random(), 2) * 500;
	return (Math.random() > 0.5 ? 1 : -1) * +base.toFixed(2);
}

export function generateMockTrades(count = 50): Trade[] {
	return Array.from({ length: count }, (_, i) => {
		const symbol = randomFromArray(symbols);
		return {
			symbol,
			side: Math.random() > 0.5 ? 'buy' : 'sell',
			price: randomPrice(symbol),
			pnl: randomPnl(),
		};
	});
}

// Export a default set of 50 trades
export const mockTrades: Trade[] = generateMockTrades();
