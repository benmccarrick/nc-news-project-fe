import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import HomePage from './components/HomePage'
import ArticleList from './components/ArticleList'
import SingleArticle from './components/SingleArticle'
import { UsersContext } from './Contexts/UsersContext'
import { useContext, useEffect } from 'react'
import TopicsList from './components/TopicsList'
import ErrorPage from './components/ErrorPage'

const App = () => {
  const { setCurrentUsers } = useContext(UsersContext);

  useEffect(() => {
    setCurrentUsers("grumpy19");
  }, []);

  return (
    <div>
      <Header/>
      <Routes>
        <Route path = "/" element={<HomePage/>}/>
        <Route path = "/articles" element={<ArticleList/>}/>
        <Route path = "/articles/:article_id" element={<SingleArticle/>}/>
        <Route path = "/topics" element={<TopicsList/>}/>
        <Route path = "*" element={<ErrorPage message={"page does not exist"}/>}/>
      </Routes>
    </div>
  )
}

export default App
