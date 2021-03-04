<template>
  <div>
    <div class="tw-w-full tw-bg-blue-900 tw-text-white">
      <!-- List of navigation elements -->
      <ul class="tw-flex tw-flex-row tw-flex-nowrap tw-list-none tw-m-0 tw-pl-10 tw-text-blue-900 tw-pt-4">

        <!-- Home -->
        <router-link
          to="/"
          tag="li"
          class="tw-flex tw-items-stretch tw-justify-center tw-rounded-t-sm
                 hover:tw-bg-gray-100 hover:tw-text-blue-800 hover:tw-no-underline
                   tw-no-underline">
          <div class="tw-px-12 tw-pt-3 tw-pb-5 tw-flex tw-flex-col tw-items-center tw-text-white hover:tw-text-blue-800">
            <svg class="tw-w-10 tw-h-10 tw-fill-current"  fill="#4D4D4D" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" version="1.1" style="shape-rendering:geometricPrecision;text-rendering:geometricPrecision;image-rendering:optimizeQuality;" viewBox="0 0 334.24 308.15" x="0px" y="0px" fill-rule="evenodd" clip-rule="evenodd"><g><path class="fil0" d="M176.35 3.62l71.54 66.4 0 -22.83c0,-3.16 2.59,-5.75 5.75,-5.75l26.09 0c3.2,0 5.78,2.59 5.78,5.75l0 57.77 47 43.6c3.61,3.33 1.18,9.37 -3.68,9.37l-25.64 0c-1.4,0 -2.65,-0.48 -3.67,-1.44 -45.65,-42.36 -83.05,-77.11 -132.38,-122.88l-132.37 122.88c-1.03,0.96 -2.27,1.44 -3.68,1.44l-25.64 0c-4.92,0 -7.32,-6.01 -3.67,-9.37l156.15 -144.94c5.22,-4.82 13.21,-4.82 18.42,0z"></path><path class="fil0" d="M280.59 161.86l0 138.7c0,4.19 -3.42,7.58 -7.57,7.58l-79.79 0 0 -104.02 -52.21 0 0 104.02 -79.79 0c-4.15,0 -7.57,-3.39 -7.57,-7.58l0 -138.7 113.48 -105.33 113.45 105.33z"></path></g></svg>
            <span class="tw-text-sm tw-no-underline" style="text-decoration:none !important;">Home</span>
          </div>
        </router-link>

        <!-- Profile -->
        <li
          class="tw-flex tw-items-stretch tw-justify-center tw-rounded-t-sm
                 hover:tw-bg-gray-100 hover:tw-text-blue-800 hover:tw-no-underline
                   tw-no-underline">
          <div class="tw-px-12 tw-pt-3 tw-pb-5 tw-flex tw-flex-col tw-items-center tw-text-white hover:tw-text-blue-800">
            <svg class="tw-w-10 tw-h-10 tw-fill-current"  xmlns:x="http://ns.adobe.com/Extensibility/1.0/" xmlns:i="http://ns.adobe.com/AdobeIllustrator/10.0/" xmlns:graph="http://ns.adobe.com/Graphs/1.0/" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve"><g><g i:extraneous="self"><g><path d="M5273.1,2400.1v-2c0-2.8-5-4-9.7-4s-9.7,1.3-9.7,4v2c0,1.8,0.7,3.6,2,4.9l5,4.9c0.3,0.3,0.4,0.6,0.4,1v6.4     c0,0.4,0.2,0.7,0.6,0.8l2.9,0.9c0.5,0.1,1-0.2,1-0.8v-7.2c0-0.4,0.2-0.7,0.4-1l5.1-5C5272.4,2403.7,5273.1,2401.9,5273.1,2400.1z      M5263.4,2400c-4.8,0-7.4-1.3-7.5-1.8v0c0.1-0.5,2.7-1.8,7.5-1.8c4.8,0,7.3,1.3,7.5,1.8C5270.7,2398.7,5268.2,2400,5263.4,2400z"></path><path d="M5268.4,2410.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1c0-0.6-0.4-1-1-1H5268.4z"></path><path d="M5272.7,2413.7h-4.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1C5273.7,2414.1,5273.3,2413.7,5272.7,2413.7z"></path><path d="M5272.7,2417h-4.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1C5273.7,2417.5,5273.3,2417,5272.7,2417z"></path></g><g><path d="M70.5,55.5c-6.2-1.9-34.8-1.9-41,0c-11.3,3.4-18.9,14-18.9,25.8v10.4c0,3.2,2.6,5.8,5.8,5.8h67.2c3.2,0,5.8-2.6,5.8-5.8     V81.3C89.4,69.5,81.8,58.9,70.5,55.5z"></path><circle cx="50" cy="25" r="22.5"></circle></g></g></g></svg>
            <span class="tw-text-sm tw-no-underline" style="text-decoration:none !important;">Profile</span>
          </div>
        </li>

        <!-- Notifications -->
        <li
          class="tw-flex tw-items-stretch tw-justify-center tw-rounded-t-sm
                 hover:tw-bg-gray-100 hover:tw-text-blue-800 hover:tw-no-underline
                   tw-no-underline">
          <div class="tw-px-12 tw-pt-3 tw-pb-5 tw-flex tw-flex-col tw-items-center tw-text-white hover:tw-text-blue-800">
            <svg class="tw-w-10 tw-h-10 tw-fill-current" xmlns:x="http://ns.adobe.com/Extensibility/1.0/" xmlns:i="http://ns.adobe.com/AdobeIllustrator/10.0/" xmlns:graph="http://ns.adobe.com/Graphs/1.0/" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve"><g><g i:extraneous="self"><g><path d="M85,67.7l-4.5-5.5c-3.3-4.1-5.2-9.2-5.2-14.5V37.5c0-12.1-8.5-22.3-19.9-24.8V7.9c0-3-2.4-5.4-5.4-5.4s-5.4,2.4-5.4,5.4     v4.8c-11.4,2.5-19.9,12.6-19.9,24.8v10.2c0,5.3-1.8,10.4-5.2,14.5L15,67.7c-3.1,3.8-0.4,9.6,4.5,9.6h60.9     C85.4,77.3,88.1,71.5,85,67.7z"></path><path d="M50,97.5c7.2,0,13-5.8,13-13H37C37,91.7,42.8,97.5,50,97.5z"></path></g></g></g></svg>
            <span class="tw-text-sm tw-no-underline" style="text-decoration:none !important;">Notifications</span>
          </div>
        </li>

        <router-link
          to="/inbox"
          tag="li"
          class="tw-flex tw-items-stretch tw-justify-center tw-rounded-t-sm
                 hover:tw-bg-gray-100 hover:tw-text-blue-800 hover:tw-no-underline
                   tw-no-underline">
          <div class="tw-px-12 tw-pt-3 tw-pb-5 tw-flex tw-flex-col tw-items-center tw-text-white hover:tw-text-blue-800">
            <svg class="tw-w-10 tw-h-10 tw-fill-current" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><path d="M412.055,63.632H99.914L0.013,252.125v196.243h511.975V252.125L412.055,63.632z M390.368,252.125  l-39.264,58.028H154.849l-39.248-58.028H65.76l72.684-141.089h235.113l72.669,141.089H390.368L390.368,252.125z"></path></svg>
            <span class="tw-text-sm tw-no-underline" style="text-decoration:none !important;">Inbox</span>
          </div>
        </router-link>

      </ul>
    </div>
  </div>
</template>

<script>
export default {
  setup() {



  }
}
</script>

<style scoped>
.router-link-active {
  background-color: #fff !important;
  color: rgba(7, 89, 133, var(--tw-text-opacity)) !important;
}

.router-link-active div {
  color: rgba(7, 89, 133, var(--tw-text-opacity)) !important;
}
</style>
