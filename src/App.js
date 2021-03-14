import { useEffect, useState } from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import News from './Components/News/News';

function App() {
  const [articles,setArticles]=useState([]);
  useEffect(() =>{
    const url='https://newsapi.org/v2/top-headlines?country=us&apiKey=780875ad571549749544c1bcfef77b44';
    fetch(url)
    .then(res=>res.json())
    .then(data=>setArticles(data.articles))
  },[])

  return (
    <div>
      <Nav></Nav>
      {
        articles.map(article=><News article={article}></News>)
      }
      
    </div>
  );
}

export default App;
