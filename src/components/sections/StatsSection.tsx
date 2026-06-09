import { stats } from "@/data";

export function StatsSection() {
  return (
    <section className="bg-brand-600 py-12">
      <div className="container-site">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="group">
              <p className="font-heading text-4xl md:text-5xl font-semibold text-white">
                {stat.value}
              </p>
              <p className="text-sm font-medium text-white/70 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
