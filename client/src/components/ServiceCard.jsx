import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const ServiceCard = ({ service }) => {
  const { id, name, image, price, short_description } = service;
  return (
    <div data-aos="zoom-in">
      <div className="card glass">
        <figure>
          <img
            className="h-80 w-full object-cover"
            src={image}
            alt="service image"
          />
        </figure>
        <div className="card-body text-white">
          <h2 className="card-title  tracking-wider">{name}</h2>
          <p className="text-sm">{short_description}</p>
          <i className="my-6 text-sm">
            <b>Book now:</b> from ${price}
          </i>
          <div className="card-actions justify-center">
            <Link to={`/category/${id}`} className="w-full">
              <button className="btn btn-warning w-full capitalize font-bold">
                Learn More!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object,
};

export default ServiceCard;
