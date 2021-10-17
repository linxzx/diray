<!--

记录每一点一滴的地方

 * @Date: 2020-09-25 17:00:08
 * @LastEditors: 清茶袅袅落子声
 * @LastEditTime: 2020-09-25 17:45:51
-->

 <template>
  <div id="app">
    <tinymce :value="content" @changeContext="changeContext" />
    <a @click="save" href="#">保存</a>
    <a @click="returnHome" href="#">返回</a>
  </div>
</template>

 <script>
import Tinymce from "./tinymce";
import Vue from "vue";

export default {
  name: "app",
  components: {
    tinymce: Tinymce,
  },
  data() {
    return {
      content: "",
    };
  },
  methods: {
    returnHome: function (name) {
      this.$router.push({ path: "/HomePage" });
    },
    /**
     * 把文字发送到后端
     */
    save: function () {
      var res = JSON.stringify(encodeURIComponent(this.content));
      var url = "http://localhost:9090/diray/test/Axios?msg=" + res;

      Vue.axios
        .get(url)
        .then((response) => {
          alert(response.data);
        })
        .catch(function (error) {
          //失败的处理方法
          alert("请求迷失了，你自己找找呗");
          console.log(error);
        });
    },
    /**
     * @description: 监听tinyme的内容变化
     * @param {type}
     * @return {type}
     */
    changeContext: function (context) {
      this.content = context;
    },
  },
};
</script>
