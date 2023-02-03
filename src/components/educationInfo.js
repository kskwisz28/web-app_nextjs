import React from 'react'
import { Heading, Text } from 'theme-ui'

export default function EducationInfo() {
  return (
    <div>

      <Heading as="h2" variant="text.h3">En översikt för dig som vill driva ett framgångsrikt e-handelsföretag, eller arbeta i ett.</Heading>
      <Text as="p">
        Oavsett dina ambitioner som student, så är det viktigt med en grundläggande förståelse av det viktigaste. E-handel består av flera delar och det är framförallt försäljning, marknadsföring och affärsutveckling som du vill bli vass på.
      </Text>
      <Text as="p" pt={4}>
        Därför har vi på Quickbutik tagit fram en översikt av svenska skolor, utbildningar och kurser, som vi har utvärderat och bedömt ha en tillräckligt bra kursplan för att hjälpa dig att lära dig e-handel - på riktigt.
      </Text>
      <Heading as="h3" pt={4}>
        Kursplanen ska innehålla e-handel, inte teknik.
      </Heading>
      <Text as="p">
        Länge har e-handelsutbildningar även haft moment för den tekniska biten; installationer, uppsättningar och hanterandet av tråkiga "meta-taggar" för sökmotoroptimering. Därför har ett krav från oss i våra samarbeten med skolor, och för att listas i översikten ovan, varit att kursplanen innehåller allt det viktiga om e-handel, så som marknadsföring, varumärke och affärsutveckling - och mindre av allt annat.
      </Text>
      <Heading as="h3" pt={4}>
        Lyckas bättre när Quickbutik ingår i utbildningen.
      </Heading>
      <Text as="p">
        Att bli bra på e-handel kräver fokus på den del som genererar försäljning. Därför rekommenderar vi alltid utbildningar där en allt-i-ett plattform ingår, så att du slipper lära dig om teknik, drift och plug-ins - och istället får arbeta mer med marknadsföring, varumärke och digital affärsutveckling.
      </Text>
      <Heading as="h3" pt={4}>
        Går du en utbildning som inte står med här än?
      </Heading>
      <Text as="p">
        Skriv en rad till oss på <a href="mailto:education@quickbutik.com">education@quickbutik.com</a> och tipsa oss, så tar vi kontakt med utbildaren och ser om vi kan erbjuda Quickbutik till samtliga studenter i skolan eller kursen som du går på.
      </Text>
      
    </div>
  )
}
