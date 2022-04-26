import { React, useState, useEffect } from "react";
import { Tab } from '@headlessui/react'
import { useGetAdminTasksQuery } from "../api/tasks";
import { Loading } from "../components/Loading";

export default function AdminPage() {
    const { data, error, isLoading, isError } = useGetAdminTasksQuery();
    if (isLoading) {
        return <Loading />
    }
    if (isError) {
        if (error.data.code == "NOT_AUTHORIZED") console.log(error.data)
    }
    return (
        <Tab.Group as='div' className={'flex flex-row w-full h-full min-h-screen'}>
            <Tab.List as="div" className="flex-none min-h-screen h-full w-60 w-min-60 pt-16 border-r-2 border-zinc-300">
                {data.map((task) => (
                    <Tab as="div" className={'h-full'}>
                        {({ selected }) => (
                            <div className={`flex flex-col w-full ${selected ? 'bg-black text-white' : ''}`}>
                                <div className={`w-full py-2 border-b`}>
                                    <div className="px-2 h-8 flex flex-row justify-between items-center">
                                        <span >
                                            {task.title}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Tab>
                ))}
            </Tab.List>
            <Tab.Panels className="flex-1">
                {data.map((task) => (
                    <Tab.Panel className={`p-5`}>
                        <h1>ID: {task.id}</h1>
                        <EditTask value={task.title} />
                        <EditTask value={task.category} />
                        <EditTask value={task.points} />
                        <EditTask value={task.coplexity} />
                        <EditTask value={task.description} />
                        <EditTask value={task.hint} />
                        <EditTask value={task.flag} />
                        <EditTask value={task.link} />
                        <button
                            type="button"
                            // onClick={handleFlag}
                            className={`bg-b border border-black hover:bg-black focus:bg-black h-9 px-4 text-black hover:text-white focus:text-white  rounded font-medium border-1`}
                        >
                            Сохранить
                        </button>
                    </Tab.Panel>
                ))}
            </Tab.Panels>
        </Tab.Group>
    )
}

function EditTask(props) {
    return (
        <div className="py-2">
            <input
                type="text"
                value={props.value}
                className={`appearance-none w-full min-h-fit h-auto text-base rounded border-2 border-gray-500 focus:ring-gray-800 focus:ring-4 focus:border-gray-900`}
                placeholder="nil"
            />
        </div>

    )
}