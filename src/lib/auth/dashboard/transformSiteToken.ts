export const formatToken = (token: string | undefined, hideToken: boolean) => {
    if (!token) return ''; // Si le token est indéfini, retournez une chaîne vide

    if (hideToken) {
      // Si hideToken est vrai, masquez le token avec des étoiles
      return token.slice(0, 4) + "*".repeat(Math.max(token.length - 4, 0));
    }

    return token; // Sinon, affichez le token tel quel
  };