import React from 'react'
import { Heading, Text } from 'theme-ui'

export default function ResellerInfo() {
  return (
    <div>
      <Heading as="h2">Varför anlita en Reseller Partner?</Heading>
      <Text>
        Vi säkerställer både på företags- och kompetensnivå att återförsäljaren
        du kommer i kontakt med är på en hög nivå, så att du som företagare kan
        känna dig trygg i att de hjälper dig med din Quickbutik.
      </Text>
      <Heading as="h3" pt={4}>
        Detta har säkerställts:
      </Heading>
      <ul>
        <li>- Företaget är ett 🇸🇪 svenskt bolag.</li>
        <li>- Företaget är en aktiv verksamhet.</li>
        <li>- Företaget har funnits i längre än 1 år.</li>
        <li>- Företagets kontaktuppgifter har bekräftats.</li>
        <li>- Företaget svarar inom 48 timmar (vardagar).</li>
        <li>- Företaget har tidigare hjälpt andra företag med Quickbutik.</li>
        <li>- Företaget har kompetens inom Quickbutik.</li>
      </ul>
      <Heading as="h3" pt={4}>
        Hur väljer jag rätt partner och hur tar jag kontakt?
      </Heading>
      <Text>
        Vi rekommenderar att ni fyller i er stad och tittar på förslagen av
        återförsäljare som presenteras. Av dessa kan ni sedan klicka er in på
        deras hemsida och initiera kontakt för att få hjälp med din e-handel.
        Alla våra återförsäljare prioriterar kommunikation och lämnar alltid
        offert innan ett arbete påbörjas.
      </Text>
    </div>
  )
}
