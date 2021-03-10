<template>
  <v-container>
    <v-row>
      <v-col v-for="(user, key) in $store.state.users" :key="key" cols="4">
        <v-card class="mx-auto" max-width="344" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">
                {{ user.name }}
              </div>
              <v-list-item-title class="headline mb-1">
                {{ user.company.name }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ user.company.catchPhrase }}</v-list-item-subtitle
              >
            </v-list-item-content>

            <v-list-item-avatar tile size="80" color="grey">
              <v-img
                :src="
                  `https://picsum.photos/id/${user.id + randomImageNumber}/80`
                "
              />
            </v-list-item-avatar>
          </v-list-item>

          <v-card-actions>
            <v-btn outlined rounded text :href="`mailto:${user.email}`">
              Contact Me
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Users',

  data: () => ({
    randomImageNumber: 10,
  }),
};
</script>
