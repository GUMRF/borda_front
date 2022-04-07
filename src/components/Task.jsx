import { useGettasksQuery } from "../redux/tasksApi"





export default function Task(props) {
	const data = useGettasksQuery();
	console.log(JSON.stringify(data.tasks['0']['id']));
	const params = {
		id: JSON.stringify(data.tasks['0']['id']),
		title: JSON.stringify(data.tasks['0']['title']),
		// desciption: JSON.stringify(data.tasks['0']['desciption']),
		category: JSON.stringify(data.tasks['0']['category']),
		// complexity: JSON.stringify(data.tasks['0']['complexity']),
		points: JSON.stringify(data.tasks['0']['points']),
		// hint: JSON.stringify(data.tasks['0']['hint']),
		isSolved: JSON.stringify(data.tasks['0']['isSolved']),

}

	return (
		<div className="bg-gray-100 h-24">
			<div className="flex flex-row justify-between">
				<div className="text-sky-500 text-3xl pl-4 pt-2 font-semibold">{params.title}</div>
				<div className="text-black font-semibold text-3xl pt-2 px-3">{params.points}</div>
			</div>

			<div className="flex flex-row justify-between">
				<div className="py-2 pl-4 text-lime-500 font-bold text-xl">{params.category}</div>
				<div className="text-black font-normal text-xl pt-2 px-3">0</div>
			</div>
		</div>
	)
}