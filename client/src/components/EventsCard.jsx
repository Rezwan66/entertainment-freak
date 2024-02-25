import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const EventsCard = ({ event }) => {
  const {
    _id,
    categoryId,
    name,
    image,
    date,
    venue,
    description,
    ticketPrice,
  } = event || {};
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
          <h2 className="card-title  tracking-wider">
            {name?.length > 30 ? `${name.slice(0, 30)}` : name}
          </h2>
          <p className="text-sm">{description}</p>
          <i className="my-6 text-sm">
            <b>Book now:</b> from ${ticketPrice}
          </i>
          <div className="card-actions justify-center">
            {/* <Link to={`/category/${id}`} className="w-full">
              <button className="btn btn-warning w-full capitalize font-bold">
                Learn More!
              </button>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default EventsCard;
