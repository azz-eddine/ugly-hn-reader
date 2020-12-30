import {useState, useEffect} from 'react'
import { Pagination } from 'react-bootstrap'
import {HN_TOPSTORIES_URL, HN_NEWSTORIES_URL, HN_BESTSTORIES_URL, DEBUG} from "../constants/constants"
import {Item} from './Item'
import {Stories} from '../libs/stories'

export const List = () => {
  const [stories, setStories] = useState([])
  const [storiesToShow, setStoriesToShow] = useState([])
  const [page, setPage] = useState(1)
  const [pageStart, setPageStart] = useState(1)
  const [pageEnd, setPageEnd] = useState(10)
  const [source, setSource] = useState(HN_TOPSTORIES_URL)
  const changeSource = (source) => {
    DEBUG && console.debug(source)
    setSource(source)
  }
  const changePage = (e) => {
    e.preventDefault()
    const pageRequested = e.target.text
    setPage(pageRequested)
    setPageStart((pageRequested*10))
    setPageEnd((pageRequested*10+10))
    setStoriesToShow(stories.slice(pageStart, pageEnd))
  }

  useEffect(() => {
    Stories(source)
      .then(ts => {
        setStories(ts)
        setStoriesToShow(ts.slice(pageStart, pageEnd))
      })
  }, [source, pageStart, pageEnd])

  return (
    <>
      <ul className="list-inline">
        <li className="list-inline-item" key="1"><a href="#/" onClick={() => changeSource(HN_TOPSTORIES_URL)}>Top Stories</a></li>
        <li className="list-inline-item" key="2"><a href="#/" onClick={() => changeSource(HN_NEWSTORIES_URL)}>New Stories</a></li>
        <li className="list-inline-item" key="3"><a href="#/" onClick={() => changeSource(HN_BESTSTORIES_URL)}>Best Stories</a></li>
      </ul>
      <ul>
        {storiesToShow.map((item) => <Item item={item} key={item} />)}
      </ul>
      <Pagination size="sm">
        {[...Array(50)].map((v,i) => 
          <Pagination.Item key={i} active={page.toString() === (i+1).toString()}>
            <a href="#/" onClick={changePage}>{(i+1)}</a>&nbsp; 
          </Pagination.Item>
        )}
      </Pagination>
    </>
  )
}