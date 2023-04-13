<template>
  <div class="big-screen">
    <container :width="3840" :height="2160" class="own-container">
      <div class="header">
        <top-header title="外卖业务数据大盘" desc="Delivery Overview of Business Data"/>
      </div>
      <div class="separator"></div>
      <div class="center">
        <div class="left">
          <div class="left-item-1">
            <total-user v-bind="totalUser"/>
          </div>
          <div class="left-item-2">555</div>
          <div class="left-item-3">666</div>
          <div class="left-item-4">777</div>
          <div class="left-item-5">888</div>
          <div class="left-item-6">999</div>
        </div>
        <div class="right">
          <div class="right-top-1"></div>
          <div class="right-top-2"></div>
          <div class="right-bottom">
            <div class="right-left">
              <div class="right-left-1">111</div>
              <div class="right-left-2">222</div>
              <div class="right-left-3">333</div>
              <div class="right-left-4">4444</div>
            </div>
            <div class="right-right">
              <div class="right-right-1">111</div>
              <div class="right-right-2">222</div>
            </div>
          </div>
        </div>
      </div>
    </container>
  </div>
</template>

<script>
import Loading from '@/components/Loading'
import Container from '@/components/container'
import TopHeader from './components/top-header'
import TotalUser from './components/total-user'

export default {
  name: 'big-screen',
  components: {
    Loading,
    Container,
    TopHeader,
    TotalUser
  },
  data() {
    return {
      totalUser: {
        todayUser: 1000,
        growthLastDay: 10,
        growthLastMonth: 15
      }
    }
  }
}
</script>

<style scoped lang="less">
.big-screen {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgb(29, 29, 29);
  color: #fff;
  font-size: 48px;

  .own-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .header {
    width: 100%;
    height: 167px;
    background-color: yellow;
  }

  .separator {
    width: 100%;
    height: 16px;
    background-color: rgb(92,89,88)
  }

  .center {
    display: flex;
    width: 100%;
    flex: 1;
    background-color: violet;

    .left {
      display: flex;
      flex: 0 0 860px;
      flex-direction: column;
      height: 100%;
      background-color: red;
      justify-content: space-between;

      .left-item-1 {
        height: 300px;
        background-color: red;
      }

      .left-item-2 {
        height: 320px;
        background-color: yellow;
      }

      .left-item-3 {
        height: 280px;
        background-color: blue;
      }

      .left-item-4 {
        height: 230px;
        background-color: green;
      }

      .left-item-5 {
        height: 360px;
        background-color: aquamarine;
      }

      .left-item-6 {
        height: 360px;
        background-color: purple;
      }
    }

    .right {
      display: flex;
      flex-direction: column;
      flex: 1;
      background-color: purple;

      .right-top-1 {
        width: 100%;
        height: 206px;
        background-color: pink;
      }

      .right-top-2 {
        width: 100%;
        height: 48px;
        background-color: seagreen;
      }
      .right-bottom {
        display: flex;
        flex: 1;
        .right-left {
          display: flex;
          flex: 0 0 1917px;
          flex-direction: column;
          width: 1917px;
          justify-content: space-between;
          background-color: #fff;
          .right-left-1 {
            height: 999px;
            background-color: red;
          }
          .right-left-2 {
            height: 80px;
            background-color: yellow;
          }
          .right-left-3 {
            height: 350px;
            background-color: blue;
          }
          .right-left-4 {
            height: 220px;
            background-color: violet;
          }
        }
        .right-right {
          display: flex;
          flex: 1;
          flex-direction: column;
          margin-left: 10px;
          background-color: #fff;
          .right-right-1 {
            width: 100%;
            height: 999px;
            background-color: red;
          }
          .right-right-2 {
            width: 100%;
            flex: 1;
            background-color: blue;
          }
        }
      }
    }
  }
}</style>
