import './ArticlesList.css';

export default function ArticlesList(props) {
  return (
    <div id="articles-list">
      <ul id="articles">
        {props.searchResults.map(article => (
          <li key={article.pageid}>
            <a className="article-link" href={`https://en.wikipedia.org/?curid=${article.pageid}`} target="_blank" rel="noreferrer">
              <div className="article-title">{article.title}</div>
              <hr/>
              <div className="article-snippet">{article.snippet}</div>
              <div className="article-timestamp">[ {article.timestamp} ]</div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}