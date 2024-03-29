<script setup
        lang="ts">
import PositiveAttitude from "~/components/images/PositiveAttitude.vue";
import MapDiagram from "~/components/images/MapDiagram.vue";
import EngineeringTeam from "~/components/images/EngineeringTeam.vue";
import Ideas from "~/components/images/Ideas.vue";
import StatisticChart from "~/components/images/StatisticChart.vue";
import ActiveSupport from "~/components/images/ActiveSupport.vue";
import CircleDiagram from "~/components/images/CircleDiagram.vue";
import MarketingFeature from "~/components/MarketingFeature.vue";
import Choose from "~/components/images/Choose.vue";
import Jumbotron from "~/components/Jumbotron.vue";
import TriangleDiagram from "~/components/images/TriangleDiagram.vue";
import SocialDashboard from "~/components/images/SocialDashboard.vue";


const { t } = useI18n({
  useScope: 'global'
})

useHead({
  title: 'Calliax',
  meta: [
    {
      name: "description",
      key: 'calliax, que es calliax, what is calliax, call center, callcenter, calcenter, colcenter, calias, caliax, servicios callcenter, vender por callcenter',
      content:
          'Empresa de call center dedicada a proporcionar servicios de atención al cliente a otras empresas, ya sea internamente o externalizando esta función. Utilizamos una infraestructura de telecomunicaciones avanzada y empleamos agentes especializados para manejar una variedad de consultas y solicitudes de los clientes. Nuestro call center puede ofrecer servicios como soporte técnico, ventas, encuestas, atención postventa, telemarketing y más. Como empresa, utilizamos sistemas de gestión de llamadas y bases de datos para acceder a la información relevante del cliente y garantizar una interacción eficiente. El objetivo principal es mejorar la satisfacción del cliente y fortalecer la relación entre la empresa y sus clientes a través de la comunicación telefónica efectiva.'
    }
  ]
})

useSeoMeta({
  title: 'Calliax',
  ogTitle: 'Calliax',
  description: 'Empresa de call center dedicada a proporcionar servicios de atención al cliente a otras empresas, ya sea internamente o externalizando esta función. Utilizamos una infraestructura de telecomunicaciones avanzada y empleamos agentes especializados para manejar una variedad de consultas y solicitudes de los clientes. Nuestro call center puede ofrecer servicios como soporte técnico, ventas, encuestas, atención postventa, telemarketing y más. Como empresa, utilizamos sistemas de gestión de llamadas y bases de datos para acceder a la información relevante del cliente y garantizar una interacción eficiente. El objetivo principal es mejorar la satisfacción del cliente y fortalecer la relación entre la empresa y sus clientes a través de la comunicación telefónica efectiva.',
  ogDescription: 'Empresa de call center dedicada a proporcionar servicios de atención al cliente a otras empresas, ya sea internamente o externalizando esta función. Utilizamos una infraestructura de telecomunicaciones avanzada y empleamos agentes especializados para manejar una variedad de consultas y solicitudes de los clientes. Nuestro call center puede ofrecer servicios como soporte técnico, ventas, encuestas, atención postventa, telemarketing y más. Como empresa, utilizamos sistemas de gestión de llamadas y bases de datos para acceder a la información relevante del cliente y garantizar una interacción eficiente. El objetivo principal es mejorar la satisfacción del cliente y fortalecer la relación entre la empresa y sus clientes a través de la comunicación telefónica efectiva.',
})

definePageMeta({
  layout: 'spa'
})

const features = [
  {
    title: t('approach'),
    description: t('descriptionApproach'),
    image: 'chart-line.svg'
  },
  {
    title: t('firmness'),
    description: t('descriptionFirmness'),
    image: 'projections.svg'
  },
  {
    title: t('security'),
    description: t('descriptionSecurity'),
    image: 'security_on.svg'
  },
  {
    title: t('evolution'),
    description: t('descriptionEvolution'),
    image: 'world.svg'
  },
]

</script>

