<template>
  <q-page>
    <div class="row items-start q-pa-md">
      <div class="col-md-3 col-xs-6 q-mt-sm row justify-center">
        <q-card class="my-card">
          <q-card-section>
            <div class="text-h6 text-center">Sensor Suhu</div>
          </q-card-section>
          <q-card-section class="text-weight-bold text-h6 text-white text-center">
            26°C
          </q-card-section>
        </q-card>
      </div>

        <div class="col-md-3 col-xs-6 q-mt-sm row justify-center">
          <q-card class="my-card bg-blue-grey">
            <q-card-section>
              <div class="text-h6 text-center text-teal-11">Sensor Cahaya</div>
            </q-card-section>
            <q-card-section class="text-weight-bold text-h6 text-white text-center">
              27Cd
            </q-card-section>
          </q-card>
        </div>

        <div class="col-md-3 col-xs-6 q-mt-sm row justify-center">
          <q-card class="my-card bg-teal-10">
            <q-card-section>
              <div class="text-h6 text-center text-red">Ketinggian Air</div>
            </q-card-section>
            <q-card-section class="text-weight-bold text-h6 text-white text-center">
              28Cm
            </q-card-section>
          </q-card>
        </div>

        <div class="col-md-3 col-xs-6 q-mt-sm row justify-center">
          <q-card class="my-card bg-brown">
            <q-card-section>
              <div class="text-h6 text-center text-orange">Sensor Soil</div>
            </q-card-section>
            <q-card-section class="text-weight-bold text-h6 text-white text-center">
              29RH
            </q-card-section>
          </q-card>
        </div>
      </div>

    <div>
    <div class="row q-col-gutter-sm q-ml-md q-mr-lg">
      <div class="col-md-6 col-xs-12">
        <q-card>
          <apex-line />
        </q-card>
      </div>
      <div class="col-md-6 col-xs-12">
        <q-card>
          <apex-area />
        </q-card>
      </div>
    </div>
  </div>
  </q-page>
</template>

<script>
import { defineComponent, defineAsyncComponent } from 'vue'

const ApexLine = defineAsyncComponent(() =>
  import('components/charts/ApexLine.vue')
)
const ApexArea = defineAsyncComponent(() =>
  import('components/charts/ApexArea.vue')
)
export default defineComponent({
  name: 'PageIndex',
  components: {
    ApexLine,
    ApexArea
  }
})
</script>
<style>
.my-card {
  width: 100%;
  max-width: 250px;
  background: linear-gradient(to right,#ff0f7b, #f89b29);
}
</style>
