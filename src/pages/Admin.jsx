import { React, useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { Switch } from '@headlessui/react'


import { useGetAdminTasksQuery } from "../api/tasks";

export function AdminPage1() {
	const { data, error, isLoading, isError } = useGetAdminTasksQuery();
	if (isLoading) {
		return <div className="text-2xl">Loading...</div>;
	}
	if (isError) {
		if (error.data.code == "NOT_AUTHORIZED") console.log(error.data)
	}
	return (
		<>






			<div className="w-full content-center">
				{data.map((task) => (
					<div className="h-16 w-64 border-2 border-zinc-500 ml-2 mt-4 flex px-2 justify-between items-center rounded">
						<div>{task.title}</div>
						<Link to={`task/${task.id}`} className="flex border-2 border-red-600 rounded-md w-16 font-semibold text-red-900 px-4 hover:bg-red-600 hover:text-white hover:border-black">Edit</Link>

					</div>
				))}
			</div>
		</>
	);
}
