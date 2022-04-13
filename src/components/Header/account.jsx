import { DropDownMenu } from "./dropdown";
import { UserCircleIcon } from "@heroicons/react/outline";

export function Account() {
  const items = ["sign-out", "settings"];

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
