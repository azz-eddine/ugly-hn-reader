import { Container, Row, Col } from "react-bootstrap";
import {List} from '../components/List'


function Home() {
  return (
    <>
      <header>
        <Container>
          <Row>
            <Col>
              <h1>Ugly HN Reader</h1>
            </Col>
          </Row>
        </Container>
      </header>
      <main>
        <Container>
          <Row>
            <Col>
              <List />
            </Col>
          </Row>
        </Container>
      </main>
      <footer>
        <Container>
          <Row>
            <Col>
              <p><small>Really Ugly @2020</small></p>
            </Col>
          </Row>
        </Container>  
      </footer>
    </>
  );
}

export default Home;
