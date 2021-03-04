<template>
  <div>
    <div class="tw-h-screen tw-my-10 tw-flex tw-flex-row tw-items-stretch">
      <!-- List of conversations -->
      <!-- TODO: Pass in messages and the user id -->
      <chat-window-list />

      <!-- List of messages -->
      <!-- TODO: Pass in messages and the user id -->
      <chat-window-messages :userId="userId" />
    </div>

  </div>
</template>

<script>
import ChatWindowList from './../components/ChatWindowList.vue'
import ChatWindowMessages from './../components/ChatWindowMessages.vue'

export default {
  components : {
    ChatWindowList,
    ChatWindowMessages,
  },
  props: {
    userId: {
      type: Number,
      required: true
    }
  },
  setup (props) {




  }
}
</script>
