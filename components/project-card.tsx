type ProjectCardProps = {
  eyebrow: string;
  title: string;
  summary: string;
  problem: string;
  build: string[];
  skills: string[];
  stack: string[];
  impact: string;
  architecture: string[];
  metrics: Array<{
    value: string;
    label: string;
  }>;
  index: number;
  labels: {
    problem: string;
    build: string;
    skills: string;
    stack: string;
    impact: string;
    architecture: string;
  };
};

function RestaurantScreenshot() {
  return (
    <div className="project-shot overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-100 shadow-2xl shadow-slate-950/35">
      <BrowserChrome title="PDV / Sistema de Gestão" light />
      <div className="grid min-h-[21rem] grid-cols-[5.2rem_1fr] bg-slate-50 text-slate-900 sm:grid-cols-[8rem_1fr]">
        <aside className="bg-slate-900 p-3 text-white">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            PDV
          </p>
          <div className="mt-3 space-y-2">
            <div className="rounded bg-emerald-500 px-2 py-2 text-[10px] font-black uppercase">
              Preços
            </div>
            <div className="rounded bg-slate-700 px-2 py-2 text-[10px] font-black uppercase">
              Comanda
            </div>
          </div>
          <p className="mt-5 text-[10px] font-semibold text-slate-400">Abertas</p>
          <div className="mt-2 space-y-1 text-[10px]">
            <div className="rounded bg-white px-2 py-1 text-slate-900">#184 · Mesa 05</div>
            <div className="rounded bg-slate-800 px-2 py-1 text-slate-200">#185 · Balcão</div>
            <div className="rounded bg-slate-800 px-2 py-1 text-slate-200">#186</div>
          </div>
        </aside>

        <div className="p-4">
          <div className="flex items-start justify-between">
            <div>
              <h4 className="text-base font-black uppercase italic tracking-tight text-slate-800 sm:text-lg">
                Fila da Cozinha
              </h4>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                Monitor de pedidos em tempo real
              </p>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              Live
            </div>
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {[
              {
                id: "#184",
                time: "12:31",
                customer: "Mesa 05",
                late: false,
                items: ["2x Burger Black", "1x Batata G"],
              },
              {
                id: "#181",
                time: "17:02",
                customer: "Balcão",
                late: true,
                items: ["1x Pizza", "2x Refrigerante"],
              },
            ].map((order) => (
              <div
                key={order.id}
                className={`rounded-3xl border p-4 shadow-xl ${
                  order.late
                    ? "border-red-200 bg-red-50"
                    : "border-slate-100 bg-white"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`text-2xl font-black tracking-tighter ${
                      order.late ? "text-red-600" : "text-slate-900"
                    }`}
                  >
                    {order.id}
                  </span>
                  <span
                    className={`text-sm font-black ${
                      order.late ? "text-red-600" : "text-slate-700"
                    }`}
                  >
                    {order.time}
                  </span>
                </div>
                <p className="mt-3 border-b border-slate-100 pb-2 text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">
                  {order.customer}
                </p>
                <div className="mt-3 space-y-2">
                  {order.items.map((item) => (
                    <div key={item} className="text-xs font-medium text-slate-600">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function BarberScreenshot() {
  return (
    <div className="project-shot overflow-hidden rounded-[1.5rem] border border-white/15 bg-[#1b2433] shadow-2xl shadow-slate-950/35">
      <BrowserChrome title="Barbearia / Developer + Agenda" />
      <div className="min-h-[21rem] bg-[radial-gradient(circle_at_15%_15%,rgba(45,90,178,0.22),transparent_35%),radial-gradient(circle_at_85%_18%,rgba(197,60,68,0.2),transparent_35%),linear-gradient(180deg,#1b2433,#2a3446)] p-4 text-[#e9edf5]">
        <div className="rounded-2xl border border-white/20 bg-white/10 p-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-[10px] uppercase tracking-[0.24em] text-[#b8c1d1]">
                Controle do SaaS
              </p>
              <h4 className="mt-1 text-lg font-semibold">Agenda Operacional</h4>
            </div>
            <div className="rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-xs">
              Dark mode ativo
            </div>
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-[1fr_0.8fr]">
            <div className="rounded-2xl border border-white/15 bg-[#141e2f]/80 p-3">
              <p className="text-xs font-semibold">Agendamento por barbeiro</p>
              <div className="mt-3 grid grid-cols-3 gap-2 text-center text-[11px]">
                {[
                  ["09:00", "livre"],
                  ["10:30", "fechado"],
                  ["14:00", "livre"],
                  ["15:30", "livre"],
                  ["17:00", "fechado"],
                  ["18:00", "livre"],
                ].map(([slot, state]) => (
                  <span
                    key={slot}
                    className={`rounded-lg border px-2 py-2 ${
                      state === "fechado"
                        ? "border-[#c53c44]/45 bg-[#c53c44]/20"
                        : "border-white/15 bg-white/10"
                    }`}
                  >
                    {slot}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <div className="rounded-xl border border-white/15 bg-[#141e2f]/80 p-3">
                <p className="text-[10px] uppercase tracking-[0.18em] text-[#b8c1d1]">
                  Barbeiros
                </p>
                <p className="mt-1 text-lg font-semibold">2 disponíveis</p>
              </div>
              <div className="rounded-xl border border-white/15 bg-[#141e2f]/80 p-3">
                <p className="text-[10px] uppercase tracking-[0.18em] text-[#b8c1d1]">
                  WhatsApp
                </p>
                <p className="mt-1 text-lg font-semibold">Webhook ativo</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-2 text-xs">
          {["Cliente", "Admin", "Developer", "Planos", "Tema"].map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function PuzzleScreenshot() {
  return (
    <div className="project-shot overflow-hidden rounded-[1.5rem] border border-[#d3a96b] bg-[#f5ecd5] shadow-2xl shadow-[#2f1f12]/25">
      <BrowserChrome title="Puzzle Kids" warm />
      <div className="min-h-[21rem] bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.5),transparent_45%),radial-gradient(circle_at_80%_15%,rgba(223,196,144,0.55),transparent_52%),linear-gradient(180deg,#f8efd8_0%,#e9d5ae_100%)] p-4 text-[#2f1f12]">
        <div className="text-center">
          <p className="font-serif text-xl font-extrabold uppercase tracking-[0.12em] text-[#7a4e2a] sm:text-2xl">
            Qual aventura hoje?
          </p>
          <div className="mx-auto mt-2 inline-flex rounded-full border-4 border-[#a97836] bg-[#fff7e7] px-5 py-1 text-sm font-bold shadow-[0_5px_0_#79572b]">
            Escolha um desafio para começar!
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            ["🎨", "Cores", "#9B59B6"],
            ["🧩", "Puzzles", "#FFE66D"],
            ["🔊", "Sons", "#2ECC71"],
            ["🇺🇸", "Inglês", "#00D2D3"],
            ["🌍", "Mundo", "#5F27CD"],
            ["🏎️", "Carros", "#FF6348"],
          ].map(([icon, label, color]) => (
            <div
              key={label}
              className="rounded-[1.8rem] border-4 border-[#f5ecd5] bg-white p-3 text-center shadow-[8px_8px_18px_rgba(47,31,18,0.12)]"
            >
              <div
                className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border-4 border-white text-2xl shadow-inner"
                style={{ backgroundColor: color }}
              >
                {icon}
              </div>
              <p className="mt-2 text-sm font-extrabold">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function BrowserChrome({
  title,
  light = false,
  warm = false,
}: {
  title: string;
  light?: boolean;
  warm?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between px-4 py-3 text-xs ${
        warm
          ? "bg-[#ead3a3] text-[#7a4e2a]"
          : light
            ? "bg-white text-slate-500"
            : "bg-black/20 text-white/70"
      }`}
    >
      <div className="flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
      </div>
      <span>{title}</span>
    </div>
  );
}

function renderScreenshot(index: number) {
  switch (index) {
    case 0:
      return <RestaurantScreenshot />;
    case 1:
      return <BarberScreenshot />;
    case 2:
      return <PuzzleScreenshot />;
    default:
      return <RestaurantScreenshot />;
  }
}

export function ProjectCard({
  eyebrow,
  title,
  summary,
  problem,
  build,
  skills,
  stack,
  impact,
  architecture,
  metrics,
  index,
  labels,
}: ProjectCardProps) {
  const reverse = index % 2 === 1;

  return (
    <article className="project-article relative border-t border-white/10 py-12 first:border-t-0 first:pt-0 last:pb-0">
      <div
        className={`grid gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(30rem,1.18fr)] lg:items-start ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">
            {eyebrow}
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {title}
          </h3>
          <p className="mt-4 max-w-xl text-base leading-8 text-slate-300">{summary}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {metrics.map((metric) => (
              <span
                key={`${metric.value}-${metric.label}`}
                className="soft-chip inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-200"
              >
                <strong className="text-white">{metric.value}</strong>
                <span className="uppercase tracking-[0.16em] text-slate-400">
                  {metric.label}
                </span>
              </span>
            ))}
          </div>

          <div className="mt-6 space-y-5">
            <CaseTextBlock title={labels.problem} text={problem} />
            <CaseTextBlock title={labels.impact} text={impact} />
          </div>

          <div className="mt-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
              {labels.skills}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="soft-chip rounded-full border border-sky-300/20 bg-sky-300/10 px-3 py-1.5 text-xs font-medium text-sky-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {renderScreenshot(index)}

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                {labels.build}
              </p>
              <div className="mt-3 space-y-2">
                {build.map((item) => (
                  <p key={item} className="text-sm leading-7 text-slate-200">
                    {item}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                {labels.architecture}
              </p>
              <div className="mt-3 space-y-2">
                {architecture.map((item) => (
                  <p key={item} className="text-sm leading-7 text-slate-200">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
              {labels.stack}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {stack.map((technology) => (
                <span
                  key={technology}
                  className="soft-chip rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-slate-200"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function CaseTextBlock({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
        {title}
      </p>
      <p className="mt-2 leading-7 text-slate-200">{text}</p>
    </div>
  );
}
