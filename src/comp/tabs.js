import React, { useState } from "react"
import styled from "styled-components"
export default function Tabs() {
  const [pill, setpill] = useState("About")
  return (
    <Wrap>
      <Frame>
        <Pills>
          <ul>
            <li onClick={() => setpill("About")} style = {{ color: pill == "About" ? "#ea4c88" : "#1ca7f7" }} > About   </li>
            <li onClick={() => setpill("Education")} style = {{ color: pill == "Education" ? "#ea4c88" : "#1ca7f7" }} > Education </li>
            <li onClick={() => setpill("Experience")} style = {{ color: pill == "Experience" ? "#ea4c88" : "#1ca7f7" }} > Experience </li>
          </ul>
        </Pills>
        <Content>
          <div style = {{ display: pill == "About" ? "block" : "none" }} >
              <p>Junior Web Developer with one year of experience in building web apps mainly as a playground for learning
new skills. Seeking an opportunity to extend my knowledge and implement solutions to meet business
needs. Currently in process of learning Angular 2+.
               <br/> <br/>
               
              </p>
            
           
              </div>
          <div style = {{ display: pill == "Education" ? "block" : "none" }} >
          <ul>
                  <li>
                      <h3>Faculty of Security Studies</h3>
                      <h4>2009-2014</h4>
                      <p> Univeristy of Belgrade. Bachelor degree
                      </p>
              
                    </li>
                    <li>
                      <h3>IT Academy</h3>
                      <h4>2017</h4>
                      <p>Web desgin department. Getting familiar with basics principles
                      </p>
                  
                    </li>
                    <li>
                      <h3>Computer School Vinca</h3>
                      <h4>2018</h4>
                      <p>PHP and MySQL web application development
                      </p>
                
                    </li>
                    <li>
                      <h3>Computer School Vinca</h3>
                      <h4>2018</h4>
                      <p>Course of WordPress. Theoretical and practical examination
                      </p>
                  
                    </li>
                
              </ul>
              </div>
          <div style = {{ display: pill == "Experience" ? "block" : "none" }} >
              <ul>
                  <li>
                      <h3>Freelancer.com</h3>
                      <h4>2015-2019</h4>
                      <p>
                        Creating visual identities for various businesses.
                      </p>
              
                    </li>
                    <li>
                      <h3>UpWork.com</h3>
                      <h4>2015- 2019</h4>
                      <p>
                        Web design and web development. Using WordPress as a primary technology for building simple web sites.
                      </p>
                
                    </li>
                    <li>
                      <h3>Greco</h3>
                      <h4>2019- present</h4>
                      <p>UI/UX designer responsible for creating an intuitive, user-friendly web app.
                      Developing wireframes and user journeys based on research and testing.
                      </p>
                  
                    </li>
              </ul>
              </div>
        </Content>
      </Frame>
    </Wrap>
  )
}

const Wrap = styled.div`
  color: white;
  font-family: "Roboto Mono";
  height: 450px;
  padding-bottom: 2em;
`
const Frame = styled.div`
  display: flex;
`
const Pills = styled.div`
  ul {
    list-style: none;
    line-height: 3;
    li {
       cursor: pointer;
       &:hover {
           color:#ea4c88!important;
         
       }
       }     
    } 
`
const Content = styled.div`
  padding: 1em 0 0 3em;
  font-size: 0.9em;
  line-height: 1.5;
  max-width: 600px;
  ul {
      li {
          padding-bottom: 1em;
      }
  }
`
