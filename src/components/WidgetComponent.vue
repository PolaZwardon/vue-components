<template>
<!--  <div>
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
          <h3 id="temperature">{{this.info.current.temp_c}}<img id="degreeImg" src="../assets/temperature.png" alt="earth" style="width:30%"> </h3>
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
  </div>-->
  <div>
    <h2>Weather Widget</h2>
    <div
         style="max-width: 30rem;"
         class="mb-2"
         id="widget-container">
    <div class="row">
          <div class="col">
            <div class="date">
            <p id="currentDate">{{this.currentDate}}</p>
            </div>
          </div>
          <div class="col">
            <div class="clock">
            <h2 id="clock-widget">{{this.currentTime}}</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="location">
              <img id="locationImg" src="../assets/planet-earth.png" alt="earth" style="width:50%">
              <span id="locationInfo">
            <h3>{{this.info.location.name}}</h3>
            <h3>{{this.info.location.country}}</h3>
          </span>
            </div>          </div>
          <div class="col">
            <div class="temperature">
              <h3 id="temperature">{{this.info.current.temp_c}}<img id="degreeImg" src="../assets/temperature.png" alt="earth" style="width:30%"> </h3>
            </div>
          </div>
        </div>
      <div class="row">
      <div class="col">
        <div class="humidity">
          <img id="humidityImg" src="../assets/raindrop.png" alt="earth" style="width:20%" >
          <h3 id="humidity">{{this.info.current.humidity}}% </h3>
        </div>
      </div>
      <div class="col">
        <div class="pressure">
          <h3 id="pressure">{{this.info.current.pressure_mb}} hPa </h3>
        </div>
      </div>
      </div>
    <div class="row">
      <div class="col">
      <p id="observationTime">Updated: {{this.info.current.last_updated}}</p>
    </div>      </div>
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
    axios.get('https://api.weatherapi.com/v1/current.json?key=77ec79a6026544048e3131424202105&q=Warsaw')
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
      let hours = today.getHours()
      minutes = minutes < 10 ? '0' + minutes : minutes
      hours = hours < 10 ? '0' + hours : hours
      const time = hours + ':' + minutes
      this.currentDate = date
      this.currentTime = time
    }
  }
}
</script>

<style scoped>
  #widget-container{
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 3%;
    background-image: linear-gradient(to bottom right, rgba(130,221,179,0.34), rgba(35,111,145,0.65));
    float: none;
    margin: 0 auto 10px;
    font-family: 'Montserrat', sans-serif;
    -moz-osx-font-smoothing: grayscale;
    color: #ffffff;
  }
  .date{
    margin-top: 1rem;
    font-size: 2rem;
  }
  #clock-widget{
    font-size: 4rem;
    margin-right: 1rem;
    margin-top: 0.7rem;
  }
  .temperature #temperature{
    font-size: 7rem;
    margin-right: 2rem;
    margin-top: 2rem;
  }
  #humidityImg{
    float: left;
    margin-left: 3rem;
    margin-top: 1rem;
  }
  #humidity{
    float: left;
    margin-top: 1.6rem;
  }
  .pressure{
    margin-right: 1rem;
  }
  @media only screen and (max-width: 428px) {
    .temperature #temperature{
      font-size: 20vw;
    }
    #clock-widget{
      font-size: 16vw;
    }
    .date{
      font-size: 6vw;
    }
    #humidity{
      font-size: 6vw;
    }
    #humidityImg{
      float: left;
      margin-left: 2rem;
      margin-top: 1rem;
    }
  }
</style>
