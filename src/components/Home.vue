<template >
  <div class="ui centered grid stackable">
    <div class="ui hidden divider"></div>
    <div class="ui only row">
        <h1 class="ui  header horizontal  divider violet ">Gérez vos AligatoRs efficacement !</h1>
    </div>
    <div class="six wide tablet blue eight wide computer column">
      <div class="button ui secondary" @click="createContact">Creer un contact</div>
    </div>
    <div class="six wide tablet olive eight wide computer column"></div>

  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
  
}
</script>
