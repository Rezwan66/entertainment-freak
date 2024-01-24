import PropTypes from 'prop-types';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const PrevEventCard = ({ event }) => {
  const { name, image, short_review, rating } = event;
  return (
    <div data-aos="fade-up" data-aos-duration="2000">
      {/* <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img className="w-60 h-full" src={image} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-lg text-amber-300">{name}</h2>
          <h1 className="text-2xl">
            <i>"{short_review}"</i>
          </h1>
          <div className="card-actions justify-end">{rating}</div>
        </div>
      </div> */}
      {/* material */}
      <div className="relative flex h-60 flex-row pr-8 rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img src={image} alt="image" className="h-full w-full object-cover" />
        </div>
        <div className="p-6">
          <h6 className="mb-4 block font-sans text-xs md:text-sm font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
            {name}
          </h6>
          <h4 className="mb-2 block font-sans text-sm md:text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            <i>
              <FaQuoteLeft></FaQuoteLeft>
              {short_review}
              <FaQuoteRight></FaQuoteRight>
            </i>
          </h4>
          <div className="flex justify-end items-center gap-2 overflow-x-scroll">
            {/* <Rating name="read-only" value={rating} readOnly /> */}
            <Rating
              name="half-rating-read"
              value={rating}
              precision={0.1}
              readOnly
            />
            <Typography className="" component="legend">
              <i className=" text-xl text-green-800">{rating}</i>
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

PrevEventCard.propTypes = {
  event: PropTypes.object,
};

export default PrevEventCard;
