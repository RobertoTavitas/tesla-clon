import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import { accessories, audio, connected, game, model3, modelS, modelX, modelY, newinterior, solarPanel, solarRoof } from './import';

function Home() {
    return (
        <Container>
            <Section 
                id="model-s"
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundImg={modelS}
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section 
                id="model-y"
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundImg={modelY}
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section 
                id="model-3"
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundImg={model3}
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section 
                id="model-x"
                title="Model x"
                description="Order Online for Touchless Delivery"
                backgroundImg={modelX}
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section
                id="solar-roof"
                title="Solar Roof"
                description="Produce Clean Energy From Yuor Roof"
                backgroundImg={solarRoof}
                leftBtnText="Order now"
                rightBtnText="Learn more"
            />
            <Section
                id="solar-panels"
                title="Lowest Cost Solar Panels in America"
                description="Money-back guarantee"
                backgroundImg={solarPanel}
                leftBtnText="Order now"
                rightBtnText="Learn more"
            />
            <Section
                id="accesories"
                title="Accessories"
                description=""
                backgroundImg={accessories}
                leftBtnText="Shop now"
            />

        </Container>
    )
}

const Container = styled.div`
    height: 100vh;
    z-index: 10;
`

export default Home
