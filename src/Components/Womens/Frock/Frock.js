import React from "react";
import Navbar from 'C:/Users/Nandha kumar/OneDrive/Desktop/uid assignment/project/src/Components/Navbar/Navbar.js'
import {Card, CardImg, CardBody,
    CardTitle,Row,Col,Container} from 'reactstrap';

import '../Womens.css'
function App(){
    return(
        <div className="App">
          <Navbar></Navbar>
          <center>
            <h2>Womens Frock</h2>
<Container>
     <Row>
      <Col md={3}>   
     <a href="/Shirt">
     <Card>
        <CardImg top width="375px" src="https://static.wixstatic.com/media/3cd70c_ab1e44cb656b48b08839774bb26728f1~mv2.jpg/v1/fill/w_625,h_834,al_c,q_85,usm_0.66_1.00_0.01/3cd70c_ab1e44cb656b48b08839774bb26728f1~mv2.webp" alt="Card image cap" height={375} />
        <CardBody>
          <h4><CardTitle>Printed Dark Frock</CardTitle></h4>
          <h4><CardTitle>₹1,050</CardTitle></h4>
          <button type="button" class="btn btn-dark">Buy Now </button>
          
        </CardBody>
      </Card>
     </a>
      
      </Col>
      <Col md={3}>  
      <a href="/Suits"> 
      <Card>
         <CardImg top width="416px" src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSvkQTFguJ__4TbVIk1G3LEFufTwU87rgan7j7qei1Bz-PkF__hjBod93hi3S7eRW6E4xj0V_HqYuqqqZ1MIIA04_5LEgfJFh9AhnwD10pT&usqp=CAE" alt="Card image cap" height={375} />
        <CardBody>
          <h4><CardTitle>Flare White Frock</CardTitle></h4>
          <h4><CardTitle>₹999</CardTitle></h4>
          <button type="button" class="btn btn-dark">Buy Now </button>
          
        </CardBody>
      </Card>
       </a>
      </Col>

        

      <Col md={3}>   
      <a href="/Goldencity">
      <Card>
        <CardImg top width="416px" src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT1S37O7NarBCxcDbRZ3XqHLalKtULbgh1mYmBmZ_aSlylxej3-Psymiehvr3m_VvrdaHho45r_PQuLqGUaU6lFMHBM8JvwbT7xI2EUEyEtgdRMRDsqw7YX&usqp=CAE" alt="Card image cap" height={375} />
        <CardBody>
        <h4><CardTitle>Flare Pink Frock</CardTitle></h4>
          <h4><CardTitle>₹1,200</CardTitle></h4>
          <button type="button" class="btn btn-dark">Buy Now </button>
         
        </CardBody>
      </Card>
      </a>
      </Col>
      <Col md={3}>   
      <a href="/Cityform">
      <Card>
        <CardImg top width="416px" src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQj3zQo6lfsT0TBrX_ADu6qwxH8Gv4M4IeLerHA0XiSnvmnDvJujpsIHwNcAPC-ZdVIBhrAqAiK4pIVY3DLjm5Affq5grsEYEWdqTRqosD5SQUY4s41KwYOEA&usqp=CAE" alt="Card image cap" height={375} />
        <CardBody>
        <h4><CardTitle>Embroid Orange Frock</CardTitle></h4>
          <h4><CardTitle>₹1,699</CardTitle></h4>
          <button type="button" class="btn btn-dark">Buy Now </button>

        </CardBody>
      </Card>
       </a>
      </Col>
      </Row>
      <br></br><br></br>
      <Row>
      <Col md={3}> 
      <a href="/R">  
      <Card>
        <CardImg top width="416px" src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTU_k3BZtDxQGzoUnqY5Oy_wSnS5jMIXb3tqZG22I5CQaOoVzEEwxaK7pusdvgGWS5WSoSvId4OwrhiRIihIMBIYgwdfYfp-wR1Q1ElffJL-5xw6VYnWdcDHA&usqp=CAE" alt="Card image cap" height={375} />
        <CardBody>
        <h4><CardTitle>Brown Frock</CardTitle></h4>
          <h4><CardTitle>₹1,099</CardTitle></h4>
          <button type="button" class="btn btn-dark">Buy Now </button>
          
        </CardBody>
      </Card>
      </a>
      </Col>
      <Col md={3}> 
      <a href="/Avenue">    
      <Card>
        <CardImg top width="416px" src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQvdZp0-ojLKw4Q95PUbkbNkXu3VEmmDtN1pYso52BLl3iQRSdo_9gmFfg3TMsIf5QD8H4qmtXEkknqD5e-Vyj2M1Sd6sIcJpzjJY6rYS0gj6tD2Ui0ql_x&usqp=CAE" alt="Card image cap" height={375}/>
        <CardBody>
        <h4><CardTitle>Brown Printed Frock</CardTitle></h4>
          <h4><CardTitle>₹2,000</CardTitle></h4>
          <button type="button" class="btn btn-dark">Buy Now </button>
         
        </CardBody>
      </Card>
      </a>
      </Col>
      <Col md={3}> 
      <a href="/Greenpark">  
        
      <Card>
        <CardImg top width="416px" src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQHI8REm5Sjd1cZcYyjRl_N7HSf0EBzkIgeZRxfQ47i8nXY80NcPGfI8RhtnMVMgw4L6X4J_e3v59E0N5EWTbaJfqmcCqSLDJQ3JYBgqgs&usqp=CAE" alt="Card image cap" height={375} />
        <CardBody>
        <h4><CardTitle>White Printed Frock</CardTitle></h4>
          <h4><CardTitle>₹1,550</CardTitle></h4>
          <button type="button" class="btn btn-dark">Buy Now </button>
         
        </CardBody>
      </Card>
      </a>
      </Col>
      <Col md={3}>   
      <a href="/Ramanujan"> 
      <Card>
        <CardImg top width="416px" src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRVkhoIwKshpyI5IqhnPyK8DxLyaKcoE-Ujp4aS6gb1yGWGDva6caDcJ9XAq-7TBAbsogBm7qY3A5lkDfnMohIdTZV0MrHF2Y_ZR_VvjC3SaPUcBPvoPNuFvA&usqp=CAE" alt="Card image cap" height={375} />
        <CardBody>
        <h4><CardTitle>Voilet Frock</CardTitle></h4>
          <h4><CardTitle>₹1,400</CardTitle></h4>
          <button type="button" class="btn btn-dark">Buy Now </button>
          
        </CardBody>
      </Card>
       </a>
      </Col>
      </Row>

      <br></br><br></br>
      <Row>
      <Col md={3}> 
      <a href="/Olanza">   
      <Card>
        <CardImg top width="416px" src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQk23AGDYd856CgPVKRyO3a_fx7KBOFL_NTSFUcumz-oCecgaZFoEcU2oO3Cpp6s8G5BJf7RCgwE-_0NfTx7fdbpbH8CvpgZTkZ5C8QpwZf1AJyGxe7ANkgmg&usqp=CAE" alt="Card image cap" height={375} />
        <CardBody>
        <h4><CardTitle>Printed Blue Frock</CardTitle></h4>
          <h4><CardTitle>₹900</CardTitle></h4>
          <button type="button" class="btn btn-dark">Buy Now </button>
          
        </CardBody>
      </Card>
      </a>
      </Col>
      <Col md={3}> 
      <a href="/Bertram">     
      <Card>
        <CardImg top width="416px" src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSmoIjUjYvN8wBD-YqDMS2Lm2gtz0x1FBWVUVoxFxbaQcY_vG2y1jXDZbaGrVRXCWgqO3MFnTIuNWnVqMw-2qEHY1L2d-V6Uri-ukrUOMqpUPgoSqLG3vFyyQ&usqp=CAE" alt="Card image cap" height={375}/>
        <CardBody>
        <h4><CardTitle>Dark Pink frock</CardTitle></h4>
          <h4><CardTitle>₹1,200</CardTitle></h4>
          <button type="button" class="btn btn-dark">Buy Now </button>
          
        </CardBody>
      </Card>
      </a>
      </Col>
      <Col md={3}>  
      <a href="/Ramjee">
      <Card>
        <CardImg top width="416px" src="https://rukminim1.flixcart.com/image/832/832/k6mibgw0/dress/a/z/y/l-sfdrss1813-sassafras-original-imafpyzzpyzxnvgs.jpeg?q=70" alt="Card image cap" height={375} />
        <CardBody>
        <h4><CardTitle>Maxi Purple Frock</CardTitle></h4>
          <h4><CardTitle>₹874</CardTitle></h4>
          <button type="button" class="btn btn-dark">Buy Now </button>
          
        </CardBody>
      </Card>
      </a>
      </Col>
      <Col md={3}>  
      <a href="/Townhall">
      <Card>
        <CardImg top width="416px" src="https://rukminim1.flixcart.com/image/832/832/k6mibgw0/dress/s/y/a/s-sfdrss1812-sassafras-original-imafpyzz2fbaqqrw.jpeg?q=70" alt="Card image cap" height={375} />
        <CardBody>
        <h4><CardTitle>Dark Blue Frock</CardTitle></h4>
          <h4><CardTitle>₹874</CardTitle></h4>
          <button type="button" class="btn btn-dark">Buy Now </button>
          
        </CardBody>
      </Card>
       </a>
      </Col>
      </Row>
      
      </Container></center>
        </div>
    )
}
export default App;

