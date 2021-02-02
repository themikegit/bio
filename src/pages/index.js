import React from "react"
import CardsGrid from "../comp/cardsGrid"
import Hero from "../comp/hero"
import Resume from "../comp/resume"
import Tabs from "../comp/tabs"
import Layout from "../layout/Layout"
import "../style/style.css"

export default function Home() {
  return (
    <Layout>
      <Resume/>
      <Hero />
      <Tabs />
      <CardsGrid />
    </Layout>
  )
}
