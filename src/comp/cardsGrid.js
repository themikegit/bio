import React from "react"
import styled from "styled-components"
import Card from "./card"

const PROJECTS = [
  {
    name: "Portfolio",
    description: "Personal portfolio showcase. Logos and web design work.",
    linkGH: "https://github.com/themikegit/project",
    linkEXT: "https://www.brandmik.com/",
    tags: ["react", "graphql", "gatsby"],
  },
  {
    name: "Covid metric",
    description: "App that shows latest covid data per country.",
    linkGH: "https://github.com/themikegit/cov_track",
    linkEXT: "https://themikegit.github.io/cov_track/",
    tags: ["react axios"],
  },
  {
    name: "Recipe website",
    description: "Built with WP CustomFields and CPT. You can post your recipe through WP. Ability to filter per category and search ",
    linkGH: "https://github.com/themikegit/food",
    linkEXT: "#",
    tags: ["react", "WordPress"],
  },
  {
    name: "Daily activities",
    description: "Add or delete your daily activity. Set the month and export an excel file with all activities listed by date and time ",
    linkGH: "https://github.com/themikegit/activitie_track",
    linkEXT: "https://themikegit.github.io/activitie_track/#/",
    tags: ["react", "firebase"],
  },
  {
    name: "Simple pollution web app",
    description:
      "Weather and pollution data measure app for Belgrade. It's built with React and WeatherAPI",
    linkGH: "https://github.com/themikegit/pollution",
    linkEXT: "https://themikegit.github.io/pollution/",
    tags: ["react", "firebase"],
  },
  {
    name: "Contract export",
    description: "Add new employees to the list. Search and export contract with a person details",
    linkGH: "https://github.com/themikegit/material",
    linkEXT: "https://loving-lumiere-d678b6.netlify.app/",
    tags: ["react", "material", "WordPress", "netlify", "react-pdf"],
  },
  {
    name: "Bookmark",
    description: "Practice project - simple landing page. Frontend mentor task.",
    linkGH: "https://github.com/themikegit/bookmark",
    linkEXT: "https://themikegit.github.io/bookmark/?email=#",
    tags: ["html", "jQuery", "sass"],
  },
  {
    name: "Fraktal",
    description: "Simple responsive landing page for a fraktal company",
    linkGH: "https://github.com/themikegit/fraktal",
    linkEXT: "https://themikegit.github.io/fraktal/#",
    tags: ["html", "sass"],
  },
  {
    name: "TO-DO app",
    description: "Everyone starts learing React creating to-do app, I am as well",
    linkGH: "https://github.com/themikegit/todo_app",
    linkEXT: "https://themikegit.github.io/todo_app/",
    tags: ["html", "sass"],
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
    color: white;
   
  }
`

const Grid = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
