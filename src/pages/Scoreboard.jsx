import React, { useState } from 'react';
import { useGetScoreboardQuery } from "../api/scoreboard";

export function Scoreboard() {
	let i = 1;
	
	const { data, isLoading } = useGetScoreboardQuery();
	if (isLoading) {
		return <div className="text-2xl">Loading...</div>;
	}
	console.log(data)
	const dataSort = Object.values(data);
	// const data1 = [
	// 	{ place: 1, teamName: 'Kekek', score: 152, teamMembersCount: 4 },
	// 	{ place: 1, teamName: 'Kasd', score: 1522, teamMembersCount: 4 },
	// 	{ place: 1, teamName: 'Kesdfek', score: 138, teamMembersCount: 4 },
	// 	{ place: 1, teamName: 'Kdfk', score: 162, teamMembersCount: 4 },
	// 	{ place: 1, teamName: 'Kefgk', score: 34, teamMembersCount: 4 },
	// 	{ place: 1, teamName: 'Kevbek', score: 15, teamMembersCount: 4 },
	// 	{ place: 1, teamName: 'Kezxck', score: 25, teamMembersCount: 4 }
	// ];
	dataSort.sort(function (a, b) {
		if (a.score <= b.score) {
			return 1;
		}
		if (a.score >= b.score) {
			return -1;
		}
	});
	return (
		<>

				<div class="justify-center flex pt-8 text-gray-200">
					<table class="text-sm text-left w-2/3">
						<thead class="text-xs  uppercase bg-zinc-800">
							<tr>
								<th scope="col" class="px-6 py-3 w-16 text-center">
									Place
								</th>
								<th scope="col" class="px-6 py-3 text-center">
									Team
								</th>
								<th scope="col" class="px-6 py-3 text-center">
									<button type="button">Points</button>
								</th>
								<th scope="col" class="px-6 py-3 text-center">
									<button type="button">Members</button>
								</th>
							</tr>
						</thead>
						{dataSort.map((table, id) => (
							<>
								<tbody>
									<tr class="border-b bg-zinc-700 border-zinc-900">
										<td class="px-6 py-4 text-center">{id+1}</td>
										<td class="px-6 py-4 text-center">{table.teamName}</td>
										<td class="px-6 py-4 text-center">{table.score}</td>
										<td class="px-6 py-4 text-center">{table.teamMembersCount}</td>
									</tr>
								</tbody>
							</>
						))}
					</table>
				</div>
		</>
	)
}