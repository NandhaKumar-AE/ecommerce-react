import React from "react";
import Navbar from '../Navbar/Navbar';
import {Card, CardImg, CardBody,
    CardTitle,Row,Col,Container, Button, ButtonGroup} from 'reactstrap';

import './Container.css'
function App(){
    
    return(
        <div className="bg">
          <Navbar></Navbar>
           <center><br></br><h2>Majestic Man Red Shirt</h2><br></br></center> 
           
<Container>
  
     <Row >
     <Col md={2}></Col>
      <Col md={3}>   
     
     <Card>
        <CardImg top width="375px" src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSunAlxALYApdp_99XeqzT-oIhAu7qiCa9wZuiv47vqhYd-VAl2ll3LBfbZ1FAmhPAvZER1adyenm0cOqpfV8O62uGGTkhn0RYGpY3Fur0&usqp=CAE" alt="Card image cap" height={375} />
        
      </Card>
     
      
      </Col>
      <Col md={5}>  
      
      <Card>
         {/* <CardImg top width="416px" src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRUi5ukvuhEf7ni5locKzZdhOAhTtUDFUTZ4XRNbLsuuW0nPX3smNAq4in1cX7q7p2RtF64ZHc6xFNk7ur_Pok_ggxT8iWmH9iSLrItvCc&usqp=CAE" alt="Card image cap" height={375} /> */}
        <CardBody>
          
          <h4><CardTitle>Majestic Man Red Shirt</CardTitle></h4><br></br>
          <h6>Nice Texture Design and Material Comfortable and Stylish Look</h6>
          <h6>For Age 18-35</h6>
          <h6>Size</h6>
        <ButtonGroup>
          <Button color="light" size="sm">M</Button>
          <Button color="light" size="sm">L</Button>
          <Button color="light" size="sm">XL</Button>
          <Button color="light" size="sm">XXL</Button>
        </ButtonGroup>
        <br></br><br></br><br></br>
        <h6>In Stock</h6>
          <h4><CardTitle>₹799</CardTitle></h4>
          <a href="/Form"><button type="button" class="btn btn-dark">Buy Now </button></a>
          <br></br>
        </CardBody>
      </Card>
      </Col>
      </Row>
      </Container>
   <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      
        </div>
    )
}
export default App;