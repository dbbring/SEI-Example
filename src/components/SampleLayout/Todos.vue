<template>
  <div>
      <v-card 
      class="my-3 mx-2 pl-2"
      elevation="2"
      outlined
      shaped
      v-for="(todo, key) in $store.state.todos"
      :key="key" >
        <v-checkbox
        v-model="todo.completed"
      :label="`Checkbox ${todo.title}`"
    ></v-checkbox>
      </v-card>
  </div>
</template>

<script>

  export default {
    name: 'Todos',

    data: () => ({
     //
    }),
  }
</script>
