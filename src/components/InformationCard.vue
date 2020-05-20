<template>
  <div id="informationCard">
    <h2>Information Card Component</h2>
    <div class="card">
      <div class="image"></div>
      <img class="profileImage" src="../assets/profileMan.png" alt="profile" style="width:30%">
      <div class="personal-info-container">
        <h1>{{name}}</h1>
      </div>
      <div class="position-info-container">
        <h3>Position</h3>
        <p>{{position}}</p>
      </div>
        <div class="company-info-container">
        <h3>Company</h3>
        <p>{{company}}</p>
      </div>
      <div class="button-container">
        <p id="subscribers">Subscribers: {{ counter }}</p>
        <button id="subscription-button" v-on:click="changeStatus()">{{status}}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InformationCard',
  methods: {
    changeStatus: function () {
      if (this.followed) {
        this.status = 'Subscribe'
        this.followed = false
        this.counter -= 1
      } else if (!this.followed) {
        this.status = 'Unsubscribe'
        this.followed = true
        this.counter += 1
      }
    }
  },
  data () {
    return {
      name: 'John Doe',
      position: 'Designer',
      company: 'Adobe',
      counter: 233,
      status: 'Subscribe',
      followed: false
    }
  }
}

</script>

<style scoped>

  #informationCard{
    font-family: 'Raleway', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
  }
  h2{
    text-align: center;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    margin-bottom: 50px;
  }
  h1{
    text-align: center;
    font-size: 3vw;
  }
  .card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5%;
    background: rgba(3,4,7,0.08);
    width: 40%;
    margin: 0 auto;
  }
  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.3);
  }
  .company-info-container {
    float: left;
    padding: 2px 16px;
    font-size: 1.7vw;
    margin-left: 2vw;
  }
  .position-info-container{
    padding: 2px 16px;
    float: left;
    margin-left: 2vw;
    font-size: 1.7vw;
  }
  .profileImage{
    margin-top: 15px;
    margin-left: 15px;
    border-radius: 50%;
  }
  .personal-info-container{
    float: right;
    margin-right: 4vw;
  }
  #subscription-button{
    font-family: 'Raleway', sans-serif;
    background: #2c3e50;
    border-radius: 10px;
    color: white;
    padding: 1.2vw 3vw;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 12px;
    margin-bottom: 2vw;
  }
  #subscription-button:hover{
    background: rgba(55,160,191,0.69);

  }
  .button-container{
    text-align: center;
    margin-right: 1vw;
  }
  #subscribers{
    font-size: 1.3vw;
    margin-bottom: 2px;
    margin-top: 27px;
  }
  p{
    margin-top: -15px;
  }
</style>
