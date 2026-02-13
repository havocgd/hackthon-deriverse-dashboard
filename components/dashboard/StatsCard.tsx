import React from 'react';

interface StatsCardProps {
	label: string;
	value: string | number;
	subtext?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ label, value, subtext }) => {
	return (
		<div className="bg-zinc-900 rounded-lg shadow p-4 flex flex-col items-start min-w-[160px] border border-zinc-800">
			<span className="text-zinc-400 text-xs font-medium uppercase tracking-wider mb-1">{label}</span>
			<span className="text-2xl font-bold text-white mb-1">{value}</span>
			{subtext && <span className="text-zinc-500 text-xs">{subtext}</span>}
			{/* Progress bar for 65% Long / 35% Short */}
			<div className="w-full mt-4">
				<div className="flex justify-between text-[10px] text-zinc-400 mb-1">
					<span>Long 65%</span>
					<span>Short 35%</span>
				</div>
				<div className="w-full h-2 bg-zinc-800 rounded overflow-hidden flex">
					<div className="bg-green-500 h-2" style={{ width: '65%' }} />
					<div className="bg-red-500 h-2" style={{ width: '35%' }} />
				</div>
			</div>
		</div>
	);
};

export default StatsCard;
