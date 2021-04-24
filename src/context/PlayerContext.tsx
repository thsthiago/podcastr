import { createContext, useState } from 'react'

interface Episode {
  title: string
  members: string
  thumbinail: string
  duration: number
  url: string
}

interface playerContextData {
  episodeList: Episode[]
  currentEpisodeIndex: number
  play(episode: Episode): void
}

export const PlayerContext = createContext({} as playerContextData)

export default function PlayerProvider({ children }) {
  const [episodeList, setEpisodeList] = useState([])
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0)

  function play(episode) {
    setEpisodeList([episode])
    setCurrentEpisodeIndex(0)
  }

  return (
    <PlayerContext.Provider value={{ episodeList, currentEpisodeIndex, play }}>
      {children}
    </PlayerContext.Provider>
  )
}
