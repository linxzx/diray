<!--
 * @Date: 2020-08-27 11:06:44
 * @LastEditors: 清茶袅袅落子声
 * @LastEditTime: 2020-09-24 16:41:29
-->
 <template>
  <div id="app">
    <tinymce :value="content" @changeContext="changeContext" />
    <a @click="testAxios" href="#">点击</a>
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
      content:
        "<p>kjha奥科吉水电费会卡的办法克服哈尔卡夫卡随便发开始的发卡机闪电发货奋斗阿卡朵法拉护身符拉快递费哈伦裤手动阀电a</p><p>&nbsp;</p><p>&nbsp;</p><p>adfasdf</p><p>&nbsp;</p><p>&nbsp;</p><p>adfasd</p><p>&nbsp;</p><p>费卡暑假好歹</p>",
    };
  },
  methods: {
    /**
     * 把文字发送到后端
     */
    testAxios: function () {
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
