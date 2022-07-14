<template>
  <div class="q-pa-md row items-start q-gutter-md q-mx-md">
    <q-card class="my-card bg-teal-10">
      <q-img src="https://docplayer.info/docs-images/112/202456977/images/5-1.jpg" style="height: 162px;">
      </q-img>
      <q-card-section>
        <div class="row no-wrap items-center text-center">
          <div class="col text-h6 ellipsis text-white">
            Data Alat
          </div>
        </div>
        <div class="text-caption text-grey">
          Detail data alat greenhouse website
        </div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <div class="text-subtitle1 text-center text-orange">
          56 Alat
        </div>
      </q-card-section>
      <q-card-actions>
        <q-btn class="text-white" flat round icon="construction">
        </q-btn>
        <q-btn flat color="white">
          Detail
        </q-btn>
      </q-card-actions>
    </q-card>

    <q-card class="my-card1 bg-teal-10">
      <q-img src="https://media.istockphoto.com/vectors/houseplants-vector-art-vector-id1223763096" style="height: 162px;">
      </q-img>
      <q-card-section>
        <div class="row no-wrap items-center text-center">
          <div class="col text-h6 ellipsis text-white">
            Data Tanaman
          </div>
        </div>
        <div class="text-caption text-grey">
          Detail tanaman greenhouse website
        </div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <div class="text-subtitle1 text-center text-orange">
          56 Alat
        </div>
      </q-card-section>
      <q-card-actions>
        <q-btn class="text-white" flat round icon="grass">
        </q-btn>
        <q-btn flat color="white">
          Detail
        </q-btn>
      </q-card-actions>
    </q-card>

    <q-card class="my-card2 bg-teal-10">
      <q-img src="https://img.freepik.com/free-vector/smart-farm-smart-greenhouse-illustration_1284-59322.jpg?t=st=1657692865~exp=1657693465~hmac=295017b272650959b84c478176ce292fb47972d170f9bb83f9b20cacfb02263f&w=826" style="height: 162px;">
      </q-img>
      <q-card-section>
        <div class="row no-wrap items-center text-center">
          <div class="col text-h6 ellipsis text-white">
            Data Kebun
          </div>
        </div>
        <div class="text-caption text-grey">
          Details kebun greenhouse website ..
        </div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <div class="text-subtitle1 text-center text-orange">
          56 Alat
        </div>
      </q-card-section>
      <q-card-actions>
        <q-btn class="text-white" flat round icon="local_florist">
        </q-btn>
        <q-btn flat color="white">
          Detail
        </q-btn>
      </q-card-actions>
    </q-card>

    <q-card class="my-card3 bg-teal-10">
      <q-img src="https://www.konde.co/wp-content/uploads/2021/11/gender-4.jpg" style="height: 162px;">
      </q-img>
      <q-card-section>
        <div class="row no-wrap items-center text-center">
          <div class="col text-h6 ellipsis text-white">
            Data User
          </div>
        </div>
        <div class="text-caption text-grey">
          Detail data user greenhouse website
        </div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <div class="text-subtitle1 text-center text-orange">
          56 Alat
        </div>
      </q-card-section>
      <q-card-actions>
        <q-btn class="text-white" flat round icon="person_outline">
        </q-btn>
        <q-btn flat color="white">
          Detail
        </q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>
<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      stars: ref(4)
    }
  }
}
</script>
