export default function SearchBar() {
    return (
    // TODO: form instead of input
    <input
      type="search"
      class="
      mx-3 w-72  text-base form-control first-letter rounded
      hover: bg-zinc-400
      "
      id="Search"
      placeholder="Search tasks, categories, tags"
    />
    )
}