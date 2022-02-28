import React from 'react'
import Logo from '../../assets/Logo.png'
import { Content, Header } from './styles'

export default function index() {
  return (
    <Header>
      <Content>
        <img src= {Logo} alt="logo"/>
        <button type="button">Nova Transação</button>
      </Content>
    </Header>
  )
}
