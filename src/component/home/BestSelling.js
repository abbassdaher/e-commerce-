import React from 'react'
import { Container, Card,Row } from 'react-bootstrap'
import SubTitleCard from '../utility/SubTitleCard'
import CardProducts from '../utility/CardProducts'

function BestSelling() {
  return (
<Container>
<SubTitleCard title="Best Selling products" button={"more"} />
<Row className="justify-content-center mt-2 ">
<CardProducts/>
<CardProducts/>
<CardProducts/>
<CardProducts/>

</Row>

</Container>
)
}

export default BestSelling