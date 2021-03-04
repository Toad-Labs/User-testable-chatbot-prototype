<template>
  <div class="tw-w-2/3 tw-h-full tw-bg-gray-50 tw-flex tw-flex-col tw-justify-end">
    <!-- Chat log -->
    <div class=" tw-overflow-y-auto">

      <div
        v-for="(message, index) in messages"
        :key="index"
        class="chat-message tw-m-5 tw-rounded-lg tw-flex tw-flex-row tw-flex-nowrap"
        :class="{ 'chat-message--right' : message.userId === 0}">
        <div class="chat-message__avatar-frame tw-mr-5">
          <!-- Robot Avatar -->
          <div v-if="message.userId === 1">
            <svg height='50px' width='50px'  fill="#4D4D4D" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 90 90" style="enable-background:new 0 0 90 90;" xml:space="preserve"><path d="M62.457031,47.260254c0.552246,0,1-0.447754,1-1v-8.205078h6.772461c0.552246,0,1-0.447754,1-1V22.563965  c0-0.552246-0.447754-1-1-1h-6.772461v-7.593262c0-0.552246-0.447754-1-1-1H27.542969c-0.552246,0-1,0.447754-1,1v7.593262  h-6.772461c-0.552246,0-1,0.447754-1,1v14.491211c0,0.552246,0.447754,1,1,1h6.772461v8.205078c0,0.552246,0.447754,1,1,1h8.658691  v8.947754H22.177246c-0.552246,0-1,0.447754-1,1v18.821289c0,0.552246,0.447754,1,1,1h45.645508c0.552246,0,1-0.447754,1-1  V57.208008c0-0.552246-0.447754-1-1-1H53.79834v-8.947754H62.457031z M63.457031,23.563965h5.772461v12.491211h-5.772461V23.563965z   M26.542969,36.055176h-5.772461V23.563965h5.772461V36.055176z M66.822754,75.029297H23.177246v-4.056152h16.692383  c0.552246,0,1-0.447754,1-1v-1.925293h8.260742v1.925293c0,0.552246,0.447754,1,1,1h16.692383V75.029297z M66.822754,58.208008  v10.765137H51.130371v-1.925293c0-0.552246-0.447754-1-1-1H39.869629c-0.552246,0-1,0.447754-1,1v1.925293H23.177246V58.208008  H66.822754z M38.20166,56.208008v-8.947754h13.59668v8.947754H38.20166z M28.542969,45.260254V14.970703h32.914063v30.289551  H28.542969z"></path><path d="M54.229004,23.678223h-5.437012c-0.552246,0-1,0.447754-1,1v5.4375c0,0.552246,0.447754,1,1,1h5.437012  c0.552246,0,1-0.447754,1-1v-5.4375C55.229004,24.125977,54.78125,23.678223,54.229004,23.678223z M53.229004,29.115723h-3.437012  v-3.4375h3.437012V29.115723z"></path><path d="M42.208008,30.115723v-5.4375c0-0.552246-0.447754-1-1-1h-5.437012c-0.552246,0-1,0.447754-1,1v5.4375  c0,0.552246,0.447754,1,1,1h5.437012C41.760254,31.115723,42.208008,30.667969,42.208008,30.115723z M40.208008,29.115723h-3.437012  v-3.4375h3.437012V29.115723z"></path><path d="M45,35.055176c-2.756836,0-5.181152,1.664551-6.17627,4.240234c-0.199219,0.515137,0.057129,1.094238,0.572266,1.292969  c0.512207,0.199707,1.09375-0.056641,1.292969-0.572266C41.384277,38.217285,43.076172,37.055176,45,37.055176  s3.615723,1.162109,4.311035,2.960938c0.15332,0.396973,0.531738,0.640137,0.932617,0.640137  c0.120117,0,0.242188-0.021973,0.360352-0.067871c0.515137-0.19873,0.771484-0.777832,0.572266-1.292969  C50.181152,36.719727,47.756836,35.055176,45,35.055176z"></path></svg>
          </div>
          <!-- Person Avatar -->
          <div v-else-if="message.userId === 0">
            <svg height='50px' width='50px' class=" tw-text-gray-400 tw-fill-current"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve"><g><path d="M24,21.334V25v1v1H8v-1v-1v-3.666C8,18.393,10.691,16,14,16h4C21.309,16,24,18.393,24,21.334z M16,15c2.757,0,5-2.243,5-5   s-2.243-5-5-5s-5,2.243-5,5S13.243,15,16,15z"></path></g></svg>
          </div>
        </div>
        <div class="tw-p-5 tw-bg-white tw-w-full tw-text-2xl tw-rounded-xl"
        :class="{ 'tw-bg-blue-50' : message.userId === 1}">
          {{ message.text }}
        </div>
      </div>

    </div>

    <!-- Chat form -->
    <form
      @submit.prevent
      class="tw-relative tw-m-2">
      <input
        type="text"
        placeholder="Write something..."
        class="tw-w-full tw-p-10 tw-border-none"
        v-model="messageBoxContent" />
      <button
        type="Submit"
        v-on:click="sendMessageHandler"
        class="tw-absolute tw-inset-y-0 tw-right-0 tw-mt-auto tw-mb-auto tw-mr-7
              tw-h-16 tw-w-16
              tw-border-none tw-bg-gray-200 tw-rounded-full
              hover:tw-bg-green-500 tw-transition-all tw-ease-in tw-duration-75">
        <svg class="tw-w-10 tw-h-10 tw-mt-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" x="0px" y="0px"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.6241 27.7197L28.4247 4.31796C28.6852 3.5362 27.9415 2.79246 27.1597 3.05305L3.68383 10.8784C2.82338 11.1652 2.75851 12.3573 3.58275 12.7358L11.4048 16.3276C11.7364 16.4799 12.1246 16.4395 12.4177 16.2221L23.4003 8.07744L15.6742 19.5454C15.4834 19.8286 15.4503 20.1895 15.5864 20.5027L18.7582 27.802C19.1237 28.6431 20.3341 28.5897 20.6241 27.7197Z" fill="black"></path></svg>
        <span class="sr-only">Send</span>
      </button>
    </form>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue';
