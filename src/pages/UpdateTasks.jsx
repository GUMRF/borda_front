import { React, useState, useEffect } from "react";

import { useUpdateTasksMutation, useGetAdminTasksQuery } from "../api/tasks";

export const UpdateTasks = () => {
	const [task, { isSuccess }] = useUpdateTasksMutation();
	const { data, error, isLoading, isError, refetch } = useGetAdminTasksQuery();

	const [
		updateTask = {
			"id": 1,
			"title": "Task1",
			"description": "Task1 description",
			"category": "test",
			"complexity": "hard",
			"points": 1337,
			"hint": "Hint for task 1",
			"flag": "flag{flag_for_task_1}",
			"isActive": true,
			"isDisabled": false,
			"author": {
				"id": 1,
				"name": "Author1",
				"contact": "@author1"
			},
			"link": ""
		},
		setupdateTask,
	] = useState();

	const [taskid, settaskid] = useState("");

	if (isLoading) { return <div>Loading...</div> }


	// // console.log(typeof(updateTask.link))
	// console.log(updateTask.author.name)
	console.log(data[0])


	const searchTask = (props) => { setupdateTask(data[props]) }

	const handleUpdate = async () => {
		// setupdateTask() {return updateTask}
		if (updateTask) {
			await task({
				id: updateTask.id,
				title: updateTask.title,
				description: updateTask.description,
				category: updateTask.category,
				complexity: updateTask.complexity,
				points: updateTask.points,
				// authorContact: updateTask.author.contact,
				authorName: updateTask.author.name,
				link: updateTask.link
			})
		}

	};


	return (
		<>
			<div className="w-full flex flex-row justify-center mt-4 ">
				<div className="justify-between w-96 border-2 border-gray-800 px-4 py-2">
					<div className="flex flex-row py-1 justify-between">
						<p className="w-auto flex items-center pr-2">ID</p>
						<input
							className="w-64 appearance-none rounded-none px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900"
							value={taskid}
							onChange={(e) => settaskid(e.target.value)}
							type="search"
						/>
						<button className="rounded border-2 border-green-900 text-green-600 ml-2 px-1 h-auto"
							onClick={() => searchTask(taskid)}
						>
							Search
						</button>
					</div>
					<div className="flex flex-row py-2 justify-between">
						<p className="w-auto flex items-center pr-2">Title</p>
						<input
							className="w-64 appearance-none rounded-none px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900"
							value={updateTask.title}
							onChange={(e) => setupdateTask(e.target.value)}
						/>

					</div>
					<div className="flex flex-row py-2 justify-between">
						<p className="w-auto flex items-center pr-2">Description</p>
						<input
							className="w-64 appearance-none rounded-none px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900"
							value={updateTask.description}
							onChange={(e) => setupdateTask(e.target.value)}
						/>
					</div>
					<div className="flex flex-row py-2 justify-between">
						<p className="w-auto flex items-center pr-2">Category</p>
						<input
							className="w-64 appearance-none rounded-none px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900"
							value={updateTask.category}
							onChange={(e) => setupdateTask(e.target.value)}
						/>
					</div>
					<div className="flex flex-row py-2 justify-between">
						<p className="w-auto flex items-center pr-2">Complexity</p>
						<input
							className="w-64 appearance-none rounded-none px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900"
							value={updateTask.complexity}
							onChange={(e) => setupdateTask(e.target.value)}
						/>
					</div>
					<div className="flex flex-row py-2 justify-between">
						<p className="w-auto flex items-center pr-2">Points</p>
						<input
							className="w-64 appearance-none rounded-none px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900"
							value={updateTask.points}
							onChange={(e) => setupdateTask(e.target.value)}
						/>
					</div>
					<div className="flex flex-row py-2 justify-between">
						<p className="w-auto flex items-center pr-2">Link</p>
						<input
							className="w-64 appearance-none rounded-none px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900"
							value={JSON.stringify(updateTask.link)}
							onChange={(e) => setupdateTask(e.target.value)}
						/>
					</div>
					{/* <div className="flex flex-row py-2 justify-between">
            <p className="w-auto flex items-center pr-2">Author name</p>
            <input
              className="w-64 appearance-none rounded-none px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900"
              value={updateTask.author.name}
              onChange={(e) => setupdateTask(e.target.value)}
            />
          </div> */}
					{/* <div className="flex flex-row py-2 justify-between">
            <p className="w-auto flex items-center pr-2">Author contact</p>
            <input
              className="w-64 appearance-none rounded-none px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900"
              value={updateTask.author.contact}
              onChange={(e) => setupdateTask(e.target.value)}
            />
          </div>  */}
          //Нужно отдельные стейты для имени автора и контакта
				</div>
			</div>
			<div className="w-full flex flex-row justify-center pt-3">
				<button className="rounded border-2 border-green-900 ml-2 px-1 h-8  text-green-600 font-semibold"
					onClick={handleUpdate}>
					Отправить
				</button>
			</div>

		</>
	);
};
