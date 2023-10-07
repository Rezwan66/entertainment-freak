import { useLoaderData } from 'react-router-dom';
import Banner from '../components/Banner';
import ServiceCard from '../components/ServiceCard';

const Home = () => {
  const services = useLoaderData();
  console.log(services);
  return (
    <div>
      {/* slider */}
      <Banner></Banner>
      {/* Our Services section */}
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-4xl font-semibold text-amber-300">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-4 lg:px-0">
          {services.map(service => (
            <ServiceCard key={service.id} service={service}></ServiceCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