import * as Ably from "ably";


export default {
  props: {
    userId: {
      type: Number,
      required: true
    }
  },
  setup (props) {

    console.log('Chat wind user Id', props.userId);

    const { error, messages, messageBoxContent, sendMessageHandler } = useChatMessages(props.userId)

    // Setup reactive references

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



    } */

    return {
      error,
      messages,
      messageBoxContent,
      sendMessageHandler,
    }

  }
}

function useChatMessages(userId) {

  // Setup reactive elements
  const state = reactive({
    error: null,
    messages: [],
    messageBoxContent: '',
  });

  // Setup the Ably channel handler
  var ably = new Ably.Realtime('BiSQUw.FNx0Ig:b_cUpgQ-rBUTDFBz');
  var channel = ably.channels.get('emerald-helper');


  // What happens when the user wants to send a message
  function sendMessageHandler() {
    //console.log('Message to send', state.messageBoxContent);

    // Check if message is blank or something later
    if (state.messageBoxContent.length > 0) {

      var message = {
        text: state.messageBoxContent,
        userId,
      };

      // Publish a message to the messages channel
      channel.publish('message', message);

      // Clear the message text box
      state.messageBoxContent = '';

    };

  }

  // Handler all messages that are posted
  channel.subscribe('message', function(message) {
    console.log("Message received", message);

    var receivedMessage = {
      text: message.data.text,
      userId: message.data.userId,
    }

    // Add the message to the message stack
    state.messages.push(receivedMessage);

  });



  return {
    ...toRefs(state),
    sendMessageHandler,
  }

}
</script>

<style scoped>
/* Handle consecutive messages:
 * Remove extra space
 * Hide avatar
 */

.chat-message:not(.chat-message--right) + .chat-message:not(.chat-message--right), .chat-message--right + .chat-message--right {
	 margin-top: 0;
}
 .chat-message:not(.chat-message--right) + .chat-message:not(.chat-message--right) .chat-message__avatar-frame,
 .chat-message--right + .chat-message--right .chat-message__avatar-frame {
	 visibility: hidden;
	 opacity: 0;
}


</style>
