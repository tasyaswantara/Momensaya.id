import React, { useEffect } from "react";

import {
  StackedCarousel,
  ResponsiveContainer
} from "react-stacked-center-carousel";




const data = [
  {
    image: "https://picsum.photos/200/300/?random=1",
    text: "hello"
  },
  {
    image: "https://picsum.photos/200/300/?random=12",
    text: "lel"
  },
  {
    image: "https://picsum.photos/200/300/?random=13",
    text: "kak"
  },
  {
    image: "https://picsum.photos/200/300/?random=15",
    text: "kk"
  },
  {
    image: "https://picsum.photos/200/300/?random=10",
    text: "away"
  }
];
export const Slide = React.memo(function (StackedCarouselSlideProps) {
    const {
      data,
      dataIndex,
      isCenterSlide,
      swipeTo,
      slideIndex
    } = StackedCarouselSlideProps;
  
    const coverImage = data[dataIndex].image;
    const text = data[dataIndex].text;
  
    console.log(coverImage);
    return (
      <div className="card-card" draggable={false}>
        <div className={`cover fill ${isCenterSlide ? "off" : "on"}`}>
          <div
            className="card-overlay fill"
            onClick={() => {
              if (!isCenterSlide) swipeTo(slideIndex);
            }}
          />
        </div>
        <div className="detail fill">
          <div className="discription">
            <img
              style={{ width: 100 }}
              alt="j"
              className="cover-image"
              src={coverImage}
            />
            <p>{text}</p>
          </div>
        </div>
      </div>
    );
  });
  
const StackedSlider = () => {
  const ref = React.useRef(StackedCarousel);
  //   function onNext(){
  //      ref.current?.goBack(), 5000;
  // }

  useEffect(() => {
    setInterval(stuff, 100000);
    
  }, []);

  function stuff() {
    ref.current?.goNext();
  }

  return (
    <div className="card mt-[8vh]">
      <div  style={{ width: "100%", position: "relative" }}>
        <ResponsiveContainer 
          carouselRef={ref}
          render={(width, carouselRef) => {
            return (
              <StackedCarousel 
                ref={carouselRef}
                slideComponent={Slide}
                slideWidth={300}
                carouselWidth={width}
                data={data}
                maxVisibleSlide={5}
                disableSwipe
                customScales={[1, 0.85, 0.7, 0.55]}
                transitionTime={450}
              />
            );
          }}
        />
       
      </div>
    </div>
  );
};

export default StackedSlider;
