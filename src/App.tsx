import React, { useState } from 'react'

import AppleMap from '~AppleMap'
import Marker from '~Marker'
import AppleMapProvider from '~AppleMapProvider'

export default function App () {
  const [showMarkers, toggleMarkers] = useState<boolean>(false)

  const onToggle = () => {
    toggleMarkers(state => !state)
  }

  return (
    <AppleMapProvider>
      <button onClick={onToggle}>Toggle markers</button>
      <AppleMap latitude={37.334883} longitude={-122.008977}>
        {showMarkers ? (
          <>
            <Marker latitude={37.616934} longitude={-122.383790}/>
            <Marker latitude={37.334883} longitude={-122.008977}/>
          </>
        ) : null}
      </AppleMap>
    </AppleMapProvider>
  )
}
