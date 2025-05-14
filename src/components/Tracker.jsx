import React, { useState } from 'react';

const Tracker = ({ trackId }) => {
  const [refreshKey, setRefreshKey] = useState(0);
  const TRACKS = [
    { id: 'ABC123', lat: 37.7749, lng: -122.4194 },
    { id: 'XYZ789', lat: 40.7128, lng: -74.006 },
    { id: 'LMN456', lat: 51.5074, lng: -0.1278 },
  ];
  const GOOGLE_MAPS_API_KEY = 'AIzaSyBaqYVjcmY50mrqIhkuPFydr067e8Pu3pU';
  const track = TRACKS.find(t => t.id === trackId);

  return (
    <div style={{ background: '#fff', borderRadius: 12, width: '100%', maxWidth: 700, margin: '0 auto', boxShadow: '0 4px 32px rgba(0,0,0,0.08)', padding: 24, position: 'relative' }}>
      <button onClick={() => setRefreshKey(k => k + 1)} style={{ position: 'absolute', top: 16, right: 16, zIndex: 2 }} className="btn btn-sm btn-secondary">Refresh</button>
      <h5>Tracking ID: {trackId}</h5>
      {track ? (
        <iframe
          key={refreshKey}
          title="Google Map"
          width="100%"
          height="300"
          style={{ border: 0, borderRadius: 8, marginTop: 12 }}
          loading="lazy"
          allowFullScreen
          src={`https://www.google.com/maps/embed/v1/view?key=${GOOGLE_MAPS_API_KEY}&center=${track.lat},${track.lng}&zoom=15&maptype=satellite`}
        ></iframe>
      ) : (
        <div className="alert alert-warning mt-3">Track ID not found.</div>
      )}
    </div>
  );
};

export default Tracker;
