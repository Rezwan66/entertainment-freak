// import toast from 'react-hot-toast';
import { useLoaderData, useParams } from 'react-router-dom';
import { DynamicBanner } from '../components/DynamicBanner';
import { useEffect, useState } from 'react';
import EventsCard from '../components/EventsCard';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import SpinnerSmall from '../components/SpinnerSmall';

const ServiceDetails = () => {
  // const [events, setEvents] = useState([]);
  const axiosSecure = useAxiosSecure();
  const category = useLoaderData();
  const { id } = useParams();
  // useEffect(() => {
  //   axiosSecure(`/events?categoryId=${id}`).then(res => setEvents(res.data));
  // }, [axiosSecure, id]);

  const {
    data: events = {},
    // refetch,
    isPending,
    isFetching,
    isLoading,
  } = useQuery({
    queryKey: ['events'],
    queryFn: async () => {
      const res = await axiosSecure(`/events?categoryId=${id}`);
      return res.data;
    },
  });

  if (isPending || isFetching || isLoading) return <SpinnerSmall />;

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
