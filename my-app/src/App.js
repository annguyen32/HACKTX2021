import logo from './logo.svg';
import './App.css';
import Search from './Search.js';
import { useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
const { search } = window.location;
const query = new URLSearchParams(search).get('s');
const [searchQuery, setSearchQuery] = useState(query || '');
const filteredPosts = filterPosts(posts, searchQuery);

  return (<Router>
    <div className="App">
      <header className="App-header">
        <h1> Welcome To Pantry Chef</h1>
        <Search searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}/>
        <il>
                {filteredPosts.map((post) => (
                    <li key={post.id}>{post.name}</li>
                ))}
        </il>
      </header>
    </div>
   </Router>);
 
}
const posts = [
  { id: '1', name: 'Beef & Brocolli' },
  { id: '2', name: 'Orange Chicken' },
  { id: '3', name: 'Maccaronni & Cheese' },
  { id: '4', name: 'Cheese Burger' },
];


const filterPosts = (posts, query) => {
  if (!query) {
      return posts;
  }

  return posts.filter((post) => {
      const postName = post.name.toLowerCase();
      return postName.includes(query);
  });
 
};
export default App;
