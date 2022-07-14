  <template>
  <q-layout view="lHh LpR fFf">
    <q-header>
      <q-toolbar class="bg-teal text-white q-pa-sm q-pa-xl">
        <q-icon name="account_balance" size="50px" color="amber"/>
        <div class="text-h6 text-weight-bold q-pl-sm">GreenHouse<span class="text-weight-thin"> UBL</span></div>
        <div v-if="$q.screen.xl || $q.screen.md || $q.screen.lg">
          <q-btn label="Home" size="medium" flat no-caps :to="{ name: 'data' }" class="q-ml-xl q-pl-xl"/>
          <q-btn label="Services" size="medium" flat no-caps :to="{ name: 'history' }"/>
          <q-btn label="Blog" size="medium" flat no-caps/>
          <q-btn label="About Us" size="medium" flat no-caps/>
          <q-btn label="Portofolio" size="medium" flat no-caps/>
        </div>
        <q-space />
        <q-btn v-if="$q.screen.lg || $q.screen.md " label="Consultasion" size="medium" flat no-caps class="bg-amber q-mr-xl"/>
        <q-btn v-if="$q.screen.xs || $q.screen.sm " flat icon="menu" round @click="drawer = !drawer" />
      </q-toolbar>
    </q-header>
    <q-drawer
        class="bg-grey-2"
        v-model="drawer"
        overlay
        side="right"
        :width="200"
        :breakpoint="500"
      >
        <q-scroll-area class="fit">
          <q-list padding class="menu-list">
            <q-item clickable v-ripple :to="{ name: 'utamaLayout' }">
              <q-item-section avatar>
                <q-icon name="home" />
              </q-item-section>
              <q-item-section>
                Home
              </q-item-section>
            </q-item>

            <q-item active clickable v-ripple :to="{ name: 'history' }">
              <q-item-section avatar>
                <q-icon name="message" />
              </q-item-section>
              <q-item-section>
                History
              </q-item-section>
            </q-item>

            <q-item active clickable v-ripple :to="{ name: 'tentang'}">
              <q-item-section avatar>
                <q-icon name="smartphone" />
              </q-item-section>
              <q-item-section>
                Tentang
              </q-item-section>
            </q-item>

            <q-item active clickable v-ripple :to="{ name: 'logout'}">
              <q-item-section avatar>
                <q-icon name="lock" />
              </q-item-section>
              <q-item-section>
                LogOut
              </q-item-section>
            </q-item>

          </q-list>
        </q-scroll-area>
      </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'UserLayout',

  data () {
    const drawer = ref(false)
    const leftDrawerOpen = ref(false)

    return {
      image: null,
      age: null,
      leftDrawerOpen,
      card: ref(false),
      drawer
    }
  }
})
</script>
