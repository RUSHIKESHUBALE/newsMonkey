import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description, imageurl, newsurl} = this.props;
        return (
            <div className="card my-4" style = {{width : "19rem"}}>
                <img className="card-img-top" src= {imageurl} alt="Card image cap"  style = {{height: "10rem"}}/>
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <a href={newsurl} className="btn btn-primary">Read more</a>
                </div>
            </div>
        )
    }
}

export default NewsItem
