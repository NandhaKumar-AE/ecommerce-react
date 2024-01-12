import React from "react";
import Navbar from './Navbar/Navbar';
import {Card, CardImg, CardBody,
    CardTitle,Row,Col,Container, Button, ButtonGroup, Form, FormGroup, Label, Input, FormText, CardImgOverlay, CardText} from 'reactstrap';
import './Order.css'

function App(){
    
    return(
        <div className="bg">
          <Navbar></Navbar>
           <center><br></br><br></br><br></br><br></br></center> 
           
<Container>
  
     <Row >
     <Col md={2}></Col>

      <Col md={8}>  
      
<div>
  <Card inverse>
    <CardImg
      alt="Card image cap"
      src="https://acegif.com/wp-content/uploads/gif/confetti-4.gif"
      style={{
        height: 270
      }}
      width="100%"
    />
    <CardImgOverlay>
      <CardTitle tag="h5">
        Card Title
      </CardTitle>
      <CardText>
        <br></br><br></br>
        <h1 className="text-dark  font-weight-bold text-center align-middle">Order Placed</h1>
      </CardText>
    </CardImgOverlay>
  </Card>
</div>
      
      
      </Col>
      </Row>
      </Container>
   <br></br><br></br><br></br><center><a href="/"><button type="button" class="btn btn-dark">Continue Shopping</button></a></center><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br>
        </div>
    )
}
export default App;