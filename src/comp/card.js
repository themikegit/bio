import React from "react"
import styled from "styled-components"
import { AiFillGithub } from "react-icons/ai"
import { FiExternalLink } from "react-icons/fi"

export default function Card({ name, description, tags }) {
  return (
    <CardBody>
      <Title>
        <h4> {name} </h4>
        <ul>
          <li>
            <Icon>
              <AiFillGithub size={20} />
            </Icon>
          </li>
          <li>
            <Icon>
              <FiExternalLink size={20} />
            </Icon>
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

const Icon = styled.div`
  color: #1ca7f7;
  cursor: pointer;
  &:hover {
    color: #ea4c88;
  }
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
