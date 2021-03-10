<template>
  <div>
    <v-card 
    class="my-3 mx-5"
      elevation="6"
    v-for="(album, key) in $store.state.albums"
      :key="key">
      <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title>{{ album.title }}</v-list-item-title>
        <v-list-item-subtitle>{{ albumAuthor(album.userId) }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    </v-card>
  </div>
</template>

<script>
  export default {
    name: 'Albums',

    data: () => ({
      //
    }),

    methods: {
      albumAuthor(userId) {
        let sortedUsers = [...this.$store.state.users]
        sortedUsers.sort(
          (a, b) => {a.userId > b.userId ? 1 : 0}
          );

          const userIndex = sortedUsers.findIndex((user) => user.id === userId);

          if (userIndex === -1) {
            return '';
          }
          
          return `By ${sortedUsers[userIndex].name}`;
      }
    },
  }
</script>
