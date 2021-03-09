<template>
      <v-col :cols="colSize">
        <v-sheet rounded="lg">
          <v-list color="transparent">
            <v-list-item
              v-for="(menuItem, key) in menuItems"
              :key="key"
              @click="$emit('item-change', key);"
              link
            >
              <v-list-item-content>
                <v-list-item-title>
                  {{ menuItem }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-sheet>
      </v-col>
</template>

<script>
  export default {
    name: 'SideBar',

    props: {
      colSize: {
        required: true,
        type: Number,
      },
      menuItems: {
        required: true,
        type: Array
      }
    },

    data: () => ({
      // emit clicked index
    })
  }
</script>
