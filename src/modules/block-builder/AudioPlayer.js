// import React, { useState } from 'react'
// import AudioPlayer from 'react-h5-audio-player'
// import 'react-h5-audio-player/lib/styles.css'
// import { usePlaylistQuery } from './configs/playlistQueryConfig'

// const Player = ({}) => {
// 	const [playingNow, setPlayingNow] = useState(0)
// 	const [listen, setListen] = useState(false)
// 	const [time, setTime] = useState(0)
// 	const playlistQuery = usePlaylistQuery()
// 	const playlist = playlistQuery.allFile.edges
// 	function changePlayingNow(param) {
// 		setPlayingNow(param)
// 	}
// 	function changeListen(param) {
// 		setListen(param)
// 	}

// 	function changeTime(param) {
// 		setTime(param)
// 	}
// 	const handleClickPrevious = () => {
// 		changePlayingNow(playingNow === 0 ? playlist.length - 1 : playingNow - 1)
// 	}
// 	const handleClickNext = () => {
// 		changePlayingNow(playingNow < playlist.length - 1 ? playingNow + 1 : 0)
// 	}
// 	const handleListenChange = (e, param) => {
// 		if (param === 'listen') {
// 			changeListen(true)
// 		}
// 		if (param === 'pause') {
// 			changeListen(false)
// 		}

// 		if (param === 'ended') {
// 			const x = playingNow < playlist.length - 1 ? playingNow + 1 : 0
// 			const src = playlist[x].node.publicURL
// 		}
// 		changeTime(time + 1)
// 		console.log('e::: ')
// 		console.log(e)
// 	}
// 	console.log(time)
// 	return (
// 		<AudioPlayer
// 			// autoPlay
// 			// autoPlayAfterSrcChange={true}
// 			metadata="metadata"
// 			listenInterval={(e) => handleListenChange('listenInterval')}
// 			onListen={(e) => handleListenChange('listen')}
// 			onPause={(e) => handleListenChange('pause')}
// 			onPlaying={(e) => handleListenChange('onPlaying')}
// 			onEnded={handleClickNext}
// 			onSeeking={(e) => console.log('onSeeking')}
// 			onSeeked={(e) => console.log('onSeeked')}
// 			onSuspend={(e) => console.log('On Suspend')}
// 			onPlayError={(e) => console.log('onPlayError')}
// 			onChangeCurrentTimeError={(e) => console.log('onChangeCurrentTimeError')}
// 			onPlay={(e) => console.log(e)}
// 			src={playlist[playingNow].node.publicURL}
// 			onClickPrevious={handleClickPrevious}
// 			onClickNext={handleClickNext}
// 			showSkipControls={true}
// 			showJumpControls={false}
// 			autoPlayAfterSrcChange={true}
// 			layout="horizontal-reverse"
// 		/>
// 	)
// }

// export default Player
