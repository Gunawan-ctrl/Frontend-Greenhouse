
   <template>
    <q-layout view="lHh Lpr lFf">
        <q-header elevated class="bg-green-10">
            <q-toolbar>
                <q-btn
                    flat
                    dense
                    round
                    icon="menu"
                    aria-label="Menu"
                    @click="leftDrawerOpen = !leftDrawerOpen"
                ></q-btn>
                <q-space></q-space>
                    <q-toolbar class="text-weight-bold text-h6">
                        Green House Application
                    </q-toolbar>
                <q-btn flat round>
                <q-avatar>
                    <img src="~assets/profile-man.jpg">
                </q-avatar>
                <q-menu touch-position>
                <q-list style="min-width: 100px">
                    <q-item clickable v-close-popup>
                    <q-item-section>Profile</q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup>
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
        :breakpoint="400"
        >
        <q-img class="absolute-top" align="center" src="https://img.freepik.com/free-photo/close-up-hand-farmer-garden-during-morning-time-food-background_1150-7188.jpg?w=740&t=st=1656082415~exp=1656083015~hmac=2ee8c4e48d17744241b85c95922bf2202995794643cabad43c65ee9e0bba6a3a" style="height: 150px">
            <div class="absolute-bottom absolute-top">
                <q-avatar size="80px" class="q-mb-sm">
                <img src="~assets/profile-man.jpg">
                </q-avatar >
                <div class="text-weight-bold text-subtitle1">User</div>
                <div class="text-dark-white">Green House Aplication</div>
            </div>
        </q-img>
        <q-scroll-area class="bg-green-10 text-white" style=" height: calc(100% - 150px); margin-top: 150px;">
            <q-list>
                <q-item clickable active-class="active" v-ripple :to="{ name:'dashboardUser' }">
                <q-item-section avatar>
                    <q-icon name="grid_view">
                    </q-icon>
                </q-item-section>
                <q-item-section class="text-weight-bold">
                    Dashboard
                </q-item-section>
                </q-item>

                <q-item clickable active-class="active" v-ripple :to="{ name:'dataTanamanUser' }">
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
                    <q-icon name="local_florist">
                    </q-icon>
                </q-item-section>
                <q-item-section class="text-weight-bold">
                    Data Alat
                </q-item-section>
                </q-item>

                <q-item clickable active-class="active" v-ripple :to="{ name:'dataKebunUser' }">
                <q-item-section avatar>
                    <q-icon name="local_florist">
                    </q-icon>
                </q-item-section>
                <q-item-section class="text-weight-bold">
                    Data Kebun
                </q-item-section>
                </q-item>

                <q-item clickable active-class="active" v-ripple :to="{ name:'logout' }">
                <q-item-section avatar>
                    <q-icon name="logout">
                    </q-icon>
                </q-item-section>
                <q-item-section class="text-weight-bold">
                    Logout
                </q-item-section>
                </q-item>

            </q-list>
        </q-scroll-area>

        </q-drawer>

        <q-page-container class="bg-grey">
        <router-view></router-view>
        </q-page-container>
    </q-layout>
</template>
<script>
export default {
  name: 'userLayout',

  data () {
    return {
      leftDrawerOpen: false
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
