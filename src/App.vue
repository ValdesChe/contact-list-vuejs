<template>
  <div>
    <div class="ui inverted stackable fixed menu">
      <div class="ui container">
        <router-link :to="{name: 'home'}" class="item header"  tag="a"><img class="ui middle aligned mini image " src="./assets/logo.png"> &nbsp; &nbsp; &nbsp; Some Text</router-link>
       
        <router-link :to="{name: 'ListContact'}" class="item" tag="a">ACCUEIL</router-link>
        <div class="right menu">
          <a class="ui item">
            Logout
          </a>
        </div>
      </div>
    </div>
    <transition name="fade" mode="out-in" :duration="{ enter: 100, leave: 180 }">
      <router-view class="ui relaxed" style="padding-top:65px;"></router-view>
    </transition>  
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style src="./assets/style.css">
</style>
