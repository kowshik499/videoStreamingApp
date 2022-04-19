import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: ${props => (props.darkMode ? '#0f0f0f' : '#ffffff')};
  height: 100vh;
`

export const CategoryAndVideosContainer = styled.div`
  display: flex;
`

export const VideosListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
  height: 79.5vh;
`

export const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${value => (value.darkMode ? '#0f0f0f' : '#ffffff')};
`

export const TrendingHeading = styled.h1`
  color: ${value => (value.darkMode ? '#ffffff' : '#0f0f0f')};
  font-family: 'Roboto';
  margin-left: 12px;
  margin-bottom: 12px;
  margin-top: 12px;
`

export const VideosItemsList = styled.ul`
  padding-inline-start: 0px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  height: 80vh;
  overflow-y: scroll;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 80vh;
  align-items: center;
  width: 80vw;
`

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 78vw;
  height: 86vh;
  overflow-y: scroll;
`

export const FailureViewImage = styled.img`
  width: 30vw;
  background-size: cover;
  margin-top: 10px;
`

export const FailureViewHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 22px;
`

export const FailureViewDescription = styled.p`
  font-family: 'Roboto';
  margin-top: 8px;
  margin-bottom: 8px;
`

export const RetryButton = styled.button`
  background-color: #3b82f6;
  border: 0px solid;
  padding: 8px;
  border-radius: 8px;
  padding-right: 16px;
  padding-left: 16px;
  color: #ffffff;
  font-family: 'Roboto';
`
