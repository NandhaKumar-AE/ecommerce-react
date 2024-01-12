import React from 'react'
import {Card, CardImg, CardBody,
    CardTitle,Row,Col,Container} from 'reactstrap';




export default function Catalog() {
  return (
    <div className="App">
        
     
<Container>
  <h2 id='men'>Mens</h2>
  <br></br>
  <center>
     <Row>
      <Col md={3}>   
     <a href="/Casual">
     <Card>
        <CardImg top width="375px" src="https://cdn.pixabay.com/photo/2015/01/07/18/11/shirts-591750_960_720.jpg" alt="Card image cap" height={375} />
        <CardBody>
          <h4><CardTitle>Mens Casuals</CardTitle></h4>
          
        </CardBody>
      </Card>
     </a>
      
      </Col>
      <Col md={3}>  
      <a href="/Suits"> 
      <Card>
         <CardImg top width="416px" src="https://tse2.mm.bing.net/th?id=OIP.-3imAHBz9TqKMf1UHKj3NAHaLd&pid=Api&P=0" alt="Card image cap" height={375} />
        <CardBody>
          <h4><CardTitle>Mens Suits</CardTitle></h4>
          
        </CardBody>
      </Card>
       </a>
      </Col>


        

      <Col md={3}>   
      <a href="/Sports">
      <Card>
        <CardImg top width="416px" src="https://img.freepik.com/premium-psd/front-view-sport-jersey-mockup_473561-158.jpg?w=740" alt="Card image cap" height={375} />
        <CardBody>
          <h4><CardTitle>Mens  Sports Wear</CardTitle></h4>
         
        </CardBody>
      </Card>
      </a>
      </Col>
      <Col md={3}>   
      <a href="/Traditional">
      <Card>
        <CardImg top width="416px" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQjiSGmBz2MKgbqKdZrDg3crJqgvIqZMtHBgWwAqVHUoo5_G-_m" alt="Card image cap" height={375} />
        <CardBody>
          <h4><CardTitle>Mens Traditional Wear</CardTitle></h4>
         
        </CardBody>
      </Card>
       </a>
      </Col>
      </Row>
      </center>
      <br></br>
      <h2 id="women">Women</h2>
      <br></br>
      <center>
      <Row>
      <Col md={3}> 
      <a href="/Churidhar">  
      <Card>
        <CardImg top width="416px" src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT1jrLYtmKbtuiffULkgTLbuLpoQ5dPrfQSI2TPnj7jbX9DlRk3xSrIIKPQiL22_Na1ejhnz83kjvE3PIQb-E0yojfYylimuPg662FX_jo&usqp=CAE" alt="Card image cap" height={375} />
        <CardBody>
          <h4><CardTitle>Womens churidhar</CardTitle></h4>
          
        </CardBody>
      </Card>
      </a>
      </Col>
      <Col md={3}> 
      <a href="/Frock">    
      <Card>
        <CardImg top width="416px" src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTAmdHfxaX0r-44GxykzulA42XjyprscgnneLsgpDRi9P__6XNyDbTkTijHOIimUzilSv8WKwuVYyKwZY38Xzv-3t22KzS3e5bqbVv3xfKu&usqp=CAE" alt="Card image cap" height={375}/>
        <CardBody>
          <h4><CardTitle>Womens frock</CardTitle></h4>
         
        </CardBody>
      </Card>
      </a>
      </Col>
      <Col md={3}> 
      <a href="/Officewear">  
        
      <Card>
        <CardImg top width="416px" src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT7BgJFe_yECh1vzLurA9vb9s94mvz-gz9sBbj_2J463qQ5F_qmIh69wDEOXPMAOqQyUOw7aExH7UYisN53AVX3Vie5zUGlSl15LFAPYr8&usqp=CAE" alt="Card image cap" height={375} />
        <CardBody>
          <h4><CardTitle> Womens Office Wear</CardTitle></h4>
         
        </CardBody>
      </Card>
      </a>
      </Col>
      <Col md={3}>   
      <a href="/wtraditional"> 
      <Card>
        <CardImg top width="416px" src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRYXyvh0EVUgKFEC3c9a_RGAZeBex9SgO_8q-6GnqnhDzuJYS7NzYieB2SzWfFheeXD-XwH636VdeDakLwSP8cxyOsigWYYGk7oAPP9anY&usqp=CAE" alt="Card image cap" height={375} />
        <CardBody>
          <h4><CardTitle>Women TraditionalWear</CardTitle></h4>
          
        </CardBody>
      </Card>
       </a>
      </Col>
      </Row></center>

      <br></br>
      <h2 id='kids'>Kid's</h2>
      <br></br>
      <center>
      <Row>
      <Col md={3}> 
      <a href="/Kidgirl">   
      <Card>
        <CardImg top width="416px" src="https://rukminim1.flixcart.com/image/832/832/l2nmnww0/kids-dress/z/9/0/1-2-years-pink-and-radium-green-top-and-bottom-sleeveless-muskan-original-imagdy3hta9shyen.jpeg?q=70" alt="Card image cap" height={375} />
        <CardBody>
          <h4><CardTitle>Girl's Casual</CardTitle></h4>
          
        </CardBody>
      </Card>
      </a>
      </Col>
      <Col md={3}> 
      <a href="/Kidboy">     
      <Card>
        <CardImg top width="416px" src="https://rukminim1.flixcart.com/image/832/832/xif0q/kids-t-shirt/4/r/g/14-15-years-bwtblbz53-blrnfulboy-bz56-blive-original-imaghbhazzzk2zkb.jpeg?q=70" alt="Card image cap" height={375}/>
        <CardBody>
          <h4><CardTitle>Boy's Casual</CardTitle></h4>
          
        </CardBody>
      </Card>
      </a>
      </Col>
      <Col md={3}>  
      <a href="/Boyparty">
      <Card>
        <CardImg top width="416px" src="http://cdn.shopify.com/s/files/1/0622/7247/1298/products/ms_43ded_512_21027574.jpg?v=1657009410" alt="Card image cap" height={375} />
        <CardBody>
          <h4><CardTitle>Boy's Party Wear</CardTitle></h4>
          
        </CardBody>
      </Card>
      </a>
      </Col>
      <Col md={3}>  
      <a href="/Girlparty">
      <Card>
        <CardImg top width="416px" src="https://static.hopscotch.in/fstatic/product/202202/e564e539-65c6-4827-bf37-080683801ffd_large.jpg?version=1645601519752&tr=w-480,c-at_max,n-normal" alt="Card image cap" height={375} />
        <CardBody>
          <h4><CardTitle>Girl's Party wear</CardTitle></h4>
          
        </CardBody>
      </Card>
       </a>
      </Col>
      </Row></center>
      
      </Container>
      
      </div>
  )
}