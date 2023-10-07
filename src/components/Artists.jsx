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
    <div className="flex flex-wrap justify-between gap-6 px-4 lg:px-0">
      {artists?.map(artist => (
        <ArtistCard key={artist.id} artist={artist}></ArtistCard>
      ))}
    </div>
  );
};

export default Artists;
