import './Searchbar.css';
// Icons
// Import icons
import { BsSearch } from 'react-icons/bs';

export default function Searchbar(props) {
  return (
    <div id="searchbar">
      <a id="search-random" href="https://en.wikipedia.org/wiki/Special:Random" target="_blank" rel="noreferrer">Random Article</a>
      <div>
        <form id="search-form" onSubmit={props.searchHandler}>
          <input id="search-input" type="text" placeholder="Search Wikipedia" autoComplete="off"/>
          <button id="search-submit" type="submit"><span><BsSearch/></span></button>
        </form>
      </div>
    </div>
  );
}