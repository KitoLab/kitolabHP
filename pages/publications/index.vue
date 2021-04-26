<i18n>
{
    "ja": {
        "Publications": "研究業績",
        "鬼頭研究室": "鬼頭研究室",
        "修士論文": "修士論文",
        "卒業論文": "卒業論文",
        "学位論文（2018年～）": "学位論文（2018年～）",
        "学術論文・査読付き国際学会発表（2018年〜）": "学術論文・査読付き国際学会発表（2018年〜）",
        "国内学会発表": "国内学会発表",
        "書籍（2015年以降）": "書籍（2015年以降）",
        "招待講演（2015年以降）": "招待講演その他（2015年以降）"
    },
    "en": {
        "Publications": "Publications",
        "鬼頭研究室": "Kito Laboratory",
        "修士論文": "Master's",
        "卒業論文": "Bachelor's",
        "学位論文（2018年～）": "Theses (2018-)",
        "学術論文・査読付き国際学会発表（2018年〜）": "Journal Articles & Conference Presentations (refereed) (2018-)",
        "国内学会発表": "Presentations at domestic conferences",
        "書籍（2015年以降）": "Books (2015-)",
        "招待講演（2015年以降）": "Invited Speeches and others (2015-)"
    }
}
</i18n>
<template>
  <div>
    <!-- タイトル画像 -->
    <b-jumbotron fluid :header="$t('Publications')" header-level="4"></b-jumbotron>
    
    <b-container fluid class="mt-2 pb-3">
      <b-row>

        <!-- 研究業績本文 -->
        <b-col md="9">

          <ul>
            <li><nuxt-link to v-scroll-to="'#thesis'">{{ $t('学位論文（2018年～）') }}</nuxt-link></li>
            <li><nuxt-link to v-scroll-to="'#public'">{{ $t('学術論文・査読付き国際学会発表（2018年〜）') }}</nuxt-link></li>
            <li><nuxt-link to v-scroll-to="'#public_ja'">{{ $t('国内学会発表') }}</nuxt-link></li>
            <li><nuxt-link to v-scroll-to="'#book'">{{ $t('書籍（2015年以降）') }}</nuxt-link></li>
            <li><nuxt-link to v-scroll-to="'#talk'">{{ $t('招待講演（2015年以降）') }}</nuxt-link></li>
          </ul>
          

          <!-- #thesis ... 卒業論文・修士論文 -->
          <h2 id="thesis">{{ $t('学位論文（2018年～）') }}</h2>

          <h3>2020年度（卒業論文11件）</h3>
          <table class="table table-borderless">
            <tr><td colspan="2" class="table-title">{{ $t('卒業論文') }}</td></tr>
            <tr v-for="(paper, index) in thesis['2020'].bachelor" :key="'2020git branch add_thesis_2021_bachelor_' + index">
              <td class="publisher">{{ paper.publisher }}</td>
              <td class="paper-title">{{ paper.title }}</td>
            </tr>
          </table>

          <h3>2019年度（卒業論文９件，修士論文３件）</h3>
          <p class="note">※修士論文３件は，筑波大学大学院システム情報工学研究科所属の学生によるものです．</p>
          <table class="table table-borderless">
            <tr><td colspan="2" class="table-title">{{ $t('修士論文') }}</td></tr>
            <tr v-for="(paper, index) in thesis['2019'].master" :key="'2019_master_' + index">
              <td class="publisher">{{ paper.publisher }}</td>
              <td class="paper-title">{{ paper.title }}</td>
            </tr>
            <tr><td colspan="2" class="table-title">{{ $t('卒業論文') }}</td></tr>
            <tr v-for="(paper, index) in thesis['2019'].bachelor" :key="'2019_bachelor_' + index">
              <td class="publisher">{{ paper.publisher }}</td>
              <td class="paper-title">{{ paper.title }}</td>
            </tr>
          </table>

          <h3>2018年度（修士論文２件）</h3>
          <p class="note">※修士論文２件は，筑波大学大学院システム情報工学研究科所属の学生によるものです．</p>
          <table class="table table-borderless">
            <tr><td colspan="2" class="table-title">{{ $t('修士論文') }}</td></tr>
            <tr><td class="publisher">谷中峻輔</td><td class="paper-title">企業依存度に着目した自動車産業ネットワークの構造および経年変化の分析</td></tr>
            <tr><td class="publisher">濱本章弘</td><td class="paper-title">大規模実データを用いた企業間取引ネットワークの複雑ネットワーク解析</td></tr>
          </table>

          <!-- #public ... 論文・国際学会 -->
          <h2 class="mb-3" id="public">{{ $t('学術論文・査読付き国際学会発表（2018年〜）') }}</h2>
          <ul class="mb-5">
            <li v-for="(title, index) in papers" :key="'public_' + index" class="paper">
              {{ title }}
            </li>
          </ul>

          <!-- #public_ja ... 国内学会 -->
          <h2 class="mb-3" id="public_ja">{{ $t('国内学会発表') }}</h2>
          <ul class="mb-5">
            <li v-for="(title, index) in public_ja" :key="'public_ja_' + index" class="paper">
              {{ title }}
            </li>
          </ul>
          
          <!-- #book ... 書籍 -->
          <h2 class="mb-3" id="book">{{ $t('書籍（2015年以降）') }}</h2>
          <ul class="mb-5">
            <li v-for="(title, index) in books" :key="'book_' + index" class="paper">
              {{ title }}
            </li>
          </ul>

          <!-- #talk ... 講演 -->
          <h2 class="mb-3" id="talk">{{ $t('招待講演（2015年以降）') }}</h2>
          <ul class="mb-5">
            <li v-for="(title, index) in talks" :key="'talk_' + index" class="paper">
              {{ title }}
            </li>
          </ul>

        </b-col>

        <!-- 右カラム -->
        <b-col md="3">
          <CardMenuColumn />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import CardMenuColumn from "@/components/CardMenuColumn.vue";
