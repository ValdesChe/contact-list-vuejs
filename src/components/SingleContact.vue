<template>
  <div class="ui segments">
    <p>{{ contact }}</p>
  </div>
</template>

<script>
import Contact from './../classes/Contact.js';
export default {
  name: 'SingleContact',
  props:{
    contact : Contact
  },
  data () {
    console.log(this.contact)
    return {
       contact = this.contact
    }
  }
}
</script>
