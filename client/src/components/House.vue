<template lang="html">
  <div>
      <div v-for="house in houses" id="kontainer1">
        <el-row :gutter="60">
          <el-col :span="13">
            <img :src="house.photo" style="width: 100%">
          </el-col>
          <el-col :span="11">
            <gmap-map
                :center="{lat:house.location.lat, lng:house.location.lng}"
                :zoom="17"
                map-type-id="terrain"
                style="width: 500px; height: 265px">
                <gmap-marker :position="{lat:+(house.location.lat), lng:+(house.location.lng)}"></gmap-marker>
            </gmap-map>
            <h2>Owner: {{ house.owner }}</h2>
            <p>Address: {{ house.address }}</p>
            <p>Description: {{ house.description }}</p>
            <p>Price: Rp {{ house.price }}</p>
            <p>Contact: {{ house.contact }}</p>

            <!--///// OPEN MODALS FOR UPDATE /////-->
            <el-button type="success" @click="showDialog(house)">Update <i class="el-icon-edit el-icon-right"></i></el-button>
            <el-dialog title="Update House Info" v-model="dialogFormVisible">
              <el-row>
                <el-col :span="23">
                  Owner<br>
                  <el-input v-model="newHouse.owner"></el-input><br><br>
                  Address<br>
                  <el-input v-model="newHouse.address"></el-input><br><br>
                  Description<br>
                  <el-input  v-model="newHouse.description"></el-input><br><br>
                  Price<br>
                  <el-input v-model="newHouse.price"></el-input><br><br>
                  Photo URL<br>
                  <el-input v-model="newHouse.photo"></el-input><br><br>
                  Contact<br>
                  <el-input v-model="newHouse.contact"></el-input><br><br>
                  Location<br>
                  <gmap-map
                      :center="getCenter"
                      :zoom="17"
                      map-type-id="terrain"
                      style="width: 568px; height: 300px">
                    <gmap-marker :position="{lat:newHouse.location.lat, lng:newHouse.location.lng}" @position_changed="changePosition($event)" :clickable="true" :draggable="true"></gmap-marker>
                  </gmap-map>

                  <br>
                  <router-link to='/'>
                    <el-button type="primary" @click="edit(newHouse)">SAVE CHANGES</el-button>
                  </router-link>
                </el-col>
              </el-row>
            </el-dialog>
            <!--///// END OF MODALS FOR UPDATE /////-->

            <!--///// DELETE BUTTON /////-->
            <el-button type="danger" @click="confirmDelete(house._id)">Delete <i class="el-icon-delete el-icon-right"></i></el-button>
            <br>
          </el-col>
        </el-row>
      </div>
  </div>

</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false
    }
  },
  methods: {
   ...mapActions([
      'getHouses',
      'deleteHouse',
      'updateHouse',
      'getOneHouse',
      'changePosition',
      'setCenterOnEdit'
    ]),
    confirmDelete(id){
      var confirmed = confirm("Are you sure want to delete this post?")

      if(confirmed){
        this.deleteHouse(id)
      }
    },
    showDialog(house){
      let self = this;
      self.dialogFormVisible = true;
      this.getOneHouse(house)
      this.setCenterOnEdit(house.location)
    },
    edit(house){
      let self = this;
      self.dialogFormVisible = false;
      self.updateHouse(house)
    }
  },
  computed: {
    ...mapGetters([
      'houses',
      'newHouse',
      'getCenter',
      'getPosition'
    ])
    // houses() {
    //   return this.$store.getters.houses
    // }
  },
  mounted() {
    this.getHouses()
  }
}
</script>

<style lang="css">
#kontainer1 {
  padding: 50px;
border-bottom: 1px solid LightGrey;
}
</style>
