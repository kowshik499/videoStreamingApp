import {Link} from 'react-router-dom'
import NxtWatchContext from '../NxtWatchContext'

import {
  GameItemContainer,
  GameImage,
  GameName,
  ViewCount,
} from './styledComponents'

const GameItem = props => {
  const {gameData} = props
  const {id, title, thumbnailUrl, viewCount} = gameData
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {darkMode, changeCategory} = value

        const onClickGameItem = () => {
          changeCategory('')
        }

        return (
          <Link to={`/videos/${id}`} className="link">
            <GameItemContainer onClick={onClickGameItem}>
              <GameImage src={thumbnailUrl} alt="video thumbnail" />
              <GameName darkMode={darkMode}>{title}</GameName>
              <ViewCount>{viewCount} Watching Worldwide</ViewCount>
            </GameItemContainer>
          </Link>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default GameItem
