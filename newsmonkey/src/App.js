import React, { Component } from 'react'
import Navbar from './component/Navbar'
import News from './component/News'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<News key="home"/>}></Route>
            <Route exact path='/business' element={<News key="business" category="business" />}></Route>
            <Route exact path='/entertainment' element={<News key="entertainment" category=" entertainment" />}></Route>
            <Route exact path='/general' element={<News key="general" category="general" />}></Route>
            <Route exact path='/health' element={<News key="health" category="health" />}></Route>
            <Route exact path='/science' element={<News key="science" category="science" />}></Route>
            <Route exact path='/sports' element={<News key="sports" category="sports" />}></Route>
            <Route exact path='/technology' element={<News key="technology" category="technology" />}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}
