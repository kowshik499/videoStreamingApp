import styled from 'styled-components'

export const NavBarContainer = styled.div`
  background-color: ${value => (value.darkMode ? '#181818' : '#ffffff')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
`

export const Logo = styled.img`
  width: 150px;
`

export const ThemeButton = styled.button`
  border: 0px solid;
  background-color: ${value => (value.darkMode ? '#181818' : '#ffffff')};
`

export const ItemsList = styled.ul`
  display: flex;
  align-self: flex-end;
  justify-content: center;
  align-items: center;
  margin: 0px;
`
export const ListItem = styled.li`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 60px;
`

export const Profile = styled.img`
  width: 40px;
  height: 40px;
`

export const LogoutButton = styled.button`
  background-color: #ffff;
  border: 1px solid #3b82f6;
  color: #3b82f6;
  width: 100px;
  padding: 5px;
  font-weight: 500;
  border-radius: 8px;
  font-family: 'Roboto';
`

export const PopupContainer = styled.div`
  padding: 22px;
  background-color: ${value => (value.darkMode ? '#0f0f0f' : '#ffffff')};
  border-radius: 12px;
  border: 1px solid;
`

export const PopupBtnsContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const PopupText = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: ${value => (value.darkMode ? '#ffffff' : '#000000')};
`

export const CancelBtn = styled.button`
  padding-right: 12px;
  padding-left: 12px;
  font-family: 'Roboto';
  color: ${value => (value.darkMode ? '#475569' : '#000000')};
  margin-right: 6px;
  border-radius: 12px;
  background-color: transparent;
  border: 1px solid ${value => (value.darkMode ? '#475569' : '#000000')};
  font-weight: 500;
`

export const ConfirmBtn = styled.button`
  padding: 8px;
  font-family: 'Roboto';
  margin-left: 6px;
  border-radius: 12px;
  border: 0px solid;
  color: #ffffff;
  font-weight: 500;
  background-color: #3b82f6;
`
