export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between">
          <div className="md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Contacts</h3>
            <p>Email: contact@example.com</p>
            <p>Téléphone: +1234567890</p>
            <p>Adresse: 123 Rue Principale, Ville</p>
          </div>
          <div className="md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Liens utiles</h3>
            <ul>
              <li>
                <a href="/homepage">Accueil</a>
              </li>
              <li>
                <a href="/articles">Articles</a>
              </li>
              <li>
                <a href="/about">À propos</a>
              </li>
              {/* Ajoute d'autres liens importants */}
            </ul>
          </div>
          <div className="md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">Réseaux sociaux</h3>
            <ul>
              <li>
                <a href="https://facebook.com">Facebook</a>
              </li>
              <li>
                <a href="https://twitter.com">Twitter</a>
              </li>
              <li>
                <a href="https://instagram.com">Instagram</a>
              </li>
              {/* Ajoute d'autres liens vers les réseaux sociaux */}
            </ul>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>&copy; {new Date().getFullYear()} Carnet d'Evasion. Tous droits réservés.</p>
        </div>
      </footer>
    );
  };
  