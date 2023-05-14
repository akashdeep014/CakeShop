import { Component } from "react";
import { Card } from "react-bootstrap";
import './About.css'

export class About extends Component {
  //export class AboutUs extends {        /*textAlign:'center' ,justifyContent:'center'*/

  render() {
    return (
      <>

        <div className="container">
          <div className="">

            <Card>
              <Card.Img
                variant="top"
                src="https://img.freepik.com/free-photo/portrait-smiling-blonde-young-woman-holding-slice-cake-plate-coffee-shop_23-2148027990.jpg?size=3000&ext=jpg&ga=GA1.1.962111656.1684075285&semt=ais"
              />
              <Card.Body>
                <Card.Text>
                  <center>
                    <h5 className="text-primary">
                      <h2>So Sweet. So Good. Sure to bring smiles</h2>
                    </h5>
                  </center>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <br></br>

          <div className="container">
            <div abt="text-dark m-2 p-3 bg-secondary" style={{ fontSize: 20 }}>

              <div className="aboutus-text"> Every page on your baking business website is a place to attract new cake orders, and the about page is a great opportunity to connect with your customers by giving them a chance to get to know you.  It’s important that you don’t cram your website full of text and information as it can overwhelm potential customers and they may leave the website before they even see what you have on offer.  </div>
              <br />
              <h2>Make Cake Planning decisions</h2>
              <br />
              <h3>Vendors</h3>
              <div className="aboutus-text">
              You know your life lacks flavor if you aren't daydreaming about cakes. In fact, the cake is one of the biggest highlights that people look forward to during birthday celebrations and weddings. If you like your cake classy and delish and if you happen to be in Mumbai, we have this awesome list of the best cake shops in Mumbai for you. Read on to find where to get the coolest cakes with a 10/10 taste ranking in Mumbai
              </div>
              <br />
              
              
              <br />
              
            </div>

          </div>

          <div className="text-dark m-2 p-3 bg-light mb-0" style={{ fontSize: 20 }}>
            <h3>Our Vision </h3>
            <div className="aboutus-text p-2">
            The vision is to enthusiastically re-invent the way the customers enjoy the collaborative expression of unique, eloquent, and “outside the box” thinking in bakery designs allowing to exceed the customer expectations. The goal, provide supreme product and customer experience using quality ingredients and new techniques to create a product truly superior in taste and design. Provide appreciation to each guest for the opportunity to serve them and provide happiness and joy through the art of food.
            </div>
            <div className="d-flex justify-content-between gap-2">
              <div className="card" style={{ width: "27rem", height: "100%" }}>
                {/* <img className="card-img-top" src="https://image.wedmegood.com/resized/1000X/uploads/member/664795/1640599720_image8083.jpg?crop=333,492,1366,768" alt="Card image cap"
                ></img> */}
              </div>
              <div className="card" style={{ width: "27rem", height: "100%" }}>
                {/* <img classNames="card-img-top" src="https://image.wedmegood.com/resized/1000X/uploads/member/3362407/1662537106_IMG_6126.JPG?crop=108,0,1067,600" alt="Card image cap"
                ></img> */}
              </div>
              <div className="card" style={{ width: "27rem", height: "100%" }}>
                {/* <img className="card-img-top" src="https://image.wedmegood.com/resized/1000X/uploads/member/14377/1434462034_image.jpg" alt="Card image cap"
                ></img> */}
              </div>
              <div className="card" style={{ width: "27rem", height: "100%" }}>
                {/* <img
                  className="card-img-top"
                  src="https://image.wedmegood.com/resized/1000X/uploads/member/115974/1662618065__SRJ0883.jpeg?crop=5,133,2038,1146"
                  alt="Card image cap"
                ></img> */}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
