<template>
  <div class="top-header">
    <div class="logo"></div>
    <div class="info">
      <div class="title">{{ title }}</div>
      <div class="desc">{{ desc }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'top-header',
  props: {
    title: {
      type: String
    },
    desc: {
      type: String
    }
  }
}
</script>

<style scoped lang="less">
.top-header {
  display: flex;
  background-color: rgb(36, 31, 32);;
  padding: 24px;
  .logo {
    width: 120px;
    height: 120px;
  }

  .info {
    display: flex;
    flex-direction: column;
    margin-left: 24px;
    .title {
      font-size: 60px;
    }
    .desc {
      font-size:36px;
    }
  }
}
</style>
