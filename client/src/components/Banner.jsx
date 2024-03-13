import ScrollButton from './ScrollButton';

const Banner = () => {
  return (
    <div>
      <div className="carousel rounded-sm w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="/banner.jpg"
            className="w-full opacity-80 brightness-50 h-[550px] object-cover"
          />
          {/* <h2 className="font-bold absolute top-[80%] right-[5%] text-white btn btn-outline">
            Book today
          </h2> */}
          <ScrollButton
            target="our-services"
            text="Book Today"
            classes={
              'font-bold absolute top-[80%] right-[5%] text-white btn btn-outline'
            }
          />
          <h2 className="text-3xl lg:text-6xl text-white absolute lg:w-[850px] top-[30%] left-[10%]">
            For the fanciest <span className="text-amber-300">concert</span>{' '}
            events Implement swiper/react-simple-carousel
          </h2>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide3"
              className="btn btn-circle bg-transparent text-white"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle bg-transparent text-white"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="/bannerStadium.png"
            className="w-full opacity-80 brightness-50 h-[550px] object-fill"
          />
          {/* <h2 className="font-bold absolute top-[80%] right-[5%] text-white btn btn-outline">
            Book today
          </h2> */}
          <ScrollButton
            target="our-services"
            text="Book Today"
            classes={
              'font-bold absolute top-[80%] right-[5%] text-white btn btn-outline'
            }
          />
          <h2 className="text-3xl lg:text-6xl text-white absolute top-[30%] left-[10%]">
            Or the craziest <span className="text-amber-300">sports</span>{' '}
            events
          </h2>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide1"
              className="btn btn-circle bg-transparent text-white"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-circle bg-transparent text-white"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="/bannerTheatre.jpg"
            className="w-full opacity-80 brightness-50 h-[550px] object-fill"
          />
          {/* <h2 className="font-bold absolute top-[80%] right-[5%] text-white btn btn-outline">
            Book today
          </h2> */}
          <ScrollButton
            target="our-services"
            text="Book Today"
            classes={
              'font-bold absolute top-[80%] right-[5%] text-white btn btn-outline'
            }
          />
          <h2 className="text-3xl lg:text-6xl text-white absolute top-[30%] left-[10%]">
            Or even silent <span className="text-amber-300">theatre</span>{' '}
            events
          </h2>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide2"
              className="btn btn-circle bg-transparent text-white"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle bg-transparent text-white"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
