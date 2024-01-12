import React from "react";
import Navbar from '../Navbar/Navbar';
import {Card, CardImg, CardBody,
    CardTitle,Row,Col,Container} from 'reactstrap';

import './Casual.css'
function App(){
    return(
        <div className="App">
          <Navbar></Navbar>
          <center>
            <br></br><h2>Mens Sports Wear</h2><br></br>
<Container>
     <Row>
      <Col md={3}>   
     <a href="/Shirt">
     <Card>
        <CardImg top width="375px" src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQbhkG_OzzssIRGVYRgCgLtjN3OFHhToyyO8I6T9Lpzz1cF3VrNLrm2qNECvPYxLNXYcT6uIwN2m-GI9hA6bw7WOacS3BQUVg1DUcvDCC-eJkcLwS0oV1KgDA&usqp=CAE" alt="Card image cap" height={375} />
        <CardBody>
          <h4><CardTitle>Green Sports Set</CardTitle></h4>
          <h4><CardTitle>₹1,900</CardTitle></h4>
          <button type="button" class="btn btn-dark">Buy Now </button>
          
        </CardBody>
      </Card>
     </a>
      
      </Col>
      <Col md={3}>  
      <a href="/Suits"> 
      <Card>
         <CardImg top width="416px" src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQnya8P_aFAd4uffyjeb5Gu74R0c6ndzap2Rvrx1si9WmSCczhDo-gH16lP2Lun4Dcxc0SkbA8awlD4nr5kR9yTfFOWIhvw6kgiUFHK9Eyzyh22F_DsgHmj&usqp=CAE" alt="Card image cap" height={375} />
        <CardBody>
          <h4><CardTitle>Black T-Shirt</CardTitle></h4>
          <h4><CardTitle>₹670</CardTitle></h4>
          <button type="button" class="btn btn-dark">Buy Now </button>
          
        </CardBody>
      </Card>
       </a>
      </Col>


        

      <Col md={3}>   
      <a href="/Goldencity">
      <Card>
        <CardImg top width="416px" src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSq4OfD2nb3DCYAPjYduOFerBtT1CAuCy7YCm3halqnUpQJDJuhaaaIVdjYvxY-Hv7ym0EDzJtmtJvIQhYXruSEGE7qGttdjp4L9bn5DA_vi-_wGZemzI35&usqp=CAE" alt="Card image cap" height={375} />
        <CardBody>
        <h4><CardTitle>Emirates T-Shirt</CardTitle></h4>
          <h4><CardTitle>₹770</CardTitle></h4>
          <button type="button" class="btn btn-dark">Buy Now </button>
         
        </CardBody>
      </Card>
      </a>
      </Col>
      <Col md={3}>   
      <a href="/Cityform">
      <Card>
        <CardImg top width="416px" src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQF68omo4UaccQ7djutF96FJZBolz6CY41hBu1ib15slnudU-LR4hSqGSf7d1leU7b9L3Hm5XIXumS7YnQC4WgTfiVM1ojjy2YJYsnUQT2gvXjj93DBX3NNAg&usqp=CAE" alt="Card image cap" height={375} />
        <CardBody>
        <h4><CardTitle>Liverpool T-Shirt</CardTitle></h4>
          <h4><CardTitle>₹899</CardTitle></h4>
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
        <CardImg top width="416px" src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSUBesy2SpdIQ22W2nopUh2XmxxJFWc_EaM5KR1d-g5o6ssQFexDGrp3EXNgMMMrGF6UWRXvgbXSkgztHs0FQP4883cVMYkbieuQzs1NKuoUmfobeDznrerLA&usqp=CAE" alt="Card image cap" height={375} />
        <CardBody>
        <h4><CardTitle>White T-Shirt</CardTitle></h4>
          <h4><CardTitle>₹599</CardTitle></h4>
          <button type="button" class="btn btn-dark">Buy Now </button>
          
        </CardBody>
      </Card>
      </a>
      </Col>
      <Col md={3}> 
      <a href="/Avenue">    
      <Card>
        <CardImg top width="416px" src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQEedT8m6NlkEou9qqTlndq4tqRJMMzIwZp0_UfrSYO6y-Vqi0dJm7O6fvp3ASKUcmtKTzF-nztMiGqQJ46CN0vTs-n6ka9k6TX1_kP45h0uzKXDEcIg55xKA&usqp=CAE" alt="Card image cap" height={375}/>
        <CardBody>
        <h4><CardTitle>Black Sports Set</CardTitle></h4>
          <h4><CardTitle>₹1,599</CardTitle></h4>
          <button type="button" class="btn btn-dark">Buy Now </button>
         
        </CardBody>
      </Card>
      </a>
      </Col>
      <Col md={3}> 
      <a href="/Greenpark">  
        
      <Card>
        <CardImg top width="416px" src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQzXehAewVHd-NUliucNHPBVHGVI79Di4bqANHug6DYT4hHYSMudOJVXpcZKpi6N1mirWeKWFsErQ-U0dVL88KNsUhwDbI3Mcpcw--qlrrAoKlQS9YV_kiiHQ&usqp=CAE" alt="Card image cap" height={375} />
        <CardBody>
        <h4><CardTitle>IPL T-Shirt</CardTitle></h4>
          <h4><CardTitle>₹799</CardTitle></h4>
          <button type="button" class="btn btn-dark">Buy Now </button>
         
        </CardBody>
      </Card>
      </a>
      </Col>
      <Col md={3}>   
      <a href="/Ramanujan"> 
      <Card>
        <CardImg top width="416px" src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTNRnyDT5hew1oQxXTwP4GYRQ7j4YvLsWA4d5SFRrZTfB8VR7dkpvRT7ujuPCZzVhm05yr5jm6cF5m0zZfN9mLk5FCr5f9KTUXy2oS1Hn4bZuISFl21mDU6&usqp=CAE" alt="Card image cap" height={375} />
        <CardBody>
        <h4><CardTitle>66 T-Shirt</CardTitle></h4>
          <h4><CardTitle>₹999</CardTitle></h4>
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
        <CardImg top width="416px" src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQHnj6cVOWTbmtNSY7neGqF0KPdFPyJE0n_Ma_ayGCUhHjmsQDBf8gZ3-_EHnKAEa4VN8hTlfP55p7oKG2Blf-b2AjWRVySEWzxWxAe4mVr0l_cC1wRtCqA&usqp=CAE" alt="Card image cap" height={375} />
        <CardBody>
        <h4><CardTitle>Mumbai T-Shirt</CardTitle></h4>
          <h4><CardTitle>₹780</CardTitle></h4>
          <button type="button" class="btn btn-dark">Buy Now </button>
          
        </CardBody>
      </Card>
      </a>
      </Col>
      <Col md={3}> 
      <a href="/Bertram">     
      <Card>
        <CardImg top width="416px" src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQTWmPc-NNjDlbJHSFoqtITWy-beg1S2vkwAuzyO-FMLjL9zTc5Sr_riwveBpcUHZZN8mBTIQA5ZRsANshGQe-JRYnVyCKeeYySlMuSf0s&usqp=CAE" alt="Card image cap" height={375}/>
        <CardBody>
        <h4><CardTitle>Orange T-Shirt</CardTitle></h4>
          <h4><CardTitle>₹750</CardTitle></h4>
          <button type="button" class="btn btn-dark">Buy Now </button>
          
        </CardBody>
      </Card>
      </a>
      </Col>
      <Col md={3}>  
      <a href="/Ramjee">
      <Card>
        <CardImg top width="416px" src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQmpFXKglL_v89RUxzDpyzJ2lYqAFEA4MVrWv7k4opqN3MjtNfJWzLZMIgKqQSunuc9lA1iATmypVHADrwjfhNXVB8IqZrtkqmEaCb-VQuvGXmmSb5ju3KG&usqp=CAE" alt="Card image cap" height={375} />
        <CardBody>
        <h4><CardTitle>WB Sports Set</CardTitle></h4>
          <h4><CardTitle>₹1,850</CardTitle></h4>
          <button type="button" class="btn btn-dark">Buy Now </button>
          
        </CardBody>
      </Card>
      </a>
      </Col>
      <Col md={3}>  
      <a href="/Townhall">
      <Card>
        <CardImg top width="416px" src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSlUTVVZVA5pCxiFoxIal7_k99jy_vdf9FKRm4C02ed8eh2nAfHVnVY7vfNz7fjGcxV5dbuGXzKO61qasRGgEm9xltedDO31MmyU_8w657rcLcUYEMmQsB6_w&usqp=CAE" alt="Card image cap" height={375} />
        <CardBody>
        <h4><CardTitle>India T-Shirt</CardTitle></h4>
          <h4><CardTitle>₹899</CardTitle></h4>
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