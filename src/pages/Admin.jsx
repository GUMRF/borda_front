import { React, useState, useEffect } from "react";
import { Tab } from '@headlessui/react'
import { useGetAdminTasksQuery, useUpdateTasksMutation } from "../api/tasks";
import { Loading } from "../components/Loading";
import { UpdateTasks } from "./UpdateTasks";

import { Switch } from '@headlessui/react'

export default function AdminPage() {
    const { data, error, isLoading, isError } = useGetAdminTasksQuery();
    const [isTaskActive] = useUpdateTasksMutation();

    if (isLoading) {
        return <Loading />
    }
    if (isError) {
        if (error.data.code == "NOT_AUTHORIZED") console.log(error.data)
    }

    const handleIsActive = async (id, flag) => {
        if (data) {
            await isTaskActive({
                id: id,
                is_active: flag
            })
        }
    };

    return (
        <>
        <button type="button" onClick = {handleIsActive}>SSS</button>
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
                        <div className="flex flex-row w-32 justify-between py-5">
                            <div className="flex items-center">{JSON.stringify(task.isActive)}</div>
                            <Toggle value={task.isActive} handleIsActive = {handleIsActive} />
                        </div>
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
        </>
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

function Toggle(props) {
    return (

            <Switch
                checked={null}
                onChange={()=>props.handleIsActive(1)}
                className={`${props.value ? 'bg-teal-900' : 'bg-teal-700'}
            relative inline-flex flex-shrink-0 h-[38px] w-[74px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
                <span className="sr-only"></span>
                <span
                    aria-hidden="true"
                    className={`${props.value ? 'translate-x-9' : 'translate-x-0'}
              pointer-events-none inline-block h-[34px] w-[34px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
                />
            </Switch>

    )
}