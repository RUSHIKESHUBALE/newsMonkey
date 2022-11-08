import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loader from './Loader'

export class News extends Component {
    // articles = [
    //     {
    //         "source": {
    //             "id": "reuters",
    //             "name": "Reuters"
    //         },
    //         "author": null,
    //         "title": "Biden knocks Truss economic plan, says he is not concerned about dollar strength - Reuters UK",
    //         "description": "U.S. President Joe Biden on Saturday criticized British Prime Minister Liz Truss's original economic plan as a mistake and said he was not concerned about the strength of the soaring U.S. dollar.",
    //         "url": "https://www.reuters.com/world/uk/biden-uks-truss-original-economic-plan-was-mistake-2022-10-15/",
    //         "urlToImage": "https://www.reuters.com/resizer/tvmxSWvtybmOcZANKnlEv8WXUDw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/MW3AKGHLKNPELKNMD7E7Y54NB4.jpg",
    //         "publishedAt": "2022-10-16T10:19:00Z",
    //         "content": "PORTLAND, Ore., Oct 15 (Reuters) - U.S. President Joe Biden on Saturday criticized British Prime Minister Liz Truss's original economic plan as a mistake and said he was not concerned about the stren… [+2650 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "TMZ"
    //         },
    //         "author": "TMZ Staff",
    //         "title": "Jeffrey Dahmer Victim's Mom Slams Folks Who Wear 'Evil' Halloween Costumes - TMZ",
    //         "description": "Jeffery Dahmer-inspired Halloween costumes have already gotten a ton of backlash, but more than anything they're evil and exploit families ... so says one victim's mom, who is urging folks to stay away from them.",
    //         "url": "https://www.tmz.com/2022/10/16/jeffrey-dahmer-victim-tony-hughes-deaf-mom-family-halloween-costume/",
    //         "urlToImage": "https://imagez.tmz.com/image/bc/16by9/2022/10/14/bc9659f2a5854ac5953387d104432a38_xl.jpg",
    //         "publishedAt": "2022-10-16T08:00:00Z",
    //         "content": "Jeffrey Dahmer-inspired Halloween costumes have already gotten a ton of backlash, but more than anything they're evil and exploit families ... so says one victim's mom, who is urging folks to stay cl… [+1209 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Daily Beast"
    //         },
    //         "author": "Eileen Grench",
    //         "title": "Herschel Walker Flashes Seemingly Bogus Police Badge at Debate, Gets Trolled Online - The Daily Beast",
    //         "description": "Herschel Walker has been trolled on social media after pulling out a seemingly bogus police badge after Raphael Warnock slammed him for pretending to be a cop.",
    //         "url": "https://www.thedailybeast.com/herschel-walker-flashes-seemingly-bogus-police-badge-at-debate-against-raphael-warnock",
    //         "urlToImage": "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_819,w_1456,x_84,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1665861768/Walker_bfebrh",
    //         "publishedAt": "2022-10-16T07:58:10Z",
    //         "content": "At Fridays crucial Georgia senate race debate, all eyes were on how anti-abortion hardliner Herschel Walker would defend himself against Democratic candidate Raphael Warnock after an explosive report… [+4081 chars]"
    //     },
    //     {
    //         "source": {
    //           "id": null,
    //           "name": "ESPN"
    //         },
    //         "author": "Alden Gonzalez",
    //         "title": "Padres eliminate Dodgers, advance to NLCS for 1st time since 1998 - ESPN",
    //         "description": "Jake Cronenworth hit a tiebreaking, two-run single with two outs in the seventh inning, and the Padres rallied past the Dodgers 5-3 to advance to the NLCS.",
    //         "url": "https://www.espn.com/mlb/story/_/id/34805857/padres-eliminate-dodgers-advance-nlcs-1st-1998",
    //         "urlToImage": "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1016%2Fr1076401_1296x729_16%2D9.jpg",
    //         "publishedAt": "2022-10-16T05:41:32Z",
    //         "content": "SAN DIEGO -- Nights like these, when the weekend arrives and the Los Angeles Dodgers are in town, don't often feel like a home-field advantage for the San Diego Padres. So many Dodgers fans make the … [+5568 chars]"
    //       }
    // ];
    articles = [];

    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1019fcf4b20742c49de94004dc50e1c7&page=1&pageSize=${this.props.totalNews}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        
        this.setState({
            articles: parsedData.articles,
            page : 1,
            totalResults : parsedData.totalResults
        })
    }

    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false
        }
    }

    goNext = async ()=>{
        this.setState({loading : true})
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1019fcf4b20742c49de94004dc50e1c7&page=${this.state.page + 1}&pageSize=${this.props.totalNews}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            page : this.state.page + 1,
            loading : false,
            loading : false
        })
    }

    goPrevious = async()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1019fcf4b20742c49de94004dc50e1c7&page=${this.state.page - 1}&pageSize=${this.props.totalNews}`;
        this.setState({loading : true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            page : this.state.page - 1,
            loading : false
        })
        console.log(this.state.page)
    }

    render() {
        let { headingTitle } = this.props;  
        return (
            <>
            {this.state.loading && <Loader/>}
            <div className="contianer">
                {!this.state.loading && <div className="row">
                    <h2 className="my-2"><strong>{headingTitle}</strong></h2>
                    {this.state.articles.map((elem) => {
                        return <div className="col-md-3" newsurl={elem.url}>
                            <NewsItem title={elem.title?elem.title.slice(0, 45):""} description={elem.description?elem.description.slice(0, 98):""} imageurl={elem.urlToImage?elem.urlToImage:"https://techcrunch.com/wp-content/uploads/2020/01/arrival.jpg?resize=1200,800"} newsurl={elem.url}  />
                        </div>
                    })}
                </div>}
            </div>
            <div className="contianer d-flex justify-content-between mb-2">
                <button type="button" disabled = {this.state.page <= 1} className="btn btn-primary" onClick={this.goPrevious}>← Previous</button>
                <button type="button" disabled = {this.state.totalResults < ((this.state.page ) * 12)} className="btn btn-primary" onClick={this.goNext}>Next →</button>
            </div>
            </>
        )
    }
}

export default News

