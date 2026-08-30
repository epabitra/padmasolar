// Central content for Padma Solar Services.
// Every user-facing string is bilingual: { en, od }.  Use tt() / t() from ../i18n to render.
// All contact details are PLACEHOLDERS - replace before going live.

export const company = {
  name: 'Padma Solar Services',
  nameOd: 'ପଦ୍ମ ସୋଲାର ସର୍ଭିସେସ',
  tagline: {
    en: 'Powering Odisha with Clean, Affordable Solar Energy',
    od: 'ସ୍ୱଚ୍ଛ ଓ ସୁଲଭ ସୌର ଶକ୍ତିରେ ଓଡ଼ିଶାକୁ ଆଲୋକିତ କରୁଛି'
  },
  registration: {
    en: 'MNRE-registered Solar Channel Partner',
    od: 'MNRE-ପଞ୍ଜୀକୃତ ସୌର ଚ୍ୟାନେଲ ପାର୍ଟନର'
  },
  established: 2013,
  phonePrimary: '+91 00000 00000',
  phoneSecondary: '+91 00000 00001',
  email: 'info@padmasolar.example',
  address: {
    en: ['Plot No. 000, Main Road', 'Berhampur, Ganjam', 'Odisha - 760001'],
    od: ['ପ୍ଲଟ ନଂ. ୦୦୦, ମେନ ରୋଡ', 'ବ୍ରହ୍ମପୁର, ଗଞ୍ଜାମ', 'ଓଡ଼ିଶା - ୭୬୦୦୦୧']
  },
  hours: {
    en: 'Mon - Sat: 9:00 AM - 6:00 PM | Sunday: Closed',
    od: 'ସୋମ - ଶନି: ସକାଳ ୯ଟା - ସନ୍ଧ୍ୟା ୬ଟା | ରବିବାର: ବନ୍ଦ'
  },
  helpline: '1800-000-0000',
  social: { facebook: '#', twitter: '#', youtube: '#', instagram: '#' }
}

export const nav = [
  { to: '/', label: { en: 'Home', od: 'ମୂଳପୃଷ୍ଠା' } },
  { to: '/about', label: { en: 'About Us', od: 'ଆମ ବିଷୟରେ' } },
  { to: '/services', label: { en: 'Services', od: 'ସେବା' } },
  { to: '/projects', label: { en: 'Projects', od: 'ପ୍ରକଳ୍ପ' } },
  { to: '/faqs', label: { en: 'FAQs', od: 'ସାଧାରଣ ପ୍ରଶ୍ନ' } },
  { to: '/contact', label: { en: 'Contact Us', od: 'ଯୋଗାଯୋଗ' } }
]

// Shared interface strings (buttons, labels, small bits of chrome).
export const ui = {
  skip: { en: 'Skip to main content', od: 'ମୁଖ୍ୟ ବିଷୟବସ୍ତୁକୁ ଯାଆନ୍ତୁ' },
  helpline: { en: 'Helpline', od: 'ହେଲ୍ପଲାଇନ' },
  decreaseText: { en: 'Decrease text size', od: 'ଅକ୍ଷର ଆକାର କମାନ୍ତୁ' },
  resetText: { en: 'Reset text size', od: 'ଅକ୍ଷର ଆକାର ପୁନଃସେଟ କରନ୍ତୁ' },
  increaseText: { en: 'Increase text size', od: 'ଅକ୍ଷର ଆକାର ବଢ଼ାନ୍ତୁ' },
  highContrast: { en: 'High contrast', od: 'ଉଚ୍ଚ କଣ୍ଟ୍ରାଷ୍ଟ' },
  switchLanguage: { en: 'Switch language', od: 'ଭାଷା ବଦଳାନ୍ତୁ' },
  menu: { en: 'Menu', od: 'ମେନୁ' },
  home: { en: 'Home', od: 'ମୂଳପୃଷ୍ଠା' },
  applyForSubsidy: { en: 'Apply for Subsidy', od: 'ସବସିଡି ପାଇଁ ଆବେଦନ କରନ୍ତୁ' },
  checkEligibility: { en: 'Check my eligibility', od: 'ମୋର ଯୋଗ୍ୟତା ଯାଞ୍ଚ କରନ୍ତୁ' },
  moreAboutUs: { en: 'More about us', od: 'ଆମ ବିଷୟରେ ଅଧିକ' },
  seeAllFaqs: { en: 'See all FAQs', od: 'ସମସ୍ତ ପ୍ରଶ୍ନ ଦେଖନ୍ତୁ' },
  requestQuote: { en: 'Request a quote', od: 'ମୂଲ୍ୟ ଉଦ୍ଧୃତି ମାଗନ୍ତୁ' },
  talkToTeam: { en: 'Talk to our team', od: 'ଆମ ଦଳ ସହ କଥା ହୁଅନ୍ତୁ' },
  bookFreeSurvey: { en: 'Book a Free Survey', od: 'ମାଗଣା ସର୍ଭେ ବୁକ୍ କରନ୍ତୁ' },
  ctaHeading: { en: 'Ready to switch to solar?', od: 'ସୌର ଶକ୍ତିକୁ ବଦଳିବାକୁ ପ୍ରସ୍ତୁତ?' },
  ctaText: {
    en: 'Book a free site survey. Our engineer will assess your roof, estimate your savings, and explain exactly how much subsidy you qualify for.',
    od: 'ଏକ ମାଗଣା ସ୍ଥାନ ସର୍ଭେ ବୁକ୍ କରନ୍ତୁ। ଆମ ଇଞ୍ଜିନିୟର ଆପଣଙ୍କ ଛାତ ଯାଞ୍ଚ କରିବେ, ସଞ୍ଚୟ ଆକଳନ କରିବେ ଏବଂ ଆପଣ କେତେ ସବସିଡି ପାଇବେ ତାହା ବୁଝାଇବେ।'
  },
  pages: { en: 'Pages', od: 'ପୃଷ୍ଠାସମୂହ' },
  govtLinks: { en: 'Government Links', od: 'ସରକାରୀ ଲିଙ୍କ' },
  contact: { en: 'Contact', od: 'ଯୋଗାଯୋଗ' },
  support: { en: 'Support', od: 'ସହାୟତା' },
  rightsReserved: {
    en: 'All rights reserved. Contact details on this site are placeholders pending client confirmation.',
    od: 'ସର୍ବସ୍ୱତ୍ୱ ସଂରକ୍ଷିତ। ଏହି ସାଇଟର ଯୋଗାଯୋଗ ବିବରଣୀ ଗ୍ରାହକଙ୍କ ନିଶ୍ଚିତିକରଣ ପର୍ଯ୍ୟନ୍ତ ପ୍ଲେସହୋଲ୍ଡର ଅଟେ।'
  },
  footerAbout: {
    en: 'Padma Solar Services is an MNRE-registered solar channel partner delivering rooftop solar, subsidy assistance under PM Surya Ghar: Muft Bijli Yojana, and dependable after-sales service for homes, businesses and institutions across Odisha.',
    od: 'ପଦ୍ମ ସୋଲାର ସର୍ଭିସେସ ଏକ MNRE-ପଞ୍ଜୀକୃତ ସୌର ଚ୍ୟାନେଲ ପାର୍ଟନର, ଯିଏ ଓଡ଼ିଶାର ଘର, ବ୍ୟବସାୟ ଓ ପ୍ରତିଷ୍ଠାନ ପାଇଁ ଛାତ ଉପର ସୌର, ପିଏମ ସୂର୍ଯ୍ୟ ଘର ଯୋଜନା ଅଧୀନରେ ସବସିଡି ସହାୟତା ଏବଂ ନିର୍ଭରଯୋଗ୍ୟ ବିକ୍ରୟ-ପରବର୍ତ୍ତୀ ସେବା ଦିଏ।'
  }
}

export const hero = {
  badge: { en: 'Government of India Initiative', od: 'ଭାରତ ସରକାରଙ୍କ ଏକ ଉଦ୍ୟୋଗ' },
  title: {
    en: 'PM Surya Ghar: Muft Bijli Yojana',
    od: 'ପିଏମ ସୂର୍ଯ୍ୟ ଘର: ମୁଫ୍ତ ବିଜୁଳି ଯୋଜନା'
  },
  kicker: {
    en: 'An initiative for free solar electricity',
    od: 'ମାଗଣା ସୌର ବିଦ୍ୟୁତ୍ ପାଇଁ ଏକ ଉଦ୍ୟୋଗ'
  },
  subtitle: {
    en: 'Install a rooftop solar plant with Padma Solar Services and receive up to ₹78,000 central subsidy plus additional Odisha state benefits. Cut your electricity bill by up to 90% and earn from surplus power.',
    od: 'ପଦ୍ମ ସୋଲାର ସର୍ଭିସେସ ସହିତ ଆପଣଙ୍କ ଛାତ ଉପରେ ସୌର ପ୍ୟାନେଲ ଲଗାନ୍ତୁ ଓ ₹୭୮,୦୦୦ ପର୍ଯ୍ୟନ୍ତ କେନ୍ଦ୍ରୀୟ ସବସିଡି ସହ ଓଡ଼ିଶା ରାଜ୍ୟର ଅତିରିକ୍ତ ସୁବିଧା ପାଆନ୍ତୁ। ବିଦ୍ୟୁତ୍ ବିଲ ୯୦% ପର୍ଯ୍ୟନ୍ତ କମାନ୍ତୁ ଏବଂ ବଳକା ବିଦ୍ୟୁତ୍ ବିକ୍ରି କରି ରୋଜଗାର କରନ୍ତୁ।'
  },
  ctaPrimary: { to: '/contact', label: { en: 'Apply for Subsidy', od: 'ସବସିଡି ପାଇଁ ଆବେଦନ କରନ୍ତୁ' } },
  ctaSecondary: { to: '/services', label: { en: 'How It Works', od: 'ଏହା କିପରି କାମ କରେ' } },
  leaders: [
    {
      name: { en: 'Shri Narendra Modi', od: 'ଶ୍ରୀ ନରେନ୍ଦ୍ର ମୋଦୀ' },
      role: { en: "Hon'ble Prime Minister of India", od: 'ଭାରତର ମାନ୍ୟବର ପ୍ରଧାନମନ୍ତ୍ରୀ' }
    },
    {
      name: { en: 'Shri Mohan Charan Majhi', od: 'ଶ୍ରୀ ମୋହନ ଚରଣ ମାଝୀ' },
      role: { en: "Hon'ble Chief Minister of Odisha", od: 'ଓଡ଼ିଶାର ମାନ୍ୟବର ମୁଖ୍ୟମନ୍ତ୍ରୀ' }
    }
  ],
  leaderCaption: {
    en: 'PM Surya Ghar: Muft Bijli Yojana is being implemented across Odisha to bring free solar electricity to every household.',
    od: 'ପ୍ରତ୍ୟେକ ପରିବାରକୁ ମାଗଣା ସୌର ବିଦ୍ୟୁତ୍ ଯୋଗାଇବା ପାଇଁ ଓଡ଼ିଶାରେ ପିଏମ ସୂର୍ଯ୍ୟ ଘର: ମୁଫ୍ତ ବିଜୁଳି ଯୋଜନା କାର୍ଯ୍ୟକାରୀ ହେଉଛି।'
  }
}

