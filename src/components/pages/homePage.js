import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
  render() {
    return (
      <div className="tips-list">
        <div>
            <h2>1</h2>
            <p>Ditch single-use plastic</p>
            <button type="button" class="btn btn-outline-dark">
              <Link to="/tip1">Read more</Link>
            </button>
        </div>
        <div>
            <h2>2</h2>
            <p>Bring your own reusables</p>
            <button type="button" class="btn btn-outline-primary" href="#">Read more</button>
        </div>
        <div>
            <h2>3</h2>
            <p>Buy without plastic packaging</p>
            <button type="button" class="btn btn-outline-dark" href="#">Read more</button>
        </div>
        <div>
            <h2>4</h2>
            <p>Buy in bulk</p>
            <button type="button" class="btn btn-outline-dark" href="#">Read more</button>
        </div>
        <div>
            <h2>5</h2>
            <p>Say no to plastic and styrofoam when offered</p>
            <button type="button" class="btn btn-outline-dark" href="#">Read more</button>
        </div>
        <div>
            <h2>6</h2>
            <p>Volunteer</p>
            <button type="button" class="btn btn-outline-dark" href="#">Read more</button>
        </div>
        <div>
            <h2>7</h2>
            <p>Sort your rubbish and recycle at nearest recycling centre</p>
            <button type="button" class="btn btn-outline-dark" href="#">Read more</button>
        </div>
        <div>
            <h2>8</h2>
            <p>Write to your supermarket CEOs</p>
            <button type="button" class="btn btn-outline-dark" href="#">Read more</button>
        </div>
        <div>
            <h2>9</h2>
            <p>Spread the message!<br/>(every little helps)</p>
            <button type="button" class="btn btn-outline-dark" href="#">Read more</button>
        </div>

      </div>
    );
  }
}

export default HomePage;
