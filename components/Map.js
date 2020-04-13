import React from 'react';
import { GOOGLE_MAPS_KEY } from '../constants';
import styled from 'styled-components';

const Map = () => {
  return (
    <MapDiv>
      {/* <img
        src={`https://maps.googleapis.com/maps/api/staticmap?center=Akkerstraat20,9900,Eeklo&zoom=10&size=1600x300&maptype=roadmap
&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318
&markers=color:red%7Clabel:C%7C40.718217,-73.998284
&key=${GOOGLE_MAPS_KEY}`}
        alt=""
      /> */}

      <iframe
        width="600"
        height="300"
        frameBorder="0"
        style={{ border: 0 }}
        src={`https://www.google.com/maps/embed/v1/place?q=place_id:EiNBa2tlcnN0cmFhdCAyMCwgOTkwMCBFZWtsbywgQmVsZ2l1bSIwEi4KFAoSCTfc8CaVZsNHESNrAE8RoGcEEBQqFAoSCYlwbDyVZsNHEVrk73w51Xfm&zoom=11&key=${GOOGLE_MAPS_KEY}`}
        allowFullScreen
      ></iframe>
    </MapDiv>
  );
};

const MapDiv = styled.div`
  img {
    width: 100%;
    display: block;
  }
  iframe {
    width: 100%;
    display: block;
    filter: grayscale(0.7);
    transition: filter 500ms ease 500ms;
  }

  iframe:hover {
    filter: grayscale(0);
  }
`;
export default Map;
