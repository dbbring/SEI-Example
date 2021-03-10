<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="headline grey lighten-2">
          Hold up There Partner
        </v-card-title>

        <v-card-text>
          This is only demo. This functionality isnt exactly completed. Well to
          be honest, its not even started. For the 14th coding exercise, we
          might finally see this feature implemented.... stay tuned....
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="$emit('close')">
            Ight Man ✌️
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  name: 'WarningDialog',

  props: {
    dialog: {
      required: true,
      type: Boolean,
    },
  },

  data: () => ({
    //
  }),
};
</script>
