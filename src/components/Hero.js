import React from 'react';
import {
  Jumbotron,
  Row,
  Col,
  Button,
  Container
} from 'reactstrap';
import hero_icon from '../icons/social_distancing.svg';

export const Hero = () => {
  return (
    <Jumbotron>
      <Container>
        <Row>
          <Col md="6" className="text-center mb-4">
            <img style={{ width: '70%' }} src={hero_icon} alt="" />
          </Col>
          <Col md="6" className="d-flex flex-column justify-content-center">
            <blockquote className="blockquote text-right">
              <p className="mb-0">Menjaga jarak fisik bukan berarti kita memutus hubungan sosial dengan orang yang kita cintai dari keluarga kita</p>
              <footer className="blockquote-footer"><cite title="Source Title">Kepala Unit Penyakit dan Zoonosis WHO, Maria Van Kerkhove.</cite></footer>
            </blockquote>
            <p className="lead text-right">
              <Button href="https://www.who.int/" color="primary">Learn More</Button>
            </p>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  )
}
