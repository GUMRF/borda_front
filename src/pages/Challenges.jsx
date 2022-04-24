import { React, useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import API_BASE_URL from "../config";

import TaskCard from "../components/TaskCard";
import { useGetTasksQuery } from "../api/tasks";
import { Loading } from "../components/Loading";

function handleError(error) {
	console.log(error);

	let title = "Error"
	let detail = error.data

	if (error.data.code == "NOT_AUTHORIZED") {
		title = "Ошибка авторизации"
		detail = "Авторизуйтесь для продолжения."
	}

	return (
		<div className="pt-12 flex flex-col items-center">
			<h1 className="text-center text-2xl ">{title}</h1>
			<p>{detail}</p>
		</div>
	)
}

export function Challenges() {
	const { data, error, isLoading, isError, refetch } = useGetTasksQuery();

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
						<div className="px-2  h-8
							flex flex-row justify-between items-center"
						>
							<label className="inline-flex items-center">
								<input type="checkbox" className="w-4 h-4 rounded" />
								<span className="ml-2">Show solved</span>
							</label>
						</div>
					</div>
					<div className=" py-2 border-b">
						<div className="px-2  h-8
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
							New Message
							{/*https://www.npmjs.com/package/react-fast-marquee*/}
						</marquee>
					</div>
					{isLoading ? <Loading /> :
						<>
							{isError ? handleError(error) :
								<div className="
								grid grid-cols-1 gap-4
								p-4
								md:grid-cols-2
								lg:grid-cols-3"
								>
									{/* {data.map((task) => (
										<TaskCard
											id={task.id}
											title={task.title}
											description={task.description}
											category={task.category}
											complexity={task.complexity}
											points={task.points}
											isSolved={task.isSolved}
											refetch={refetch}
											tags={["baby", "reverse", "linux"]}
											author={{ name: task.author.name, contact: task.author.contact }}
											color="blue"
										/>
										
									))} */}
									{data.map((task) => (
										<TaskCard
											task={task}
											tags={["baby", "reverse", "linux"]}
											refetch={refetch}
											color="green"
										/>
									))}
								</div>
							}
						</>
					}
				</div>
			</div>
		</>
	);
}
