import Image from "next/image";
import { Logo } from "@/components/Logo";
import {
  BagIcon,
  BoxIcon,
  ChefIcon,
  DeliveryIcon,
  OvenIcon,
  PizzaBadgeIcon,
  PizzaIcon,
  TwitterIcon,
  UserIcon,
} from "@/components/Icons";

/*
 * Todas las medidas `desk:` provienen del mockup original (768px de ancho)
 * multiplicadas x2: la tarjeta de la página mide 1308px y el contenido 1126px.
 * Por debajo del breakpoint `desk` la página pasa a un layout fluido apilado.
 */

const navLeft = [
  { label: "MENU", x: "desk:left-[106px]" },
  { label: "LOCATIONS", x: "desk:left-[204px]" },
  { label: "ORDER ONLINE", x: "desk:left-[316px]" },
];

const menuItems = [
  {
    name: "CHICKEN PARM",
    img: "/images/menu-1.jpg",
    price: "$9",
    desc: "Breaded chicken, red sauce, melted mozzarella and basil.",
  },
  {
    name: "CHICKEN ALFREDO",
    img: "/images/menu-2.jpg",
    price: "$10",
    desc: "Creamy parmesan sauce, grilled chicken, fresh herbs.",
  },
  {
    name: "SPAGHETTI & MEATBALLS",
    img: "/images/menu-3.jpg",
    price: "$10",
    desc: "House marinara with slow-cooked beef meatballs.",
  },
  {
    name: "BAKED MAC & CHEESE",
    img: "/images/menu-4.jpg",
    price: "$8",
    desc: "Three-cheese blend, baked golden with toasted crumbs.",
  },
];

const features = [
  { label: "CRUST GUARANTEE", Icon: PizzaIcon },
  { label: "CATERING ORDERS", Icon: OvenIcon },
  { label: "WE DELIVER", Icon: DeliveryIcon },
  { label: "LEARN MORE", Icon: BagIcon },
  { label: "CURBSIDE PICKUP", Icon: BoxIcon },
  { label: "PARTNERSHIPS", Icon: ChefIcon },
];

const whyPhotos = [1, 2, 3, 4, 5, 6].map((n) => `/images/why-${n}.jpg`);

const requestButtons = [
  { label: "LOCATIONS", x: "desk:left-[836px]" },
  { label: "GET\nGIFT CARDS", x: "desk:left-[932px]" },
  { label: "FOLLOW US", x: "desk:left-[1030px]" },
];

const footerLinks = [
  { label: "MENU", x: "desk:left-[476px]" },
  { label: "CAREERS", x: "desk:left-[568px]" },
  { label: "CATERING", x: "desk:left-[688px]" },
  { label: "COMMISSIONS", x: "desk:left-[808px]" },
  { label: "PRIVACY", x: "desk:left-[962px]" },
  { label: "TERMS", x: "desk:left-[1072px]" },
];

const btn =
  "inline-flex items-center justify-center rounded-full bg-brand font-condensed font-bold text-[#fff3e2] transition-colors hover:bg-brand-dark";

