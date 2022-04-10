import Image from 'next/image'
import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

export function Header () {
  return (
    <Container> 
      <Content>
        <Image src={logoImg} alt="dt money" />

        <button type='button'>
          Nova transação
        </button>
      </Content>
    </Container>
  )
}