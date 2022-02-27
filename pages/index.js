import Head from 'next/head'
import { Navbar, Container, Tab, Tabs, Row, Col, Card, Button, Pagination } from 'react-bootstrap'

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

let ItemCard = () => {
  return (
    <Container>
      <Row className='col-sm-3'>
        <Col>
          <Card>
            <Card.Img variant="top" src="https://picsum.photos/200/150" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="dark">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

  );
}


export default function Home() {
  return (
    <>
      <Head>
        <title>Web Library</title>
        <meta name="description" content="All in one library of websites" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar expand="lg" variant="dark" bg="dark">
        <Container>
          <Navbar.Brand href="#">WebLibrary</Navbar.Brand>
        </Container>
      </Navbar>

      {/* Tabs */}
      <Container>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="home" title="Cat 1">
            <ItemCard />
          </Tab>
          <Tab eventKey="profile" title="Cat 2">
            <ItemCard />
          </Tab>
          <Tab eventKey="contact" title="Cat 3">
            <ItemCard />
          </Tab>
        </Tabs>

        {/* Pagination */}
        <Pagination size="sm" className="d-flex justify-content-center my-2">
          {items}
        </Pagination>

      </Container>

      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top bg-dark">
        <Container>
          <div className="col-md-4 d-flex align-items-center">
            <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
              <svg className="bi" width="30" height="24"><use href="#bootstrap" /></svg>
            </a>
            <span className="text-muted">&copy; 2022 Company, Inc</span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><use href="#twitter" /></svg></a></li>
            <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><use href="#instagram" /></svg></a></li>
            <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><use href="#facebook" /></svg></a></li>
          </ul>

        </Container>
      </footer>
    </>
  )
}
