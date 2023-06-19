'use client'
import Icon from "@/components/main-section/icon";
export default function MainPage() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Educacion Financiera</h2>
            <p className="text-xl text-gray-400">Aprende a invertir tu dinero de forma sencilla y eficiente</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* Perfil del inversor */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <Icon
                name="HandCoins"
                size={48}
                color={"#f5f5f5"}
                weight={"light"}
                title={"Perfil del Inversor"}
                description={"Contesta las preguntas para definir tu perfil y ver las estrategias que mas se adaptan a ti."}
              ></Icon>
            </div>

            {/* Mis estrategias*/}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <Icon
                name="Strategy"
                size={48}
                color={"#f5f5f5"}
                weight={"light"}
                title={"Mis estrategias"}
                description={"Revisa las estrategias personalizadas en base a tu perfil del inversor."}
              ></Icon>
            </div>

            {/* Academy*/}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <Icon
                name="GraduationCap"
                size={48}
                color={"#f5f5f5"}
                weight={"light"}
                title={"Academy"}
                description={"Revisa los tutoriales y aprende sobre los distintos tipos de inversión e instrumentos disponibles."}
              ></Icon>
            </div>

            {/* Noticias*/}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <Icon
                name="Newspaper"
                size={48}
                color={"#f5f5f5"}
                weight={"light"}
                title={"Noticias"}
                description={"Mantente informado sobre las últimas novedades del mundo financiero."}
              ></Icon>
            </div>

            {/* Calculadora*/}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <Icon
                name="MathOperations"
                size={48}
                color={"#f5f5f5"}
                weight={"light"}
                title={"Calculadora"}
                description={"Lleva un seguimineto de tus gastos."}
              ></Icon>
            </div>

            {/* Comparador*/}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <Icon
                name="FadersHorizontal"
                size={48}
                color={"#f5f5f5"}
                weight={"light"}
                title={"Comparador"}
                description={"Comprueba las distintas aplicaciones y bancos de finanzas."}
              ></Icon>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
