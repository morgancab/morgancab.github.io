/*
 * FR / EN switcher.
 * Each row is [text as written in index.html, French, English]; null = same as the source text.
 * Texts are matched on their trimmed content, so if you edit a sentence in index.html,
 * update its row here too (otherwise it simply stays untranslated).
 */
(function () {
    "use strict";

    var ROWS = [
        // Navbar & hero
        ["Accueil", null, "Home"],
        ["À propos", null, "About"],
        ["Parcours", null, "Background"],
        ["Compétences", null, "Skills"],
        ["Références", null, "References"],
        ["Je suis", null, "I am"],
        ["Je transforme des données complexes en décisions simples, concrètes et impactantes pour les entreprises.", null,
            "I turn complex data into simple, concrete and impactful decisions for businesses."],
        ["Télécharger le CV", null, "Download resume"],
        ["ans d'expérience", null, "years of experience"],
        ["projets livrés", null, "projects delivered"],
        ["business orienté", null, "business-driven"],
        ["Business Intelligence, Data Analytics, Data Engineer", "Business Intelligence, Analyse de données, Data Engineering",
            "Business Intelligence, Data Analytics, Data Engineer"],

        // About
        ["Qui suis-je ?", null, "Who am I?"],
        ["I am Morgan, a data analyst specialist, I bring a wealth of experience and knowledge in the field of data science. With over 5 years of intensive studies and 6 years of work experience, I have developed a deep understanding of the data analysis process and honed my skills in various key areas. I am highly proficient in programming languages and tools used for data manipulation and modeling.",
            "Je suis Morgan, data analyst. Avec plus de 5 ans d'études approfondies et 6 ans d'expérience professionnelle, j'ai acquis une solide compréhension du processus d'analyse de données et développé mes compétences dans plusieurs domaines clés. Je maîtrise les langages de programmation et les outils de manipulation et de modélisation des données.",
            null],
        ["In addition, my expertise in data visualization and insights generation enables me to effectively communicate complex data insights to both technical and non-technical stakeholders. I have a keen eye for detail and always strive to produce high-quality work that meets and exceeds client expectations.",
            "Mon expertise en visualisation de données et en production d'insights me permet de communiquer efficacement des résultats complexes, aussi bien à des interlocuteurs techniques que non techniques. Je suis rigoureux et m'attache à produire un travail de qualité qui répond aux attentes, voire les dépasse.",
            null],
        ["Localisation", null, "Location"],
        ["Expérience", null, "Experience"],
        ["6 ans", null, "6 years"],
        ["Téléphone", null, "Phone"],
        ["Me contacter", null, "Contact me"],

        // Background
        ["Formation & expérience", null, "Education & experience"],
        ["Formation", null, "Education"],
        ["Master mathematics and application", "Master Mathématiques et applications", null],
        ["This program teaches students to Master statistical and programming tools for the analysis of large databases while deepening statistical and machine learning concepts",
            "Ce parcours apprend à maîtriser les outils statistiques et de programmation pour analyser de grandes bases de données, tout en approfondissant les concepts de statistique et de machine learning.",
            null],
        ["Bachelor of Sciences", "Licence de sciences", null],
        ["This degree covers theoretical and applied elements of modern statistics, and provides training and practical experience in modelling, analysing and interpreting real data required in the economy, industry and research.",
            "Cette formation couvre les aspects théoriques et appliqués de la statistique moderne, avec une pratique de la modélisation, de l'analyse et de l'interprétation de données réelles utilisées dans l'économie, l'industrie et la recherche.",
            null],
        ["Bachelor in Statistics", "Licence de Statistique", null],
        ["The objective of this Bachelor in Statistics is to acquire skills that cover the needs of companies in the field of statistical and computer processing of information.",
            "L'objectif de cette licence de statistique est d'acquérir les compétences répondant aux besoins des entreprises en matière de traitement statistique et informatique de l'information.",
            null],
        ["BTEC Higher National Diploma in Statistics", "BUT Science des données (BTEC Higher National Diploma en statistique)", null],
        ["The objective of this program is to train technicians specializing in statistics and business intelligence, capable of helping decision-makers adapt their strategy",
            "Cette formation prépare des techniciens spécialisés en statistique et en business intelligence, capables d'aider les décideurs à adapter leur stratégie.",
            null],
        ["Since October 2025 · Paris, France", "Depuis octobre 2025 · Paris, France", null],
        ["Led data strategy for Acquisition, Sales and Finance teams.",
            "Pilotage de la stratégie data des équipes Acquisition, Sales et Finance.", null],
        ["Actively contributed to growing the client base from 3,000 to hundreds of thousands since arriving.",
            "Contribution active à la croissance de la base clients, passée de 3 000 à plusieurs centaines de milliers depuis mon arrivée.", null],
        ["Designed and deployed qualified lead acquisition models, optimising targeting and reducing cost per lead.",
            "Conception et déploiement de modèles d'acquisition de leads qualifiés, optimisant le ciblage et réduisant le coût par lead.", null],
        ["November 2021 – September 2025", "novembre 2021 – septembre 2025", null],
        ["Improved outbound forecasts for EU warehouses by 3%.",
            "Amélioration de 3 % des prévisions de flux sortants des entrepôts européens.",
            null],
        ["Developed item re-balancing process, optimizing storage and reducing costs.",
            "Mise en place d'un processus de rééquilibrage des articles, optimisant le stockage et réduisant les coûts.",
            null],
        ["Satisfied stakeholder requests.",
            "Réponse aux demandes des parties prenantes.",
            null],
        ["Business Intelligence intern", "Stagiaire Business Intelligence", null],
        ["March 2021 - August 2021 (6 months)", "mars 2021 - août 2021 (6 mois)", null],
        ["Enhanced Middle-miles Linehaul planning by integrating diverse data sources into the algorithm.",
            "Amélioration de la planification Middle-miles Linehaul en intégrant diverses sources de données à l'algorithme.",
            null],
        ["Evaluated feasibility and performance, produced saving reports, and communicated with stakeholders.",
            "Évaluation de la faisabilité et de la performance, production de rapports d'économies et échanges avec les parties prenantes.",
            null],
        ["Data scientist intern", "Stagiaire Data Scientist", null],
        ["May 2020 – August 2020 (4 months)", "mai 2020 – août 2020 (4 mois)", null],
        ["Derived demand score from Google Maps API, Airbnb, Booking data.",
            "Construction d'un score de demande à partir des données de l'API Google Maps, d'Airbnb et de Booking.",
            null],
        ["Helped partnership team pinpoint revenue per location with 85% accuracy.",
            "Aide à l'équipe partenariats pour estimer le revenu par emplacement avec 85 % de précision.",
            null],
        ["Created interactive maps.",
            "Création de cartes interactives.",
            null],
        ["Data Analyst Intern", "Stagiaire Data Analyst", null],
        ["April – June 2018 (3 months)", "avril – juin 2018 (3 mois)", null],
        ["Developed grass estimation model predicting cow intake (62% accuracy).",
            "Développement d'un modèle d'estimation de l'herbe prédisant la consommation des vaches (62 % de précision).",
            null],
        ["Developed lameness detection using pedometer data, selecting logistic regression model (error rate: 21%).",
            "Développement d'une détection des boiteries à partir de données de podomètres, avec un modèle de régression logistique retenu (taux d'erreur : 21 %).",
            null],

        // Skills
        ["Ma boîte à outils", null, "My toolbox"],
        ["Data modeling", "Modélisation de données", null],
        ["Warehouse / marts", "Entrepôts / data marts", null],
        ["BI & visualisation", null, "BI & visualization"],
        ["Automatisation", null, "Automation"],
        ["Automation & workflow", "Automatisation & workflows", null],

        // Portfolio
        ["Projets sélectionnés", null, "Selected projects"],
        ["Tous", null, "All"],
        ["Applications Streamlit", null, "Streamlit apps"],
        ["Cartes interactives, météo en France et visualisations 3D réunies dans une application Streamlit.", null,
            "Interactive maps, weather in France and 3D visualizations brought together in a Streamlit app."],
        ["Voir le projet", null, "View project"],
        ["Application R Shiny avec séries temporelles et répartitions, publiée sur shinyapps.io.", null,
            "R Shiny app with time series and breakdowns, published on shinyapps.io."],
        ["Explorateur SQL de vols", null, "SQL flights explorer"],
        ["Requêtes SQL sur des données de vols aux États-Unis : compagnies, aéroports et départs.", null,
            "SQL queries on US flight data: airlines, airports and departures."],
        ["Parkings de Strasbourg", null, "Strasbourg car parks"],
        ["Tableau de bord de l'occupation des parkings de Strasbourg, avec cartographie des places libres.", null,
            "Dashboard of car park occupancy in Strasbourg, with a map of available spaces."],
        ["Analyse de texte", null, "Text analysis"],
        ["Analyse textuelle et nuage de mots autour du thème du bonheur.", null,
            "Text analysis and word cloud around the theme of happiness."],
        ["Plateforme de cartographie et d'open data pour valoriser les données géographiques d'une ville.", null,
            "Mapping and open data platform to make the most of a city's geographic data."],

        // References
        ["Ils parlent de mon travail", null, "What they say about my work"],
        ["Chief Operational Officer", "Directeur des opérations (COO)", null],
        ["Internship supervisor at Teagasc", "Maître de stage chez Teagasc", null],

        // Footer
        ["Morgan Cabedoche. Tous droits réservés.", null, "Morgan Cabedoche. All rights reserved."],

        // Attributes
        ["Retour en haut", null, "Back to top"]
    ];

    var META = {
        fr: "Portfolio de Morgan Cabedoche, data analyst et business intelligence engineer spécialisé en données, BI, dashboards et automatismes.",
        en: "Portfolio of Morgan Cabedoche, data analyst and business intelligence engineer specialised in data, BI, dashboards and automation."
    };
    var ALT_PREFIX = { fr: "Aperçu du projet ", en: "Preview of project " };

    var norm = function (s) { return s.replace(/\s+/g, " ").trim(); };

    // Lookup: any known variant of a text -> { fr, en }
    var LOOKUP = {};
    ROWS.forEach(function (r) {
        var entry = { fr: r[1] || r[0], en: r[2] || r[0] };
        [r[0], entry.fr, entry.en].forEach(function (k) { LOOKUP[norm(k)] = entry; });
    });

    var SKIP = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1 };

    function translateTextNodes(root, lang) {
        var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
            acceptNode: function (n) {
                var p = n.parentNode;
                if (!p || SKIP[p.nodeName] || (p.closest && p.closest(".typed-text-output"))) return NodeFilter.FILTER_REJECT;
                return NodeFilter.FILTER_ACCEPT;
            }
        });
        var node;
        while ((node = walker.nextNode())) {
            var key = norm(node.nodeValue);
            var hit = key && LOOKUP[key];
            if (hit && hit[lang] !== key) {
                node.nodeValue = node.nodeValue.replace(/\S[\s\S]*\S|\S/, function () { return hit[lang]; });
            }
        }
    }

    function translateAttributes(lang) {
        document.querySelectorAll("[alt], [aria-label]").forEach(function (el) {
            ["alt", "aria-label"].forEach(function (a) {
                var v = el.getAttribute(a);
                if (!v) return;
                var other = lang === "fr" ? "en" : "fr";
                if (v.indexOf(ALT_PREFIX[other]) === 0) {
                    el.setAttribute(a, ALT_PREFIX[lang] + v.slice(ALT_PREFIX[other].length));
                    return;
                }
                var hit = LOOKUP[norm(v)];
                if (hit) el.setAttribute(a, hit[lang]);
            });
        });
    }

    function getInitialLang() {
        var fromUrl = /[?&]lang=(fr|en)\b/.exec(location.search);
        if (fromUrl) return fromUrl[1];
        try {
            var saved = localStorage.getItem("lang");
            if (saved === "fr" || saved === "en") return saved;
        } catch (e) { /* storage blocked */ }
        return (navigator.language || "fr").toLowerCase().indexOf("fr") === 0 ? "fr" : "en";
    }

    function apply(lang, remember) {
        translateTextNodes(document.body, lang);
        translateAttributes(lang);
        document.documentElement.lang = lang;
        var meta = document.querySelector('meta[name="description"]');
        if (meta) meta.setAttribute("content", META[lang]);

        document.querySelectorAll("[data-lang-option]").forEach(function (b) {
            var on = b.getAttribute("data-lang-option") === lang;
            b.classList.toggle("active", on);
            b.setAttribute("aria-pressed", on ? "true" : "false");
        });
        if (remember) {
            try { localStorage.setItem("lang", lang); } catch (e) { /* ignore */ }
        }
        if (typeof window.initTyped === "function") window.initTyped();
    }

    window.setLanguage = function (lang) { apply(lang, true); };
    window.currentLanguage = getInitialLang();

    // Translate straight away (scripts sit at the end of <body>, so the DOM is ready) so that main.js
    // starts the typing animation with the right strings.
    apply(window.currentLanguage, false);

    document.addEventListener("click", function (e) {
        var btn = e.target.closest && e.target.closest("[data-lang-option]");
        if (!btn) return;
        var lang = btn.getAttribute("data-lang-option");
        window.currentLanguage = lang;
        apply(lang, true);
    });
})();
