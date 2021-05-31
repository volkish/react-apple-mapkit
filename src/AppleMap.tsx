import React, { ReactNode, useContext, useEffect, useRef } from 'react'
import MapContext from '~MapContext'

export default function AppleMap ({ latitude, longitude, children }: { children?: ReactNode, latitude: number, longitude: number }) {
  const { map, setMap } = useContext(MapContext)
  const ref = useRef<HTMLDivElement>()

  useEffect(() => {
    const script = ref.current.ownerDocument.createElement('script')

    script.onload = () => {
      mapkit.init({
        authorizationCallback: (done) => {
          done('eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjI1TDU0NDY3SzMifQ.eyJpc3MiOiI5NkpQMjc3WVhRIiwiaWF0IjoxNjIxNTg1MTg1LCJleHAiOjE2NDA5MDg4MDAsIm9yaWdpbiI6Imh0dHBzOi8vbGVnMjAyMC5kZGV2LnNpdGUifQ.HIcMWAfS8N1j4n7XaXj37AFLQd7tNbMhAcNtTgFLy81C0_D5lRISOQZt6mx0EzcFlEZaTUQZoLo2T7KRmrHuLQ')
        },
      })

      const map = new mapkit.Map(ref.current, {
        isZoomEnabled: true,
        showsZoomControl: true,
        center: new mapkit.Coordinate(latitude, longitude)
      })

      map.addEventListener('drag-end', (event) => {
        console.warn('drag-end', event)
      })

      setMap(map)

      script.parentNode.removeChild(script)
    }

    script.src = 'https://cdn.apple-mapkit.com/mk/5.x.x/mapkit.js'

    ref.current.ownerDocument.body.appendChild(script)
  }, [ref, setMap])

  return (
    <div ref={ref}>
      {map ? children : null}
    </div>
  )
}
