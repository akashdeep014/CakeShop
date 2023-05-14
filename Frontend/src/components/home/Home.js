import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';

export function Home(prop) {
  return (
    <div>

      <div className="d-flex justify-content-center homeimage">
        <img src="https://images.unsplash.com/photo-1491223111273-505dc52e1cf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FrZSUyMHNob3B8ZW58MHx8MHx8&auto=format&fit=crop&w=6000&q=1000"/>
      </div>

      <div className='container mb-4'>
        <h2 className="Venue"><i>Our Popular items</i></h2>

        <CardGroup>
          <div className='row'>
            <div className='col-4'>
              <Card style=
                {{ marginLeft: "10px" }}>
                <Card.Img variant="top" src="https://images.pexels.com/photos/1169790/pexels-photo-1169790.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" />
                <Card.Body>
                  <Card.Title><Link to="vendorsList/city/mumbai">Cup Cake</Link></Card.Title>
                  <Card.Text>

                  </Card.Text>
                </Card.Body>

              </Card>
            </div>

            <div className='col-4'>
              <Card>
                <Card.Img variant="top" src="https://images.pexels.com/photos/7774554/pexels-photo-7774554.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" />
                <Card.Body>
                  <Card.Title><Link to="vendorsList/city/pune">Orange Cake</Link></Card.Title>
                  <Card.Text>

                  </Card.Text>
                </Card.Body>

              </Card>
            </div>
            <div className='col-4'>
              <Card>
                <Card.Img variant="top" src="https://images.pexels.com/photos/12318731/pexels-photo-12318731.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" />
                <Card.Body>
                  <Card.Title><Link to="vendorsList/city/mumbai">Strawberry Cake</Link></Card.Title>
                  <Card.Text>

                  </Card.Text>
                </Card.Body>

              </Card>
            </div>
          </div>
        </CardGroup>


        <h2 className="Venue"><i>Popular Search</i></h2>
        <CardGroup>
          <div className='row'>
            <div className='col-4'>

              <Card >
                <Card.Img variant="top" src="https://images.pexels.com/photos/8732801/pexels-photo-8732801.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load
" />
                <Card.Body>
                  <Card.Title><Link to="vendorsList/Bridalwear">Chocalate Cake</Link></Card.Title>
                  <Card.Text>

                  </Card.Text>
                </Card.Body>

              </Card>
            </div>
            <div className='col-4'>
              <Card>
                <Card.Img variant="top" src="https://images.pexels.com/photos/12035746/pexels-photo-12035746.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" />
                <Card.Body>
                  <Card.Title><Link to="vendorsList/Groomwear">Sponge Cake</Link></Card.Title>
                  <Card.Text>

                  </Card.Text>
                </Card.Body>

              </Card>
            </div>
            <div className='col-4'>
              <Card>
                <Card.Img variant="top" src="https://images.pexels.com/photos/1414234/pexels-photo-1414234.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" />
                <Card.Body>
                  <Card.Title><Link to="vendorsList/decoration">Vanilla cake</Link></Card.Title>
                  <Card.Text>

                  </Card.Text>
                </Card.Body>

              </Card>
            </div>
          </div>
        </CardGroup>
      </div>
    </div >




  )
}

export default Home