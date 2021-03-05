<template>
  <div class="tw-w-2/3 tw-h-full tw-bg-gray-50 tw-flex tw-flex-col tw-justify-end">
    <!-- Chat log -->
    <div class="my-chat-messages tw-overflow-y-auto">

      <div
        v-for="(message, index) in messages"
        :key="index"
        class="chat-message tw-m-5 tw-rounded-lg tw-flex tw-flex-row tw-flex-nowrap
                 tw-transition-all tw-ease-in tw-duration-75"
        :class="{ 'chat-message--right' : message.userId === 0}">
        <div class="chat-message__avatar-frame tw-mr-5">
          <!-- Robot Avatar -->
          <div v-if="message.userId === 1">
            <svg height='50px' width='50px'  fill="#4D4D4D" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 70 70" enable-background="new 0 0 50 50" xml:space="preserve"><g><path d="M16.3099995,40.1257515c-0.2866001,0.2931976-0.479599,0.6530991-0.5776997,1.0391998h2.9460011v-1.7013016h-0.7639008   C17.3157196,39.4636497,16.7458,39.6990509,16.3099995,40.1257515z"></path><rect x="19.769186" y="42.2558479" width="2.592" height="1.7131"></rect><rect x="19.769186" y="39.4636497" width="2.592" height="1.7013"></rect><rect x="23.4520969" y="42.2558479" width="2.5929999" height="1.7131"></rect><path d="M31.5827999,39.4636497h-0.7639008v1.7013016h2.9473019   C33.5195007,40.1901512,32.6380005,39.4636497,31.5827999,39.4636497z"></path><path d="M23.3967209,6.1455498c0.2950783,0.2041001,0.4708786,0.5391002,0.4708786,0.8976002V9.06145h2.2798004v-2.0295   c0-0.3541999,0.1725998-0.6866002,0.4613209-0.8910999c0.7563801-0.5342999,1.2080784-1.3999,1.2080784-2.3161001   c0-1.5581-1.2624989-2.8253-2.8146992-2.8253s-2.8146,1.2672-2.8146,2.8253   C22.1875,4.7547498,22.6392002,5.62255,23.3967209,6.1455498z"></path><path d="M35.4201012,13.7084503c0-1.3594007-1.1058006-2.4652004-2.4652023-2.4652004c-5.8923988,0-10.5248985,0-15.9161777,0   c-1.3530006,0-2.4545212,1.1057997-2.4545212,2.4652004v2.2115993h20.8359013V13.7084503z"></path><path d="M21.2702999,29.6843491c0-2.1700993-1.7663994-3.9358997-3.9365005-3.9358997   c-2.1774988,0-3.9491987,1.7658005-3.9491987,3.9358997c0,2.1775017,1.7716999,3.9491997,3.9491987,3.9491997   C19.5039005,33.6335487,21.2702999,31.8618507,21.2702999,29.6843491z M15.8639002,30.2019501   c-0.6953001,0-1.2628002-0.5674992-1.2628002-1.2626991c0-0.6952019,0.5675001-1.2630005,1.2628002-1.2630005   c0.6952009,0,1.2628202,0.5677986,1.2628202,1.2630005C17.1267204,29.6344509,16.5591011,30.2019501,15.8639002,30.2019501z"></path><path d="M1.0000006,28.5864506v9.9294987c0,0.6189995,0.5039001,1.1229019,1.1228999,1.1229019h2.2649002V27.4636497H2.1229005   C1.5039006,27.4636497,1.0000006,27.9675503,1.0000006,28.5864506z"></path><path d="M17.9144001,43.9689484h0.7639008v-1.7130966h-2.9482002   C15.9757204,43.2371483,16.8581009,43.9689484,17.9144001,43.9689484z"></path><path d="M47.8770981,27.4636497h-2.2649002v12.1752014h2.2649002C48.4960976,39.6388512,49,39.1349487,49,38.5159492v-9.9294987   C49,27.9675503,48.4960976,27.4636497,47.8770981,27.4636497z"></path><rect x="23.4520969" y="39.4636497" width="2.5929999" height="1.7013"></rect><path d="M32.6790009,25.7484493c-2.1786003,0-3.9502811,1.7658005-3.9502811,3.9358997   c0,2.1775017,1.7716808,3.9491997,3.9502811,3.9491997c2.1700974,0,3.9353981-1.771698,3.9353981-3.9491997   C36.614399,27.5142498,34.8490982,25.7484493,32.6790009,25.7484493z M31.2080994,30.2019501   c-0.6952991,0-1.2628002-0.5674992-1.2628002-1.2626991c0-0.6952019,0.5675011-1.2630005,1.2628002-1.2630005   c0.6953011,0,1.2628021,0.5677986,1.2628021,1.2630005C32.4709015,29.6344509,31.9034004,30.2019501,31.2080994,30.2019501z"></path><path d="M30.8188992,43.9689484h0.7639008c0.5986996,0,1.1676006-0.2354965,1.6043987-0.6626968   c0.288002-0.2946014,0.4818001-0.6587029,0.5792999-1.0503998h-2.9475994V43.9689484z"></path><rect x="27.1360073" y="42.2558479" width="2.592" height="1.7131"></rect><path d="M39.6175995,18.1019497H10.3825006c-2.1019001,0-3.8129001,1.7103996-3.8129001,3.8122997v23.2740021   c0,2.1018982,1.711,3.8122978,3.8129001,3.8122978h29.2350998c2.1018982,0,3.8128014-1.7103996,3.8128014-3.8122978V21.9142494   C43.4304008,19.8123493,41.7194977,18.1019497,39.6175995,18.1019497z M12.2937202,29.6843491   c0-2.7720985,2.2605801-5.0268993,5.0400791-5.0268993c2.7720013,0,5.027401,2.2548008,5.027401,5.0268993   c0,2.7789001-2.2553997,5.0401001-5.027401,5.0401001C14.5543003,34.7244492,12.2937202,32.4632492,12.2937202,29.6843491z    M33.9584999,44.077549c-0.6498985,0.6366005-1.4903984,0.9822998-2.3757,0.9822998H17.9144001   c-1.8472996,0-3.3493996-1.502697-3.3493996-3.3493996c0-0.8778992,0.3462-1.7141991,0.9737196-2.3554993   c0.6487799-0.6366005,1.4893808-0.9822998,2.37568-0.9822998h13.6683998c1.8472996,0,3.3494015,1.4973984,3.3494015,3.3377991   C34.9322014,42.59515,34.5859985,43.4357491,33.9584999,44.077549z M32.6790009,34.7244492   c-2.779501,0-5.0412006-2.2612-5.0412006-5.0401001c0-2.7720985,2.2616997-5.0268993,5.0412006-5.0268993   c2.7719994,0,5.0262985,2.2548008,5.0262985,5.0268993C37.7052994,32.4632492,35.4510002,34.7244492,32.6790009,34.7244492z"></path><rect x="27.1360073" y="39.4636497" width="2.592" height="1.7013"></rect></g></svg>
          </div>
          <!-- Person Avatar -->
          <div v-else-if="message.userId === 0">
            <svg height='50px' width='50px' class=" tw-text-gray-400 tw-fill-current"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve"><g><path d="M24,21.334V25v1v1H8v-1v-1v-3.666C8,18.393,10.691,16,14,16h4C21.309,16,24,18.393,24,21.334z M16,15c2.757,0,5-2.243,5-5   s-2.243-5-5-5s-5,2.243-5,5S13.243,15,16,15z"></path></g></svg>
          </div>
        </div>
        <div class="chat-message-annimation tw-transition-all tw-p-5 tw-bg-white tw-w-full tw-text-2xl tw-rounded-xl"
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

    const { error, messages, messageBoxContent, sendMessageHandler } = useChatMessages(props.userId)

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

    // Cache the chat message block
    var chatMessagesContainer =  document.querySelector('.my-chat-messages');

    // Response adapter for the received message
    var receivedMessage = {
      text: message.data.text,
      userId: message.data.userId,
    }

    // Add the message to the message stack
    state.messages.push(receivedMessage);

    // Scroll to the bottom of the container
    setTimeout(function() {
      chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
    }, 50);


    //console.log('scroll top:', chatMessagesContainer.scrollTop , 'scroll height', chatMessagesContainer.scrollHeight  );

  });



  return {
    ...toRefs(state),
    sendMessageHandler,
  }

}
</script>

<style>
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


/*
 * Animation
 */
@keyframes flyIn {
  0% {
    transform: scale(0.85) translateY(10%);
    opacity: 0;
  }
  100% {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
}

.chat-message-annimation {
  animation-duration: 0.3s;
  animation-name: flyIn;
}

</style>
