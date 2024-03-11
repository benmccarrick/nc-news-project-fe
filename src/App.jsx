import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import HomePage from './components/HomePage'
import ArticleList from './components/ArticleList'

function App() {

  return (
    <div>
      <Header/>
      <Routes>
        <Route path = "/" element={<HomePage/>}/>
        <Route path = "/articles" element={<ArticleList/>}/>
      </Routes>
    </div>
  )
}

export default App
