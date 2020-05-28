<template>
  <div>
    <h2>Information Card Component</h2>

    <b-card
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 30rem;"
      class="mb-2"
    >
      <b-card-text class="head">
        <b-avatar class="avatar" src="data:image/jpeg;base64,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" size="9rem"></b-avatar>
        <div class="personal-info-container">
          <h1>{{name}}</h1>
          <p id="subscribers">Subscribers: {{ counter }}</p>
        </div>
      </b-card-text>
      <b-card-footer class="footer">
        <div class="row">
          <div class="col-md">
            <div class="position-info-container">
              <h3>Position</h3>
              <p>{{position}}</p>
            </div>          </div>
          <div class="col-md">
            <div class="company-info-container">
              <h3>Company</h3>
              <p>{{company}}</p>
            </div>
          </div>
        </div>
        <b-col lg="4" class="pb-2"><b-button id="subscription-button" v-on:click="changeStatus()">{{status}} </b-button></b-col>
      </b-card-footer>
    </b-card>
  </div>
</template>

<script>
import Vue from 'vue'
import { CardPlugin, AvatarPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(CardPlugin)
Vue.use(AvatarPlugin)
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

  .mb-2{
    font-family: 'Raleway', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5%;
    background: rgba(3,4,7,0.08);
    float: none;
    margin: 0 auto 10px;
  }
  .avatar{
    float: left;
  }
  h2{
    text-align: center;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }
  h1{
    text-align: center;
  }

  .mb-2:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.3);
  }

  .company-info-container {
    float: right;
    padding: 2px 16px;
    font-size: 1.7rem;
    text-align: left;
  }
  .position-info-container{
    padding: 2px 16px;
    float: left;
    font-size: 1.7rem;
    text-align: left;
  }
  .personal-info-container{
    margin-top: 1rem;
  }

  #subscription-button{
    font-family: 'Raleway', sans-serif;
    background: #2c3e50;
    border-radius: 10px;
    color: white;
    padding: 1.2rem 3rem;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1rem;
  }
  #subscription-button:hover{
    background: rgba(55,160,191,0.69);

  }
.footer{
  margin-top: 5rem;
}
  p{
    margin-top: 0.5rem;
    font-size: 1.5rem;
  }
  #subscribers{
    margin-top: 0;
    font-size: 1.2rem;
  }
  @media only screen and (max-width: 770px) {
    .company-info-container {
      float: left;
      padding: 2px 16px;
      font-size: 1.7rem;
      text-align: left;
    }
  }
</style>