export const subsidyBar = [
  {
    value: '₹78,000',
    label: { en: 'Maximum central subsidy', od: 'ସର୍ବାଧିକ କେନ୍ଦ୍ରୀୟ ସବସିଡି' }
  },
  {
    value: { en: 'Up to 90%', od: '୯୦% ପର୍ଯ୍ୟନ୍ତ' },
    label: { en: 'Cut in your electricity bill', od: 'ବିଦ୍ୟୁତ୍ ବିଲରେ ସଞ୍ଚୟ' }
  },
  {
    value: { en: '300+ days', od: '୩୦୦+ ଦିନ' },
    label: { en: 'Of usable sunshine in Odisha', od: 'ଓଡ଼ିଶାରେ ବର୍ଷକୁ ଖରା ଦିନ' }
  },
  {
    value: { en: '5 years', od: '୫ ବର୍ଷ' },
    label: { en: 'Free maintenance included', od: 'ମାଗଣା ରକ୍ଷଣାବେକ୍ଷଣ ଅନ୍ତର୍ଭୁକ୍ତ' }
  }
]

export const odishaFocus = {
  eyebrow: { en: 'Solar energy for Odisha', od: 'ଓଡ଼ିଶା ପାଇଁ ସୌର ଶକ୍ତି' },
  heading: { en: 'Our State, Our Sun, Our Power', od: 'ଆମ ରାଜ୍ୟ, ଆମ ସୂର୍ଯ୍ୟ, ଆମ ଶକ୍ତି' },
  body: {
    en: [
      'Padma Solar Services is an Odisha-based, MNRE-registered solar company. We install rooftop solar plants for homes, businesses and government offices across Ganjam and other districts of the state.',
      'Odisha gets around 300 sunny days a year. By converting that free sunlight into electricity you can save thousands of rupees every month, and under PM Surya Ghar the subsidy goes straight to your bank account.',
      'Application, portal registration, net-metering and DISCOM coordination are all handled by Padma Solar Services. After installation you get up to 5 years of free maintenance, and our service teams speak Odia.'
    ],
    od: [
      'ପଦ୍ମ ସୋଲାର ସର୍ଭିସେସ ଏକ ଓଡ଼ିଶା-ଭିତ୍ତିକ, MNRE-ପଞ୍ଜୀକୃତ ସୌର ଶକ୍ତି ପ୍ରତିଷ୍ଠାନ। ଆମେ ଗଞ୍ଜାମ ସମେତ ରାଜ୍ୟର ବିଭିନ୍ନ ଜିଲ୍ଲାରେ ଘର, ବ୍ୟବସାୟ ପ୍ରତିଷ୍ଠାନ ଓ ସରକାରୀ କାର୍ଯ୍ୟାଳୟ ପାଇଁ ଛାତ ଉପର ସୌର ପ୍ଲାଣ୍ଟ ସ୍ଥାପନ କରୁଛୁ।',
      'ଓଡ଼ିଶାରେ ବର୍ଷକୁ ପ୍ରାୟ ୩୦୦ ଦିନ ଖରା ଥାଏ। ଏହି ମାଗଣା ସୂର୍ଯ୍ୟକିରଣକୁ ବିଦ୍ୟୁତ୍‌ରେ ପରିଣତ କରି ଆପଣ ପ୍ରତି ମାସ ହଜାର ହଜାର ଟଙ୍କା ସଞ୍ଚୟ କରିପାରିବେ। ପିଏମ ସୂର୍ଯ୍ୟ ଘର ଯୋଜନା ଅଧୀନରେ ସବସିଡି ସିଧାସଳଖ ଆପଣଙ୍କ ବ୍ୟାଙ୍କ ଖାତାକୁ ଯାଏ।',
      'ଆବେଦନ, ପୋର୍ଟାଲ ପଞ୍ଜୀକରଣ, ନେଟ୍-ମିଟରିଂ ଓ DISCOM ସହ ସମନ୍ୱୟ — ସମସ୍ତ କାମ ପଦ୍ମ ସୋଲାର ସର୍ଭିସେସ କରିଥାଏ। ସ୍ଥାପନ ପରେ ୫ ବର୍ଷ ପର୍ଯ୍ୟନ୍ତ ମାଗଣା ରକ୍ଷଣାବେକ୍ଷଣ ମିଳେ ଏବଂ ଆମ ସେବା ଦଳ ଓଡ଼ିଆରେ କଥାବାର୍ତ୍ତା କରନ୍ତି।'
    ]
  },
  bullets: [
    { en: 'Service in 15+ districts', od: '୧୫+ ଜିଲ୍ଲାରେ ସେବା' },
    { en: 'Full support in the Odia language', od: 'ଓଡ଼ିଆ ଭାଷାରେ ସମ୍ପୂର୍ଣ୍ଣ ସହାୟତା' },
    { en: 'Local service teams', od: 'ସ୍ଥାନୀୟ ସେବା ଦଳ' },
    { en: 'Transparent pricing, no hidden charges', od: 'ସ୍ୱଚ୍ଛ ମୂଲ୍ୟ, କୌଣସି ଲୁକ୍କାୟିତ ଚାର୍ଜ ନାହିଁ' }
  ]
}

export const benefits = [
  {
    icon: 'leaf',
    title: { en: 'Eco-Friendly', od: 'ପରିବେଶ ଅନୁକୂଳ' },
    text: {
      en: 'Every 1 kW solar plant offsets carbon equal to planting about 50 trees each year.',
      od: 'ପ୍ରତି ୧ କିଲୋୱାଟ ସୌର ପ୍ଲାଣ୍ଟ ବର୍ଷକୁ ପ୍ରାୟ ୫୦ଟି ଗଛ ଲଗାଇବା ସମାନ କାର୍ବନ ହ୍ରାସ କରେ।'
    }
  },
  {
    icon: 'bolt',
    title: { en: 'Quick Installation', od: 'ଶୀଘ୍ର ସ୍ଥାପନ' },
    text: {
      en: 'A typical 3 kW residential system is commissioned within 5 to 7 working days.',
      od: 'ସାଧାରଣ ୩ କିଲୋୱାଟ ଘରୋଇ ସିଷ୍ଟମ ୫ ରୁ ୭ କାର୍ଯ୍ୟ ଦିବସ ମଧ୍ୟରେ ଚାଲୁ ହୋଇଯାଏ।'
    }
  },
  {
    icon: 'shield',
    title: { en: 'Low Maintenance', od: 'କମ୍ ରକ୍ଷଣାବେକ୍ଷଣ' },
    text: {
      en: 'Panels need only occasional cleaning. We provide a 5-year free maintenance plan.',
      od: 'ପ୍ୟାନେଲକୁ କେବଳ ବେଳେବେଳେ ସଫା କରିବାକୁ ପଡେ। ଆମେ ୫ ବର୍ଷର ମାଗଣା ରକ୍ଷଣାବେକ୍ଷଣ ଦେଉ।'
    }
  },
  {
    icon: 'rupee',
    title: { en: 'Affordable & Financed', od: 'ସୁଲଭ ଓ ଋଣ ସୁବିଧା' },
    text: {
      en: 'Easy EMI options through partner PSU banks and NBFCs with fast subsidy processing.',
      od: 'ସହଭାଗୀ ସରକାରୀ ବ୍ୟାଙ୍କ ଓ NBFC ମାଧ୍ୟମରେ ସହଜ EMI ଏବଂ ଶୀଘ୍ର ସବସିଡି ପ୍ରକ୍ରିୟା।'
    }
  }
]

export const sections = {
  benefits: {
    eyebrow: { en: 'Why Padma Solar', od: 'ପଦ୍ମ ସୋଲାର କାହିଁକି' },
    heading: { en: 'Clean energy that pays you back', od: 'ସ୍ୱଚ୍ଛ ଶକ୍ତି ଯାହା ଆପଣଙ୍କୁ ଲାଭ ଦିଏ' },
    text: {
      en: 'Rooftop solar is one of the safest long-term investments an Odisha household or business can make. Here is why thousands have already switched.',
      od: 'ଛାତ ଉପର ସୌର ଏକ ଓଡ଼ିଶା ପରିବାର କିମ୍ବା ବ୍ୟବସାୟ ପାଇଁ ସବୁଠାରୁ ନିରାପଦ ଦୀର୍ଘକାଳୀନ ନିବେଶ। ହଜାର ହଜାର ଲୋକ ଏବେ ବଦଳିସାରିଛନ୍ତି କାହିଁକି ଏଠାରେ ଦେଖନ୍ତୁ।'
    }
  },
  subsidy: {
    eyebrow: { en: 'PM Surya Ghar: Muft Bijli Yojana', od: 'ପିଏମ ସୂର୍ଯ୍ୟ ଘର: ମୁଫ୍ତ ବିଜୁଳି ଯୋଜନା' },
    heading: { en: 'Subsidy You Are Entitled To', od: 'ଆପଣ ପାଇବାକୁ ଥିବା ସବସିଡି' }
  },
  economics: {
    eyebrow: { en: 'The economics', od: 'ସୌର ଶକ୍ତିର ଅର୍ଥନୀତି' },
    heading: {
      en: 'What solar does to your electricity bill',
      od: 'ସୌର ଶକ୍ତି ଆପଣଙ୍କ ବିଦ୍ୟୁତ୍ ବିଲରେ କ’ଣ କରେ'
    }
  },
  savings: {
    eyebrow: { en: 'Worked example', od: 'ଉଦାହରଣ ସହ ବୁଝନ୍ତୁ' },
    heading: { en: 'What a 3 kW Rooftop System Delivers', od: '୩ କିଲୋୱାଟ ଛାତ ସିଷ୍ଟମ କ’ଣ ଦେଇଥାଏ' },
    intro: {
      en: 'A mid-sized home in coastal Odisha typically consumes 300–400 units a month. Here is how a 3 kW grid-connected system performs.',
      od: 'ଓଡ଼ିଶାର ଏକ ମଝି ଆକାରର ଘର ମାସକୁ ପ୍ରାୟ ୩୦୦–୪୦୦ ୟୁନିଟ ବିଦ୍ୟୁତ୍ ବ୍ୟବହାର କରେ। ୩ କିଲୋୱାଟ ଗ୍ରିଡ୍-ସଂଯୁକ୍ତ ସିଷ୍ଟମ ଏହାର ଅଧିକାଂଶ ଚାହିଦା ପୂରଣ କରିପାରେ।'
    }
  },
  credentials: {
    eyebrow: { en: 'Track record', od: 'ଆମର ଅଭିଜ୍ଞତା' },
    heading: { en: 'An installer Odisha can rely on', od: 'ଓଡ଼ିଶା ଭରସା କରିପାରୁଥିବା ଏକ ସ୍ଥାପନକାରୀ' },
    text: {
      en: 'Padma Solar Services combines certified engineering with a local service network, so help is never far away after your plant goes live.',
      od: 'ପଦ୍ମ ସୋଲାର ସର୍ଭିସେସ ପ୍ରମାଣିତ ଇଞ୍ଜିନିୟରିଂ ଓ ସ୍ଥାନୀୟ ସେବା ନେଟ୍‌ୱର୍କକୁ ଏକାଠି କରେ, ତେଣୁ ପ୍ଲାଣ୍ଟ ଚାଲୁ ହେବା ପରେ ମଧ୍ୟ ସହାୟତା ସବୁବେଳେ ପାଖରେ ଥାଏ।'
    }
  },
  process: {
    eyebrow: { en: 'How it works', od: 'ଏହା କିପରି କାମ କରେ' },
    heading: {
      en: 'From enquiry to energised in five clear steps',
      od: 'ଅନୁସନ୍ଧାନରୁ ବିଦ୍ୟୁତ୍ ଉତ୍ପାଦନ ପର୍ଯ୍ୟନ୍ତ ପାଞ୍ଚଟି ସ୍ପଷ୍ଟ ପଦକ୍ଷେପ'
    }
  },
  testimonials: {
    eyebrow: { en: 'Customer voices', od: 'ଗ୍ରାହକଙ୍କ ମତ' },
    heading: { en: 'What our customers say', od: 'ଆମ ଗ୍ରାହକ କ’ଣ କୁହନ୍ତି' }
  },
  faq: {
    eyebrow: { en: 'Good to know', od: 'ଜାଣିବା ଭଲ' },
    heading: { en: 'Frequently asked questions', od: 'ସାଧାରଣ ପ୍ରଶ୍ନ' }
  }
}

