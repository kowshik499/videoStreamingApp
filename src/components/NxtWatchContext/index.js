import React from 'react'

const NxtWatchContext = React.createContext({
  darkMode: false,
  savedVideos: [],
  category: 'HOME',
  likedVideosIds: [],
  disLikedVideosIds: [],
  savedVideosIds: [],
  changeCategory: () => {},
  changeDarkMode: () => {},
  addToSavedVideos: () => {},
  onClickLike: () => {},
  onClickDisLike: () => {},
})

export default NxtWatchContext
