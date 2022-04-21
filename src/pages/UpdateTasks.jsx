import { React, useState, useEffect } from "react";

import { useUpdateTasksMutation } from "../api/tasks";

export const UpdateTasks = () => {
  const [
    updateTask = {
      id: 1,
      title: "TestTask1",
      description: "TestTask1_description",
      category: "TestTask1_description",
      complexity: "test",
      points: 1337,
      hint: "Test Hint for task 1",
      isSolved: false,
      submissions: [],
      author: {
        id: 1,
        name: "TestAuthor1",
        contact: "@TestAuthor1_contact",
      },
    },
    setupdateTask,
  ] = useState();

  const [task, { isSuccess }] = useUpdateTasksMutation();
  let data = {
    id: 1,
    title: "TestTask1",
    description: "TestTask1_description",
    category: "TestTask1_description",
    complexity: "test",
    points: 1337,
    hint: "Test Hint for task 1",
    isSolved: false,
    submissions: [],
    author: {
      id: 1,
      name: "TestAuthor1",
      contact: "@TestAuthor1_contact",
    },
  }

  
  const handleUpdate = async () => {
    // setupdateTask() {return updateTask}
    // // if (updateTask) {
    // //   await task({
    // //     id: updateTask.id,
    // //     title: updateTask.title,
    // //     description: updateTask.description,
    // //     category: updateTask.category,
    // //     complexity: updateTask.complexity,
    // //     points: updateTask.points,
    // //     hint: updateTask.hint,
    // //   }).unwrap();
    // //   setupdateTask("");
    // // }
  };
  console.log(updateTask.title)
  return (
    <>
      <div className="w-full flex flex-row justify-center mt-4 ">
        <div className="justify-between w-96 border-2 border-gray-800 px-4 py-2">
          <div className="flex flex-row py-1 justify-between">
            <p className="w-auto flex items-center pr-2">ID</p>
            <input
              className="w-64 appearance-none rounded-none px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900"
              value={updateTask.id}
              onChange={(e) => setupdateTask(e.target.value)}
              type = "search"
            />
            <button className="rounded border-2 border-green-900 text-green-600 ml-2 px-1 h-auto" onClick={handleUpdate}>Search</button>
          </div>
          <div className="flex flex-row py-2 justify-between">
            <p className="w-auto flex items-center pr-2">Title</p>
            <input
              className="w-64 appearance-none rounded-none px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900"
              value={data.title}
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
        </div>
      </div>
      <div className="w-full flex flex-row justify-center pt-3">
        <button className="rounded border-2 border-green-900 ml-2 px-1 h-8  text-green-600 font-semibold" onClick={handleUpdate}>
          Отправить
        </button>
      </div>

    </>
  );
};