export default function Home() {
  return (
    <div className="desk:min-w-[1308px] min-h-screen">
      <main className="relative mx-auto w-full max-w-[1308px] overflow-hidden bg-paper px-4 shadow-[0_0_24px_rgba(0,0,0,0.12)] sm:px-8 desk:px-[90px] desk:pr-[92px]">
        {/* ───────────── HEADER ───────────── */}
        <header className="relative flex flex-wrap items-center justify-between gap-4 py-4 desk:block desk:h-[100px] desk:py-0">
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 font-condensed text-[15px] font-bold desk:contents desk:text-[17px]">
            <a
              href="#"
              className="flex h-[40px] items-center rounded-[5px] bg-[#f39f5c] px-3 text-ink desk:absolute desk:left-0 desk:top-[24px] desk:h-[50px] desk:w-[68px] desk:justify-center desk:px-0"
            >
              HOME
            </a>
            {navLeft.map((item) => (
              <a
                key={item.label}
                href="#"
                className={`text-[#2b2826] hover:text-brand desk:absolute desk:top-[38px] desk:leading-[24px] ${item.x}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <Logo
            size={108}
            className="order-first h-[72px] w-[72px] desk:absolute desk:left-[512px] desk:top-[-2px] desk:h-[108px] desk:w-[108px]"
          />

          <div className="flex items-center gap-5 font-condensed text-[15px] font-bold text-[#2b2826] desk:contents desk:text-[17px]">
            <a href="#" className="hover:text-brand desk:absolute desk:left-[724px] desk:top-[38px] desk:leading-[24px]">
              ABOUT
            </a>
            <a href="#" className="hover:text-brand desk:absolute desk:left-[826px] desk:top-[38px] desk:leading-[24px]">
              CONTACT
            </a>
            <a
              href="#"
              aria-label="Account"
              className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-brand text-[#fbe3c9] desk:absolute desk:left-[930px] desk:top-[30px]"
            >
              <UserIcon className="h-[24px] w-[24px]" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-ink desk:absolute desk:left-[990px] desk:top-[38px]"
            >
              <TwitterIcon className="h-[26px] w-[26px]" />
            </a>
            <a href="#" className="tracking-[-0.9px] hover:text-brand desk:absolute desk:left-[1040px] desk:top-[38px] desk:leading-[24px]">
              CALL NOW
            </a>
          </div>
        </header>

        {/* ───────────── HERO ───────────── */}
        <section className="relative mt-4 h-[420px] overflow-hidden rounded-[24px] desk:mt-[32px] desk:h-[468px]">
          <Image
            src="/images/hero.jpg"
            alt="Friends sharing a pepperoni pizza"
            fill
            priority
            sizes="(min-width: 1300px) 1126px, 100vw"
            className="object-cover object-left desk:object-center"
          />
          <div className="torn-paper absolute left-[16px] top-[90px] w-[calc(100%-32px)] max-w-[406px] -rotate-[0.8deg] bg-[#151413] px-[22px] pb-[22px] pt-[22px] desk:left-[26px] desk:top-[124px] desk:h-[210px] desk:w-[406px] desk:px-[37px] desk:pt-[27px]">
            <h1 className="font-condensed text-[34px] font-bold leading-[1] tracking-[0.6px] text-white desk:text-[45px]">
              FOR DELICIOUS,
              <br />
              MADE-FROM
              <br />
              SCRATCH PIZZAS
            </h1>
            <p className="mt-[12px] text-[11px] leading-[16px] text-[#d6d2cc]">
              Hand-tossed dough, house sauce and fresh toppings.
            </p>
          </div>
          <a
            href="#"
            className={`${btn} absolute left-[16px] top-[330px] h-[46px] w-[160px] font-sans text-[17px] desk:left-[30px] desk:top-[348px]`}
          >
            Order Online
          </a>
        </section>

        {/* ───────────── OUR MENU ───────────── */}
        <section className="pb-[28px] pt-[40px]">
          <h2 className="font-condensed text-[28px] font-bold leading-[28px] tracking-[0.4px]">OUR MENU</h2>
          <div className="mt-[32px] grid grid-cols-1 gap-[20px] sm:grid-cols-2 lg:grid-cols-4 desk:pl-[4px] desk:pr-[8px]">
            {menuItems.map((item) => (
              <article
                key={item.name}
                className="relative overflow-hidden rounded-[14px] bg-white shadow-[0_6px_16px_rgba(60,40,20,0.08)] desk:h-[214px]"
              >
                <div className="relative h-[120px]">
                  <Image src={item.img} alt={item.name} fill sizes="263px" className="object-cover" />
                  <span className="absolute right-[14px] top-[80px] flex h-[32px] w-[32px] items-center justify-center rounded-full bg-brand/90 text-[10px] font-bold text-[#fff3e2]">
                    {item.price}
                  </span>
                </div>
                <div className="px-[20px] pb-[16px] pt-[15px] pr-[50px]">
                  <h3 className="whitespace-nowrap font-condensed text-[22px] font-bold leading-[22px]">
                    {item.name}
                  </h3>
                  <p className="mt-[2px] text-[12px] leading-[18px] text-[#6d6a66]">{item.desc}</p>
                </div>
                <span className="absolute right-[19px] top-[172px] flex h-[28px] w-[28px] items-center justify-center rounded-full bg-brand text-[10px] font-bold text-[#fff3e2] max-desk:hidden">
                  {item.price}
                </span>
              </article>
            ))}
          </div>
          <div className="mt-[34px] flex justify-center">
            <a href="#" className={`${btn} h-[46px] w-[284px] text-[17px] tracking-[1.4px]`}>
              VIEW OUR COMPLETE MENU
            </a>
          </div>
        </section>

        <hr className="border-0 border-t-2 border-[#e4e2dc]" />

        {/* ───────────── HOME OF THE CHICAGO-STYLE ───────────── */}
        <section className="relative flex flex-col gap-10 py-10 desk:block desk:h-[386px] desk:py-0">
          <div className="desk:w-[400px] desk:pt-[37px]">
            <h2 className="font-display text-[36px] font-bold leading-[1.09] tracking-[-0.8px] desk:text-[45px] desk:leading-[49px]">
              HOME OF THE
              <br />
              CHICAGO-STYLE
              <br />
              THIN CRUST PIZZA
            </h2>
            <p className="mt-[25px] text-[14px] leading-[20px] text-[#5a5754] desk:w-[396px]">
              Our recipe has been passed down for generations: a cracker-thin crust, a bright tomato
              sauce and edge-to-edge toppings, tavern-cut into squares.
            </p>
            <div className="mt-[34px] flex items-center gap-[24px]">
              <a href="#" className={`${btn} h-[36px] w-[132px] text-[14px]`}>
                LEARN MORE
              </a>
              <a href="#" className="font-condensed text-[14px] font-bold text-[#2b2826] hover:text-brand">
                SEE LOCATIONS
              </a>
            </div>
          </div>

          <ul className="grid w-fit grid-cols-3 gap-x-[22px] gap-y-[22px] desk:absolute desk:left-[458px] desk:top-[49px]">
            {features.map(({ label, Icon }) => (
              <li key={label} className="flex w-[82px] flex-col items-center">
                <span className="flex h-[82px] w-[82px] items-center justify-center rounded-[16px] bg-brand text-[#fff3e2] shadow-[0_2px_6px_rgba(200,90,20,0.25)]">
                  <Icon className="h-[46px] w-[46px]" />
                </span>
                <span className="mt-[16px] whitespace-nowrap font-condensed text-[10px] font-bold leading-[12px] text-[#3a3633]">
                  {label}
                </span>
              </li>
            ))}
          </ul>

          <div className="relative h-[368px] w-[436px] max-w-full desk:absolute desk:left-[760px] desk:top-[53px]">
            <Image
              src="/images/team.png"
              alt="Owners of Crust Pizza Co."
              fill
              sizes="436px"
              className="object-contain mix-blend-multiply"
            />
          </div>
        </section>

        <hr className="border-0 border-t-2 border-[#e4e2dc]" />

        {/* ───────────── WAYS TO ENJOY ───────────── */}
        <section>
          <h2 className="pt-[33px] font-condensed text-[28px] font-bold leading-[28px] tracking-[1.5px]">WAYS TO ENJOY</h2>

          <div className="relative mt-8 flex flex-col gap-8 desk:mt-0 desk:block desk:h-[834px]">
            <div className="relative aspect-[520/534] w-full overflow-hidden rounded-[28px] shadow-[0_8px_20px_rgba(0,0,0,0.12)] desk:absolute desk:left-[-2px] desk:top-[32px] desk:h-[534px] desk:w-[520px]">
              <Image src="/images/pizza.jpg" alt="Pepperoni pizza" fill sizes="520px" className="scale-[1.03] object-cover" />
            </div>

            <div className="grid gap-6 sm:grid-cols-2 desk:contents">
              <article className="flex flex-col rounded-[20px] bg-night px-[34px] pb-8 pt-[32px] text-white shadow-[0_10px_22px_rgba(0,0,0,0.18)] desk:absolute desk:left-[568px] desk:top-[50px] desk:h-[320px] desk:w-[258px] desk:pb-0">
                <PizzaBadgeIcon className="mx-auto h-[72px] w-[72px]" />
                <h3 className="-mx-[20px] mt-[26px] whitespace-nowrap text-center font-condensed text-[25px] font-bold leading-[30px] tracking-[1.7px]">
                  AWARD-WINNING
                  <br />
                  PIZZA &amp; SERVICE
                </h3>
                <p className="mt-[4px] text-[11px] leading-[18px] text-[#b9b4ae]">
                  Voted best pizza in town five years running.
                </p>
                <a href="#" className={`${btn} mt-[16px] h-[34px] w-[140px] text-[12px]`}>
                  LEARN MORE
                </a>
              </article>

              <article className="flex flex-col items-center rounded-[20px] bg-night px-[30px] pb-8 pt-[32px] text-center text-white shadow-[0_10px_22px_rgba(0,0,0,0.18)] desk:absolute desk:left-[852px] desk:top-[50px] desk:h-[320px] desk:w-[260px] desk:pb-0">
                <PizzaBadgeIcon className="h-[72px] w-[72px]" />
                <h3 className="mt-[26px] font-condensed text-[25px] font-bold leading-[30px] tracking-[1.7px]">
                  KIDS EAT FREE
                  <br />
                  TUESDAYS!
                </h3>
                <p className="mt-[4px] text-[11px] leading-[18px] text-[#b9b4ae]">
                  One free kids meal with every adult entrée.
                </p>
                <a href="#" className={`${btn} mt-[12px] h-[34px] w-[200px] text-[12px]`}>
                  VIEW OUR COMPLETE MENU
                </a>
              </article>
            </div>

            <article className="rounded-[20px] bg-[#f8f7f3] p-[38px] pt-[28px] shadow-[0_8px_24px_rgba(0,0,0,0.08)] desk:absolute desk:left-[570px] desk:top-[442px] desk:h-[392px] desk:w-[548px]">
              <h3 className="font-condensed text-[30px] font-bold leading-[30px] tracking-[-0.6px]">WHY CHOOSE US</h3>
              <div className="mt-[20px] grid grid-cols-3 gap-[4px] desk:h-[288px] desk:w-[474px]">
                {whyPhotos.map((src) => (
                  <div key={src} className="relative aspect-[78/72] desk:aspect-auto">
                    <Image src={src} alt="" fill sizes="156px" className="object-cover" />
                  </div>
                ))}
              </div>
            </article>

            <div className="relative desk:absolute desk:left-[4px] desk:top-[632px] desk:w-[560px]">
              <p className="text-[25px] font-medium leading-[32px] tracking-[0.35px]">@yourbrandhandle</p>
              <h3 className="mt-[34px] font-condensed text-[29px] font-bold leading-[34px]">
                LET&apos;S WORK TOGETHER
                <br />
                FOR OUR COMMUNITY
              </h3>
              <p className="mt-[-6px] text-[12px] leading-[20px] text-[#5a5754] desk:w-[340px]">
                We partner with local schools and teams to raise funds for our neighborhoods.
              </p>
              <div className="relative mt-6 h-[168px] w-[176px] desk:absolute desk:left-[356px] desk:top-[16px] desk:mt-0">
                <Image
                  src="/images/community.png"
                  alt=""
                  fill
                  sizes="176px"
                  className="object-contain mix-blend-multiply"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ───────────── FRANCHISE ───────────── */}
        <section className="relative mt-12 flex flex-col gap-8 desk:mt-0 desk:block desk:h-[260px]">
          <div className="desk:absolute desk:left-[4px] desk:top-[87px]">
            <h2 className="font-condensed font-bold">
              <span className="block text-[27px] leading-[27px] tracking-[1px]">WANT TO OWN YOUR OWN</span>
              <span className="block text-[35px] leading-[36px]">CRUST PIZZA CO.?</span>
            </h2>
            <p className="mt-[4px] text-[12px] leading-[18px] text-[#5a5754]">
              Learn how to open a franchise location near you.
            </p>
            <a href="#" className={`${btn} mt-[18px] h-[40px] w-[196px] text-[15px] tracking-[0.8px]`}>
              SUBMIT A REQUEST
            </a>
          </div>

          <div className="relative aspect-[408/222] w-full max-w-[408px] overflow-hidden rounded-[14px] desk:absolute desk:left-[364px] desk:top-[38px] desk:h-[222px]">
            <Image src="/images/store.jpg" alt="Crust Pizza Co. storefront" fill sizes="408px" className="object-cover" />
          </div>

          <h2 className="font-condensed text-[27px] font-bold leading-[30px] tracking-[-0.8px] desk:absolute desk:left-[838px] desk:top-[84px]">
            SUBMIT A REQUEST
          </h2>
          <div className="flex gap-5 desk:contents">
            {requestButtons.map((b) => (
              <a
                key={b.label}
                href="#"
                className={`flex h-[74px] w-[76px] items-center justify-center whitespace-pre-line rounded-[14px] bg-brand text-center font-condensed text-[11px] font-bold leading-[14px] text-[#fff3e2] hover:bg-brand-dark desk:absolute desk:top-[156px] ${b.x}`}
              >
                {b.label}
              </a>
            ))}
          </div>
        </section>

        {/* ───────────── FOOTER ───────────── */}
        <footer className="relative flex flex-col gap-6 py-10 desk:block desk:h-[150px] desk:py-0">
          <div className="flex items-center gap-5 desk:contents">
            <Logo size={92} className="desk:absolute desk:left-[4px] desk:top-[30px]" />
            <p className="font-condensed text-[26px] font-bold leading-[27px] tracking-[-0.3px] desk:absolute desk:left-[118px] desk:top-[54px]">
              WANT TO PLACE AN
              <br />
              ORDER NOW?
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-2 font-condensed text-[16px] font-bold leading-[16px] tracking-[0.35px] text-[#2b2826] desk:contents">
            {footerLinks.map((l) => (
              <a key={l.label} href="#" className={`hover:text-brand desk:absolute desk:top-[72px] ${l.x}`}>
                {l.label}
              </a>
            ))}
          </nav>
        </footer>
      </main>
    </div>
  );
}
