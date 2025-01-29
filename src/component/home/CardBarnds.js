import React from 'react'
import { Col } from 'react-bootstrap'

function CardBarnds({picture}) {
  return (
     <Col
      className=" d-flex justify-content-center shadow mt-2 "
      xs="6"
      sm="4"
      md="3"
      lg="2"
    >
     <img className="w-100 h-100" src={picture} alt="brand"/>
    
    </Col>
  )
}


export default CardBarnds