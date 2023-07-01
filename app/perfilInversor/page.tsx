import Preguntas from "@/components/perfilInversor/preguntas";

export const metadata = {
  title: 'Perfil del inversor',
  description: 'Crea tu perfil de inversion',
}

export default function PerfilInversor() {
  return (
    <>
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Perfil del Inversor</h2>
            <p className="text-xl text-gray-400">Responde unas preguntas para definir tus estrategias</p>
          </div>
          <div>
            <Preguntas
              pregunta={"Invertis en crypto?"}
              opcion1={"Si"}
              opcion2={"No"}
              opcion3={"Que es crypto?"}
            />           
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
