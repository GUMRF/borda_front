import { React, useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import API_BASE_URL from "../config";

import TaskCard from "../components/TaskCard";
import { useGetTasksQuery } from "../api/tasks";

export function Challenges() {
	const { data, error, isLoading, isError,refetch } = useGetTasksQuery();
	if (isLoading) {
		return <div className="text-2xl">Loading...</div>;
	}
	if (isError) {
		if (error.data.code == "NOT_AUTHORIZED") console.log(error.data)
	}
	return (
		<>
			<div className="flex flex-row w-full text-sm h-screen">
				<div
					className="
					w-60 w-min-60 h-screen
					px-2 pt-16
					border-r-2 border-zinc-300
					fixed"
				>
					<div className=" py-2 border-b">
						<div
							className="
							px-2  h-8
							flex flex-row justify-between items-center"
						>
							<span className="pl-2">Category</span>
							<select className="border bg-white rounded border-zinc-300">
								<option>Web</option>
								<option>Crypto</option>
								<option>Reverse</option>
								<option>Osint</option>
								<option>Pwn</option>
							</select>
						</div>
					</div>
					<div className=" py-2 border-b">
						<div
							className="px-2  h-8
							flex flex-row justify-between items-center"
						>
							<label className="inline-flex items-center">
								<input type="checkbox" className="w-4 h-4 rounded" />
								<span className="ml-2">Show solved</span>
							</label>
						</div>
					</div>
					<div className=" py-2 border-b">
						<div
							className="px-2  h-8
							flex flex-row justify-between items-center"
						>
							<label className="inline-flex items-center">
								<input type="checkbox" className="w-4 h-4 rounded" />
								<span className="ml-2">Solved in the end</span>
							</label>
						</div>
					</div>
				</div>

				<div className="pl-60 w-full">
					<div className="h-16 border-b-2 border-zinc-300 flex items-center">
						<marquee
							direction="right"
							scrollamount="20"
							className="text-2xl font-semibold"
						>
							Ебать ты чукча!
							{/*https://www.npmjs.com/package/react-fast-marquee*/}
						</marquee>
					</div>
					{isError ? <>
						{error.data.code == "NOT_AUTHORIZED" ? <div className="w-full h-full text-center text-2xl pt-12">Что бы начать решать таски, для начала авторизуйся</div> : <div>Произошла ошибка</div>}
					</> : 
					<div className="
						p-4
						grid grid-cols-1 gap-4
						md:grid-cols-2
						lg:grid-cols-3"
					>
						{data.map((task) => (
							<TaskCard
								id={task.id}
								title={task.title}
								points={task.points}
								isSolved={task.isSolved}
								refetch={refetch}
								tags={["baby", "reverse", "linux"]}
								category={task.complexity}
								description={task.description}
								author={{ name: task.author.name, contact: task.author.contact }}
								color="blue"
							/>
						))}
					</div>}
				</div>
			</div>
		</>
	);
}
