import React from "react"
import styled from "styled-components"
import { useSpring, animated } from "react-spring"
import { AiFillGithub } from "react-icons/ai"
import { ImDribbble } from "react-icons/im"
import { FaLinkedinIn } from "react-icons/fa"
import { FiExternalLink } from "react-icons/fi"

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
     
          I'm Miroslav, <br />{" "}
          <a href="https://www.brandmik.com">
            {" "}
            web designer <FiExternalLink size={40} />{" "}
          </a>{" "}
          <br />
          and developer.{" "}
        </h1>
        <Social>
          <ul>
            <li>
                <a href="https://www.linkedin.com/in/mkrsmanovicdsg/" target="_blank">
                  <Icon>
                    <FaLinkedinIn size={25} /> 
                    </Icon>
                    </a>   
            </li>
            <li>
           
                <a href="https://github.com/themikegit" target="_blank">
                  <Icon>
                    <AiFillGithub size={25} />
                     </Icon>
                      </a>
            </li>
            <li>
              <a href="https://dribbble.com/rostovniki" target="_blank">
                <Icon>
                  <ImDribbble size={23} />
                </Icon>
              </a>
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
  height: 60vh;
  h1 {
    font-weight: 600;
    line-height: 1.1;
    font-size: 4em;
  }
  span {
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
