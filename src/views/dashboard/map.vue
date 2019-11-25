<template>
  <div id="tracar"></div>
</template>
<style lang="scss" scoped>
    #tracar {
        width: 100%;
    }
</style>
<script>
import * as atlas from 'azure-maps-control';

export default {
  data() {
    return {
      lat: '',
      long: '',
    };
  },
  components: {
  },
  mounted() {
    this.getPosition();
  },
  methods: {
    getPosition() {
      const vm = this;
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          vm.lat = position.coords.latitude;
          vm.long = position.coords.longitude;
          vm.instantiateMap(position.coords.longitude, position.coords.latitude);
        }, () => {
          // eslint-disable-next-line
          alert('We encoutered an error and could not get your location');
        }, {
          enableHighAccuracy: true,
          maximumAge: 30000,
          timeout: 27000,
        });
      } else {
        // eslint-disable-next-line
        alert('Geolocation is not avialable');
      }
    },

    instantiateMap(log, lat) {
      const vm = this;
      const map = new atlas.Map('tracar', {
        center: [log, lat],
        zoom: 12,
        language: 'en-US',
        authOptions: {
          authType: 'subscriptionKey',
          subscriptionKey: 'qYeG7oIeb1SseVNl9Cx9ueK6X_AfdV4WMWrcgnB2cR8',
        },
      });
      map.events.add('ready', () => {
        const dataSource = new atlas.source.DataSource();
        map.sources.add(dataSource);
        const point = new atlas.Shape(new atlas.data.Point([vm.long, vm.lat]));
        dataSource.add([point]);
        map.events.add('click', (e) => {
          point.setCoordinates(e.position);
        });
        map.layers.add(new atlas.layer.SymbolLayer(dataSource, null));
      });
    },
  },
};
</script>
