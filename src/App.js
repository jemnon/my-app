import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from './components/pagination';

const CLIENT_ID = '0b79138227bbd92683b7';
const CLIENT_SECRET = '1bea473f568c6345458d7ca288b5da4d0a37e0d5';

function App() {
  const [currentPage, setPage] = useState(1);
  const [items, setItems] = useState(null);
  const handleSetPage = page => {
    setPage(page);
  };
  useEffect(
    () => {
      const fetchData = async () => {
        const items = await axios.get(`https://api.github.com/users/wesbos/repos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}
      &page=${currentPage}&per_page=10`);
        setItems(items);
      };
      fetchData();
    },
    [currentPage, setPage],
  );
  const { data } = items || {};
  return (
    <div id="root" className="container">
      <h1>Wesbos Github Repos</h1>
      {data && Array.isArray(data)
        ? data.map(item => (
            <ul>
              <li key={item.id}>
                <p>Name: {item.name}</p>
                <p>
                  Url: <a href={item.html_url}>{item.html_url}</a>
                </p>
              </li>
            </ul>
          ))
        : '...Is Fetching'}
      <Pagination data={data} currentPage={currentPage} onChange={handleSetPage} />
    </div>
  );
}

export default App;
