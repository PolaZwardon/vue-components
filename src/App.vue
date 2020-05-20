<template>
  <div id="app">
    <h1>Vue Components</h1>
    <widget-component></widget-component>
  </div>
</template>

<script>
import InformationCard from './components/InformationCard'
import WidgetComponent from './components/WidgetComponent'
export default {
  name: 'App',
  components: {WidgetComponent, InformationCard}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
