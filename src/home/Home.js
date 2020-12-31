import {List} from '../components/List'
import {Container, Row, Col} from 'react-bootstrap'

function Home() {
  return (
    <>
      <header>
        <Container>
          <Row>
            <Col>
              <h2 className="display-2">Ugly HN Reader</h2>
            </Col>
          </Row>
        </Container>
      </header>
      <main>
        <List />
      </main>
      <footer>
        <Container>
          <Row>
            <Col>
              <p className="text-center"><small>Really Ugly @2020</small></p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Home;
