import { useHistory } from 'react-router-dom';

const SearchBar = ({searchQuery, setSearchQuery}) => (
    <form action="/" method="get">
        <div>
        <label htmlFor="header-search">
            <span className="visually-hidden">Search ingrdients</span>
        </label>
       </div>

        <input
            value={searchQuery}
            onInput={e => setSearchQuery(e.target.value)}
            type="text"
            id="header-search"
            placeholder="Search here"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
);

export default SearchBar;