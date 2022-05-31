const wilayas = [
  {
    wilaya: "ADRAR",
    dairas: [
      { daira: "ADRAR", commune: ["ADRAR", "BOUDA", "OULED-AHMED-TAMMI"] },
      { daira: "AOUGROUT", commune: ["AOUGROUT", "DELDOUL", "METARFA"] },
      { daira: "AOULEF", commune: ["AKABLI", "AOULEF", "TIMOKTENE", "TIT"] },
      {
        daira: "BORDJ-BADJI-MOKHTAR",
        commune: ["BORDJ-BADJI-MOKHTAR", "TIMIAOUINE"],
      },
      { daira: "CHAROUINE", commune: ["CHAROUINE", "OULED-AISSA", "TALMINE"] },
      { daira: "FENOUGHIL", commune: ["FENOUGHIL", "TAMENTIT", "TAMEST"] },
      { daira: "REGGANE", commune: ["REGGANE", "SALI"] },
      { daira: "T'SABIT", commune: ["SBAA", "T'SABIT"] },
      { daira: "TIMIMOUN", commune: ["OULED-SAID", "TIMIMOUN"] },
      {
        daira: "TINERKOUK",
        commune: ["KSAR-KADDOUR", 'TINERKOUK-"ZAOUIET-DEBBAGH"'],
      },
      { daira: "ZAOUIET-KOUNTA", commune: ["IN-ZEGMIR", "ZAOUIET-KOUNTA"] },
    ],
  },
  {
    wilaya: "CHLEF",
    dairas: [
      {
        daira: "ABOU-EL-HASSAN",
        commune: ["ABOU-EL-HASSAN", "TADJENA", "TALASSA"],
      },
      { daira: "AIN-MERANE", commune: ["AIN-MERANE", "HARENFA"] },
      {
        daira: "BENI-HAOUA",
        commune: ["BENI-HAOUA", "BREIRA", "OUED-GOUSSINE"],
      },
      { daira: "BOUKADIR", commune: ["BOUKADIR", "OUED-SLY", "SOBHA"] },
      { daira: "CHLEF", commune: ["CHLEF", "OUM-DROU", "SENDJAS"] },
      {
        daira: "EL-KARIMIA",
        commune: ["BENI-BOUATEB", "EL-KARIMIA", "HARCHOUN"],
      },
      { daira: "EL-MARSA", commune: ["EL-MARSA", "MOUSSADEK"] },
      {
        daira: "OUED-FODDA",
        commune: ["BENI-RACHED", "OUED-FODDA", "OULED-ABBES"],
      },
      {
        daira: "OULED-BEN-ABDELKADER",
        commune: ["EL-HADJADJ", "OULED-BEN-ABDELKADER"],
      },
      {
        daira: "OULED-FARES",
        commune: ["CHETTIA", "LABIODH-MEDJADJA", "OULED-FARES"],
      },
      { daira: "TAOUGRITE", commune: ["DAHRA", "TAOUGRITE"] },
      {
        daira: "TENES",
        commune: ["SIDI-ABDERRAHMANE", "SIDI-AKKACHA", "TENES"],
      },
      { daira: "ZEBOUDJA", commune: ["BENAIRIA", "BOUZEGHAIA", "ZEBOUDJA"] },
    ],
  },
  {
    wilaya: "LAGHOUAT",
    dairas: [
      { daira: "AFLOU", commune: ["AFLOU", "SEBGAG", "SIDI-BOUZID"] },
      {
        daira: "AIN-MADHI",
        commune: [
          "AIN-MADHI",
          "EL-HOUITA",
          "KHENEG",
          "TADJEMOUT",
          "TADJEROUNA",
        ],
      },
      { daira: "BRIDA", commune: ["BRIDA", "HADJ-MECHERI", "TAOUIALA"] },
      { daira: "EL-GHICHA", commune: ["EL-GHICHA"] },
      {
        daira: "GUELTAT-SIDI-SAAD",
        commune: ["AIN-SIDI-ALI", "BEIDHA", "GUELTAT-SIDI-SAAD"],
      },
      { daira: "HASSI-R'MEL", commune: ["HASSI-DELAA", "HASSI-R'MEL"] },
      {
        daira: "KSAR-EL-HIRANE",
        commune: ["BENACER-BENCHOHRA", "KSAR-EL-HIRANE"],
      },
      { daira: "LAGHOUAT", commune: ["LAGHOUAT"] },
      { daira: "OUED-MORRA", commune: ["OUED-M'ZI", "OUED-MORRA"] },
      { daira: "SIDI-MAKHLOUF", commune: ["EL-ASSAFIA", "SIDI-MAKHLOUF"] },
    ],
  },
  {
    wilaya: "OUM-EL-BOUAGHI",
    dairas: [
      { daira: "AIN-BABOUCHE", commune: ["AIN-BABOUCHE", "AIN-DISS"] },
      { daira: "AIN-BEIDA", commune: ["AIN-BEIDA", "BERRICHE", "ZORG"] },
      {
        daira: "AIN-FAKROUN",
        commune: ["AIN-FAKROUN", "FEDJOUZ-BOUGHRARA-SAOUDI"],
      },
      {
        daira: "AIN-KERCHA",
        commune: ["AIN-KERCHA", "EL-HARMILIA", "HANCHIR-TOUMGHANI"],
      },
      {
        daira: "AIN-M'LILA",
        commune: ["AIN-M'LILA", "OULED-GACEM", "OULED-HAMLA"],
      },
      { daira: "DHALAA", commune: ["DHALAA", "EL-DJAZIA"] },
      { daira: "F'KIRINA", commune: ["F'KIRINA", "OUED-NINI"] },
      { daira: "KSAR-SBAHI", commune: ["KSAR-SBAHI"] },
      {
        daira: "MESKIANA",
        commune: ["BEHAIR-CHERGUI", "EL-BELLALA", "MESKIANA", "RAHIA"],
      },
      { daira: "OUM-EL-BOUAGHI", commune: ["AIN-ZITOUN", "OUM-EL-BOUAGHI"] },
      { daira: "SIGUS", commune: ["EL-AMIRIA", "SIGUS"] },
      {
        daira: "SOUK-NAAMANE",
        commune: ["BIR-CHOUHADA", "OULED-ZOUI", "SOUK-NAAMANE"],
      },
    ],
  },
  {
    wilaya: "BATNA",
    dairas: [
      { daira: "AIN-DJASSER", commune: ["AIN-DJASSER", "EL-HASSI"] },
      {
        daira: "AIN-TOUTA",
        commune: [
          "AIN-TOUTA",
          "BEN-FOUDHALA-EL-HAKANIA",
          "MAAFA",
          "OULED-AOUF",
        ],
      },
      { daira: "ARRIS", commune: ["ARRIS", "TIGHANIMINE"] },
      { daira: "BARIKA", commune: ["BARIKA", "BITAM", "M'DOUKEL"] },
      { daira: "BATNA", commune: ["BATNA", "FESDIS", "OUED-CHAABA"] },
      { daira: "BOUZINA", commune: ["BOUZINA"] },
      { daira: "CHEMORA", commune: ["BOULHILAT", "CHEMORA"] },
      {
        daira: "DJEZZAR",
        commune: ["ABDELKADER-AZIL", "DJEZZAR", "OULED-AMMAR"],
      },
      {
        daira: "EL-MADHER",
        commune: ["AIN-YAGOUT", "BOUMIA", "DJERMA", "EL-MADHER"],
      },
      { daira: "ICHMOUL", commune: ["FOUM-TOUB", "ICHMOUL", "INOUGHISSEN"] },
      { daira: "MENAA", commune: ["MENAA", "TIGHERGHAR"] },
      {
        daira: "MEROUANA",
        commune: ["HIDOUSSA", "KSAR-BELLEZMA", "MEROUANA", "OUED-EL-MA"],
      },
      { daira: "N'GAOUS", commune: ["BOUMAGUER", "N'GAOUS", "SEFIANE"] },
      {
        daira: "OULED-SI-SLIMANE",
        commune: ["LEMSANE", "OULED-SI-SLIMANE", "TAXLENT"],
      },
      {
        daira: "RAS-EL-AIOUN",
        commune: [
          "GOSBAT",
          "GUIGBA",
          "OULED-SELLAM",
          "RAHBAT",
          "RAS-EL-AIOUN",
          "TALKHAMT",
        ],
      },
      { daira: "SEGGANA", commune: ["SEGGANA", "TILATOU"] },
      { daira: "SERIANA", commune: ["LAZROU", "SERIANA", "ZANAT-EL-BEIDA"] },
      { daira: "T'KOUT", commune: ["GHASSIRA", "KIMMEL", "T'KOUT"] },
      { daira: "TAZOULT", commune: ["OUYOUN-EL-ASSAFIR", "TAZOULT"] },
      {
        daira: "TENIET-EL-ABED",
        commune: ["CHIR", "OUED-TAGA", "TENIET-EL-ABED"],
      },
      { daira: "TIMGAD", commune: ["OULED-FADEL", "TIMGAD"] },
    ],
  },
  {
    wilaya: "BEJAIA",
    dairas: [
      { daira: "ADEKAR", commune: ["ADEKAR", "BENI-KSILA", "TAOURIRT-IGHIL"] },
      { daira: "AKBOU", commune: ["AKBOU", "CHELLATA", "IGHRAM", "TAMOKRA"] },
      {
        daira: "AMIZOUR",
        commune: ["AMIZOUR", "BENI-DJELLIL", "FERRAOUNE", "SEMAOUNE"],
      },
      { daira: "AOKAS", commune: ["AOKAS", "TIZI-N'BERBER"] },
      { daira: "BARBACHA", commune: ["BARBACHA", "KENDIRA"] },
      { daira: "BEJAIA", commune: ["BEJAIA", "OUED-GHIR"] },
      { daira: "BENI-MAOUCHE", commune: ["BENI-MAOUCHE"] },
      {
        daira: "CHEMINI",
        commune: ["AKFADOU", "CHEMINI", "SOUK-OUFELLA", "TIBANE"],
      },
      { daira: "DARGUINA", commune: ["AIT-SMAIL", "DARGUINA", "TASKERIOUT"] },
      { daira: "EL-KSEUR", commune: ["EL-KSEUR", "FENAIA-IL-MATEN", "TOUDJA"] },
      { daira: "IFRI-OUZELLAGUEN", commune: ["IFRI-OUZELLAGUEN"] },
      { daira: "IGHIL-ALI", commune: ["AIT-R'ZINE", "IGHIL-ALI"] },
      { daira: "KHERRATA", commune: ["DRAA-EL-KAID", "KHERRATA"] },
      {
        daira: "SEDDOUK",
        commune: ["AMALOU", "BOUHAMZA", "M'CISNA", "SEDDOUK"],
      },
      {
        daira: "SIDI-AICH",
        commune: ["LEFLAYE", "SIDI-AICH", "SIDI-AYAD", "TIFRA", "TINABDHER"],
      },
      {
        daira: "SOUK-EL-TENINE",
        commune: ["MELBOU", "SOUK-EL-TENINE", "TAMRIDJET"],
      },
      {
        daira: "TAZMALT",
        commune: ["BENI-MELIKECHE", "BOUDJELLIL", "TAZMALT"],
      },
      { daira: "TICHY", commune: ["BOUKHELIFA", "TALA-HAMZA", "TICHY"] },
      { daira: "TIMZRIT", commune: ["TIMZRIT"] },
    ],
  },
  {
    wilaya: "BISKRA",
    dairas: [
      { daira: "BISKRA", commune: ["BISKRA", "EL-HADJEB"] },
      { daira: "DJEMORAH", commune: ["BRANIS", "DJEMORAH"] },
      { daira: "EL-KANTARA", commune: ["AIN-ZAATOUT", "EL-KANTARA"] },
      { daira: "EL-OUTAYA", commune: ["EL-OUTAYA"] },
      { daira: "FOUGHALA", commune: ["EL-GHROUS", "FOUGHALA"] },
      { daira: "M'CHOUNECHE", commune: ["M'CHOUNECHE"] },
      {
        daira: "OULED-DJELLAL",
        commune: ["DOUCEN", "ECH-CHAIBA", "OULED-DJELLAL"],
      },
      {
        daira: "OURLAL",
        commune: ["LIOUA", "M'LILI", "MEKHADMA", "OUMACHE", "OURLAL"],
      },
      {
        daira: "SIDI-KHALED",
        commune: ["BESBES", "RAS-EL-MIAAD", "SIDI-KHALED"],
      },
      {
        daira: "SIDI-OKBA",
        commune: ["AIN-NAGA", "CHETMA", "EL-HAOUCH", "SIDI-OKBA"],
      },
      {
        daira: "TOLGA",
        commune: ["BORDJ-BEN-AZZOUZ", "BOUCHAGROUNE", "LICHANA", "TOLGA"],
      },
      {
        daira: "ZERIBET-EL-OUED",
        commune: [
          "EL-FEIDH",
          "EL-MIZARAA",
          "KHANGAT-SIDI-NADJI-EL-BORDJ",
          "ZERIBET-EL-OUED",
        ],
      },
    ],
  },
  {
    wilaya: "BECHAR",
    dairas: [
      {
        daira: "ABADLA",
        commune: ["ABADLA", "ERG-FERRADJ", "MECHRAA-H-BOUMEDIENE"],
      },
      { daira: "BECHAR", commune: ["BECHAR"] },
      { daira: "BENI-ABBES", commune: ["BENI-ABBES", "TAMTERT"] },
      { daira: "BENI-OUNIF", commune: ["BENI-OUNIF"] },
      { daira: "EL-OUATA", commune: ["EL-OUATA"] },
      { daira: "IGLI", commune: ["IGLI"] },
      { daira: "KENADSA", commune: ["KENADSA", "MERIDJA"] },
      { daira: "KERZAZ", commune: ["BENI-IKHLEF", "KERZAZ", "TIMOUDI"] },
      { daira: "LAHMAR", commune: ["BOUKAIS", "LAHMAR", "MOUGHEUL"] },
      { daira: "OULED-KHODEIR", commune: ["KSABI", "OULED-KHODEIR"] },
      { daira: "TABELBALA", commune: ["TABELBALA"] },
      { daira: "TAGHIT", commune: ["TAGHIT"] },
    ],
  },
  {
    wilaya: "BLIDA",
    dairas: [
      { daira: "BLIDA", commune: ["BLIDA", "BOUARFA"] },
      { daira: "BOUFARIK", commune: ["BOUFARIK", "GUERROUAOU", "SOUMAA"] },
      {
        daira: "BOUGARA",
        commune: ["BOUGARA", "HAMMAM-MELOUANE", "OULED-SLAMA"],
      },
      { daira: "BOUINAN", commune: ["BOUINAN", "CHEBLI"] },
      { daira: "EL-AFFROUN", commune: ["EL-AFFROUN", "OUED-DJER"] },
      { daira: "LARBAA", commune: ["LARBAA", "SOUHANE"] },
      { daira: "MEFTAH", commune: ["DJEBABRA", "MEFTAH"] },
      { daira: "MOUZAIA", commune: ["AIN-ROMANA", "CHIFFA", "MOUZAIA"] },
      {
        daira: "OUED-EL-ALLEUG",
        commune: ["BEN-KHELLIL", "BENI-TAMOU", "OUED-EL-ALLEUG"],
      },
      { daira: "OULED-YAICH", commune: ["BENI-MERED", "CHREA", "OULED-YAICH"] },
    ],
  },
  {
    wilaya: "BOUIRA",
    dairas: [
      {
        daira: "AIN-BESSEM",
        commune: ["AIN-BESSEM", "AIN-EL-HADJAR", "AIN-LALOUI"],
      },
      {
        daira: "BECHLOUL",
        commune: [
          "AHL-EL-KSAR",
          "BECHLOUL",
          "EL-ADJIBA",
          "EL-ASNAM",
          "OULED-RACHED",
        ],
      },
      {
        daira: "BIR-GHBALOU",
        commune: ["BIR-GHBALOU", "EL-KHABOUZIA", "RAOURAOUA"],
      },
      {
        daira: "BORDJ-OKHRISS",
        commune: ["BORDJ-OKHRISS", "HADJERA-ZERGA", "MEZDOUR", "TAGUEDITE"],
      },
      { daira: "BOUIRA", commune: ["AIN-TURK", "AIT-LAAZIZ", "BOUIRA"] },
      { daira: "EL-HACHIMIA", commune: ["EL-HACHIMIA", "OUED-EL-BERDI"] },
      { daira: "HAIZER", commune: ["HAIZER", "TAGHZOUT"] },
      { daira: "KADIRIA", commune: ["AOMAR", "DJEBAHIA", "KADIRIA"] },
      {
        daira: "LAKHDARIA",
        commune: [
          "BOUDERBALA",
          "BOUKRAM",
          "GUERROUMA",
          "LAKHDARIA",
          "MAALA",
          "Z'BARBAR",
        ],
      },
      {
        daira: "M'CHEDALLAH",
        commune: [
          "AGHBALOU",
          "AHNIF",
          "ATH-MANSOUR",
          "CHORFA",
          "M'CHEDALLAH",
          "SAHARIDJ",
        ],
      },
      { daira: "SOUK-EL-KHEMIS", commune: ["EL-MOKRANI", "SOUK-EL-KHEMIS"] },
      {
        daira: "SOUR-EL-GHOZLANE",
        commune: [
          "DECHMIA",
          "DIRAH",
          "EL-HAKIMIA",
          "MAAMORA",
          "RIDANE",
          "SOUR-EL-GHOZLANE",
        ],
      },
    ],
  },
  {
    wilaya: "TAMANRASSET",
    dairas: [
      { daira: "IN-GHAR", commune: ["IN-GHAR"] },
      { daira: "IN-GUEZZAM", commune: ["IN-GUEZZAM"] },
      { daira: "IN-SALAH", commune: ["FOUGGARET-EZZAOUIA", "IN-SALAH"] },
      { daira: "SILET", commune: ["ABALESSA"] },
      { daira: "TAMANRASSET", commune: ["IN-AMGUEL", "TAMANRASSET"] },
      { daira: "TAZROUK", commune: ["IDELES", "TAZROUK"] },
      { daira: "TIN-ZAOUTEN", commune: ["TIN-ZAOUTEN"] },
    ],
  },
  {
    wilaya: "TEBESSA",
    dairas: [
      { daira: "BIR-EL-ATER", commune: ["BIR-EL-ATER", "EL-OGLA-EL-MALHA"] },
      {
        daira: "BIR-MOKKADEM",
        commune: ["BIR-MOKKADEM", "GUORRIGEUR", "HAMMAMET"],
      },
      { daira: "CHERIA", commune: ["CHERIA", "TLIDJENE"] },
      { daira: "EL-AOUINET", commune: ["BOUKHADRA", "EL-AOUINET"] },
      { daira: "EL-KOUIF", commune: ["BEKKARIA", "BOULHAF-DIR", "EL-KOUIF"] },
      { daira: "EL-MA-LABIOD", commune: ["EL-HOUIDJEBET", "EL-MA-LABIOD"] },
      {
        daira: "EL-OGLA",
        commune: ["BEDJENE", "EL-MEZERAA", "EL-OGLA", "STAH-GUENTIS"],
      },
      { daira: "MORSOTT", commune: ["BIR-DHEB", "MORSOTT"] },
      { daira: "NEGRINE", commune: ["FERKANE", "NEGRINE"] },
      { daira: "OUENZA", commune: ["AIN-ZERGA", "EL-MERIDJ", "OUENZA"] },
      { daira: "OUM-ALI", commune: ["OUM-ALI", "SAF-SAF-EL-OUESRA"] },
      { daira: "TEBESSA", commune: ["TEBESSA"] },
    ],
  },
  {
    wilaya: "TLEMCEN",
    dairas: [
      { daira: "AIN-TALLOUT", commune: ["AIN-NEHALA", "AIN-TALLOUT"] },
      {
        daira: "BAB-EL-ASSA",
        commune: ["BAB-EL-ASSA", "SOUANI", "SOUK-EL-TLATA"],
      },
      { daira: "BENI-BOUSSAID", commune: ["BENI-BOUSSAID", "SIDI-MEDJAHED"] },
      { daira: "BENI-SNOUS", commune: ["AZAILS", "BENI-BAHDEL", "BENI-SNOUS"] },
      { daira: "BENSEKRANE", commune: ["BENSEKRANE", "SIDI-ABDELLI"] },
      { daira: "CHETOUANE", commune: ["AIN-FEZZA", "AMIEUR", "CHETOUANE"] },
      {
        daira: "FELLAOUCENE",
        commune: ["AIN-FETAH", "AIN-KEBIRA", "FELLAOUCENE"],
      },
      {
        daira: "GHAZAOUET",
        commune: ["DAR-YAGHMORACEN", "GHAZAOUET", "SOUAHLIA", "TIENET"],
      },
      { daira: "HENAINE", commune: ["BENI-KHELLAD", "HENAINE"] },
      { daira: "HENNAYA", commune: ["HENNAYA", "OULED-RIYAH", "ZENATA"] },
      { daira: "MAGHNIA", commune: ["HAMMAM-BOUGHRARA", "MAGHNIA"] },
      {
        daira: "MANSOURAH",
        commune: [
          "AIN-GHORABA",
          "BENI-MESTER",
          "MANSOURAH",
          "TERNY-BENI-HDIEL",
        ],
      },
      {
        daira: "MARSA-BEN-M'HIDI",
        commune: ["M'SIRDA-FOUAGA", "MARSA-BEN-M'HIDI"],
      },
      { daira: "NEDROMA", commune: ["DJEBALA", "NEDROMA"] },
      {
        daira: "OULED-MIMOUN",
        commune: ["BENI-SEMIEL", "OUED-LAKHDAR", "OULED-MIMOUN"],
      },
      {
        daira: "REMCHI",
        commune: [
          "AIN-YOUCEF",
          "BENI-OUARSOUS",
          "EL-FEHOUL",
          "REMCHI",
          "SEBAA-CHIOUKH",
        ],
      },
      { daira: "SABRA", commune: ["BOUHLOU", "SABRA"] },
      { daira: "SEBDOU", commune: ["EL-ARICHA", "EL-GOR", "SEBDOU"] },
      { daira: "SIDI-DJILLALI", commune: ["EL-BOUIHI", "SIDI-DJILLALI"] },
      { daira: "TLEMCEN", commune: ["TLEMCEN"] },
    ],
  },
  {
    wilaya: "TIARET",
    dairas: [
      { daira: "AIN-DEHEB", commune: ["AIN-DEHEB", "CHEHAIMA", "NAIMA"] },
      {
        daira: "AIN-KERMES",
        commune: [
          "AIN-KERMES",
          "DJEBILET-ROSFA",
          "MADNA",
          "MEDRISSA",
          "SIDI-ABDERRAHMANE",
        ],
      },
      { daira: "DAHMOUNI", commune: ["AIN-BOUCHEKIF", "DAHMOUNI"] },
      { daira: "FRENDA", commune: ["AIN-EL-HADID", "FRENDA", "TAKHEMARET"] },
      { daira: "HAMADIA", commune: ["BOUGARA", "HAMADIA", "RECHAIGA"] },
      {
        daira: "KSAR-CHELLALA",
        commune: ["KSAR-CHELLALA", "SERGHINE", "Z'MALET-EL-EMIR-AEK"],
      },
      {
        daira: "MAHDIA",
        commune: ["AIN-SEBAIN", "AIN-ZARIT", "MAHDIA", "NADORAH"],
      },
      {
        daira: "MECHRAA-SAFA",
        commune: ["DJILLALI-BEN-AMAR", "MECHRAA-SAFA", "TAGDEMT"],
      },
      { daira: "MEDROUSSA", commune: ["MEDROUSSA", "MELLAKOU", "SIDI-BAKHTI"] },
      { daira: "MEGHILA", commune: ["MEGHILA", "SEBT", "SIDI-HOSNI"] },
      {
        daira: "OUED-LILLI",
        commune: ["OUED-LILLI", "SIDI-ALI-MELLAL", "TIDDA"],
      },
      { daira: "RAHOUIA", commune: ["GUERTOUFA", "RAHOUIA"] },
      {
        daira: "SOUGUEUR",
        commune: ["FAIDJA", "SI-ABDELGHANI", "SOUGUEUR", "TOUSNINA"],
      },
      { daira: "TIARET", commune: ["TIARET"] },
    ],
  },
  {
    wilaya: "TIZI-OUZOU",
    dairas: [
      {
        daira: "AIN-EL-HAMMAM",
        commune: ["ABI-YOUCEF", "AIN-EL-HAMMAM", "AIT-YAHIA", "AKBIL"],
      },
      {
        daira: "AZAZGA",
        commune: ["AZAZGA", "FREHA", "IFIGHA", "YAKOUREN", "ZEKRI"],
      },
      {
        daira: "AZEFFOUN",
        commune: ["AGHRIBS", "AIT-CHAFAA", "AKERROU", "AZEFFOUN"],
      },
      {
        daira: "BENI-DOUALA",
        commune: ["AIT-MAHMOUD", "BENI-AISSI", "BENI-DOUALA", "BENI-ZMENZER"],
      },
      {
        daira: "BENI-YENNI",
        commune: ["BENI-YENNI", "IBOUDRARENE", "YATAFENE"],
      },
      {
        daira: "BOGHNI",
        commune: ["ASSI-YOUCEF", "BOGHNI", "BOUNOUH", "MECHTRAS"],
      },
      {
        daira: "BOUZEGUENE",
        commune: ["BENI-ZIKI", "BOUZEGUENE", "IDJEUR", "ILLOULA-OUMALOU"],
      },
      {
        daira: "DRAA-BEN-KHEDDA",
        commune: ["DRAA-BEN-KHEDDA", "SIDI-NAAMANE", "TADMAIT", "TIRMITINE"],
      },
      {
        daira: "DRAA-EL-MIZAN",
        commune: ["AIN-ZAOUIA", "AIT-YAHIA-MOUSSA", "DRAA-EL-MIZAN", "FRIKAT"],
      },
      {
        daira: "IFERHOUNENE",
        commune: ["IFERHOUNENE", "ILLILTEN", "IMSOUHEL"],
      },
      {
        daira: "LARBAA-NATH-IRATHEN",
        commune: ["AIT-AGGOUACHA", "IRDJEN", "LARBAA-NATH-IRATHEN"],
      },
      { daira: "MAATKAS", commune: ["MAATKAS", "SOUK-EL-THENINE"] },
      { daira: "MAKOUDA", commune: ["BOUDJIMA", "MAKOUDA"] },
      { daira: "MEKLA", commune: ["AIT-KHELILI", "MEKLA", "SOUAMAA"] },
      { daira: "OUACIF", commune: ["AIT-BOUMAHDI", "AIT-TOUDERT", "OUACIF"] },
      {
        daira: "OUADHIA",
        commune: ["AGOUNI-GUEGHRANE", "AIT-BOUADOU", "OUADHIA", "TIZI-N'TLATA"],
      },
      {
        daira: "OUAGUENOUN",
        commune: ["DJEBEL-AISSA-MIMOUN", "OUAGUENOUN", "TIMIZART"],
      },
      { daira: "TIGZIRT", commune: ["IFLISSEN", "MIZRANA", "TIGZIRT"] },
      { daira: "TIZI-GHENIF", commune: ["M'KIRA", "TIZI-GHENIF"] },
      { daira: "TIZI-OUZOU", commune: ["TIZI-OUZOU"] },
      { daira: "TIZI-RACHED", commune: ["AIT-OUMALOU", "TIZI-RACHED"] },
    ],
  },
  {
    wilaya: "ALGER-CENTRE",
    dairas: [
      {
        daira: "BAB-EL-OUED",
        commune: [
          "BAB-EL-OUED",
          "BOLOGHINE",
          "CASBAH",
          "OUED-KORICHE",
          "RAIS-HAMIDOU",
        ],
      },
      {
        daira: "BIR-MOURAD-RAIS",
        commune: ["BIR-MOURAD-RAIS", "BIRKHADEM", "HYDRA"],
      },
      { daira: "BOUZAREAH", commune: ["EL-BIAR"] },
      { daira: "CHERAGA", commune: ["EL-HAMMAMET"] },
      { daira: "HUSSEIN-DEY", commune: ["BELOUIZDAD"] },
      {
        daira: "SIDI-M'HAMED",
        commune: [
          "ALGER-CENTRE",
          "BELOUIZDAD",
          "EL-MADANIA",
          "EL-MOURADIA",
          "SIDI-M'HAMED",
        ],
      },
    ],
  },
  {
    wilaya: "ALGER-EST",
    dairas: [
      { daira: "BARAKI", commune: ["BARAKI", "LES-EUCALYPTUS", "SIDI-MOUSSA"] },
      { daira: "BIR-MOURAD-RAIS", commune: ["DJASR-KACENTINA"] },
      {
        daira: "DAR-EL-BEIDA",
        commune: [
          "AIN-TAYA",
          "BAB-EZZOUAR",
          "BORDJ-EL-BAHRI",
          "BORDJ-EL-KIFFAN",
          "DAR-EL-BEIDA",
          "EL-MARSA",
          "MOHAMMADIA",
        ],
      },
      {
        daira: "EL-HARRACH",
        commune: ["BACHEDJERAH", "BOUROUBA", "EL-HARRACH", "OUED-SMAR"],
      },
      {
        daira: "HUSSEIN-DEY",
        commune: ["EL-MAGHARIA", "HUSSEIN-DEY", "KOUBA"],
      },
      { daira: "ROUIBA", commune: ["HERAOUA", "REGHAIA", "ROUIBA"] },
    ],
  },
  {
    wilaya: "ALGER-OUEST",
    dairas: [
      { daira: "BIR-MOURAD-RAIS", commune: ["SAOULA"] },
      {
        daira: "BIRTOUTA",
        commune: ["BIRTOUTA", "OULED-CHBEL", "TESSALA-EL-MERDJA"],
      },
      {
        daira: "BOUZAREAH",
        commune: ["BEN-AKNOUN", "BENI-MESSOUS", "BOUZAREAH"],
      },
      {
        daira: "CHERAGA",
        commune: ["AIN-BENIAN", "CHERAGA", "DELY-BRAHIM", "OULED-FAYET"],
      },
      {
        daira: "DRARIA",
        commune: ["BABA-HASSEN", "DOUERA", "DRARIA", "EL-ACHOUR", "KHRAICIA"],
      },
      {
        daira: "ZERALDA",
        commune: ["MAHELMA", "RAHMANIA", "SOUIDANIA", "STAOUELI", "ZERALDA"],
      },
    ],
  },
  {
    wilaya: "DJELFA",
    dairas: [
      {
        daira: "AIN-EL-IBEL",
        commune: ["AIN-EL-IBEL", "MOUDJEBARA", "TADMIT", "ZACCAR"],
      },
      { daira: "AIN-OUSSARA", commune: ["AIN-OUSSARA", "GUERNINI"] },
      { daira: "BIRINE", commune: ["BENHAR", "BIRINE"] },
      { daira: "CHAREF", commune: ["BENI-YAGOUB", "CHAREF", "EL-GUEDDID"] },
      {
        daira: "DAR-CHIOUKH",
        commune: ["DAR-CHIOUKH", "M'LILIHA", "SIDI-BAIZID"],
      },
      { daira: "DJELFA", commune: ["DJELFA"] },
      {
        daira: "EL-IDRISSIA",
        commune: ["AIN-CHOUHADA", "DOUIS", "EL-IDRISSIA"],
      },
      {
        daira: "FAIDH-EL-BOTMA",
        commune: ["AMOURAH", "FAIDH-EL-BOTMA", "OUM-LAADHAM"],
      },
      {
        daira: "HAD-SAHARY",
        commune: ["AIN-FEKKA", "BOUIRA-LAHDAB", "HAD-SAHARY"],
      },
      {
        daira: "HASSI-BAHBAH",
        commune: ["AIN-MAABED", "HASSI-BAHBAH", "HASSI-EL-EUCH", "ZAAFRANE"],
      },
      {
        daira: "MESSAAD",
        commune: ["DELDOUL", "GUETTARA", "MESSAAD", "SED-RAHAL", "SELMANA"],
      },
      {
        daira: "SIDI-LADJEL",
        commune: ["EL-KHEMIS", "HASSI-FEDOUL", "SIDI-LADJEL"],
      },
    ],
  },
  {
    wilaya: "JIJEL",
    dairas: [
      {
        daira: "CHEKFA",
        commune: [
          "BORDJ-TAHAR",
          "CHEKFA",
          "EL-KENNAR-NOUCHFI",
          "SIDI-ABDELAZIZ",
        ],
      },
      { daira: "DJIMLA", commune: ["BOUDRIAA-BEN-YADJIS", "DJIMLA"] },
      {
        daira: "EL-ANCER",
        commune: [
          "BOURAOUI-BELHADEF",
          "DJEMAA-BENI-HABIBI",
          "EL-ANCER",
          "KHEIRI-OUED-ADJOUL",
        ],
      },
      { daira: "EL-AOUANA", commune: ["EL-AOUANA", "SELMA-BENZIADA"] },
      { daira: "EL-MILIA", commune: ["EL-MILIA", "OULED-YAHIA-KHEDROUCHE"] },
      { daira: "JIJEL", commune: ["JIJEL"] },
      { daira: "SETTARA", commune: ["GHEBALA", "SETTARA"] },
      { daira: "SIDI-MAAROUF", commune: ["OULED-RABAH", "SIDI-MAAROUF"] },
      {
        daira: "TAHER",
        commune: [
          "BOUCIF-OULED-ASKEUR",
          "CHAHNA",
          "EMIR-ABDELKADER",
          "OUADJANA",
          "TAHER",
        ],
      },
      { daira: "TEXENNA", commune: ["KAOUS", "TEXENNA"] },
      { daira: "ZIAMA-MANSOURIAH", commune: ["ERAGUENE", "ZIAMA-MANSOURIAH"] },
    ],
  },
  {
    wilaya: "SETIF",
    dairas: [
      {
        daira: "AIN-ARNAT",
        commune: ["AIN-ABESSA", "AIN-ARNAT", "EL-OURICIA", "MEZLOUG"],
      },
      {
        daira: "AIN-AZEL",
        commune: ["AIN-AZEL", "AIN-LAHDJAR", "BEIDHA-BORDJ", "BIR-HADDADA"],
      },
      {
        daira: "AIN-EL-KEBIRA",
        commune: ["AIN-EL-KEBIRA", "DEHAMCHA", "OULED-ADDOUANE"],
      },
      {
        daira: "AIN-OULMENE",
        commune: ["AIN-OULMENE", "GUELLAL", "KSAR-EL-ABTAL", "OULED-SI-AHMED"],
      },
      {
        daira: "AMOUCHA",
        commune: ["AMOUCHA", "OUED-EL-BARAD", "TIZI-N'BECHAR"],
      },
      { daira: "BABOR", commune: ["BABOR", "SERDJ-EL-GHOUL"] },
      { daira: "BENI-AZIZ", commune: ["AIN-SEBT", "BENI-AZIZ", "MAAOUIA"] },
      {
        daira: "BENI-OURTILANE",
        commune: [
          "AIN-LEGRAJ",
          "BENI-CHEBANA",
          "BENI-MOUHLI",
          "BENI-OURTILANE",
        ],
      },
      {
        daira: "BIR-EL-ARCH",
        commune: ["BELAA", "BIR-EL-ARCH", "EL-OULDJA", "TACHOUDA"],
      },
      {
        daira: "BOUANDAS",
        commune: ["AIT-NAOUAL-MEZADA", "AIT-TIZI", "BOUANDAS", "BOUSSELAM"],
      },
      { daira: "BOUGAA", commune: ["AIN-ROUA", "BENI-HOCINE", "BOUGAA"] },
      { daira: "DJEMILA", commune: ["BENI-FOUDA", "DJEMILA"] },
      {
        daira: "EL-EULMA",
        commune: ["BAZER-SAKHRA", "EL-EULMA", "GUELTA-ZERKA"],
      },
      { daira: "GUENZET", commune: ["GUENZET", "HARBIL"] },
      { daira: "GUIDJEL", commune: ["GUIDJEL", "OULED-SABOR"] },
      { daira: "HAMMAM-GUERGOUR", commune: ["DRAA-KEBILA", "HAMMAM-GUERGOUR"] },
      { daira: "HAMMAM-SOUKHNA", commune: ["HAMMAM-SOUKHNA", "TAYA", "TELLA"] },
      { daira: "MAOKLANE", commune: ["MAOKLANE", "TALAIFACENE"] },
      {
        daira: "SALAH-BEY",
        commune: ["BOUTALEB", "HAMMA", "OULED-TEBBEN", "RASFA", "SALAH-BEY"],
      },
      { daira: "SETIF", commune: ["SETIF"] },
    ],
  },
  {
    wilaya: "SAIDA",
    dairas: [
      {
        daira: "AIN-EL-HADJAR",
        commune: ["AIN-EL-HADJAR", "MOULAY-LARBI", "SIDI-AHMED"],
      },
      {
        daira: "EL-HASSASNA",
        commune: ["AIN-SEKHOUNA", "EL-HASSASNA", "MAAMORA"],
      },
      { daira: "OULED-BRAHIM", commune: ["TIRCINE"] },
      {
        daira: "OULED-BRAHIM-BALLOUL",
        commune: ["AIN-SOLTANE", "OULED-BRAHIM", "TIRCINE"],
      },
      { daira: "SAIDA", commune: ["SAIDA"] },
      {
        daira: "SIDI-BOUBEKEUR",
        commune: ["HOUNET", "OULED-KHALED", "SIDI-AMAR", "SIDI-BOUBEKEUR"],
      },
      { daira: "YOUB", commune: ["DOUI-THABET", "YOUB"] },
    ],
  },
  {
    wilaya: "SKIKDA",
    dairas: [
      { daira: "AIN-KECHRA", commune: ["AIN-KECHRA", "EL-OULDJA-BOULBALOUT"] },
      {
        daira: "AZZABA",
        commune: [
          "AIN-CHARCHAR",
          "AZZABA",
          "DJENDEL-SAADI-MOHAMED",
          "EL-GHEDIR",
          "ES-SEBT",
        ],
      },
      {
        daira: "BEN-AZZOUZ",
        commune: ["BEKKOUCHE-LAKHDAR", "BEN-AZZOUZ", "EL-MARSA"],
      },
      { daira: "COLLO", commune: ["BENI-ZID", "CHERAIA", "COLLO"] },
      {
        daira: "EL-HADAEIK",
        commune: ["AIN-ZOUIT", "BOUCHTATA", "EL-HADAEIK"],
      },
      {
        daira: "EL-HARROUCH",
        commune: [
          "EL-HARROUCH",
          "EMDJEZ-ED-CHICH",
          "OULED-HBABA",
          "SALAH-BOUCHAOUR",
          "ZARDAZA",
        ],
      },
      {
        daira: "OULED-ATTIA",
        commune: ["KHENEG-MAYOUN", "OUED-ZEHOUR", "OULED-ATTIA"],
      },
      { daira: "OUM-TOUB", commune: ["OUM-TOUB"] },
      { daira: "RAMDANE-DJAMEL", commune: ["BENI-BECHIR", "RAMDANE-DJAMEL"] },
      {
        daira: "SIDI-MEZGHICHE",
        commune: ["AIN-BOUZIANE", "BENI-OULBANE", "SIDI-MEZGHICHE"],
      },
      { daira: "SKIKDA", commune: ["FILFILA", "HAMMADI-KROUMA", "SKIKDA"] },
      { daira: "TAMALOUS", commune: ["BIN-EL-OUIDEN", "KERKERA", "TAMALOUS"] },
      { daira: "ZITOUNA", commune: ["KANOUA", "ZITOUNA"] },
    ],
  },
  {
    wilaya: "SIDI-BEL-ABBES",
    dairas: [
      {
        daira: "AIN-EL-BERD",
        commune: ["AIN-EL-BERD", "MAKEDRA", "SIDI-BRAHIM", "SIDI-HAMADOUCHE"],
      },
      {
        daira: "BEN-BADIS",
        commune: [
          "BEDRADINE-EL-MOKRANI",
          "BEN-BADIS",
          "CHETTOUANE-BELAILA",
          "HASSI-ZAHANA",
        ],
      },
      { daira: "MARHOUM", commune: ["BIR-EL-HAMMAM", "MARHOUM", "SIDI-CHAIB"] },
      {
        daira: "MERINE",
        commune: ["MERINE", "OUED-TAOURIRA", "TAFISSOUR", "TAOUDMOUT"],
      },
      {
        daira: "MOSTEFA-BEN-BRAHIM",
        commune: ["BELARBI", "MOSTEFA-BEN-BRAHIM", "TILMOUNI", "ZEROUALA"],
      },
      {
        daira: "MOULAY-SLISSEN",
        commune: ["AIN-TINDAMINE", "EL-HACAIBA", "MOULAY-SLISSEN"],
      },
      {
        daira: "RAS-EL-MA",
        commune: ["OUED-SEBAA", "RAS-EL-MA", "REDJEM-DEMOUCHE"],
      },
      {
        daira: "SFISEF",
        commune: ["AIN-ADDEN", "BOUDJEBAA-EL-BORDJ", "M'CID", "SFISEF"],
      },
      {
        daira: "SIDI-ALI-BENYOUB",
        commune: ["BOUKHANAFIS", "SIDI-ALI-BENYOUB", "TABIA"],
      },
      {
        daira: "SIDI-ALI-BOUSSIDI",
        commune: [
          "AIN-KADA",
          "LEMTAR",
          "SIDI-ALI-BOUSSIDI",
          "SIDI-DAHO-DES-ZAIRS",
        ],
      },
      { daira: "SIDI-BEL-ABBES", commune: ["SIDI-BEL-ABBES"] },
      {
        daira: "SIDI-LAHCENE",
        commune: ["AMARNAS", "SIDI-KHALED", "SIDI-LAHCENE", "SIDI-YACOUB"],
      },
      {
        daira: "TELAGH",
        commune: ["DHAYA", "MEZAOUROU", "TEGHALIMET", "TELAGH"],
      },
      {
        daira: "TENIRA",
        commune: ["BENACHIBA-CHELIA", "HASSI-DAHO", "OUED-SEFIOUN", "TENIRA"],
      },
      { daira: "TESSALA", commune: ["AIN-THRID", "SEHALA-THAOURA", "TESSALA"] },
    ],
  },
  {
    wilaya: "ANNABA",
    dairas: [
      { daira: "AIN-BERDA", commune: ["AIN-BERDA", "CHEURFA", "EULMA"] },
      { daira: "ANNABA", commune: ["ANNABA", "SERAIDI"] },
      { daira: "BARRAHAL", commune: ["BARRAHAL", "OUED-EL-ANEB", "TREAT"] },
      { daira: "BERRAHAL", commune: ["OUED-EL-ANEB"] },
      { daira: "CHETAIBI", commune: ["CHETAIBI"] },
      { daira: "EL-BOUNI", commune: ["EL-BOUNI"] },
      { daira: "EL-HADJAR", commune: ["EL-HADJAR", "SIDI-AMAR"] },
    ],
  },
  {
    wilaya: "GUELMA",
    dairas: [
      {
        daira: "AIN-MAKHLOUF",
        commune: ["AIN-LARBI", "AIN-MAKHLOUF", "TAMLOUKA"],
      },
      {
        daira: "BOUCHEGOUF",
        commune: ["AIN-BEN-BEIDA", "BOUCHEGOUF", "MEDJEZ-SFA", "OUED-FRAGHA"],
      },
      {
        daira: "GUELAAT-BOU-SBAA",
        commune: [
          "BELKHEIR",
          "BENI-MEZLINE",
          "BOUMAHRA-AHMED",
          "DJEBALLAH-KHEMISSI",
          "GUELAAT-BOU-SBAA",
          "NECHMAYA",
        ],
      },
      { daira: "GUELMA", commune: ["BENDJERRAH", "GUELMA"] },
      {
        daira: "HAMMAM-DEBAGH",
        commune: ["BOUHAMDANE", "HAMMAM-DEBAGH", "ROKNIA"],
      },
      {
        daira: "HAMMAM-N'BAIL",
        commune: ["DAHOUARA", "HAMMAM-N'BAIL", "OUED-CHEHAM"],
      },
      {
        daira: "HELIOPOLIS",
        commune: ["BOUATI-MAHMOUD", "EL-FEDJOUDJ", "HELIOPOLIS"],
      },
      {
        daira: "HOUARI-BOUMEDIENE-AIN-HASSANIA",
        commune: [
          "HOUARI-BOUMEDIENE",
          "MEDJEZ-AMMAR",
          "RAS-EL-AGBA",
          "SALAOUA-ANNOUNA",
        ],
      },
      { daira: "KHEZARRA", commune: ["AIN-SANDEL", "BOUHACHANA", "KHEZARRA"] },
      {
        daira: "OUED-ZENATI",
        commune: ["AIN-REGGADA", "BORDJ-SABAT", "OUED-ZENATI"],
      },
    ],
  },
  {
    wilaya: "CONSTANTINE",
    dairas: [
      { daira: "AIN-ABID", commune: ["AIN-ABID", "IBN-BADIS"] },
      { daira: "CONSTANTINE", commune: ["CONSTANTINE"] },
      {
        daira: "EL-KHROUB",
        commune: ["AIN-SMARA", "EL-KHROUB", "OULED-RAHMOUNE"],
      },
      {
        daira: "HAMMA-BOUZIANE",
        commune: ["DIDOUCHE-MOURAD", "HAMMA-BOUZIANE"],
      },
      { daira: "IBN-ZIAD", commune: ["IBN-ZIAD", "MESSAOUD-BOUDJERIOU"] },
      { daira: "ZIGHOUD-YOUCEF", commune: ["BENI-HAMIDEN", "ZIGHOUD-YOUCEF"] },
    ],
  },
  {
    wilaya: "MEDEA",
    dairas: [
      {
        daira: "AIN-BOUCIF",
        commune: [
          "AIN-BOUCIF",
          "EL-AOUINET",
          "KEF-LAKHDAR",
          "OULED-MAAREF",
          "SIDI-DAMED",
        ],
      },
      { daira: "AZIZ", commune: ["AZIZ", "DERRAG"] },
      {
        daira: "BENI-SLIMANE",
        commune: ["BENI-SLIMANE", "BOUSKENE", "SIDI-ERRABIA"],
      },
      {
        daira: "BERROUAGHIA",
        commune: ["BERROUAGHIA", "OULED-DEIDE", "REBAIA"],
      },
      {
        daira: "CHAHBOUNIA",
        commune: ["BOUAICHE", "BOUGHEZOUL", "CHAHBOUNIA"],
      },
      {
        daira: "CHELLALAT-EL-ADHAOURA",
        commune: [
          "AIN-OUKSIR",
          "CHELLALAT-EL-ADHAOURA",
          "CHENIGUEL",
          "TAFRAOUT",
        ],
      },
      { daira: "EL-AZIZIA", commune: ["EL-AZIZIA", "MAGHRAOUA", "MIHOUB"] },
      {
        daira: "EL-GUELB-EL-KEBIR",
        commune: ["BIR-BEN-LAABED", "EL-GUELB-EL-KEBIR", "SEDRAIA"],
      },
      { daira: "EL-OMARIA", commune: ["BAATA", "EL-OMARIA", "OULED-BRAHIM"] },
      {
        daira: "KSAR-EL-BOUKHARI",
        commune: ["KSAR-EL-BOUKHARI", "MEFTAHA", "OUM-EL-DJALIL", "SANEG"],
      },
      { daira: "MEDEA", commune: ["DRAA-ESSAMAR", "MEDEA", "TAMESGUIDA"] },
      { daira: "OUAMRI", commune: ["HANNACHA", "OUAMRI", "OUED-HARBIL"] },
      {
        daira: "OULED-ANTAR",
        commune: ["BOGHAR", "OULED-ANTAR", "OULED-HELLAL"],
      },
      {
        daira: "OUZERA",
        commune: ["BEN-CHICAO", "EL-HAMDANIA", "OUZERA", "TIZI-MAHDI"],
      },
      {
        daira: "SEGHOUANE",
        commune: ["MOUDJBAR", "SEGHOUANE", "TLATET-ED-DOUAIR", "ZOUBIRIA"],
      },
      {
        daira: "SI-MAHDJOUB",
        commune: ["BOUAICHOUNE", "OULED-BOUACHRA", "SI-MAHDJOUB"],
      },
      {
        daira: "SIDI-NAAMANE",
        commune: ["BOUCHRAHIL", "KHAMS-DJOUAMAA", "SIDI-NAAMANE"],
      },
      {
        daira: "SOUAGUI",
        commune: ["DJOUAB", "SIDI-ZAHAR", "SIDI-ZIANE", "SOUAGUI"],
      },
      {
        daira: "TABLAT",
        commune: ["DEUX-BASSINS", "EL-AISSAOUIA", "MEZERANA", "TABLAT"],
      },
    ],
  },
  {
    wilaya: "MOSTAGANEM",
    dairas: [
      {
        daira: "ACHAACHA",
        commune: ["ACHAACHA", "KHADRA", "NEKMARIA", "OULED-BOUGHALEM"],
      },
      {
        daira: "AIN-NOUISSY",
        commune: ["AIN-NOUISSY", "EL-HASSAINE", "FORNAKA"],
      },
      {
        daira: "AIN-TEDLES",
        commune: ["AIN-TEDLES", "OUED-EL-KHIER", "SIDI-BELLATAR", "SOUR"],
      },
      {
        daira: "BOUGUIRAT",
        commune: ["BOUGUIRAT", "SAF-SAF", "SIRAT", "SOUAFLIAS"],
      },
      {
        daira: "HASSI-MAMECHE",
        commune: ["HASSI-MAMECHE", "MAZAGHRANE", "STIDIA"],
      },
      {
        daira: "KHEIR-EDDINE",
        commune: ["AIN-BOUDINAR", "KHEIR-EDDINE", "SAYADA"],
      },
      {
        daira: "MESRA",
        commune: ["AIN-SIDI-CHERIF", "BLAD-TOUAHRIA", "MANSOURAH", "MESRA"],
      },
      { daira: "MOSTAGANEM", commune: ["MOSTAGANEM"] },
      { daira: "SIDI-ALI", commune: ["OULED-MAALAH", "SIDI-ALI", "TAZGAIT"] },
      {
        daira: "SIDI-LAKHDAR",
        commune: ["ABDELMALEK-RAMDANE", "HADJADJ", "SIDI-LAKHDAR"],
      },
    ],
  },
  {
    wilaya: "M'SILA",
    dairas: [
      { daira: "AIN-EL-HADJEL", commune: ["AIN-EL-HADJEL", "SIDI-HADJERES"] },
      {
        daira: "AIN-EL-MELH",
        commune: [
          "AIN-EL-MELH",
          "AIN-ERRICH",
          "AIN-FARES",
          "BIR-FODA",
          "SIDI-M'HAMED",
        ],
      },
      {
        daira: "BEN-SROUR",
        commune: ["BEN-SROUR", "MOHAMED-BOUDIAF", "OULED-SLIMANE", "ZARZOUR"],
      },
      { daira: "BOU-SAADA", commune: ["BOU-SAADA", "EL-HAMEL", "OULTENE"] },
      {
        daira: "CHELLAL",
        commune: ["CHELLAL", "KHETTOUTI-SED-EL-DJIR", "MAARIF", "OULED-MADHI"],
      },
      { daira: "DJEBEL-MESSAAD", commune: ["DJEBEL-MESSAAD", "SLIM"] },
      {
        daira: "HAMMAM-DHALAA",
        commune: ["HAMMAM-DHALAA", "OUANOUGHA", "OULED-MANSOUR", "TARMOUNT"],
      },
      { daira: "KHOUBANA", commune: ["EL-HOUAMED", "KHOUBANA", "M'CIF"] },
      { daira: "M'SILA", commune: ["M'SILA"] },
      {
        daira: "MAGRA",
        commune: ["AIN-EL-KHADRA", "BELAIBA", "BERHOUM", "DEHAHNA", "MAGRA"],
      },
      { daira: "MEDJEDEL", commune: ["MEDJEDEL", "MENAA"] },
      {
        daira: "OULED-DERRADJ",
        commune: [
          "M'TARFA",
          "MAADID",
          "OULED-ADDI-GUEBALA",
          "OULED-DERRADJ",
          "SOUAMAA",
        ],
      },
      { daira: "OULED-SIDI-BRAHIM", commune: ["BENZOUH", "OULED-SIDI-BRAHIM"] },
      {
        daira: "SIDI-AISSA",
        commune: ["BENI-ILMANE", "BOUTI-SAYAH", "SIDI-AISSA"],
      },
      { daira: "SIDI-AMEUR", commune: ["SIDI-AMEUR", "TAMSA"] },
    ],
  },
  {
    wilaya: "MASCARA",
    dairas: [
      { daira: "AIN-FARES", commune: ["AIN-FARES", "MAMOUNIA"] },
      { daira: "AIN-FEKKAN", commune: ["AIN-FEKKAN", "AIN-FRASS"] },
      { daira: "AOUF", commune: ["AOUF", "BENIANE", "GHAROUSS"] },
      {
        daira: "BOU-HANIFIA",
        commune: ["BOU-HANIFIA", "EL-GUETTANA", "HACINE"],
      },
      { daira: "EL-BORDJ", commune: ["EL-BORDJ", "EL-MENAOUER", "KHALOUIA"] },
      {
        daira: "GHRISS",
        commune: ["GHRISS", "MAKDHA", "MAOUSSA", "MATEMORE", "SIDI-BOUSSAID"],
      },
      { daira: "HACHEM", commune: ["HACHEM", "NESMOTH", "ZELMATA"] },
      { daira: "MASCARA", commune: ["MASCARA"] },
      {
        daira: "MOHAMMADIA",
        commune: [
          "EL-GHOMRI",
          "FERRAGUIG",
          "MOCTA-DOUZ",
          "MOHAMMADIA",
          "SEDJERARA",
          "SIDI-ABDELMOUMEN",
        ],
      },
      {
        daira: "OGGAZ",
        commune: ["EL-ALAIMIA", "OGGAZ", "RAS-EL-AIN-AMIROUCHE"],
      },
      {
        daira: "OUED-EL-ABTAL",
        commune: ["AIN-FERAH", "OUED-EL-ABTAL", "SIDI-ABDELDJEBAR"],
      },
      { daira: "OUED-TARIA", commune: ["GUERDJOUM", "OUED-TARIA"] },
      { daira: "SIG", commune: ["BOU-HENNI", "CHORFA", "SIG"] },
      { daira: "TIGHENNIF", commune: ["SEHAILIA", "SIDI-KADA", "TIGHENNIF"] },
      { daira: "TIZI", commune: ["EL-KEURT", "FROHA", "TIZI"] },
      { daira: "ZAHANA", commune: ["EL-GAADA", "ZAHANA"] },
    ],
  },
  {
    wilaya: "OUARGLA",
    dairas: [
      { daira: "EL-BORMA", commune: ["EL-BORMA"] },
      { daira: "EL-HADJIRA", commune: ["EL-ALLIA", "EL-HADJIRA"] },
      { daira: "HASSI-MESSAOUD", commune: ["HASSI-MESSAOUD"] },
      { daira: "MEGARINE", commune: ["MEGARINE", "SIDI-SLIMANE"] },
      { daira: "N'GOUSSA", commune: ["N'GOUSSA"] },
      { daira: "OUARGLA", commune: ["OUARGLA", "ROUISSAT"] },
      {
        daira: "SIDI-KHOUILED",
        commune: ["AIN-BEIDA", "HASSI-BEN-ABDELLAH", "SIDI-KHOUILED"],
      },
      { daira: "TAIBET", commune: ["BENACEUR", "M'NAGUER", "TAIBET"] },
      { daira: "TAMACINE", commune: ["BLIDETE-AMEUR", "TAMACINE"] },
      {
        daira: "TOUGGOURT",
        commune: ["NEZLA", "TEBESBEST", "TOUGGOURT", "ZAOUIA-EL-ABIDIA"],
      },
    ],
  },
  {
    wilaya: "ORAN",
    dairas: [
      {
        daira: "AIN-EL-TURK",
        commune: ["AIN-EL-TURK", "BOU-SFER", "EL-ANCOR", "MERS-EL-KEBIR"],
      },
      { daira: "ARZEW", commune: ["ARZEW", "SIDI-BENYEBKA"] },
      {
        daira: "BETHIOUA",
        commune: ["AIN-EL-BIYA", "BETHIOUA", "MERSAT-EL-HADJADJ"],
      },
      {
        daira: "BIR-EL-DJIR",
        commune: ["BIR-EL-DJIR", "HASSI-BEN-OKBA", "HASSI-BOUNIF"],
      },
      {
        daira: "BOU-TLELIS",
        commune: ["AIN-EL-KARMA", "BOU-TLELIS", "MISSERGHINE"],
      },
      { daira: "ES-SENIA", commune: ["EL-KERMA", "ES-SENIA", "SIDI-CHAMI"] },
      { daira: "GDYEL", commune: ["BEN-FREHA", "GDYEL", "HASSI-MEFSOUKH"] },
      { daira: "ORAN", commune: ["ORAN"] },
      {
        daira: "OUED-TLELAT",
        commune: ["BOUFATIS", "EL-BRAYA", "OUED-TLELAT", "TAFRAOUI"],
      },
    ],
  },
  {
    wilaya: "EL-BAYADH",
    dairas: [
      {
        daira: "BOUALEM",
        commune: [
          "BOUALEM",
          "SIDI-AMEUR",
          "SIDI-SLIMANE",
          "SIDI-TIFOUR",
          "STITTEN",
        ],
      },
      {
        daira: "BOUGTOUB",
        commune: ["BOUGTOUB", "EL-KHEITHER", "KEF-EL-AHMAR", "TOUSMOULINE"],
      },
      { daira: "BOUSSEMGHOUN", commune: ["BOUSSEMGHOUN"] },
      { daira: "BREZINA", commune: ["BREZINA", "GHASSOUL", "KRAAKDA"] },
      { daira: "CHELLALA", commune: ["CHELLALA", "EL-MEHARA"] },
      { daira: "EL-BAYADH", commune: ["EL-BAYADH"] },
      {
        daira: "LABIODH-SIDI-CHEIKH",
        commune: ["AIN-EL-ORAK", "ARBAOUAT", "EL-BNOUD", "LABIODH-SIDI-CHEIKH"],
      },
      { daira: "ROGASSA", commune: ["CHEGUIG", "ROGASSA"] },
    ],
  },
  {
    wilaya: "ILLIZI",
    dairas: [
      { daira: "DJANET", commune: ["BORDJ-EL-HAOUAS", "DJANET"] },
      { daira: "ILLIZI", commune: ["ILLIZI"] },
      {
        daira: "IN-AMENAS",
        commune: ["BORDJ-OMAR-DRISS", "DEB-DEB", "IN-AMENAS"],
      },
    ],
  },
  {
    wilaya: "BORDJ-BOU-ARRERIDJ",
    dairas: [
      { daira: "AIN-TAGHROUT", commune: ["AIN-TAGHROUT", "TIXTER"] },
      {
        daira: "BIR-KASED-ALI",
        commune: ["BIR-KASED-ALI", "KHELIL", "SIDI-EMBAREK"],
      },
      { daira: "BORDJ-BOU-ARRERIDJ", commune: ["BORDJ-BOU-ARRERIDJ"] },
      {
        daira: "BORDJ-GHEDIR",
        commune: [
          "BELIMOUR",
          "BORDJ-GHEDIR",
          "EL-ANCEUR",
          "GHILASSA",
          "TAGLAIT",
        ],
      },
      {
        daira: "BORDJ-ZEMOURA",
        commune: ["BORDJ-ZEMOURA", "OULED-DAHMANE", "TASSAMEURT"],
      },
      { daira: "DJAAFRA", commune: ["COLLA", "DJAAFRA", "EL-MAIN", "TEFREG"] },
      {
        daira: "EL-HAMMADIA",
        commune: ["EL-EUCH", "EL-HAMMADIA", "KSOUR", "RABTA"],
      },
      {
        daira: "MANSOURA",
        commune: [
          "BEN-DAOUED",
          "EL-M'HIR",
          "HARRAZA",
          "MANSOURA",
          "OULED-SIDI-BRAHIM",
        ],
      },
      {
        daira: "MEDJANA",
        commune: ["EL-ACHIR", "HASNAOUA", "MEDJANA", "TENIET-EN-NASR"],
      },
      {
        daira: "RAS-EL-OUED",
        commune: ["AIN-TESRA", "OULED-BRAHIM", "RAS-EL-OUED"],
      },
    ],
  },
  {
    wilaya: "BOUMERDES",
    dairas: [
      { daira: "BAGHLIA", commune: ["BAGHLIA", "SIDI-DAOUD", "TAOURGA"] },
      {
        daira: "BORDJ-MENAIEL",
        commune: ["BORDJ-MENAIEL", "DJINET", "LEGHATA", "ZEMMOURI"],
      },
      {
        daira: "BOUDOUAOU",
        commune: [
          "BOUDOUAOU",
          "BOUDOUAOU-EL-BAHRI",
          "BOUZEGZA-KEDDARA",
          "EL-KHARROUBA",
          "OULED-HEDADJ",
        ],
      },
      { daira: "BOUMERDES", commune: ["BOUMERDES", "CORSO", "TIDJELABINE"] },
      { daira: "DELLYS", commune: ["AFIR", "BEN-CHOUD", "DELLYS"] },
      {
        daira: "ISSER",
        commune: ["CHAABET-EL-AMEUR", "ISSER", "SI-MUSTAPHA", "TIMEZRIT"],
      },
      {
        daira: "KHEMIS-EL-KHECHNA",
        commune: ["HAMMEDI", "KHEMIS-EL-KHECHNA", "LARBATACHE", "OULED-MOUSSA"],
      },
      { daira: "NACIRIA", commune: ["NACIRIA", "OULED-AISSA"] },
      {
        daira: "THENIA",
        commune: ["AMMAL", "BENI-AMRANE", "SOUK-EL-HAD", "THENIA"],
      },
    ],
  },
  {
    wilaya: "EL-TARF",
    dairas: [
      { daira: "BEN-MEHIDI", commune: ["BEN-MEHIDI", "BERRIHANE", "ECHATT"] },
      { daira: "BESBES", commune: ["ASFOUR", "BESBES", "ZERIZER"] },
      {
        daira: "BOUHADJAR",
        commune: ["AIN-KERMA", "BOUHADJAR", "HAMMAM-BENI-SALAH", "OUED-ZITOUN"],
      },
      {
        daira: "BOUTELDJA",
        commune: ["BOUTELDJA", "CHEFIA", "LAC-DES-OISEAUX"],
      },
      { daira: "DREAN", commune: ["CHEBAITA-MOKHTAR", "CHIHANI", "DREAN"] },
      {
        daira: "EL-KALA",
        commune: [
          "EL-AIOUN",
          "EL-KALA",
          'OUM-THEBOUL--"SOUAREKH"',
          "RAML-SOUK",
        ],
      },
      {
        daira: "EL-TARF",
        commune: ["AIN-EL-ASSEL", "BOUGOUS", "EL-TARF", "ZITOUNA"],
      },
    ],
  },
  {
    wilaya: "TINDOUF",
    dairas: [{ daira: "TINDOUF", commune: ["OUM-EL-ASSEL", "TINDOUF"] }],
  },
  {
    wilaya: "TISSEMSILT",
    dairas: [
      { daira: "AMMARI", commune: ["AMMARI", "MAACEM", "SIDI-ABED"] },
      {
        daira: "BORDJ-BOU-NAAMA",
        commune: [
          "BENI-CHAIB",
          "BENI-LAHCENE",
          "BORDJ-BOU-NAAMA",
          "SIDI-SLIMANE",
        ],
      },
      { daira: "BORDJ-EMIR-AEK", commune: ["BORDJ-EMIR-AEK", "YOUSSOUFIA"] },
      { daira: "KHEMISTI", commune: ["KHEMISTI", "LAAYOUNE"] },
      {
        daira: "LARDJEM",
        commune: ["LARDJEM", "MELAAB", "SIDI-LANTRI", "TAMELAHT"],
      },
      { daira: "LAZHARIA", commune: ["BOUCAID", "LARBAA", "LAZHARIA"] },
      {
        daira: "THENIET-EL-HAD",
        commune: ["SIDI-BOUTOUCHENT", "THENIET-EL-HAD"],
      },
      { daira: "TISSEMSILT", commune: ["OULED-BESSEM", "TISSEMSILT"] },
    ],
  },
  {
    wilaya: "EL-OUED",
    dairas: [
      { daira: "BAYADHA", commune: ["BAYADHA"] },
      { daira: "DEBILA", commune: ["DEBILA", "HASSANI-ABDELKRIM"] },
      {
        daira: "DJAMAA",
        commune: ["DJAMAA", "M'RARA", "SIDI-AMRANE", "TENEDLA"],
      },
      {
        daira: "EL-MEGHAIER",
        commune: ["EL-MEGHAIER", "OUM-EL-TIEUR", "SIDI-KHELIL", "STILL"],
      },
      { daira: "EL-OUED", commune: ["EL-OUED", "KOUININE"] },
      { daira: "GUEMAR", commune: ["GUEMAR", "OURMES", "TAGHZOUT"] },
      { daira: "HASSI-KHALIFA", commune: ["HASSI-KHALIFA", "TRIFAOUI"] },
      { daira: "MAGRANE", commune: ["MAGRANE", "SIDI-AOUN"] },
      { daira: "MIH-OUENSA", commune: ["MIH-OUENSA", "OUED-ALLENDA"] },
      { daira: "REGUIBA", commune: ["HAMRAIA", "REGUIBA"] },
      { daira: "ROBBAH", commune: ["EL-OGLA", "NAKHLA", "ROBBAH"] },
      {
        daira: "TALEB-LARBI",
        commune: ["BENI-GUECHA", "DOUAR-EL-MA", "TALEB-LARBI"],
      },
    ],
  },
  {
    wilaya: "KHENCHELA",
    dairas: [
      { daira: "AIN-TOUILA", commune: ["AIN-TOUILA", "M'TOUSSA"] },
      { daira: "BABAR", commune: ["BABAR"] },
      {
        daira: "BOUHMAMA",
        commune: ["BOUHMAMA", "CHELIA", "M'SARA", "YABOUS"],
      },
      {
        daira: "CHECHAR",
        commune: ["CHECHAR", "DJELLAL", "EL-OUELDJA", "KIRANE"],
      },
      {
        daira: "EL-HAMMA",
        commune: ["BAGHAI", "EL-HAMMA", "ENSIGHA", "TAMZA"],
      },
      { daira: "KAIS", commune: ["KAIS", "REMILA", "TAOUZIENT"] },
      { daira: "KHENCHELA", commune: ["KHENCHELA"] },
      { daira: "OULED-RECHACHE", commune: ["EL-MAHMAL", "OULED-RECHACHE"] },
    ],
  },
  {
    wilaya: "SOUK-AHRAS",
    dairas: [
      {
        daira: "BIR-BOU-HAOUCH",
        commune: ["BIR-BOU-HAOUCH", "SAFEL-EL-OUIDEN", "ZOUABI"],
      },
      { daira: "HEDDADA", commune: ["HEDDADA", "KHEDARA", "OULED-MOUMEN"] },
      { daira: "M'DAOUROUCH", commune: ["M'DAOUROUCH", "RAGOUBA", "TIFFECH"] },
      { daira: "MECHROHA", commune: ["HANANCHA", "MECHROHA"] },
      { daira: "MERAHNA", commune: ["MERAHNA", "OUILLEN", "SIDI-FREDJ"] },
      { daira: "OULED-DRISS", commune: ["AIN-ZANA", "OULED-DRISS"] },
      {
        daira: "OUM-EL-ADHAIM",
        commune: ["OUED-KEBERIT", "OUM-EL-ADHAIM", "TERRAGUELT"],
      },
      { daira: "SEDRATA", commune: ["AIN-SOLTANE", "KHEMISSA", "SEDRATA"] },
      { daira: "SOUK-AHRAS", commune: ["SOUK-AHRAS"] },
      { daira: "TAOURA", commune: ["DREA", "TAOURA", "ZAAROURIA"] },
    ],
  },
  {
    wilaya: "TIPAZA",
    dairas: [
      {
        daira: "AHMER-EL-AIN",
        commune: ["AHMER-EL-AIN", "BOURKIKA", "SIDI-RACHED"],
      },
      {
        daira: "BOU-ISMAIL",
        commune: ["AIN-TAGOURAIT", "BOU-HAROUN", "BOU-ISMAIL", "KHEMISTI"],
      },
      {
        daira: "CHERCHELL",
        commune: ["CHERCHELL", "HADJRAT-ENNOUS", "SIDI-GHILES", "SIDI-SEMIANE"],
      },
      { daira: "DAMOUS", commune: ["BENI-MILLEUK", "DAMOUS", "LARHAT"] },
      { daira: "FOUKA", commune: ["DOUAOUDA", "FOUKA"] },
      { daira: "GOURAYA", commune: ["AGHBAL", "GOURAYA", "MESSELMOUN"] },
      { daira: "HADJOUT", commune: ["HADJOUT", "MERAD"] },
      { daira: "KOLEA", commune: ["ATTATBA", "CHAIBA", "KOLEA"] },
      { daira: "SIDI-AMAR", commune: ["MENACEUR", "NADOR", "SIDI-AMAR"] },
      { daira: "TIPAZA", commune: ["TIPAZA"] },
    ],
  },
  {
    wilaya: "MILA",
    dairas: [
      {
        daira: "AIN-BEIDA-HARRICHE",
        commune: ["AIN-BEIDA-HARRICHE", "EL-AYADI-BARBES"],
      },
      { daira: "BOUHATEM", commune: ["BOUHATEM", "DERRADJI-BOUSSELAH"] },
      {
        daira: "CHELGHOUM-LAID",
        commune: ["AIN-MELLOUK", "CHELGHOUM-LAID", "OUED-ATHMANIA"],
      },
      { daira: "FERDJIOUA", commune: ["FERDJIOUA", "YAHIA-BENI-GUECHA"] },
      { daira: "GRAREM-GOUGA", commune: ["GRAREM-GOUGA", "HAMALA"] },
      { daira: "MILA", commune: ["AIN-TINN", "MILA", "SIDI-KHELIFA"] },
      {
        daira: "OUED-ENDJA",
        commune: ["AHMED-RACHEDI", "OUED-ENDJA", "ZEGHAIA"],
      },
      { daira: "ROUACHED", commune: ["ROUACHED", "TIBERGUENT"] },
      { daira: "SIDI-MEROUANE", commune: ["CHIGARA", "SIDI-MEROUANE"] },
      {
        daira: "TADJENANET",
        commune: ["BENYAHIA-ABDERRAHMANE", "OULED-KHELLOUF", "TADJENANET"],
      },
      {
        daira: "TASSADANE-HADDADA",
        commune: ["MINAR-ZARZA", "TASSADANE-HADDADA"],
      },
      { daira: "TELEGHMA", commune: ["EL-MECHIRA", "OUED-SEGUEN", "TELEGHMA"] },
      {
        daira: "TERRAI-BAINEN",
        commune: ["AMIRA-ARRES", "TERRAI-BAINEN", "TESSALA-LEMTAI"],
      },
    ],
  },
  {
    wilaya: "AIN-DEFLA",
    dairas: [
      { daira: "AIN-DEFLA", commune: ["AIN-DEFLA"] },
      {
        daira: "AIN-LECHIEKH",
        commune: ["AIN-LECHIEKH", "AIN-SOLTANE", "OUED-DJEMAA"],
      },
      { daira: "BATHIA", commune: ["BATHIA", "BELLAS", "EL-HASSANIA"] },
      {
        daira: "BORDJ-EMIR-KHALED",
        commune: ["BIR-OULED-KHELIFA", "BORDJ-EMIR-KHALED", "TARIK-IBN-ZIAD"],
      },
      { daira: "BOU-MEDFAA", commune: ["BOU-MEDFAA", "HOCEINIA"] },
      {
        daira: "DJELIDA",
        commune: ["BOURACHED", "DJELIDA", "DJEMAA-OULED-CHEIKH"],
      },
      { daira: "DJENDEL", commune: ["BIRBOUCHE", "DJENDEL", "OUED-CHORFA"] },
      {
        daira: "EL-ABADIA",
        commune: ["AIN-BOUYAHIA", "EL-ABADIA", "TACHETA-ZOUGAGHA"],
      },
      { daira: "EL-AMRA", commune: ["ARIB", "EL-AMRA", "MEKHATRIA"] },
      { daira: "EL-ATTAF", commune: ["EL-ATTAF", "TIBERKANINE"] },
      {
        daira: "HAMMAM-RIGHA",
        commune: ["AIN-BENIAN", "AIN-TORKI", "HAMMAM-RIGHA"],
      },
      { daira: "KHEMIS-MILIANA", commune: ["KHEMIS-MILIANA", "SIDI-LAKHDAR"] },
      { daira: "MILIANA", commune: ["BEN-ALLAL", "MILIANA"] },
      { daira: "ROUINA", commune: ["EL-MAINE", "ROUINA", "ZEDDINE"] },
    ],
  },
  {
    wilaya: "NAAMA",
    dairas: [
      { daira: "AIN-SEFRA", commune: ["AIN-SEFRA", "TIOUT"] },
      { daira: "ASLA", commune: ["ASLA"] },
      { daira: "MECHRIA", commune: ["AIN-BEN-KHELIL", "EL-BIODH", "MECHRIA"] },
      { daira: "MEKMEN-BEN-AMAR", commune: ["KASDIR", "MEKMEN-BEN-AMAR"] },
      { daira: "MOGHRAR", commune: ["DJENIEN-BOUREZG", "MOGHRAR"] },
      { daira: "NAAMA", commune: ["NAAMA"] },
      { daira: "SFISSIFA", commune: ["SFISSIFA"] },
    ],
  },
  {
    wilaya: "AIN-TEMOUCHENT",
    dairas: [
      {
        daira: "AIN-KIHAL",
        commune: ["AGHLAL", "AIN-KIHAL", "AIN-TOLBA", "AOUBELLIL"],
      },
      { daira: "AIN-LARBAA", commune: [] },
      { daira: "AIN-TEMOUCHENT", commune: ["AIN-TEMOUCHENT", "SIDI-BEN-ADDA"] },
      {
        daira: "BENI-SAF",
        commune: ["BENI-SAF", "EL-EMIR-ABDELKADER", "SIDI-SAFI"],
      },
      {
        daira: "EL-AMRIA",
        commune: [
          "BOUZEDJAR",
          "EL-AMRIA",
          "EL-MESSAID",
          "HASSI-EL-GHELLA",
          "OULED-BOUDJEMAA",
        ],
      },
      {
        daira: "EL-MALAH",
        commune: ["CHAABAT-EL-LEHAM", "EL-MALAH", "OULED-KIHAL", "TERGA"],
      },
      {
        daira: "HAMMAM-BOUHDJAR",
        commune: [
          "CHENTOUF",
          "HAMMAM-BOUHDJAR",
          "HASSASNA",
          "OUED-BERKECHE",
          "OUED-SABAH",
          "SIDI-BOUMEDIENE",
        ],
      },
      {
        daira: "SOUK-EL-TENINE-OU-OULHACA-EL-GHERABA",
        commune: ["SIDI-OURIACHE", "SOUK-EL-TENINE-OU-OULHACA-EL-GHERABA"],
      },
    ],
  },
  {
    wilaya: "GHARDAIA",
    dairas: [
      { daira: "BERRIANE", commune: ["BERRIANE"] },
      { daira: "BOUNOURA", commune: ["BOUNOURA", "EL-ATTEUF"] },
      { daira: "DAYA-BEN-DAHOUA", commune: ["DAYA-BEN-DAHOUA"] },
      { daira: "EL-GUERRARA", commune: ["EL-GUERRARA"] },
      { daira: "EL-MENIA", commune: ["EL-MENIA", "HASSI-EL-GARA"] },
      { daira: "GHARDAIA", commune: ["GHARDAIA"] },
      { daira: "MANSOURAH", commune: ["HASSI-EL-F'HEL", "MANSOURAH"] },
      { daira: "METLILI", commune: ["METLILI", "SEB-SEB"] },
      { daira: "ZELFANA", commune: ["ZELFANA"] },
    ],
  },
  {
    wilaya: "RELIZANE",
    dairas: [
      { daira: "AIN-TAREK", commune: ["AIN-TAREK", "HAD-ECHEKALLA"] },
      {
        daira: "AMMI-MOUSSA",
        commune: ["AMMI-MOUSSA", "EL-HASSI", "EL-OULDJA", "OULED-AICHE"],
      },
      {
        daira: "DJIDIOUA",
        commune: ["DJIDIOUA", "HAMRI", "OULED-SIDI-MIHOUB"],
      },
      { daira: "EL-HAMADNA", commune: ["EL-HAMADNA", "OUED-EL-DJEMAA"] },
      {
        daira: "EL-MATMAR",
        commune: [
          "BELASSEL-BOUZEGZA",
          "EL-MATMAR",
          "SIDI-KHETTAB",
          "SIDI-M'HAMED-BEN-AOUDA",
        ],
      },
      { daira: "MAZOUNA", commune: ["EL-GUETTAR", "MAZOUNA"] },
      { daira: "MENDES", commune: ["MENDES", "OUED-ESSALEM", "SIDI-LAZREG"] },
      {
        daira: "OUED-RHIOU",
        commune: ["LAHLEF", "MERDJA-SIDI-ABED", "OUARIZANE", "OUED-RHIOU"],
      },
      { daira: "RAMKA", commune: ["RAMKA", "SOUK-EL-HAD"] },
      { daira: "RELIZANE", commune: ["BENDAOUD", "RELIZANE"] },
      {
        daira: "SIDI-M'HAMED-BEN-ALI",
        commune: ["BENI-ZENTIS", "MEDIOUNA", "SIDI-M'HAMED-BEN-ALI"],
      },
      {
        daira: "YELLEL",
        commune: ["AIN-RAHMA", "KALAA", "SIDI-SAADA", "YELLEL"],
      },
      {
        daira: "ZEMMORA",
        commune: ["BENI-DERGOUN", "DAR-BEN-ABDELLAH", "ZEMMORA"],
      },
    ],
  },
];

module.exports = wilayas;
