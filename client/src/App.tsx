import './App.css'
import { useEffect, useState } from 'react'

import {GameContext} from '../../server/types/main'



function App() {
  const [res, setRes] = useState<GameContext>()
  useEffect(() => {
    fetch("http://localhost:3000")
  .then(response => response.json())
  .then(data => {
    setRes(data); // Output the response from the server
  })
  .catch(error => {
    console.error('Error:', error);
  });
  }, [])
  let tiles;
  if (res){
     tiles = res.board.map(row => {
      return (
      <div className='inner grass'>{row.map(tile => <span className={`border center`} style={{minHeight: 40, minWidth: 40}} data-point={`${tile.point.y} ${tile.point.x}`}>
        { tile.terrain === 'forest' ? '🌲' : tile.terrain === 'mountain' ? "🗻" : tile.terrain === 'resource' ? "💎" : tile.terrain === 'HQ' ? "🏫" : ''}
      </span>)}</div>)
    })
  }
  const handleClick = (event) => {
    const [y, x] = event.target.dataset.point.split(" ")
    console.log(y, x)
    console.log(res?.board[parseInt(y)][parseInt(x)])
  }

  return (
    <>
      <div className="board" onClick={handleClick}>
        {tiles}
      </div>
    </>
  )
}

export default App
