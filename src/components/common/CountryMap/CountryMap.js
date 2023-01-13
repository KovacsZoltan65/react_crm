import React from 'react';
//import { LatLngExpression } from 'leaflet';
import { GeoJSON, ZoomControl } from 'react-leaflet';
//import { MapContainerProps } from 'react-leaflet';

import geoData from '../../../assets/map-data/countries.geo.json';

//import { FeatureCollection } from 'geojson';

import * as S from './CountryMap.styles';

export const CountryMap = ({ children, ...props }) => {
    const MAP_CENTER = [57.52142204768359, 6.08795867978202];

    return (
        <S.Map center={MAP_CENTER} zoom={2} zoomControl={false} minZoom={1} maxZoom={5} {...props}>
            <GeoJSON data={geoData} />
            <ZoomControl position="bottomleft" />
            {children}
        </S.Map>
    );
};
