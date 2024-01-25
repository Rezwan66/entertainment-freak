import { Link } from 'react-router-dom';
// import ScrollButton from '../components/ScrollButton';

const UpcomingEvents = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-transparent text-white py-8">
        <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
          <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
            <p className="ml-2 text-yellow-300 uppercase tracking-loose">
              Our Events
            </p>
            <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">
              Timeline of Our Schedule
            </p>
            <p className="text-sm md:text-base text-gray-50 mb-4">
              Here is a list of our exciting lineup of events in the coming
              months. From music festivals to theater productions, movie
              premieres, and comedy nights, we have a diverse range of
              entertainment experiences on the horizon. Mark your calendars and
              be part of the action as we bring you the best in entertainment.
              Explore our upcoming events or contact us to book your own event!
            </p>
            <Link to="/">
              <button className="btn bg-transparent mr-auto hover:bg-yellow-400 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-400 hover:border-transparent">
                Explore Now
              </button>
            </Link>
            {/* <ScrollButton
              target="/our-services"
              text="Book Today"
              classes={
                'font-bold absolute top-[80%] right-[5%] text-white btn btn-outline'
              }
            /> */}
          </div>
          <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
            <div className="container mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden p-10 h-full">
                <div
                  className="border-2-2 border-yellow-555 absolute h-full border"
                  style={{
                    right: '50%',
                    border: '2px solid #FFC100',
                    borderRadius: '1%',
                  }}
                ></div>
                <div
                  className="border-2-2 border-yellow-555 absolute h-full border"
                  style={{
                    left: '50%',
                    border: '2px solid #FFC100',
                    borderRadius: '1%',
                  }}
                ></div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-yellow-300">
                      July 15, 2023
                    </p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">
                      Summer Music Festival
                    </h4>
                    <p className="text-sm mb-3 md:text-base leading-snug text-gray-50 text-opacity-100">
                      <i>Central Park, New York City.</i>
                    </p>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      Join us for a weekend of live music, great food, and an
                      unforgettable summer experience.
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1  w-5/12 px-1 py-4 text-left">
                    <p className="mb-3 text-base text-yellow-300">
                      September 5, 2023
                    </p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">
                      Broadway Showcase - New Productions
                    </h4>
                    <p className="text-sm mb-3 md:text-base leading-snug text-gray-50 text-opacity-100">
                      <i>Times Square Theater, New York City</i>
                    </p>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      Be the first to witness the latest and greatest Broadway
                      productions in the heart of the theater district.
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-yellow-300">
                      {' '}
                      October 20, 2023
                    </p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">
                      Movie Premiere - &apos;Mystic Odyssey&apos;
                    </h4>
                    <p className="text-sm mb-3 md:text-base leading-snug text-gray-50 text-opacity-100">
                      <i>Hollywood Boulevard, Los Angeles</i>
                    </p>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      Step onto the red carpet for the premiere of &apos;Mystic
                      Odyssey&apos;, an epic adventure on the big screen.
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>

                  <div className="order-1  w-5/12 px-1 py-4">
                    <p className="mb-3 text-base text-yellow-300">
                      November 12, 2023
                    </p>
                    <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">
                      Comedy Night with the Pros
                    </h4>
                    <p className="text-sm mb-3 md:text-base leading-snug text-gray-50 text-opacity-100">
                      <i>The Comedy Club, Chicago</i>
                    </p>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      Prepare for a night of laughter as top comedians take the
                      stage for an evening of humor and entertainment.
                    </p>
                  </div>
                </div>
              </div>
              <img
                className="mx-auto -mt-36 md:-mt-36"
                src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
