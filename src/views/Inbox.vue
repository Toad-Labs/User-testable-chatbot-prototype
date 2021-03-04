<template>
    <div>

      <chat-window :userId="0" />

    </div>
</template>

<script>
import ChatWindow from './../components/ChatWindow.vue'
// import { ref } from 'vue';
//import * as Ably from "ably";

export default {
  components : {
    ChatWindow,
  },
  setup() {

  }
}
</script>
