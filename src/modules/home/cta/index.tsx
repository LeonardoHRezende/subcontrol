import { Button } from "@/components/atoms/button";

function HomeCta() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <h2 className="text-3xl font-bold mb-4">
        Pronto para controlar suas assinaturas?
      </h2>
      <p className="text-lg text-zinc-700 dark:text-zinc-400  max-w-2xl mx-auto mb-8">
        Nossa ferramenta é gratuita e fácil de usar. Cadastre-se agora e comece
        a simplificar o gerenciamento das suas assinaturas. Não perca mais tempo
        e dinheiro com serviços desnecessários.
      </p>
      <Button size="lg" className="rounded-full px-8 py-6 text-lg">
        Faça seu Cadastro Gratuito
      </Button>
    </section>
  );
}

export { HomeCta };
