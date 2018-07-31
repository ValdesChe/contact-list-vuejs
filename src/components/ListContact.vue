<template>
  <div class="list_contacts ui piled segments">
    <single-contact v-for="contact in contactList" v-bind:key="contact.name" :contact="contact"></single-contact> 
  </div>
</template>

<script>
import SingleContact from './ShowContact'
export default {
  name: 'ListContact',
  components:{SingleContact},
  props:{
    contactList : Array
  },
  data () {
    return {

    }
  }
}
</script>
