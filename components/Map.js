import React from 'react';
import { GOOGLE_MAPS_KEY } from '../constants';
import styled from 'styled-components';

const Map = () => {
  return (
    <MapDiv>
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
