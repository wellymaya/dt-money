import React, { useState, useEffect } from 'react'
import Dashboard from './components/Dashboard'
import Header from './components/Header'
import TransactionsTable from './components/TransactionsTable'
import { api } from './services/api'
import {GlobalStyle} from './styles/global'

export default function App() {
  
  useEffect(()=> {
    api.get('/transactions')
    .then(response => {console.log(response.data)})

  }, [])

  return (
    <>
    <GlobalStyle />
    <Header/>
    <Dashboard/>
    <TransactionsTable />
    </>
  )
}
