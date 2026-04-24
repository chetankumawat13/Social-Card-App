import React, { useState } from 'react'
import './style/base.css'
import Card from './components/Card'

const App = () => {
  const [cardData, setCardData] = useState(
    [
      {
        id: 1,
        name: 'homelender',
        followers: 199,
        likes: 199,
        image: 'https://i.pinimg.com/1200x/9f/a3/23/9fa32367a0825d918f8b1be026e388fe.jpg',
        isLiked: false,
        isFollow:false
      },
      {
        id:2,
        name:'jhon doe',
        followers: 150,
        likes: 120,
        image: 'https://i.pinimg.com/736x/67/63/26/676326fe5ce34b167f09e057422871df.jpg',
        isLiked: false,
        isFollow:false
      },
      {
        id:3,
        name:'jane smith',
        followers: 250,
        likes: 300,
        image: 'https://i.pinimg.com/736x/25/41/5e/25415e56a1c8f176cb005f9b24f841cb.jpg',
        isLiked: false,
        isFollow:false
      }
    ]
  )


  const like = (id) => {
     setCardData((prev) => prev.map((card) => card.id === id ? {...card, likes: card.isLiked ? card.likes -1 : card.likes +1,isLiked:!card.isLiked} :card))
  }  

  const follow = (id) => {
    setCardData((prev) => prev.map((card) => card.id === id ? {...card, followers: card.isFollow ? card.followers -1 : card.followers +1, isFollow:!card.isFollow}: card))
  }

  return (
    <div className='main'>
      <Card cardData={cardData} like={like} follow={follow} />
    </div>
  )
}

export default App