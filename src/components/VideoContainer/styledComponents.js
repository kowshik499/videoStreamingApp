import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: ${value => (value.darkMode ? '#0f0f0f' : '#ffffff')};
  color: ${value => (value.darkMode ? '#ffffff' : '#000000')};
  height: 100vh;
`

export const CategoryAndVideosContainer = styled.div`
  display: flex;
`

export const VideoPlayerContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const VideoDetailsContainer = styled.div`
  overflow-y: scroll;
  font-family: 'Roboto';
  height: 87vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
`

export const InfoControlsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ViewsSubsContainer = styled.div`
  display: flex;
  align-items: center;
`

export const LikeSaveContainer = styled.ul`
  list-style: none;
  display: flex;
`

export const LikeBtn = styled.button`
  display: flex;
  align-items: center;
  margin-right: 22px;
  border: 0px;
  background-color: inherit;
  color: #64748b;
  color: ${value => value.isLiked && '#2563eb'};
`

export const DisLikeBtn = styled.button`
  display: flex;
  align-items: center;
  margin-right: 22px;
  border: 0px;
  background-color: inherit;
  color: #64748b;
  color: ${value => value.isDisLiked && '#2563eb'};
`

export const SaveBtn = styled.button`
  display: flex;
  align-items: center;
  margin-right: 22px;
  border: 0px;
  background-color: inherit;
  color: #64748b;
  color: ${value => value.isSaved && '#2563eb'};
`

export const ProfileDescription = styled.div`
  display: flex;
`

export const Profile = styled.img`
  height: 60px;
  width: 60px;
  margin: 20px;
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
