import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

function Section({
  title,
  description,
  backgroundImg,
  leftBtnText,
  rightBtnText,
}) {
  return (
    <Wrap bgImg={`/images/${backgroundImg}`}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Fade bottom>
        <Buttons>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGroup>
          <DownArrow src='/images/down-arrow.svg' />
        </Buttons>
      </Fade>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 100vh;

  background-image: ${props => `url(${props.bgImg})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  color: white;
  height: 40px;
  width: 256px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`

const RightButton = styled(LeftButton)`
  background-color: white;
  color: black;
  opacity: 0.65;
`

const DownArrow = styled.img`
  height: 40px;
  cursor: pointer;
  animation: animateDown infinite 1.5s;
  overflow-x: hidden;
`
const Buttons = styled.div``