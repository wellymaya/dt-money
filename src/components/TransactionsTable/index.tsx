import { useContext } from 'react'
import { TransactionsContext } from '../../contexts/TransactionsContext';
import { Container } from './styles'
import Fechar from '../../assets/Fechar.png'

export default function index() {
    const {transactions} = useContext(TransactionsContext);

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
        {transactions.map(transaction => (
            <tbody key={transaction.id}> 
              <tr>
                <td>{transaction.title}</td>
                <td className={transaction.type}> 
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(transaction.amount)} 
                </td>
                <td>{transaction.category}</td>
                <td>
                  {new Intl.DateTimeFormat('pt-BR').format( new Date(transaction.created))} 
                </td>
              </tr>
            </tbody>
          ))}
      </table>
    </Container>
  )
}
