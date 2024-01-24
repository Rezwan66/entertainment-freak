import { useLoaderData } from 'react-router-dom';
import Banner from '../components/Banner';
import ServiceCard from '../components/ServiceCard';
import PrevEvents from '../components/PrevEvents';
import Artists from '../components/Artists';
import ContactUs from '../components/ContactUs';

const Home = () => {
  const services = useLoaderData();
  // console.log(services);
  return (
    <div>
      {/* slider */}
      <Banner></Banner>
      <div className="max-w-7xl mx-auto">
        {/* Our Services section */}
        <div>
          <h2 className="text-2xl md:text-4xl mt-16 mb-10 text-center font-semibold underline underline-offset-8 text-amber-300">
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
          <h2 className="text-2xl md:text-4xl mt-16 mb-10 text-center font-semibold underline underline-offset-8 text-amber-300">
            Our Previous Events
          </h2>
          <PrevEvents></PrevEvents>
        </div>
        {/* artists we worked with */}
        <div>
          <h2 className="text-2xl md:text-4xl mt-16 mb-10 text-center font-semibold underline underline-offset-8 text-amber-300">
            Artists We Worked With
          </h2>
          <Artists></Artists>
        </div>
        {/* Contact us today */}
        <div className="my-24">
          <ContactUs></ContactUs>
        </div>
      </div>
    </div>
  );
};

export default Home;
