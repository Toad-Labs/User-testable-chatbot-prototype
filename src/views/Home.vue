<template>
    <div>

      <!-- Notification -->
      <div
        class="tw-my-20 tw-p-10 tw-mx-auto tw-w-2/3 tw-shadow-lg tw-rounded-md
         tw-border tw-border-gray-900 tw-border-t-2 tw-bg-gray-50">
        <div class="tw-text-center">
          <p class="tw-text-blue-800 tw-text-4xl" >You have <span class=" tw-font-bold">1</span> new notification</p>
          <p class="tw-text-black tw-text-xl tw-mb-10" >Action is required pertaining to your <span class=" tw-font-bold">EI Application</span>.</p>
           <router-link
            to="/inbox"
            tag="li"
            class=" tw-bg-blue-800 tw-px-10 tw-py-2 tw-rounded-lg tw-no-underline
              hover:tw-no-underline hover:tw-bg-blue-900">
            <span class="tw-text-white ">View action required</span>
          </router-link>
        </div>
      </div>

      <!-- Dashboard -->
      <div
        class="">
        <!-- Header -->
        <div class="tw-pt-5 tw-pb-1 tw-px-5 tw-bg-blue-600 tw-flex tw-flex-row tw-justify-between tw-items-center tw-rounded-t-xl">
          <p class="tw-text-white tw-font-semibold">
            Your benefits and services dashboard
          </p>
          <p class="tw-underline tw-text-white tw-text-2xl tw-cursor-pointer">
            Manage my benefits and services
          </p>
        </div>

        <!-- Card body -->
        <div class="tw-bg-gray-100 tw-p-10">

          <!-- Nested card -->
          <div class="tw-p-5 tw-bg-white tw-mb-10 tw-shadow-lg tw-rounded-sm">
            <div class="tw-mb-5 tw-font-semibold" style="border-bottom: 1px solid black">
              Current benefits and services
            </div>
            <div class="tw-mt-10">
              <div class="tw-py-10 tw-flex tw-justify-center">

                <div class="tw-mr-5 tw-w-2/5 tw-py-12 tw-px-5 tw-bg-gray-200 tw-flex tw-flex-row tw-justify-center tw-flex-nowrap tw-content-center">
                  <div class="tw-h-32 tw-w-32 tw-bg-gray-800 tw-rounded-full tw-text-white tw-p-4">
                    <svg class="tw-h-20 tw-w-20 tw-ml-2 tw-fill-current" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 90 90" style="enable-background:new 0 0 90 90;" xml:space="preserve"><g><path d="M59.686523,53.810516V10.333954L29.794922,23.70993c-0.127991,0.057617-0.267578,0.086914-0.408203,0.086914   c-2.707092,0-4.90918,2.202209-4.90918,4.908203v40.811584c1.205078-1.217773,2.857422-1.990295,4.6875-2.047913   L59.686523,53.810516z"></path><path d="M24.477539,74.373016v0.383789c0,2.707031,2.202087,4.909241,4.90918,4.909241h36.135742v-1.949219H30.253845   c-0.552734,0-1-0.447327-1-1c0-0.552795,0.447266-1,1-1h35.268616v-1.948303H30.253845c-0.552734,0-1-0.447266-1-1   c0-0.552673,0.447266-1,1-1h35.268616v-2.303711H29.386719C26.679626,69.464813,24.477539,71.667023,24.477539,74.373016z"></path><path d="M61.686523,24.358429v30.100525c0,0.394592-0.231506,0.751953-0.591797,0.913086L34.069336,67.464813h31.453125V24.358429   H61.686523z"></path></g></svg>
                  </div>
                  <div class="tw-ml-5 tw-w-2/3 tw-text-center">
                    <p class="tw-gray-800 tw-font-semibold">
                      Canada Learning Bond
                    </p>
                    <div
                      class="tw-inline-block tw-bg-blue-800 tw-px-10 tw-py-2 tw-rounded-lg tw-no-underline
                        hover:tw-no-underline hover:tw-bg-blue-900 tw-cursor-pointer">
                      <span class="tw-text-white tw-text-2xl">More details</span>
                    </div>
                  </div>
                </div>


                <div class="tw-mr-5 tw-w-2/5 tw-py-12 tw-px-5 tw-bg-gray-200 tw-flex tw-flex-row tw-justify-center tw-flex-nowrap tw-content-center">
                  <div class="tw-h-32 tw-w-32 tw-bg-gray-800 tw-rounded-full tw-text-white tw-p-4">
                    <svg class="tw-h-20 tw-w-20 tw-ml-2 tw-mt-2 tw-fill-current" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"><path d="M66.7855453,22.3498592V9.645174H33.4941826V22.346386L5.3603854,22.3433704v24.3393192h33.9453659v-6.2360954v-3.0651741  h3.0651741h15.5374146h3.0651741v3.0651741v6.2360954h33.9453697V22.3528728L66.7855453,22.3498592z M36.5593567,12.7103481  h27.1610146v9.6395111l-27.1610146-0.002964V12.7103481z"></path><polygon points="60.9735146,55.9839592 60.9735146,59.0491333 57.9083405,59.0491333 42.3709259,59.0491333 39.3057518,59.0491333   39.3057518,55.9839592 39.3057518,49.7478638 5.3603854,49.7478638 5.3603854,88.2162018 94.9188843,88.2162018   94.9188843,49.7478638 60.9735146,49.7478638 "></polygon><polygon points="57.9083405,49.7478638 57.9083405,46.6826897 57.9083405,40.4465942 42.3709259,40.4465942 42.3709259,46.6826897   42.3709259,49.7478638 42.3709259,55.9839592 57.9083405,55.9839592 "></polygon></svg>
                  </div>
                  <div class="tw-ml-5 tw-w-2/3 tw-text-center">
                    <p class="tw-gray-800 tw-font-semibold">
                      Employment Insurance
                    </p>
                    <div
                      class="tw-inline-block tw-bg-blue-800 tw-px-10 tw-py-2 tw-rounded-lg tw-no-underline
                        hover:tw-no-underline hover:tw-bg-blue-900 tw-cursor-pointer">
                      <span class="tw-text-white tw-text-2xl">More details</span>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>

           <!-- Nested card -->
           <div class="tw-p-5 tw-bg-white tw-mb-10 tw-shadow-lg tw-rounded-sm">
            <div class="tw-mb-5 tw-font-semibold" style="border-bottom: 1px solid black">
              Service history
            </div>
            <div class="tw-mt-10">
              <table class="table tw-text-2xl ">
                <thead>
                  <tr class="tw-text-white tw-bg-gray-800">
                    <th class="">Date</th>
                    <th class="">Channel</th>
                    <th class="">Location</th>
                    <th class="">Service requested</th>
                    <th class="">Outcome</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="active">
                    <td>01/08/2018</td>
                    <td>Web</td>
                    <td>Online</td>
                    <td>Employment Insurance application - maternity benefits</td>
                    <td class="tw-text-green-600">Application accepted</td>
                  </tr>

                  <tr class="active">
                    <td>23/06/2017</td>
                    <td>In person</td>
                    <td>Oakville, ON, Service Canada Centre</td>
                    <td>Passport application</td>
                    <td class="tw-text-green-600">Application accepted</td>
                  </tr>

                 <tr class="active">
                    <td>16/11/2016</td>
                    <td>Web</td>
                    <td>Online</td>
                    <td>Newborn registraion service - Social Insurance Number</td>
                    <td class="tw-text-green-600">Application accepted</td>
                  </tr>

                  <tr class="active">
                    <td>05/12/2015</td>
                    <td>Web</td>
                    <td>Online</td>
                    <td>Employment Insurance application - maternity benefits</td>
                    <td class="tw-text-green-600">Application accepted</td>
                  </tr>

                  <tr class="active">
                    <td>15/04/2007</td>
                    <td>Web</td>
                    <td>Online</td>
                    <td>Canada Student Loan</td>
                    <td class="tw-text-green-600">Application accepted</td>
                  </tr>

                  <tr class="active">
                    <td>03/10/2005</td>
                    <td>In person</td>
                    <td>Oakville, ON, Service Canada Centre</td>
                    <td>Social Insurance Number</td>
                    <td class="tw-text-green-600">Application accepted</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>


        </div>

      </div>


    </div>
</template>
