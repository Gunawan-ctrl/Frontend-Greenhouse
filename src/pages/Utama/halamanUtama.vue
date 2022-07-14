<template>
  <q-page class="padding">
    <div class="row bg-teal">
      <div class="col-md-4 offset-md-1 col-xs-12">
        <div class="q-pa-xl text-h2 text-weight-bold text-white">Apa Itu Green House?</div>
        <div class="q-pl-xl q-pr-xl text-grey-5">Sebuah bangunan yang dibentuk untuk menghindari dan merawat tanaman terhadap berbagai macam cuaca. Manfaat yang utama sebagai sarana yang digunakan untuk melakukan pembibitan tanaman</div>
        <div class="q-gutter-lg q-pa-xl row">
          <div class="col-md-5 col-xs-5">
            <q-btn label="Get-Started" no-caps class="bg-amber full-width" :to="{ name: 'login' }"/>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="q-mt-xl q-pa-lg">
          <q-img src="https://img.freepik.com/free-vector/large-greenhouse-with-plants_1308-18087.jpg?w=2000" />
        </div>
      </div>
    </div>
    <!-- <div class="miring q-pa-xl bg-teal" ></div> -->
    <div class="row bg-teal">
      <div class="col-md-6 offset-md-1 q-pa-xl col-xs-12">
        <q-img src="https://id-test-11.slatic.net/p/fa3cee507ebcc30317261d16cc81a95e.jpg"/>
      </div>
      <div class="col-md-4 q-mt-xl col-xs-12 q-pl-md q-pr-md">
        <div class="text-h3" v-if="$q.screen">Apa Itu Bayam Merah?</div>
        <div class="text-justify q-mt-lg">Bayam merah atau biasa disebut bayam Cina merupakan salah satu tanaman bernilai ekonomis tinggi. Meski bayam merah memiliki rasa yang sama dengan bayam hijau, kandungan zat warnanya menjadikan manfaat bayam merah sebagai antioksidan lebih unggul. Sama seperti bayam pada umumnya, tumbuhan bernama Latin Amaranthus dubius ini dianggap memiliki segudang manfaat. Walau disebut bayam merah, bayam jenis ini memiliki daun dan batang berwarna merah keunguan. Bayam merah ini dapat tumbuh di daerah beriklim panas yang banyak terpapar sinar matahari, termasuk di Indonesia.</div>
        <div class="text-justify q-mt-lg">Bayam hijau maupun merah memiliki kandungan nutrisi yang baik bagi tubuh. Nutrisi yang terkandung di dalam sayuran ini termasuk karbohidrat kompleks, serat, air, serta vitamin A, B, C, K, folat, dan mineral seperti kalium, zat besi, kalsium dan natrium. Selain itu, bayam merah memiliki kandungan anthocyanin yang memberikan warna merah keunguan pada sayuran ini. Zat ini memiliki sifat antioksidan.</div>
        <div class="text-justify q-mt-lg">Ada pun manfaat yang berguna bagi manusia: 1. Menjaga kesehatan pembuluh darah, karena memiliki kandungan nitrat oksida, 2. Memiliki sifat antikanker, kandungan antioksidan tinggi bisa menghambat pertumbuhan sel kanker, 3. Membantu mengontrol kadar kolesterol dan gula darah</div>
      </div>
    </div>

    <div class="row bg-teal">
      <div class="col-md-12 q-mt-xl col-xs-12 q-pl-md q-pr-md">
        <div class="text-h3" v-if="$q.screen">Image</div>
        <div class="text-justify q-mt-lg">Bayam merah atau biasa disebut bayam Cina merupakan salah satu tanaman bernilai ekonomis tinggi. Meski bayam merah memiliki rasa yang sama dengan bayam hijau, kandungan zat warnanya menjadikan manfaat bayam merah sebagai antioksidan lebih unggul. Sama seperti bayam pada umumnya, tumbuhan bernama Latin Amaranthus dubius ini dianggap memiliki segudang manfaat. Walau disebut bayam merah, bayam jenis ini memiliki daun dan batang berwarna merah keunguan. Bayam merah ini dapat tumbuh di daerah beriklim panas yang banyak terpapar sinar matahari, termasuk di Indonesia.</div>
        </div>
    </div>
  </q-page>
</template>
<script>
</script>
<style scoped>
  .miring {
    -ms-transform: skewY(3deg); /* IE 9 */
    -webkit-transform: skewY(3deg); /* Safari */
    transform:rotate(2deg);
    margin-top: -3%;
    position: relative;
    z-index: -1;
  }
</style>
