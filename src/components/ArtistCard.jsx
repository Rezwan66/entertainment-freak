import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const ArtistCard = ({ artist }) => {
  const { name, image } = artist;
  return (
    <div data-aos="zoom-out">
      <div className="card card-side items-center justify-center bg-transparent">
        <div className="avatar">
          <div className="w-24 h-24 rounded-full">
            <img src={image} />
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title text-white">{name}</h2>
        </div>
      </div>
    </div>
  );
};

ArtistCard.propTypes = {
  artist: PropTypes.object,
};

export default ArtistCard;
