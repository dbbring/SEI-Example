<template>
  <div>
    <div v-for="n in 24"
      :key="n">
      <v-checkbox
      :label="`Checkbox ${n}`"
    ></v-checkbox>
    </div>
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
