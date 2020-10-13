import Link from 'next/link'
import React from 'react'
import { FiPlus } from 'react-icons/fi'
import { Map, TileLayer } from 'react-leaflet'
import dynamic from 'next/dynamic'

import MapMarker from '../assets/logo-face.svg'
import {
  Container,
  Description,
  Footer,
  Header,
  SideBar,
  State,
  Title,
  City,
  CreateOrphanage
} from '../styles/pages/App'
import Head from 'next/head'

const MapWithNoSSR = dynamic(() => import('../components/Map'), {
  ssr: false
})
const App: React.FC = () => {
  return (
    <>
      <Head>
        <title>Happy | Encontre um orfanato</title>
      </Head>
      <Container>
        <SideBar>
          <Header>
            <MapMarker />
            <Title>Escolha um orfanato no mapa</Title>
            <Description>
              Muitas crianças estão esperando sua visita 😀
            </Description>
          </Header>

          <Footer>
            <City>Guarapuava</City>
            <State>Paraná</State>
          </Footer>
        </SideBar>

        <MapWithNoSSR />

        <Link href="#">
          <CreateOrphanage>
            <FiPlus color="#fff" size={32} />
          </CreateOrphanage>
        </Link>
      </Container>
    </>
  )
}

export default App
