import React, { Component } from 'react';

class SocialMediaButtons extends Component {

  render() {
    const twitterUrl = "https://twitter.com/share?ref_src=twsrc%5Etfw";
    const facebookUrl = "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fhowtoreduceplastic.com%2F&amp;src=sdkpreparse";
    const googleUrl = "";
    const pinterestUrl = "";
    const email = "";

    return (
      <div className="social-media-buttons">
          <div className="fb-share-button" data-href="https://howtoreduceplastic.com" data-layout="button" data-size="small" data-mobile-iframe="true">
            <a href={facebookUrl} className="fb-xfbml-parse-ignore">Share</a>
          </div>
          <a href={twitterUrl} className="twitter-share-button" data-show-count="false">Tweet</a>
      </div>
    );
  }
}

export default SocialMediaButtons;
