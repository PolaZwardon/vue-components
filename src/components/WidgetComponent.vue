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
          <h3 id="temperature">{{this.info.current.temperature}}<img id="degreeImg" src="../assets/temperature.png" alt="earth" style="width:45%"> </h3>
        </div>
        <div class="humidity">
          <img id="humidityImg" src="../assets/raindrop.png" alt="earth" style="width:30%">
          <h3 id="humidity">{{this.info.current.humidity}}% </h3>
        </div>
        <div class="pressure">
          <h3 id="pressure">{{this.info.current.pressure}} hPa </h3>
        </div>
        <p id="observationTime">Observation time: {{this.info.current.observation_time}}</p>
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
    axios.get('http://api.weatherstack.com/current\n' +
        '?access_key=eece8d8b6f7bb98e315a81b15942118f\n' +
        '& query=Cracow')
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
      const time = today.getHours() + ' : ' + today.getMinutes()
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
    font-size: 6vw;
    margin: 1vw 2vw 0 auto;
    float: right;
  }
  #locationImg{
    margin-top: 10px;
  }
  #temperature{
    font-size: 8vw;
    color: #ffffff;
  }
  #humidity{
    font-size: 3vw;
  }
  .temperature{
    float: right;
    width: 16vw;
    bottom: 4vw;
    position: relative;
    right: 3vw;
  }
  .humidity{
    float: left;
    width: 10vw;
    top:7vw;
    position: relative;
    left: 5vw;
  }
  .location{
    width: 9vw;
    margin-left: 3vw;
    position: relative;
    top: 4.5vw;
    color: #ffffff;
  }
  .pressure{
    width: 9vw;
    position: relative;
    top: 2vw;
    color: #ffffff;
    left: 20vw;
    font-size: 1.5vw;
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
  }
  #observationTime{
    float: right;
    width: 8vw;
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
