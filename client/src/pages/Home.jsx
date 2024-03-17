// import { useLoaderData } from 'react-router-dom';
import Banner from '../components/Banner';
import PrevEvents from '../components/PrevEvents';
import Artists from '../components/Artists';
import ContactUs from '../components/ContactUs';
import { Element } from 'react-scroll';
import { useEffect, useState } from 'react';
import Categories from '../components/Categories';
import useAxiosPublic from '../hooks/useAxiosPublic';
import SpinnerSmall from '../components/SpinnerSmall';

const Home = () => {
  const [services, setServices] = useState([]);
  const [events, setEvents] = useState([]);
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic('/categories').then(res => {
      setServices(res.data);
    });
    axiosPublic('/previousEvents').then(res => {
      setEvents(res.data);
    });
    axiosPublic('/artists').then(res => {
      setArtists(res.data);
    });
    setLoading(false);
  }, [axiosPublic]);

  if (loading) {
    return <SpinnerSmall />;
  }

  return (
    <div>
      {/* slider */}
      <Banner></Banner>
      <div className="max-w-7xl mx-auto">
        {/* Our Services section */}
        <Element name="our-services">
          <h2 className="text-2xl md:text-4xl mt-16 mb-10 text-center font-semibold underline underline-offset-8 text-amber-300">
            Our Event Categories
          </h2>
          <Categories services={services} />
        </Element>
        {/* our previous shows */}
        <div>
          <h2 className="text-2xl md:text-4xl mt-16 mb-10 text-center font-semibold underline underline-offset-8 text-amber-300">
            Our Previous Events
          </h2>
          <PrevEvents events={events} />
        </div>
        {/* artists we worked with */}
        <div>
          <h2 className="text-2xl md:text-4xl mt-16 mb-10 text-center font-semibold underline underline-offset-8 text-amber-300">
            Artists We Worked With
          </h2>
          <Artists artists={artists} />
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