<template>
  <div class="relative h-full overflow-x-hidden">
    <div id="about-us"
         class="h-full sm:h-screen max-w-screen-xl m-auto pt-20 sm:pt-6 flex lg:flex-row relative items-center">
      <jumbotron>
        <template #title>{{ $t('aboutUs') }}</template>
        <template #description>
          {{ $t('descriptionAboutUs') }}
        </template>
        <!--        <template #description>-->
        <!--          En <span class="text-primary font-semibold">Calliax</span>, somos una gran familia, donde la unión y la colaboración son aspectos-->
        <!--          esenciales de-->
        <!--          nuestra identidad. Mantenemos un enfoque constante en la innovación, la tecnología y comunicación para mantenernos actualizados-->
        <!--          en un mundo de constante cambio, impulsados por la pasión por lo que hacemos.-->
        <!--          <br><br>-->
        <!--          La calidez y el conocimiento que proporcionamos en cada llamada telefónica son fundamentales para nuestra empresa. Nos esforzamos-->
        <!--          por garantizar que cada interacción con nuestros clientes sea una experiencia agradable y constructiva. Además, nos enorgullecemos-->
        <!--          de nuestro profundo conocimiento sobre productos y servicios, lo que nos permite brindar soluciones de alta calidad.-->
        <!--          <span class="text-primary font-semibold">Calliax</span> equilibra la unión y la calidez con tecnología y visión, ofreciendo un-->
        <!--          sólido conocimiento de nuestros productos y servicios para satisfacer las necesidades de nuestros clientes.-->
        <!--        </template>-->
      </jumbotron>
    </div>
    <div class="h-full max-w-screen-xl m-auto pt-0 sm:pt-28 flex lg:flex-row relative items-center">
      <Swiper
          :modules="[SwiperAutoplay, SwiperEffectCoverflow, SwiperScrollbar, SwiperNavigation]"
          :navigation="{
            enabled: true,
            nextEl: '.swiper-btn-next',
            prevEl: '.swiper-btn-prev',
          }"
          loop
          effect="coverflow"
          :autoplay="{
                    delay: 10000,
                    pauseOnMouseEnter: true,
                    disableOnInteraction: true
                  }"
          class="h-full w-full rounded-lg relative">
        <div class="w-full flex justify-center items-center space-x-4">
          <button class="swiper-btn-prev z-20"
                  name="Previous"
                  title="Previous">
            <svg xmlns="http://www.w3.org/2000/svg"
                 title="Arrow previous"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke-width="3"
                 stroke="currentColor"
                 class="w-6 h-6 text-primary rotate-180">
              <path stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"/>
            </svg>
          </button>
          <button class="swiper-btn-next"
                  name="Next"
                  title="Next">
            <svg xmlns="http://www.w3.org/2000/svg"
                 title="Arrow next"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke-width="3"
                 stroke="currentColor"
                 class="w-6 h-6 text-primary">
              <path stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"/>
            </svg>

          </button>
        </div>
        <SwiperSlide
            class="z-10 bg-red-400">
          <div
              class="w-full h-full px-4 sm:px-0 bg-slate-50 flex flex-col sm:flex-row justify-center items-center sm:items-start">
            <div
                class="w-2/3 sm:w-1/2 h-full flex items-start sm:items-center justify-center order-last sm:order-first box-content">
              <img class=""
                   :src="'images/chart-line.svg'"
                   alt="">
            </div>
            <div
                class="w-full sm:w-1/2 h-full flex flex-col justify-center items-start px-6 sm:px-10 pt-8">
              <h1
                  class="text-secondary text-3xl sm:text-5xl font-semibold mb-6 relative z-0 cursor-default">
                {{ $t('approach') }}
                <triangle-diagram class="absolute w-20 h-20 -left-5 sm:-left-10 w-16 sm:w-auto -top-2/3 rotate-45 -z-10"></triangle-diagram>
              </h1>
              <p class="w-full leading-relaxed sm:tracking-wide text-xl text-secondary/80 cursor-default">
                {{ $t('descriptionApproach') }}
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
            class="z-10 bg-red-400">
          <div
              class="w-full h-full px-4 sm:px-0 bg-slate-50 flex flex-col sm:flex-row justify-center items-center sm:items-start">
            <div
                class="w-2/3 sm:w-1/2 h-full flex items-start sm:items-center justify-center order-last sm:order-first box-content">
              <img class=""
                   :src="'images/projections.svg'"
                   alt="">
            </div>
            <div
                class="w-full sm:w-1/2 h-full flex flex-col justify-center items-start px-6 sm:px-10 pt-8">
              <h1
                  class="text-secondary text-3xl sm:text-5xl font-semibold mb-6 relative z-0 cursor-default">
                {{ $t('firmness') }}
                <triangle-diagram class="absolute w-20 h-20 -left-5 sm:-left-10 w-16 sm:w-auto -top-2/3 rotate-45 -z-10"></triangle-diagram>
              </h1>
              <p class="w-full leading-relaxed sm:tracking-wide text-xl text-secondary/80 cursor-default">
                {{ $t('descriptionFirmness') }}
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
            class="z-10 bg-red-400">
          <div
              class="w-full h-full px-4 sm:px-0 bg-slate-50 flex flex-col sm:flex-row justify-center items-center sm:items-start">
            <div
                class="w-2/3 sm:w-1/2 h-full flex items-start sm:items-center justify-center order-last sm:order-first box-content">
              <img class=""
                   :src="'images/security_on.svg'"
                   alt="">
            </div>
            <div
                class="w-full sm:w-1/2 h-full flex flex-col justify-center items-start px-6 sm:px-10 pt-8">
              <h1
                  class="text-secondary text-3xl sm:text-5xl font-semibold mb-6 relative z-0 cursor-default">
                {{ $t('security') }}
                <triangle-diagram class="absolute w-20 h-20 -left-5 sm:-left-10 w-16 sm:w-auto -top-2/3 rotate-45 -z-10"></triangle-diagram>
              </h1>
              <p class="w-full leading-relaxed sm:tracking-wide text-xl text-secondary/80 cursor-default">
                {{ $t('descriptionSecurity') }}
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
            class="z-10 bg-red-400">
          <div
              class="w-full h-full px-4 sm:px-0 bg-slate-50 flex flex-col sm:flex-row justify-center items-center sm:items-start">
            <div
                class="w-2/3 sm:w-1/2 h-full flex items-start sm:items-center justify-center order-last sm:order-first box-content">
              <img class=""
                   :src="'images/world.svg'"
                   alt="">
            </div>
            <div
                class="w-full sm:w-1/2 h-full flex flex-col justify-center items-start px-6 sm:px-10 pt-8">
              <h1
                  class="text-secondary text-3xl sm:text-5xl font-semibold mb-6 relative z-0 cursor-default">
                {{ $t('evolution') }}
                <triangle-diagram class="absolute w-20 h-20 -left-5 sm:-left-10 w-16 sm:w-auto -top-2/3 rotate-45 -z-10"></triangle-diagram>
              </h1>
              <p class="w-full leading-relaxed sm:tracking-wide text-xl text-secondary/80 cursor-default">
                {{ $t('descriptionEvolution') }}
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    <div id="what-do-we-do"
         class="h-full sm:h-screen max-w-screen-xl m-auto sm:pt-6 flex lg:flex-row relative items-center">
      <jumbotron>
        <template #title>{{ $t('whatDoWeDo') }}</template>
        <template #description>
          {{ $t('descriptionWhatDoWeDo') }}
        </template>
        <!--        <template #description>-->
        <!--          Futuro. Nuestros servicios están orientados a impactar de manera significativa en la vida de las personas y-->
        <!--          en el desarrollo de las empresas. Nos destacamos en la capacidad de establecer conexiones y generar oportunidades a través de-->
        <!--          la venta, ya sea de servicios o productos. En <span class="text-primary font-semibold">Calliax</span> transcendemos la simple-->
        <!--          acción comercial, ya que estamos comprometidos en brindar soluciones que resuelvan problemas y satisfagan necesidades.-->
        <!--          <br><br>-->
        <!--          Hacemos futuro en cada llamada telefónica que realizamos, creando oportunidadades para construir relaciones sólidas con nuestros-->
        <!--          clientes potenciales, donde no solo vendemos servicios y productos, sino que también brindamos asesoramiento y soluciones-->
        <!--          personalizadas que mejoren la calidad de vida y el rendimiento empresarial. Vemos un panorama donde la tecnología y la innovación-->
        <!--          son nuestros aliados en la búsqueda constante de mejores formas de servir a nuestros clientes y anticiparnos a sus necesidades.-->
        <!--        </template>-->
      </jumbotron>
    </div>
    <div class="h-full sm:h-screen max-w-screen-xl m-auto pt-24 sm:pt-28 flex lg:flex-row relative">
      <div class="relative w-full flex flex-col items-center sm:flex-row justify-evenly space-y-28 sm:space-y-0">
        <card-service class="max-w-sm max-h-96">
          <template #image>
            <positive-attitude title="Personas capacitadas en ventas"
                               class="w-full h-full m-auto"/>
          </template>
          <template #title>{{ $t('experienced') }}</template>
          <template #body>{{ $t('descriptionExperienced') }}</template>
        </card-service>
        <card-service class="max-w-sm max-h-96">
          <template #image>
            <engineering-team title="Trabajo en equipo call center"
                              class="w-full h-full m-auto"/>
          </template>
          <template #title>{{ $t('efficiency') }}</template>
          <template #body>{{ $t('descriptionEfficiency') }}</template>
          <!--          <template #body>La infraestructura telefónica de <span class="text-primary font-semibold">Calliax</span> está diseñada para-->
          <!--            realizar llamadas de manera eficiente con un alcance amplio de un público objetivo.-->
          <!--          </template>-->
        </card-service>
        <card-service class="max-w-sm max-h-96">
          <template #image>
            <map-diagram title="Impacto social positivo"
                         class="w-full h-full"/>
          </template>
          <template #title>{{ $t('internationalization') }}</template>
          <template #body>{{ $t('descriptionInternationalization') }}</template>
        </card-service>
      </div>
    </div>
    <div class="h-full sm:h-screen max-w-screen-xl m-auto pt-20 flex lg:flex-row relative pb-20 sm:pb-0">
      <div class="relative w-full flex flex-col items-center sm:flex-row justify-evenly space-y-28 sm:space-y-0">
        <card-service class="max-w-sm max-h-96">
          <template #image>
            <active-support class="w-full h-full"/>
          </template>
          <template #title>{{ $t('improveCustomerService') }}</template>
          <template #body>{{ $t('descriptionImproveCustomerService') }}</template>
          <!--          <template #body>Además de vender, en <span class="text-primary font-semibold">Calliax</span> también manejamos consultas y-->
          <!--            atención al cliente, mejorando la satisfacción de los mismos.-->
          <!--          </template>-->
        </card-service>
        <card-service class="max-w-sm max-h-96">
          <template #image>
            <statistic-chart class="w-full h-full"/>
          </template>
          <template #title>{{ $t('costsReduction') }}</template>
          <template #body>
            {{ $t('descriptionCostsReduction') }}
            <!--            En lugar de pensar en infraestructura y capacitación, con <span class="text-primary font-semibold">Calliax</span>-->
            <!--            ahorras tiempo, espacio y su capital.-->
          </template>
        </card-service>
        <card-service class="max-w-sm max-h-96">
          <template #image>
            <ideas class="w-full h-full m-auto"/>
          </template>
          <template #title>{{ $t('dataAndAnalysis') }}</template>
          <template #body>{{ $t('descriptionDataAndAnalysis') }}
          </template>
        </card-service>
      </div>
    </div>
    <div class="h-full max-w-screen-xl m-auto pt-32 pb-20 sm:pt-28 flex relative z-0">
      <h1 class="absolute z-10 text-5xl sm:text-6xl left-7 top-[120px] sm:top-[92px] font-semibold text-secondary">Marketing</h1>
      <circle-diagram class="w-20 h-20 sm:w-32 sm:h-32 absolute -left-5 top-32 sm:top-20 sm:-left-12 -z-30"/>
      <triangle-diagram class="w-32 h-32 absolute -right-10 bottom-10 -z-30 rotate-45"/>
      <div class="flex flex-col w-full h-full mt-8 mx-4 rounded-lg shadow-xl relative bg-white px-6">
        <h1 class="w-full h-fit mt-5 mb-4 text-secondary/80 text-lg">
          {{ $t('descriptionSectionMarketing') }} </h1>
        <!--          <span class="text-primary font-semibold">Calliax</span> es ser mucho más-->
        <!--          que una empresa de ventas. Somos un agente de cambio, un motor de crecimiento y un socio confiable para nuestros clientes,-->
        <!--          ayudándoles a alcanzar sus objetivos y construyendo un futuro en el que nuestras actividades no solo generen beneficios-->
        <!--          comerciales, sino también un impacto positivo y duradero en la sociedad.</h1>-->
        <div class="w-full flex flex-col sm:flex-row space-y-8 sm:space-y-0">
          <div class="w-full sm:w-1/3 space-y-8 order-1">
            <marketing-feature>
              <template #title>{{ $t('weIncreaseVisibility') }}</template>
              <template #description>{{ $t('descriptionWeIncreaseVisibility') }}
                <!--                <span class="text-primary font-semibold">Calliax</span> entiende cómo llegar a tus potenciales-->
                <!--                clientes, sabemos cómo promocionar tus productos y servicios, impactando a un público amplio y diverso.-->
              </template>
            </marketing-feature>
            <marketing-feature>
              <template #title>{{ $t('demandGeneration') }}</template>
              <template #description>{{ $t('descriptionDemandGeneration') }}</template>
            </marketing-feature>
            <marketing-feature>
              <template #title>{{ $t('brandBuilding') }}</template>
              <template #description> {{ $t('descriptionBrandBuilding') }}</template>
            </marketing-feature>
            <marketing-feature>
              <template #title>{{ $t('segmentation') }}</template>
              <template #description>{{ $t('descriptionSegmentation') }}</template>
            </marketing-feature>
          </div>
          <div class="w-full sm:w-1/3 order-last sm:order-2 p-8">
            <choose/>
          </div>
          <div class="w-full sm:w-1/3 space-y-8 order-3">
            <marketing-feature>
              <template #title>{{ $t('customerLoyalty') }}</template>
              <template #description>{{ $t('descriptionCustomerLoyalty') }}</template>
            </marketing-feature>
            <marketing-feature>
              <template #title>{{ $t('differentiation') }}</template>
              <template #description>{{ $t('descriptionDifferentiation') }}
                <!--                <span class="text-primary font-semibold">Calliax</span> resalta tu marca entre la competencia,-->
                <!--                elevamos-->
                <!--                tus ventajas y propuestas de venta al consumidor.-->
              </template>
            </marketing-feature>
            <marketing-feature>
              <template #title>{{ $t('marketEducation') }}</template>
              <template #description>{{ $t('descriptionMarketEducation') }}</template>
            </marketing-feature>
            <marketing-feature>
              <template #title>{{ $t('innovation') }}</template>
              <template #description>{{ $t('descriptionInnovation') }}</template>
            </marketing-feature>
          </div>
        </div>
      </div>
    </div>
    <div class="h-full sm:h-screen max-w-screen-xl m-auto pt-20 sm:pt-28 flex lg:flex-row relative">
      <div
          class="w-full h-full px-4 sm:px-0 bg-slate-50 flex flex-col sm:flex-row justify-center items-center sm:items-start">
        <div
            class="w-2/3 sm:w-1/2 h-full flex items-start sm:items-center justify-center order-last sm:order-first box-content pt-10">
          <social-dashboard class="w-full h-full"/>
        </div>
        <div
            class="w-full sm:w-1/2 h-full flex flex-col justify-center items-start px-6 sm:px-10 pt-8">
          <h1
              class="text-secondary text-3xl sm:text-5xl font-semibold mb-6 relative z-0 cursor-default">
            Influencer Marketing
            <triangle-diagram class="absolute w-20 h-20 -left-5 sm:-left-10 w-16 sm:w-auto -top-2/3 rotate-45 -z-10"></triangle-diagram>
          </h1>
          <p class="w-full leading-relaxed sm:tracking-wide text-xl text-secondary/80 cursor-default">
            {{ $t('descriptionInfluencerMarketing') }}
          </p>
        </div>
      </div>
    </div>
    <div id="contact-us"
         class="h-full max-w-screen-xl m-auto px-4 sm:px-0 pt-24 sm:pt-28 flex lg:flex-row relative items-center">
      <contact></contact>
    </div>
  </div>
</template>

<style scoped>

</style>