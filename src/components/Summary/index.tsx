import { useContext } from 'react'
import { Container } from './styles'
import Entradas from '../../assets/Entradas.png';
import Saidas from '../../assets/Saidas.png';
import Total from '../../assets/Total.png';
import { TransactionsContext } from '../../contexts/TransactionsContext';

export default function index() {

  const { transactions } = useContext(TransactionsContext);

  const summary = transactions.reduce((acumulator, transaction) => {
    if(transaction.type === 'deposit') {
      acumulator.deposits += transaction.amount
      acumulator.total += transaction.amount
    } else {
      acumulator.withdraws += transaction.amount
      acumulator.total -= transaction.amount
    }
 
    return acumulator;
  }, {
    deposits: 0,
    withdraws: 0, 
    total: 0
  });

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={Entradas} alt=""/>
        </header>
        <strong>R$ {new Intl.NumberFormat().format(summary.deposits )}</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={Saidas} alt=""/>
        </header>
        <strong>R$ {new Intl.NumberFormat().format(summary.withdraws )}</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={Total} alt=""/>
        </header>
        <strong>R$ {new Intl.NumberFormat().format(summary.total )}</strong>
      </div>
    </Container>
  )
}
