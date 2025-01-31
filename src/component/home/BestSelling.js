import React from 'react'
import { Container, Card,Row } from 'react-bootstrap'
import SubTitleCard from '../utility/SubTitleCard'
import CardProducts from '../utility/CardProducts'

function BestSelling({picture}) {
  return (
<Container>
<SubTitleCard title="Best Selling products" button={"more"} path={"/AllBestSelling"} picture={picture} />
<Row className="justify-content-center mt-2 ">
<CardProducts pictuer={picture}/>
<CardProducts pictuer={picture}/>
<CardProducts pictuer={picture}/>
<CardProducts pictuer={picture}/>


</Row>

</Container>
)
}

export default BestSelling