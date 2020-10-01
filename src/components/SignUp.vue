<template>
  
  <div class="form">
      <label for="email1">What's your email address?</label> 
      <input id="email1" v-model="emailAddress" placeholder="email@address.com"/>
      <label for="email2">Please re-Enter your email address</label> 
      <input id="email2" v-model="emailAddress2" placeholder="email@address.com"/>
      <label for="pword">Please enter a password</label>
      <input id="pword"  v-model="password" type="password" />
  </div>
</template>

<script>
export default {
  name: 'SignUp',
  data() {
    return {
      emailAddress: '',
      emailAddress2: '',
      password: ''
    }
  },
  methods: {
    createAccount() {
      let msg = "Created Account...\nEmail: " +  this.emailAddress + "\nPassword: " + this.password;
      alert(msg);
    },
    hideFields() {
      let msg = "hide fields";
      alert(msg);
    }
  },
  mounted() {
    this.$on('createAccount', this.createAccount)
    this.$on('no-account', this.hideFields)
  }
}
</script>

<style scoped>
  
</style>