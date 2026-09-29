export function SkillsSection() {
  const skillCategories = [
    {
      title: "Linguagens & Core",
      skills: ["Python", "SQL (PostgreSQL/MySQL)", "Lógica de Programação", "TypeScript/JavaScript"],
    },
    {
      title: "Análise & Dados",
      skills: ["Pandas", "NumPy", "Análise Exploratória (EDA)", "Modelagem de Dados"],
    },
    {
      title: "Visualização & BI",
      skills: ["Power BI", "DAX", "Excel Avançado", "Dashboarding"],
    },
    {
      title: "Engenharia & Ferramentas",
      skills: ["ETL Pipelines", "Git / GitHub", "Automação de Processos", "Next.js / Tailwind"],
    },
  ];

  return (
    <section id="competencias" className="py-8 space-y-4">
      <div className="space-y-1">
        <h2 className="text-xl font-bold tracking-tight text-foreground">
          Competências & Stack Analítica
        </h2>
        <p className="text-xs text-text-secondary">
          Principais tecnologias e ferramentas aplicadas no tratamento e análise de dados.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {skillCategories.map((group) => (
          <div
            key={group.title}
            className="p-4 rounded-lg bg-surface/40 border border-border space-y-2 hover:border-accent/40 transition-colors"
          >
            <h3 className="text-xs font-bold uppercase tracking-wider text-accent">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-[11px] px-2 py-0.5 rounded bg-surface border border-border/80 text-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}