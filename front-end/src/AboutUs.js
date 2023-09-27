import React from 'react'
import cindyImage from './picture/cindy2.jpg'

const AboutUs = props => {
  return (
    <>
      <div>
        <h2>About Cindy</h2>
        <p>
          Hello, nice to meet you! My name is Cindy Liang and I was born and
          raised in Brooklyn. Some of my hobbies include dancing, playing
          badminton, and taking walks around my neighborhood. I don't game but I
          am very good at Tetris and I'm always looking for challengers. I've
          always wanted to visit an aquarium, but for some reason, I've never
          gone. My favorite anime is One Piece. I love vanilla ice cream and egg
          tarts. I also love anything pink. :)
        </p>
        <img src={cindyImage} alt="Your Photo" />
      </div>
    </>
  )
}

export default AboutUs
