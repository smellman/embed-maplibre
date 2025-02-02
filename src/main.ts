import './style.css'
import 'maplibre-gl/dist/maplibre-gl.css'
import { GlobeControl, Map, Marker, NavigationControl } from 'maplibre-gl'

const queryString = window.location.search
const params = new URLSearchParams(queryString)

const style: string = params.get('style') || 'https://demotiles.maplibre.org/style.json'
const center: [number, number] = [parseFloat(params.get('lng') || '140.084556'), parseFloat(params.get('lat') || '36.104611')]
const zoom: number = parseFloat(params.get('zoom') || '16')
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
