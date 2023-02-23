import React from 'react'

import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api'

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete'

import './mapsLocations.module.css'

import {BiCurrentLocation} from 'react-icons/bi'


import {Flex, Button} from 'theme-ui'
import Image from 'next/image'

import qbLogoDark from '../images/qb-logo-black.svg'

import styled from '@emotion/styled'

import MapStyles from '../helpers/mapStyles'
import CompanyInfoBox from './companyInfoBox'
import {Combobox} from "@headlessui/react";

const SearchBox = styled.div`
  top: 1rem;
  padding: 0 1rem;
  max-width: 600px;
  width: 600px;
  z-index: 99;
  position: relative;

  &[data-reach-combobox-popover] {
    z-index: 9999;
  }

  input {
    padding: 0.8rem;
    border-radius: 8px;
    font-size: 1.4rem;
    border: none;
    box-shadow: 0 8px 16px -4px rgb(0 0 0 / 20%);
    width: 100%;
  }
`

const List = styled.ul`
  border-radius: 6px;
  position: absolute;
  width: calc(100% - 2rem);
  background-color: #fff;
`

const ListItem = styled.li`
  padding: .2rem .3rem;
  font-weight: bold;
`

const libraries = ['places']
const mapContainerStyle = {
  height: '40rem',
  width: '100%',
}

const options = {
  styles: MapStyles,
  disableDefaultUI: true,
  zoomControl: true,
}

const center = {
  lat: 60.48534,
  lng: 15.4324,
}

export default function MapsLocations(props) {
  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: 'AIzaSyDm0rHOlBnr5QZNpLgCBRey_lxlsSY53-M',
    libraries,
  })
  const [selected, setSelected] = React.useState(null)

  const mapRef = React.useRef()
  const onMapLoad = React.useCallback(map => {
    mapRef.current = map
  }, [])

  const panTo = React.useCallback(({lat, lng}) => {
    mapRef.current.panTo({lat, lng})
    mapRef.current.setZoom(14)
  }, [])

  if (loadError) return 'Error'
  if (!isLoaded) return 'Laddar...'

  return (
    <div css={{position: 'relative'}}>
      <Flex
        sx={{
          position: 'absolute',
          py: 2,
          flexWrap: 'wrap',
          px: 4,
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Image
          py={2}
          sx={{
            top: '1rem',
            maxWidth: '8rem',
            left: '1rem',
            zIndex: 10,
            margin: 0,
            padding: 0,
          }}
          src={qbLogoDark}
        />

        <Search panTo={panTo}/>
        <Locate panTo={panTo}/>
      </Flex>

      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={5}
        center={center}
        options={options}
        onLoad={onMapLoad}
      >
        {props.items.map(marker => (
          <Marker
            key={marker.companyName}
            position={{
              lat: marker.location && marker.location.lat,
              lng: marker.location && marker.location.lng,
            }}
            icon={{
              url: '/qb-app.svg',
              scaledSize: new window.google.maps.Size(20, 20),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(10, 10),
            }}
            onClick={() => {
              setSelected(marker)
            }}
          >
            Test
          </Marker>
        ))}

        {selected ? (
          <InfoWindow
            position={{
              lat: selected.location && selected.location.lat,
              lng: selected.location && selected.location.lng,
            }}
            onCloseClick={() => {
              setSelected(null)
            }}
          >
            <CompanyInfoBox {...selected} />
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  )
}

function Locate({panTo}) {
  return (
    <Button
      px={2}
      css={{
        display: 'flex',
        alignItems: 'center',
        top: '1rem',
        right: '1rem',
        border: 'none',
        zIndex: 10,
      }}
      py={1}
      className="locate"
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          position => {
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            })
          },
          () => null
        )
      }}
    >
      <BiCurrentLocation/> Nära mig
    </Button>
  )
}

function Search({panTo}) {
  const {
    ready,
    value,
    suggestions: {loading, status, data},
    setValue,
    // clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: {lat: () => 56.06272, lng: () => 12.71472},
      radius: 1000 * 1000,
    },
  })

  const handleInput = e => {
    setValue(e.target.value)
  }

  const handleSelect = async address => {
    setValue(address, false)
    // clearSuggestions()

    try {
      const results = await getGeocode({address})
      const {lat, lng} = await getLatLng(results[0])
      panTo({lat, lng})
    } catch (error) {
      // TODO: Error management
    }
  }

  return (
    <SearchBox>
      <Combobox value={value} onChange={handleSelect}>
        <Flex className="searchContent">
          <Combobox.Input
            onChange={handleInput}
            disabled={!ready}
            placeholder="Sök plats..."
          />
        </Flex>
        {!loading && status === 'OK' && (
          <Combobox.Options as={List}>
            {data.map(({place_id, description}) => (
              <Combobox.Option key={place_id} value={description} as={ListItem}>
                {description}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </Combobox>
    </SearchBox>
  )
}
