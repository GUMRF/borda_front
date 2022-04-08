import { SearchIcon } from "@heroicons/react/outline"

export default function SearchBar() {
  return (
    // TODO: form instead of input
    <div className="h-full flex items-center">
      <div className="
        flex items-center
        pl-4 pr-2"
      >
        <form>
          <div className="
            flex items-center
            h-10
            hover:bg-gray-500
            focus:bg-gray-500
            rounded
            "
          >
            <span>
              <SearchIcon
                className="w-6 h-6"
                strokeWidth={1}
              />
            </span>
            <input 
              className="
              appearance-none
              bg-zinc-800
              focus:outline-none focus:bg-gray-500
              hover:bg-gray-500
              hover:none" type="search" id="search"
              placeholder="Search task names, categories, points"
            />
          </div>
        </form>
      </div>
    </div>

  )
}