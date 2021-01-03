import React from "react"
import CardsGrid from "../comp/cardsGrid"
import Hero from "../comp/hero"
import Layout from "../layout/Layout"
import "../style/style.css"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <CardsGrid />
    </Layout>
  )
}
