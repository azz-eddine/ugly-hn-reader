import {useState, useEffect} from 'react'
import {Container, Row, Col, Spinner, Nav, Pagination} from 'react-bootstrap'
import {HN_TOPSTORIES_URL, HN_NEWSTORIES_URL, HN_BESTSTORIES_URL} from "../constants/constants"
import {Item} from './Item'
import {Stories} from '../libs/stories'

export const List = () => {
  const [loading, setLoding] = useState(false)
  const [stories, setStories] = useState([])
  const [storiesToShow, setStoriesToShow] = useState([])
  const [page, setPage] = useState(1)
  const [pageStart, setPageStart] = useState(1)
  const [pageEnd, setPageEnd] = useState(10)
  const [source, setSource] = useState(HN_TOPSTORIES_URL)

  const changeSource = (source) => {
    requestPage(1)
    setSource(source)
  }
  const requestPage = (pageRequested) => {
    setPage(pageRequested)
    setPageStart((pageRequested*10))
    setPageEnd((pageRequested*10+10))
  }
  const changePage = (e) => {
    e.preventDefault()
    const pageRequested = e.target.text
    requestPage(pageRequested)
    setStoriesToShow(stories.slice(pageStart, pageEnd))
  }
  
  useEffect(() => {
    setLoding(true)
    Stories(source)
      .then(ts => {
        setStories(ts)
        setStoriesToShow(ts.slice(pageStart, pageEnd))
        setLoding(false)
      })
  }, [source, pageStart, pageEnd])

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Nav
              variant="pills"
              className="mb-2"
              defaultActiveKey={HN_TOPSTORIES_URL} as="ul"
              onSelect={(selectedKey) => {
                changeSource(`${selectedKey}`)
              }}
            >
              <Nav.Item>
                <Nav.Link href="#/top-stories" eventKey={HN_TOPSTORIES_URL}>
                    Top Stories
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#/new-stories" eventKey={HN_NEWSTORIES_URL}>New Stories</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#/best-stories" eventKey={HN_BESTSTORIES_URL}>Best Stories</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            {loading ? 
            <Spinner className="" size="sm" variant="primary" animation="grow" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
            :
            <ul className="list-unstyled mb-5">
              {storiesToShow.map((item) => <Item item={item} key={item} />)}
            </ul>         
            }
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <Pagination className="justify-content-center">
              {/* <Pagination.First />
              <Pagination.Prev /> */}
              <Pagination.Item onClick={changePage} active={Number(page) === 1}>{1}</Pagination.Item>

              {Number(page)-2 > 2 && <Pagination.Ellipsis />}
              
              {Number(page)-2 > 1 && <Pagination.Item onClick={changePage} >{Number(page)-2}</Pagination.Item>}
              {Number(page)-1 > 1 && <Pagination.Item onClick={changePage}>{Number(page)-1}</Pagination.Item>}
              
              {Number(page) > 1 && Number(page) < 49 && <Pagination.Item active>{page}</Pagination.Item>}
              
              {Number(page)+1 < 49 && <Pagination.Item onClick={changePage}>{Number(page)+1}</Pagination.Item>}
              {Number(page)+2 < 49 && <Pagination.Item onClick={changePage}>{Number(page)+2}</Pagination.Item>}

              {Number(page)+1 < 49 && <Pagination.Ellipsis />}

              <Pagination.Item onClick={changePage} active={Number(page) === 49}>{49}</Pagination.Item>
              {/* <Pagination.Next />
              <Pagination.Last /> */}
            </Pagination>
          </Col>
        </Row>
      </Container>
    </>
  )
}