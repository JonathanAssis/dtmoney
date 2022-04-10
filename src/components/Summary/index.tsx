import Image from 'next/image';
import { Container } from './styles';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

export function Summary() {
  return(
    <>
      <Container>
        <div>
          <header>
            <p>Entradas</p>
            <Image src={incomeImg} alt="Entrada" />
          </header>
          <strong>1000,00</strong>
        </div>

        <div>
          <header>
            <p>Saídas</p>
            <Image src={outcomeImg} alt="Saídas" />
          </header>
          <strong> -1000,00</strong>
        </div>

        <div className='highlight-background'>
          <header>
            <p>Total</p>
            <Image src={totalImg} alt="Total" />
          </header>
          <strong>1000,00</strong>
        </div>
      </Container>
    </>
  )
}