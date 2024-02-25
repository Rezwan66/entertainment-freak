// import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { DynamicBanner } from '../components/DynamicBanner';
import { useEffect, useState } from 'react';
import EventsCard from '../components/EventsCard';

const ServiceDetails = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch('/events.json')
      .then(res => res.json())
      .then(data => setEvents(data));
  }, []);
  const category = useLoaderData();
  // const { id } = useParams();
  // const idInt = parseInt(id);
  // console.log(idInt, events);

  // IMPLEMENT AND LOAD EVENTS UNDER THIS CATEGORY HERE
  // console.log(typeof id, idInt, category);
  // const selected = services.find(service => service.id === idInt);
  // console.log(selected);
  // console.log(events);
  // const { image, long_description, name, price } = category || {};
  return (
    <div>
      <DynamicBanner category={category} />
      <div className="max-w-7xl mt-20 mb-28 mx-auto px-4 lg:px-0 grid grid-cols-3 gap-4">
        {/* my card */}
        {events?.map(event => (
          <EventsCard key={event._id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default ServiceDetails;
