import TaskCard from "../components/TaskCard";

export function Challenges() {
	return (
		<>
			<div className="flex flex-row w-full text-sm">
				<div className="
					w-60 w-min-60 h-screen
					px-2 pt-16
					border-r-2 border-zinc-300
					fixed">
					<div className=" py-2 border-b">
						<div className="
							px-2  h-8
							flex flex-row justify-between items-center">
							<span className="pl-2">Category</span>
							<select className="border bg-white rounded border-zinc-300">
								<option>Web</option>
								<option>Crypto</option>
								<option>Reverse</option>
								<option>Osint</option>
								<option>Pwn</option>
							</select>
						</div>
					</div>
					<div className=" py-2 border-b">
						<div className="px-2  h-8
							flex flex-row justify-between items-center">
							<label className="inline-flex items-center">
								<input type="checkbox" className="w-4 h-4 rounded"/>
								<span className="ml-2">Show solved</span>
							</label>
						</div>
					</div>
					<div className=" py-2 border-b">
						<div className="px-2  h-8
							flex flex-row justify-between items-center">
							<label className="inline-flex items-center">
								<input type="checkbox" className="w-4 h-4 rounded"/>
								<span className="ml-2">Solved in the end</span>
							</label>
						</div>
					</div>
				</div>

				<div className="pl-60">
					<div className="h-16 border-b-2 border-zinc-300 flex items-center">
						<marquee direction="right" scrollamount="20" className="text-2xl font-semibold">
							Ебать ты чукча!
						{/*https://www.npmjs.com/package/react-fast-marquee*/}
						</marquee>
					</div>
					<div className="p-7">
						<TaskCard />
					</div>
					<div className="grid grid-cols-4 gap-1 p-7">
						<TaskCard />
						<TaskCard />
						<TaskCard />
						<TaskCard />
						<TaskCard />
						<TaskCard />
						<TaskCard />
						<TaskCard />
					</div>
				</div>
			</div>
		</>
	);
}