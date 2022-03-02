import React, { useState } from 'react'
import Logo from '../../assets/Logo.png'
import { Content, Header } from './styles'
import Modal from 'react-modal';

interface headerProps {
  onOpenTransactionModal: () => void;
}

export default function index({onOpenTransactionModal}: headerProps) {


  return (
    <Header>
      <Content>
        <img src= {Logo} alt="logo"/>
        <button type="button" onClick={onOpenTransactionModal}>Nova Transação</button>

      </Content>
    </Header>
  )
}
