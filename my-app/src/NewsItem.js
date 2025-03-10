import React, { Component } from 'react'

export default class NewsItem extends Component {
  
  render() {
    const { title, description, imageUrl, Url, author, date, source } = this.props;
  return (
      <>
<div className="card" style={{ width: '18rem' }}>
  <img src={imageUrl}className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={Url} target='_blank' className="btn btn-sm btn-primary">Read More....</a>
  </div>
</div>

      </>
    )
  }
}
