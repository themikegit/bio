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
              <p>I'm Miroslav 30 years old webdesginer from Belgrade. I have stared my carer as a freelance desginer in 2015 in a platform 99desgin.com.
                  After bunch of contests won I moved to other freelance platforms like freelancer and upwork and many others.<br/> <br/> My specialty was a brand desgin /web desgin.
                  I have worked with more than 600 clients from all around the world mostly on brand id projects (logos, stationary ...) and webdesgin (wireframing and UI desgin) I moved to UX and UI desgin. That becomes my passion. Thinking about 
                  how to make process easier for the users to reach their goal but with cool looking interface in same time was very inspiring and chalenging for me.

              </p>
              </div>
          <div style = {{ display: pill == "Education" ? "block" : "none" }} >
          <ul>
                  <li>
                      <h3>Faculty of security studies</h3>
                      <h4>2009-2014</h4>
                      <p> I was always in love with cyber security
                      </p>
              
                    </li>
                    <li>
                      <h3>Vinca technology</h3>
                      <h4>2017</h4>
                      <p>MySQL and PHP course of development. Doing the basis
                      </p>
                
                    </li>
                    <li>
                      <h3>Vinca technology</h3>
                      <h4>2017</h4>
                      <p>Wordpress development.Creating theme from zero.
                      </p>
                  
                    </li>
                    <li>
                      <h3>IT Academy</h3>
                      <h4>2018</h4>
                      <p>Web design module.
                      </p>
                  
                    </li>
              </ul>
              </div>
          <div style = {{ display: pill == "Experience" ? "block" : "none" }} >
              <ul>
                  <li>
                      <h3>Freelancer.com</h3>
                      <h4>2015-2019</h4>
                      <p>Working as a independent freelancer on a varius projects.
                          More than 300 clients from USA, CA, AU and other countries
                          Average profile rating 4.8
                      </p>
              
                    </li>
                    <li>
                      <h3>UpWork.com</h3>
                      <h4>2015- present</h4>
                      <p>Working as a independent freelancer on a varius projects.
                          More than 300 clients from USA, CA, AU and other countries
                          Average profile rating 4.8
                      </p>
                
                    </li>
                    <li>
                      <h3>Greco</h3>
                      <h4>2015- present</h4>
                      <p>Working as a independent freelancer on a varius projects.
                          More than 300 clients from USA, CA, AU and other countries
                          Average profile rating 4.8
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
