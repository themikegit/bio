import React from "react"
import styled from "styled-components"
import { useSpring, animated } from "react-spring"
import { AiFillGithub } from "react-icons/ai"
import { ImDribbble } from "react-icons/im"
import { FaLinkedinIn } from "react-icons/fa"

export default function Hero() {
  const effect = useSpring({
    transform: "translate(0px, 0px)",
    from: { transform: "translate(0px, 50px)" },
    config: { duration: 350 },
  })
  return (
    <Slide style={effect}>
      <div>
        <span> Hello! </span>
        <h1>
          {" "}
          I'm Miroslav, <br /> UI designer and <br /> junior FE.{" "}
        </h1>
        <Social>
          <ul>
            <li>
              <Icon>
                <FaLinkedinIn size={25} />
              </Icon>
            </li>
            <li>
              <Icon>
                <AiFillGithub size={25} />
              </Icon>{" "}
            </li>
            <li>
              <Icon>
                <ImDribbble size={23} />
              </Icon>{" "}
            </li>
          </ul>
        </Social>
      </div>
    </Slide>
  )
}

const Slide = styled(animated.div)`
  display: flex;
  align-items: center;
  font-family: "Poppins";
  color: white;
  height: 80vh;
  h1 {
    font-weight: 600;
    line-height: 1.1;
    font-size: 4em;
  }
  span {
    color: #1ca7f7;
    font-size: 3rem;
  }
`
const Social = styled.div`
  margin-top: 1rem;
  ul {
    display: flex;
    list-style: none;
    li {
      padding-right: 0.5rem;
      img {
        width: 1.3rem;
      }
    }
  }
`

const Icon = styled.div`
  color: #1ca7f7;
  cursor: pointer;
  &:hover {
    color: #ea4c88;
  }
`