import thesis from "~/data/publications/thesis.js";
import papers from "~/data/publications/papers.js";
import public_ja from "~/data/publications/public_ja.js";
import books from "~/data/publications/books.js";
import talks from "~/data/publications/talks.js";

export default {
  head() {
    return {
      title: `${this.$t('Publications')} | ${this.$t('鬼頭研究室')}`
    }
  },
  components: {
    CardMenuColumn
  },
  computed: {
    thesis: () => thesis,
    papers: () => papers,
    public_ja: () => public_ja,
    books: () => books,
    talks: () => talks,
  }
};
</script>
<style scoped>
.jumbotron {
  background-image: url("~assets/paper.jpg");
  background-size: cover;
  background-position: center 60%;
  color: #fff;
}

/* 大見出しデザイン */
h2 {
  position: relative;
  padding: 0 0 0.5em 0.7em;
  border-bottom: 1px solid black;
  font-size: 1.5rem;
}
h2::after {
  position: absolute;
  top: 0.2em;
  left: 0;
  content: "";
  width: 5px;
  height: 1em;
  background-color: #446689;
}

/* 小見出しデザイン */
h3 {
  position: relative;
  padding: 0 0.3em 0 1.25em;
  font-size: 1.25rem;
  margin-top: 1em;
}
h3::after {
  position: absolute;
  top: 0.4em;
  left: 0.3em;
  content: "";
  width: 9px;
  height: 9px;
  background-color: #ff5a5f;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  z-index: 2;
}
/* 注意書き */
.note {
  padding-left: 1.25em;
  padding-right: 1em;
  font-size: 0.8em;
}
/* 著者 */
.publisher {
  width: 6em;
}

/* 論文リスト */
.paper {
    margin-bottom: .8em;
}
.table {
  width: auto;
  margin-left: 1rem;
  margin-right: 1rem;
}
.table .table-title {
  text-align: center;
  padding-top: 1rem;
  padding-bottom: .5rem;
  font-weight: bold
}
.table th, .table td {
  padding: .25rem;
}
</style>