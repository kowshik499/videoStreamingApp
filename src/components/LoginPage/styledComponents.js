import styled from 'styled-components'

export const LoginPageAppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${value => (value.darkMode ? '#1e293b ' : '#f9f9f9')};
  height: 100vh;
`

export const SubmitButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  padding: 8px;
  border: 0px solid;
  font-family: 'Roboto';
`

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 5px 3px gray;
  padding: 18px;
  background-color: #ffff;
  background-color: ${value => (value.darkMode ? '#000000' : '#ffffff')};
  color: ${value => (value.darkMode ? '#ffffff' : '#000000')};
  border-radius: 12px;
`
export const Logo = styled.img`
  width: 14vw;
  margin: 18px;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 22vw;
`

export const Label = styled.label`
  font-family: 'Roboto';
  color: gray;
  font-weight: 500;
  font-size: 12px;
`

export const UserInput = styled.input`
  padding: 6px;
  margin-bottom: 8px;
  margin-top: 4px;
`

export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 5px;
`

export const ErrorText = styled.p`
  color: red;
  font-family: 'Roboto';
`
