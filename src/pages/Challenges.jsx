import { React } from "react";

import TaskCard from "../components/TaskCard";
import { useGetTasksQuery } from "../api/tasks";
import { Loading } from "../components/Loading";
import { collection } from "../components/TaskCard/colors";

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
			<div className="flex flex-row w-full text-sm">
				<div className="fixed h-full w-60 w-min-60 px-2 pt-16 border-r-2 border-zinc-300">
					<div className=" py-2 border-b">
						<div className="px-2 h-8 flex flex-row justify-between items-center">
							<span className="pl-2">Category</span>
							<select className="capitalize border bg-white rounded border-zinc-300">
								<option>web</option>
								<option>crypto</option>
								<option>forensics</option>
								<option>osint</option>
								<option>misc</option>
							</select>
						</div>
					</div>
					<div className=" py-2 border-b">
						<div className="px-2 h-8 flex flex-row justify-between items-center">
							<label className="inline-flex items-center">
								<input type="checkbox" className="w-4 h-4 rounded" />
								<span className="ml-2">Show solved</span>
							</label>
						</div>
					</div>
					<div className=" py-2 border-b">
						<div className="px-2 h-8 flex flex-row justify-between items-center">
							<label className="inline-flex items-center">
								<input type="checkbox" className="w-4 h-4 rounded" />
								<span className="ml-2">Solved in the end</span>
							</label>
						</div>
					</div>
				</div>

				<div className="pl-60 w-full">
					<div className="sticky z-0 top-14 backdrop-blur h-16 border-b-2 border-zinc-300 flex items-center">
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
						<div className="flex flex-col flex-1">
							<div className="flex-1 overflow-y-auto">
								{isError ? handleError(error) :
									<div className="p-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
										{data.map((task, key) => (
											<TaskCard
												key={key}
												task={task}
												tags={["tag1", "tag2", "tag3"]}
												refetch={refetch}
												color={collection.get(task.category)}
											/>
										))}
									</div>
								}
							</div>
						</div>
					}
				</div>
			</div>
		</>
	);
}
