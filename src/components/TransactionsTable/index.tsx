import React, { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { Container } from './styles'

export default function index() {
  
  interface TransactionProps {
    id: number;
    title: string;
    type: string;
    category: string;
    amount: number;
    created: string;

  }

  const [transactions, setTransactions] = useState<TransactionProps[]>([])
  
  useEffect(()=> {
    api.get('/transactions')
    .then(response => setTransactions(response.data.transactions))

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
                <td>{transaction.created}
                  {new Intl.DateTimeFormat('pt-BR').format( new Date(transaction.created))} 
                </td>
              </tr>
            </tbody>
          ))}
    
      </table>
    </Container>
  )
}
