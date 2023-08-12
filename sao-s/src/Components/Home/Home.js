import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/esm/Image'
import imagen1 from "../../Imagenes/chees-choco.jpg"
import imagen2 from "../../Imagenes/cupcakes.jpg"
import imagen3 from "../../Imagenes/mini.jpeg"
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/esm/Container'
import "./Home.css"
const Home = () => {
  return (
    <div>
        <Carousel>
      <Carousel.Item>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        <Image fluid src={imagen1}></Image>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Image fluid src={imagen2}></Image>
      <Carousel.Item>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
        <Image fluid src={imagen3}></Image>
      </Carousel.Item>
    </Carousel>

    <Container className='home__cardcont'>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={imagen1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagen2} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagen3} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Container>
    </div>
    
  )
}

export default Home