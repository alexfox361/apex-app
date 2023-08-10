import { useState } from 'react'
import Player from './components/player/player'
import Match from './components/match/match'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const boys = [{uid: '2849572787', platform: 'PC'}, 
                {uid: '1005191401596', platform: 'PC'}, 
                {uid: '2402025231', platform: 'PC'}, 
                {uid: '2278041258', platform: 'PC'}, 
                {uid: '2535425313120886', platform: 'X1'}, 
                {uid: '6895905671204836301', platform: 'PS4'}];         

  return (
    <>
      <div>apex legends stats</div>
      {
        boys.map((boy, index) => 
            <Match uid={boy.uid} platform={boy.platform} key={index}></Match>
        )
      }
    </>
  )
}

export default App
