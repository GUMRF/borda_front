import { DropDownMenu } from "./DropDownMenu";
import { UserCircleIcon } from "@heroicons/react/outline";
import { useGetUserProfileQuery } from "../../api/users";

export function Account() {
	const items = ["logout", "profile"];

	useGetUserProfileQuery();

	return (
		<DropDownMenu
			items={items}
			content={
				<div className="flex flex-col">
					<span className="">kekw</span>
					<span className="text-xs">Team</span>
				</div>
			}
			icon={
				<span>
					<UserCircleIcon className="h-8 w-8" strokeWidth={1} />
				</span>
			}
			position="right"
		/>
	);
}
