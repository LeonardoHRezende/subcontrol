import { FEATURES } from "./constant";

function FeatureSection() {
  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-zinc-950 dark:text-zinc-50">
          Por que escolher o SubControl?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="bg-zinc-800 dark:bg-zinc-50 p-6 rounded-lg shadow-sm"
            >
              <feature.icon
                size={45}
                className="mb-2 text-zinc-50 dark:text-zinc-800"
              />
              <h3 className="text-xl font-bold text-zinc-50 dark:text-zinc-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-zinc-50 dark:text-zinc-700 ">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { FeatureSection };
