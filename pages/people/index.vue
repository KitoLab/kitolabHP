<i18n>
{
    "ja": {
        "メンバー": "メンバー",
        "鬼頭研究室": "鬼頭研究室",
        "鬼頭 朋見": "鬼頭 朋見",
        "所属（准教授）": "所属（准教授）",
        "早稲田大学": "早稲田大学",
        "mgmt": "創造理工学部 経営システム工学科",
        "bdm": "大学院 創造理工学研究科 経営デザイン専攻",
        "その他の所属": "その他の所属",
        "winlab": "早稲田イノベーション研究所",
        "mathphys": "早稲田大学 数物系科学拠点",
        "giti": "早稲田大学 国際情報通信研究センター",
        "学生": "学生",
        "修士課程": "修士課程",
        "学部生": "学部生",
        "池澤 太一": "池澤 太一",
        "上田 邦裕": "上田 邦裕",
        "上田 真之介": "上田 真之介",
        "近江 裕志": "近江 裕志",
        "竹内 悠馬": "竹内 悠馬",
        "土井 俊彦": "土井 俊彦",
        "福重 寛隆": "福重 寛隆",
        "櫛野 智史": "櫛野 智史",
        "浅野 修平": "浅野 修平",
        "石井 大雅": "石井 大雅",
        "大久保 優哉": "大久保 優哉",
        "來海 未宙": "來海 未宙",
        "高田 侑紀": "高田 侑紀",
        "二木 恵": "二木 恵",
        "深澤 実緒": "深澤 実緒",
        "古江 尚大": "古江 尚大",
        "三角 颯": "三角 颯",
        "村田 裕乙": "村田 裕乙",
        "安井 丞": "安井 丞"
  },
    "en": {
        "メンバー": "People",
        "鬼頭研究室": "Kito Laboratory",
        "鬼頭 朋見": "Tomomi Kito",
        "所属（准教授）": "Associate professor",
        "早稲田大学": "Waseda University",
        "mgmt": "Department of Industrial and Management System Engineering, School of Creative Science and Engineering",
        "bdm": "Department of Business Design and Management, Graduate School of Creative Science and Engineering",
        "giti": "Global Information and Telecommunication Institute",
        "その他の所属": "Member of",
        "winlab": "Waseda Innovation Laboratory",
        "mathphys": "Waseda University Mathematics and Physics Unit",
        "学生": "Students",
        "修士課程": "Master's",
        "学部生": "Bachelor's",
        "池澤 太一": "Taichi Ikezawa",
        "上田 邦裕": "Kunihiro Ueda",
        "上田 真之介": "Shinnosuke Ueta",
        "近江 裕志": "Yuji Ohmi",
        "竹内 悠馬": "Yuma Takeuchi",
        "土井 俊彦": "Toshihiko Doi",
        "福重 寛隆": "Hirotaka Fukushige",
        "櫛野 智史": "Satoshi Kushino",
        "浅野 修平": "Syuhei Asano",
        "石井 大雅": "Taiga Ishii",
        "大久保 優哉": "Yuya Ohkubo",
        "來海 未宙": "Mihiro Kimachi",
        "高田 侑紀": "Yuuki Takada",
        "二木 恵": "Megumi Niki",
        "深澤 実緒": "Mio Fukazawa",
        "古江 尚大": "Takahiro Furue",
        "三角 颯": "Hayato Misumi",
        "村田 裕乙": "Yuuki Murata",
        "安井 丞": "Tasuku Yasui"
    }
}
</i18n>
<template>
  <div>
    <!-- タイトル画像 -->
    <b-jumbotron fluid :header="$t('メンバー')" header-level="4"></b-jumbotron>

    <!-- その下 -->
    <b-container fluid class="mt-2 pb-3">
      <b-row>
        <!-- メイン -->
        <b-col md="9" class="mb-2">
          <b-container fluid>
            <!-- Boss -->
            <h2>{{ $t('鬼頭 朋見') }}</h2>
            <b-row>
              <b-col md="4" order-md="2">
                <b-img center fluid src="~assets/boss.jpg" alt="Kito Tomomi" class="mt-2"></b-img>
              </b-col>
              <b-col md="8" order-md="1">
                <h3>{{ $t('所属（准教授）') }}</h3>
                <p class="pl-4 mb-0">{{ $t('早稲田大学') }}</p>
                <ul>
                  <li><a href="http://www.mgmt.waseda.ac.jp/" target="_brank">{{ $t('mgmt') }}</a></li>
                  <li><a href="http://www.bdm.waseda.ac.jp/" target="_brank">{{ $t('bdm') }}</a></li>
                </ul>

                <h3>{{ $t('その他の所属') }}</h3>
                <ul>
                  <li><a href="https://www.winlab.tokyo" target="_brank">{{ $t('winlab') }}</a></li>
                  <li><a href="http://www.sgu-mathphys.sci.waseda.ac.jp" target="_brank">{{ $t('mathphys') }}</a></li>
                  <li><a href="https://www.waseda.jp/fsci/giti/" target="_brank">{{ $t('giti') }}</a></li>
                  <li><a href="https://research.wpcarey.asu.edu/supply-networks/" target="_brank">Complex Adaptive Supply Networks</a></li>
                  <li><a href="https://www.cabdyn.ox.ac.uk/complexity_home.asp" target="_brank">Cabdyn Complexity Centre</a></li>
                </ul>
              </b-col>
            </b-row>

            <!-- Students -->
            <h2>{{ $t('学生') }}</h2>
            <b-row>
              <b-col md="6">
                <h3>{{ $t('博士課程') }}</h3>
                <ul>
                  <li>{{ $t("Li Hong lou")}}</li>
                </ul>
                <h3>{{ $t('修士課程') }}</h3>
                <h5>M2</h5>
                <ul>
                  <li>{{ $t("池澤 太一")}}</li>
                  <li>{{ $t("上田 邦裕") }}</li>
                  <li>{{ $t("上田 真之介") }}</li>
                  <li>{{ $t("竹内 悠馬") }}</li>
                  <li>{{ $t("土井 俊彦") }}</li>
                  <li>{{ $t("福重 寛隆") }}</li>
                </ul>
                <h5>M1</h5>
                <ul>
                  <li>{{ $t("石井 大雅") }}</li>
                  <li>{{ $t("深澤 実緒") }}</li>
                  <li>{{ $t("三角 颯") }}</li>
                  <li>{{ $t("村田 裕乙") }}</li>
                  <li>{{ $t("安井 丞") }}</li>
                </ul>
              </b-col>
              <b-col md="6">
                <h3>{{ $t('学部生') }}</h3>
                <h5>B4</h5>
                <ul>
                  <li>金田 孝尚</li>
                  <li>小池 秀</li>
                  <li>チョウ ブンゴ</li>
                  <li>福村 悠人</li>
                  <li>藤島 遼太</li>
                  <li>細井 海都</li>
                  <li>細井 悠生</li>
                  <li>大久保 優哉</li>
                </ul>
              </b-col>
            </b-row>
          </b-container>
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
export default {
  head() {
    return {
      title: `${this.$t('メンバー')} | ${this.$t('鬼頭研究室')}`
    }
  },
  components: {
    CardMenuColumn
  }
};
</script>
<style scoped>
/* ジャンボトロン */
.jumbotron {
  background-image: url("~assets/people.jpg");
  background-size: cover;
  background-position: center 60%;
  color: #fff;
}

/* 大見出しデザイン */
h2 {
     position: relative;
     padding:0 0 0.5em 0.7em;
     border-bottom: 1px solid black;
}
h2::after {
     position: absolute;
     top: 0.2em;
     left:0;
     content: '';
     width: 5px;
     height:1em;
     background-color: #446689;
}

/* 小見出しデザイン */
h3 {
	position: relative;
  padding: 0 .3em 0 1.25em;
  font-size: 1.25rem;
  margin-top: 1em;
}
h3::after {
	position: absolute;
	top: .4em;
	left: .3em;
	content: '';
	width: 9px;
	height: 9px;
	background-color: #ff5a5f;
	-webkit-transform: rotate(45deg);
	transform: rotate(45deg);
	z-index: 2;
}
</style>