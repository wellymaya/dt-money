import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import Dashboard from './components/Dashboard'
import Header from './components/Header'
import TransactionsTable from './components/TransactionsTable'
import { api } from './services/api'
import {GlobalStyle} from './styles/global'

Modal.setAppElement("#root");

export default function App() {
  
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
    <GlobalStyle />
    <Header onOpenTransactionModal ={handleOpenTransactionModal}/>
    <Modal 
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseTransactionModal}
    >
      <h2>Cadastrar Transação</h2>

    </Modal>
    <Dashboard/>
    <TransactionsTable />
    </>
  )
}
