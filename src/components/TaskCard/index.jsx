import { React, useState, useEffect } from "react";
import { CheckIcon } from "@heroicons/react/outline";
import { FlagIcon } from "@heroicons/react/solid";

import { useSendFlagMutation } from "../../api/tasks";

export default function TaskCard(props) {
	const [isOpen, setIsOpen] = useState(0);
	const [newAnswer, setNewAnswer] = useState("");
	const [isCorrect, setCorrect] = useState("");
	const [inputFlag, { isSuccess, isLoading }] = useSendFlagMutation();

	useEffect(() => {
	}, [isOpen]);

	const handleFlag = async () => {
		if (newAnswer) {
			const flag = await inputFlag({
				id: props.task.id,
				flag: newAnswer,
			}).unwrap();
			setNewAnswer("");
			props.refetch();
			setCorrect(flag.isCorrect);
		}
	};

	return (
		<>
			<div className={`
				${props.color.background}
				border-2 rounded ${props.color.border}
				overflow-clip
				${isOpen ? "2xl:col-span-4 lg:col-span-3 md:col-span-2" : ""}
			`}
			>
				<div
					className={`p-5 ${isOpen ? `border-b-2  ${props.color.border}` : ""}`}
					onClick={() => setIsOpen(!isOpen)}
				>
					<div className="flex flex-col justify-items-end h-full">
						{/* Title and points */}
						<div className=" flex flex-row justify-between font-semibold text-xl">
							<div className={`${props.color.text}`}>
								{props.task.title}
							</div>
							<div className="text-black ml-5">{props.task.points}</div>
						</div>
						{/* Category and solve count */}
						<div className="flex flex-row justify-between items-center">
							<div className="text-lg font-normal">
								<div className="flex flex-row">
									<span className={`${props.color.text}`}>
										{props.task.category}
									</span>
									{isOpen ? (
										<div className="contents">
											{props.tags.map((tag, _) => (
												<div className="ml-5">
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
								<span className="text-black font-medium">0</span>
							</div>
						</div>
						{/* Author */}
						{isOpen ? (
							<div className="font-medium pt-2">
								by {props.task.author.name} ({props.task.author.contact})
							</div>
						) : null}
					</div>
				</div>
				{isOpen ? (
					<>
						<div className="p-5">
							<p>{props.task.description}</p>

							<div className="text-red-600 py-4">
								{props.task.link ? props.task.link : "file.zip //TODO:сделать ссылкой"}
							</div>
							{props.task.isSolved ? null : (
								<div className="pt-5 flex flex-row justify-between">
									<input
										type="text"
										value={newAnswer}
										onChange={(e) => setNewAnswer(e.target.value)}
										className={`appearance-none
											block w-full h-9
											text-base rounded
											border-2 ${props.color.border}
											focus:${props.color.focus} focus:ring-4 focus:${props.color.border}
											`}
										placeholder="flag{...}"
									/>
									<button
										type="button"
										onClick={handleFlag}
										className={`
											${props.color.textLight}
											${props.color.backgroundDark} 
											hover:${props.color.border}
											hover:${props.color.hover}
											h-9 ml-4 px-4
											text-black  rounded font-medium
											border-1 ${props.color.border}
										`}
									>
										Отправить
									</button>
								</div>)}
						</div>
						<div className={`
							h-7 px-3
							flex justify-between items-center 
							font-semibold 
							border-t-2 ${props.color.border}
						`}
						>
							<div className="flex flex-row items-center">
								<FlagIcon className={`w-4 h-41 ${props.color.text}`} strokeWidth={1} />
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
