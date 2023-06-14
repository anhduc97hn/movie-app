import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./FeaturedList.css";
import ContentModal from "../ContentModal/ContentModal"


function FeaturedList({ items }) {
  return (
    <>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showStatus={false}
      >
        {items.map((item) => (
          <ContentModal media_type={item.media_type} id={item.id} key={item.id}>
            <div className="posterImage">
              <img
                src={`https://image.tmdb.org/t/p/original${
                  item && item.backdrop_path
                }`}
              />
            </div>
            <div className="posterImage__overlay">
              <div className="posterImage__title">
                {item.title || item.name}
              </div>
              <div className="posterImage__runtime">
                {item.first_air_date || item.release_date}
              </div>
              <div className="posterImage__description">{item.overview}</div>
            </div>
          </ContentModal>
        ))}
      </Carousel>
    </>
  );
}

export default FeaturedList;
