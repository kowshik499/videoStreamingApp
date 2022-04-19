import styled from 'styled-components'

export const VideoItemContainer = styled.li`
  width: 25vw;
  list-style: none;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const VideoThumbnail = styled.img`
  width: 23vw;
`

export const DescriptionContainer = styled.div`
  display: flex;
  margin-top: 6px;
  align-self: flex-start;
`

export const PublisherProfile = styled.img`
  margin: 16px;
  width: 40px;
  height: 40px;
`
export const Title = styled.p`
  font-family: 'Roboto';
  margin: 0px;
  font-size: 14px;
  color: ${value => (value.darkMode ? '#fff' : '#000')};
`

export const Name = styled.p`
  font-family: 'Roboto';
  color: gray;
  margin: 0px;
  margin-top: 6px;
`

export const Published = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  color: gray;
  margin: 0px;
  text-decoration: ;
`

export const Views = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  margin: 0px;
  color: gray;
  margin-right: 8px;
`

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`
