<!--<template>-->
<!--  <div class="flex items-center justify-center">-->
<!--    <button type="button"-->
<!--            @click="openModalContactForm"-->
<!--            class="flex w-full h-fit py-3 px-6 justify-center items-center text-center rounded-lg text-primary text-xl bg-primary text-white-->
<!--                  font-semibold transition-all ease-in duration-75 focus:bg-transparent hover:bg-transparent focus:text-primary focus:bg-primary-->
<!--                  focus:bg-opacity-5 hover:text-primary focus:ring-0 focus:outline-0 disabled:bg-primary disabled:bg-opacity-5 disabled:text-primary"-->
<!--    >-->
<!--      ¡Quiero recibir más información!-->
<!--    </button>-->
<!--  </div>-->
<!--  <TransitionRoot appear-->
<!--                  :show="isOpen"-->
<!--                  as="template">-->
<!--    <Dialog as="div"-->
<!--            @close="closeModalContactForm"-->
<!--            class="relative z-20">-->
<!--      <TransitionChild-->
<!--          as="template"-->
<!--          enter="duration-300 ease-out"-->
<!--          enter-from="opacity-0"-->
<!--          enter-to="opacity-100"-->
<!--          leave="duration-200 ease-in"-->
<!--          leave-from="opacity-100"-->
<!--          leave-to="opacity-0"-->
<!--      >-->
<!--        <div class="fixed inset-0 bg-black/25"/>-->
<!--      </TransitionChild>-->

