import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

import LogoIMG from '../assets/logo.svg'
import {
  Container,
  ContentWrapper,
  Image,
  Main,
  Title,
  Description,
  Location,
  City,
  State,
  EnterApp
} from '../styles/pages/Landing'

const Landing: React.FC = () => {
  return (
    <>
      <Head>
        <title>Happy | Home</title>
      </Head>
      <Container>
        <ContentWrapper>
          <Image>
            <LogoIMG />
          </Image>

          <Main>
            <Title>Leve a felicidade para o mundo</Title>
            <Description>
              Visite orfanatos e mude o dia de muitas crianças
            </Description>
          </Main>

          <Location>
            <City>Guarapuava</City>
            <State>Paraná</State>
          </Location>

          <Link href="/app">
            <EnterApp>
              <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
            </EnterApp>
          </Link>
        </ContentWrapper>
      </Container>
    </>
  )
}

export default Landing
