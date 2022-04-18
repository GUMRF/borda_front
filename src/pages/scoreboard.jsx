import React, { useState } from 'react';
import { useGetTasksQuery } from "../api/tasks";

export function Scoreboard() {
	let i = 0;
	const { data, isLoading } = useGetTasksQuery();


	if (isLoading) {
		return <div className="text-2xl">Loading...</div>;
	}
	return (
		<>

			<div class="relative overflow-x-auto shadow-md justify-center flex">
				<table class="text-sm text-left text-gray-500 dark:text-gray-400 w-2/3">
					<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
						</tr>
					</thead>
					{data.map(table => (
						<>
							<tbody>
								<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

									<td class="px-6 py-4 text-center">{i++}</td>

									<td class="px-6 py-4 text-center">1</td>

									<td class="px-6 py-4 text-center">{table.points}</td>

								</tr>
							</tbody>
						</>
					))}
				</table>
			</div>
		</>
	)
}