import React, { useEffect, useState } from 'react';
import './App.css';
import { Routes ,Route} from 'react-router-dom';
import axios from 'axios';
import Signup from './components/Signup';
import Login from './components/Login';
import GameBoard from './components/GameBoard';
import SuggestBoard from './components/SuggestBoard';
import Header from './Header';
import MarketBoard from './components/MarketBoard';
import PopularBoard from "./components/PopularBoard";
import ViewPosts from './components/ViewPosts';
// import WritePage from "./components/WritePage";

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/test')
      .then(res => {
        setMessage(res.data);
      })
      .catch(err => {
        console.error('Error fetching the message:', err);
      });
  }, []);

  return (
    <div className="App">
      <Header />
        <Routes>
            <Route path='/gameboard' element={<GameBoard />} />
            <Route path="/viewpost/:id" element={<ViewPosts />} />
            <Route path='/popularboard' element={<PopularBoard />} />
            <Route path='/suggestboard' element={<SuggestBoard />} />  
            <Route path='/marketboard' element={<MarketBoard />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<div><img src="gameLogo/MainPageBigLogo.png" alt="mainPageLogo" style={{ width: '800px', height: '600px' }}/></div>}/>
            {/*<Route path='/write' element={<WritePage />} />*/}
        </Routes>
        {message}
    </div>
  );
}

export default App;