export const subsidy = {
  intro: {
    en: 'Under PM Surya Ghar: Muft Bijli Yojana, the Government of India provides a direct subsidy to your bank account. Padma Solar Services handles the entire application, portal registration, and DISCOM coordination for you.',
    od: 'ପିଏମ ସୂର୍ଯ୍ୟ ଘର: ମୁଫ୍ତ ବିଜୁଳି ଯୋଜନା ଅଧୀନରେ ଭାରତ ସରକାର ସିଧାସଳଖ ଆପଣଙ୍କ ବ୍ୟାଙ୍କ ଖାତାକୁ ସବସିଡି ଦିଅନ୍ତି। ପଦ୍ମ ସୋଲାର ସର୍ଭିସେସ ସମ୍ପୂର୍ଣ୍ଣ ଆବେଦନ, ପୋର୍ଟାଲ ପଞ୍ଜୀକରଣ ଓ DISCOM ସମନ୍ୱୟ କରିଥାଏ।'
  },
  colCapacity: { en: 'System capacity', od: 'ସିଷ୍ଟମ କ୍ଷମତା' },
  colSubsidy: { en: 'Central subsidy', od: 'କେନ୍ଦ୍ରୀୟ ସବସିଡି' },
  slabs: [
    { size: { en: 'Up to 2 kW', od: '୨ କିଲୋୱାଟ ପର୍ଯ୍ୟନ୍ତ' }, amount: { en: '₹30,000 / kW', od: '₹୩୦,୦୦୦ / କିଲୋୱାଟ' } },
    {
      size: { en: 'Additional 1 kW (2–3 kW)', od: 'ଅତିରିକ୍ତ ୧ କିଲୋୱାଟ (୨–୩ କିଲୋୱାଟ)' },
      amount: { en: '₹18,000 / kW', od: '₹୧୮,୦୦୦ / କିଲୋୱାଟ' }
    },
    {
      size: { en: 'Above 3 kW', od: '୩ କିଲୋୱାଟରୁ ଅଧିକ' },
      amount: { en: '₹78,000 (fixed cap)', od: '₹୭୮,୦୦୦ (ସର୍ବାଧିକ)' }
    }
  ],
  note: {
    en: 'Central subsidy up to ₹78,000. Additional Odisha state incentives and net-metering benefits apply as per current DISCOM policy.',
    od: 'କେନ୍ଦ୍ରୀୟ ସବସିଡି ₹୭୮,୦୦୦ ପର୍ଯ୍ୟନ୍ତ। ପ୍ରଚଳିତ DISCOM ନୀତି ଅନୁଯାୟୀ ଓଡ଼ିଶା ରାଜ୍ୟର ଅତିରିକ୍ତ ପ୍ରୋତ୍ସାହନ ଓ ନେଟ୍-ମିଟରିଂ ସୁବିଧା ମିଳିବ।'
  }
}

export const whySolar = [
  {
    stat: { en: 'Up to 90%', od: '୯୦% ପର୍ଯ୍ୟନ୍ତ' },
    label: {
      en: 'Reduction in monthly electricity bills for most households.',
      od: 'ଅଧିକାଂଶ ପରିବାର ପାଇଁ ମାସିକ ବିଦ୍ୟୁତ୍ ବିଲରେ ହ୍ରାସ।'
    }
  },
  {
    stat: { en: '3 – 5 years', od: '୩ – ୫ ବର୍ଷ' },
    label: {
      en: 'Typical payback period, after which power is virtually free.',
      od: 'ସାଧାରଣ ଖର୍ଚ୍ଚ ଉଠାଣ ଅବଧି, ତା’ପରେ ବିଦ୍ୟୁତ୍ ପ୍ରାୟ ମାଗଣା।'
    }
  },
  {
    stat: { en: '25+ years', od: '୨୫+ ବର୍ଷ' },
    label: {
      en: 'Manufacturer performance warranty on solar panels.',
      od: 'ସୌର ପ୍ୟାନେଲ ଉପରେ ନିର୍ମାତାଙ୍କ ପରଫର୍ମାନ୍ସ ୱାରେଣ୍ଟି।'
    }
  },
  {
    stat: { en: '0%', od: '୦%' },
    label: {
      en: 'Exposure to future electricity tariff hikes on self-generated units.',
      od: 'ନିଜେ ଉତ୍ପାଦିତ ୟୁନିଟ ଉପରେ ଭବିଷ୍ୟତ ଟାରିଫ ବୃଦ୍ଧିର ପ୍ରଭାବ ନାହିଁ।'
    }
  }
]

export const savingsExample = {
  rows: [
    { k: { en: 'Average daily generation', od: 'ହାରାହାରି ଦୈନିକ ଉତ୍ପାଦନ' }, v: { en: '12 units (kWh)', od: '୧୨ ୟୁନିଟ (kWh)' } },
    { k: { en: 'Monthly generation', od: 'ମାସିକ ଉତ୍ପାଦନ' }, v: { en: '≈ 360 units', od: '≈ ୩୬୦ ୟୁନିଟ' } },
    { k: { en: 'Grid tariff assumed', od: 'ଅନୁମାନିତ ଗ୍ରିଡ ଟାରିଫ' }, v: { en: '₹6.50 / unit', od: '₹୬.୫୦ / ୟୁନିଟ' } },
    { k: { en: 'Estimated monthly saving', od: 'ଆନୁମାନିକ ମାସିକ ସଞ୍ଚୟ' }, v: { en: '≈ ₹2,340', od: '≈ ₹୨,୩୪୦' } },
    { k: { en: 'Estimated yearly saving', od: 'ଆନୁମାନିକ ବାର୍ଷିକ ସଞ୍ଚୟ' }, v: { en: '≈ ₹28,000', od: '≈ ₹୨୮,୦୦୦' } }
  ],
  disclaimer: {
    en: 'Figures are indicative and vary with roof orientation, shading, location, and DISCOM tariff. A free site survey gives you an exact estimate.',
    od: 'ଏହି ସଂଖ୍ୟା ସୂଚକ ମାତ୍ର ଏବଂ ଛାତର ଦିଗ, ଛାୟା, ସ୍ଥାନ ଓ DISCOM ଟାରିଫ ଅନୁସାରେ ବଦଳେ। ଏକ ମାଗଣା ସ୍ଥାନ ସର୍ଭେ ଆପଣଙ୍କୁ ସଠିକ ଆକଳନ ଦେବ।'
  }
}

export const credentials = {
  en: [
    '12+ years of hands-on solar experience across Odisha',
    '1,200+ residential rooftop installations commissioned',
    '85+ commercial and institutional projects delivered',
    'Authorised channel partner for Tier-1 panel and inverter brands',
    'In-house MNRE-certified installers and electrical supervisors',
    'Dedicated after-sales service network in Ganjam and nearby districts'
  ],
  od: [
    'ଓଡ଼ିଶାରେ ୧୨+ ବର୍ଷର ପ୍ରତ୍ୟକ୍ଷ ସୌର ଅଭିଜ୍ଞତା',
    '୧,୨୦୦+ ଘରୋଇ ଛାତ ସ୍ଥାପନ ସମ୍ପନ୍ନ',
    '୮୫+ ବାଣିଜ୍ୟିକ ଓ ପ୍ରାତିଷ୍ଠାନିକ ପ୍ରକଳ୍ପ ପ୍ରଦାନ',
    'ଟିଅର-୧ ପ୍ୟାନେଲ ଓ ଇନଭର୍ଟର ବ୍ରାଣ୍ଡ ପାଇଁ ଅଧିକୃତ ଚ୍ୟାନେଲ ପାର୍ଟନର',
    'ନିଜସ୍ୱ MNRE-ପ୍ରମାଣିତ ସ୍ଥାପନକାରୀ ଓ ବିଦ୍ୟୁତ୍ ସୁପରଭାଇଜର',
    'ଗଞ୍ଜାମ ଓ ନିକଟସ୍ଥ ଜିଲ୍ଲାରେ ସମର୍ପିତ ବିକ୍ରୟ-ପରବର୍ତ୍ତୀ ସେବା ନେଟ୍‌ୱର୍କ'
  ]
}

