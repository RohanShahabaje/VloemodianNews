import './App.css';

//IN THIS WE WILL START USING CLASS BASED EXTENSIONS//
//rcc type kiya snippet use kiya//
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import NewsItem from './Components/NewsItem';
import LoadingBar from 'react-top-loading-bar'
import {BrowserRouter as Router,Switch,Route,Link,Routes} from "react-router-dom";




const App =()=> {
  const pageSize = 70;
  const apikey = '666ce1602f77413cbc6df76b8ff5f986'

    const[Progress, setProgress] = useState(0)

 
 
    return (
      <div style={{backgroundColor:'#192133'}}>
      <div >
        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            height={3}
            progress={Progress}

          />
          <Routes >



            <Route exact path='/' element={<News setProgress={setProgress} apikey={apikey}  key="general" pageSize={pageSize} country="in" category="general" />} />

            <Route exact path='/business' element={<News setProgress={setProgress} apikey={apikey}  key="business" pageSize={pageSize} country="in" category="business" />} />
            
            <Route exact path='/entertainment' element={<News setProgress={setProgress} apikey={apikey}  key="entertainment" pageSize={pageSize} country="in" category="entertainment" />} />

            <Route exact path='/general' element={<News setProgress={setProgress} apikey={apikey}  key="general" pageSize={pageSize} country="in" category="general" />} />

            <Route exact path='/health' element={<News setProgress={setProgress} apikey={apikey}  key="health" pageSize={pageSize} country="in" category="health" />} />

            <Route exact path='/science' element={<News setProgress={setProgress} apikey={apikey}  key="science" pageSize={pageSize} country="in" category="science" />} />

            <Route exact path='/sports' element={<News setProgress={setProgress} apikey={apikey}  key="sports" pageSize={pageSize} country="in" category="sports" />} />

            <Route exact path='/technology' element={<News setProgress={setProgress} apikey={apikey}  key="technology" pageSize={pageSize} country="in" category="technology" />} />


          </Routes>
        </Router>
      </div>
      </div>
    )
  }

export default App