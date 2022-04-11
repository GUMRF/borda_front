import { useGettasksQuery } from "../../redux/tasksApi";


export function Task(props) {
	const { data = {tasks:{0:{title:''}}}, isLoading } = useGettasksQuery();
	return (
		<div className="bg-gray-100 h-24">
			<div className="flex flex-row justify-between">
				<div className="text-sky-500 text-3xl pl-4 pt-2 font-semibold">{data.tasks[props.id].title}</div>
				<div className="text-black font-semibold text-3xl pt-2 px-3">{data.tasks[props.id].points}</div>
			</div>

			<div className="flex flex-row justify-between">
				<div className="py-2 pl-4 text-lime-500 font-bold text-xl">{data.tasks[props.id].category}</div>
				<div className="text-black font-normal text-xl pt-2 px-3">{data.tasks[props.id].category}</div>
			</div>
		</div>
	)
}