export const stats = [
  { value: 12, suffix: '+', label: { en: 'Years of Experience', od: 'ବର୍ଷର ଅଭିଜ୍ଞତା' } },
  { value: 1300, suffix: '+', label: { en: 'Happy Customers', od: 'ସନ୍ତୁଷ୍ଟ ଗ୍ରାହକ' } },
  { value: 6, suffix: ' MW+', label: { en: 'Total Capacity Installed', od: 'ମୋଟ ସ୍ଥାପିତ କ୍ଷମତା' } },
  { value: 15, suffix: '+', label: { en: 'Districts Served', od: 'ସେବିତ ଜିଲ୍ଲା' } }
]

export const process = [
  {
    step: '01',
    title: { en: 'Free Consultation & Site Survey', od: 'ମାଗଣା ପରାମର୍ଶ ଓ ସ୍ଥାନ ସର୍ଭେ' },
    text: {
      en: 'Our engineer visits your premises, measures shadow-free roof area, studies your electricity bills, and proposes the right system size.',
      od: 'ଆମ ଇଞ୍ଜିନିୟର ଆପଣଙ୍କ ଘରକୁ ଆସନ୍ତି, ଛାୟାମୁକ୍ତ ଛାତ ମାପନ୍ତି, ବିଦ୍ୟୁତ୍ ବିଲ ଦେଖନ୍ତି ଏବଂ ସଠିକ ସିଷ୍ଟମ ଆକାର ପ୍ରସ୍ତାବ ଦିଅନ୍ତି।'
    }
  },
  {
    step: '02',
    title: { en: 'Proposal, Subsidy & Loan Paperwork', od: 'ପ୍ରସ୍ତାବ, ସବସିଡି ଓ ଋଣ କାଗଜପତ୍ର' },
    text: {
      en: 'We share a transparent quotation, register your application on the National Portal, and help you avail bank finance if required.',
      od: 'ଆମେ ସ୍ୱଚ୍ଛ ମୂଲ୍ୟ ଉଦ୍ଧୃତି ଦେଉ, ନ୍ୟାସନାଲ ପୋର୍ଟାଲରେ ଆବେଦନ ପଞ୍ଜୀକରଣ କରୁ ଏବଂ ଆବଶ୍ୟକ ହେଲେ ବ୍ୟାଙ୍କ ଋଣ ପାଇବାରେ ସହାୟତା କରୁ।'
    }
  },
  {
    step: '03',
    title: { en: 'Supply & Professional Installation', od: 'ଯୋଗାଣ ଓ ବୃତ୍ତିଗତ ସ୍ଥାପନ' },
    text: {
      en: 'Certified teams install BIS-approved panels, inverter, mounting structure and safety equipment as per CEA norms.',
      od: 'ପ୍ରମାଣିତ ଦଳ CEA ନିୟମ ଅନୁଯାୟୀ BIS-ଅନୁମୋଦିତ ପ୍ୟାନେଲ, ଇନଭର୍ଟର, ମାଉଣ୍ଟିଂ ଗଠନ ଓ ସୁରକ୍ଷା ଉପକରଣ ସ୍ଥାପନ କରନ୍ତି।'
    }
  },
  {
    step: '04',
    title: { en: 'Net Metering & Commissioning', od: 'ନେଟ୍ ମିଟରିଂ ଓ କମିଶନିଂ' },
    text: {
      en: 'We coordinate with your DISCOM for the bidirectional meter, inspection, and grid synchronisation.',
      od: 'ଦ୍ୱିମୁଖୀ ମିଟର, ଯାଞ୍ଚ ଓ ଗ୍ରିଡ ସିଙ୍କ୍ରୋନାଇଜେସନ ପାଇଁ ଆମେ ଆପଣଙ୍କ DISCOM ସହ ସମନ୍ୱୟ କରୁ।'
    }
  },
  {
    step: '05',
    title: { en: 'Monitoring & 5-Year Service', od: 'ମନିଟରିଂ ଓ ୫-ବର୍ଷ ସେବା' },
    text: {
      en: 'Remote generation monitoring plus scheduled cleaning and preventive maintenance visits.',
      od: 'ଦୂର-ଉତ୍ପାଦନ ମନିଟରିଂ ସହିତ ନିର୍ଧାରିତ ସଫେଇ ଓ ପ୍ରତିରୋଧକ ରକ୍ଷଣାବେକ୍ଷଣ ପରିଦର୍ଶନ।'
    }
  }
]

export const services = [
  {
    slug: 'residential',
    icon: 'home',
    title: { en: 'Residential Rooftop Solar', od: 'ଘରୋଇ ଛାତ ସୌର' },
    summary: {
      en: 'Grid-connected rooftop systems from 1 kW to 10 kW for homes, designed to maximise subsidy and bill savings.',
      od: 'ଘର ପାଇଁ ୧ କିଲୋୱାଟରୁ ୧୦ କିଲୋୱାଟ ପର୍ଯ୍ୟନ୍ତ ଗ୍ରିଡ-ସଂଯୁକ୍ତ ଛାତ ସିଷ୍ଟମ, ସବସିଡି ଓ ବିଲ ସଞ୍ଚୟ ବଢ଼ାଇବା ପାଇଁ ଡିଜାଇନ କରାଯାଇଛି।'
    },
    points: {
      en: [
        'On-grid, off-grid and hybrid (with battery backup) options',
        'Full assistance with PM Surya Ghar subsidy claim',
        'Net-metering application and DISCOM liaison',
        'App-based generation monitoring',
        '5 years free maintenance, 25-year panel warranty'
      ],
      od: [
        'ଅନ-ଗ୍ରିଡ, ଅଫ-ଗ୍ରିଡ ଓ ହାଇବ୍ରିଡ (ବ୍ୟାଟେରୀ ବ୍ୟାକଅପ ସହ) ବିକଳ୍ପ',
        'ପିଏମ ସୂର୍ଯ୍ୟ ଘର ସବସିଡି ଦାବି ପାଇଁ ସମ୍ପୂର୍ଣ୍ଣ ସହାୟତା',
        'ନେଟ୍-ମିଟରିଂ ଆବେଦନ ଓ DISCOM ସମନ୍ୱୟ',
        'ଆପ-ଆଧାରିତ ଉତ୍ପାଦନ ମନିଟରିଂ',
        '୫ ବର୍ଷ ମାଗଣା ରକ୍ଷଣାବେକ୍ଷଣ, ୨୫-ବର୍ଷ ପ୍ୟାନେଲ ୱାରେଣ୍ଟି'
      ]
    }
  },
  {
    slug: 'commercial',
    icon: 'building',
    title: { en: 'Commercial & Industrial Solar', od: 'ବାଣିଜ୍ୟିକ ଓ ଶିଳ୍ପ ସୌର' },
    summary: {
      en: 'Capex and RESCO/OPEX models for factories, hospitals, hotels, schools and commercial buildings.',
      od: 'କାରଖାନା, ଡାକ୍ତରଖାନା, ହୋଟେଲ, ବିଦ୍ୟାଳୟ ଓ ବାଣିଜ୍ୟିକ ଭବନ ପାଇଁ Capex ଓ RESCO/OPEX ମଡେଲ।'
    },
    points: {
      en: [
        'Rooftop and ground-mount plants from 10 kW to 1 MW+',
        'Accelerated depreciation and GST input benefits guidance',
        'Load analysis and demand-charge optimisation',
        'SCADA / remote plant monitoring',
        'Annual Maintenance Contracts with uptime assurance'
      ],
      od: [
        '୧୦ କିଲୋୱାଟରୁ ୧ ମେଗାୱାଟ+ ପର୍ଯ୍ୟନ୍ତ ଛାତ ଓ ଭୂମି-ମାଉଣ୍ଟ ପ୍ଲାଣ୍ଟ',
        'ତ୍ୱରାନ୍ୱିତ ଅବକ୍ଷୟ ଓ GST ଇନପୁଟ ଲାଭ ସମ୍ପର୍କରେ ମାର୍ଗଦର୍ଶନ',
        'ଲୋଡ ବିଶ୍ଳେଷଣ ଓ ଡିମାଣ୍ଡ-ଚାର୍ଜ ଅପ୍ଟିମାଇଜେସନ',
        'SCADA / ଦୂର ପ୍ଲାଣ୍ଟ ମନିଟରିଂ',
        'ଅପଟାଇମ ନିଶ୍ଚିତତା ସହ ବାର୍ଷିକ ରକ୍ଷଣାବେକ୍ଷଣ ଚୁକ୍ତି'
      ]
    }
  },
  {
    slug: 'institutional',
    icon: 'gov',
    title: { en: 'Government & Institutional Projects', od: 'ସରକାରୀ ଓ ପ୍ରାତିଷ୍ଠାନିକ ପ୍ରକଳ୍ପ' },
    summary: {
      en: 'Solarisation of panchayat buildings, schools, PHCs, water pumping and street lighting under state and central schemes.',
      od: 'ରାଜ୍ୟ ଓ କେନ୍ଦ୍ର ଯୋଜନା ଅଧୀନରେ ପଞ୍ଚାୟତ ଭବନ, ବିଦ୍ୟାଳୟ, PHC, ଜଳ ପମ୍ପିଂ ଓ ରାସ୍ତା ଆଲୋକର ସୌରକରଣ।'
    },
    points: {
      en: [
        'Turnkey EPC as per MNRE and tender specifications',
        'PM-KUSUM solar agriculture pump installations',
        'Solar street lights and high-mast systems',
        'Documentation and third-party inspection support'
      ],
      od: [
        'MNRE ଓ ଟେଣ୍ଡର ନିର୍ଦ୍ଦିଷ୍ଟକରଣ ଅନୁଯାୟୀ ଟର୍ନକୀ EPC',
        'PM-KUSUM ସୌର କୃଷି ପମ୍ପ ସ୍ଥାପନ',
        'ସୌର ରାସ୍ତା ଆଲୋକ ଓ ହାଇ-ମାଷ୍ଟ ସିଷ୍ଟମ',
        'ଡକ୍ୟୁମେଣ୍ଟେସନ ଓ ତୃତୀୟ-ପକ୍ଷ ଯାଞ୍ଚ ସହାୟତା'
      ]
    }
  },
  {
    slug: 'products',
    icon: 'box',
    title: { en: 'Solar Products & AMC', od: 'ସୌର ଉତ୍ପାଦ ଓ AMC' },
    summary: {
      en: 'Genuine solar components, water heaters, and maintenance services for existing plants of any brand.',
      od: 'ଆସଲ ସୌର ଉପକରଣ, ୱାଟର ହିଟର, ଏବଂ ଯେକୌଣସି ବ୍ରାଣ୍ଡର ବିଦ୍ୟମାନ ପ୍ଲାଣ୍ଟ ପାଇଁ ରକ୍ଷଣାବେକ୍ଷଣ ସେବା।'
    },
    points: {
      en: [
        'Mono PERC / TOPCon panels, string & micro inverters',
        'Lithium and tubular solar batteries',
        'Solar water heaters (100 – 500 LPD)',
        'Repair, revamp and AMC for third-party systems'
      ],
      od: [
        'ମୋନୋ PERC / TOPCon ପ୍ୟାନେଲ, ଷ୍ଟ୍ରିଙ୍ଗ ଓ ମାଇକ୍ରୋ ଇନଭର୍ଟର',
        'ଲିଥିୟମ ଓ ଟ୍ୟୁବୁଲାର ସୌର ବ୍ୟାଟେରୀ',
        'ସୌର ୱାଟର ହିଟର (୧୦୦ – ୫୦୦ LPD)',
        'ତୃତୀୟ-ପକ୍ଷ ସିଷ୍ଟମ ପାଇଁ ମରାମତି, ନବୀକରଣ ଓ AMC'
      ]
    }
  }
]

