<template>
    <div>
        <sidebar></sidebar>
        <div>
          <router-view></router-view>
        </div>
    </div>
</template>
<script>
import sidebar from '@/components/sidebar.vue';

export default {
  components: {
    sidebar,
  },
};
</script>
