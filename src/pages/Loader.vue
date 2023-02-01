<template>
  <div class="loader_page">
    <p>Loading ...</p>
  </div>
</template>
<script setup></script>
<style scoped>
.loader_page {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 99999 !important;
  font-size: 30px;
  color: #fff;
  display: none;
}
</style>
