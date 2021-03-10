<template>
  <v-main class="grey lighten-3">
    <v-container>
      <v-row class="mt-5">
        <Side-Bar
          :col-size="2"
          :menu-items="menuItems"
          @item-change="changeMenu"
        />
        <v-col>
          <v-sheet min-height="70vh" rounded="lg">
            <!-- 
                TODO: Get rid of hard code here and dynamically set component
              -->
            <div class="pt-2" v-if="currentMenuIndex === 0">
              <Todos />
            </div>
            <div class="pt-2" v-else-if="currentMenuIndex === 1">
              <Albums />
            </div>
            <div class="pt-2" v-else-if="currentMenuIndex === 2">
              <Users />
            </div>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import axios from 'axios';

import SideBar from '../SideBar';
import Albums from './Albums';
import Todos from './Todos';
import Users from './Users';

export default {
  name: 'SampleLayout',

  components: {
    SideBar,
    Albums,
    Todos,
    Users,
  },

  data: () => ({
    currentMenuIndex: 0,
    menuItems: ['Todos', 'Albums', 'Users'],
  }),

  methods: {
    changeMenu(newIndex) {
      this.currentMenuIndex = newIndex;
    },
  },

  created() {
    if (!this.$store.state.todos.length) {
      axios.get('https://jsonplaceholder.typicode.com/todos').then((res) => {
        res.data.forEach((todo) => this.$store.commit('pushTodo', todo));
      });
    }

    if (!this.$store.state.users.length) {
      axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
        res.data.forEach((user) => this.$store.commit('pushUser', user));
      });
    }

    if (!this.$store.state.albums.length) {
      axios.get('https://jsonplaceholder.typicode.com/albums').then((res) => {
        res.data.forEach((album) => this.$store.commit('pushAlbum', album));
      });
    }
  },
};
</script>
