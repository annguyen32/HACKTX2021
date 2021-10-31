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
        <h1>Welcome To Pantry Chef</h1>
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
  { id: '1',  name: 'Beef & Brocolli',      ingredients: ["beef","soy sauce","brocolli","sugar","cornstarch","rice","oyster sauce"] },
  { id: '2',  name: 'Orange Chicken',       ingredients: ["chicken breast","orange juice","cornstarch","ginger","garlic","soy sauce"] },
  { id: '3',  name: 'Maccaronni & Cheese',  ingredients: ["macaroni","cheese"] },
  { id: '4',  name: 'Cheese Burger',        ingredients: ["bread","bun","ground beef","cheese","ketchup","lettuce","tomato"] },
  { id: '5',  name: 'Pancakes',             ingredients: ["flour","sugar","salt","baking soda","milk","butter"] },
  { id: '6',  name: "Fried rice",           ingredients: ["rice","egg","carrot","onion","peas","soy sauce",] },
  { id: '7',  name: "Karaage",              ingredients: ["chicken","flour","cornstarch","soy sauce"] },
  { id: '8',  name: "Gumbo",                ingredients: ["flour","chicken broth","chicken","celery","onion","bell pepper","garlic"] },
  { id: '9',  name: "Mapo Tofu",            ingredients: ["tofu","bean curd paste","ground pork","soy sauce"] },
  { id: '10', name: "Egg Drop Soup",        ingredients: ["egg","chicken broth","ginger","green onion","cornstarch"] },
  { id: '11', name: "Japanese Curry",       ingredients: ["beef","chicken","potato","carrot","onion","curry cube"] }
];


const filterPosts = (posts, query) => {
  if (!query) {
      return posts;
  }

  return posts.filter((post) => {
      const postName = post.name.toLowerCase();
      const postList = post.ingredients.filter((food) => food.includes(query)).length > 0;
      return postName.includes(query) || postList;
  });
 
};
export default App;