export const servicesPage = {
  includedEyebrow: { en: 'Included with every installation', od: 'ପ୍ରତ୍ୟେକ ସ୍ଥାପନ ସହିତ ଅନ୍ତର୍ଭୁକ୍ତ' },
  includedHeading: { en: 'What you always get', od: 'ଆପଣ ସବୁବେଳେ ଯାହା ପାଆନ୍ତି' },
  included: [
    { icon: 'shield', label: { en: 'Free site survey & load study', od: 'ମାଗଣା ସ୍ଥାନ ସର୍ଭେ ଓ ଲୋଡ ଅଧ୍ୟୟନ' } },
    { icon: 'gov', label: { en: 'Subsidy application on the National Portal', od: 'ନ୍ୟାସନାଲ ପୋର୍ଟାଲରେ ସବସିଡି ଆବେଦନ' } },
    { icon: 'bolt', label: { en: 'Net-metering & DISCOM coordination', od: 'ନେଟ୍-ମିଟରିଂ ଓ DISCOM ସମନ୍ୱୟ' } },
    { icon: 'box', label: { en: 'BIS-approved, ALMM-listed components', od: 'BIS-ଅନୁମୋଦିତ, ALMM-ତାଲିକାଭୁକ୍ତ ଉପକରଣ' } },
    { icon: 'sun', label: { en: 'App-based generation monitoring', od: 'ଆପ-ଆଧାରିତ ଉତ୍ପାଦନ ମନିଟରିଂ' } },
    { icon: 'clock', label: { en: '5 years of free scheduled maintenance', od: '୫ ବର୍ଷର ମାଗଣା ନିର୍ଧାରିତ ରକ୍ଷଣାବେକ୍ଷଣ' } }
  ],
  deliveryEyebrow: { en: 'Delivery process', od: 'ପ୍ରଦାନ ପ୍ରକ୍ରିୟା' },
  deliveryHeading: { en: 'How your project is executed', od: 'ଆପଣଙ୍କ ପ୍ରକଳ୍ପ କିପରି କାର୍ଯ୍ୟକାରୀ ହୁଏ' }
}

export const projectCategories = [
  { key: 'All', label: { en: 'All', od: 'ସମସ୍ତ' } },
  { key: 'Residential', label: { en: 'Residential', od: 'ଘରୋଇ' } },
  { key: 'Commercial', label: { en: 'Commercial', od: 'ବାଣିଜ୍ୟିକ' } },
  { key: 'Institutional', label: { en: 'Institutional', od: 'ପ୍ରାତିଷ୍ଠାନିକ' } }
]

export const projects = [
  {
    category: 'Residential',
    capacity: '5 kW',
    title: { en: 'Residential Rooftop — Gopalpur', od: 'ଘରୋଇ ଛାତ — ଗୋପାଳପୁର' },
    detail: {
      en: 'On-grid system for a private residence. Monthly bill reduced from ₹4,200 to under ₹500.',
      od: 'ଏକ ବ୍ୟକ୍ତିଗତ ବାସଗୃହ ପାଇଁ ଅନ-ଗ୍ରିଡ ସିଷ୍ଟମ। ମାସିକ ବିଲ ₹୪,୨୦୦ ରୁ ₹୫୦୦ ତଳକୁ ହ୍ରାସ।'
    }
  },
  {
    category: 'Commercial',
    capacity: '80 kW',
    title: { en: 'Rice Mill Rooftop Plant — Chatrapur', od: 'ଚାଉଳ ମିଲ ଛାତ ପ୍ଲାଣ୍ଟ — ଛତ୍ରପୁର' },
    detail: {
      en: 'Captive plant offsetting 60% of the mill’s daytime energy demand with a 4-year payback.',
      od: 'ମିଲର ଦିନ ସମୟର ୬୦% ଶକ୍ତି ଚାହିଦା ପୂରଣ କରୁଥିବା କ୍ୟାପ୍ଟିଭ ପ୍ଲାଣ୍ଟ, ୪ ବର୍ଷରେ ଖର୍ଚ୍ଚ ଉଠାଣ।'
    }
  },
  {
    category: 'Institutional',
    capacity: '120 kW',
    title: { en: 'District Hospital Solarisation — Ganjam', od: 'ଜିଲ୍ଲା ଡାକ୍ତରଖାନା ସୌରକରଣ — ଗଞ୍ଜାମ' },
    detail: {
      en: 'Rooftop plant with monitoring, ensuring clean power for critical care areas.',
      od: 'ମନିଟରିଂ ସହ ଛାତ ପ୍ଲାଣ୍ଟ, ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ଚିକିତ୍ସା କ୍ଷେତ୍ର ପାଇଁ ସ୍ୱଚ୍ଛ ବିଦ୍ୟୁତ୍ ନିଶ୍ଚିତ କରେ।'
    }
  },
  {
    category: 'Residential',
    capacity: '25 kW',
    title: { en: 'Housing Society Common Area — Berhampur', od: 'ହାଉସିଂ ସୋସାଇଟି ସାଧାରଣ କ୍ଷେତ୍ର — ବ୍ରହ୍ମପୁର' },
    detail: {
      en: 'Shared plant powering lifts, pumps and lighting; per-flat maintenance cost cut sharply.',
      od: 'ଲିଫ୍ଟ, ପମ୍ପ ଓ ଆଲୋକ ପାଇଁ ସହଭାଗୀ ପ୍ଲାଣ୍ଟ; ପ୍ରତି ଫ୍ଲାଟ ରକ୍ଷଣାବେକ୍ଷଣ ଖର୍ଚ୍ଚ ବହୁତ କମ୍।'
    }
  },
  {
    category: 'Commercial',
    capacity: '150 kW',
    title: { en: 'Cold Storage Ground-Mount — Aska', od: 'କୋଲ୍ଡ ଷ୍ଟୋରେଜ ଭୂମି-ମାଉଣ୍ଟ — ଆସିକା' },
    detail: {
      en: 'Ground-mounted plant with net-metering keeping compressors running on solar through the day.',
      od: 'ନେଟ୍-ମିଟରିଂ ସହ ଭୂମି-ମାଉଣ୍ଟ ପ୍ଲାଣ୍ଟ, ଦିନସାରା କମ୍ପ୍ରେସରକୁ ସୌର ଶକ୍ତିରେ ଚଳାଏ।'
    }
  },
  {
    category: 'Institutional',
    capacity: '40 kW',
    title: { en: 'Government School Cluster — Ganjam', od: 'ସରକାରୀ ବିଦ୍ୟାଳୟ କ୍ଲଷ୍ଟର — ଗଞ୍ଜାମ' },
    detail: {
      en: 'Ten schools solarised under a state programme, each with 3–5 kW rooftop systems.',
      od: 'ଏକ ରାଜ୍ୟ କାର୍ଯ୍ୟକ୍ରମ ଅଧୀନରେ ଦଶଟି ବିଦ୍ୟାଳୟ ସୌରକୃତ, ପ୍ରତ୍ୟେକରେ ୩–୫ କିଲୋୱାଟ ଛାତ ସିଷ୍ଟମ।'
    }
  }
]

export const projectsNote = {
  en: 'Project names and locations are representative examples for demonstration. Replace with the client’s verified case studies and photographs before launch.',
  od: 'ପ୍ରକଳ୍ପର ନାମ ଓ ସ୍ଥାନ ପ୍ରଦର୍ଶନ ପାଇଁ ଉଦାହରଣ ମାତ୍ର। ଲଞ୍ଚ ପୂର୍ବରୁ ଗ୍ରାହକଙ୍କ ଯାଞ୍ଚିତ କେସ ଷ୍ଟଡି ଓ ଫଟୋ ସହ ବଦଳାନ୍ତୁ।'
}

export const testimonials = [
  {
    name: 'Bijaya Nayak',
    place: { en: 'Homeowner, Berhampur', od: 'ଗୃହମାଲିକ, ବ୍ରହ୍ମପୁର' },
    text: {
      en: 'My electricity bill used to be around ₹4,000 a month. After Padma Solar installed a 4 kW system it is now close to zero. The team handled all the subsidy paperwork.',
      od: 'ମୋର ବିଦ୍ୟୁତ୍ ବିଲ ମାସକୁ ପ୍ରାୟ ₹୪,୦୦୦ ଥିଲା। ପଦ୍ମ ସୋଲାର ୪ କିଲୋୱାଟ ସିଷ୍ଟମ ଲଗାଇବା ପରେ ଏବେ ପ୍ରାୟ ଶୂନ। ଦଳ ସମସ୍ତ ସବସିଡି କାଗଜପତ୍ର ସମ୍ଭାଳିଲେ।'
    }
  },
  {
    name: 'Suresh Panda',
    place: { en: 'Rice Mill Owner, Chatrapur', od: 'ଚାଉଳ ମିଲ ମାଲିକ, ଛତ୍ରପୁର' },
    text: {
      en: 'The commercial plant paid for itself faster than expected. Their engineers understood our load pattern and sized the plant correctly.',
      od: 'ବାଣିଜ୍ୟିକ ପ୍ଲାଣ୍ଟ ଆଶା କରାଯାଉଥିବା ଠାରୁ ଶୀଘ୍ର ନିଜ ଖର୍ଚ୍ଚ ଉଠାଇଲା। ସେମାନଙ୍କ ଇଞ୍ଜିନିୟର ଆମ ଲୋଡ ପାଟର୍ନ ବୁଝି ସଠିକ ଆକାରର ପ୍ଲାଣ୍ଟ ଦେଲେ।'
    }
  },
  {
    name: 'Dr. Anita Mohanty',
    place: { en: 'Nursing Home, Aska', od: 'ନର୍ସିଂ ହୋମ, ଆସିକା' },
    text: {
      en: 'Reliable power for our equipment and a big drop in running costs. Service visits are on time and professional.',
      od: 'ଆମ ଉପକରଣ ପାଇଁ ନିର୍ଭରଯୋଗ୍ୟ ବିଦ୍ୟୁତ୍ ଏବଂ ଚାଲୁ ଖର୍ଚ୍ଚରେ ବଡ଼ ହ୍ରାସ। ସେବା ପରିଦର୍ଶନ ସମୟାନୁବର୍ତ୍ତୀ ଓ ବୃତ୍ତିଗତ।'
    }
  },
  {
    name: 'Prakash Sahu',
    place: { en: 'Sarpanch, Ganjam', od: 'ସରପଞ୍ଚ, ଗଞ୍ଜାମ' },
    text: {
      en: 'Our panchayat building and street lights now run on solar. Padma Solar completed the work exactly as per the tender.',
      od: 'ଆମ ପଞ୍ଚାୟତ ଭବନ ଓ ରାସ୍ତା ଆଲୋକ ଏବେ ସୌର ଶକ୍ତିରେ ଚାଲୁଛି। ପଦ୍ମ ସୋଲାର ଟେଣ୍ଡର ଅନୁଯାୟୀ ଠିକ୍ କାମ ସାରିଲେ।'
    }
  }
]

