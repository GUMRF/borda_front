import React, { useState } from 'react';
import { useGetScoreboardQuery } from "../api/scoreboard";
import { Loading } from '../components/Loading';

export function Scoreboard() {
	const { data, isError, error, isLoading } = useGetScoreboardQuery();

	if (isLoading){return <Loading/>}

	if (error) {
		return (
			<div>
				<h1>Error</h1>
				<p>{error}</p>
			</div>
		)
	}
	
	const data1 = Object.values(data);
	// data.sort(function (a, b) {
	// 	return a.score - b.score;
	// });

	return (
		<>
			{isLoading ? <Loading /> :
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
						{data.map((table, id) => (
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
			}
		</>
	)
}