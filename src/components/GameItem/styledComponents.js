import styled from 'styled-components'

export const GameItemContainer = styled.li`
  width: 18vw;
  list-style: none;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const GameImage = styled.img`
  width: 15vw;
`

export const GameName = styled.p`
  font-family: 'Roboto';
  font-weight: 600;
  color: ${value => (value.darkMode ? '#ffff' : '#0000')};
`

export const ViewCount = styled.p`
  font-family: 'Roboto';
  color: gray;
`
