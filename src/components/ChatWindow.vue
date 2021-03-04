<template>
  <div>
    <div class="tw-my-10 tw-flex tw-flex-row tw-items-stretch" style="height: 50vh; min-height: 25rem;">
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
