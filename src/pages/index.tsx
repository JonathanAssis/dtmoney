import { useState } from 'react'
import Modal from 'react-modal'
import { GlobalStyled } from '../styles/global'
import { createServer, Model } from 'miragejs'
import { Dashboard } from '../components/Dashboard'
import { Header } from '../components/Header'
import { NewTransactionModal } from '../components/NewTransactionModal'
import { TransactionsProvider } from '../hooks/useTransactions'

Modal.setAppElement('#__next');

createServer({
  models: {
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Abrão Filho',
          type: 'deposit',
          category: 'Salário',
          amount: 3088,
          createdAt: new Date('2022-04-07')
        }
      ],
    })
  },

  routes(){
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
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
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal 
      isOpen={isNewTransactionModalOpen} 
      onRequestClose={handleCloseNewTransactionModal} 
      />     
      <GlobalStyled />
    </TransactionsProvider>
  )
}

export default Home