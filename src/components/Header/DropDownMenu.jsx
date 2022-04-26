import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { TemplateIcon } from "@heroicons/react/outline";

const DropDownMenuItem = (props) => {
	return (
		<Menu.Item>
			{({ active }) => (
				<Link
					to={`/${props.label}`}
					className={`px-2 ${active ? "bg-blue-600" : ""}`}
				>
					<div className="h-12 flex flex-row items-center">
						<span className="px-2 align-middle">
							<TemplateIcon className="w-6 h-6" strokeWidth={1} />
						</span>
						<span className="capitalize">{props.label}</span>
					</div>
				</Link>
			)}
		</Menu.Item>
	);
};

export function DropDownMenu(props) {

	return (
		<Menu>
			<Menu.Button
				as="div"
				className="flex items-center h-full w-60 border-r-2 border-zinc-900 hover:bg-zinc-900"
			>
				<div className="mx-4">{props.icon}</div>
				<div className="grow pl-2 flex items-center">{props.content}</div>
				<span>
					<ChevronDownIcon
						className="w-6 h-6 mr-3 ml-1"
						aria-hidden="true"
						strokeWidth={1}
					/>
				</span>
			</Menu.Button>

			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items
					as="div"
					className={`absolute z-50 top-14 my-2 ${props.position === 'right' ? "right-0" : "left-0"} w-60 shadow-lg bg-zinc-800`}
				>
					<div className="flex flex-col py-2">
						{props.items.map((item, _) => (
							<DropDownMenuItem label={item} />
						))}
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
}
