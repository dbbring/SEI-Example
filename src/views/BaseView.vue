<template>
  <v-app>
    <Header />
    <Sample-Layout />
  </v-app>
</template>

<script>
import Header from '../components/Header';
import SampleLayout from '../components/SampleLayout/SampleLayout';

export default {
  name: 'Base-View',

  components: {
    Header,
    SampleLayout,
  },

  data: () => ({
    //
  }),
};
</script>
