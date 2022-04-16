import React from 'react';
import { useGetTasksQuery } from "../api/tasks";

export function Scoreboard() {

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
                Points
              </th>
            </tr>
          </thead>
          {data.map((table) => (
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap text-center w-16">
                  {table.id}
                </th>
                <td class="px-6 py-4 text-center">
                  {table.title}
                </td>
                <td class="px-6 py-4 text-center">
                  1337
                </td>
              </tr>
            </tbody>
          ))}
          {/* <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap text-center w-16">
                1
              </th>
              <td class="px-6 py-4 text-center">
                Kekw
              </td>
              <td class="px-6 py-4 text-center">
                1337
              </td>
            </tr>
          </tbody> */}
        </table>
      </div>
      {console.log(data)}
    </>
  )
}