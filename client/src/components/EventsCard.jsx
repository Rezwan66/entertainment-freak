import { Tooltip } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TicketsModal from './TicketsModal';
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
      <div className="card glass max-h-[544px] group">
        <figure>
          <img
            className="h-80 w-full object-cover group-hover:scale-110 transition"
            src={image}
            alt="service image"
          />
        </figure>
        <div className="card-body text-white">
          <div>
            <h2 className="card-title  tracking-wider">
              {name?.length > 30 ? `${name.slice(0, 30)}` : name}
            </h2>
            <i>{date}</i>
            <i>{venue}</i>
            <i>{_id}</i>
            <i>{categoryId}</i>
          </div>
          <Tooltip title={description} placement="top-end" arrow>
            <p className="text-sm cursor-pointer">
              {description?.length > 100
                ? `${description.slice(0, 100)}`
                : description}
            </p>
          </Tooltip>
          <i className="mb-4 text-sm">
            <b>Book now:</b> from ${ticketPrice}
          </i>
          <div className="card-actions justify-center">
            {/* <button className="btn btn-warning w-full capitalize font-bold">
              Tickets
            </button> */}
            <TicketsModal />
          </div>
        </div>
      </div>
    </div>
  );
};
export default EventsCard;
