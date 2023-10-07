import { useEffect, useState } from 'react';
import PrevEventCard from './PrevEventCard';

const PrevEvents = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch('/previousEvents.json')
      .then(res => res.json())
      .then(data => setEvents(data));
  }, []);
  console.log(events);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 lg:px-0">
      {events?.map(event => (
        <PrevEventCard key={event.id} event={event}></PrevEventCard>
      ))}
    </div>
  );
};

export default PrevEvents;
