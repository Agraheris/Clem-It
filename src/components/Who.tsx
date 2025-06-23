const Who: React.FC = () => {

  return (
    <>
      {/* Menu Sticky Horizontal */}
      <nav className="sticky top-0 bg-white/95 backdrop-blur-sm shadow-md z-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-2 py-2">
          {/* Menu Mobile - 2 lignes */}
          <div className="block md:hidden">
            <div className="flex flex-col gap-2">
              <ul className="flex justify-center gap-4 text-sm font-medium">
                <li>
                  <a 
                    href="#about" 
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-200 px-3 py-2 rounded-md hover:bg-blue-50 whitespace-nowrap min-h-[44px] flex items-center"
                  >
                    À propos
                  </a>
                </li>
                <li>
                  <a 
                    href="#formations" 
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-200 px-3 py-2 rounded-md hover:bg-blue-50 whitespace-nowrap min-h-[44px] flex items-center"
                  >
                    Formations
                  </a>
                </li>
                <li>
                  <a 
                    href="#parcours" 
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-200 px-3 py-2 rounded-md hover:bg-blue-50 whitespace-nowrap min-h-[44px] flex items-center"
                  >
                    Parcours
                  </a>
                </li>
              </ul>
              <ul className="flex justify-center gap-4 text-sm font-medium">
                <li>
                  <a 
                    href="#pourquoi" 
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-200 px-3 py-2 rounded-md hover:bg-blue-50 whitespace-nowrap min-h-[44px] flex items-center"
                  >
                    Pourquoi moi
                  </a>
                </li>
                <li>
                  <a 
                    href="#offres" 
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-200 px-3 py-2 rounded-md hover:bg-blue-50 whitespace-nowrap min-h-[44px] flex items-center"
                  >
                    Offres
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-200 px-3 py-2 rounded-md hover:bg-blue-50 whitespace-nowrap min-h-[44px] flex items-center"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Menu Desktop - 1 ligne */}
          <ul className="hidden md:flex justify-center gap-6 text-base font-medium">
            <li>
              <a 
                href="#about" 
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 px-4 py-3 rounded-md hover:bg-blue-50 whitespace-nowrap"
              >
                À propos
              </a>
            </li>
            <li>
              <a 
                href="#formations" 
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 px-4 py-3 rounded-md hover:bg-blue-50 whitespace-nowrap"
              >
                Formations
              </a>
            </li>
            <li>
              <a 
                href="#parcours" 
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 px-4 py-3 rounded-md hover:bg-blue-50 whitespace-nowrap"
              >
                Parcours
              </a>
            </li>
            <li>
              <a 
                href="#pourquoi" 
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 px-4 py-3 rounded-md hover:bg-blue-50 whitespace-nowrap"
              >
                Pourquoi moi
              </a>
            </li>
            <li>
              <a 
                href="#offres" 
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 px-4 py-3 rounded-md hover:bg-blue-50 whitespace-nowrap"
              >
                Offres
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 px-4 py-3 rounded-md hover:bg-blue-50 whitespace-nowrap"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-gray-900">
          Vigouroux Clément – Développeur Technique & Créatif
        </h2>
        
        <section id="about" className="max-w-5xl mx-auto px-6 py-16 text-gray-800 scroll-mt-20">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-center">
            Développeur web passionné, spécialiste accessibilité
          </h2>
          
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Basé à Montpellier, je crée des sites web sur mesure pour freelances, indépendants et TPE. 
            Ma spécialité ? Rendre le web accessible à tous, notamment aux personnes en situation de handicap.
          </p>

          <p className="text-base md:text-lg leading-relaxed mb-6">
            Reconverti à 34 ans dans le développement web, j'apporte une approche unique mêlant expertise technique 
            et compréhension des enjeux business. Chaque projet est pensé pour allier performance, design moderne 
            et conformité aux standards d'accessibilité RGAA.
          </p>

          <p className="text-center text-xl md:text-2xl font-medium text-700 mb-10">
            Mon objectif : transformer vos idées en solutions digitales performantes qui touchent vraiment votre audience
          </p>
        </section>

        <section id="formations" className="max-w-5xl mx-auto px-6 py-12 text-gray-800 scroll-mt-20">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Formations & Compétences
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="text-left">
              <h4 className="text-xl font-semibold mb-3">Formation intensive développement web</h4>
              <p className="text-base leading-relaxed">
                <strong>Wild Code School</strong> - 2024<br />
                Formation de 5 mois en développement web full-stack, spécialisation JavaScript, React, Node.js
              </p>
            </div>
            
            <div className="text-left">
              <h4 className="text-xl font-semibold mb-3">Spécialisation accessibilité numérique</h4>
              <p className="text-base leading-relaxed">
                <strong>Passion pour l'accessibilité web</strong> - En cours de certification RGAA<br />
                Autodidacte en conformité web pour personnes en situation de handicap
              </p>
            </div>
          </div>

          <div className="text-center">
            <h4 className="text-xl font-semibold mb-4">Technologies maîtrisées</h4>
            <div className="grid md:grid-cols-4 gap-4 text-sm">
              <div>
                <strong>Frontend :</strong><br />
                HTML5, CSS3, JavaScript, React
              </div>
              <div>
                <strong>Backend :</strong><br />
                Node.js, Express, APIs REST
              </div>
              <div>
                <strong>Outils :</strong><br />
                Git, Figma
              </div>
              <div>
                <strong>Accessibilité :</strong><br />
                RGAA, ARIA, tests utilisateurs
              </div>
            </div>
          </div>
        </section>

        <section id="parcours" className="max-w-5xl mx-auto px-6 py-12 text-gray-800 scroll-mt-20">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Mon Parcours
          </h3>
          <h4 className="text-xl font-semibold mb-4 text-center">De la reconversion à l'expertise</h4>
          
          <p className="text-base md:text-lg leading-relaxed mb-6">
            À 34 ans, j'ai fait le choix de me reconvertir dans le développement web. Une décision mûrement réfléchie, 
            motivée par ma passion pour la technologie et mon envie de créer des solutions digitales qui ont du sens.
          </p>

          <p className="text-base md:text-lg leading-relaxed mb-6">
            Pendant ma formation à Wild Code School, j'ai découvert l'accessibilité web. Un déclic : rendre le numérique 
            accessible à tous est devenu ma mission. Car derrière chaque site, il y a des humains avec des besoins différents.
          </p>

          <p className="text-base md:text-lg leading-relaxed">
            Aujourd'hui, je mets cette expertise au service de vos projets, en garantissant des sites performants, 
            beaux et accessibles au plus grand nombre.
          </p>
        </section>

        <section id="pourquoi" className="max-w-5xl mx-auto px-6 py-12 text-gray-800 scroll-mt-20">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Pourquoi me choisir ?
          </h3>
          <h4 className="text-xl font-semibold mb-6 text-center">Une approche différente du développement web</h4>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center">
              <h5 className="font-semibold text-lg mb-2">Expérience humaine first</h5>
              <p className="text-base">Mon parcours de reconversion me donne une compréhension unique des défis entrepreneuriaux.</p>
            </div>
            
            <div className="text-center">
              <h5 className="font-semibold text-lg mb-2">Spécialiste accessibilité en devenir</h5>
              <p className="text-base">Je me forme aux standards RGAA pour rendre vos sites accessibles au plus grand nombre.</p>
            </div>
            
            <div className="text-center">
              <h5 className="font-semibold text-lg mb-2">Accompagnement personnalisé</h5>
              <p className="text-base">Pas juste un développeur, un partenaire qui comprend vos enjeux business.</p>
            </div>
            
            <div className="text-center">
              <h5 className="font-semibold text-lg mb-2">Livraison dans les délais</h5>
              <p className="text-base">Formation intensive oblige : j'ai appris à être efficace et respecter les deadlines.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="max-w-5xl mx-auto px-6 py-12 text-gray-800 scroll-mt-20">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Prêt à concrétiser votre projet ?
          </h3>
          
          <p className="text-base md:text-lg leading-relaxed mb-6 text-center">
            Que vous soyez freelance, indépendant ou dirigeant de TPE, parlons de votre projet web !
          </p>

          <p className="text-center text-lg font-medium mb-6">
            <strong>Consultation gratuite de 30 minutes</strong> pour définir ensemble la solution qui vous correspond.
          </p>

          <div className="text-center bg-gray-100 p-6 rounded-lg">
            <p className="text-lg font-semibold mb-2">
              Disponible en alternance
            </p>
            <p className="text-base">
              Pour entreprises souhaitant recruter un développeur motivé et spécialisé.
            </p>
          </div>
        </section>

        <button 
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-200 z-40"
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          aria-label="Retour en haut"
        >
          ↑
        </button>
      </div>
    </>
  );
};

export default Who;