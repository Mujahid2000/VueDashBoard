<template>
  <div class="flex py-5  bg-[#101010]">
    <Sidebar />
    <div class="flex-1">
     
      <Content />
    </div>
  </div>
</template>

<script>
import Content from './components/Content.vue';

import Sidebar from './components/Sidebar.vue';



export default {
  name: 'Dashboard',
  components: {
    Sidebar,
    
    Content
  }
}
</script>
