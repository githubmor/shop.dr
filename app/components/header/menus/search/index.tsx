import SearchIcon from "./search-icon";

function Search() {
  return (
    <div className="flex-auto flex gap-3 justify-end lg:justify-start lg:px-4 lg:py-3 lg:rounded-full lg:bg-base-300">
      <SearchIcon />
      <input
        placeholder="Search for products..."
        className="hidden lg:block  bg-transparent outline-none text-neutral/40 "
      />
    </div>
  );
}

export default Search;
