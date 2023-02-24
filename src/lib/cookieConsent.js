import axios from "axios";

export function setCookieConsent() {
  const params = new URLSearchParams(document.location.search.substring(1))
  let getRefParam = params.get('ref')
  let cookies = document.cookie
  let editedPath = document.location.pathname.replaceAll('/', '_')

  if (getRefParam && !cookies.includes('_signup_ref')) {
    axios.get(`/starta-webbutik?ref=${getRefParam}&from=${editedPath}`)
  }

  var qb_cookieconsent_blocks_sv = [
      {
        title: 'Quickbutik använder cookies',
        description:
          'När du besöker en webbplats kan den lagra och hämta information från din webbläsare i form av cookies. Mestadels används dessa för att förbättra prestandan och upplevelsen för dig som besöker sidan på ett bra sätt. Du kan alltid välja att inte tillåta en viss typ av cookies. Men att blockera vissa typer av cookies kan påverka upplevelsen av ditt besök på vår webbplats.',
      },
      {
        title: 'Nödvändiga cookies *',
        description:
          'Dessa cookies är nödvändiga för att butiken ska fungera korrekt och går inte att stänga av utan att behöva lämna denna webbplats. De används för att funktionalitet som t.ex. varukorg, skapa ett konto och annat ska fungera korrekt.',
        toggle: {
          value: 'basic',
          enabled: true,
          readonly: true,
        },
      },
    ],
    qb_cookieconsent_blocks_sv = qb_cookieconsent_blocks_sv.concat({
      title: 'Statistik och prestanda',
      description:
        'Dessa cookies gör att vi kan räkna besök och trafik och därmed ta reda på saker som vilka sidor som är mest populära och hur besökarna rör sig på vår webbplats. All information som samlas in genom dessa cookies är sammanställd, vilket innebär att den är anonym. Om du inte tillåter dessa cookies kan vi inte ge dig en lika skräddarsydd upplevelse.',
      toggle: {
        value: 'analytics',
        enabled: true,
      },
      cookie_table: [
        {
          col1: '_ga',
          col2: 'google.com',
          col3: '2 years',
          col4: 'Google Analytics',
        },
        {
          col1: '_gat',
          col2: 'google.com',
          col3: '1 minute',
          col4: 'Google Analytics',
        },
        {
          col1: '_gid',
          col2: 'google.com',
          col3: '1 day',
          col4: 'Google Analytics',
        },
      ],
    })

  qb_cookieconsent_blocks_sv = qb_cookieconsent_blocks_sv.concat({
    title: 'Marknadsföring',
    description:
      'Dessa cookies ställs in via vår webbplats av våra annonseringspartner för att skapa en profil för dina intressen och visa relevanta annonser på andra webbplatser. De lagrar inte direkt personlig information men kan identifiera din webbläsare och internetenhet. Om du inte tillåter dessa cookies kommer du att uppleva mindre riktad reklam.',
    toggle: {
      value: 'marketing',
      enabled: true,
      readonly: false,
    },
  })

  var qb_cookieconsent_blocks_da = [
      {
        title: 'Quickbutik bruger cookies',
        description:
          'Når du besøger en hjemmeside kan den gemme og hente information fra din webbrowser i form af cookies. Størstedelen anvendes for at forbedre egenskaber og oplevelsen for dig som besøger på siden på bedste vis. Du kan altid vælge at afvise en bestemt type af cookie. Men at blokere visse typer af cookies kan påvirke oplevelsen af dit besøg på vores hjemmeside.',
      },
      {
        title: 'Påkrævede cookies *',
        description:
          'Disse cookies er nødvendige for at butikken kan fungere korrekt og kan ikke slukkes uden at skulle forlade denne hjemmeside. De bruges til funktionalitet som f.eks indkøbskurv, oprette en konto og andre ting skulle fungere korrekt.',
        toggle: {
          value: 'basic',
          enabled: true,
          readonly: true,
        },
      },
    ],
    qb_cookieconsent_blocks_da = qb_cookieconsent_blocks_da.concat({
      title: 'Statistik og ydeevne',
      description:
        'Disse cookies giver os mulighed for at tælle besøg og trafik og dermed finde ud af ting såsom hvilke sider der er mest populære, og hvordan besøgende bevæger sig på vores hjemmeside. Al information indsamlet gennem disse cookies er kompileret, hvilket betyder, at den er anonym. Hvis du ikke tillader disse cookies, kan vi ikke give dig en lige så skræddersyet oplevelse.',
      toggle: {
        value: 'analytics',
        enabled: true,
      },
      cookie_table: [
        {
          col1: '_ga',
          col2: 'google.com',
          col3: '2 years',
          col4: 'Google Analytics',
        },
        {
          col1: '_gat',
          col2: 'google.com',
          col3: '1 minute',
          col4: 'Google Analytics',
        },
        {
          col1: '_gid',
          col2: 'google.com',
          col3: '1 day',
          col4: 'Google Analytics',
        },
      ],
    })

  qb_cookieconsent_blocks_da = qb_cookieconsent_blocks_da.concat({
    title: 'Marketing',
    description:
      'Disse cookies sættes via vores hjemmeside af vores reklamepartnere for at oprette en profil til dine interesser og vise relevante annoncer på andre hjemmesider. De gemmer ikke direkte personlige oplysninger, men kan identificere din browser og internetenhed. Hvis du ikke tillader disse cookies, vil du opleve mindre målrettet annoncering.',
    toggle: {
      value: 'marketing',
      enabled: true,
      readonly: false,
    },
  })

  var qb_cookieconsent_blocks_no = [
      {
        title: 'Quickbutik bruker informasjonskapsler',
        description:
          'Vi bruker informasjonskapsler. Ved å fortsette på siden godtar du bruken av informasjonskapsler.',
      },
      {
        title: 'Påkrevde informasjonskapsler *',
        description:
          'Disse informasjonskapslene er nødvendige for at butikken skal fungere ordentlig og kan ikke slås av uten å måtte forlate denne nettsiden. De brukes til funksjonalitet som f.eks handlekurv, opprette en konto og andre ting skal fungere som det skal.',
        toggle: {
          value: 'basic',
          enabled: true,
          readonly: true,
        },
      },
    ],
    qb_cookieconsent_blocks_no = qb_cookieconsent_blocks_no.concat({
      title: 'Statistikk og ytelse',
      description:
        'Disse informasjonskapslene lar oss telle besøk og trafikk og dermed finne ut ting som hvilke sider som er mest populære og hvordan besøkende beveger seg på nettsiden vår. All informasjon som samles inn gjennom disse informasjonskapslene er samlet, noe som betyr at den er anonym. Hvis du ikke tillater disse informasjonskapslene, kan vi ikke gi deg en like skreddersydd opplevelse.',
      toggle: {
        value: 'analytics',
        enabled: true,
      },
      cookie_table: [
        {
          col1: '_ga',
          col2: 'google.com',
          col3: '2 years',
          col4: 'Google Analytics',
        },
        {
          col1: '_gat',
          col2: 'google.com',
          col3: '1 minute',
          col4: 'Google Analytics',
        },
        {
          col1: '_gid',
          col2: 'google.com',
          col3: '1 day',
          col4: 'Google Analytics',
        },
      ],
    })

  qb_cookieconsent_blocks_no = qb_cookieconsent_blocks_no.concat({
    title: 'Markedsføring',
    description:
      'Disse informasjonskapslene settes via nettstedet vårt av våre annonsepartnere for å opprette en profil for dine interesser og vise relevante annonser på andre nettsteder. De lagrer ikke personlig informasjon direkte, men kan identifisere nettleseren din og Internett-enheten din. Hvis du ikke tillater disse informasjonskapslene, vil du oppleve mindre målrettet annonsering.',
    toggle: {
      value: 'marketing',
      enabled: true,
      readonly: false,
    },
  })

  var qb_cookieconsent_blocks_en = [
      {
        title: 'Quickbutik uses cookies',
        description:
          'We use cookies. By continuing on the site, you agree to the use of cookies.',
      },
      {
        title: 'Required cookies *',
        description:
          'These cookies are necessary for the store to function properly and can not be turned off without having to leave this website. They are used for functionality such as shopping cart, create an account and other things should work correctly.',
        toggle: {
          value: 'basic',
          enabled: true,
          readonly: true,
        },
      },
    ],
    qb_cookieconsent_blocks_en = qb_cookieconsent_blocks_en.concat({
      title: 'Statistics and performance',
      description:
        'These cookies allow us to count visits and traffic and thus find out things such as which pages are most popular and how visitors move on our website. All information collected through these cookies is compiled, which means that it is anonymous. If you do not allow these cookies, we can not give you an equally tailored experience.',
      toggle: {
        value: 'analytics',
        enabled: true,
      },
      cookie_table: [
        {
          col1: '_ga',
          col2: 'google.com',
          col3: '2 years',
          col4: 'Google Analytics',
        },
        {
          col1: '_gat',
          col2: 'google.com',
          col3: '1 minute',
          col4: 'Google Analytics',
        },
        {
          col1: '_gid',
          col2: 'google.com',
          col3: '1 day',
          col4: 'Google Analytics',
        },
      ],
    })

  qb_cookieconsent_blocks_en = qb_cookieconsent_blocks_en.concat({
    title: 'Marketing',
    description:
      'These cookies are set via our website by our advertising partners to create a profile for your interests and display relevant ads on other websites. They do not directly store personal information but can identify your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising.',
    toggle: {
      value: 'marketing',
      enabled: true,
      readonly: false,
    },
  })

  let cookieConsent = window && window.initCookieConsent()
  const currentLanguage = window.location.pathname.split('/')[1]
  cookieConsent.run({
    page_scripts: true,
    onAccept: function (cookie) {
      if (cookie.level.includes('analytics') && window.dataLayer) {
        function pushToDL() {
          window.dataLayer.push(arguments)
        }

        pushToDL('consent', 'update', {
          ad_storage: 'granted',
          analytics_storage: 'granted',
        })
      }
    },
    current_lang: currentLanguage,
    languages: {
      sv: {
        consent_modal: {
          title: 'Lite om våra cookies.',
          description:
            'Vi använder cookies för att anpassa och förbättra upplevelsen för dig när du besöker vår sida. Vissa cookies behövs för att sidan ska fungera korrekt, medan andra är valbara för dig. <a href="https://quickbutik.com/sv/cookies">Läs mer</a>',
          primary_btn: {
            text: 'Godkänn alla',
            role: 'accept_all',
          },
          secondary_btn: {
            text: 'Inställningar',
            role: 'settings',
          },
        },
        settings_modal: {
          title: 'Cookie inställningar',
          save_settings_btn: 'Spara',
          accept_all_btn: 'Godkänn alla',
          cookie_table_headers: [
            {col1: 'Name'},
            {col2: 'Domain'},
            {col3: 'Expiration'},
            {col4: 'Description'},
          ],
          blocks: qb_cookieconsent_blocks_sv,
        },
      },
      no: {
        consent_modal: {
          title: 'Vi bruker informasjonskapsler',
          description:
            'Ved å fortsette på siden godtar du bruken av informasjonskapsler. <a href="https://quickbutik.com/no/cookies">Les mer</a>',
          primary_btn: {
            text: 'Aksepter alt',
            role: 'accept_all',
          },
          secondary_btn: {
            text: 'Innstillinger',
            role: 'settings',
          },
        },
        settings_modal: {
          title: 'Cookie-innstillinger',
          save_settings_btn: 'Lagre',
          accept_all_btn: 'Aksepter alt',
          cookie_table_headers: [
            {col1: 'Name'},
            {col2: 'Domain'},
            {col3: 'Expiration'},
            {col4: 'Description'},
          ],
          blocks: qb_cookieconsent_blocks_no,
        },
      },
      en: {
        consent_modal: {
          title: 'We use cookies',
          description:
            'By continuing on the site, you agree to the use of cookies. <a href="https://quickbutik.com/sv/cookies">Read more</a>',
          primary_btn: {
            text: 'Accept all',
            role: 'accept_all',
          },
          secondary_btn: {
            text: 'Settings',
            role: 'settings',
          },
        },
        settings_modal: {
          title: 'Cookie settings',
          save_settings_btn: 'Save',
          accept_all_btn: 'Accept all',
          cookie_table_headers: [
            {col1: 'Name'},
            {col2: 'Domain'},
            {col3: 'Expiration'},
            {col4: 'Description'},
          ],
          blocks: qb_cookieconsent_blocks_en,
        },
      },
      da: {
        consent_modal: {
          title: 'Lidt info om vores cookies.',
          description:
            'Vi anvender cookies for at tilpasse og forbedre oplevelsen for dig når du besøger vores hjemmeside. Visse cookies behøver vi for at siden skal fungere korrekt, mens andre er valgfrie for dig. <a href="https://quickbutik.com/da/cookies">Læs mere</a>',
          primary_btn: {
            text: 'Accepter alle',
            role: 'accept_all',
          },
          secondary_btn: {
            text: 'Indstillinger',
            role: 'settings',
          },
        },
        settings_modal: {
          title: 'Cookie-indstillinger',
          save_settings_btn: 'Gemme',
          accept_all_btn: 'Accepter alle',
          cookie_table_headers: [
            {col1: 'Name'},
            {col2: 'Domain'},
            {col3: 'Expiration'},
            {col4: 'Description'},
          ],
          blocks: qb_cookieconsent_blocks_da,
        },
      },
    },
    gui_options: {
      consent_modal: {
        layout: 'box', // box/cloud/bar
        position: 'bottom right', // bottom/top + left/right/center
        transition: 'slide', // zoom/slide
      },
      settings_modal: {
        layout: 'box', // box/bar
        // position : 'left',           // left/right
        transition: 'slide', // zoom/slide
      },
    },
  })
}
