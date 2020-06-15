import Vue from 'vue';
import GMap from "C:\\Users\\Marj\\Desktop\\Projects\\Devcamper-nuxt-pro\\devcamper\\node_modules\\nuxt-gmaps\\components\\GMap.vue";
import GMapMarker from "C:\\Users\\Marj\\Desktop\\Projects\\Devcamper-nuxt-pro\\devcamper\\node_modules\\nuxt-gmaps\\components\\GMapMarker.vue";
import GMapCircle from "C:\\Users\\Marj\\Desktop\\Projects\\Devcamper-nuxt-pro\\devcamper\\node_modules\\nuxt-gmaps\\components\\GMapCircle.vue";
import GMapInfoWindow from "C:\\Users\\Marj\\Desktop\\Projects\\Devcamper-nuxt-pro\\devcamper\\node_modules\\nuxt-gmaps\\components\\GMapInfoWindow.vue";
export default(context, inject) =>{
  Vue.component('GMap', GMap);
  Vue.component('GMapMarker', GMapMarker);
  Vue.component('GMapCircle', GMapCircle);
  Vue.component('GMapInfoWindow', GMapInfoWindow);
  inject('GMaps', {apiKey: "AIzaSyB45-ufkKg86KIq5z5MjFA2Hs1eNmVKR9U", loaded: false, libraries: undefined})
}