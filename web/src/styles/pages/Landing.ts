import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);

  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContentWrapper = styled.div`
  position: relative;

  width: 100%;
  max-width: 1100px;

  height: 100%;
  max-height: 680px;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;

  background: url('/landing.svg') no-repeat 80% center;
`

export const Image = styled.div``

export const Main = styled.main`
  max-width: 360px;
`

export const Title = styled.h1`
  font-size: 76px;
  font-weight: 700;
  line-height: 70px;
`

export const Description = styled.p`
  margin-top: 40px;
  font-size: 24px;
  line-height: 34px;
`

export const Location = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  font-size: 24px;
  line-height: 34px;

  display: flex;
  flex-direction: column;

  text-align: right;
`

export const City = styled.strong`
  font-weight: 800;
`

export const State = styled.span``

export const EnterApp = styled.a`
  position: absolute;
  bottom: 0;
  right: 0;

  height: 80px;
  width: 80px;
  background: #ffd666;
  border-radius: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;

  svg {
    transition: stroke 0.2s;
    stroke: #8d734b;
    stroke-width: 4px;
  }

  &:hover {
    background: #96feff;
    svg {
      stroke: #15c3d6;
    }
  }
`
