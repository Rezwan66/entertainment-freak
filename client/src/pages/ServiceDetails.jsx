// import toast from 'react-hot-toast';
import { useLoaderData, useParams } from 'react-router-dom';
import { DynamicBanner } from '../components/DynamicBanner';
import { useEffect, useState } from 'react';
import EventsCard from '../components/EventsCard';
import useAxiosSecure from '../hooks/useAxiosSecure';

const ServiceDetails = () => {
  const [events, setEvents] = useState([]);
  const axiosSecure = useAxiosSecure();
  const category = useLoaderData();
  const { id } = useParams();
  useEffect(() => {
    axiosSecure(`/events?categoryId=${id}`).then(res => setEvents(res.data));
  }, [axiosSecure, id]);
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
