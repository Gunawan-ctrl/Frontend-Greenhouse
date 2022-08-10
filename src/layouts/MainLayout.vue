<template>
  <q-layout view="lHh Lpr lFf">
    <q-header unelevated class="bg-teal-10 text-white">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <q-space />
        <q-toolbar class="text-weight-bold text-h6">Green House Aplication</q-toolbar>
        <q-btn flat round>
          <q-avatar>
            <img src="~assets/profile-man.jpg">
          </q-avatar>
          <q-menu touch-position>
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup>
          <q-item-section>{{ dataUser.user.USERNAME }} </q-item-section>
            </q-item>
            <q-item clickable v-close-popup :to="{name: 'login'}">
              <q-item-section>Logout</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="250"
      :breekpoint="400"
    >
      <q-scroll-area class="fit bg-teal-10 text-white">
        <q-item class="justify-center text-center q-mt-none">
            <q-item-section avatar>
              <q-item-section>
            <q-img class="absolute-top" src="https://png.pngtree.com/thumb_back/fw800/background/20220204/pngtree-scene-of-window-on-dark-green-house-shines-with-sunlight-image_984999.jpg" style="height: 155px">
          <div class="absolute-bottom absolute-top">
            <q-avatar size="80px" class="q-mb-xs">
              <img src="~assets/profile-man.jpg">
            </q-avatar>
            <div class="text-weight-bold text-orange text-subtitle1 q-mt-xs">{{ dataUser.user.USERNAME }}</div>
            <div class="q-mb-xs">Green House Aplication</div>
          </div>
        </q-img>
        </q-item-section>
        </q-item-section>
          </q-item>
        <q-list class="q-pt-xl" style="margin-top: 53px;">

          <q-item style="margin-top: 7px;" clickable active-class="active" v-ripple exact :to="{ name:'dashboardAdmin' }">
            <q-item-section avatar>
              <q-icon name="grid_view " />
            </q-item-section>
            <q-item-section class="text-weight-bold">
              <q-item-label>Dashboard</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable active-class="active" v-ripple :to="{ name:'dataTanaman' }">
            <q-item-section avatar>
              <q-icon name="grass">
              </q-icon>
            </q-item-section>
            <q-item-section class="text-weight-bold">
              Data Tanaman
            </q-item-section>
          </q-item>

          <q-item clickable active-class="active" v-ripple :to="{ name:'dataAlat' }">
            <q-item-section avatar>
              <q-icon name="construction">
              </q-icon>
            </q-item-section>
            <q-item-section class="text-weight-bold">
              Data Alat
            </q-item-section>
          </q-item>

          <!-- <q-item clickable active-class="active" v-ripple exact :to="{ name:'dataKebun' }">
            <q-item-section avatar>
              <q-icon name="local_florist" />
            </q-item-section>
            <q-item-section class="text-weight-bold">
              <q-item-label>Data Kebun</q-item-label>
            </q-item-section>
          </q-item> -->

          <q-item clickable active-class="active" v-ripple exact :to="{ name:'setTanaman' }">
            <q-item-section avatar>
              <q-icon name="spa" />
            </q-item-section>
            <q-item-section class="text-weight-bold">
              <q-item-label>Set Tanaman</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable active-class="active" v-ripple exact :to="{ name:'dataUser' }">
            <q-item-section avatar>
              <q-icon name="person_outline" />
            </q-item-section>
            <q-item-section class="text-weight-bold">
              <q-item-label>Data User</q-item-label>
            </q-item-section>
          </q-item>

          <q-item @click="logout" clickable active-class="active" v-ripple exact>
            <q-item-section avatar>
              <q-icon name="logout" />
            </q-item-section>
            <q-item-section class="text-weight-bold">
              <q-item-label>Logout</q-item-label>
            </q-item-section>
          </q-item>

        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-page-container class="bg-grey">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',

  data () {
    return {
      leftDrawerOpen: false,
      dataUser: this.$q.localStorage.getItem('dataUser')
    }
  },
  methods: {
    logout () {
      this.$q.localStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>
<style scoped>
.active {
  color: black;
  background-color: #fff;
  padding-right: 10px;
}
</style>
