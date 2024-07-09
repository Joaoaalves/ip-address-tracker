import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import { OSM } from 'ol/source';
import TileLayer from 'ol/layer/Tile';
import { useGeographic } from 'ol/proj';
import { defaults as defaultControls } from 'ol/control';  // Import default controls

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  standalone: true
})
export class MapComponent implements OnInit, OnChanges {
  @Input() latitude!: number;
  @Input() longitude!: number;

  public map!: Map;

  ngOnInit(): void {
    useGeographic();
    this.initMap();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.map && (changes['latitude'] || changes['longitude'])) {
      this.updateMapCenter();
    }
  }

  private initMap(): void {
    this.map = new Map({
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      target: 'map',
      view: new View({
        center: [0, 0],
        zoom: 2,
        maxZoom: 18,
      }),
      controls: defaultControls({ zoom: false, rotate: false })
    });

    this.updateMapCenter();
  }

  private updateMapCenter(): void {
    const center = [this.longitude, this.latitude];
    const view = this.map.getView();
    view.setCenter(center);
    view.setZoom(15);
  }
}
