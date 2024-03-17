import { useEffect, useState } from 'react';
import useAxiosPublic from '../hooks/useAxiosPublic';
import ArtistCard from './ArtistCard';
import SpinnerSmall from './SpinnerSmall';

const Artists = ({ artists }) => {
  // const [artists, setArtists] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const axiosPublic = useAxiosPublic();
  // useEffect(() => {
  //   // fetch('/artists.json')
  //   //   .then(res => res.json())
  //   //   .then(data => setArtists(data));
  //   try {
  //     axiosPublic('/artists').then(res => {
  //       setArtists(res.data);
  //       setLoading(false);
  //     });
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }, [axiosPublic]);

  // if (loading) {
  //   return <SpinnerSmall />;
  // }

  // console.log(artists);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-6 px-10 lg:px-0">
      {artists?.map(artist => (
        <ArtistCard key={artist._id} artist={artist}></ArtistCard>
      ))}
    </div>
  );
};

export default Artists;
