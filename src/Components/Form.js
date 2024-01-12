import React from "react";
import Navbar from './Navbar/Navbar';
import {Card, CardImg, CardBody,
    CardTitle,Row,Col,Container, Button, ButtonGroup, Form, FormGroup, Label, Input, FormText} from 'reactstrap';


function App(){
    
    return(
        <div className="bg">
          <Navbar></Navbar>
           <center><br></br><h2>Order Details</h2><br></br></center> 
           
<Container>
  
     <Row >
     <Col md={2}></Col>

      <Col md={8}>  
      
      <Card>
         {/* <CardImg top width="416px" src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRUi5ukvuhEf7ni5locKzZdhOAhTtUDFUTZ4XRNbLsuuW0nPX3smNAq4in1cX7q7p2RtF64ZHc6xFNk7ur_Pok_ggxT8iWmH9iSLrItvCc&usqp=CAE" alt="Card image cap" height={375} /> */}
        <CardBody>
          
        <Form>
        <FormGroup>
          <Label for="">Name</Label>
          <Input type="text" name="Name" id="Name" placeholder="" required/>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Mobile No</Label>
          <Input type="number" name="mobile" id="Mobile" placeholder="" required/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect" >Size</Label>
          <Input type="select" name="select" id="exampleSelect" placeholder="Select" required>
            <option>-select-</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
            <option>XXL</option>
            <option>XXL</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Flat/Door No</Label>
          <Input type="text" name="Pin" id="Pin" placeholder="" required/>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Land Mark</Label>
          <Input type="text" name="l" id="l" placeholder="" required/>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">City/Town</Label>
          <Input type="text" name="t" id="c" placeholder="" required/>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">District</Label>
          <Input type="text" name="dis" id="dis" placeholder="" required/>
          <FormGroup>
          <Label for="examplePassword">Pincode</Label>
          <Input type="number" name="p" id="p" placeholder="" required/>
        </FormGroup>
        </FormGroup>
        {/* <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input type="url" name="url"  id="exampleFile" required/>
          <FormText color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>
        </FormGroup> */}

        <FormGroup check>
          <Label check>
            <Input type="checkbox" required/>{' '}
            Only Cash On Delivery is available.
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" required/>{' '}
            Check the Product before giving cash.
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" required/>{' '}
            I understand the terms and conditions.
          </Label>
        </FormGroup>
        <br></br>
        <center><Button type="submit" className=" btn btn-dark" ><a href="/Order">Submit</a></Button></center>
      </Form>
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