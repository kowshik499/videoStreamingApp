import styled from 'styled-components'

export const CategorySection = styled.div`
  width: 20vw;
  height: 88vh;
  display: flex;
  background-color: ${value => (value.darkMode ? '#181818' : '#ffffff')};
  color: ${value => (value.darkMode ? '#ffffff' : '#000000')};
  flex-direction: column;
  justify-content: space-between;
`

export const CategoryButtonsContainer = styled.ul`
  list-style: none;
  padding-inline-start: 0px;
  margin: 0px;
`

export const ContactContainer = styled.div`
  padding: 10px;
  background-color: ${value => (value.darkMode ? '#181818' : '#ffffff')};
  color: ${value => (value.darkMode ? '#ffffff' : '#000000')};
`

export const ContactHeading = styled.p`
  font-family: 'Roboto';
  margin-top: 0px;
  margin-bottom: 5px;
  font-size: 18px;
`

export const ContactItemsContainer = styled.ul`
  list-style: none;
  padding-inline-start: 0px;
  display: flex;
`

export const CategoryButton = styled.button`
  border: 0px solid;
  display: flex;
  padding-left: 10px;
  align-items: center;
  width: 20vw;
  height: 40px;
  background-color: ${value => (value.darkMode ? '#181818' : '#ffffff')};
  color: ${value => (value.darkMode ? '#f1f1f1' : '#1e293b')};
  font-family: 'Roboto';
  background-color: ${value => value.isActive && '#ffffff32'};
  font-weight: ${value => value.isActive && '500'};
`

export const ContactIcon = styled.img`
  width: 35px;
  margin: 5px;
`

export const ContactUsDescription = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 14px;
  margin: 0px;
`
