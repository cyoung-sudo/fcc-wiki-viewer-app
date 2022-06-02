import './WikiViewer.css';
// Components
import ArticlesList from './articlesList/ArticlesList';
import Searchbar from './searchbar/Searchbar';
// Icons
import { FcWikipedia } from 'react-icons/fc';

// WikiViewer presentational component
export default function WikiViewer(props) {
  return (
    <div id="wikiViewer">
      <h1 id="title"><span><FcWikipedia/></span>iki Viewer</h1>
      <Searchbar searchHandler={props.searchHandler}/>
      {props.searched &&
        <ArticlesList searchResults={props.searchResults}/>
      }
    </div>
  );
}
