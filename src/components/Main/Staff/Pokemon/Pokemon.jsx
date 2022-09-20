import React, { Component } from "react";

class Pokemon extends Component {
  
  render() {
    const {name,url} = this.props.data;

    return <article key={name} >
    <a href={url} alt={name + 'image'}> {name} </a>
    <p>{url}</p>
  </article>
  }
}

export default Pokemon;
