const pageData = [
  {
    id: 'b0911fcf-0110-4316-8a4e-440811248d99',
    language: 'fr',
    head_menu: [
      'Réserver un Cours',
      'Nos Chefs',
      'Nos Formules',
      'Blog',
      'Contactez-nous',
    ],
    banner_title: [
      'Apprenez la Cuisine comme un Pro',
      'Devenez un Chef à Domicile',
    ],
    banner_menu: [
      'Cours en Ligne',
      'Ateliers Pratiques',
      'Expériences Gastronomiques',
    ],
    bloc_1: {
      title: "Découvrez l'Art Culinaire avec CookMaster",
      subtitle:
        'Explorez des expériences uniques pour apprendre, déguster et partager',
      cases: [
        {
          category: 'Cours en Ligne',
          tagline: 'Apprenez depuis chez vous',
          description:
            "Rejoignez nos cours interactifs en ligne pour maîtriser l'art culinaire avec nos chefs.",
          cta: 'Voir nos cours en ligne',
        },
        {
          category: 'Ateliers Pratiques',
          tagline: "Passez à l'action",
          description:
            'Participez à nos ateliers en présentiel pour perfectionner vos techniques culinaires.',
          cta: 'Découvrez nos ateliers',
        },
        {
          category: 'Expériences Gastronomiques',
          tagline: 'Un voyage culinaire unique',
          description:
            "Vivez des moments d'exception autour de la gastronomie avec nos experts.",
          cta: 'Réservez une expérience',
        },
      ],
    },
    bloc_2: {
      title: 'Nos Activités',
      cases: [
        'Cours en Ligne',
        'Ateliers Pratiques',
        'Expériences Gastronomiques',
      ],
    },
    bloc_2_2: {
      title: 'Nos Activités',
      btn_1: ['Nom', 'Entrez votre nom'],
      btn_2: ['Email', 'Entrez votre email'],
      btn_3: 'Message',
      btn_4: ['Fichier', 'Pièce jointe', 'Fichier PDF uniquement'],
      btn_5: 'Réinitialiser',
      btn_6: 'Envoyer',
    },
    bloc_3: {
      title: 'Explorez Davantage avec CookMaster',
      more_info: 'En savoir plus...',
      cases: [
        {
          category: 'Techniques de Cuisine',
          tagline: 'Apprenez les bases essentielles',
          description:
            'Maîtrisez les techniques culinaires fondamentales pour réussir tous vos plats.',
        },
        {
          category: 'Cuisine du Monde',
          tagline: 'Découvrez de nouvelles saveurs',
          description:
            'Explorez des recettes internationales et enrichissez votre répertoire culinaire.',
        },
        {
          category: 'Pâtisserie',
          tagline: 'Créez des desserts exquis',
          description:
            'Apprenez à réaliser des pâtisseries dignes des plus grands chefs.',
        },
        {
          category: 'Entrée et entrmet',
          tagline: 'Créez des Entrées et entrmet exquis',
          description:
            'Apprenez à réaliser des entrées et entrmets dignes des plus grands chefs.',
        },
      ],
    },
    carte_point: [
      {
        name: 'Mekoos',
        website: 'www.mekoos.com',
        address: 'C.P. 118, Mont-Laurier, Québec, Canada, J9L 3G9',
        phone: '819 623-2336',
        free_call: '0 805 080 224',
        fax: '819 623-2336',
        email: 'info@mekoos.com',
        activities: [
          'Cours en Ligne',
          'Ateliers Pratiques',
          'Expériences Gastronomiques',
        ],
        marker_information: [
          'Ateliers Pratiques',
          'Expériences Gastronomiques',
          'Snowmobiling',
        ],
      },
      {
        name: 'Notawissi',
        website: 'www.notawissi.com',
        address: 'C.P. 280, SAINT-ANNE-DU-LAC, QUÉBEC, J0W 1V0',
        coordinates: {
          latitude: "47° 06'",
          longitude: "75° 30'",
        },
        phone: ['819-623-2525', '873-803-1981'],
        email: 'info@notawissi.com',
        activities: [
          'Cours en Ligne',
          'Ateliers Pratiques',
          'Expériences Gastronomiques',
        ],
        marker_information: [
          'Cours en Ligne',
          'Ateliers Pratiques',
          'Expériences Gastronomiques',
          'ATV / Quad Relay',
        ],
      },
      {
        name: 'Le groupe',
        website: 'www.caraibesnordiques.com',
        address: '2325 Centre St suite 301, Montreal, Quebec H3K 1J6, Canada',
        phone: '+1 (514) 447-6300',
        email: 'info@caraibesnordiques.com',
        activities: ['Expériences Gastronomiques'],
        marker_information: ['Traditional Fishing', 'Fly Fishing'],
      },
      {
        name: 'La corneille',
        website: 'www.lacorneille.ca',
        address: 'Baie-Johan-Beetz (Quebec), G0G1B0',
        coordinates: {
          latitude: '50.28398',
          longitude: '-62.89645',
        },
        phone: '514-447-6300',
        activities: ['Expériences Gastronomiques'],
        marker_information: [
          'Ecotourism',
          'Traditional Fishing',
          'Vacationing',
        ],
      },
      {
        name: 'Lac Victor',
        website: 'www.clublacvictor.com',
        address:
          'GPS : N 50.60709 W -61.82494, lac Victor, Natashquan (Québec), G0G 0G0',
        phone: '514 668-7337',
        activities: ['Cours en Ligne'],
        marker_information: ['Indigenous Culture', 'Nordic Geology'],
      },
      {
        name: 'Baronnie Kamouraska',
        website: 'www.clublacvictor.com',
        address:
          'Lac des Cinq Milles, Kamouraska Regional County Municipality, Quebec G0L 1W0, Canada',
        coordinates: {
          latitude: '47.23965',
          longitude: '-69.68160',
        },
        activities: ['Cours en Ligne', 'Ateliers Pratiques'],
        marker_information: [
          'Bear Hunting',
          'Moose Hunting',
          'Migratory Bird Hunting',
          'Discovery and Hiking',
        ],
      },
      {
        name: 'Rapid Lake Lodge',
        website: 'www.rapidlake.com',
        address:
          '58.4116 27" -65 #3849,03, Kangiqsualujjuaq, QC J0M 1A0, Canada',
        phone: '+1 (514) 447-6300',
        email: 'rl@caraibesnordiques.com',
        activities: ['Cours en Ligne', 'Expériences Gastronomiques'],
        marker_information: [
          'Fly Fishing',
          'Safari and Nature',
          'Trekking and Expedition',
          'Bush Flying',
        ],
      },
      {
        name: 'Château Johan-Beetz',
        website: 'www.bjb.caraibesnordiques.com',
        address: '15 Rue Johan Beetz, Baie-Johan-Beetz, QC, Canada, H3K 1J6',
        phone: '+1 (514) 447-6300',
        email: 'info@caraibesnordiques.com',
        activities: ['Cours en Ligne'],
        marker_information: ['Snowmobiling', 'Hiking'],
      },
      {
        name: 'Cap au Lest',
        website: 'www.capauleste.com',
        address:
          '551, CHEMIN DU CAP A L’EST, SAINTE-ROSE-DU-NORD, QUEBEC, G0V 1T0, CANADA',
        phone: ['+418 675-2000', '1-866-675-2007'],
        activities: ['Cours en Ligne'],
        marker_information: [
          'Via Ferrata',
          'Sea Kayaking',
          'Seaplane Tour',
          'Aerial Course',
          'Snowmobiling',
        ],
      },
      {
        name: 'GGO',
        website: 'www.westerntrophyoutfitters.com',
        address: '21, RANG SAINT-JOSEPH NORD SAINT-PHILIPPE (QUÉBEC) J0L 2K0',
        phone: '306 314-5552',
        email: 'info@wtoutfitters.com',
        activities: ['Ateliers Pratiques'],
        marker_information: ['Bear Hunting', 'Snowmobiling'],
      },
    ],
    bloc_4: {
      title: 'Des Expériences Inoubliables',
      subtitle: 'Au Cœur de la Gastronomie',
      text_title: 'À propos de CookMaster',
      text: 'Depuis 2015, CookMaster vous propose des cours et ateliers pour éveiller vos talents culinaires. Que vous soyez débutant ou passionné, rejoignez nos chefs pour une expérience gastronomique unique.',
      pictos: [
        {
          title: 'Expertise',
          description: 'Des chefs expérimentés à vos côtés.',
        },
        {
          title: 'Passion',
          description: 'Une transmission de savoir avec amour.',
        },
        {
          title: 'Diversité',
          description: 'Des activités pour tous les goûts.',
        },
        {
          title: 'Convivialité',
          description: 'Un apprentissage dans la bonne humeur.',
        },
        {
          title: 'Personnalisation',
          description: 'Des cours adaptés à vos besoins.',
        },
      ],
    },
    bloc_5: {
      title: 'Partagez Vos Créations avec CookMaster',
      text: "Capturez vos moments en cuisine et partagez-les avec notre communauté. Publiez vos photos avec #CookMaster pour inspirer d'autres passionnés.",
      reviews: [
        {
          author: 'Sophie & Julien',
          review:
            'Un moment incroyable en couple, nous avons appris tant de choses tout en nous amusant !',
          date: '15/11/2024',
        },
        {
          author: 'Claire Dupont',
          review:
            'Les cours en ligne sont géniaux, clairs et très interactifs. Merci CookMaster !',
          date: '08/10/2024',
        },
        {
          author: 'Claire Dupont',
          review:
            'Les cours en ligne sont géniaux, clairs et très interactifs. Merci CookMaster !',
          date: '08/10/2024',
        },
        {
          author: 'Claire Dupont',
          review:
            'Les cours en ligne sont géniaux, clairs et très interactifs. Merci CookMaster !',
          date: '08/10/2024',
        },
        {
          author: 'Claire Dupont',
          review:
            'Les cours en ligne sont géniaux, clairs et très interactifs. Merci CookMaster !',
          date: '08/10/2024',
        },
      ],
      footer: "Suivez-nous sur @CookMaster pour plus d'inspiration culinaire.",
    },
    bloc_6: {
      title: 'Découvrez CookMaster',
      subtitle: "Aujourd'hui",
      text: 'Rejoignez nos cours et ateliers pour vivre une expérience culinaire unique.',
      button: 'Explorer',
    },
    footer: {
      address: {
        name: 'CookMaster',
        phone: '01 23 45 67 89',
        location: 'Paris, 14 Rue des Chefs, 75008',
      },
      links: [
        {
          name: 'Cours en Ligne',
          url: 'Later',
        },
        {
          name: 'Ateliers Pratiques',
          url: 'Later',
        },
        {
          name: 'Expériences Gastronomiques',
          url: 'Later',
        },
        {
          name: 'Réserver un Cours',
          url: 'Later',
        },
        {
          name: 'Nos Chefs',
          url: 'Later',
        },
        {
          name: 'Nos Formules',
          url: 'Later',
        },
        {
          name: 'Blog',
          url: 'Later',
        },
        {
          name: 'Contactez-nous',
          url: 'Later',
        },
      ],
    },
  },
];

export default pageData;
