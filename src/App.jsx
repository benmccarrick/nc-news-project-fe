import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import HomePage from './components/HomePage'
import ArticleList from './components/ArticleList'
import SingleArticle from './components/SingleArticle'

function App() {

  return (
    <div>
      <Header/>
      <Routes>
        <Route path = "/" element={<HomePage/>}/>
        <Route path = "/articles" element={<ArticleList/>}/>
        <Route path = "/articles/:article_id" element={<SingleArticle/>}/>
      </Routes>
    </div>
  )
}

export default App
