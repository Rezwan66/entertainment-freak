import toast from 'react-hot-toast';
import { useLoaderData, useParams } from 'react-router-dom';
import { DynamicBanner } from '../components/DynamicBanner';
import { useEffect, useState } from 'react';

const ServiceDetails = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch('/events.json')
      .then(res => res.json())
      .then(data => setEvents(data));
  }, []);
  const category = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  console.log(idInt, events);

  // IMPLEMENT AND LOAD EVENTS UNDER THIS CATEGORY HERE
  // console.log(typeof id, idInt, category);
  // const selected = services.find(service => service.id === idInt);
  // console.log(selected);

  // const { image, long_description, name, price } = category || {};
  return (
    <div>
      <DynamicBanner category={category} />
      <div className="max-w-7xl mt-20 mb-28 mx-auto px-4 lg:px-0 grid grid-cols-3 gap-4">
        {/* my card */}
        {events &&
          events.map(event => (
            <div
              key={event.categoryId}
              className=" bg-base-200 bg-opacity-40 rounded-xl gap-4 p-6 md:p-0"
            >
              <img
                className="md:w-full h-40 md:rounded-l-xl object-cover"
                src={event.image}
                alt=""
              />
              <div className="text-white md:p-6 space-y-4">
                <h1 className="text-4xl font-bold">{event.name}</h1>
                {/* <h3 className="text-xl">{long_description}</h3> */}
                <br />
                <button
                  onClick={() => toast.success('Booked Successfully!')}
                  className="btn btn-warning w-full capitalize text-lg"
                >
                  Book now for only:
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ServiceDetails;
