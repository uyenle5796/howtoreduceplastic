import React, { Component } from 'react';
import BlogCover from '../blogCover/cover.js';
import Navigation from '../blogNavigation/navigation.js';

class Tip10 extends Component {

  constructor() {
    super();

    this.state = {
      id: 10,
      title: "Educate Yourself",
      image: 'img/tip10_cover.svg',
      linkToPrevTip: 'tip9',
      linkToNextTip: 'tip11',
      booksList: [],
      documentariesList: [],
      articlesList: []
    }
  }

  componentDidMount(){
    this.getBooksList();
    this.getDocumentariesList();
    this.getArticlesList();
  }

  getBooksList(){
    this.setState({
      booksList: [{
          id: 1,
          title: "Life Without Plastic",
          author: "Jay Sinha, Chantal Plamondon",
          image: 'img/bookCovers/life_without_plastic.jpg',
          linkTo: 'https://www.goodreads.com/book/show/33533744-life-without-plastic?ac=1'
        },
        {
          id: 2,
          title: "How to Give Up Plastic",
          author: "Will McAllum",
          image: 'img/bookCovers/how_to_giveup_plastic.jpg',
          linkTo: 'https://www.goodreads.com/book/show/38587839-how-to-give-up-plastic'
        },
        {
          id: 3,
          title: "No. More. Plastic.",
          author: "Martin Dorey",
          image: 'img/bookCovers/no_more_plastic.jpg',
          linkTo: 'https://www.goodreads.com/book/show/40030019-no-more-plastic?ac=1'
        },
        {
          id: 4,
          title: "Plastic-Free: How I Kicked the Plastic Habit and How You Can Too",
          author: "Beth Terry",
          image: 'img/bookCovers/plastic_free_habit.jpg',
          linkTo: 'https://www.goodreads.com/book/show/13274446-plastic-free'
        },
        {
          id: 5,
          title: "This Book is Not Rubbish: 50 Ways to Ditch Plastic, Reduce Rubbish and Save the World!",
          author: "Isabel Thomas, Alex Paterson",
          image: 'img/bookCovers/this_book_is_not_rubbish.jpg',
          linkTo: 'https://www.goodreads.com/book/show/41959345-this-book-is-not-rubbish'
        }
      ]
    });
  }

  getDocumentariesList() {
    this.setState({
      documentariesList: [
        {
          id: 1,
          title: "Our Planet",
          linkTo: "https://www.ourplanet.com/en/"
        },
        {
          id: 2,
          title: "Blue Planet 2",
          linkTo: "https://www.bbc.co.uk/programmes/p04tjbtx"
        },
        {
          id: 3,
          title: "BBC Plastic Shorts",
          linkTo: "https://www.bbc.co.uk/programmes/p06bjyxs"
        }
      ]
    })
  }

  getArticlesList() {
    this.setState({
      articlesList: [
        {
          id: 1,
          title: "RecycleNow: Recycling Knowledge",
          linkTo: "https://www.recyclenow.com/recycling-knowledge"
        },
        {
          id: 2,
          title: "BBC Plastic Watch",
          linkTo: "http://www.bbc.co.uk/programmes/articles/11CnCQR0GJfkDgJs57sR5Ps/plastics-action"
        },
        {
          id: 3,
          title: "National Geographic: Planet or Plastic?",
          linkTo: "https://www.nationalgeographic.com/environment/planetorplastic/"
        },
        {
          id: 4,
          title: "National Geongraphic: 10 Shocking Facts about Plastic",
          linkTo: "https://www.nationalgeographic.co.uk/10-shocking-facts-about-plastic"
        }
      ]
    })
  }

  render() {
    return (
      <div>
        <BlogCover id={this.state.id} title={this.state.title} coverImage={this.state.image}/>

        <div className="post-content">
          Below are great resources that I have found incredibly useful in understanding about plastic. They go in great details about different types of plastics and what types can or cannot be recycled.
          They also describe the effects of plastic on the environment and suggest ways that we can do to reduce plastic consumption:
          <br/><br/>
          <h4>Books:</h4>
          <br/>
          <div className="tip10-books-list">
            { this.state.booksList.map(book => {
                return (
                  <ul key={book.id}>
                    <figure>
                      <a href={book.linkTo}><img src={book.image} alt="Book cover"/></a>
                      <figcaption><b>{book.title}</b> by {book.author}</figcaption>
                    </figure>
                  </ul>
                )
              })
            }
          </div>
          <br/>
          <h4>Documentaries:</h4>
          { this.state.documentariesList.map(item => {
              return (
                <ul key={item.id}>
                  <li><a href={item.linkTo}>{item.title}</a></li>
                </ul>
              )
            })
          }
          <br/>
          <h4>Articles:</h4>
          { this.state.articlesList.map(article => {
              return (
                <ul key={article.id}>
                  <li><a href={article.linkTo}>{article.title}</a></li>
                </ul>
              )
            })
          }
        </div>

        <Navigation linkToPrevTip={this.state.linkToPrevTip} linkToNextTip={this.state.linkToNextTip}/>
      </div>
    );
  }
}

export default Tip10;
