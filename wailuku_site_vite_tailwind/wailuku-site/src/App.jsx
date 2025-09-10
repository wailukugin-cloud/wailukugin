import React from "react";
import { motion } from "framer-motion";

/**
 * Wailuku — Landing + Shop
 * TailwindCSS + Framer Motion
 * TODO: Reemplazar los placeholders de Cloudinary y Mercado Pago.
 *
 * Cloudinary:
 *  - Reemplazar <tu_cloud_name> por tu Cloud Name real.
 *  - Reemplazar <PUBLIC_ID_BOTELLA>, <PUBLIC_ID_PACK6>, <PUBLIC_ID_KITCOPAS> por los IDs reales de las imágenes.
 *
 * Mercado Pago:
 *  - Reemplazar LINK_GIN_750, LINK_PACK6, LINK_KIT_COPAS con tus Payment Links reales.
 */

const products = [
  {
    id: "gin750",
    title: "Wailuku Gin — 750 ml",
    price: "ARS 26.000",
    desc: "Destilación artesanal. Perfil limpio y cítrico con notas especiadas.",
    img: "https://res.cloudinary.com/<tu_cloud_name>/image/upload/f_auto,q_auto,w_1200/<PUBLIC_ID_BOTELLA>.png",
    link: "https://mpago.la/LINK_GIN_750",
  },
  {
    id: "pack6",
    title: "Wailuku Gin — 750 ml (Pack x6)",
    price: "ARS 120.000",
    desc: "Pack especial para bares y eventos. 6 botellas de 750 ml.",
    img: "https://res.cloudinary.com/<tu_cloud_name>/image/upload/f_auto,q_auto,w_1200/<PUBLIC_ID_PACK6>.png",
    link: "https://mpago.la/LINK_PACK6",
  },
  {
    id: "kitcopas",
    title: "Botella Wailuku + 2 Copas",
    price: "ARS 39.000",
    desc: "Set ideal para regalo: 1 botella de Wailuku + 2 copas gin tonic.",
    img: "https://res.cloudinary.com/<tu_cloud_name>/image/upload/f_auto,q_auto,w_1200/<PUBLIC_ID_KITCOPAS>.png",
    link: "https://mpago.la/LINK_KIT_COPAS",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0c10] text-white antialiased">
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-[#0b0c10]/70 bg-[#0b0c10]/60 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-white/5 grid place-items-center border border-white/10">
              {/* Tridente */}
              <span className="text-xl leading-none">⚔️</span>
            </div>
            <span className="font-semibold tracking-wide">WAILUKU GIN</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-white/80">
            <a href="#origen" className="hover:text-white">Origen</a>
            <a href="#botanicos" className="hover:text-white">Botánicos</a>
            <a href="#shop" className="hover:text-white">Comprar</a>
            <a href="#contacto" className="hover:text-white">Contacto</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.35),transparent_60%)]"/>
        <div className="mx-auto max-w-6xl px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}}>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              El espíritu del mar, en cada gota.
            </h1>
            <p className="mt-4 text-white/80 max-w-prose">
              Desde lo profundo del océano emerge una nueva leyenda. Wailuku Gin, destilado artesanal con una
              selección precisa de botánicos, equilibrio limpio y final persistente.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="#shop" className="px-5 py-3 rounded-2xl bg-white text-black font-medium hover:bg-white/90 transition">Comprar ahora</a>
              <a href="#origen" className="px-5 py-3 rounded-2xl border border-white/20 hover:border-white/40 transition">Conocer más</a>
            </div>
          </motion.div>
          <motion.div initial={{opacity:0, scale:0.98}} animate={{opacity:1, scale:1}} transition={{duration:0.6, delay:0.1}} className="relative">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
              <img
                src="https://res.cloudinary.com/<tu_cloud_name>/image/upload/f_auto,q_auto,w_1200/<PUBLIC_ID_BOTELLA>.png"
                alt="Botella Wailuku"
                className="h-full w-full object-contain bg-transparent"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white text-black px-4 py-2 rounded-xl shadow">Lote de 26 botellas</div>
          </motion.div>
        </div>
      </section>

      {/* ORIGEN */}
      <section id="origen" className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">Origen</h2>
          <p className="mt-4 text-white/80">
            Wailuku significa “aguas de destrucción”. Nuestra identidad nace del océano: tridente, ola, y un diseño
            minimalista en negro mate con detalles brillantes. Producimos en tandas pequeñas para asegurar
            consistencia y carácter.
          </p>
        </div>
        <div className="rounded-3xl overflow-hidden border border-white/10">
          <img src="https://images.unsplash.com/photo-1505764706515-aa95265c5abc?q=80&w=1600&auto=format&fit=crop" alt="Mar oscuro" className="h-full w-full object-cover"/>
        </div>
      </section>

      {/* BOTÁNICOS */}
      <section id="botanicos" className="bg-white/5 border-y border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">Botánicos</h2>
          <p className="mt-2 text-white/80">Enebro · Cardamomo · Pomelo verde · Pimienta de Jamaica · Menta</p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Enebro","Cardamomo","Pomelo verde","Pimienta de Jamaica","Menta","Destilación lenta"].map((t,i)=> (
              <div key={i} className="rounded-3xl border border-white/10 bg-[#0f1115] p-6">
                <h3 className="font-medium">{t}</h3>
                <p className="mt-2 text-sm text-white/70">Selección cuidadosa para un perfil aromático limpio, cítrico y especiado.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHOP */}
      <section id="shop" className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-2xl md:text-3xl font-semibold">Comprar</h2>
          <p className="text-sm text-white/60">Pagos seguros vía Mercado Pago.</p>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.id} className="group rounded-3xl border border-white/10 overflow-hidden bg-[#0f1115]">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition duration-500"/>
              </div>
              <div className="p-6">
                <h3 className="font-medium text-lg">{p.title}</h3>
                <p className="mt-1 text-white/60">{p.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-white/90 font-semibold">{p.price}</span>
                  <a href={p.link} className="px-4 py-2 rounded-xl bg-white text-black font-medium hover:bg-white/90 transition">Comprar</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-white/50">* Reemplazar los enlaces y las imágenes por sus Payment Links y fotos reales de productos. Se pueden crear variantes por región o promos temporales.</p>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="bg-white/5 border-y border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Contacto</h2>
            <p className="mt-2 text-white/80">¿Mayoristas, bares o eventos? Escribinos y coordinamos una degustación.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="mailto:hola@wailuku.gin" className="px-5 py-3 rounded-2xl border border-white/20 hover:border-white/40 transition">hola@wailuku.gin</a>
              <a href="https://wa.me/5490000000000?text=Hola%20Wailuku" className="px-5 py-3 rounded-2xl bg-white text-black font-medium hover:bg-white/90 transition">WhatsApp</a>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 p-6">
            <h3 className="font-medium">Preguntas frecuentes</h3>
            <ul className="mt-3 space-y-2 text-white/80 text-sm">
              <li>• Envíos a todo el país.</li>
              <li>• Retiro por punto de entrega a coordinar.</li>
              <li>• Métodos de pago: tarjetas, débito, billeteras (Mercado Pago).</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mx-auto max-w-6xl px-4 py-10 text-sm text-white/60">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Wailuku Gin — Destilación artesanal.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">TikTok</a>
            <a href="#" className="hover:text-white">YouTube</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
