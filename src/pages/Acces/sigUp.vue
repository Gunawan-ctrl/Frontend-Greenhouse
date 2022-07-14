<template>
<q-layout>
    <q-page class="bg-images">
        <div class="row items-center justify-center">
        <div class="col-xs-12 col-sm-8 col-md-4">
            <q-item class="q-mt-xl">
            <q-item-section>
                <q-item-label style="font-family:customfont;" class="text-weight-bolder text-h4 text-green">Green House</q-item-label>
                <q-item-label caption class="text-weight-medium">Halaman register green house</q-item-label>
                <q-separator class="q-mt-sm" color="green" size="6px" />
            </q-item-section>
            </q-item>

            <q-item class="q-mt-xl">
            <q-item-section>
                <q-item-label class="text-weight-bolder text-h5 text-orange-4">Register Form</q-item-label>
                <q-item-label class="text-body3 text-grey-9">Silahkan Daftarkan Identitas Anda</q-item-label>
            </q-item-section>
            </q-item>

            <q-item class="q-mt-auto">
            <q-item-section>
                <q-form
                  @submit="onSubmit"
                >
                <q-input
                    label="username"
                    lazy-rules
                    outlined
                    dense
                    :rules="[ val => val && val.length > 0 || 'Lengkapin data username nya']"
                >
                    <template v-slot:prepend>
                    <q-icon name="person" class="text-green-13" />
                    </template>
                </q-input>

                <q-input
                    label="email"
                    lazy-rules
                    outlined
                    dense
                    :rules="[ val => val && val.length > 0 || 'Lengkapin data email nya']"
                >
                    <template v-slot:prepend>
                    <q-icon name="mail" class="text-green-13" />
                    </template>
                </q-input>

                <q-input dense label="no.tlp" outlined :rules="[ val => val && val.length > 0 || 'Lengkapin data no.tlp nya']" lazy-rules>
                    <template v-slot:append>
                    <q-icon
                        class="cursor-pointer"
                        @click="isPwd = !isPwd"
                    />
                    </template>
                    <template v-slot:prepend>
                    <q-icon name="call" class="text-green-13" />
                    </template>
                </q-input>

                    <q-input dense label="password" outlined :rules="[ val => val && val.length > 0 || 'Lengkapin data password nya']" lazy-rules>
                    <template v-slot:append>
                    <q-icon
                        :name="isPwd ? 'visibility_off' : 'visibility'"
                        class="cursor-pointer"
                        @click="isPwd = !isPwd"
                    />
                    </template>
                    <template v-slot:prepend>
                    <q-icon name="lock" class="text-green-13" />
                    </template>
                </q-input>

                <div align="right">
                    <q-btn flat label="login" class="q-ml-md items-center" unelevated color="grey" :to="{ name: 'login' }   "/>
                    <q-btn type="submit" outline class="items-center" color="green" label="register" unelevated align="right"  :to="{ name: 'login' }"/>
                </div>
              </q-form>
            </q-item-section>
          </q-item>
        </div>
        <div class="col-xs-12 col-sm-7 col-md-8 q-mt-lg" v-if="$q.screen.md">
            <q-item class="justify-center">
            <q-item-section side>
                <img class="shadow-12 q-py-none q-ml-xl" src="~assets/greenhouse.jpg" style="width:85%"/>
            </q-item-section>
            </q-item>
        </div>
        </div>
    </q-page>
</q-layout>
</template>
<script>
export default {
  data () {
    return {
      username: null,
      email: null,
      no_telp: null,
      password: null
    }
  },
  methods: {
    onSubmit () {
      this.$axios.post('Acces/register', {
        username: this.username,
        email: this.email,
        no_telp: this.no_telp,
        password: this.password
      }).then(res => {
        if (res.data.sukses) {
          this.$q.showNotif(res.data.pesan, 'positive')
          this.$router.push({ name: 'Login' })
        } else {
          this.$q.showNotif(res.data.pesan, 'negative')
        }
      })
    }
  }
}
</script>
