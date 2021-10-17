<!--
 * @Date: 2020-09-24 16:48:35
 * @LastEditors: 清茶袅袅落子声
 * @LastEditTime: 2020-09-25 17:18:25
-->
<template>
  <div>
    <a>板块名称</a> <a @click="getAllPlate" href="#">点击</a>
    <a @click="goto" href="#">写</a>
    <div v-for="item in this.plateList" v-bind:key="item.plateid">
      <a v-on="goto(item.plateName)">-------{{ item.plateName }}-----</a>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  data() {
    return {
      plateList: null,
    };
  },
  methods: {
    /**
     * 获取所有的板块
     */
    getAllPlate: function () {
      var url = "http://localhost:9090/diray/plate/getAllPlate";
      Vue.axios
        .get(url)
        .then((response) => {
          this.plateList = response.data;
        })
        .catch(function (error) {
          //失败的处理方法
          alert("请求迷失了，你自己找找呗");
          console.log(error);
        });
    },
    goto: function (name) {
      this.$router.push({ path: "/WaterDrops", query: { plateName: name } });
    },
  },
  created: function () {
    this.getAllPlate();
  },
};
</script>

<style>
</style>>