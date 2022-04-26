import { React, useState, useEffect } from "react";
import { Tab } from '@headlessui/react'
import { useGetAdminTasksQuery } from "../api/tasks";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function AdminPage() {
    const { data, error, isLoading, isError } = useGetAdminTasksQuery();
    if (isLoading) {
        return <div className="text-2xl">Loading...</div>;
    }
    if (isError) {
        if (error.data.code == "NOT_AUTHORIZED") console.log(error.data)
    }
    return (
        <div className="flex w-full max-w-md px-2 py-16 sm:px-0">
            <Tab.Group>
                <Tab.List className="space-x-1 rounded-xl p-1 w-64">
                    {data.map((task) => (
                        <Tab
                            className={({ selected }) =>
                                classNames(
                                    'w-64 rounded-lg py-2.5 text-sm font-medium leading-5',
                                    'focus:outline-none ring-white ring-opacity-60 ring-offset-2 ring-offset-black focus:ring-2',
                                    selected
                                        ? 'bg-zinc-900 shadow text-white'
                                        : 'hover:text-blue-600'
                                )
                            }
                        >
                            {task.title}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="my-2 pl-5 w-80">
                    {data.map((task) => (
                        <Tab.Panel
                            className={classNames(
                                'bg-white p-3 border-2 border-black h-full',
                                'focus:outline-none ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:ring-2'
                            )}
                        >
                            {task.description}
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}
