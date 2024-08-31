import { useEffect, useState } from 'react';
import {
  MapContainer as LMapContainer,
  Marker as LMarker,
} from 'react-leaflet';

export const MapContainer = ({ forwardedRef, ...props }) => (
    <LMapContainer {...props} ref={forwardedRef} />
);