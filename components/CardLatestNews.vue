<i18n>
{
    "ja": {
        "最近のお知らせ": "最近のお知らせ"
    },
    "en": {
        "最近のお知らせ": "Latest News"
    }
}
</i18n>
<template>
    <b-card :title="$t('最近のお知らせ')">
        <div v-if="news.length == 0" class="d-flex justify-content-center mt-5">
          <b-spinner label="Large Spinner"></b-spinner>
        </div>
        <ul>
            <li v-for="(article, index) in news" :key="index" v-html="article[localeContent]"></li>
        </ul>
    </b-card>
</template>
<script>
import axios from '~/plugins/axios'

export default {
    data: function() {
      return {
        news: []
      }
    },
    computed: {
      localeContent() {
        return this.$i18n.locale == "ja" ? "content" : "content_en";
      }
    },
    mounted() {
      axios
        .get("/news", { 
          params: {
            fields: "id,content,content_en,date",
            limit: 3,
            orders: "-date"
          }
        })
        .then(({ data }) => this.news = data.contents);
    }
}
</script>
<style scoped>
li {
    margin-bottom: 1em;
}
.card {
    border: none;
}
.card-title {
    padding-bottom: 5px;
    border-bottom: 1px solid black;
}
</style>