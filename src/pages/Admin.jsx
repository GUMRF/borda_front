import { React, useState, useEffect } from "react";
import { Tab } from '@headlessui/react'
import { useGetAdminTasksQuery, useUpdateTasksMutation } from "../api/tasks";
import { Loading } from "../components/Loading";
import { UpdateTasks } from "./UpdateTasks";

import { Switch } from '@headlessui/react'

export default function AdminPage() {

    const { data, error, isLoading, isError, isSuccess } = useGetAdminTasksQuery();
    const [isTaskActive] = useUpdateTasksMutation();
    const [newdata, setNewdata] = useState();
    console.log(newdata)
    if (isLoading) {
        return <Loading />
    }
    if (isError) {
        if (error.data.code == "NOT_AUTHORIZED") console.log(error.data)
    }

    const handleIsActive = async (id, isActive) => {
        if (data) {
            await isTaskActive({
                id: id,
                is_active: isActive
            })
        }
    };

    return (
        <>
            <Tab.Group as='div' className={'flex flex-row w-full h-full min-h-screen'}>
                <Tab.List as="div" className="flex-none min-h-screen h-full w-60 w-min-60 pt-16 border-r-2 border-zinc-300">
                    {data.map((task) => (
                        <Tab as="div" className={'h-full'} >
                            {({ selected }) => (<>
                                <div className={`flex flex-col w-full ${selected ? 'bg-black text-white' : ''}`}>
                                    <div className={`w-full py-2 border-b`}>
                                        <div className="px-2 h-8 flex flex-row justify-between items-center">
                                            <span >
                                                {task.title}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </>
                            )}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="flex-1" >
                    {console.log(newdata)}
                    {data.map((task) => (
                        <Tab.Panel className={`p-5`} >
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
                                <div className="flex items-center mr-3">Inactive</div>
                                <Toggle id={task.id} isActive={task.isActive}
                                // enabled={enabled} setEnabled={setEnabled}
                                />
                                <div className="flex items-center ml-3">Active</div>
                            </div>
                            <button
                                type="button"
                                onClick={() => { handleIsActive(task.id, "true"); setTimeout(() => { window .location.reload() }, 300); }}
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
    
    const [enabled, setEnabled] = useState(props.isActive);
    
    return (
        <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${(enabled ? 'bg-teal-700' : 'bg-teal-900')}
            relative inline-flex flex-shrink-0 h-[38px] w-[74px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
            <span
                aria-hidden="true"
                className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
              pointer-events-none inline-block h-[34px] w-[34px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
            />
        </Switch>

    )
}
