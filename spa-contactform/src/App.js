import React, { useState, useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

//Import Components
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Loading from './components/Loading/Loading';

//Import Pages
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import BlogPost from './pages/BlogPost/BlogPost';

function App() {

  //State
  const [loading, setLoading] = useState(true);

  //useEffect runs after the component renders
  useEffect(() => {
    const loadingTimer = setTimeout(()=>{
      clearTimeout(loadingTimer);
      setLoading(false);
    }, 1);
  });

  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="content">
        {loading ? (<Loading />) : 
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
          <Route exact path="/blog" component={Blog} />
          {/* The :id is a URL variable*/}
          <Route path="/blog/:blogID" component={BlogPost} /> 
        </Switch>}
      </div>
      
    </div>
    
  );
}

export default App;
