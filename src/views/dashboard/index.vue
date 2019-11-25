<template>
    <div class="flex nowrap">
        <sidebar></sidebar>
        <div class="flex dashboard-container">
          <router-view></router-view>
        </div>
    </div>
</template>
<style lang="scss">
  .dashboard-container {
    width: calc(100% - 58px);
    background: #fcfcfc;
  }
</style>
<script>
import sidebar from '@/components/sidebar.vue';

export default {
  components: {
    sidebar,
  },
};
</script>
