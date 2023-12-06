<template>
  <div class="flex items-center justify-center">
    <button
        type="button"
        @click="openModal"
        class="rounded-md sm:bg-transparent bg-slate-900 p-2 text-sm font-medium text-slate-200 hover:text-slate-50 hover:bg-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 transition-all ease-in-out"
    >
      <Icon name="material-symbols:language"
            size="24px"/>
    </button>
  </div>
  <TransitionRoot appear
                  :show="isOpen"
                  as="template">
    <Dialog as="div"
            @close="closeModal"
            class="relative z-20">
      <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25"/>
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
            class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
          >
            <DialogPanel
                class="w-full max-w-md transform overflow-hidden rounded-2xl bg-secondary p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                  as="h3"
                  class="text-lg font-medium leading-6 text-slate-100 text-center"
              >
                Selecciona el idioma de su preferencia
              </DialogTitle>

              <div class="mt-4 flex flex-col">
                <button
                    v-for="(language, index) in languages"
                    type="button"
                    class="inline-flex justify-center rounded-md text-sm font-medium text-slate-100 hover:bg-primary hover:text-secondary py-4"
                    @click="closeModal"
                >
                  <span class="w-1/3 flex flex-row items-center space-x-3">
                    <img
                        class="flex shrink-0"
                        :src="'flags/w40/'+ language.flag + '.png'"
                        width="28"
                        :alt="language.country">
                    <span class="flex grow">{{ language.name }}</span>
                  </span>
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import {ref} from 'vue'
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'

const isOpen = ref(false)
const languages = [
  {'name': 'Español', 'flag': 'es', 'country': 'España'},
  {'name': 'Portugués', 'flag': 'pt', 'country': 'Portugal'},
  {'name': 'Inglés', 'flag': 'us', 'country': 'Estados Unidos'},
]

function closeModal() {
  isOpen.value = false
}

function openModal() {
  isOpen.value = true
}
</script>
