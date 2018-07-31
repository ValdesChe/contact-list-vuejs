<template>
  <div class="add-box">
    <h2 class="header ui">Creer un nouveau Contact</h2>
   <div class="ui one column middle aligned very relaxed stackable grid">
      <div class="column" v-show="hasErrors">
        <div class="message ui red" v-for="error in errors" v-bind:key="error">
          {{error}}
        </div>
      </div>
      <div class="column">
        <div class="ui form">
          <div class="field">
            <label>Name </label>
            <div class="ui left big icon input">
              <input placeholder="Name" type="text" v-model="newContact.name">
              <i class="user icon"></i>
            </div>
          </div>
          <div class="field">
            <label>Surname</label>
            <div class="ui left big icon input">
              <input type="text"  placeholder="Surname" v-model="newContact.surname"> 
              <i class="user icon"></i>
            </div>
          </div>
          <div class="field">
            <label>Phone Number</label>
           <div class="ui left big labeled input">
              <input placeholder="Phone number"  type="text"  v-model="newContact.phone">
              <div class="ui  dropdown label">
                <div class="text">+ 212</div>
                <i class="dropdown icon"></i>
              
              </div>
            </div>
          </div>
          <div class="field">
            <label>Town</label>
            <div class="ui left big icon input">
              <input type="text" placeholder="Ville" v-model="newContact.city"> 
              <i class="city icon"></i>
            </div>
          </div>
          <div class="field">
            <label>Website </label>
           <div class="ui labeled big input">
              <div class="ui label">
                http://
              </div>
              <input placeholder="your website url" v-model="newContact.website" type="text">
            </div>
          </div>
          <div class="ui green submit big button" @click="addContact" v-show="!editing">Create</div>
          <div class="ui yellow submit big button" @click="saveEdit" v-show="editing">Save Modifications</div>
        </div>
      </div>
    </div>
    {{ contacts }}
  </div>
</template>

<script>

import Contact from './../classes/Contact.js';

export default {
  name: 'Home',
  props:{
    contact: Contact,

  },
  data () {
    return {
      newContact: new Contact,
      editing: false,
      contacts : [],
      errors: []
    }
  },
  methods:{
    addContact(){
      this.errors = this.newContact.verify();

      !this.hasErrors ? this.contacts.push(Object.assign({}, this.newContact)) : ""
   
    },
    saveEdit(){

    }
  },
  computed:{
    hasErrors(){
     return this.errors.length > 0 
    }
  }
}
</script>
<style scoped>
  .add-box{padding-left: 5px; }
</style>

