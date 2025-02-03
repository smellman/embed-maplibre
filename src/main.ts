import './style.css'
import 'maplibre-gl/dist/maplibre-gl.css'
import { GlobeControl, Map, Marker, NavigationControl } from 'maplibre-gl'

const queryString = window.location.search
const params = new URLSearchParams(queryString)

const style: string = params.get('style') || 'https://demotiles.maplibre.org/style.json'
const geoUri: string = params.get('geoUri') || 'geo:36.104611,140.084556?z=16'
const [latitude, longitude] = geoUri.match(/geo:(.*),(.*)/)!.slice(1).map(parseFloat) as [number, number]
const center: [number, number] = [longitude, latitude]
const zoom: number = geoUri.match(/z=(\d+)/) ? parseFloat(geoUri.match(/z=(\d+)/)![1]) : 16
const pitch: number = parseFloat(params.get('pitch') || '0')

const map = new Map({
  container: 'map',
  style: style,
  center: center,
  zoom: zoom,
  pitch: pitch,
})
map.addControl(new NavigationControl())
map.addControl(new GlobeControl())
new Marker()
  .setLngLat(center)
  .addTo(map)
