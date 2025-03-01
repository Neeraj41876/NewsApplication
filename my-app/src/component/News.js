import React, { Component } from 'react';
import NewsItem from '../NewsItem';

export default class News extends Component {
  // Articles data moved outside the constructor
  articles = [
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Amy Croffey, Christian Edwards, James Legge, Emmanuel Miculita, Catherine Nicholls",
      "title": "Andrew Tate and brother leave Romania on jet headed for Florida, lawyer says - CNN",
      "description": "The Tate brothers have been charged with rape, human trafficking, money laundering and starting an organized crime group, and deny all wrongdoing. They were allowed to leave Romania after the US reportedly put pressure on Bucharest to ease travel restrictions…",
      "url": "https://www.cnn.com/2025/02/27/europe/andrew-tate-romania-us-intl-hnk/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2188618535.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2025-02-27T15:58:00Z",
      "content": "Right-wing influencer Andrew Tate and his brother Tristan have landed in Fort Lauderdale, Florida, after leaving Romania on a private jet Thursday, according to Mateea Petrescu, the brothers spokesperson… [+4342 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "BBC News"
      },
      "author": null,
      "title": "Thailand deports dozens of Uyghurs to China - BBC.com",
      "description": "The move comes after rights groups warned the Uyghurs face torture and possibly death back in China.",
      "url": "https://www.bbc.com/news/articles/c14jjxz8re6o",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/c974/live/685a0380-f4f1-11ef-ae0a-4bca4f518eb0.jpg",
      "publishedAt": "2025-02-27T15:52:11Z",
      "content": "Laura Bicker and Kathryn Armstrong\r\nAt least 40 Uyghurs have been deported to China, the Thai authorities have confirmed, despite warnings from rights groups that they face possible torture and even … [+4966 chars]"
    },
    // Other articles go here
  ];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false
    };
  }

  async componentDidMount() {
    let url = "https://newsapi.org/v2/everything?q=apple&from=2025-02-28&to=2025-02-28&sortBy=popularity&apiKey=a5196c8c21f44c9eae01ea656af4982b";
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({ articles: parseData.articles }); // Corrected here
  }

  render() {
    return (
      <div className="container my-3">
        <h2>News Monkey</h2>
        <div className="row">
          {this.state.articles.map((article, index) => (
            <div className="col-md-4 my-3" key={index}>
              <NewsItem
                title={article.title.length > 60 ? article.title.slice(0, 45) + "..." : article.title}
                description={article.description ? (article.description.length > 80 ? article.description.slice(0, 88) + "..." : article.description) : "No description available."}
                imageUrl={article.urlToImage ? article.urlToImage : "https://blog.pravda.sk/wp-content/default-avatar-blog-256.png" } // Default image if none exists
                Url={article.url}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
