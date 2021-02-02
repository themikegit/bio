import React from 'react'
import styled from "styled-components"
import Pdf from "../comp/cv_miroslav.pdf"

export default function Resume() {
    return (
        <div>
            <Lnk> <a href={Pdf} target = "_blank"  > resume </a> </Lnk>
        </div>
    )
}


const Lnk = styled.div`
   font-family: "Poppins";
   font-size: 1.3em;
`