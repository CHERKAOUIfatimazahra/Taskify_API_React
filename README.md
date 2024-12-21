# Taskify_API_React

## Taskify Frontend

### 📋 Contexte du Projet
La plateforme **Taskify** dispose déjà d'une API REST robuste pour la gestion des tâches. Ce projet vise à développer une interface utilisateur moderne et réactive qui permettra aux utilisateurs d'interagir facilement avec les fonctionnalités de gestion des tâches, tout en maximisant l'efficacité et l'expérience utilisateur.

---

### 🎯 Objectif Principal
L'objectif principal est de concevoir et développer une application frontend intuitive et réactive qui intègre les fonctionnalités fournies par l'API Taskify, notamment :
- La gestion des tâches (création, modification, suppression, visualisation).
- L'authentification sécurisée des utilisateurs.
- Une navigation fluide et une expérience utilisateur optimisée.

---

### 🚀 Fonctionnalités Clés
#### 🔒 Authentification
- **Formulaire de connexion** : Permet aux utilisateurs de s'identifier en utilisant leur nom d'utilisateur et mot de passe.
- **Gestion des tokens** : Utilisation des tokens pour maintenir la session des utilisateurs via le stockage local.
- **Redirection sécurisée** : Accès limité aux composants de gestion des tâches pour les utilisateurs authentifiés.

#### ✅ Gestion des Tâches
- **Ajout de tâches** : Les utilisateurs peuvent créer de nouvelles tâches en précisant les détails nécessaires.
- **Édition et suppression** : Possibilité de modifier ou de supprimer des tâches existantes.
- **Visualisation** : Une interface claire pour afficher les tâches en cours et terminées.

#### 🌐 Intégration API
- Utilisation d'**Axios** pour interagir avec l'API Taskify.
- Envoi de requêtes HTTP sécurisées (avec le token d'authentification).

#### ⚡ Gestion d'État
- Utilisation d'un système de gestion d'état global comme **Redux**:
  - Stocker les tâches et les informations d'authentification.
  - Réagir aux changements d'état de manière fluide.

---

### 🛠 Technologies Utilisées
- **Framework Frontend :** React.js.
- **Gestion d'état :** Redux ou Context API (React).
- **Requêtes HTTP :** Axios pour interagir avec l'API.
- **Gestion des sessions :** LocalStorage pour stocker le token d'authentification.
- **Styling :** CSS (TailwindCSS).

---

### ✨ Détails Techniques
#### Authentification :
1. Création d'un composant **Login** avec un formulaire de connexion.
2. Envoi des identifiants utilisateur via une requête `POST` à l'API d'authentification.
3. Stockage du token renvoyé dans le **localStorage** pour gérer la session.
4. Utilisation de ce token dans les en-têtes de requêtes pour accéder aux endpoints protégés.

#### Gestion des Tâches :
1. Récupération des tâches depuis l'API via une requête `GET`.
2. Création de nouvelles tâches via une requête `POST`.
3. Modification et suppression des tâches existantes via des requêtes `PUT` et `DELETE`.

#### Gestion d'État :
- Configuration d'un **store central** pour gérer :
  - Les données des tâches.
  - L'état d'authentification (connecté/déconnecté).
- Définition d'actions asynchrones pour interagir avec l'API.
- Mise à jour automatique des composants UI en fonction des changements dans le store.

---

### 📦 Installation et Déploiement
#### Prérequis :
- **Node.js** : Version 16 ou supérieure.
- **NPM** : Gestionnaire de paquets.

#### Étapes :
1. **Cloner le projet** :
   ```bash
   git clone https://github.com/CHERKAOUIfatimazahra/Taskify_API_React.git
