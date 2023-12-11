<script setup
        lang="ts">

import TriangleDiagram from "~/components/images/TriangleDiagram.vue";
import { ref as dbRef, push } from "@firebase/database";
import { useAppCheck, useDatabaseList } from 'vuefire'
import CircleDiagram from "~/components/images/CircleDiagram.vue";

// Conseguir la base de datos
const firebase = useDatabase('conctactos');
// Tener la referencia a los datos que necesitamos
const contactosRef = dbRef(firebase, 'contactos');
// Tener los datos de la referencia anterior
// const contactos = useDatabaseList(contactosRef, { once: true });
const messageRequest = ref('¡Quiero recibir más información!')
const codeRequest = ref(0)
const isValidated = ref(false)

// Definir contenedor de datos del contacto
const contact = reactive({
  names: '',
  email: '',
  phone: '',
  message: '',
  writeMessage: false
})

watch(
    () => contact.names,
    (names) => {
      // Validar cada vez que cambia de valor. Solo letras y números
      isValidated.value = names != '' && names.length >= 3 && !/[^A-Za-z0-9\s]+$/.test(names)
    },
)

watch(
    () => contact.email,
    (email) => {
      // Validar cada vez que cambia de valor. Solo formatos de email
      isValidated.value = email != '' && /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
    }
)

watch(
    () => contact.phone,
    (phone) => {
      // Validar cada vez que cambia de valor. Solo números y de longitud superior o igual a 10
      isValidated.value = phone != '' && !/\D/.test(phone) && phone.length >= 10
    }
)

// Definir método para validar datos ingresados
function validateData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(isValidated.value)
    }, 1500)
  })

}

// Definir método para validar y guardar información en base de datos
async function saveContact() {
  // const appCheck = useAppCheck('calliax')
  // console.log(appCheck)
  contact.writeMessage = false
  codeRequest.value = 1
  messageRequest.value = 'Estamos validando...'
  await validateData().then(response => {
        if (response) {
          codeRequest.value = 2
          messageRequest.value = 'Guardando información'
          setTimeout(() => {
            // Poner nuevo registro a la base de datos con identificador único
            push(contactosRef, {
              names: contact.names,
              email: contact.email,
              phone: contact.phone,
              message: contact.message
            }).then(response => {
              codeRequest.value = 3
              messageRequest.value = '¡Muy pronto te contactaremos!'
            }).catch(error => {
              codeRequest.value = -1
              messageRequest.value = 'Perdona, tenemos problemas para guardar tus datos.'
            })
          }, 1800);
        } else {
          codeRequest.value = 4
          messageRequest.value = 'Echa un vistazo a tus datos y corrige, por favor.'
        }
      }
  ).catch(result => {
    messageRequest.value = 'Echa un vistazo a tus datos y corrige'
  })
}
</script>

