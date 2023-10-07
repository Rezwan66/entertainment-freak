import { useEffect, useState } from 'react';
import ArtistCard from './ArtistCard';

const Artists = () => {
  const [artists, setArtists] = useState([]);
  useEffect(() => {
    fetch('/artists.json')
      .then(res => res.json())
      .then(data => setArtists(data));
  }, []);

  console.log(artists);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-6 px-10 lg:px-0">
      {artists?.map(artist => (
        <ArtistCard key={artist.id} artist={artist}></ArtistCard>
      ))}
    </div>
  );
};

export default Artists;
