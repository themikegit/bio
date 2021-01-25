import React from "react"
import styled from "styled-components"
import Card from "./card"

const PROJECTS = [
  {
    name: "Portfolio",
    description: "Personal portfolio showcase. Logos and webdesgin work.",
    linkGH: "https://github.com/themikegit/project",
    linkEXT: "https://www.brandmik.com/",
    tags: ["react", "graphql", "gatsby"],
  },
  {
    name: "Covid metric",
    description: "App that shows latest covid data per country.",
    linkGH: "https://github.com/themikegit/cov_track",
    linkEXT: "https://themikegit.github.io/cov_track/",
    tags: ["react"],
  },
  {
    name: "Recipe website",
    description: "Add and search recipes per categories.",
    linkGH: "#",
    linkEXT: "#",
    tags: ["react", "wordpress"],
  },
  {
    name: "Daily activites",
    description: "App that alows you to add some activities and download all",
    linkGH: "https://github.com/themikegit/activitie_track",
    linkEXT: "https://themikegit.github.io/activitie_track/#/",
    tags: ["react", "firebase"],
  },
  {
    name: "Simple pollution web app",
    description:
      "Weather and polluton data measure appp for Belgrade. It's built with React and WeatherAPI",
    linkGH: "https://github.com/themikegit/pollution",
    linkEXT: "https://themikegit.github.io/pollution/",
    tags: ["react", "firebase"],
  },
  {
    name: "Contract export",
    description: "Add persons and export contract with person details",
    linkGH: "https://github.com/themikegit/material",
    linkEXT: "https://loving-lumiere-d678b6.netlify.app/",
    tags: ["react", "material", "wordpress", "netlify", "react-pdf"],
  },
]

export default function CardsGrid() {
  return (
    <Wrap>
      <h3>SOME THINGS I BUILT</h3>
      <Grid>
        {PROJECTS.map(i => (
          <Card
            name={i.name}
            description={i.description}
            tags={i.tags}
            link={i.linkEXT}
            linkGH={i.linkGH}
          />
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
    color: #1ca7f7 !important;
  }
`

const Grid = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