<!--      <div class="fixed inset-0 overflow-y-auto">-->
<!--        <div-->
<!--            class="flex min-h-full items-center justify-center text-center"-->
<!--        >-->
<!--          <TransitionChild-->
<!--              as="template"-->
<!--              enter="duration-300 ease-out"-->
<!--              enter-from="opacity-0 scale-95"-->
<!--              enter-to="opacity-100 scale-100"-->
<!--              leave="duration-200 ease-in"-->
<!--              leave-from="opacity-100 scale-100"-->
<!--              leave-to="opacity-0 scale-95"-->
<!--          >-->
<!--            <DialogPanel-->
<!--                class="w-full max-w-md transform overflow-hidden rounded-2xl bg-secondary text-left align-middle shadow-xl transition-all"-->
<!--            >-->
<!--              <DialogTitle-->
<!--                  as="h3"-->
<!--                  class="text-lg font-bold leading-6 text-primary text-center py-4"-->
<!--              >-->
<!--                Datos de contacto-->
<!--              </DialogTitle>-->
<!--              <div class="px-4 pb-6 flex flex-row items-center space-x-4">-->
<!--                <button class="swiper-btn-prev bg-transparent">-->
<!--                  <svg xmlns="http://www.w3.org/2000/svg"-->
<!--                       fill="none"-->
<!--                       viewBox="0 0 24 24"-->
<!--                       stroke-width="3"-->
<!--                       stroke="currentColor"-->
<!--                       class="w-6 h-6 text-primary">-->
<!--                    <path stroke-linecap="round"-->
<!--                          stroke-linejoin="round"-->
<!--                          d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"/>-->
<!--                  </svg>-->
<!--                </button>-->
<!--                <Swiper-->
<!--                    @active-index-change="(index) => console.log(index.activeIndex)"-->
<!--                    :modules="[SwiperEffectCoverflow, SwiperNavigation]"-->
<!--                    effect="coverflow"-->
<!--                    :centered-slides="true"-->
<!--                    :navigation="{-->
<!--                      enabled: true,-->
<!--                      nextEl: '.swiper-btn-next',-->
<!--                      prevEl: '.swiper-btn-prev',-->
<!--                    }"-->
<!--                    class="h-full w-full rounded-lg flex items-center justify-center">-->
<!--                  <SwiperSlide class="h-full flex items-center relative|">-->
<!--                    <div class="flex w-full h-full items-center p-2 relative">-->
<!--                      <label class="flex w-full h-full flex-col space-y-1 relative"-->
<!--                             for="names">-->
<!--                        <div class="text-slate-50 h-full">Nombres o razón social empresa</div>-->
<!--                        <input v-model="contact.names"-->
<!--                               class="py-2 px-4 h-full rounded-lg bg-white bg-opacity-10 text-slate-50 outline outline-1 outline-slate-700 shadow-sm"-->
<!--                               type="text"-->
<!--                               name="names"-->
<!--                               id="names"-->
<!--                        >-->
<!--                      </label>-->
<!--                    </div>-->
<!--                  </SwiperSlide>-->
<!--                  <SwiperSlide>-->
<!--                    <div class="flex w-full h-full items-center p-2">-->
<!--                      <label class="flex w-full h-full flex-col space-y-1"-->
<!--                             for="names">-->
<!--                        <div class="text-slate-50">Dirección de correo electrónico</div>-->
<!--                        <input v-model="contact.email"-->
<!--                               class="py-2 px-4 rounded-lg bg-white bg-opacity-10 text-slate-50 outline outline-1 outline-slate-700 shadow-sm"-->
<!--                               type="text"-->
<!--                               name="names"-->
<!--                               id="names"-->
<!--                        >-->
<!--                      </label>-->
<!--                    </div>-->
<!--                  </SwiperSlide>-->
<!--                  <SwiperSlide class="flex w-full h-full">-->
<!--                    <div class="flex w-full h-full items-center p-2">-->
<!--                      <label class="flex w-full h-full flex-col space-y-1"-->
<!--                             for="names">-->
<!--                        <div class="text-slate-50">Número de teléfono móvil</div>-->
<!--                        <input v-model="contact.phone"-->
<!--                               class="py-2 px-4 rounded-lg bg-white bg-opacity-10 text-slate-50 outline outline-1 outline-slate-700 shadow-sm"-->
<!--                               type="text"-->
<!--                               name="names"-->
<!--                               id="names"-->
<!--                        >-->
<!--                      </label>-->
<!--                    </div>-->
<!--                  </SwiperSlide>-->
<!--                  <SwiperSlide>-->
<!--                    <div class="flex w-full h-full items-center p-2">-->
<!--                      <label class="flex w-full h-full flex-col space-y-1"-->
<!--                             for="names">-->
<!--                        <div class="text-slate-50 text-center">¿Algún mensaje o inquietud?</div>-->
<!--                        <div class="w-full h-fit flex flex-rows items-center justify-center text-slate-200 space-x-4">-->
<!--                          <button @click="contact.question = true"-->
<!--                                  class="bg-white bg-opacity-10 py-2 px-4 rounded-lg">Sí-->
<!--                          </button>-->
<!--                          <button @click="contact.question = false"-->
<!--                                  class="bg-white bg-opacity-10 py-2 px-4 rounded-lg">No-->
<!--                          </button>-->
<!--                          &lt;!&ndash;                          <button class="bg-primary py-2 px-4 rounded-lg">Enviar datos ya</button>&ndash;&gt;-->
<!--                        </div>-->
<!--                      </label>-->
<!--                    </div>-->
<!--                  </SwiperSlide>-->
<!--                  <SwiperSlide v-show="contact.question">-->
<!--                    <div class="flex w-full h-full items-center p-2">-->
<!--                      <label class="flex w-full h-full flex-col space-y-1"-->
<!--                             for="names">-->
<!--                        <div class="text-slate-50 text-center">Escribe tus dudas o déjanos un mensaje</div>-->
<!--                        <textarea v-show="contact.question"-->
<!--                                  v-model="contact.message"-->
<!--                                  class="py-2 px-4 rounded-lg bg-white bg-opacity-10 text-slate-50 outline outline-1 outline-slate-700 shadow-sm"-->
<!--                                  type="text"-->
<!--                                  name="names"-->
<!--                                  id="names"-->
<!--                        ></textarea>-->
<!--                      </label>-->
<!--                    </div>-->
<!--                  </SwiperSlide>-->
<!--                  <SwiperSlide v-show="!contact.question">-->
<!--                    <div class="flex w-full h-full items-center p-2">-->
<!--                      <label class="flex w-full h-full flex-col space-y-1"-->
<!--                             for="names">-->
<!--                        <div class="text-slate-50 text-center">Verificando formulario</div>-->
<!--                      </label>-->
<!--                    </div>-->
<!--                  </SwiperSlide>-->
<!--                </Swiper>-->
<!--                <button class="swiper-btn-next">-->
<!--                  <svg xmlns="http://www.w3.org/2000/svg"-->
<!--                       fill="none"-->
<!--                       viewBox="0 0 24 24"-->
<!--                       stroke-width="3"-->
<!--                       stroke="currentColor"-->
<!--                       class="w-6 h-6 text-primary">-->
<!--                    <path stroke-linecap="round"-->
<!--                          stroke-linejoin="round"-->
<!--                          d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"/>-->
<!--                  </svg>-->

<!--                </button>-->
<!--              </div>-->
<!--            </DialogPanel>-->
<!--          </TransitionChild>-->
<!--        </div>-->
<!--      </div>-->
<!--    </Dialog>-->
<!--  </TransitionRoot>-->
<!--</template>-->

<!--<script setup>-->
<!--import { ref } from 'vue'-->
<!--import {-->
<!--  TransitionRoot,-->
<!--  TransitionChild,-->
<!--  Dialog,-->
<!--  DialogPanel,-->
<!--  DialogTitle, Switch,-->
<!--} from '@headlessui/vue'-->

<!--const isOpen = ref(false)-->

<!--function swiperChangedNow(event) {-->
<!--  console.log(event.$attrs)-->
<!--}-->

<!--function closeModalContactForm() {-->
<!--  isOpen.value = false-->
<!--}-->

<!--function openModalContactForm() {-->
<!--  isOpen.value = true-->
<!--}-->

<!--// Definir contenedor de datos del contacto-->
<!--const contact = reactive({-->
<!--  names: '',-->
<!--  email: '',-->
<!--  phone: '',-->
<!--  message: '',-->
<!--  question: false,-->
<!--})-->
<!--</script>-->
