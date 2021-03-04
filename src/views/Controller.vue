<template>
    <div>
        <h1>Controller page</h1>

        <div>
          <ul>
            <li
              v-for="message in messages"
              :key=message.id>
              <div class="">
                {{ message.text }}
              </div>
            </li>
          </ul>

        <form

          @submit.prevent>
          <input
            type="text"
            v-model="textToSend" />
          <button
            v-on:click="sendMessage">
            Send
          </button>
        </form>

      </div>


    </div>
</template>

<script>
import { ref } from 'vue';
import * as Ably from "ably";

export default {
  setup() {

    const messages = ref([]);
    const textToSend = ref("");



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
        channel.publish('message', { text: textToSend.value, user: 'meto'});
        console.log('Controller: Send Message send Event');
      }

    }


    return {
      messages,
      textToSend,
      sendMessage,
    }

  }
}
</script>