export const faqs = [
  {
    q: {
      en: 'How much subsidy do I get under PM Surya Ghar: Muft Bijli Yojana?',
      od: 'ପିଏମ ସୂର୍ଯ୍ୟ ଘର: ମୁଫ୍ତ ବିଜୁଳି ଯୋଜନା ଅଧୀନରେ ମୋତେ କେତେ ସବସିଡି ମିଳିବ?'
    },
    a: {
      en: 'The central subsidy is ₹30,000 per kW for the first 2 kW, ₹18,000 per kW for the 3rd kW, and is capped at ₹78,000 for systems of 3 kW and above. Padma Solar Services files your application on the National Portal and the subsidy is credited directly to your bank account after installation and inspection.',
      od: 'ପ୍ରଥମ ୨ କିଲୋୱାଟ ପାଇଁ ପ୍ରତି କିଲୋୱାଟକୁ ₹୩୦,୦୦୦, ତୃତୀୟ କିଲୋୱାଟ ପାଇଁ ପ୍ରତି କିଲୋୱାଟକୁ ₹୧୮,୦୦୦ ଏବଂ ୩ କିଲୋୱାଟ କିମ୍ବା ଅଧିକ ସିଷ୍ଟମ ପାଇଁ ସର୍ବାଧିକ ₹୭୮,୦୦୦ ସବସିଡି ମିଳେ। ପଦ୍ମ ସୋଲାର ସର୍ଭିସେସ ଆପଣଙ୍କ ଆବେଦନ ନ୍ୟାସନାଲ ପୋର୍ଟାଲରେ ଦାଖଲ କରେ ଏବଂ ସ୍ଥାପନ ଓ ଯାଞ୍ଚ ପରେ ସବସିଡି ସିଧାସଳଖ ଆପଣଙ୍କ ବ୍ୟାଙ୍କ ଖାତାକୁ ଆସେ।'
    }
  },
  {
    q: {
      en: 'What roof area do I need for a rooftop solar plant?',
      od: 'ଛାତ ଉପର ସୌର ପ୍ଲାଣ୍ଟ ପାଇଁ କେତେ ଛାତ ଜାଗା ଦରକାର?'
    },
    a: {
      en: 'As a thumb rule you need about 100 square feet of shadow-free roof for every 1 kW. A typical 3 kW home system needs roughly 300 square feet. Our free site survey confirms the exact usable area.',
      od: 'ସାଧାରଣ ନିୟମ ଅନୁସାରେ ପ୍ରତି ୧ କିଲୋୱାଟ ପାଇଁ ପ୍ରାୟ ୧୦୦ ବର୍ଗଫୁଟ ଛାୟାମୁକ୍ତ ଛାତ ଦରକାର। ୩ କିଲୋୱାଟ ଘର ସିଷ୍ଟମ ପାଇଁ ପ୍ରାୟ ୩୦୦ ବର୍ଗଫୁଟ ଆବଶ୍ୟକ। ଆମର ମାଗଣା ସର୍ଭେ ପ୍ରକୃତ ଜାଗା ନିର୍ଣ୍ଣୟ କରେ।'
    }
  },
  {
    q: {
      en: 'Can I sell surplus electricity to the government?',
      od: 'ମୁଁ ବଳକା ବିଦ୍ୟୁତ୍ ସରକାରଙ୍କୁ ବିକ୍ରି କରିପାରିବି କି?'
    },
    a: {
      en: 'Yes. With a net-metering connection, units you export to the grid are adjusted against units you import. Any net surplus at the end of the settlement period is paid as per your DISCOM’s approved feed-in tariff.',
      od: 'ହଁ। ନେଟ୍-ମିଟରିଂ ସଂଯୋଗ ସହିତ, ଆପଣ ଗ୍ରିଡକୁ ପଠାଉଥିବା ୟୁନିଟ ଆପଣ ନେଉଥିବା ୟୁନିଟ ସହ ସମାୟୋଜିତ ହୁଏ। ସେଟ୍‌ଲମେଣ୍ଟ ଶେଷରେ ବଳକା ୟୁନିଟ DISCOM-ର ଅନୁମୋଦିତ ଦରରେ ପ୍ରଦାନ କରାଯାଏ।'
    }
  },
  {
    q: {
      en: 'How long does the whole process take?',
      od: 'ସମ୍ପୂର୍ଣ୍ଣ ପ୍ରକ୍ରିୟାରେ କେତେ ସମୟ ଲାଗେ?'
    },
    a: {
      en: 'Physical installation of a residential system takes 3 to 7 days. Including portal registration, DISCOM approval, and net-meter installation, the end-to-end timeline is usually 4 to 8 weeks.',
      od: 'ଘରୋଇ ସିଷ୍ଟମର ପ୍ରକୃତ ସ୍ଥାପନରେ ୩ ରୁ ୭ ଦିନ ଲାଗେ। ପୋର୍ଟାଲ ପଞ୍ଜୀକରଣ, DISCOM ଅନୁମୋଦନ ଓ ନେଟ୍-ମିଟର ସ୍ଥାପନ ମିଶାଇ ସମୁଦାୟ ୪ ରୁ ୮ ସପ୍ତାହ ଲାଗେ।'
    }
  },
  {
    q: {
      en: 'Do solar panels work in the monsoon and winter?',
      od: 'ବର୍ଷା ଓ ଶୀତ ଦିନରେ ସୌର ପ୍ୟାନେଲ କାମ କରେ କି?'
    },
    a: {
      en: 'Panels generate power in daylight even when it is cloudy, though output is lower on heavily overcast days. Annual generation estimates already account for Odisha’s weather pattern across the year.',
      od: 'ମେଘୁଆ ଦିନରେ ମଧ୍ୟ ପ୍ୟାନେଲ ଦିନ ଆଲୁଅରେ ବିଦ୍ୟୁତ୍ ଉତ୍ପାଦନ କରେ, ତେବେ ଅଧିକ ମେଘ ଥିଲେ ଉତ୍ପାଦନ କମ୍ ହୁଏ। ବାର୍ଷିକ ଉତ୍ପାଦନ ଆକଳନରେ ଓଡ଼ିଶାର ପାଣିପାଗ ପୂର୍ବରୁ ଧରାଯାଇଛି।'
    }
  },
  {
    q: {
      en: 'What warranties do I receive?',
      od: 'ମୋତେ କେଉଁ ୱାରେଣ୍ଟି ମିଳେ?'
    },
    a: {
      en: 'Solar panels carry a 25-year performance warranty and a 10-12 year product warranty. Inverters carry a 5-7 year warranty (extendable). Padma Solar Services adds 5 years of free maintenance on the complete system.',
      od: 'ସୌର ପ୍ୟାନେଲରେ ୨୫ ବର୍ଷର ପରଫର୍ମାନ୍ସ ୱାରେଣ୍ଟି ଓ ୧୦–୧୨ ବର୍ଷର ପ୍ରଡକ୍ଟ ୱାରେଣ୍ଟି ଥାଏ। ଇନଭର୍ଟରରେ ୫–୭ ବର୍ଷ ୱାରେଣ୍ଟି ଥାଏ। ପଦ୍ମ ସୋଲାର ସର୍ଭିସେସ ସମ୍ପୂର୍ଣ୍ଣ ସିଷ୍ଟମ ଉପରେ ୫ ବର୍ଷ ମାଗଣା ରକ୍ଷଣାବେକ୍ଷଣ ଦିଏ।'
    }
  },
  {
    q: {
      en: 'What maintenance is required?',
      od: 'କେଉଁ ରକ୍ଷଣାବେକ୍ଷଣ ଆବଶ୍ୟକ?'
    },
    a: {
      en: 'Very little. Panels should be cleaned with water every 2 to 4 weeks in dusty conditions. Our maintenance plan covers periodic cleaning, connection checks, and inverter health inspection.',
      od: 'ବହୁତ କମ୍। ଧୂଳିଆ ପରିବେଶରେ ପ୍ରତି ୨ ରୁ ୪ ସପ୍ତାହରେ ପାଣିରେ ପ୍ୟାନେଲ ସଫା କରିବା ଉଚିତ। ଆମ ରକ୍ଷଣାବେକ୍ଷଣ ଯୋଜନାରେ ନିୟମିତ ସଫେଇ, ସଂଯୋଗ ଯାଞ୍ଚ ଓ ଇନଭର୍ଟର ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ ଅନ୍ତର୍ଭୁକ୍ତ।'
    }
  },
  {
    q: {
      en: 'Is bank finance available?',
      od: 'ବ୍ୟାଙ୍କ ଋଣ ମିଳେ କି?'
    },
    a: {
      en: 'Yes. Residential rooftop solar is covered under priority-sector lending. We help you apply for low-interest loans from partner PSU banks and NBFCs, often with no collateral up to a defined limit.',
      od: 'ହଁ। ଘରୋଇ ଛାତ ସୌର ପ୍ରାଥମିକତା-କ୍ଷେତ୍ର ଋଣ ଅଧୀନରେ ଆସେ। ଆମେ ସହଭାଗୀ ସରକାରୀ ବ୍ୟାଙ୍କ ଓ NBFC ରୁ କମ୍-ସୁଧ ଋଣ ପାଇଁ ଆବେଦନ କରିବାରେ ସହାୟତା କରୁ, ପ୍ରାୟତଃ ଏକ ନିର୍ଦ୍ଦିଷ୍ଟ ସୀମା ପର୍ଯ୍ୟନ୍ତ ବିନା ବନ୍ଧକରେ।'
    }
  },
  {
    q: {
      en: 'What happens during a power cut?',
      od: 'ବିଦ୍ୟୁତ୍ କଟିଗଲେ କ’ଣ ହୁଏ?'
    },
    a: {
      en: 'A standard on-grid system shuts off during a grid outage for safety. If you need backup during outages, choose a hybrid system with battery storage, which we can design for your critical loads.',
      od: 'ସୁରକ୍ଷା ପାଇଁ ଏକ ସାଧାରଣ ଅନ-ଗ୍ରିଡ ସିଷ୍ଟମ ଗ୍ରିଡ ବନ୍ଦ ହେଲେ ବନ୍ଦ ହୋଇଯାଏ। ବିଦ୍ୟୁତ୍ କଟିବା ସମୟରେ ବ୍ୟାକଅପ ଦରକାର ହେଲେ, ବ୍ୟାଟେରୀ ଷ୍ଟୋରେଜ ସହ ହାଇବ୍ରିଡ ସିଷ୍ଟମ ବାଛନ୍ତୁ, ଯାହା ଆମେ ଆପଣଙ୍କ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ଲୋଡ ପାଇଁ ଡିଜାଇନ କରିପାରିବୁ।'
    }
  },
  {
    q: {
      en: 'Which brands of panels and inverters do you use?',
      od: 'ଆପଣ କେଉଁ ବ୍ରାଣ୍ଡର ପ୍ୟାନେଲ ଓ ଇନଭର୍ଟର ବ୍ୟବହାର କରନ୍ତି?'
    },
    a: {
      en: 'We use BIS-approved, MNRE-listed (ALMM) Tier-1 mono PERC / TOPCon panels and reputed string or micro inverters. Exact make and model are stated clearly in your quotation.',
      od: 'ଆମେ BIS-ଅନୁମୋଦିତ, MNRE-ତାଲିକାଭୁକ୍ତ (ALMM) ଟିଅର-୧ ମୋନୋ PERC / TOPCon ପ୍ୟାନେଲ ଓ ପ୍ରସିଦ୍ଧ ଷ୍ଟ୍ରିଙ୍ଗ କିମ୍ବା ମାଇକ୍ରୋ ଇନଭର୍ଟର ବ୍ୟବହାର କରୁ। ସଠିକ ମେକ ଓ ମଡେଲ ଆପଣଙ୍କ ମୂଲ୍ୟ ଉଦ୍ଧୃତିରେ ସ୍ପଷ୍ଟ ଭାବେ ଉଲ୍ଲେଖ ଥାଏ।'
    }
  }
]

