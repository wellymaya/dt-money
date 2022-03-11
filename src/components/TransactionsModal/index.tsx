import Modal from 'react-modal';
import { Container, RadioBox, TransactionTypeContainer } from './styles';
import Entradas from '../../assets/Entradas.png';
import Saidas from '../../assets/Saidas.png';
import Fechar from '../../assets/Fechar.png';
import { FormEvent, useContext, useState } from 'react';

import {api} from '../../services/api'
import { TransactionsContext } from '../../contexts/TransactionsContext'

interface TransactionsModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

function TransactionsModal({isOpen, onRequestClose}:TransactionsModalProps) {
  const { createTransaction } = useContext(TransactionsContext);

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');
  
  async function HandleCreateTransaction(event:FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type
    })
    onRequestClose();
    
  }

  return (
    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName = 'react-modal-overlay'
      className='react-modal-content'
    >
      <button 
        type='button' 
        className='react-modal-close'
        onClick={onRequestClose}
      >
        <img src={Fechar} alt='Fechar modal' /> 
      </button>

      <Container onSubmit={HandleCreateTransaction}>
        <h2>Cadastrar Transação</h2>

        <input 
          placeholder='Titulo' 
          type='text'
          value= {title}
          onChange={event => setTitle(event.target.value)}
        />
        <input 
          placeholder='Valor' 
          type='number'
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}

        /> 
        <input 
          placeholder='Categoria' 
          value={category}
          onChange={event => setCategory(event.target.value)}
        />

        <TransactionTypeContainer>
          <RadioBox 
            type='button'
            onClick={()=> setType('deposit')}
            isActive={type === 'deposit'}
            activeColor= 'green'
          >
            <img src={Entradas} alt='Entrada' />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox 
            type='button'
            onClick={()=> setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor= 'red'
          >
            <img src={Saidas} alt='Saídas' />
            <span>Saídas</span>
          </RadioBox>
        </TransactionTypeContainer>

        <button type='submit'>Cadastrar</button>
      </Container>
    </Modal>
  )
}

export default TransactionsModal;