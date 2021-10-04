const Search = (props) => {
    return (
        <div>
            <input 
            type="text" 
            placeholder="Search Movie..." 
            className="search"
            value={props.value}
            onChange={(e) => props.setSearchValue(e.target.value)}
            />
        </div>
    )
}

export default Search
