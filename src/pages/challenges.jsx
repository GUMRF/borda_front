import { React, useState, useEffect } from "react";
import TaskCard from "../components/TaskCard";
import { Link, Navigate } from "react-router-dom";

import {useGetTasksQuery } from "../api/tasks";

export function Challenges() {
  const { data,error, isLoading } = useGetTasksQuery();

  if (isLoading) {
    return <div className="text-2xl">Loading...</div>;
  }


  // console.log(error.status)
  return (
    <>
      <div className="flex flex-row w-full text-sm">
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
          <div
            className="
              p-4
              grid grid-cols-1 gap-4
              md:grid-cols-2
              lg:grid-cols-3
			      "
          >
            {data.map((task) => (
              <TaskCard
                id={task.id}
                title={task.title}
                points={task.points}
                tags={["baby", "reverse", "linux"]}
                category="crypto"
                author={{ name: "Nlxes", contact: "@N1x3s" }}
              />
            ))}
          </div>
        </div>
      </div>
      {localStorage.getItem("token") === null ? <Navigate to="/sign-up" /> : null}
    </>
  );
}
