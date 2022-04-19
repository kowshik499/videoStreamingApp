import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: ${value => (value.darkMode ? '#0f0f0f' : '#ffffff')};
  color: ${value => (value.darkMode ? '#ffffff' : '#000000')};
`

export const CategoryVideosContainer = styled.div`
  display: flex;
`
export const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  width: 78.5vw;
  background-color: ${value => (value.darkMode ? '#0f0f0f' : '#ffffff')};
`

export const TrendingHeading = styled.h1`
  color: ${value => (value.darkMode ? '#ffffff' : '#0f0f0f')};
  font-family: 'Roboto';
  margin-left: 12px;
  margin-bottom: 12px;
  margin-top: 12px;
`

export const VideoItemContainer = styled.li`
  display: flex;
  margin-top: 22px;
`

export const Thumbnail = styled.img`
  width: 320px;
  height: 200px;
  border-radius: 12px;
`

export const DetailsContainer = styled.div`
  padding: 6px;
  margin-left: 12px;
  margin-right: 12px;
`

export const SavedVideosContainer = styled.ul`
  height: 75vh;
  overflow-y: scroll;
`

export const DetailsHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 16px;
  margin-top: 6px;
  font-weight: 500;
  color: ${value => (value.darkMode ? '#ffffff' : '#000000')};
`

export const Detailes = styled.p`
  margin: 5px;
  font-family: 'Roboto';
  margin-right: 12px;
  color: #475569;
`

export const ViewsPublishedContainer = styled.div`
  display: flex;
`

export const NoVideosContainer = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const NoVideosImg = styled.img`
  width: 30vw;
  background-size: cover;
`
