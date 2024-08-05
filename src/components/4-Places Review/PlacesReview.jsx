import React from "react";
import FrenchAutumn from "../../images/French Autumn.jpg";
import GrandSwitzerland from "../../images/Grand Switzerland.jpeg";
import DiscoverJapan from "../../images/Discover Japan.jpg";
import SeoulYour from "../../images/Seoul Your.jpg";
import Hongkong from "../../images/Hong Kong.jpg";
import GreatBritainTravel from "../../images/Great Britain Travel.jpg";
import { Container } from "react-bootstrap";

const PlacesReview = () => {
  return (
    <Container>
      <section className="section" id="placesReview">
        <h1 className="section-header">Places Review</h1>

        <div className="placeReviewRow1">
          <div className="placeReviewRow1-image">
            <img className="palces-img" src={FrenchAutumn} alt="FrenchAutumn" />
            <p className="palces-desc">Paris</p>
          </div>

          <div className="placeReviewRow1-image">
            <img
              className="palces-img"
              src={GrandSwitzerland}
              alt="GrandSwitzerland"
            />
            <p className="palces-desc">South America</p>
          </div>

          <div className="placeReviewRow1-image">
            <img className="palces-img" src={SeoulYour} alt="SeoulYour" />
            <p className="palces-desc">Asia</p>
          </div>

          <div className="placeReviewRow1-image">
            <img className="palces-img" src={DiscoverJapan} />
            <p className="palces-desc">Australia</p>
          </div>

          <div className="placeReviewRow1-image">
            <img className="palces-img" src={Hongkong} />
            <p className="palces-desc">Africa</p>
          </div>

          <div className="placeReviewRow1-image">
            <img className="palces-img" src={GreatBritainTravel} />
            <p className="palces-desc" >Aurope</p>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default PlacesReview;
