<i18n>
{
    "ja": {
        "お知らせ": "お知らせ",
        "鬼頭研究室": "鬼頭研究室"
    },
    "en": {
        "お知らせ": "News",
        "鬼頭研究室": "Kito Laboratory"
    }
}
</i18n>
<template>
  <div>
    <b-jumbotron
        fluid
        :header="$t('お知らせ')"
        header-level="4">
    </b-jumbotron>

    <b-container fluid class="mt-2 pb-3">
      <b-row>
        <b-col md="9" class="mb-2">
          <div v-if="news.length == 0" class="d-flex justify-content-center mt-5">
            <b-spinner label="Large Spinner"></b-spinner>
          </div>
          <b-card v-for="(article, index) in news" :key="index" class="article">
            <b-card-body class="text-center">
              <b-card-text v-html="article[localeContent]"></b-card-text>
            </b-card-body>
            <b-card-text class="text-right">{{ article['date'].substr(0, 10) }}</b-card-text>
          </b-card>
        </b-col>
        <b-col md="3">
          <CardMenuColumn />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import CardMenuColumn from '~/components/CardMenuColumn.vue'
import axios from '~/plugins/axios'

export default {
  name: "news",
  head() {
    return {
      title: `${this.$t('お知らせ')} | ${this.$t('鬼頭研究室')}`
    }
  },
  components: {
    CardMenuColumn
  },
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
          fields: "id,content,content_en,date"
        }
      })
      .then(({ data }) => this.news = data.contents);
  }
}
</script>
<style scoped>
.jumbotron {
    background-image: url("~assets/contact.jpg");
    background-size: cover;
    background-position: center 60%;
    color: #fff;
}
.article {
  margin-bottom: 1rem;
  border: none;
  border-radius: 0;
  border-top: 1px dotted black;
}

.article:first-child{
  border-top: none;
}
</style>