import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Container } from 'reactstrap';

export const Provinsi = () => {
  const [dataInd, setDataInd] = useState([]);

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = () => {
    axios.get('https://cors-anywhere.herokuapp.com/https://api.kawalcorona.com/indonesia/provinsi')
      .then(res => setDataInd(res.data));
  }

  return (
    <section className="mt-5 pt-5">
      <Container>
        <h3 className="text-center">Data Setiap Provinsi</h3>
        <p className="text-center">Data di bawah ini terupdate secara realtime</p>
        <div className="table-responsive">
          <Table striped>
            <thead>
              <tr>
                <th>No</th>
                <th>Provinsi</th>
                <th>Positif</th>
                <th>Sembuh</th>
                <th>Meninggal</th>
              </tr>
            </thead>
            <tbody>
              {dataInd.map((data, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{data.attributes.Provinsi}</td>
                  <td>{data.attributes.Kasus_Posi}</td>
                  <td>{data.attributes.Kasus_Semb}</td>
                  <td>{data.attributes.Kasus_Meni}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </section>
  )
}
