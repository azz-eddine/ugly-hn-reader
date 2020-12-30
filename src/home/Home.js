import { Container, Row, Col } from "react-bootstrap";
import {List} from '../components/List'


function Home() {
  return (
    <>
      <header>
        <Container>
          <Row>
            <Col>
              <h1>HN Reader</h1>
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
            <Col>-</Col>
          </Row>
        </Container>  
      </footer>
    </>
  );
}

export default Home;
