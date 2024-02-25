import { useState } from 'react';
import ServiceCard from './ServiceCard';
import { useEffect } from 'react';
import useAxiosPublic from '../hooks/useAxiosPublic';
import SpinnerSmall from './SpinnerSmall';

const Categories = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic('/categories').then(res => {
      setServices(res.data);
      setLoading(false);
    });
  }, [axiosPublic]);

  if (loading) {
    return <SpinnerSmall />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 lg:px-0">
      {services.map(service => (
        <ServiceCard key={service._id} service={service}></ServiceCard>
      ))}
    </div>
  );
};
export default Categories;
