import { Photo } from "@/components/photo";

const booking = "https://www.gorendezvous.com/anaisholly";

const audiences = [
  {
    name: "Nourrisson",
    text: "Les tout-petits, avec lenteur. Les parents repartent avec ce qui a été compris.",
  },
  {
    name: "Sportif",
    text: "De l’entraînement à la récupération — y compris après des années de rugby à haut niveau.",
  },
  {
    name: "Adulte",
    text: "Le dos, la nuque, la charge du bureau, ce qui revient.",
  },
  {
    name: "Aîné",
    text: "La raideur, l’équilibre, le plaisir de bouger encore sans y penser.",
  },
] as const;

function BookLink({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={booking}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <>
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-paper focus:px-3 focus:py-2"
      >
        Aller au contenu
      </a>

      <header className="fixed inset-x-0 top-0 z-20 border-b border-line/80 bg-paper">
        <div className="flex h-16 items-center justify-between gap-4 px-5 sm:px-8 lg:px-14">
          <a href="#haut" className="font-display text-[1.35rem] leading-none">
            Anaïs Holly
          </a>
          <BookLink className="shrink-0 border-b border-ink/25 pb-px text-[0.92rem] text-ink transition-opacity duration-500 hover:opacity-55">
            Prendre rendez-vous
          </BookLink>
        </div>
      </header>

      <main id="contenu" className="pt-16">
        <section
          id="haut"
          className="grid scroll-mt-16 items-start gap-x-8 gap-y-12 px-5 pb-8 pt-8 sm:px-8 lg:grid-cols-12 lg:px-14 lg:pb-10 lg:pt-6"
        >
          <div className="flex flex-col lg:col-span-5 lg:min-h-[calc(100svh-7.5rem)]">
            <p className="text-sm text-mute">Ostéopathe · Montréal</p>
            <div className="mt-12 lg:mt-auto lg:pb-2">
              <h1 className="font-display text-[clamp(3.15rem,4.7vw,5.15rem)] leading-[0.96] text-balance">
                Le quotidien,
                <br />
                plus calme
                <br />
                dans le corps.
              </h1>
              <p className="mt-8 max-w-[34ch] text-[1.05rem] leading-relaxed text-ink/80">
                Nourrissons, sportifs, adultes, aînés. Une écoute attentive, des
                mains précises, un plan clair.
              </p>
              <BookLink className="mt-10 inline-flex items-center gap-3 border-b border-ink/25 pb-1 text-[0.98rem] transition-[border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-ink">
                Prendre rendez-vous
                <span aria-hidden="true">→</span>
              </BookLink>
            </div>
          </div>

          <figure className="lg:col-span-6 lg:col-start-7">
            <Photo
              src="/photos/scrub.jpg"
              alt="Anaïs Holly, en sarrau, le regard vers l’objectif."
              sizes="(min-width: 1024px) 48vw, 100vw"
              priority
              position="object-[center_22%]"
              className="aspect-[3/4] w-full lg:aspect-auto lg:h-[calc(100svh-7.5rem)]"
            />
          </figure>
        </section>

        <section className="px-5 py-28 sm:px-8 md:py-40 lg:px-14">
          <p
            className="emerge max-w-[14ch] font-display text-[clamp(2.6rem,5.6vw,4.75rem)] leading-[1.02] text-balance"
            style={{ ["--range" as string]: "entry 5% entry 46%" }}
          >
            Ce n’est pas un massage sous un autre nom.
          </p>
          <p
            className="emerge mt-8 max-w-[36ch] text-lg leading-relaxed text-mute"
            style={{ ["--range" as string]: "entry 12% entry 54%" }}
          >
            Ni un spa. Une pratique ostéopathique générale, à Montréal&nbsp;:
            écouter, puis agir avec précision.
          </p>
        </section>

        <section className="grid items-end gap-10 px-5 py-8 sm:px-8 md:py-16 lg:grid-cols-12 lg:px-14">
          <div className="emerge lg:col-span-4 lg:pb-4">
            <p className="font-display text-[clamp(2rem,3vw,2.75rem)] leading-[1.08] text-balance">
              Avant la clinique, le rugby à haut niveau.
            </p>
            <p className="mt-5 max-w-[30ch] leading-relaxed text-mute">
              Le geste, l’impact, la récupération — elle les a vécus.
            </p>
          </div>
          <figure className="lg:col-span-7 lg:col-start-6">
            <Photo
              src="/photos/rugby.jpg"
              alt="Anaïs Holly en match de rugby, ballon en main, maillot du Canada."
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="aspect-square w-full"
            />
          </figure>
        </section>

        <section className="pt-24 md:pt-36" aria-labelledby="pour-qui">
          <div className="px-5 sm:px-8 lg:px-14">
            <h2 id="pour-qui" className="emerge text-sm text-mute">
              Pour qui
            </h2>
            <div className="mt-8 md:mt-12">
              {audiences.slice(0, 2).map((person, index) => (
                <article
                  key={person.name}
                  className="emerge grid gap-4 border-t border-line py-12 md:grid-cols-12 md:items-end md:gap-8 md:py-16"
                  style={{
                    ["--range" as string]: `entry ${index * 4}% entry ${40 + index * 6}%`,
                  }}
                >
                  <h3 className="font-display text-[clamp(2.75rem,6vw,5rem)] leading-none md:col-span-5">
                    {person.name}
                  </h3>
                  <p className="max-w-[34ch] text-lg leading-relaxed text-ink/80 md:col-span-5 md:col-start-8">
                    {person.text}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <figure className="mt-6 md:mt-10">
            <Photo
              src="/photos/action.jpg"
              alt="Anaïs Holly court avec le ballon, en match, maillot du Canada."
              sizes="100vw"
              position="object-[center_45%]"
              className="aspect-video w-full"
            />
            <figcaption className="px-5 pt-4 text-sm text-mute sm:px-8 lg:px-14">
              En match.
            </figcaption>
          </figure>

          <div className="mt-16 px-5 sm:px-8 md:mt-24 lg:px-14">
            {audiences.slice(2).map((person, index) => (
              <article
                key={person.name}
                className="emerge grid gap-4 border-t border-line py-12 md:grid-cols-12 md:items-end md:gap-8 md:py-16"
                style={{
                  ["--range" as string]: `entry ${index * 4}% entry ${40 + index * 6}%`,
                }}
              >
                <h3 className="font-display text-[clamp(2.75rem,6vw,5rem)] leading-none md:col-span-5">
                  {person.name}
                </h3>
                <p className="max-w-[34ch] text-lg leading-relaxed text-ink/80 md:col-span-5 md:col-start-8">
                  {person.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid items-center gap-14 px-5 py-28 sm:px-8 md:py-40 lg:grid-cols-12 lg:px-14">
          <div className="order-1 lg:order-2 lg:col-span-6 lg:col-start-7">
            <h2 className="emerge font-display text-[clamp(2.6rem,4.5vw,4.25rem)] leading-[1.02] text-balance">
              La première visite
            </h2>
            <p className="emerge mt-6 max-w-[36ch] text-lg leading-relaxed text-ink/80">
              Soixante minutes. Un bilan, le soin, puis la suite — sans jargon.
            </p>
            <p className="emerge mt-10 font-display text-5xl leading-none">
              135&nbsp;$
            </p>
            <p className="emerge mt-3 text-mute">
              La séance. Un reçu pour l’assurance.
            </p>
            <p className="emerge mt-8 max-w-[34ch] leading-relaxed text-ink/80">
              Si vous vous demandez si c’est pour vous, la première visite sert
              à le savoir.
            </p>
            <BookLink className="mt-10 inline-flex items-center gap-3 border-b border-ink/25 pb-1 transition-[border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-ink">
              Réserver cette heure
              <span aria-hidden="true">→</span>
            </BookLink>
          </div>
          <figure className="order-2 lg:order-1 lg:col-span-4">
            <Photo
              src="/photos/polo.jpg"
              alt="Anaïs Holly en polo blanc, sourire calme, hors du terrain."
              sizes="(min-width: 1024px) 380px, 86vw"
              position="object-[center_20%]"
              className="aspect-[2/3] w-full max-w-[26rem]"
            />
            <figcaption className="mt-4 text-sm text-mute">Hors du jeu.</figcaption>
          </figure>
        </section>

        <section className="px-5 py-12 sm:px-8 md:py-20 lg:px-14 lg:pb-28">
          <h2 className="emerge text-sm text-mute">Ce qui amène les gens</h2>
          <p className="emerge mt-8 max-w-[18ch] font-display text-[clamp(2.2rem,4.2vw,3.6rem)] leading-[1.08] text-balance">
            Le bas du dos. La nuque après l’écran. La raideur. Le retour après
            l’effort.
          </p>
          <p className="emerge mt-10 max-w-[42ch] leading-relaxed text-mute">
            Après un choc ou une commotion, le suivi médical reste premier.
            L’ostéopathie peut accompagner la récupération. Elle ne le
            remplace pas.
          </p>
        </section>

        <section
          id="rendez-vous"
          className="grid scroll-mt-16 gap-16 border-t border-line px-5 py-24 sm:px-8 md:py-36 lg:grid-cols-12 lg:px-14"
        >
          <div className="lg:col-span-7">
            <p className="text-sm text-mute">Réserver</p>
            <BookLink className="mt-6 block font-display text-[clamp(3rem,7vw,6.25rem)] leading-[0.96] text-balance transition-opacity duration-500 hover:opacity-60">
              Prendre rendez-vous
            </BookLink>
            <p className="mt-8 max-w-[34ch] leading-relaxed text-ink/80">
              La réservation se fait sur GoRendezvous. Une heure, 135&nbsp;$,
              reçu pour l’assurance.
            </p>
          </div>
          <dl className="grid content-end gap-8 text-[0.98rem] leading-relaxed lg:col-span-4 lg:col-start-9">
            <div>
              <dt className="text-sm text-mute">Horaires</dt>
              <dd className="mt-2">
                Mercredi · 13&nbsp;h à 17&nbsp;h
                <br />
                Vendredi · 9&nbsp;h à 17&nbsp;h
                <br />
                Samedi · 9&nbsp;h à 15&nbsp;h
              </dd>
            </div>
            <div>
              <dt className="text-sm text-mute">Téléphone</dt>
              <dd className="mt-2">
                <a href="tel:+15145550193" className="border-b border-ink/20">
                  514&nbsp;555-0193
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm text-mute">Courriel</dt>
              <dd className="mt-2">
                <a
                  href="mailto:anaisholly.osteo@gmail.com"
                  className="border-b border-ink/20 break-all"
                >
                  anaisholly.osteo@gmail.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm text-mute">Instagram</dt>
              <dd className="mt-2">
                <a
                  href="https://instagram.com/anaisholly.osteo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-ink/20"
                >
                  @anaisholly.osteo
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm text-mute">Lieu</dt>
              <dd className="mt-2 max-w-[28ch]">
                Montréal. L’adresse de la clinique est confirmée à la
                réservation.
              </dd>
            </div>
          </dl>
        </section>
      </main>

      <footer className="flex flex-col gap-3 px-5 py-10 text-sm text-mute sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-14">
        <p>Anaïs Holly · Ostéopathe · Montréal</p>
        <p>© {new Date().getFullYear()}</p>
      </footer>
    </>
  );
}