export const aboutPage = {
  whoEyebrow: { en: 'Who we are', od: 'ଆମେ କିଏ' },
  whoHeading: { en: 'Solar built for Odisha conditions', od: 'ଓଡ଼ିଶାର ପରିସ୍ଥିତି ପାଇଁ ତିଆରି ସୌର' },
  who: {
    en: [
      'Founded in 2013, Padma Solar Services has grown from a small rooftop installer into a full-service solar partner serving households, commercial units and government institutions across the Ganjam region and beyond.',
      'We handle the complete journey — site survey, system design, supply, installation, National Portal subsidy filing, net-metering with your DISCOM, and years of maintenance afterwards. Our teams are MNRE-certified and install only BIS-approved, ALMM-listed equipment.',
      'Because we are based here, our service engineers reach most sites the same day. That local presence is what keeps our installations generating at their rated output long after commissioning.'
    ],
    od: [
      '୨୦୧୩ରେ ପ୍ରତିଷ୍ଠିତ, ପଦ୍ମ ସୋଲାର ସର୍ଭିସେସ ଏକ ଛୋଟ ଛାତ ସ୍ଥାପନକାରୀରୁ ବୃଦ୍ଧି ପାଇ ଗଞ୍ଜାମ ଅଞ୍ଚଳ ଓ ତା’ର ବାହାରେ ଘର, ବାଣିଜ୍ୟିକ ଏକକ ଓ ସରକାରୀ ପ୍ରତିଷ୍ଠାନ ପାଇଁ ଏକ ପୂର୍ଣ୍ଣ-ସେବା ସୌର ପାର୍ଟନର ହୋଇଛି।',
      'ଆମେ ସମ୍ପୂର୍ଣ୍ଣ ଯାତ୍ରା ସମ୍ଭାଳୁ — ସ୍ଥାନ ସର୍ଭେ, ସିଷ୍ଟମ ଡିଜାଇନ, ଯୋଗାଣ, ସ୍ଥାପନ, ନ୍ୟାସନାଲ ପୋର୍ଟାଲ ସବସିଡି ଦାଖଲ, DISCOM ସହ ନେଟ୍-ମିଟରିଂ, ଓ ପରବର୍ତ୍ତୀ ବର୍ଷମାନଙ୍କର ରକ୍ଷଣାବେକ୍ଷଣ। ଆମ ଦଳ MNRE-ପ୍ରମାଣିତ ଏବଂ କେବଳ BIS-ଅନୁମୋଦିତ, ALMM-ତାଲିକାଭୁକ୍ତ ଉପକରଣ ଲଗାନ୍ତି।',
      'ଆମେ ଏଠାରେ ଥିବାରୁ ଆମ ସେବା ଇଞ୍ଜିନିୟର ଅଧିକାଂଶ ସ୍ଥାନରେ ସେହିଦିନ ପହଞ୍ଚନ୍ତି। ଏହି ସ୍ଥାନୀୟ ଉପସ୍ଥିତି ହିଁ ଆମ ସ୍ଥାପନାକୁ କମିଶନିଂ ପରେ ବହୁ ଦିନ ଯାଏ ନିର୍ଦ୍ଧାରିତ ଉତ୍ପାଦନରେ ରଖେ।'
    ]
  },
  valuesEyebrow: { en: 'Our values', od: 'ଆମ ମୂଲ୍ୟବୋଧ' },
  valuesHeading: { en: 'How we work', od: 'ଆମେ କିପରି କାମ କରୁ' },
  values: [
    {
      icon: 'shield',
      title: { en: 'Transparency', od: 'ସ୍ୱଚ୍ଛତା' },
      text: {
        en: 'Itemised quotations with brand and model names. No hidden charges after the survey.',
        od: 'ବ୍ରାଣ୍ଡ ଓ ମଡେଲ ନାମ ସହ ବିସ୍ତୃତ ମୂଲ୍ୟ ଉଦ୍ଧୃତି। ସର୍ଭେ ପରେ କୌଣସି ଲୁକ୍କାୟିତ ଚାର୍ଜ ନାହିଁ।'
      }
    },
    {
      icon: 'bolt',
      title: { en: 'Engineering first', od: 'ପ୍ରଥମେ ଇଞ୍ଜିନିୟରିଂ' },
      text: {
        en: 'Every system is sized on measured load and shadow analysis, not guesswork.',
        od: 'ପ୍ରତ୍ୟେକ ସିଷ୍ଟମ ମପାଯାଇଥିବା ଲୋଡ ଓ ଛାୟା ବିଶ୍ଳେଷଣ ଉପରେ ଆଧାରିତ, ଅନୁମାନ ଉପରେ ନୁହେଁ।'
      }
    },
    {
      icon: 'leaf',
      title: { en: 'Long-term ownership', od: 'ଦୀର୍ଘକାଳୀନ ଦାୟିତ୍ୱ' },
      text: {
        en: 'We stay accountable for generation for years, not just until the invoice is paid.',
        od: 'ଆମେ କେବଳ ବିଲ ଦିଆଯିବା ପର୍ଯ୍ୟନ୍ତ ନୁହେଁ, ବର୍ଷ ବର୍ଷ ଧରି ଉତ୍ପାଦନ ପାଇଁ ଉତ୍ତରଦାୟୀ ରହୁ।'
      }
    }
  ],
  processEyebrow: { en: 'Our process', od: 'ଆମ ପ୍ରକ୍ରିୟା' },
  processHeading: { en: 'A defined path for every project', od: 'ପ୍ରତ୍ୟେକ ପ୍ରକଳ୍ପ ପାଇଁ ଏକ ନିର୍ଦ୍ଦିଷ୍ଟ ପଥ' },
  teamEyebrow: { en: 'Our team', od: 'ଆମ ଦଳ' },
  teamHeading: { en: 'People behind your plant', od: 'ଆପଣଙ୍କ ପ୍ଲାଣ୍ଟ ପଛରେ ଥିବା ଲୋକ' },
  teamNote: {
    en: 'Role titles shown below; individual names to be added on client confirmation.',
    od: 'ତଳେ ଦେଖାଯାଇଥିବା ପଦବୀ; ବ୍ୟକ୍ତିଗତ ନାମ ଗ୍ରାହକଙ୍କ ନିଶ୍ଚିତିକରଣ ପରେ ଯୋଡ଼ାଯିବ।'
  },
  team: [
    { initials: 'PH', name: { en: 'Project Head', od: 'ପ୍ରକଳ୍ପ ମୁଖ୍ୟ' }, role: { en: 'Solar EPC & Design', od: 'ସୌର EPC ଓ ଡିଜାଇନ' } },
    { initials: 'SE', name: { en: 'Senior Engineer', od: 'ବରିଷ୍ଠ ଇଞ୍ଜିନିୟର' }, role: { en: 'MNRE-Certified Installer', od: 'MNRE-ପ୍ରମାଣିତ ସ୍ଥାପନକାରୀ' } },
    { initials: 'OM', name: { en: 'Operations Manager', od: 'ପରିଚାଳନା ପରିଚାଳକ' }, role: { en: 'Subsidy & DISCOM Liaison', od: 'ସବସିଡି ଓ DISCOM ସମନ୍ୱୟ' } },
    { initials: 'SL', name: { en: 'Service Lead', od: 'ସେବା ମୁଖ୍ୟ' }, role: { en: 'Maintenance & Support', od: 'ରକ୍ଷଣାବେକ୍ଷଣ ଓ ସହାୟତା' } }
  ],
  aboutWho2: {
    en: 'Padma Solar Services is an Odisha-based company. Site survey, system design, equipment supply, installation, PM Surya Ghar subsidy application, net-metering with your DISCOM and years of maintenance afterwards — we take full responsibility. Our service teams speak Odia.',
    od: 'ପଦ୍ମ ସୋଲାର ସର୍ଭିସେସ ଏକ ଓଡ଼ିଶା-ଭିତ୍ତିକ ପ୍ରତିଷ୍ଠାନ। ସ୍ଥାନ ସର୍ଭେ, ସିଷ୍ଟମ ଡିଜାଇନ, ଯନ୍ତ୍ରପାତି ଯୋଗାଣ, ସ୍ଥାପନ, ପିଏମ ସୂର୍ଯ୍ୟ ଘର ସବସିଡି ଆବେଦନ, DISCOM ସହ ନେଟ୍-ମିଟରିଂ ଏବଂ ପରବର୍ତ୍ତୀ ବର୍ଷମାନଙ୍କର ରକ୍ଷଣାବେକ୍ଷଣ — ସମ୍ପୂର୍ଣ୍ଣ ଦାୟିତ୍ୱ ଆମେ ନେଉ। ଆମ ସେବା ଦଳ ଓଡ଼ିଆରେ କଥାବାର୍ତ୍ତା କରନ୍ତି।'
  }
}

