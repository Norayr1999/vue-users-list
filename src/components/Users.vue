<template>
  <div>
    <h1>Users list</h1>
    <h3 v-show="usersLoading">Loading...</h3>
    <b-container class="bv-example-row">
  <b-row>
    <b-col v-for="user in users" :key="user.id">
      <b-card
        :title="user.name"
        img-src="https://image.shutterstock.com/image-vector/user-avatar-icon-button-profile-260nw-1517550290.jpg"
        img-alt="Image"
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>
          <p>{{ user.email }}</p>
          <p>{{ user.username }}</p>
        </b-card-text>

        <b-button target="_blank" :href="'http://' + user.website" variant="primary">{{ user.website }}</b-button>
      </b-card>
    </b-col>
  </b-row>
</b-container>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Users',
  computed: {
    ...mapState([
      'users',
      'usersLoading',
    ]),
  },
  mounted() {
    this.loadUsers()
  },
  methods: {
    ...mapActions([
      'loadUsers',
    ]),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 40px 0 0;
}

</style>
