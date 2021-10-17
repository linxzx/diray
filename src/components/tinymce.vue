<!--
 * @Date: 2020-09-10 14:17:55
 * @LastEditors: 清茶袅袅落子声
 * @LastEditTime: 2020-09-16 17:44:49
-->
 <template>
  <div>
    <editor :init="init" v-model="value" />
  </div>
</template>

 <script>
import Editor from "@tinymce/tinymce-vue";

export default {
  name: "app",
  components: {
    editor: Editor,
  },
  props: {
    value: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    plugins: {
      type: [String, Array],
      default: "link lists image code table wordcounts",
    },
    toolbar: {
      type: [String, Array],
      default:
        "bold italic underline strikethrough | fontsizeselect fontselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo | link unlink code | removeformat",
    },
  },
  watch: {
    value(newValue) {
      this.$emit("changeContext", this.value);
    },
  },
  data() {
    return {
      myValue: this.value,
      init: {
        language_url: "/static/langs/zh_CN.js",
        language: "zh_CN",
        height: 500,
        menubar: false,
        plugins: [
          "advlist autolink lists link image charmap print preview anchor",
          "searchreplace visualblocks code fullscreen",
          "insertdatetime media table paste code help wordcount",
        ],
        toolbar:
          "undo redo | formatselect | bold italic backcolor | \
           alignleft aligncenter alignright alignjustify | \
           bullist numlist outdent indent | removeformat | help",
      },
    };
  },
};
</script>
