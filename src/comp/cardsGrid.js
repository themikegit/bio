import React from "react"
import styled from "styled-components"
import Card from "./card"

const PROJECTS = [
  {
    name: "Simple pollution web app",
    description:
      "Weather and polluton data measure appp for Belgrade. It's built with React and WeatherAPI",
    linkGH: "#",
    linkEXT: "#",
    tags: ["react", "firebase", "gatsby"],
  },
  {
    name: "Portfolio",
    description:
      "Personal graphic design portfolio. Showcase of recent logo and webdesign work",
    linkGH: "#",
    linkEXT: "#",
    tags: ["react", "nelify", "gatsby"],
  },
  {
    name: "Simple pollution web app",
    description:
      "Weather and polluton data measure appp for Belgrade. It's built with React and WeatherAPI",
    linkGH: "#",
    linkEXT: "#",
    tags: ["react", "firebase", "gatsby"],
  },
  {
    name: "Personal porfolio",
    description:
      "Weather and polluton data measure appp for Belgrade. It's built with React and WeatherAPI",
    linkGH: "#",
    linkEXT: "#",
    tags: ["react", "firebase", "gatsby"],
  },
  {
    name: "Simple pollution web app",
    description:
      "Weather and polluton data measure appp for Belgrade. It's built with React and WeatherAPI",
    linkGH: "#",
    linkEXT: "#",
    tags: ["react", "firebase", "gatsby"],
  },
  {
    name: "Personal porfolio",
    description:
      "Weather and polluton data measure appp for Belgrade. It's built with React and WeatherAPI",
    linkGH: "#",
    linkEXT: "#",
    tags: ["react", "firebase", "gatsby"],
  },
]

export default function CardsGrid() {
  return (
    <Wrap>
      <h3>SOME THINGS I BUILT</h3>
      <Grid>
        {PROJECTS.map(i => (
          <Card name={i.name} description={i.description} tags={i.tags} />
        ))}
      </Grid>
    </Wrap>
  )
}

const Wrap = styled.div`
  h3 {
    font-family: "Poppins";
    font-weight: 700;
    letter-spacing: 0.1rem;
    color: #1ca7f7;
  }
`

const Grid = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
