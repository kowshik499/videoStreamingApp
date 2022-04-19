import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: ${value => (value.darkMode ? '#000000' : '#ffffff')};
  color: ${value => (value.darkMode ? '#ffffff' : '#000000')};
  height: 100vh;
`

export const CategoryAndVideosContainer = styled.div`
  display: flex;
`

export const NotFoundContainer = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const NotFoundImg = styled.img`
  width: 30vw;
  background-size: cover;
`
