import React, { ReactNode, useState } from 'react'

import MapContext from '~MapContext'

export default function AppleMapProvider ({ children }: { children: ReactNode }) {
  const [map, setMap] = useState<mapkit.Map>(null)

  return (
    <MapContext.Provider value={{ map, setMap }}>
      {children}
    </MapContext.Provider>
  )
}
