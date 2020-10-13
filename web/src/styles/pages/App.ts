import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;

  display: flex;
`

export const SideBar = styled.aside`
  width: 440px;
  background: ${p => p.theme.back.gradient};
  padding: 80px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Header = styled.header``

export const Title = styled.h2`
  font-size: 40px;
  font-weight: 800;
  line-height: 42px;
`

export const Description = styled.p`
  line-height: 28px;
  margin-top: 24px;
`

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  line-height: 24px;
`

export const City = styled.strong`
  font-weight: 800;
`

export const State = styled.span``

export const CreateOrphanage = styled.a`
  position: absolute;
  right: 48px;
  bottom: 48px;

  width: 64px;
  height: 64px;

  background: ${p => p.theme.blue.secondary};
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 20px;
  transition: background-color 0.2s;

  &:hover {
    background: ${p => p.theme.blue.tree};
  }
`
