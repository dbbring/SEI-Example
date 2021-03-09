<template>
  <v-app>
      <Header />
      <Sample-Layout/>
  </v-app>
</template>

<script>
import Header from './components/Header';
import SampleLayout from './components/SampleLayout';

export default {
  name: 'App',

  components: {
    Header,
    SampleLayout
  },

  data: () => ({
    //
  }),
};
</script>