export const contactPage = {
  heading: { en: 'Reach Padma Solar Services', od: 'ପଦ୍ମ ସୋଲାର ସର୍ଭିସେସ ସହ ଯୋଗାଯୋଗ' },
  intro: {
    en: 'Our team responds to enquiries within one working day. All details below are placeholders pending client confirmation.',
    od: 'ଆମ ଦଳ ଏକ କାର୍ଯ୍ୟ ଦିବସ ମଧ୍ୟରେ ଅନୁସନ୍ଧାନର ଉତ୍ତର ଦିଏ। ତଳେ ଥିବା ସମସ୍ତ ବିବରଣୀ ଗ୍ରାହକଙ୍କ ନିଶ୍ଚିତିକରଣ ପର୍ଯ୍ୟନ୍ତ ପ୍ଲେସହୋଲ୍ଡର।'
  },
  phone: { en: 'Phone', od: 'ଫୋନ' },
  tollFree: { en: 'Toll free', od: 'ଟୋଲ ଫ୍ରି' },
  email: { en: 'Email', od: 'ଇମେଲ' },
  office: { en: 'Office', od: 'କାର୍ଯ୍ୟାଳୟ' },
  workingHours: { en: 'Working Hours', od: 'କାର୍ଯ୍ୟ ସମୟ' },
  formHeading: { en: 'Book a free survey', od: 'ମାଗଣା ସର୍ଭେ ବୁକ୍ କରନ୍ତୁ' },
  f: {
    name: { en: 'Full name', od: 'ପୂର୍ଣ୍ଣ ନାମ' },
    phone: { en: 'Mobile number', od: 'ମୋବାଇଲ ନମ୍ବର' },
    email: { en: 'Email', od: 'ଇମେଲ' },
    district: { en: 'District / Town', od: 'ଜିଲ୍ଲା / ସହର' },
    bill: { en: 'Avg. monthly bill (₹)', od: 'ହାରାହାରି ମାସିକ ବିଲ (₹)' },
    interest: { en: 'I am interested in', od: 'ମୁଁ ଆଗ୍ରହୀ' },
    message: { en: 'Message', od: 'ବାର୍ତ୍ତା' },
    submit: { en: 'Submit enquiry', od: 'ଅନୁସନ୍ଧାନ ଦାଖଲ କରନ୍ତୁ' },
    required: { en: 'Required', od: 'ଆବଶ୍ୟକ' }
  },
  interestOptions: [
    { en: 'Residential Rooftop Solar', od: 'ଘରୋଇ ଛାତ ସୌର' },
    { en: 'Commercial & Industrial Solar', od: 'ବାଣିଜ୍ୟିକ ଓ ଶିଳ୍ପ ସୌର' },
    { en: 'Government / Institutional Project', od: 'ସରକାରୀ / ପ୍ରାତିଷ୍ଠାନିକ ପ୍ରକଳ୍ପ' },
    { en: 'Solar Products / AMC', od: 'ସୌର ଉତ୍ପାଦ / AMC' }
  ],
  success: {
    en: 'Thank you. Your enquiry has been recorded. Our team will call you within one working day.',
    od: 'ଧନ୍ୟବାଦ। ଆପଣଙ୍କ ଅନୁସନ୍ଧାନ ରେକର୍ଡ ହୋଇଛି। ଆମ ଦଳ ଏକ କାର୍ଯ୍ୟ ଦିବସ ମଧ୍ୟରେ ଆପଣଙ୍କୁ ଫୋନ କରିବେ।'
  },
  formNote: {
    en: 'This demo form does not send data anywhere. Connect it to email or a CRM before going live.',
    od: 'ଏହି ଡେମୋ ଫର୍ମ କୌଣସି ସ୍ଥାନକୁ ଡାଟା ପଠାଏ ନାହିଁ। ଲଞ୍ଚ ପୂର୍ବରୁ ଏହାକୁ ଇମେଲ କିମ୍ବା CRM ସହ ଯୋଡ଼ନ୍ତୁ।'
  },
  mapNote: {
    en: 'Map shows an approximate Berhampur area view. Replace with the exact office location.',
    od: 'ମାନଚିତ୍ର ଏକ ଆନୁମାନିକ ବ୍ରହ୍ମପୁର ଅଞ୍ଚଳ ଦେଖାଏ। ସଠିକ କାର୍ଯ୍ୟାଳୟ ସ୍ଥାନ ସହ ବଦଳାନ୍ତୁ।'
  }
}

export const notFound = {
  title: { en: 'Page not found', od: 'ପୃଷ୍ଠା ମିଳିଲା ନାହିଁ' },
  subtitle: {
    en: 'The page you requested does not exist or has moved.',
    od: 'ଆପଣ ଚାହିଁଥିବା ପୃଷ୍ଠା ନାହିଁ କିମ୍ବା ସ୍ଥାନାନ୍ତରିତ ହୋଇଛି।'
  },
  tryThese: { en: 'Try one of these instead:', od: 'ଏହା ପରିବର୍ତ୍ତେ ଏଥିରୁ ଗୋଟିଏ ଚେଷ୍ଟା କରନ୍ତୁ:' },
  goHome: { en: 'Go to Home', od: 'ମୂଳପୃଷ୍ଠାକୁ ଯାଆନ୍ତୁ' }
}

export const pageMeta = {
  about: {
    title: { en: 'About Padma Solar Services', od: 'ପଦ୍ମ ସୋଲାର ସର୍ଭିସେସ ବିଷୟରେ' },
    subtitle: {
      en: 'A locally rooted solar EPC and service company helping Odisha move to clean, self-generated power.',
      od: 'ଓଡ଼ିଶାକୁ ସ୍ୱଚ୍ଛ, ନିଜସ୍ୱ ଉତ୍ପାଦିତ ବିଦ୍ୟୁତ୍ ଆଡକୁ ନେବାରେ ସହାୟତା କରୁଥିବା ଏକ ସ୍ଥାନୀୟ ସୌର EPC ଓ ସେବା ପ୍ରତିଷ୍ଠାନ।'
    },
    crumb: { en: 'About Us', od: 'ଆମ ବିଷୟରେ' }
  },
  services: {
    title: { en: 'Our Services', od: 'ଆମର ସେବା' },
    subtitle: {
      en: 'Turnkey solar solutions for homes, businesses and public institutions across Odisha.',
      od: 'ଓଡ଼ିଶାର ଘର, ବ୍ୟବସାୟ ଓ ସରକାରୀ ପ୍ରତିଷ୍ଠାନ ପାଇଁ ସମ୍ପୂର୍ଣ୍ଣ ସୌର ସମାଧାନ।'
    },
    crumb: { en: 'Services', od: 'ସେବା' }
  },
  projects: {
    title: { en: 'Projects', od: 'ପ୍ରକଳ୍ପ' },
    subtitle: {
      en: 'A sample of rooftop and ground-mount systems commissioned by Padma Solar Services.',
      od: 'ପଦ୍ମ ସୋଲାର ସର୍ଭିସେସ ଦ୍ୱାରା ସ୍ଥାପିତ କିଛି ଛାତ ଉପର ଓ ଭୂମି-ମାଉଣ୍ଟ ସିଷ୍ଟମର ଉଦାହରଣ।'
    },
    crumb: { en: 'Projects', od: 'ପ୍ରକଳ୍ପ' }
  },
  faqs: {
    title: { en: 'Frequently Asked Questions', od: 'ସାଧାରଣ ପ୍ରଶ୍ନ' },
    subtitle: {
      en: 'Answers to the questions we hear most often about rooftop solar, subsidy and net-metering.',
      od: 'ଛାତ ଉପର ସୌର, ସବସିଡି ଓ ନେଟ୍-ମିଟରିଂ ସମ୍ପର୍କରେ ସର୍ବାଧିକ ପଚରାଯାଉଥିବା ପ୍ରଶ୍ନର ଉତ୍ତର।'
    },
    crumb: { en: 'FAQs', od: 'ସାଧାରଣ ପ୍ରଶ୍ନ' }
  },
  contact: {
    title: { en: 'Contact Us', od: 'ଆମ ସହ ଯୋଗାଯୋଗ କରନ୍ତୁ' },
    subtitle: {
      en: 'Request a free site survey or ask us anything about rooftop solar and the PM Surya Ghar subsidy.',
      od: 'ମାଗଣା ସ୍ଥାନ ସର୍ଭେ ପାଇଁ ଅନୁରୋଧ କରନ୍ତୁ କିମ୍ବା ଛାତ ଉପର ସୌର ଓ ପିଏମ ସୂର୍ଯ୍ୟ ଘର ସବସିଡି ବିଷୟରେ ଆମକୁ ପଚାରନ୍ତୁ।'
    },
    crumb: { en: 'Contact Us', od: 'ଯୋଗାଯୋଗ' }
  }
}

export const quickLinks = [
  { href: 'https://www.pmsuryaghar.gov.in/', label: { en: 'PM Surya Ghar National Portal', od: 'ପିଏମ ସୂର୍ଯ୍ୟ ଘର ନ୍ୟାସନାଲ ପୋର୍ଟାଲ' } },
  { href: 'https://mnre.gov.in/', label: { en: 'Ministry of New & Renewable Energy', od: 'ନୂତନ ଓ ନବୀକରଣୀୟ ଶକ୍ତି ମନ୍ତ୍ରଣାଳୟ' } },
  { href: 'https://www.india.gov.in/', label: { en: 'National Portal of India', od: 'ଭାରତର ନ୍ୟାସନାଲ ପୋର୍ଟାଲ' } },
  { href: '#', label: { en: 'TPCODL (Odisha DISCOM)', od: 'TPCODL (ଓଡ଼ିଶା DISCOM)' } }
]
