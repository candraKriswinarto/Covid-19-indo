import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import positive from '../icons/positive.svg';
import getWell from '../icons/get-well.svg';
import death from '../icons/death.svg';

export const Statistics = () => {
  const [dataInd, setDataInd] = useState([]);

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = () => {
    axios.get('https://cors-anywhere.herokuapp.com/https://api.kawalcorona.com/indonesia')
      .then(res => setDataInd(res.data));
  }

  return (
    <section>
      <Container>
        <h3 className="text-center">Statistic Indonesia</h3>
        <p className="text-center">Data di bawah ini terupdate secara realtime</p>
        {dataInd.map((data, index) => (
          <Row className="text-center mt-4" key={index}>
            <Col md="4">
              <img style={{ width: '40%' }} src={positive} alt="" />
              <h4 className="mt-1">Positif</h4>
              <h5>{data.positif}</h5>
            </Col>
            <Col md="4">
              <img style={{ width: '40%' }} src={getWell} alt="" />
              <h4 className="mt-1">Sembuh</h4>
              <h5>{data.sembuh}</h5>
            </Col>
            <Col md="4">
              <img style={{ width: '40%' }} src={death} alt="" />
              <h4 className="mt-1">Meninggal</h4>
              <h5>{data.meninggal}</h5>
            </Col>
          </Row>
        ))}
      </Container>
    </section>
  )
}
