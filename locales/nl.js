const myAge = () => {
  const birthday = new Date(1991, 1, 26);
  const ageDifMs = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

module.exports = {
  links: {
    home: 'Home',
    services: 'Diensten',
    work: 'Portfolio',
    about: 'Over mij',
    contact: 'Contact'
  },
  home: {
    title: 'Home',
    introduction: `<strong>Interaction designer</strong> en <strong>front-end developer</strong>, droomt in HTML, CSS en Javascript, woont in Gent. Helpt ondernemers bij het bouwen van digitale oplossingen.`
  },
  services: {
    title: 'Diensten',
    introduction: `Als freelancer met een combinatie van grafische en technische kennis kan ik de ontwikkeling van een project opvolgen van wireframes, over interactieve prototypes tot samenwerking met developers. Mijn ervaring met zowel kleine start-ups als gevestigde bedrijven leerde me voor elk project het meest tijds- en kostenefficiënte designproces uit te stippelen.`,
    web: {
      title: 'Web App Design',
      description: `Goed design is erg bepalend voor de kwaliteit van een webapp. Of het nu om het ontwerpen van een nieuw product gaat of om het opfrissen van een bestaande applicatie, ik help graag om uw project te laten uitblinken in gebruiksgemak.`
    },
    mobile: {
      title: 'Mobile Design',
      description: `De kleine en vaak snelle interacties op mobiele apparaten brengen een heel aantal specifieke uitdagingen met zich mee op designvlak. Ik help u bij het ontwikkelen van een ontwerp op maat en lever op basis van de technische set-up (iOS, Android, React Native, webtechnologie) gebruiksklare resultaten op.`
    },
    prototyping: {
      title: 'Prototyping',
      description: `De details in een ontwerp zijn vaak niet helemaal te vatten in een statische afbeelding. Daarom lever ik ook interactieve prototypes die zowel gebruikt kunnen worden bij gebruikerstesten als bij de vertaling van ontwerp naar implementatie.`
    },
    frontend: {
      title: 'Front-end Development',
      description: `Browsertechnologie evolueert steeds sneller. Dat biedt meer mogelijkheden, maar vraagt ook een gespecialiseerde aanpak. Ik vertaal de ontwerpen die ik maak naar HTML, CSS en Javascript van productieniveau. Het resultaat is een responsief, modern en schaalbaar designsysteem dat compatibel is met alle moderne browsers.`
    },
    animation: {
      title: 'Animatie',
      description: `Goed getimede en functionele animaties kunnen uw applicaties niet enkel opvrolijken, maar komen vaak ook de gebruiksvriendelijkheid en gepercipieerde snelheid ten goede. Samen met u bekijk ik hoe animaties een bestaand of nieuw product kunnen verbeteren.`
    },
    consultancy: {
      title: 'Consultancy',
      description: `Ik stel mijn expertise graag ter beschikking aan uw team. Een audit van uw designarchitectuur of een workshop over moderne webtechnologieën zijn maar enkele van de mogelijkheden. U kan me vrijblijvend contacteren voor meer info.`
    }
  },
  work: {
    title: 'Portfolio',
    introduction: `Enkele bedrijven waar ik mee samenwerkte...`
  },
  about: {
    title: 'Over mij',
    introduction: `Hey, ik ben Simon, ${myAge()} jaar en Antwerpenaar in Gent.`,
    description: `<p>Nadat ik afstudeerde als master in de communicatiewetenschappen besloot ik mij voltijds toe te leggen op digital design. Eind 2013 startte ik als Interaction Designer bij <a href="http://www.yesplan.be/">Yesplan</a>, een Gentse softwarestart-up.</p><p>In 2016 werkte ik als freelancer voor <a href="http://www.mediahuis.be/">Mediahuis</a>, één van België's grootste mediabedrijven. Later dat jaar ging ik aan de slag bij <a href="http://mono.company">Mono Company</a>, een groep digital designers met een gedeelde liefde voor technologie en goed design. Sinds 2018 focus ik me weer op verschillende kleinere freelanceprojecten.</p><p>Naast ontwerpen hou ik van piano spelen, de longen uit mijn lijf lopen of een filmpje meepikken in één van de prachtige bioscopen van Gent. Ik hou enorm van koffie, dus waarom drinken we er niet eens een samen?</p>`
  },
  contact: {
    title: 'Contact',
    introduction: `Denk je dat we samen iets fantastisch kunnen maken?`,
    cta: `Laat het me weten!`
  }
};
