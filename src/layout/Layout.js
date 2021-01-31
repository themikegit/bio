import React, { Children } from "react"
import styled from "styled-components"
import { useSpring, animated } from "react-spring"
export default function Layout({ children }) {
  const effect = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1050 },
  })
  return (
    <Wrap style={effect}>
      {" "}
  {children}
    </Wrap>
  )
}

const Wrap = styled(animated.div)`
  max-width: 900px;
  margin: 0 auto;
  padding: 1rem;
 
`
