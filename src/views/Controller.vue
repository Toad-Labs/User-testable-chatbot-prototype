<template>
    <div>
        <h1>Controller page</h1>

        <chat-window :userId="1" />

    </div>
</template>

<script>
import ChatWindow from './../components/ChatWindow.vue'

export default {
  components : {
    ChatWindow,
  },
  setup() {

  }
}
</script>
