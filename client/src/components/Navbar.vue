<template>
  <div>
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <router-link to='/' id="removeUnderline">
        <el-menu-item index="1">Rumah888.com</el-menu-item>
      </router-link>
      <el-submenu index="2">
        <template slot="title">Add</template>
          <router-link to='/new-house' id="removeUnderline">
            <el-menu-item index="2-1">New House</el-menu-item>
          </router-link>
      </el-submenu>
    </el-menu>
    <div class="line"></div>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
  #removeUnderline {
    text-decoration: none;
  }
</style>
