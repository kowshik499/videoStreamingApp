import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import NxtWatchContext from './components/NxtWatchContext'
import Home from './components/HomePage'
import Login from './components/LoginPage'
import Trending from './components/TrendingVideos'
import Gaming from './components/Gaming'
import VideoContainer from './components/VideoContainer'
import SavedVideos from './components/SavedVideos'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    savedVideos: [],
    category: 'HOME',
    darkMode: false,
    likedVideosIds: [],
    disLikedVideosIds: [],
    savedVideosIds: [],
  }

  changeDarkMode = () => {
    this.setState(prevState => ({
      darkMode: !prevState.darkMode,
    }))
  }

  changeCategory = category => {
    this.setState({
      category,
    })
  }

  onClickLike = id => {
    const {likedVideosIds, disLikedVideosIds} = this.state
    if (likedVideosIds.includes(id)) {
      const updatedLikedVideoIdsList = likedVideosIds.filter(
        each => each !== id,
      )
      this.setState({
        likedVideosIds: updatedLikedVideoIdsList,
      })
    } else {
      const updatedDisLikedVideoIdsList = disLikedVideosIds.filter(
        each => each !== id,
      )
      if (disLikedVideosIds.includes(id)) {
        this.setState({
          likedVideosIds: [...likedVideosIds, id],
          disLikedVideosIds: updatedDisLikedVideoIdsList,
        })
      }
      this.setState({
        likedVideosIds: [...likedVideosIds, id],
      })
    }
  }

  onClickDisLike = id => {
    const {disLikedVideosIds, likedVideosIds} = this.state
    if (disLikedVideosIds.includes(id)) {
      const updatedDisLikedVideoIdsList = disLikedVideosIds.filter(
        each => each !== id,
      )
      this.setState({
        disLikedVideosIds: updatedDisLikedVideoIdsList,
      })
    } else {
      if (likedVideosIds.includes(id)) {
        const updatedLikedVideoIdsList = likedVideosIds.filter(
          each => each !== id,
        )
        this.setState({
          disLikedVideosIds: [...disLikedVideosIds, id],
          likedVideosIds: updatedLikedVideoIdsList,
        })
      }
      this.setState({
        disLikedVideosIds: [...disLikedVideosIds, id],
      })
    }
  }

  addToSavedVideos = videoData => {
    const {savedVideos, savedVideosIds} = this.state

    if (savedVideos.length === 0) {
      this.setState({
        savedVideos: [videoData],
        savedVideosIds: [videoData.videoDetailes.id],
      })
    } else {
      const filteredList = savedVideos.filter(
        each => each.videoDetailes.id === videoData.videoDetailes.id,
      )
      const filteredSavedVideoIdsList = savedVideosIds.filter(
        each => each !== videoData.videoDetailes.id,
      )

      if (filteredList.length === 0) {
        this.setState({
          savedVideos: [...savedVideos, videoData],
          savedVideosIds: [...savedVideosIds, videoData.videoDetailes.id],
        })
      } else {
        const updatedVideosList = savedVideos.filter(
          each => each.videoDetailes.id !== videoData.videoDetailes.id,
        )
        this.setState({
          savedVideos: updatedVideosList,
          savedVideosIds: filteredSavedVideoIdsList,
        })
      }
    }
  }

  render() {
    const {
      savedVideos,
      darkMode,
      category,
      likedVideosIds,
      disLikedVideosIds,
      savedVideosIds,
    } = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          savedVideos,
          darkMode,
          category,
          likedVideosIds,
          disLikedVideosIds,
          savedVideosIds,
          changeCategory: this.changeCategory,
          changeDarkMode: this.changeDarkMode,
          addToSavedVideos: this.addToSavedVideos,
          onClickLike: this.onClickLike,
          onClickDisLike: this.onClickDisLike,
        }}
      >
        <>
          <Switch>
            <Route exact path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/trending" component={Trending} />
            <ProtectedRoute exact path="/gaming" component={Gaming} />
            <ProtectedRoute
              exact
              path="/saved-videos"
              component={SavedVideos}
            />
            <ProtectedRoute path="/videos/:id" component={VideoContainer} />
            <Route component={NotFound} />
          </Switch>
        </>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
