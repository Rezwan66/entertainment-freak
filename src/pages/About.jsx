const About = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10">
      {/* stat */}
      <div className="px-6 mt-6 flex justify-end">
        <div className="stats shadow rounded-md bg-transparent">
          <div className="stat">
            <div className="stat-figure text-amber-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block md:w-8 md:h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title text-white">Successful Events</div>
            <div className="stat-value text-white">5K</div>
            <div className="stat-desc text-white">2005 - 2023</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-amber-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block md:w-8 md:h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                ></path>
              </svg>
            </div>
            <div className="stat-title text-white">Satisfied Clients</div>
            <div className="stat-value  text-white">2K</div>
            <div className="stat-desc  text-white">↗ 90 (14%)</div>
          </div>
        </div>
      </div>

      {/* about us */}
      <div className="py-16 bg-transparent">
        <div className="container m-auto px-6 text-white md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:gap-12">
            <div className="md:5/12 lg:w-5/12 md:relative">
              <div className="md:sticky md:top-10 md:w-full">
                <img
                  src="/logo.png"
                  className="rounded-xl"
                  alt="logo"
                  loading="lazy"
                  width=""
                  height=""
                />
              </div>
            </div>
            {/* text */}
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl font-bold md:text-4xl">About Us</h2>
              <h2 className="text-xl font-bold md:text-2xl mt-6">Our Origin</h2>
              <p className="mt-6">
                EntertainmentFreak is the brainchild of a group of passionate
                individuals who shared a common dream - to create exceptional
                and unforgettable moments through the magic of events. Our
                journey began in 2005 when a small team of event enthusiasts
                came together, fueled by a shared passion for music, arts, and
                the desire to connect people through live experiences.
              </p>
              <h2 className="text-xl font-bold md:text-2xl mt-6">
                Our Initiatives
              </h2>
              <h2 className="text-lg font-bold md:text-xl mt-6">
                Enriching the Entertainment Landscape
              </h2>
              <p className="mt-6">
                From day one, our primary initiative has been to enrich the
                entertainment landscape. We recognized that the world of
                entertainment is a diverse and dynamic realm, and our goal has
                always been to provide a platform where the arts, music,
                theater, film, comedy, sports, and fashion all come together in
                a harmonious blend of creativity and enjoyment.
              </p>
              <h2 className="text-lg font-bold md:text-xl mt-6">
                Sustainability and Social Responsibility
              </h2>
              <p className="mt-6">
                We are committed to making a positive impact on the world
                through our events. Sustainability is at the core of our
                initiatives, from eco-friendly festivals to supporting local
                artists. We actively promote social responsibility by partnering
                with charitable organizations and promoting causes that matter.
              </p>
              <h2 className="text-xl font-bold md:text-2xl mt-6">
                Our Experience
              </h2>
              <p className="mt-6">
                With over 18 years of experience in the event management
                industry, we&apos;ve honed our skills and expertise to curate
                exceptional events. Our team consists of seasoned professionals
                who have worked on a wide range of projects, from intimate
                theater productions to large-scale music festivals.
              </p>
              <h2 className="text-lg font-bold md:text-xl mt-6">
                Our Milestones:
              </h2>
              <ul className="mt-6">
                <li>
                  Successfully organized over 200 concerts and music festivals.
                </li>
                <li>
                  Produced 50+ theater productions, winning critical acclaim.
                </li>
                <li>
                  Premiered blockbuster movies to thousands of eager film
                  enthusiasts.
                </li>
                <li>Laughter-filled evenings with 100+ comedy shows.</li>
                <li>
                  Managed high-stakes sports events, ensuring fan satisfaction.
                </li>
                <li>Spectacular fashion shows showcasing the latest trends.</li>
              </ul>
              <h2 className="text-lg font-bold md:text-xl mt-6">
                Our Awards and Recognition:
              </h2>
              <p className="mt-6">
                Our commitment to excellence has been acknowledged through
                numerous industry awards, and we&apos;ve been featured in top
                entertainment magazines for our innovative and impactful events.
              </p>
              <p className="mt-4">
                At EntertainmentFreak, we are not just event managers; we are
                storytellers, creators, and experience-makers. We look forward
                to continuing this incredible journey with you and creating many
                more magical moments together.
              </p>
              <p className="mt-4">
                Join us as we write the next chapter in the book of
                unforgettable experiences. Welcome to EntertainmentFreak!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
