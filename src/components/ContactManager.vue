<template >
  <div class="ui centered grid stackable">
    <div class="ui hidden divider"></div>
    <div class="ui only row">
        <h1 class="ui  header horizontal  divider violet ">Gérez vos AligatoRs efficacement !</h1>
    </div>
    <div class="six wide tablet blue eight wide computer column">
      <contact-creator >
      </contact-creator>
    </div>
    <div class="six wide tablet olive eight wide computer column">
      <list-contact :contactList="contacts">
      </list-contact>
    </div>

  </div>
</template>

<script>

import ContactCreator from './ContactCreator';
import ListContact from './ListContact';

import Contact from './../classes/Contact.js';

export default {
  name: 'home',
  components:{ContactCreator, ListContact},
  data () {
  
    return {
      Wsa : "daslk",
      contacts: []
    }

  },
  mounted(){
    this.contacts = this.$children[0].contacts
  }
  
}
</script>
