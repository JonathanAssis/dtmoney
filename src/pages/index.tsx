import { Dashboard } from '../components/Dashboard'
import { Header } from '../components/Header'
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