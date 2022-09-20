import React, { Component } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export class ProductItem extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      name: this.props.data.name || "Producto Medias Query"
    }
  }

  render() {
    const {info,price,image} = this.props.data; //Destructuring
    let url_img = image || "https://www.laylita.com/recetas/wp-content/uploads/2014/06/Caipirinha-o-caipiriC3B1a-de-piC3B1a-500x500.jpg";

    return (
      <Card sx={{ width: 300 ,margin:5 }}
      className="product-item">
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={url_img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {this.state.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <p>{info}</p>
            <h3>{price} €</h3>
          </Typography>
        </CardContent>
        <CardActions>
          <Button className="button1" variant="contained" size="small" onClick={this.props.delete}>Borrar</Button>
         
        </CardActions>
      </Card>

      /*<article>
        <h2>{this.state.name}</h2>
        <img src={url_img} alt={this.state.name} className="image_item" />
        <h3>{info}</h3>
        <p>Price: {price}€</p>
        <Button variant="contained" onClick={this.props.delete}>Borrar</Button>
      </article>*/
    )
  }
}

export default ProductItem