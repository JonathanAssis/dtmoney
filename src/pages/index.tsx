import { useState } from 'react'
import Modal from 'react-modal'
import { GlobalStyled } from '../styles/global'
import { createServer } from 'miragejs'
import { Dashboard } from '../components/Dashboard'
import { Header } from '../components/Header'
import { NewTransactionModal } from '../components/NewTransactionModal'

Modal.setAppElement('#__next');

createServer({
  routes(){
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transaction 1',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          createdAt: new Date()
        }
      ]
    })
  }
})

const Home = () => {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false);
  }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal 
      isOpen={isNewTransactionModalOpen} 
      onRequestClose={handleCloseNewTransactionModal} 
      />     
      <GlobalStyled />
    </>
  )
}

export default Home