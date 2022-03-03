import React from 'react'
import { Container } from './styles'
import Entradas from '../../assets/Entradas.png';
import Saidas from '../../assets/Saidas.png';
import Total from '../../assets/Total.png';

export default function index() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={Entradas} alt=""/>
        </header>
        <strong>RS 18565</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={Saidas} alt=""/>
        </header>
        <strong>RS 18565</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={Total} alt=""/>
        </header>
        <strong>RS 18565</strong>
      </div>
    </Container>
  )
}
