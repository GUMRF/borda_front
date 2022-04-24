import { React, useState, useEffect } from "react";
import { CheckIcon } from "@heroicons/react/outline";
import { FlagIcon } from "@heroicons/react/outline";

import { useSendFlagMutation } from "../../api/tasks";

const TaskColors = {
	"misc": {
		bg: "bg-blue-50",
		border: "border-blue-300",
		text: "text-blue-600"
	},
	"crypto": {
		bg: "bg-green-50",
		border: "border-green-300",
		text: "text-green-600"
	},
	"web": {
		bg: "bg-rose-50",
		border: "border-rose-300",
		text: "text-rose-600"
	},
	"forensics": {
		bg: "bg-purple-50",
		border: "border-purple-300",
		text: "text-purple-600"
	},
	"reverse": {
		bg: "bg-orange-50",
		border: "border-orange-300",
		text: "text-orange-600"
	}
}

const TaskColorsName = {
	"misc": "blue",
	"crypto": "green",
	"web": "rose",
	"forensics": "purple",
	"reverse": "orange"
}

export default function TaskCard(props) {
	const Task = props.task

	const [isOpen, setIsOpen] = useState(0);
	const [newAnswer, setNewAnswer] = useState("");
	const [isCorrect, setCorrect] = useState("");
	const [inputFlag, { isSuccess, isLoading }] = useSendFlagMutation();

	useEffect(() => {
	}, [isOpen]);

	// if (isLoading) {
	// 	return <></>;
	// }

	const handleFlag = async () => {
		if (newAnswer) {
			const flag = await inputFlag({
				id: props.Task.id,
				flag: newAnswer,
			}).unwrap();
			setNewAnswer("");
			props.refetch();
			setCorrect(flag.isCorrect);
		}
	};
	console.log(isCorrect);

	return (
		<>
			<div className={`
				bg-${TaskColorsName[Task.category]}-50
				border-2 rounded border-${TaskColorsName[Task.category]}-300
				overflow-clip
				${isOpen ? "2xl:col-span-4 lg:col-span-3 md:col-span-2" : ""}
			`}
			>
				<div className={`${isOpen ? `border-b-2 border-${TaskColorsName[Task.category]}-300` : ""}`}
					onClick={() => setIsOpen(!isOpen)}
				>
					<div className="
						px-4 py-2
						flex flex-row justify-between 
						font-semibold text-lg"
					>
						<div className={`${TaskColors[Task.category].bg} text-xl`}>
							{Task.title}
						</div>
						<div className="text-black ml-5">{Task.points}</div>
					</div>

					<div className="flex flex-row justify-between px-4">
						<div className="">
							<div className="flex flex-row">
								<span className="text-lime-500 font-bold text-xl">
									{Task.category}
								</span>
								{isOpen ? (
									<div className="flex flex-row">
										{props.tags.map((tag) => (
											<div className="text-black font-semibold text-xl ml-5">
												#{tag}
											</div>
										))}
									</div>
								) : null}
							</div>
						</div>

						<div className="flex flex-row items-center ml-5">
							<span>
								<CheckIcon className="h-5 w-5" strokeWidth={1} />
							</span>
							<span className="text-black font-normal text-xl">3</span>
						</div>
					</div>
					{isOpen ? (
						<div className="text-sky-500 font-medium py-2 px-4">
							by {Task.author.name} ({Task.author.contact})
						</div>
					) : null}
				</div>
				{isOpen ? (
					<>
						<div className="px-4">
							<p>{Task.description}</p>

							<div className="text-red-600 py-2 ">
								{Task.link ? Task.link : "file.zip //TODO:сделать ссылкой"}
							</div>
							{!Task.isSolved ? (
								<div className="py-3 flex flex-row justify-between">
									<input
										type="text"
										value={newAnswer}
										onChange={(e) => setNewAnswer(e.target.value)}
										className={`px-2 appearance-none 
			              				w-full h-9 text-base rounded hover: bg-${props.color}-100`}
										placeholder="CTF{...}"
									/>
									<button
										type="button"
										onClick={handleFlag}
										className={`bg-${props.color}-300 hover:bg-${props.color}-400 h-9 text-black ml-4 px-4 rounded font-medium border-1 border-${props.color}-300`}
									>
										Отправить
									</button>
								</div>) : null}
						</div>
						<div className={`
									h-7 px-3
									flex justify-between items-center 
									font font-semibold 
									border-t-2 border-${props.color}-400`}
						>
							<div className="flex flex-row items-center">
								<FlagIcon className="w-4 h-4" strokeWidth={1} />
								{/* <span className="pl-2">Simen228</span> */}
							</div>
							{/* <span>2 hours ago by GO_UKRAINE!</span> */}
						</div>
					</>
				) : null}
			</div>
		</>
	);
}
