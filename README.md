
# 📊 React Dashboard – Sample Project

Un mini dashboard moderne construit avec **React + Vite**, idéal pour démontrer tes compétences front-end “app-like” :  

    ✔ Composants réutilisables (KPI cards)  
    ✔ Dashboard **data-driven**  (données mock)
    ✔ Tableaux + **recherche** + **filtre par statut**
    ✔ UI simple, propre et responsive 

## ✅ Features (v1.0.0)

- KPI cards générées depuis des données (`src/data/stats.js`)
- Tableau “Latest items” depuis données mock (`src/data/items.js`)
- Recherche (par nom)
- Filtre par statut (All / Open / In Progress / Done)
- UI responsive (desktop / mobile)

## 🚀 Tech Stack

- React (Vite)
- JavaScript
- CSS (base globale + styles composants)
- ESLint

## 📂 Structure

```bash
react-dashboard-sample/
├── src/
│   ├── components/    # Composants UI (StatCard, DataTable…)
│   ├── pages/         # Pages (Dashboard)
│   ├── data/          # Données mock (stats, items)
│   ├── styles/        # Styles CSS des composants
│   ├── App.jsx
│   └── main.jsx
├── public/
├── CHANGELOG.md
└── README.md

```

## ▶️ Lancer le projet

    npm install
    npm run dev

Le projet démarre sur :
👉 http://localhost:5173/


## ✨ Fonctionnalités prévues

📈 Visualisation & UI

- Graphiques dynamiques (courbes, barres, KPIs)
- Tri des colonnes
- Routing avec layout (sidebar/header)
- Mode clair/sombre
- Export CSV

🔍 Interaction

- Filtres par catégorie / recherche
- Données mock pour simuler un vrai dashboard

📱 Responsive

- Adapté desktop, tablette, mobile

## 🧩 Améliorations futures (roadmap)

- Authentification fictive (UI only)
- Thème clair/sombre
- API FastAPI connectée (si tu veux montrer un full-stack sample)

## 📬 Contact

- Email : diawaramantcha@gmail.com
- LinkedIn : https://linkedin.com/in/mantcha-diawara
