import React, { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { Container } from './styles'

export default function index() {
  const [transactions, setTransactions] = useState([])
  
  useEffect(()=> {
    api.get('/trasactions')
    .then(response => console.log(response.data))

  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        {}
        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="withdraw">R$ 12.000</td>
            <td>Desenvolvimento</td>
            <td>20/12/7</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$ 12.000</td>
            <td>Desenvolvimento</td>
            <td>20/12/7</td>
          </tr>
        </tbody>
        <tbody >
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="withdraw">R$ 12.000</td>
            <td>Desenvolvimento</td>
            <td>20/12/7</td>
          </tr>
        </tbody>

      </table>
    </Container>
  )
}
