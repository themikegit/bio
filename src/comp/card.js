import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { AiFillGithub } from "react-icons/ai"
import { FiExternalLink } from "react-icons/fi"

export default function Card({ name, description, tags, link, linkGH }) {
  return (
    <CardBody>
      <Title>
        <h4> {name} </h4>
        <ul>
          <li>
            <a href={linkGH} target="_blank">
              <AiFillGithub size={20} />
            </a>
          </li>
          <li>
            <a href={link} target="_blank">
              <FiExternalLink size={20} />
            </a>
          </li>
        </ul>
      </Title>
      <Body>
        <p>{description}</p>
      </Body>
      <Tags>
        <ul>
          {" "}
          {tags.map(i => (
            <li> {i} </li>
          ))}{" "}
        </ul>
      </Tags>
    </CardBody>
  )
}

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
  max-width: 380px;
  background-color: #172a45;
  color: #172a45;
  padding: 1.5rem;
  margin: 0.6rem;
  font-family: "Roboto Mono";
  border-radius: 5px;
  box-sizing: border-box;
  border: 1px solid #172a45;
  && :hover {
    border: 1px solid #1ca7f7;
  }
`

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  color: #fff;
  ul {
    display: flex;
    list-style: none;
    li {
      margin-left: 0.7rem;
    }
  }
`

const Body = styled.div`
  color: #eee;
`

const Tags = styled.div`
  color: #1ca7f7;
  ul {
    display: flex;
    list-style: none;
    li {
      padding-right: 0.4rem;
      font-size: 0.8rem;
    }
  }
`
