<!--
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ]
  }
  ```
-->
<template>
  <div>

  <div ref="popoverRef" v-bind:class="{'hidden': !popoverShow, 'block': popoverShow}" class=" fixed  inset-0 overflow-y-auto bg-emerald-600 border-0 mr-3 block z-50 ">


    <div class="flex">
     <ad-preview-modal @close="popoverShow = !popoverShow" :show="true"></ad-preview-modal>
    </div>


  </div>
    <section class="relative" style="padding-top: 10rem; padding-bottom: 10rem">
      <div class="container mx-auto py-3">
        <div class="w-full mb-8">
          <h1 class="text-5xl font-bold text-left">Create Advertisement</h1>
        </div>
      </div>
      <div
        class="container mx-auto py-3 px-3 rounded-lg	"
        style="background-color:rgb(243 243 243);"
      >
        <div class="flex w-full flex-wrap py-5">
          <div class="w-4/12 md:w-4/12 lg:w-4/12 sm:w-full p-3">
            <span class="block uppercase text-blueGray-600 text-lg font-bold">
              Target Content
            </span>
          </div>
          <div
            class="w-8/12 md:w-8/12 lg:w-8/12 sm:w-full px-4 bg-white rounded-lg	 py-4"
          >
            <div class=" flex w-full py-4 ">
              <div class="w-2/12 md:w-2/12 lg:w-2/12 sm:w-full ">
                <label for="">Content Type: </label>
              </div>
              <div class="w-2/12 md:w-2/12 lg:w-2/12 sm:w-full ml-3">
                <div class="  space-y-4">
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input
                        id="comments"
                        name="comments"
                        type="checkbox"
                        class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                    </div>
                    <div class="ml-3 text-sm">
                      <label for="comments" class="font-medium text-gray-700"
                        >Video</label
                      >
                    </div>
                  </div>
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input
                        id="candidates"
                        name="candidates"
                        type="checkbox"
                        class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                    </div>
                    <div class="ml-3 text-sm">
                      <label for="candidates" class="font-medium text-gray-700"
                        >Audio</label
                      >
                    </div>
                  </div>
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input
                        id="offers"
                        name="offers"
                        type="checkbox"
                        class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                    </div>
                    <div class="ml-3 text-sm">
                      <label for="offers" class="font-medium text-gray-700"
                        >Image</label
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class=" flex w-full py-4 mt-3">
              <div class="w-2/12 md:w-2/12 lg:w-2/12 sm:w-full ">
                <label for="">Duration (m:s): </label>
              </div>
              <div class="w-2/12 md:w-2/12 lg:w-2/12 sm:w-full ml-3">
                <div class="mb-3 ">
                  <input
                    style="max-width: 65px; max-height:51px;"
                    type="number"
                    class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>
              <div class="w-2/12 md:w-2/12 lg:w-2/12 sm:w-full ">
                <span class="text-4xl">:</span>
              </div>
              <div class="w-2/12 md:w-2/12 lg:w-2/12 sm:w-full ">
                <div class="mb-3 ">
                  <input
                    style="max-width: 65px; max-height:51px;"
                    type="number"
                    class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>
            </div>

            <div class=" flex w-full py-4">
              <div class="flex flex-wrap  w-3/12 md:w-3/12 lg:w-3/12 sm:w-full">
                Content category:
              </div>
              <div class="flex w-full flex-wrap">
                <div class="flex  ">
                  <div class="flex flex-1 items-center h-5">
                    <input
                      id="comments"
                      name="comments"
                      type="checkbox"
                      class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                  </div>
                  <div class=" text-sm ml-1">
                    <label for="comments" class="font-medium text-gray-700"
                      >Technology:
                    </label>
                  </div>
                </div>
                <div class="flex  ml-3">
                  <div class="flex flex-1 items-center h-5">
                    <input
                      id="comments"
                      name="comments"
                      type="checkbox"
                      class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                  </div>
                  <div class=" text-sm ml-1">
                    <label for="comments" class="font-medium text-gray-700"
                      >Digital Arts</label
                    >
                  </div>
                </div>
                <div class="flex  ml-3">
                  <div class="flex flex-1 items-center h-5">
                    <input
                      id="comments"
                      name="comments"
                      type="checkbox"
                      class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                  </div>
                  <div class=" text-sm ml-1">
                    <label for="comments" class="font-medium text-gray-700"
                      >Games</label
                    >
                  </div>
                </div>
                <div class="flex  ml-3">
                  <div class="flex flex-1 items-center h-5">
                    <input
                      id="comments"
                      name="comments"
                      type="checkbox"
                      class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                  </div>
                  <div class=" text-sm ml-1">
                    <label for="comments" class="font-medium text-gray-700"
                      >Music</label
                    >
                  </div>
                </div>
                <div class="flex  ml-3">
                  <div class="flex flex-1 items-center h-5">
                    <input
                      id="comments"
                      name="comments"
                      type="checkbox"
                      class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                  </div>
                  <div class=" text-sm ml-1">
                    <label for="comments" class="font-medium text-gray-700"
                      >Film</label
                    >
                  </div>
                </div>

                <div class="flex  ml-3">
                  <div class="flex flex-1 items-center h-5">
                    <input
                      id="comments"
                      name="comments"
                      type="checkbox"
                      class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                  </div>
                  <div class=" text-sm ml-1">
                    <label for="comments" class="font-medium text-gray-700"
                      >Pop</label
                    >
                  </div>
                </div>
                <div class="flex  ml-3">
                  <div class="flex flex-1 items-center h-5">
                    <input
                      id="comments"
                      name="comments"
                      type="checkbox"
                      class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                  </div>
                  <div class=" text-sm ml-1">
                    <label for="comments" class="font-medium text-gray-700"
                      >Rock</label
                    >
                  </div>
                </div>
                <div class="flex  ml-3">
                  <div class="flex flex-1 items-center h-5">
                    <input
                      id="comments"
                      name="comments"
                      type="checkbox"
                      class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                  </div>
                  <div class=" text-sm ml-1">
                    <label for="comments" class="font-medium text-gray-700"
                      >Sports</label
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hidden sm:block" aria-hidden="true">
          <div class="py-5">
            <div
              class="border-t   "
              style="border-width:1px; border-color: rgb(234 234 234);"
            />
          </div>
        </div>

        <div class="flex w-full rounded-lg	flex-wrap">
          <div class="md:w-4/12 lg:w-4/12 sm:w-full p-3">
            <span class="block uppercase text-blueGray-600 text-lg font-bold">
              Target Audience
            </span>
          </div>
          <div
            class=" md:w-8/12 lg:w-8/12 sm:w-64 px-4 bg-white rounded-lg	 py-4"
          >
            <div class="py-3">
              <label for="country" style="margin-right: 20px;">
                <span>Region:</span>
              </label>
              <select
                id="country"
                name="country"
                class="form-select mt-1  rounded"
              >
                <option value="">Chose Region</option>
                <option value="Afganistan">Afghanistan</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="American Samoa">American Samoa</option>
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
                <option value="Anguilla">Anguilla</option>
                <option value="Antigua & Barbuda">Antigua & Barbuda</option>
                <option value="Argentina">Argentina</option>
                <option value="Armenia">Armenia</option>
                <option value="Aruba">Aruba</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Azerbaijan">Azerbaijan</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Barbados">Barbados</option>
                <option value="Belarus">Belarus</option>
                <option value="Belgium">Belgium</option>
                <option value="Belize">Belize</option>
                <option value="Benin">Benin</option>
                <option value="Bermuda">Bermuda</option>
                <option value="Bhutan">Bhutan</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Bonaire">Bonaire</option>
                <option value="Bosnia & Herzegovina"
                  >Bosnia & Herzegovina</option
                >
                <option value="Botswana">Botswana</option>
                <option value="Brazil">Brazil</option>
                <option value="British Indian Ocean Ter"
                  >British Indian Ocean Ter</option
                >
                <option value="Brunei">Brunei</option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burundi">Burundi</option>
                <option value="Cambodia">Cambodia</option>
                <option value="Cameroon">Cameroon</option>
                <option value="Canada">Canada</option>
                <option value="Canary Islands">Canary Islands</option>
                <option value="Cape Verde">Cape Verde</option>
                <option value="Cayman Islands">Cayman Islands</option>
                <option value="Central African Republic"
                  >Central African Republic</option
                >
                <option value="Chad">Chad</option>
                <option value="Channel Islands">Channel Islands</option>
                <option value="Chile">Chile</option>
                <option value="China">China</option>
                <option value="Christmas Island">Christmas Island</option>
                <option value="Cocos Island">Cocos Island</option>
                <option value="Colombia">Colombia</option>
                <option value="Comoros">Comoros</option>
                <option value="Congo">Congo</option>
                <option value="Cook Islands">Cook Islands</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Cote DIvoire">Cote DIvoire</option>
                <option value="Croatia">Croatia</option>
                <option value="Cuba">Cuba</option>
                <option value="Curaco">Curacao</option>
                <option value="Cyprus">Cyprus</option>
                <option value="Czech Republic">Czech Republic</option>
                <option value="Denmark">Denmark</option>
                <option value="Djibouti">Djibouti</option>
                <option value="Dominica">Dominica</option>
                <option value="Dominican Republic">Dominican Republic</option>
                <option value="East Timor">East Timor</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Egypt">Egypt</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Equatorial Guinea">Equatorial Guinea</option>
                <option value="Eritrea">Eritrea</option>
                <option value="Estonia">Estonia</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="Falkland Islands">Falkland Islands</option>
                <option value="Faroe Islands">Faroe Islands</option>
                <option value="Fiji">Fiji</option>
                <option value="Finland">Finland</option>
                <option value="France">France</option>
                <option value="French Guiana">French Guiana</option>
                <option value="French Polynesia">French Polynesia</option>
                <option value="French Southern Ter">French Southern Ter</option>
                <option value="Gabon">Gabon</option>
                <option value="Gambia">Gambia</option>
                <option value="Georgia">Georgia</option>
                <option value="Germany">Germany</option>
                <option value="Ghana">Ghana</option>
                <option value="Gibraltar">Gibraltar</option>
                <option value="Great Britain">Great Britain</option>
                <option value="Greece">Greece</option>
                <option value="Greenland">Greenland</option>
                <option value="Grenada">Grenada</option>
                <option value="Guadeloupe">Guadeloupe</option>
                <option value="Guam">Guam</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Guinea">Guinea</option>
                <option value="Guyana">Guyana</option>
                <option value="Haiti">Haiti</option>
                <option value="Hawaii">Hawaii</option>
                <option value="Honduras">Honduras</option>
                <option value="Hong Kong">Hong Kong</option>
                <option value="Hungary">Hungary</option>
                <option value="Iceland">Iceland</option>
                <option value="Indonesia">Indonesia</option>
                <option value="India">India</option>
                <option value="Iran">Iran</option>
                <option value="Iraq">Iraq</option>
                <option value="Ireland">Ireland</option>
                <option value="Isle of Man">Isle of Man</option>
                <option value="Israel">Israel</option>
                <option value="Italy">Italy</option>
                <option value="Jamaica">Jamaica</option>
                <option value="Japan">Japan</option>
                <option value="Jordan">Jordan</option>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="Kenya">Kenya</option>
                <option value="Kiribati">Kiribati</option>
                <option value="Korea North">Korea North</option>
                <option value="Korea Sout">Korea South</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Kyrgyzstan">Kyrgyzstan</option>
                <option value="Laos">Laos</option>
                <option value="Latvia">Latvia</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Liberia">Liberia</option>
                <option value="Libya">Libya</option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Lithuania">Lithuania</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Macau">Macau</option>
                <option value="Macedonia">Macedonia</option>
                <option value="Madagascar">Madagascar</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Malawi">Malawi</option>
                <option value="Maldives">Maldives</option>
                <option value="Mali">Mali</option>
                <option value="Malta">Malta</option>
                <option value="Marshall Islands">Marshall Islands</option>
                <option value="Martinique">Martinique</option>
                <option value="Mauritania">Mauritania</option>
                <option value="Mauritius">Mauritius</option>
                <option value="Mayotte">Mayotte</option>
                <option value="Mexico">Mexico</option>
                <option value="Midway Islands">Midway Islands</option>
                <option value="Moldova">Moldova</option>
                <option value="Monaco">Monaco</option>
                <option value="Mongolia">Mongolia</option>
                <option value="Montserrat">Montserrat</option>
                <option value="Morocco">Morocco</option>
                <option value="Mozambique">Mozambique</option>
                <option value="Myanmar">Myanmar</option>
                <option value="Nambia">Nambia</option>
                <option value="Nauru">Nauru</option>
                <option value="Nepal">Nepal</option>
                <option value="Netherland Antilles">Netherland Antilles</option>
                <option value="Netherlands"
                  >Netherlands (Holland, Europe)</option
                >
                <option value="Nevis">Nevis</option>
                <option value="New Caledonia">New Caledonia</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Nicaragua">Nicaragua</option>
                <option value="Niger">Niger</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Niue">Niue</option>
                <option value="Norfolk Island">Norfolk Island</option>
                <option value="Norway">Norway</option>
                <option value="Oman">Oman</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Palau Island">Palau Island</option>
                <option value="Palestine">Palestine</option>
                <option value="Panama">Panama</option>
                <option value="Papua New Guinea">Papua New Guinea</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Peru">Peru</option>
                <option value="Phillipines">Philippines</option>
                <option value="Pitcairn Island">Pitcairn Island</option>
                <option value="Poland">Poland</option>
                <option value="Portugal">Portugal</option>
                <option value="Puerto Rico">Puerto Rico</option>
                <option value="Qatar">Qatar</option>
                <option value="Republic of Montenegro"
                  >Republic of Montenegro</option
                >
                <option value="Republic of Serbia">Republic of Serbia</option>
                <option value="Reunion">Reunion</option>
                <option value="Romania">Romania</option>
                <option value="Russia">Russia</option>
                <option value="Rwanda">Rwanda</option>
                <option value="St Barthelemy">St Barthelemy</option>
                <option value="St Eustatius">St Eustatius</option>
                <option value="St Helena">St Helena</option>
                <option value="St Kitts-Nevis">St Kitts-Nevis</option>
                <option value="St Lucia">St Lucia</option>
                <option value="St Maarten">St Maarten</option>
                <option value="St Pierre & Miquelon"
                  >St Pierre & Miquelon</option
                >
                <option value="St Vincent & Grenadines"
                  >St Vincent & Grenadines</option
                >
                <option value="Saipan">Saipan</option>
                <option value="Samoa">Samoa</option>
                <option value="Samoa American">Samoa American</option>
                <option value="San Marino">San Marino</option>
                <option value="Sao Tome & Principe">Sao Tome & Principe</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Senegal">Senegal</option>
                <option value="Seychelles">Seychelles</option>
                <option value="Sierra Leone">Sierra Leone</option>
                <option value="Singapore">Singapore</option>
                <option value="Slovakia">Slovakia</option>
                <option value="Slovenia">Slovenia</option>
                <option value="Solomon Islands">Solomon Islands</option>
                <option value="Somalia">Somalia</option>
                <option value="South Africa">South Africa</option>
                <option value="Spain">Spain</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Sudan">Sudan</option>
                <option value="Suriname">Suriname</option>
                <option value="Swaziland">Swaziland</option>
                <option value="Sweden">Sweden</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Syria">Syria</option>
                <option value="Tahiti">Tahiti</option>
                <option value="Taiwan">Taiwan</option>
                <option value="Tajikistan">Tajikistan</option>
                <option value="Tanzania">Tanzania</option>
                <option value="Thailand">Thailand</option>
                <option value="Togo">Togo</option>
                <option value="Tokelau">Tokelau</option>
                <option value="Tonga">Tonga</option>
                <option value="Trinidad & Tobago">Trinidad & Tobago</option>
                <option value="Tunisia">Tunisia</option>
                <option value="Turkey">Turkey</option>
                <option value="Turkmenistan">Turkmenistan</option>
                <option value="Turks & Caicos Is">Turks & Caicos Is</option>
                <option value="Tuvalu">Tuvalu</option>
                <option value="Uganda">Uganda</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Ukraine">Ukraine</option>
                <option value="United Arab Erimates"
                  >United Arab Emirates</option
                >
                <option value="United States of America"
                  >United States of America</option
                >
                <option value="Uraguay">Uruguay</option>
                <option value="Uzbekistan">Uzbekistan</option>
                <option value="Vanuatu">Vanuatu</option>
                <option value="Vatican City State">Vatican City State</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Vietnam">Vietnam</option>
                <option value="Virgin Islands (Brit)"
                  >Virgin Islands (Brit)</option
                >
                <option value="Virgin Islands (USA)"
                  >Virgin Islands (USA)</option
                >
                <option value="Wake Island">Wake Island</option>
                <option value="Wallis & Futana Is">Wallis & Futana Is</option>
                <option value="Yemen">Yemen</option>
                <option value="Zaire">Zaire</option>
                <option value="Zambia">Zambia</option>
                <option value="Zimbabwe">Zimbabwe</option>
              </select>
            </div>

            <div class="py-3">
              <label for="country" style="margin-right: 20px;">
                <span>Activity level:</span>
              </label>
              <select
                id="country"
                name="country"
                class="form-select mt-1  rounded"
              >
                <option value="">Chose Activity level</option>
                <option value="high">Highly active users</option>
                <option value="low">Low active users</option>
                <option value="all">All</option>
              </select>
            </div>
          </div>
        </div>

        <div class="hidden sm:block" aria-hidden="true">
          <div class="py-5">
            <div
              class="border-t   "
              style="border-width:1px; border-color: rgb(234 234 234);"
            />
          </div>
        </div>

        <div class="flex w-full rounded-lg flex-wrap	">
          <div class="w-4/12 md:w-4/12 lg:w-4/12 sm:w-full p-3">
            <span class="block uppercase text-blueGray-600 text-lg font-bold">
              Media
            </span>
          </div>
          <div
            class="w-8/12 md:w-8/12 lg:w-8/12 sm:w-full px-4 bg-white rounded-lg	 py-4"
          >
            <div class="grid grid-cols-3 gap-6">
              <div class="col-span-3 sm:col-span-2">
                <label
                  for="company_website"
                  class="block text-sm font-medium text-gray-700"
                >
                  Website
                </label>
                <div class="mt-1 flex rounded-md shadow-sm">
                  <span
                    class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"
                  >
                    http://
                  </span>
                  <input
                    type="text"
                    name="company_website"
                    id="company_website"
                    class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                    placeholder="www.example.com"
                  />
                </div>
              </div>
            </div>
            <div class="py-3">
              <label class="block text-sm font-medium text-gray-700">
                File
              </label>
              <div
                class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
              >
                <div class="space-y-1 text-center">
                  <svg
                    class="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div class="flex text-sm text-gray-600">
                    <label
                      for="file-upload"
                      class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        class="sr-only"
                      />
                    </label>
                    <p class="pl-1">or drag and drop</p>
                  </div>
                  <p class="text-xs text-gray-500">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="hidden sm:block" aria-hidden="true">
          <div class="py-5">
            <div
              class="border-t   "
              style="border-width:1px; border-color: rgb(234 234 234);"
            />
          </div>
        </div>

        <div class="flex w-full rounded-lg flex-wrap	">
          <div class="w-4/12 md:w-4/12 lg:w-4/12 sm:w-full p-3">
            <span class="block uppercase text-blueGray-600 text-lg font-bold">
              Money
            </span>
          </div>
          <div
            class="w-8/12 md:w-8/12 lg:w-8/12 sm:w-full px-4 bg-white rounded-lg	 py-4"
          >
            <div class="flex  w-full">
              <div class="py-3 flex items-center">
                <label for="country" style="margin-right: 20px;">
                  <span>Artoken per view:</span>
                </label>
                <input
                  type="number"
                  class="rounded"
                  placeholder="$"
                  style="max-width:94px;"
                />
              </div>
              <div
                class="py-3 flex ml-5 items-center"
                style="margin-left:40px;"
              >
                <label for="country" style="margin-right: 20px;">
                  <span>Total budget:</span>
                </label>
                <input
                  type="number"
                  class="rounded"
                  placeholder="$"
                  style="max-width:94px;"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="hidden sm:block" aria-hidden="true">
          <div class="py-5">
            <div
              class="border-t   "
              style="border-width:1px; border-color: rgb(234 234 234);"
            />
          </div>
        </div>

        <div
          class="flex w-full rounded-lg	center-items-center justify-center py-4"
        >
          <div class="w-4/12 md:w-4/12 lg:w-4/12  p-3">
            <button
              class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
              type="button"
              @click="onContinue"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </section>

  </div>


</template>

<script>
import AdPreviewModal from "@/components/AdForm/AdPreviewModal.vue";
// import Modal from "@/components/AdForm/Modal.vue";
import { createPopper } from "@popperjs/core";

export default {
 data() {
    return {
      popoverShow: false
    }
  },
    components: {
      AdPreviewModal

  },

  methods: {

    onContinue (){

      if(this.popoverShow){
        this.popoverShow = false;
      } else {
        this.popoverShow = true;
        createPopper(this.$refs.btnRef, this.$refs.popoverRef, {
          placement: "left"
        });
      }


    }

    }

};
</script>
