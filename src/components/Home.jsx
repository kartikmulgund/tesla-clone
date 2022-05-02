import React from 'react'
import styled from 'styled-components'
import { carInfo } from '../carInfo'
import Section from './Section'

function Home() {
  return (
    <Container>
      {carInfo.map(car => (
        <Section
          key={car.id}
          title={car.title}
          description={car.description}
          backgroundImg={car.image}
          leftBtnText='Custom Order'
          rightBtnText='Existing Inventory'
        />
      ))}
      <Section
        title='Lowest Cost Solar Panels in America'
        description='Money-back gurantee'
        backgroundImg='solar-panel.jpg'
        leftBtnText='Order Now'
        rightBtnText='Learn More'
      />
      <Section
        title='Solar for New Roofs'
        description='Solar Roof Costs Less than a New Roof Plus Solar Panels'
        backgroundImg='solar-roof.jpg'
        leftBtnText='Order Now'
        rightBtnText='Learn More'
      />
      <Section
        title='Accesories'
        description='Accessorise Your Tesla'
        backgroundImg='accessories.jpg'
        leftBtnText='Shop Now'
        rightBtnText=''
      />
    </Container>
  )
}

export default Home

const Container = styled.div`
  height: 100vh;
`
