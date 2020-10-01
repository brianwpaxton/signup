<template>
    <div id="app">
      <div>
        <h1>You're on your way to saving money</h1>
        <Email />
        <img alt="Vue logo" src="./assets/loans-q1.png" style="width:500px;">
        <SignUp ref="signUp"/>
        <button @click="submit">Create Account</button>
      </div>
    </div>
</template>

<script>
import SignUp from './components/SignUp.vue'
import Email from './components/Email.vue' 
import mapState from 'vuex'

export default {
  name: 'App',
  components: {
    SignUp,
    Email
  },
  computed: {
    authState: {
      get () {
        return this.$store.state.obj.authState
      },
      set (value) {
        this.$store.commit('updateAuthState', value)
      }
  }
  },
  methods: {
    submit() {
      this.$refs.signUp.createAccount();
    },
    updateAuthState (e) {
      console.log("updateAuthState")
      this.authState(e.target.value)
    }
  },
  mounted() {
    this.$on('createAccount', this.createAccount)
    this.$on('input', this.updateAuthState)
  }
}
</script>

<style>
#app {
  font-family: Open Sans, Arial, sans-serif;
  font-size: 9pt;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: grid;
  justify-content: center;
  background-color: #fcfcfd;
}
.form {
    display: grid;
    grid-template-columns: 250px 230px;
    row-gap: 20px;
    text-align: left;
  }

label {
  padding-left: 10px;
}
</style>
