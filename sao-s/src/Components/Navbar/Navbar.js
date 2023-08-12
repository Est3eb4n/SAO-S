import React from 'react'
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'
import Nav from "react-bootstrap/Nav"
import Dropdown from "react-bootstrap/Dropdown"

const _Navbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar__container bg-body-tertiary">
      <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Container>
    </Container>
    <Navbar.Collapse id="responsive-navbar-nav">

     <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>

    <Container className= "head">
      <Row>
        <Col xs={6} md={4}>
          <Image src="holder.js/171x180" rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image src="holder.js/171x180" roundedCircle />
        </Col>
        <Col xs={6} md={4}>
          <Image src="holder.js/171x180" thumbnail />
        </Col>
      </Row>
    </Container>
    </Navbar.Collapse>
    
  </Navbar>

  )
  
}

export default _Navbar