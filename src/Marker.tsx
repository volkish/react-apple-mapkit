import React, { useEffect, useContext } from 'react'
import MapContext from '~MapContext'

export default function Marker ({latitude, longitude}: { latitude: number, longitude: number }) {
  const { map } = useContext(MapContext)
  const marker = React.useRef<mapkit.MarkerAnnotation>()

  useEffect(() => {
    marker.current = new mapkit.MarkerAnnotation(
      new mapkit.Coordinate(latitude, longitude)
    )

    marker.current.addEventListener('select', () => {
      console.warn(1);
    })

    map.addAnnotation(marker.current)

    return () => {
      map.removeAnnotation(marker.current)
    }
  }, [marker, map])

  return null
}
