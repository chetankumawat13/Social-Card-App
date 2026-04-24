import React from 'react'
import '../style/card.css'

const Card = ({cardData,like,follow}) => {
    
  return (
        cardData.map((card) => {
        return(
            <div key={card.id} className='card'>
        <div className="card-header">
            <img src={card.image} alt="" />
        </div>
        <div className="card-bottom">
            <h2>{card.name}</h2>
            <div className="social-numbers">
                 <p className="follower">Follower: {card.followers}</p>
                <p className="like">Like: {card.likes}</p>
            </div>
            <div className="buttons">
                <button style={card.isLiked ? {backgroundColor:"white",color:"black"}  : {backgroundColor:" rgb(194, 36, 8)", color:"white"}} onClick={() => like(card.id)} className='like'>{card.isLiked ? "Liked" : "Like"}</button>
                <button style={card.isFollow ? {backgroundColor:"white",color:"black"}  : {backgroundColor:" rgb(194, 36, 8)", color:"white"}} onClick={() => follow(card.id)} className='follow'>{card.isFollow ? "Following" : "Follow"}</button>
            </div>
        </div>
    </div>
        )
    })
  )
}

export default Card