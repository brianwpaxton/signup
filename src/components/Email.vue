<template>
  
  <div class="form">
      <label for="email1">What's your email address</label> 
      <input id="email1" :value="value" placeholder="email@address.com" @input="emitInput($event.target.value)" />
  </div>
</template>

<script>
export default {
  name: 'Email',
  data() {
    return {
      emailAddress: ''
    }
  },
  methods: {
       emitInput(value) {
        console.log("EmitInput " + value)
        this.$emit('input', value);
    },
  },
  props: {
    value: {
      type: [String, Number],
      default: null
    }
  }

}
</script>

<style scoped>

</style>