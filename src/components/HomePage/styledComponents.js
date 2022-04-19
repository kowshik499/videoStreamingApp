import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: ${props => (props.darkMode ? '#000000' : '#ffffff')};
  height: 100vh;
`

export const CategoryAndVideosContainer = styled.div`
  display: flex;
`
export const PromotionCard = styled.div`
  display: flex;
  width: 76vw;
  justify-content: space-between;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  margin-bottom: 20px;
  height: 40vh;
  margin: 12px;
  padding: 20px;
`

export const Logo = styled.img`
  width: 150px;
`

export const PromotionDescription = styled.p`
  font-family: 'Roboto';
`

export const BuyNowButton = styled.button`
  border: 1.5px solid #181818;
  font-family: 'Roboto';
  color: #181818;
  font-weight: 500;
  padding: 10px;
`

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 12px;
`

export const SearchInput = styled.input`
  padding: 4.5px;
  width: 25vw;
`

export const SearchButton = styled.button`
  width: 60px;
  padding: 4px;
`

export const VideosItemsList = styled.ul`
  padding-inline-start: 0px;
  display: flex;
  flex-wrap: wrap;
  width: 78vw;
  height: 79.5vh;
`

export const VideosListContainer = styled.div`
  width: 80vw;
  height: 83vh;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20vw;
  height: 36vh;
  align-items: center;
  width: 80vw;
`

export const VideosContainer = styled.div`
  height: ${value => (value.close ? '36vh' : '80vh')};
  overflow-y: scroll;
`

export const NoVideosFoundContainer = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
`

export const NoVideosFoundImg = styled.img`
  width: 30vw;
  background-size: cover;
`

export const NoVideosFoundHeading = styled.h1`
  font-family: 'Roboto';
  color: ${value => (value.darkMode ? '#ffffff' : '#000000')};
`

export const NoVideosFoundText = styled.p`
  font-family: 'Roboto';
  color: ${value => (value.darkMode ? '#ffffff' : '#000000')};
`

export const RetryBtn = styled.button`
  background-color: #4f46e5;
  padding: 8px;
  font-family: 'Roboto';
  font-weight: 500;
  color: #ffffff;
  border: 0px solid;
  border-radius: 8px;
  padding-right: 18px;
  padding-left: 18px;
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
