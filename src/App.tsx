import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import Dashboard from './components/Dashboard'
import Header from './components/Header'
import TransactionsModal from './components/TransactionsModal'
import TransactionsTable from './components/TransactionsTable'
import {GlobalStyle} from './styles/global'
import { TransactionsContext, TransactionsProvider } from './contexts/TransactionsContext'

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
  
    <TransactionsProvider>
      <GlobalStyle />
      <Header onOpenTransactionModal ={handleOpenTransactionModal}/>
      <TransactionsModal onRequestClose ={handleCloseTransactionModal} isOpen={isNewTransactionModalOpen}/>

      <Dashboard/>
      <TransactionsTable />
    </TransactionsProvider>
   
  )
}
