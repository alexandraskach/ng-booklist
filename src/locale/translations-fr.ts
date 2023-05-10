import { TranslationSet } from 'src/models/translation';

export const dictionary: { [key: string]: TranslationSet } = {
  fr: {
    language: 'fr',
    values: {
      here: 'ici',
      account_exists: 'Tu as déjà un compte? Connecte-toi',
      account_doesnt_exists: "Tu n'as pas de compte? Crée ton compte",
      sign_in: 'Connexion',
      sign_up: 'Création de compte',
      password: 'mot de passe',
      readmore: 'Lire plus',
      books_title: 'Mes livres 📖',
      books: 'Livres',
      logout: 'Deconnexion',
    },
  },
  eng: {
    language: 'eng',
    values: {
      here: 'here',
      account_exists: 'Already have an account? Sign in',
      account_doesnt_exists: "Don't have an account? Sign up",
      sign_in: 'Sign in',
      sign_up: 'Sign up',
      password: 'password',
      readmore: 'Read more',
      books_title: 'My books 📖',
      books: 'Books',
      logout: 'Log out',
    },
  },
};
