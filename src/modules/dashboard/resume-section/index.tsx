import { TrendingUpIcon } from "lucide-react";
import { ResumeCardWithSkeleton } from "./resume-card/withSkeleton";

function SectionCards() {
  return (
    <div className="flex gap-2 md:grid xs:grid-cols-1 sm:grid-cols-2 md:gap-2 lg:grid-cols-4">
      <ResumeCardWithSkeleton
        title="total em assinaturas"
        value="R$ 250,00"
        percentage="+12.5%"
        icon={TrendingUpIcon}
        footer="Assinaturas no último mês"
        footerDescription="Aumentou esse mês"
      />

      <ResumeCardWithSkeleton
        title="assinaturas a vencer"
        value="2"
        footer="Assinaturas que precisam de atenção"
        footerDescription={["Spotify", "Netflix"]}
      />

      <ResumeCardWithSkeleton
        title="categoria mais cara"
        value="Streaming"
        percentage="+12.5%"
        icon={TrendingUpIcon}
        footer="Categoria com mais gastos"
        footerDescription="Aumentou esse mês"
      />

      <ResumeCardWithSkeleton
        title="economia"
        value="R$ 19,90"
        percentage="-4.5%"
        icon={TrendingUpIcon}
        footer="Você economizou esse mês"
        footerDescription="Aumentou esse mês"
      />
    </div>
  );
}

export { SectionCards };
