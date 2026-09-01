import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <div className="bg-background text-on-surface font-sans min-h-screen relative antialiased selection:bg-surface-tint selection:text-background overflow-x-hidden">
      {/* Dot grid overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.03)_1.5px,transparent_1.5px)] bg-[size:32px_32px]"></div>
      </div>

      {/* Top bar */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-surface-container-lowest/80 border-b border-outline-variant/10">
        <div className="max-w-4xl mx-auto flex items-center gap-4 px-6 py-4">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </button>
        </div>
      </header>

      <main className="relative z-10 max-w-4xl mx-auto px-6 py-12 md:py-20">
        <div className="glass-premium rounded-[2rem] p-8 md:p-14 border border-outline-variant/15">
          
          <h1 className="font-sans text-3xl md:text-4xl font-bold text-on-surface mb-2 tracking-tight">
            Política de Privacidad
          </h1>
          <p className="text-sm text-on-surface-variant mb-10 font-light">
            Última actualización: {new Date().toLocaleDateString("es-CO", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <div className="space-y-8 text-on-surface-variant leading-relaxed font-light text-[15px]">

            {/* 1. Responsable */}
            <section>
              <h2 className="font-sans text-xl font-semibold text-on-surface mb-3">
                1. Responsable del Tratamiento de Datos
              </h2>
              <p>
                <strong className="text-on-surface font-medium">Syentropy</strong> (en adelante, "la Empresa"), con domicilio en Bogotá, Colombia, 
                es el responsable del tratamiento de los datos personales que usted proporciona a través de este sitio web 
                y de los servicios digitales asociados.
              </p>
              <p className="mt-2">
                Correo electrónico de contacto para temas de privacidad: <strong className="text-on-surface font-medium">syentropy.admin@gmail.com</strong>
              </p>
            </section>

            {/* 2. Datos que recopilamos */}
            <section>
              <h2 className="font-sans text-xl font-semibold text-on-surface mb-3">
                2. Datos Personales que Recopilamos
              </h2>
              <p className="mb-3">
                A través de este sitio web y nuestros servicios, podemos recopilar los siguientes datos personales:
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2">
                <li><strong className="text-on-surface font-medium">Datos de identificación:</strong> Nombre completo, nombre de empresa u organización.</li>
                <li><strong className="text-on-surface font-medium">Datos de contacto:</strong> Dirección de correo electrónico corporativo o personal.</li>
                <li><strong className="text-on-surface font-medium">Datos del proyecto:</strong> Descripción del proyecto o problema tecnológico, área de interés seleccionada.</li>
                <li><strong className="text-on-surface font-medium">Datos de navegación:</strong> Dirección IP, tipo de navegador, páginas visitadas, tiempo de permanencia, cookies y tecnologías de seguimiento similares.</li>
                <li><strong className="text-on-surface font-medium">Datos de interacción social:</strong> Información proporcionada a través de servicios de Meta (Facebook, Instagram, WhatsApp Business API), como nombre de perfil público, correo electrónico asociado a la cuenta, e interacciones con nuestros anuncios o páginas.</li>
              </ul>
            </section>

            {/* 3. Finalidades */}
            <section>
              <h2 className="font-sans text-xl font-semibold text-on-surface mb-3">
                3. Finalidades del Tratamiento
              </h2>
              <p className="mb-3">Utilizamos sus datos personales para las siguientes finalidades:</p>
              <ul className="list-disc list-inside space-y-1.5 pl-2">
                <li>Gestionar y responder solicitudes de contacto y consultoría enviadas a través del formulario web.</li>
                <li>Almacenar la información de solicitudes en nuestra base de datos segura para dar seguimiento comercial.</li>
                <li>Enviar comunicaciones relacionadas con los servicios solicitados o contratados.</li>
                <li>Mejorar la experiencia de usuario en nuestro sitio web mediante el análisis de datos de navegación.</li>
                <li>Gestionar campañas de publicidad y remarketing a través de plataformas de Meta (Facebook Ads, Instagram Ads).</li>
                <li>Medir el rendimiento de campañas publicitarias mediante Meta Pixel y herramientas analíticas asociadas.</li>
                <li>Cumplir con obligaciones legales y regulatorias vigentes en Colombia.</li>
              </ul>
            </section>

            {/* 4. Uso compartido con terceros (CRUCIAL PARA META) */}
            <section>
              <h2 className="font-sans text-xl font-semibold text-on-surface mb-3">
                4. Uso Compartido de Datos con Terceros
              </h2>
              <p className="mb-3">
                Syentropy puede compartir sus datos personales con los siguientes terceros, exclusivamente para las finalidades descritas:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>
                  <strong className="text-on-surface font-medium">Meta Platforms, Inc. (Facebook, Instagram, WhatsApp):</strong> Compartimos datos de interacción y navegación 
                  a través de Meta Pixel, la API de Conversiones de Meta y la API de WhatsApp Business (WABA) 
                  con el propósito de medir la efectividad de campañas publicitarias, ofrecer publicidad personalizada 
                  y gestionar comunicaciones comerciales automatizadas. La política de privacidad de Meta se encuentra disponible en{" "}
                  <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    https://www.facebook.com/privacy/policy/
                  </a>.
                </li>
                <li>
                  <strong className="text-on-surface font-medium">Supabase (base de datos):</strong> Utilizamos Supabase como proveedor de infraestructura de base de datos 
                  para almacenar de forma segura la información de las solicitudes recibidas.
                </li>
                <li>
                  <strong className="text-on-surface font-medium">Vercel (hosting):</strong> Nuestro sitio web está alojado en Vercel, quien puede procesar datos de acceso 
                  (dirección IP, agente de usuario) en el contexto de la prestación del servicio de alojamiento.
                </li>
                <li>
                  <strong className="text-on-surface font-medium">Google (Analytics, Fonts):</strong> Utilizamos servicios de Google para análisis web y tipografías, 
                  lo que puede implicar la recopilación de datos de navegación.
                </li>
              </ul>
              <p className="mt-3">
                No vendemos, alquilamos ni cedemos sus datos personales a terceros con fines comerciales ajenos a los aquí descritos.
              </p>
            </section>

            {/* 5. Cookies y tecnologías de seguimiento */}
            <section>
              <h2 className="font-sans text-xl font-semibold text-on-surface mb-3">
                5. Cookies y Tecnologías de Seguimiento
              </h2>
              <p className="mb-3">
                Este sitio web utiliza cookies y tecnologías similares, incluyendo:
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2">
                <li><strong className="text-on-surface font-medium">Cookies esenciales:</strong> Necesarias para el funcionamiento técnico del sitio.</li>
                <li><strong className="text-on-surface font-medium">Cookies analíticas:</strong> Para comprender cómo los visitantes interactúan con el sitio web.</li>
                <li><strong className="text-on-surface font-medium">Cookies de publicidad (Meta Pixel):</strong> Para medir la efectividad de campañas publicitarias en Facebook e Instagram, y para ofrecer publicidad relevante.</li>
              </ul>
              <p className="mt-3">
                Puede gestionar sus preferencias de cookies a través de la configuración de su navegador. 
                Tenga en cuenta que la desactivación de ciertas cookies puede afectar la funcionalidad del sitio.
              </p>
            </section>

            {/* 6. Derechos del usuario */}
            <section>
              <h2 className="font-sans text-xl font-semibold text-on-surface mb-3">
                6. Derechos del Titular de los Datos
              </h2>
              <p className="mb-3">
                De conformidad con la <strong className="text-on-surface font-medium">Ley 1581 de 2012</strong> (Ley de Protección de Datos Personales / Habeas Data) 
                y el <strong className="text-on-surface font-medium">Decreto 1377 de 2013</strong> de la República de Colombia, usted tiene derecho a:
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2">
                <li><strong className="text-on-surface font-medium">Conocer:</strong> Acceder a sus datos personales almacenados en nuestras bases de datos.</li>
                <li><strong className="text-on-surface font-medium">Actualizar:</strong> Solicitar la corrección o actualización de datos inexactos o incompletos.</li>
                <li><strong className="text-on-surface font-medium">Rectificar:</strong> Solicitar la modificación de información errónea.</li>
                <li><strong className="text-on-surface font-medium">Suprimir:</strong> Solicitar la eliminación de sus datos cuando considere que no están siendo tratados conforme a la ley, o cuando hayan dejado de ser necesarios para la finalidad autorizada.</li>
                <li><strong className="text-on-surface font-medium">Revocar:</strong> Revocar la autorización para el tratamiento de sus datos personales.</li>
                <li><strong className="text-on-surface font-medium">Presentar quejas:</strong> Ante la Superintendencia de Industria y Comercio (SIC) por infracciones a la normativa vigente.</li>
              </ul>
              <p className="mt-3">
                Para ejercer cualquiera de estos derechos, envíe un correo electrónico a{" "}
                <strong className="text-on-surface font-medium">syentropy.admin@gmail.com</strong>{" "}
                indicando su nombre completo, el derecho que desea ejercer y una descripción clara de su solicitud. 
                Responderemos en un plazo máximo de quince (15) días hábiles.
              </p>
            </section>

            {/* 7. Eliminación de datos (CRUCIAL PARA META) */}
            <section>
              <h2 className="font-sans text-xl font-semibold text-on-surface mb-3">
                7. Instrucciones para la Eliminación de Datos
              </h2>
              <p className="mb-3">
                Si desea que eliminemos completamente sus datos personales de nuestros sistemas, incluyendo 
                cualquier dato recopilado a través de servicios de Meta (Facebook Login, WhatsApp Business, etc.), 
                puede hacerlo de las siguientes formas:
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2">
                <li>
                  Envíe un correo electrónico a <strong className="text-on-surface font-medium">syentropy.admin@gmail.com</strong> con 
                  el asunto <em>"Solicitud de eliminación de datos"</em>, indicando el correo electrónico con el que se registró 
                  o interactuó con nuestros servicios.
                </li>
                <li>
                  Si utilizó Facebook Login o interactuó con nuestras aplicaciones a través de Meta, 
                  también puede revocar los permisos directamente desde la configuración de su cuenta de Facebook en{" "}
                  <a href="https://www.facebook.com/settings?tab=applications" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Configuración &gt; Apps y sitios web
                  </a>.
                </li>
              </ul>
              <p className="mt-3">
                Una vez recibida su solicitud, procederemos a eliminar sus datos en un plazo máximo de treinta (30) 
                días calendario y le confirmaremos por correo electrónico la eliminación efectiva.
              </p>
            </section>

            {/* 8. Seguridad */}
            <section>
              <h2 className="font-sans text-xl font-semibold text-on-surface mb-3">
                8. Medidas de Seguridad
              </h2>
              <p>
                Syentropy implementa medidas técnicas y organizativas apropiadas para proteger sus datos personales 
                contra acceso no autorizado, pérdida, alteración o destrucción. Estas medidas incluyen cifrado de datos 
                en tránsito (SSL/TLS), almacenamiento seguro en bases de datos con acceso restringido, y revisiones 
                periódicas de seguridad.
              </p>
            </section>

            {/* 9. Menores */}
            <section>
              <h2 className="font-sans text-xl font-semibold text-on-surface mb-3">
                9. Menores de Edad
              </h2>
              <p>
                Este sitio web y nuestros servicios no están dirigidos a menores de edad. No recopilamos intencionalmente 
                datos personales de menores de 18 años. Si usted es padre, madre o tutor y cree que un menor nos ha 
                proporcionado datos personales, contáctenos a <strong className="text-on-surface font-medium">syentropy.admin@gmail.com</strong> para 
                solicitar su eliminación.
              </p>
            </section>

            {/* 10. Cambios */}
            <section>
              <h2 className="font-sans text-xl font-semibold text-on-surface mb-3">
                10. Modificaciones a esta Política
              </h2>
              <p>
                Syentropy se reserva el derecho de actualizar esta Política de Privacidad en cualquier momento. 
                Las modificaciones serán publicadas en esta misma página con la fecha de actualización correspondiente. 
                Le recomendamos revisarla periódicamente.
              </p>
            </section>

            {/* 11. Legislación aplicable */}
            <section>
              <h2 className="font-sans text-xl font-semibold text-on-surface mb-3">
                11. Legislación Aplicable
              </h2>
              <p>
                Esta política se rige por las leyes de la República de Colombia, en particular la{" "}
                <strong className="text-on-surface font-medium">Ley Estatutaria 1581 de 2012</strong>,{" "}
                el <strong className="text-on-surface font-medium">Decreto 1377 de 2013</strong>, y demás normas concordantes 
                en materia de protección de datos personales (Habeas Data).
              </p>
            </section>

            {/* 12. Contacto */}
            <section>
              <h2 className="font-sans text-xl font-semibold text-on-surface mb-3">
                12. Contacto
              </h2>
              <p>
                Si tiene preguntas o inquietudes sobre esta Política de Privacidad o sobre el tratamiento de sus datos personales, 
                puede contactarnos a través de:
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2 mt-3">
                <li>Correo electrónico: <strong className="text-on-surface font-medium">privacidad@syentropy.com</strong></li>
                <li>Formulario de contacto en <a href="/#contacto" className="text-primary hover:underline">nuestro sitio web</a></li>
              </ul>
            </section>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-6 bg-surface-container-lowest border-t border-outline-variant/10 text-center">
        <p className="text-xs text-on-surface-variant font-light">
          © {new Date().getFullYear()} Syentropy. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}
