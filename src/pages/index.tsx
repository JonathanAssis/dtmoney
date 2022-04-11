import { Dashboard } from '../components/Dashboard'
import { Header } from '../components/Header'
import { TransactionsTable } from '../components/TransactionsTable'
import { GlobalStyled } from '../styles/global'

const Home = () => {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyled />
    </>
  )
}

export default Home