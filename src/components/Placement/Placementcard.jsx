import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../Placement/placement.css'
import {Card,Button} from 'react-bootstrap'
import { CardBody } from 'reactstrap'

 const Placementcard=(props)=> {
    let {imgsrc,price,title,role}=props.data
  return (
  <Card className='p-0 overflow-hidden h-100 w-100 shadow'>
<div className='overflow-hidden rounded p-0 bg-light'>
<Card.Img variant="top" src={imgsrc}/>
</div>
<CardBody className='text-center'>
<Card.Title className='display-9' id='salary'>Pkg:{price}</Card.Title>
<Card.Text id='salary' className='w-100'>{title}</Card.Text>
<Card.Subtitle id='role' className='w-100'>Role:{role}</Card.Subtitle>
</CardBody>
{/* <Button className='w-100 rounded-0' variant='success'>Add To Cart</Button> */}
  </Card>
  )
}

export default Placementcard
