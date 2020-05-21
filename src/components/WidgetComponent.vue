<template>
  <div>
    <h2>Weather Widget</h2>
    <div id="widgetComponent">
      <div class="widget-container">
        <div class="clock">
          <h2 id="clockTick">{{this.currentTime}}</h2>
          <p id="currentDate">{{this.currentDate}}</p>
        </div>
        <div class="location">
          <img id="locationImg" src="../assets/planet-earth.png" alt="earth" style="width:80%">
          <span id="locationInfo">
            <h3>{{this.info.location.name}}</h3>
            <h3>{{this.info.location.country}}</h3>
          </span>
        </div>
        <div class="temperature">
          <h3 id="temperature">{{this.info.current.temp_c}}<img id="degreeImg" src="../assets/temperature.png" alt="earth" style="width:40%"> </h3>
        </div>
        <div class="humidity">
          <img id="humidityImg" src="../assets/raindrop.png" alt="earth" style="width:30%">
          <h3 id="humidity">{{this.info.current.humidity}}% </h3>
        </div>
        <div class="pressure">
          <h3 id="pressure">{{this.info.current.pressure_mb}} hPa </h3>
        </div>
        <p id="observationTime">Updated: {{this.info.current.last_updated}}</p>
      </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'WidgetComponent',
  data () {
    return {
      info: null,
      currentDate: '',
      currentTime: ''
    }
  },
  mounted () {
    axios.get('https://api.weatherapi.com/v1/current.json?key=77ec79a6026544048e3131424202105&q=Cracow')
      .then(response => (this.info = response.data))
      .catch(error => console.log(error))
  },
  created () {
    setInterval(this.getNow, 1000)
  },
  methods: {
    getNow: function () {
      const today = new Date()
      const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
      let minutes = today.getMinutes()
      minutes = minutes < 10 ? '0' + minutes : minutes
      const time = today.getHours() + ' : ' + minutes
      this.currentDate = date
      this.currentTime = time
    }
  }
}
</script>

<style scoped>
  .widget-container {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 3%;
    background-image: linear-gradient(to bottom right, rgba(130,221,179,0.34), rgba(35,111,145,0.65));
    width: 35%;
    height: 27vw;
    margin: 0 auto;
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #ffffff;

  }
  .widget-container:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.3);
  }
  .clock{
    margin-bottom: -100px;
    height: 100px;
  }
  #clockTick{
    font-size: 5vw;
    margin: 0.4vw 4vw 0 auto;
    float: right;
  }
  #locationImg{
    margin-top: 10px;
  }
  #temperature{
    font-size: 9vw;
    color: #ffffff;
  }
  #humidity{
    font-size: 3vw;
  }
  .temperature{
    float: right;
    width: 16vw;
    bottom: 7vw;
    position: relative;
    right: 3vw;
  }
  .humidity{
    float: left;
    width: 10vw;
    top:7vw;
    position: relative;
    left: 2vw;
  }
  .location{
    width: 9vw;
    margin-left: 3vw;
    position: relative;
    top: 5vw;
    color: #ffffff;
  }
  .pressure{
    width: 9vw;
    position: relative;
    top: 2vw;
    color: #ffffff;
    left: 19vw;
    font-size: 1.7vw;
  }
  #locationInfo{
    font-size: 2vw;
  }
  #humidity{
    float: right;
  }
  #currentDate{
    top: 1vw;
    position: relative;
    font-size: 2.5vw;
    color: #ffffff;
    right: 0.3vw
  }
  #observationTime{
    float: right;
    width: 16vw;
    margin-left: 40vw;
    font-size: 1vw;
    position: relative;
    bottom:2vw;
    right: 2vw;
  }
  h3{
    margin: 0 auto;
  }
</style>
