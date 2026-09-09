export function HomePage() {
  return (
    <section className="min-h-[calc(100vh-80px)] bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-2xl">
          <span className="mb-4 inline-block rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-600">
            6. Sınıf Öğrenme Platformu
          </span>

          <h1 className="text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Öğrenmek artık
            <span className="text-violet-600"> daha eğlenceli.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            Derslerini tekrar et, notlarını incele, quizleri çöz ve oyunlarla
            öğrendiklerini pekiştir.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-700">
              Dersleri Keşfet
            </button>

            <button className="rounded-xl border border-violet-200 bg-white px-6 py-3 font-semibold text-violet-600 transition hover:bg-violet-50">
              Oyunlara Göz At
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
