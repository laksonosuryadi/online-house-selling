<template lang="html">
  <div id="kontainer">
    <el-row>
      <el-col :span="12" :offset="6">
        Owner<br>
        <el-input placeholder="Please input" v-model="newHouse.owner"></el-input><br><br>
        Address<br>
        <el-input placeholder="Please input" v-model="newHouse.address"></el-input><br><br>
        Description<br>
        <el-input placeholder="Please input" v-model="newHouse.description"></el-input><br><br>
        Price<br>
        <el-input placeholder="Please input" v-model="newHouse.price"></el-input><br><br>
        Photo URL<br>
        <el-input placeholder="Please input" v-model="newHouse.photo"></el-input><br><br>
        Contact<br>
        <el-input placeholder="Please input" v-model="newHouse.contact"></el-input><br><br>
        Location<br>
        <gmap-map
            :center="getCenter"
            :zoom="17"
            map-type-id="terrain"
            style="width: 568px; height: 300px"
          >
          <gmap-marker :position="getPosition" @position_changed="changePosition($event)" :clickable="true" :draggable="true"></gmap-marker>
        </gmap-map>

        <router-link to='/'>
          <el-button type="primary" @click="addHouse(newHouse)">A D D</el-button>
        </router-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'newHouse',
      'getCenter',
      'getPosition'
    ])
  },
  methods: {
    ...mapActions([
      'addHouse',
      'changePosition'
    ])
  }
}
</script>

<style lang="css">
#kontainer {
  padding: 20px;
  width: 100%;
  margin: 0 auto;
}
</style>
