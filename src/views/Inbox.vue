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

/*
    const textToSend = ref([]);

    const messages = ref([]);


    var ably = new Ably.Realtime('BiSQUw.FNx0Ig:b_cUpgQ-rBUTDFBz');
    var channel = ably.channels.get('emerald-helper');

    channel.subscribe('message', function(message) {
      console.log("Message", message);
      messages.value.push({text: message.data.text });
    });

    function sendMessage () {

      // To Do: check if message is blank or something later
      // Publish a message to the gut-cam channel
      if (textToSend.value.length > 0) {
        channel.publish('message', { text: textToSend.value, user: 'other guy'});
        console.log('Controller: Send Message send Event');
      }

    }

    return {
      textToSend,
      messages,
      sendMessage
    }

    */

  }
}
</script>
