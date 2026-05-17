import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-4 text-center">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-sky-300">404</p>
        <h1 className="mt-4 text-3xl font-semibold text-white">
          Página não encontrada
        </h1>
        <p className="mt-3 text-slate-300">
          O conteúdo que você procura não está disponível.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950"
        >
          Voltar ao início
        </Link>
      </div>
    </main>
  );
}
