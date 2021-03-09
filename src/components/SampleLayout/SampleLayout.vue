<template>
    <v-main class="grey lighten-3">
      <v-container>
        <v-row class="mt-5">
          <Side-Bar :col-size="2" :menu-items="menuItems" @item-change="changeMenu"/>
          <v-col>
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
              <!-- 
                TODO: Get rid of hard code here and dynamically set component
              -->
              <div v-if="currentMenuIndex === 0">
                <Todos />
              </div>
              <div v-else-if="currentMenuIndex === 1">
                <Albums />
              </div>
              <div v-else-if="currentMenuIndex === 2">
                <Users />
              </div>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
</template>

<script>
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
      menuItems: [
        'Todos',
        'Albums',
        'Users'
      ],
    }),

    methods: {
      changeMenu(newIndex) {
        this.currentMenuIndex = newIndex;
      }
    },
  }
</script>
