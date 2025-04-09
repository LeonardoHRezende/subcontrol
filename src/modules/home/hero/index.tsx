import { Button } from "@/components/atoms/button";

function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-zinc-900 dark:text-zinc-100">
            Simplifique o gerenciamento das suas assinaturas
          </h1>
          <p className="mt-6 text-lg text-zinc-700 dark:text-zinc-400 max-w-2xl">
            Comece a controlar suas assinaturas sem esforço com uma abordagem
            mais inteligente. Nossa plataforma torna o gerenciamento de
            assinaturas fácil, acessível e personalizado para suas necessidades.
          </p>
          <div className="mt-8">
            <Button size="lg" className="rounded-full px-8 py-6 text-lg bg-zinc-700 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-700 dark:hover:bg-zinc-300 hover:cursor-pointer">
              Comece agora
            </Button>
          </div>
        </div>
        <div className="bg-zinc-800 dark:bg-zinc-50 p-8 rounded-xl">
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="text-3xl font-bold text-zinc-50 dark:text-zinc-900">95%</div>
              <div className="ml-4 text-xl text-zinc-50 dark:text-zinc-900">Economia de tempo</div>
            </div>
            <div className="flex items-center">
              <div className="text-3xl font-bold text-zinc-50 dark:text-zinc-900">75%</div>
              <div className="ml-4 text-xl text-zinc-50 dark:text-zinc-900">Redução de Gastos</div>
            </div>
            <div className="flex items-center">
              <div className="text-3xl font-bold text-zinc-50 dark:text-zinc-900">100%</div>
              <div className="ml-4 text-xl text-zinc-50 dark:text-zinc-900">Controle Total</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { HeroSection };
