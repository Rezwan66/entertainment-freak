import { useLoaderData } from 'react-router-dom';
import Banner from '../components/Banner';
import ServiceCard from '../components/ServiceCard';
import PrevEvents from '../components/PrevEvents';

const Home = () => {
  const services = useLoaderData();
  console.log(services);
  return (
    <div>
      {/* slider */}
      <Banner></Banner>
      <div className="max-w-7xl mx-auto">
        {/* Our Services section */}
        <div>
          <h2 className="text-4xl mt-16 mb-10 text-center font-semibold underline underline-offset-8 text-amber-300">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 lg:px-0">
            {services.map(service => (
              <ServiceCard key={service.id} service={service}></ServiceCard>
            ))}
          </div>
        </div>
        {/* our previous shows */}
        <div>
          <h2 className="text-4xl mt-16 mb-10 text-center font-semibold underline underline-offset-8 text-amber-300">
            Our Previous Events
          </h2>
          <PrevEvents></PrevEvents>
        </div>
      </div>
    </div>
  );
};

export default Home;
