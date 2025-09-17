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
   
     {/* HERO */}
<section className="bg-[#2b1723] text-white py-16">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
    
    {/* Texto */}
    <div>
      <p className="uppercase tracking-widest text-sm mb-4 text-gray-300">
        Una nueva experiencia en tu copa
      </p>
      <h1 className="text-5xl font-bold mb-6">WAILUKU GIN</h1>
      <p className="text-lg mb-8 text-gray-200">
        De las aguas más intensas surge la esencia de Wailuku Gin: 
        botánicos seleccionados, equilibrio perfecto y un carácter inconfundible.
      </p>
      <a
        href="#"
        className="inline-block bg-white text-black font-semibold px-8 py-3 rounded-full shadow-md hover:bg-gray-200 transition"
      >
        Conocer más
      </a>
    </div>

    {/* Imagen */}
    <div className="flex justify-center">
      <img
        src="https://res.cloudinary.com/dcgcfpjcf/image/upload/v1758126805/UNA_NUEVA_EXPERIENCIA_EN_TU_COPA_zzyca1.png"
        alt="Botella Wailuku"
        className="rounded-lg shadow-lg max-h-[500px]"
      />
    </div>

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
