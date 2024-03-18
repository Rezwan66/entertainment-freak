// import { useEffect, useState } from 'react';
import PrevEventCard from './PrevEventCard';
// import useAxiosPublic from '../hooks/useAxiosPublic';
// import SpinnerSmall from './SpinnerSmall';

const PrevEvents = ({ events }) => {
  // const [events, setEvents] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const axiosPublic = useAxiosPublic();
  // useEffect(() => {
  //   // fetch('/previousEvents.json')
  //   //   .then(res => res.json())
  //   //   .then(data => setEvents(data));
  //   try {
  //     axiosPublic('/previousEvents').then(res => {
  //       setEvents(res.data);
  //       setLoading(false);
  //     });
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }, [axiosPublic]);

  // if (loading) {
  //   return <SpinnerSmall />;
  // }
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 lg:px-0">
      {events?.map(event => (
        <PrevEventCard key={event._id} event={event}></PrevEventCard>
      ))}
    </div>
  );
};

export default PrevEvents;
