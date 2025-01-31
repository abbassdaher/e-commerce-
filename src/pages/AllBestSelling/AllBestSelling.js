import React from 'react'
import CardProducts from '../../component/utility/CardProducts'
import { Row } from 'react-bootstrap'

function AllBestSelling({picture}) {
  return (
          <Row className="justify-content-center mt-2 ">
          <CardProducts pictuer={picture}/>
          <CardProducts pictuer={picture}/>
          <CardProducts pictuer={picture}/>
          <CardProducts pictuer={picture}/>
          <CardProducts pictuer={picture}/>
          <CardProducts pictuer={picture}/>
          <CardProducts pictuer={picture}/>
          <CardProducts pictuer={picture}/>
          <CardProducts pictuer={picture}/>
          <CardProducts pictuer={picture}/>
          <CardProducts pictuer={picture}/>
          <CardProducts pictuer={picture}/>
          
          
          </Row>
  )
}

export default AllBestSelling
