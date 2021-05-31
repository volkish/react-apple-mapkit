import { createContext } from 'react'

const MapContext = createContext<{
  map: mapkit.Map,
  setMap: (map: mapkit.Map) => void
} | null>(null)

export default MapContext