<template>
  <!--  Contenedor general-->
  <div class="flex flex-col w-full h-full rounded-lg mb-8 sm:grid sm:grid-cols-2 px-4 cursor-default pb-4">
    <!--    Contenedor mensaje de Contáctanos -->
    <div class="flex h-fit sm:h-full items-center mb-10 sm:pm-0">
      <div class="relative col-span-full sm:col-span-1 flex flex-col justify-center h-full">
        <h1 class="relative text-4xl sm:text-6xl font-bold mb-6 sm:mb-12">
          <triangle-diagram class="absolute w-16 h-16 sm:w-32 sm:h-32 -z-10 -left-1 sm:-left-5 -top-4 sm:-top-10 rotate-45"/>
          Contáctanos
        </h1>
        <p class="text-xl text-secondary/80">¡Estamos emocionados por la oportunidad de conectarnos contigo y tu empresa! <br><br>
          Si deseas transformar tus ventas por teléfono y descubrir cómo nuestros servicios pueden impulsar tu éxito, te invitamos a
          completar nuestro breve formulario. <br><br> ¡Esperamos conocerte pronto!</p>
      </div>
    </div>
    <!--    Contenedor del formulario-->
    <div class="flex relative z-0 h-full sm:h-full text-secondary/80 relative">
      <circle-diagram class="absolute w-20 h-20 -z-10 -right-10 -top-7"/>
      <circle-diagram class="absolute w-28 h-28 -z-10 -left-14 -bottom-10"/>
      <form @submit.prevent="saveContact"
            class="flex flex-col sm:grid sm:grid-cols-2 sm:gap-4 grid-flow-dense w-full h-full space-y-2 sm:space-y-0 bg-white rounded-lg p-6 shadow-xl">
        <div
            class="col-span-1 flex items-center justify-start p-1">
          <label for="names"
                 class="text-secondary/80">Nombres o razón social empresa</label>
        </div>
        <div class="col-span-1 flex items-center justify-start p-1">
          <input id="names"
                 v-model="contact.names"
                 name="names"
                 type="text"
                 minlength="5"
                 maxlength="50"
                 required
                 :disabled="codeRequest == 3"
                 class="bg-primary/5 outline outline-1 outline-primary/20 focus:ring-1 focus:ring-primary rounded-lg">
        </div>
        <br class="block sm:hidden">
        <div
            class="col-span-1 flex items-center justify-start p-1">
          <label for="email"
                 class="text-secondary/80">Dirección correo electrónico</label>
        </div>
        <div class="col-span-1 flex items-center justify-start p-1">
          <input id="email"
                 v-model="contact.email"
                 name="email"
                 type="email"
                 required
                 :disabled="codeRequest == 3"
                 class="bg-primary/5 outline outline-1 outline-primary/20 focus:ring-1 focus:ring-primary rounded-lg">
        </div>
        <br class="block sm:hidden">
        <div class="col-span-1 flex items-center justify-start p-1">
          <label for="phone"
                 class="text-secondary/80">Número de teléfono móvil</label>
        </div>
        <div class="col-span-1 flex items-center justify-start p-1">
          <input id="phone"
                 v-model="contact.phone"
                 name="phone"
                 type="text"
                 minlength="7"
                 maxlength="15"
                 required
                 :disabled="codeRequest == 3"
                 class="bg-primary/5 outline outline-1 outline-primary/20 focus:ring-1 focus:ring-primary rounded-lg">
        </div>
        <br class="block sm:hidden">
        <div
            class="col-span-1 flex items-center justify-start">
          <label for="message"
                 class="text-secondary/80">¿Tienes alguna inquietud?</label>
        </div>
        <div
            class="col-span-1 flex items-center justify-start p-1">
          <textarea id="message"
                    v-model="contact.message"
                    name="message"
                    minlength="10"
                    maxlength="254"
                    required
                    :disabled="codeRequest == 3"
                    class="bg-primary/5 outline outline-1 outline-primary/20 focus:ring-1 focus:ring-primary rounded-lg cstm-scroll"></textarea>
        </div>
        <br class="block sm:hidden">
        <div class="col-span-full flex items-center justify-start mt-4">
          <button type="submit"
                  :disabled="codeRequest == 3"
                  class="flex flex-row w-full py-2 px-4 justify-center items-center bg-primary text-xl text-white font-medium rounded-lg disabled:bg-opacity-10 disabled:text-primary disabled:outline disabled:outline-2 disabled:outline-primary">
            <svg v-show="codeRequest == 1 || codeRequest == 2"
                 class="animate-spin mr-3 h-5 w-5 text-white"
                 xmlns="http://www.w3.org/2000/svg"
                 fill="none"
                 viewBox="0 0 24 24">
              <circle class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"></circle>
              <path class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <svg v-show="codeRequest == 3"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke-width="1.5"
                 stroke="currentColor"
                 class="w-6 h-6 mr-3">
              <path stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"/>
            </svg>

            {{ messageRequest }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>