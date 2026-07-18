// Single source of truth: Google Ads copy + landing-page copy, matched 1:1 per path.
const adLandingMap = [
  {
    path: "/bilingual-staffing",
    campaign: "Bilingual Staffing",
    adGroup: "Bilingual Staffing Agency",
    primaryKeyword: "bilingual staffing agency",
    secondaryKeywords: [
      "hire bilingual staff",
      "LATAM staffing agency",
      "remote bilingual talent agency",
      "bilingual recruiting agency"
    ],
    exactMatchKeywords: [
      "[bilingual staffing agency]",
      "[hire bilingual staff]",
      "[LATAM staffing agency]"
    ],
    phraseMatchKeywords: [
      "\"bilingual staffing agency\"",
      "\"hire bilingual staff\"",
      "\"LATAM staffing agency\""
    ],
    googleAdsHeadlines: [
      "Bilingual Staffing Agency",
      "Hire Bilingual Agents",
      "LATAM Bilingual Talent",
      "Starting at $1,497",
      "Book Your Free 15-Min Call",
      "7-Day Placement Guarantee",
      "Psychologist-Screened Talent",
      "No Middleman, No Contracts",
      "You Own The Hire Day 1",
      "Top Bilingual Staffing Agency",
      "Your Bilingual Staffing Agency",
      "Save vs US Staffing Costs",
      "Vetted LATAM Bilingual Talent"
    ],
    googleAdsDescriptions: [
      "Hire vetted, psychologist-screened bilingual agents from LATAM. Working by day 7.",
      "Flat fee starting at $1,497. No middleman, no long contracts. You own the hire.",
      "Book a free 15-minute call and see vetted bilingual candidates this week.",
      "45-day free replacement on every placement. No recruiting headaches, ever."
    ],
    landingPage: {
      seoTitle: "Bilingual Staffing Agency for LATAM Talent | Bilingual Agents",
      seoDescription: "Bilingual Agents is a bilingual staffing agency placing vetted LATAM talent from $1,497. Working by day 7. Book a free 15-min call.",
      eyebrow: { en: "For US businesses hiring bilingual talent", es: "Para empresas en EE.UU. que contratan talento bilingue" },
      headline: { en: "Bilingual Staffing Agency <span class=\"serif-i accent\">for LATAM Talent</span>", es: "Agencia de Personal Bilingue <span class=\"serif-i accent\">de Talento LATAM</span>" },
      subheadline: { en: "Vetted, psychologist-screened bilingual agents from Latin America, working by day 7, starting at <strong>$1,497</strong>. You employ them directly. No middleman, no long contracts.", es: "Agentes bilingues de Latinoamerica, evaluados por psicologos, trabajando desde el dia 7, desde <strong>$1,497</strong>. Los contratas directamente. Sin intermediarios ni contratos largos." },
      primaryCta: { en: "Book Your Free 15-Min Call", es: "Agenda tu llamada gratis de 15 min" },
      formTitle: { en: "Build your bilingual staffing pipeline", es: "Arma tu equipo de personal bilingue" },
      secondaryCtaText: "No contracts · You own the hire day 1",
      bullets: ["Working by day 7", "Psychologist-screened", "From $1,497 one-time", "45-day free replacement"],
      formSubtitle: "A human replies within one business day. No spam.",
      roleExamples: ["Bilingual customer service agent", "Bilingual sales agent", "Bilingual virtual assistant"]
    }
  },
  {
    path: "/hire-bilingual-agents",
    campaign: "Hire Bilingual Agents",
    adGroup: "Hire Bilingual Agents",
    primaryKeyword: "hire bilingual agents",
    secondaryKeywords: [
      "bilingual remote agents",
      "LATAM bilingual agents",
      "hire remote bilingual staff",
      "bilingual agents for hire"
    ],
    exactMatchKeywords: [
      "[hire bilingual agents]",
      "[bilingual remote agents]",
      "[LATAM bilingual agents]"
    ],
    phraseMatchKeywords: [
      "\"hire bilingual agents\"",
      "\"bilingual remote agents\"",
      "\"LATAM bilingual agents\""
    ],
    googleAdsHeadlines: [
      "Hire Bilingual Agents",
      "Hire Agents From LATAM",
      "Starting at $1,497",
      "7-Day Placement Guarantee",
      "Book Your Free 15-Min Call",
      "Pre-Vetted Bilingual Talent",
      "Psychologist-Screened Agents",
      "Save vs US Staffing Costs",
      "Hire Bilingual Agents Today",
      "Hire Bilingual Agents Fast",
      "No Middleman, No Contracts"
    ],
    googleAdsDescriptions: [
      "Hire bilingual agents from LATAM, vetted and working by day 7, from $1,497.",
      "Skip the recruiting grind. Pre-vetted, psychologist-screened candidates only.",
      "You employ the agent directly. No middleman, no long-term contracts.",
      "Book a free 15-minute call and start hiring bilingual agents this week."
    ],
    landingPage: {
      seoTitle: "Hire Bilingual Agents From LATAM in 7 Days | Bilingual Agents",
      seoDescription: "Hire bilingual agents from Latin America, vetted and working by day 7, starting at $1,497. Book a free 15-min call.",
      eyebrow: { en: "For US businesses hiring remote talent", es: "Para empresas en EE.UU. que contratan talento remoto" },
      headline: { en: "Hire Bilingual Agents From LATAM <span class=\"serif-i accent\">in 7 Days</span>", es: "Contrata Agentes Bilingues de LATAM <span class=\"serif-i accent\">en 7 Dias</span>" },
      subheadline: { en: "Vetted, psychologist-screened bilingual agents from Latin America, working by day 7, starting at <strong>$1,497</strong>. You employ them directly, with no middleman.", es: "Agentes bilingues de Latinoamerica, evaluados por psicologos, trabajando desde el dia 7, desde <strong>$1,497</strong>. Los contratas directamente, sin intermediarios." },
      primaryCta: { en: "Book Your Free 15-Min Call", es: "Agenda tu llamada gratis de 15 min" },
      formTitle: { en: "Hire your first bilingual agent", es: "Contrata tu primer agente bilingue" },
      secondaryCtaText: "No contracts · You own the hire day 1",
      bullets: ["Working by day 7", "Psychologist-screened", "From $1,497 one-time", "45-day free replacement"],
      formSubtitle: "A human replies within one business day. No spam.",
      roleExamples: ["Bilingual customer service agent", "Bilingual sales agent", "Bilingual support agent"]
    }
  },
  {
    path: "/home-services/bilingual-dispatcher",
    campaign: "Home Services",
    adGroup: "Bilingual Dispatcher",
    primaryKeyword: "bilingual dispatcher",
    secondaryKeywords: [
      "home services dispatcher",
      "HVAC dispatcher",
      "plumbing dispatcher",
      "roofing dispatcher",
      "Spanish speaking dispatcher"
    ],
    exactMatchKeywords: [
      "[bilingual dispatcher]",
      "[HVAC dispatcher]",
      "[Spanish speaking dispatcher]"
    ],
    phraseMatchKeywords: [
      "\"bilingual dispatcher\"",
      "\"HVAC dispatcher\"",
      "\"Spanish speaking dispatcher\""
    ],
    googleAdsHeadlines: [
      "Hire a Bilingual Dispatcher",
      "Bilingual Dispatchers",
      "Home Service Dispatch Help",
      "HVAC Dispatch Support",
      "Book Your Free 15-Min Call",
      "Starting at $1,497",
      "LATAM Dispatch Talent",
      "7-Day Placement Guarantee",
      "Stop Missing Service Calls",
      "Bilingual Dispatcher Ready",
      "A Bilingual Dispatcher Fast"
    ],
    googleAdsDescriptions: [
      "Stop missing calls. Hire a bilingual dispatcher, vetted and working by day 7.",
      "Handle HVAC, plumbing, and roofing dispatch in English and Spanish.",
      "Flat fee starting at $1,497. No middleman, no long contracts.",
      "Book a free 15-minute call and fill your dispatch seat this week."
    ],
    landingPage: {
      seoTitle: "Hire a Bilingual Dispatcher for Home Services | Bilingual Agents",
      seoDescription: "Hire a bilingual dispatcher for HVAC, plumbing, or roofing. Vetted, working by day 7, from $1,497. Book a free call.",
      eyebrow: { en: "For HVAC, plumbing, and roofing companies", es: "Para empresas de HVAC, plomeria y techado" },
      headline: { en: "Hire a Bilingual Dispatcher <span class=\"serif-i accent\">for Your Home Service Business</span>", es: "Contrata un Despachador Bilingue <span class=\"serif-i accent\">para tu Negocio de Servicios</span>" },
      subheadline: { en: "Stop missing calls during your busy season. A vetted, psychologist-screened bilingual dispatcher, working by day 7, from <strong>$1,497</strong>. You employ them directly.", es: "Deja de perder llamadas en temporada alta. Un despachador bilingue evaluado por psicologos, trabajando desde el dia 7, desde <strong>$1,497</strong>. Lo contratas directamente." },
      primaryCta: { en: "Book Your Free 15-Min Call", es: "Agenda tu llamada gratis de 15 min" },
      formTitle: { en: "Hire your bilingual dispatcher", es: "Contrata tu despachador bilingue" },
      secondaryCtaText: "No contracts · You own the hire day 1",
      bullets: ["Working by day 7", "Psychologist-screened", "From $1,497 one-time", "45-day free replacement"],
      formSubtitle: "A human replies within one business day. No spam.",
      roleExamples: ["HVAC dispatcher", "Plumbing dispatcher", "Roofing dispatcher"]
    }
  },
  {
    path: "/home-services/bilingual-customer-service",
    campaign: "Home Services",
    adGroup: "Bilingual Customer Service",
    primaryKeyword: "bilingual customer service for contractors",
    secondaryKeywords: [
      "bilingual customer service for HVAC",
      "Spanish speaking customer service agent",
      "home services customer support"
    ],
    exactMatchKeywords: [
      "[bilingual customer service for contractors]",
      "[Spanish speaking customer service agent]",
      "[home services customer support]"
    ],
    phraseMatchKeywords: [
      "\"bilingual customer service for contractors\"",
      "\"Spanish speaking customer service agent\"",
      "\"home services customer support\""
    ],
    googleAdsHeadlines: [
      "Bilingual Customer Service",
      "Customer Service For Contractors",
      "Spanish Speaking Support",
      "Stop Missing Service Calls",
      "Book Your Free 15-Min Call",
      "Starting at $1,497",
      "Hire LATAM Support Agents",
      "7-Day Placement Guarantee",
      "Bilingual Customer Service For Contractors",
      "Hire Bilingual Customer Service For Contractors",
      "Bilingual Customer Service For Contractors Now"
    ],
    googleAdsDescriptions: [
      "Bilingual customer service for contractors, vetted and working by day 7.",
      "Cover English and Spanish speaking customers without hiring in-house.",
      "Flat fee starting at $1,497. No middleman, no long contracts.",
      "Book a free 15-minute call and staff your support line this week."
    ],
    landingPage: {
      seoTitle: "Bilingual Customer Service for Contractors | Bilingual Agents",
      seoDescription: "Bilingual customer service for contractors, vetted and working by day 7, from $1,497. Book a free 15-min call.",
      eyebrow: { en: "For home service and contracting businesses", es: "Para negocios de servicios y contratistas" },
      headline: { en: "Bilingual Customer Service Agents <span class=\"serif-i accent\">for Contractors</span>", es: "Agentes de Servicio al Cliente Bilingues <span class=\"serif-i accent\">para Contratistas</span>" },
      subheadline: { en: "Stop missing service calls from Spanish speaking customers. A vetted bilingual customer service agent, working by day 7, from <strong>$1,497</strong>. You employ them directly.", es: "Deja de perder llamadas de clientes de habla hispana. Un agente de servicio al cliente bilingue, trabajando desde el dia 7, desde <strong>$1,497</strong>. Lo contratas directamente." },
      primaryCta: { en: "Book Your Free 15-Min Call", es: "Agenda tu llamada gratis de 15 min" },
      formTitle: { en: "Hire your bilingual customer service agent", es: "Contrata tu agente de servicio al cliente bilingue" },
      secondaryCtaText: "No contracts · You own the hire day 1",
      bullets: ["Working by day 7", "Psychologist-screened", "From $1,497 one-time", "45-day free replacement"],
      formSubtitle: "A human replies within one business day. No spam.",
      roleExamples: ["Bilingual customer service rep", "Spanish speaking support agent", "Contractor call handler"]
    }
  },
  {
    path: "/home-services/appointment-setter",
    campaign: "Home Services",
    adGroup: "Bilingual Appointment Setter",
    primaryKeyword: "bilingual appointment setter",
    secondaryKeywords: [
      "appointment setter for contractors",
      "home services appointment setter",
      "Spanish speaking appointment setter"
    ],
    exactMatchKeywords: [
      "[bilingual appointment setter]",
      "[appointment setter for contractors]",
      "[Spanish speaking appointment setter]"
    ],
    phraseMatchKeywords: [
      "\"bilingual appointment setter\"",
      "\"appointment setter for contractors\"",
      "\"Spanish speaking appointment setter\""
    ],
    googleAdsHeadlines: [
      "Hire Bilingual Appointment Setters",
      "Book More Service Jobs",
      "Home Service Appointment Setter",
      "Spanish Speaking Setter",
      "Starting at $1,497",
      "Book Your Free 15-Min Call",
      "7-Day Placement Guarantee",
      "Bilingual Appointment Setter",
      "A Bilingual Appointment Setter"
    ],
    googleAdsDescriptions: [
      "Hire a bilingual appointment setter, vetted and working by day 7.",
      "Book more service jobs in English and Spanish, without the hiring hassle.",
      "Flat fee starting at $1,497. No middleman, no long contracts.",
      "Book a free 15-minute call and fill your setter seat this week."
    ],
    landingPage: {
      seoTitle: "Hire a Bilingual Appointment Setter | Bilingual Agents",
      seoDescription: "Hire a bilingual appointment setter for home services, vetted and working by day 7, from $1,497. Book a free call.",
      eyebrow: { en: "For home service and contracting businesses", es: "Para negocios de servicios y contratistas" },
      headline: { en: "Hire a Bilingual Appointment Setter <span class=\"serif-i accent\">for Home Services</span>", es: "Contrata un Agendador Bilingue <span class=\"serif-i accent\">para Servicios del Hogar</span>" },
      subheadline: { en: "Book more jobs from English and Spanish speaking leads. A vetted bilingual appointment setter, working by day 7, from <strong>$1,497</strong>. You employ them directly.", es: "Agenda mas trabajos de clientes que hablan ingles y espanol. Un agendador bilingue evaluado, trabajando desde el dia 7, desde <strong>$1,497</strong>. Lo contratas directamente." },
      primaryCta: { en: "Book Your Free 15-Min Call", es: "Agenda tu llamada gratis de 15 min" },
      formTitle: { en: "Hire your bilingual appointment setter", es: "Contrata tu agendador bilingue" },
      secondaryCtaText: "No contracts · You own the hire day 1",
      bullets: ["Working by day 7", "Psychologist-screened", "From $1,497 one-time", "45-day free replacement"],
      formSubtitle: "A human replies within one business day. No spam.",
      roleExamples: ["Appointment setter", "Inbound lead follow-up", "Spanish speaking scheduler"]
    }
  },
  {
    path: "/property-management/bilingual-assistant",
    campaign: "Property Management",
    adGroup: "Bilingual PM Assistant",
    primaryKeyword: "bilingual property management assistant",
    secondaryKeywords: [
      "property management virtual assistant",
      "remote property management assistant",
      "Spanish speaking property assistant"
    ],
    exactMatchKeywords: [
      "[bilingual property management assistant]",
      "[property management virtual assistant]",
      "[Spanish speaking property assistant]"
    ],
    phraseMatchKeywords: [
      "\"bilingual property management assistant\"",
      "\"property management virtual assistant\"",
      "\"Spanish speaking property assistant\""
    ],
    googleAdsHeadlines: [
      "Bilingual Property Assistant",
      "Property Management Assistant",
      "Hire LATAM PM Support",
      "Tenant Support Help",
      "Starting at $1,497",
      "Book Your Free 15-Min Call",
      "7-Day Placement Guarantee",
      "Bilingual Property Management Assistant",
      "Hire a Bilingual PM Assistant Now",
      "Bilingual Property Management Assistants",
      "Your Bilingual Property Management Assistant"
    ],
    googleAdsDescriptions: [
      "Hire a bilingual property management assistant, working by day 7.",
      "Handle tenant calls and leasing tasks in English and Spanish.",
      "Flat fee starting at $1,497. No middleman, no long contracts.",
      "Book a free 15-minute call and staff your PM office this week."
    ],
    landingPage: {
      seoTitle: "Hire a Bilingual Property Management Assistant | Bilingual Agents",
      seoDescription: "Hire a bilingual property management assistant, vetted and working by day 7, from $1,497. Book a free 15-min call.",
      eyebrow: { en: "For property management companies", es: "Para empresas de administracion de propiedades" },
      headline: { en: "Hire a Bilingual Property Management Assistant", es: "Contrata un Asistente Bilingue de Administracion de Propiedades" },
      subheadline: { en: "Handle tenant calls, leasing tasks, and maintenance requests in English and Spanish. A vetted bilingual property management assistant, working by day 7, from <strong>$1,497</strong>.", es: "Atiende llamadas de inquilinos, tareas de arrendamiento y solicitudes de mantenimiento en ingles y espanol. Un asistente bilingue evaluado, trabajando desde el dia 7, desde <strong>$1,497</strong>." },
      primaryCta: { en: "Book Your Free 15-Min Call", es: "Agenda tu llamada gratis de 15 min" },
      formTitle: { en: "Hire your bilingual PM assistant", es: "Contrata tu asistente bilingue de propiedades" },
      secondaryCtaText: "No contracts · You own the hire day 1",
      bullets: ["Working by day 7", "Psychologist-screened", "From $1,497 one-time", "45-day free replacement"],
      formSubtitle: "A human replies within one business day. No spam.",
      roleExamples: ["Property management assistant", "Leasing support", "Tenant services assistant"]
    }
  },
  {
    path: "/property-management/leasing-assistant",
    campaign: "Property Management",
    adGroup: "Bilingual Leasing Assistant",
    primaryKeyword: "bilingual leasing assistant",
    secondaryKeywords: [
      "Spanish speaking leasing assistant",
      "leasing follow-up assistant",
      "remote leasing assistant"
    ],
    exactMatchKeywords: [
      "[bilingual leasing assistant]",
      "[Spanish speaking leasing assistant]",
      "[remote leasing assistant]"
    ],
    phraseMatchKeywords: [
      "\"bilingual leasing assistant\"",
      "\"Spanish speaking leasing assistant\"",
      "\"remote leasing assistant\""
    ],
    googleAdsHeadlines: [
      "Hire a Bilingual Leasing Assistant",
      "Bilingual Leasing Support",
      "Leasing Follow-Up Help",
      "Spanish Speaking Leasing Help",
      "Starting at $1,497",
      "Book Your Free 15-Min Call",
      "7-Day Placement Guarantee",
      "Bilingual Leasing Assistant",
      "A Bilingual Leasing Assistant"
    ],
    googleAdsDescriptions: [
      "Hire a bilingual leasing assistant, vetted and working by day 7.",
      "Follow up leads and applications in English and Spanish, fast.",
      "Flat fee starting at $1,497. No middleman, no long contracts.",
      "Book a free 15-minute call and fill your leasing seat this week."
    ],
    landingPage: {
      seoTitle: "Hire a Bilingual Leasing Assistant From LATAM | Bilingual Agents",
      seoDescription: "Hire a bilingual leasing assistant, vetted and working by day 7, from $1,497. Book a free 15-min call today.",
      eyebrow: { en: "For property management and leasing teams", es: "Para equipos de administracion y arrendamiento" },
      headline: { en: "Hire a Bilingual Leasing Assistant <span class=\"serif-i accent\">From LATAM</span>", es: "Contrata un Asistente de Arrendamiento Bilingue <span class=\"serif-i accent\">de LATAM</span>" },
      subheadline: { en: "Follow up every lead and application in English and Spanish. A vetted bilingual leasing assistant, working by day 7, from <strong>$1,497</strong>. You employ them directly.", es: "Da seguimiento a cada contacto y solicitud en ingles y espanol. Un asistente de arrendamiento bilingue evaluado, trabajando desde el dia 7, desde <strong>$1,497</strong>. Lo contratas directamente." },
      primaryCta: { en: "Book Your Free 15-Min Call", es: "Agenda tu llamada gratis de 15 min" },
      formTitle: { en: "Hire your bilingual leasing assistant", es: "Contrata tu asistente de arrendamiento bilingue" },
      secondaryCtaText: "No contracts · You own the hire day 1",
      bullets: ["Working by day 7", "Psychologist-screened", "From $1,497 one-time", "45-day free replacement"],
      formSubtitle: "A human replies within one business day. No spam.",
      roleExamples: ["Leasing assistant", "Applicant follow-up specialist", "Leasing coordinator"]
    }
  },
  {
    path: "/property-management/tenant-support",
    campaign: "Property Management",
    adGroup: "Bilingual Tenant Support",
    primaryKeyword: "Spanish speaking tenant support",
    secondaryKeywords: [
      "bilingual tenant support",
      "resident support assistant",
      "maintenance coordination assistant"
    ],
    exactMatchKeywords: [
      "[Spanish speaking tenant support]",
      "[bilingual tenant support]",
      "[resident support assistant]"
    ],
    phraseMatchKeywords: [
      "\"Spanish speaking tenant support\"",
      "\"bilingual tenant support\"",
      "\"resident support assistant\""
    ],
    googleAdsHeadlines: [
      "Spanish Speaking Tenant Support",
      "Bilingual Tenant Support",
      "Resident Support Assistants",
      "Maintenance Coordination Help",
      "Starting at $1,497",
      "Book Your Free 15-Min Call",
      "7-Day Placement Guarantee",
      "Hire Spanish Speaking Tenant Support",
      "Top Spanish Speaking Tenant Support"
    ],
    googleAdsDescriptions: [
      "Spanish speaking tenant support, vetted and working by day 7.",
      "Handle resident calls and maintenance requests in two languages.",
      "Flat fee starting at $1,497. No middleman, no long contracts.",
      "Book a free 15-minute call and staff your tenant line this week."
    ],
    landingPage: {
      seoTitle: "Spanish Speaking Tenant Support for Property Managers | Bilingual Agents",
      seoDescription: "Spanish speaking tenant support, vetted and working by day 7, from $1,497, without US staffing costs. Book a free call.",
      eyebrow: { en: "For property management companies", es: "Para empresas de administracion de propiedades" },
      headline: { en: "Spanish Speaking Tenant Support <span class=\"serif-i accent\">Without US Staffing Costs</span>", es: "Soporte Bilingue para Inquilinos <span class=\"serif-i accent\">sin Costos de Personal en EE.UU.</span>" },
      subheadline: { en: "Give every tenant Spanish speaking support without the US hiring cost. A vetted resident support assistant, working by day 7, from <strong>$1,497</strong>. You employ them directly.", es: "Ofrece soporte en espanol a cada inquilino sin el costo de contratar en EE.UU. Un asistente de soporte residencial evaluado, trabajando desde el dia 7, desde <strong>$1,497</strong>." },
      primaryCta: { en: "Book Your Free 15-Min Call", es: "Agenda tu llamada gratis de 15 min" },
      formTitle: { en: "Hire your Spanish speaking tenant support", es: "Contrata tu soporte bilingue para inquilinos" },
      secondaryCtaText: "No contracts · You own the hire day 1",
      bullets: ["Working by day 7", "Psychologist-screened", "From $1,497 one-time", "45-day free replacement"],
      formSubtitle: "A human replies within one business day. No spam.",
      roleExamples: ["Resident support assistant", "Maintenance coordination assistant", "Tenant services rep"]
    }
  },
  {
    path: "/insurance/bilingual-csr",
    campaign: "Insurance",
    adGroup: "Bilingual Insurance CSR",
    primaryKeyword: "bilingual insurance CSR",
    secondaryKeywords: [
      "Spanish speaking insurance CSR",
      "insurance customer service representative",
      "bilingual insurance customer service"
    ],
    exactMatchKeywords: [
      "[bilingual insurance csr]",
      "[Spanish speaking insurance csr]",
      "[insurance customer service representative]"
    ],
    phraseMatchKeywords: [
      "\"bilingual insurance csr\"",
      "\"Spanish speaking insurance csr\"",
      "\"insurance customer service representative\""
    ],
    googleAdsHeadlines: [
      "Hire a Bilingual Insurance CSR",
      "Bilingual Insurance CSR",
      "Spanish Speaking Insurance Help",
      "Insurance Customer Support",
      "Starting at $1,497",
      "Book Your Free 15-Min Call",
      "7-Day Placement Guarantee",
      "Your Bilingual Insurance CSR"
    ],
    googleAdsDescriptions: [
      "Hire a bilingual insurance CSR, vetted and working by day 7.",
      "Handle policy service calls in English and Spanish, day one.",
      "Flat fee starting at $1,497. No middleman, no long contracts.",
      "Book a free 15-minute call and fill your CSR seat this week."
    ],
    landingPage: {
      seoTitle: "Hire a Bilingual Insurance CSR From LATAM | Bilingual Agents",
      seoDescription: "Hire a bilingual insurance CSR, vetted and working by day 7, from $1,497. Book a free 15-min call.",
      eyebrow: { en: "For insurance agencies · property, casualty, life, health", es: "Para agencias de seguros · propiedad, responsabilidad civil, vida, salud" },
      headline: { en: "Hire a Bilingual Insurance CSR <span class=\"serif-i accent\">From LATAM</span>", es: "Contrata un CSR de Seguros Bilingue <span class=\"serif-i accent\">de LATAM</span>" },
      subheadline: { en: "Vetted, psychologist-screened bilingual insurance CSRs from Latin America, working by day 7, from <strong>$1,497</strong>. You employ them directly. 45-day free replacement.", es: "CSR de seguros bilingues de Latinoamerica, evaluados por psicologos, trabajando desde el dia 7, desde <strong>$1,497</strong>. Los contratas directamente. Reemplazo gratis por 45 dias." },
      primaryCta: { en: "Book Your Free 15-Min Call", es: "Agenda tu llamada gratis de 15 min" },
      formTitle: { en: "Hire your bilingual insurance CSR", es: "Contrata tu CSR de seguros bilingue" },
      secondaryCtaText: "No contracts · You own the hire day 1",
      bullets: ["Working by day 7", "Psychologist-screened", "From $1,497 one-time", "45-day free replacement"],
      formSubtitle: "A human replies within one business day. No spam.",
      roleExamples: ["Insurance CSR", "Spanish speaking insurance support", "Policy service rep"]
    }
  },
  {
    path: "/insurance/insurance-assistant",
    campaign: "Insurance",
    adGroup: "Bilingual Insurance Assistant",
    primaryKeyword: "bilingual insurance assistant",
    secondaryKeywords: [
      "remote insurance assistant",
      "insurance agency virtual assistant",
      "Spanish speaking insurance assistant"
    ],
    exactMatchKeywords: [
      "[bilingual insurance assistant]",
      "[remote insurance assistant]",
      "[insurance agency virtual assistant]"
    ],
    phraseMatchKeywords: [
      "\"bilingual insurance assistant\"",
      "\"remote insurance assistant\"",
      "\"insurance agency virtual assistant\""
    ],
    googleAdsHeadlines: [
      "Hire a Bilingual Insurance Assistant",
      "Insurance Agency Assistant",
      "Remote Insurance Assistant",
      "Spanish Speaking Insurance Help",
      "Starting at $1,497",
      "Book Your Free 15-Min Call",
      "7-Day Placement Guarantee",
      "Bilingual Insurance Assistant",
      "A Bilingual Insurance Assistant"
    ],
    googleAdsDescriptions: [
      "Hire a bilingual insurance assistant, vetted and working by day 7.",
      "Handle policy admin and client calls in English and Spanish.",
      "Flat fee starting at $1,497. No middleman, no long contracts.",
      "Book a free 15-minute call and staff your agency this week."
    ],
    landingPage: {
      seoTitle: "Hire a Bilingual Insurance Assistant | Bilingual Agents",
      seoDescription: "Hire a bilingual insurance assistant for your agency, vetted and working by day 7, from $1,497. Book a free call.",
      eyebrow: { en: "For insurance agencies and brokerages", es: "Para agencias y corredurias de seguros" },
      headline: { en: "Hire a Bilingual Insurance Assistant <span class=\"serif-i accent\">for Your Agency</span>", es: "Contrata un Asistente de Seguros Bilingue <span class=\"serif-i accent\">para tu Agencia</span>" },
      subheadline: { en: "Handle policy admin, renewals, and client calls in English and Spanish. A vetted bilingual insurance assistant, working by day 7, from <strong>$1,497</strong>. You employ them directly.", es: "Atiende administracion de polizas, renovaciones y llamadas de clientes en ingles y espanol. Un asistente de seguros bilingue evaluado, trabajando desde el dia 7, desde <strong>$1,497</strong>." },
      primaryCta: { en: "Book Your Free 15-Min Call", es: "Agenda tu llamada gratis de 15 min" },
      formTitle: { en: "Hire your bilingual insurance assistant", es: "Contrata tu asistente de seguros bilingue" },
      secondaryCtaText: "No contracts · You own the hire day 1",
      bullets: ["Working by day 7", "Psychologist-screened", "From $1,497 one-time", "45-day free replacement"],
      formSubtitle: "A human replies within one business day. No spam.",
      roleExamples: ["Insurance agency assistant", "Policy admin support", "Renewals assistant"]
    }
  },
  {
    path: "/insurance/quote-intake",
    campaign: "Insurance",
    adGroup: "Bilingual Quote Intake Assistant",
    primaryKeyword: "bilingual quote intake assistant",
    secondaryKeywords: [
      "insurance quote intake assistant",
      "Spanish speaking quote intake",
      "insurance lead follow-up assistant"
    ],
    exactMatchKeywords: [
      "[bilingual quote intake assistant]",
      "[insurance quote intake assistant]",
      "[insurance lead follow-up assistant]"
    ],
    phraseMatchKeywords: [
      "\"bilingual quote intake assistant\"",
      "\"insurance quote intake assistant\"",
      "\"insurance lead follow-up assistant\""
    ],
    googleAdsHeadlines: [
      "Bilingual Quote Intake Help",
      "Insurance Quote Intake Assistant",
      "Follow Up Insurance Leads",
      "Spanish Speaking Quote Help",
      "Starting at $1,497",
      "Book Your Free 15-Min Call",
      "7-Day Placement Guarantee",
      "Bilingual Quote Intake Assistant",
      "Hire a Bilingual Quote Intake Assistant",
      "Bilingual Quote Intake Assistants"
    ],
    googleAdsDescriptions: [
      "Hire a bilingual quote intake assistant, working by day 7.",
      "Follow up every quote request in English and Spanish, fast.",
      "Flat fee starting at $1,497. No middleman, no long contracts.",
      "Book a free 15-minute call and stop losing insurance leads."
    ],
    landingPage: {
      seoTitle: "Bilingual Quote Intake Assistant | Bilingual Agents",
      seoDescription: "Hire a bilingual quote intake assistant for your insurance agency, working by day 7, from $1,497. Book a free call.",
      eyebrow: { en: "For insurance agencies chasing quote leads", es: "Para agencias de seguros que buscan cotizaciones" },
      headline: { en: "Bilingual Quote Intake Assistants <span class=\"serif-i accent\">for Insurance Agencies</span>", es: "Asistentes Bilingues de Cotizaciones <span class=\"serif-i accent\">para Agencias de Seguros</span>" },
      subheadline: { en: "Follow up every quote request in English and Spanish before it goes cold. A vetted bilingual quote intake assistant, working by day 7, from <strong>$1,497</strong>.", es: "Da seguimiento a cada solicitud de cotizacion en ingles y espanol antes de que se enfrie. Un asistente de cotizaciones bilingue evaluado, trabajando desde el dia 7, desde <strong>$1,497</strong>." },
      primaryCta: { en: "Book Your Free 15-Min Call", es: "Agenda tu llamada gratis de 15 min" },
      formTitle: { en: "Hire your bilingual quote intake assistant", es: "Contrata tu asistente bilingue de cotizaciones" },
      secondaryCtaText: "No contracts · You own the hire day 1",
      bullets: ["Working by day 7", "Psychologist-screened", "From $1,497 one-time", "45-day free replacement"],
      formSubtitle: "A human replies within one business day. No spam.",
      roleExamples: ["Quote intake assistant", "Insurance lead follow-up rep", "Spanish speaking quote specialist"]
    }
  },
  {
    path: "/home-services",
    campaign: "Home Services",
    adGroup: "Home Services Hub",
    primaryKeyword: "bilingual home services staff",
    secondaryKeywords: [
      "bilingual dispatcher",
      "bilingual appointment setter",
      "bilingual customer service for contractors"
    ],
    exactMatchKeywords: [
      "[bilingual home services staff]",
      "[bilingual dispatcher]",
      "[bilingual appointment setter]"
    ],
    phraseMatchKeywords: [
      "\"bilingual home services staff\"",
      "\"bilingual dispatcher\"",
      "\"bilingual appointment setter\""
    ],
    googleAdsHeadlines: [
      "Bilingual Home Services Staff",
      "Hire Bilingual Dispatchers",
      "Bilingual Appointment Setters",
      "Bilingual Customer Service",
      "Starting at $1,497",
      "Book Your Free 15-Min Call",
      "7-Day Placement Guarantee",
      "Hire Bilingual Home Services Staff",
      "Bilingual Home Services Staff Now"
    ],
    googleAdsDescriptions: [
      "Hire bilingual dispatchers, setters, and support staff from LATAM.",
      "Vetted, psychologist-screened talent, working by day 7, from $1,497.",
      "You employ them directly. No middleman, no long contracts.",
      "Book a free 15-minute call and staff your busy season this week."
    ],
    landingPage: {
      seoTitle: "Bilingual Home Services Staff From LATAM | Bilingual Agents",
      seoDescription: "Hire bilingual dispatchers, appointment setters, and customer service staff for home services, from $1,497.",
      eyebrow: { en: "For HVAC, plumbing, roofing, and home service companies", es: "Para empresas de HVAC, plomeria, techado y servicios del hogar" },
      headline: { en: "Bilingual Home Services Staff <span class=\"serif-i accent\">Ready in 7 Days</span>", es: "Personal Bilingue para Servicios del Hogar <span class=\"serif-i accent\">Listo en 7 Dias</span>" },
      subheadline: { en: "Dispatchers, appointment setters, and customer service agents who speak English and Spanish. Vetted and working by day 7, from <strong>$1,497</strong>. You employ them directly.", es: "Despachadores, agendadores y agentes de servicio al cliente que hablan ingles y espanol. Evaluados y trabajando desde el dia 7, desde <strong>$1,497</strong>. Los contratas directamente." },
      primaryCta: { en: "Book Your Free 15-Min Call", es: "Agenda tu llamada gratis de 15 min" },
      formTitle: { en: "Staff your home service business", es: "Contrata personal para tu negocio de servicios" },
      secondaryCtaText: "No contracts · You own the hire day 1",
      bullets: ["Working by day 7", "Psychologist-screened", "From $1,497 one-time", "45-day free replacement"],
      formSubtitle: "A human replies within one business day. No spam.",
      roleExamples: ["Dispatcher", "Appointment setter", "Customer service agent"]
    }
  },
  {
    path: "/property-management",
    campaign: "Property Management",
    adGroup: "Property Management Hub",
    primaryKeyword: "bilingual property management staff",
    secondaryKeywords: [
      "bilingual property management assistant",
      "bilingual leasing assistant",
      "Spanish speaking tenant support"
    ],
    exactMatchKeywords: [
      "[bilingual property management staff]",
      "[bilingual leasing assistant]",
      "[Spanish speaking tenant support]"
    ],
    phraseMatchKeywords: [
      "\"bilingual property management staff\"",
      "\"bilingual leasing assistant\"",
      "\"Spanish speaking tenant support\""
    ],
    googleAdsHeadlines: [
      "Bilingual Property Management Staff",
      "Hire Bilingual Leasing Support",
      "Spanish Speaking Tenant Help",
      "Property Management Support",
      "Starting at $1,497",
      "Book Your Free 15-Min Call",
      "7-Day Placement Guarantee",
      "Hire Bilingual Property Management Staff",
      "Bilingual Property Management Staff Now"
    ],
    googleAdsDescriptions: [
      "Hire bilingual leasing, tenant support, and PM assistants from LATAM.",
      "Vetted, psychologist-screened talent, working by day 7, from $1,497.",
      "You employ them directly. No middleman, no long contracts.",
      "Book a free 15-minute call and staff your PM office this week."
    ],
    landingPage: {
      seoTitle: "Bilingual Property Management Staff | Bilingual Agents",
      seoDescription: "Hire bilingual property management, leasing, and tenant support staff from LATAM, from $1,497. Book a free call.",
      eyebrow: { en: "For property management companies and landlords", es: "Para empresas de administracion de propiedades y arrendadores" },
      headline: { en: "Bilingual Property Management Staff <span class=\"serif-i accent\">From LATAM</span>", es: "Personal Bilingue de Administracion de Propiedades <span class=\"serif-i accent\">de LATAM</span>" },
      subheadline: { en: "Leasing assistants, tenant support, and PM assistants who speak English and Spanish. Vetted and working by day 7, from <strong>$1,497</strong>. You employ them directly.", es: "Asistentes de arrendamiento, soporte de inquilinos y asistentes de administracion que hablan ingles y espanol. Evaluados y trabajando desde el dia 7, desde <strong>$1,497</strong>." },
      primaryCta: { en: "Book Your Free 15-Min Call", es: "Agenda tu llamada gratis de 15 min" },
      formTitle: { en: "Staff your property management team", es: "Contrata personal para tu equipo de propiedades" },
      secondaryCtaText: "No contracts · You own the hire day 1",
      bullets: ["Working by day 7", "Psychologist-screened", "From $1,497 one-time", "45-day free replacement"],
      formSubtitle: "A human replies within one business day. No spam.",
      roleExamples: ["Leasing assistant", "Tenant support rep", "Property management assistant"]
    }
  },
  {
    path: "/insurance",
    campaign: "Insurance",
    adGroup: "Insurance Hub",
    primaryKeyword: "bilingual insurance staff",
    secondaryKeywords: [
      "bilingual insurance CSR",
      "bilingual insurance assistant",
      "bilingual quote intake assistant"
    ],
    exactMatchKeywords: [
      "[bilingual insurance staff]",
      "[bilingual insurance csr]",
      "[bilingual insurance assistant]"
    ],
    phraseMatchKeywords: [
      "\"bilingual insurance staff\"",
      "\"bilingual insurance csr\"",
      "\"bilingual insurance assistant\""
    ],
    googleAdsHeadlines: [
      "Bilingual Insurance Staff",
      "Hire Bilingual Insurance CSRs",
      "Bilingual Insurance Assistants",
      "Quote Intake Support",
      "Starting at $1,497",
      "Book Your Free 15-Min Call",
      "7-Day Placement Guarantee",
      "Hire Bilingual Insurance Staff",
      "Bilingual Insurance Staff Now"
    ],
    googleAdsDescriptions: [
      "Hire bilingual CSRs, assistants, and quote intake staff from LATAM.",
      "Vetted, psychologist-screened talent, working by day 7, from $1,497.",
      "You employ them directly. No middleman, no long contracts.",
      "Book a free 15-minute call and staff your agency this week."
    ],
    landingPage: {
      seoTitle: "Bilingual Insurance Staff From LATAM | Bilingual Agents",
      seoDescription: "Hire bilingual insurance CSRs, assistants, and quote intake staff from LATAM, from $1,497. Book a free call.",
      eyebrow: { en: "For insurance agencies and brokerages", es: "Para agencias y corredurias de seguros" },
      headline: { en: "Bilingual Insurance Staff <span class=\"serif-i accent\">for Your Agency</span>", es: "Personal de Seguros Bilingue <span class=\"serif-i accent\">para tu Agencia</span>" },
      subheadline: { en: "CSRs, assistants, and quote intake staff who speak English and Spanish. Vetted and working by day 7, from <strong>$1,497</strong>. You employ them directly.", es: "CSR, asistentes y personal de cotizaciones que hablan ingles y espanol. Evaluados y trabajando desde el dia 7, desde <strong>$1,497</strong>. Los contratas directamente." },
      primaryCta: { en: "Book Your Free 15-Min Call", es: "Agenda tu llamada gratis de 15 min" },
      formTitle: { en: "Staff your insurance agency", es: "Contrata personal para tu agencia de seguros" },
      secondaryCtaText: "No contracts · You own the hire day 1",
      bullets: ["Working by day 7", "Psychologist-screened", "From $1,497 one-time", "45-day free replacement"],
      formSubtitle: "A human replies within one business day. No spam.",
      roleExamples: ["Insurance CSR", "Insurance assistant", "Quote intake assistant"]
    }
  },
  {
    path: "/latam-agents",
    campaign: "General",
    adGroup: "LATAM Agents",
    primaryKeyword: "LATAM agents",
    secondaryKeywords: [
      "hire LATAM talent",
      "remote agents from Latin America",
      "bilingual LATAM staff"
    ],
    exactMatchKeywords: [
      "[LATAM agents]",
      "[hire LATAM talent]",
      "[bilingual LATAM staff]"
    ],
    phraseMatchKeywords: [
      "\"LATAM agents\"",
      "\"hire LATAM talent\"",
      "\"bilingual LATAM staff\""
    ],
    googleAdsHeadlines: [
      "Hire LATAM Agents",
      "LATAM Agents for Your Business",
      "Bilingual Remote Talent",
      "Starting at $1,497",
      "Book Your Free 15-Min Call",
      "7-Day Placement Guarantee",
      "Psychologist-Screened Agents",
      "No Middleman, No Contracts",
      "Top LATAM Agents Today"
    ],
    googleAdsDescriptions: [
      "Hire LATAM agents, vetted and psychologist-screened, working by day 7.",
      "Flat fee starting at $1,497. No middleman, no long contracts.",
      "You employ them directly. 45-day free replacement guarantee.",
      "Book a free 15-minute call and see vetted candidates this week."
    ],
    landingPage: {
      seoTitle: "Hire LATAM Agents for Your US Business | Bilingual Agents",
      seoDescription: "Hire LATAM agents, vetted and psychologist-screened, working by day 7, from $1,497. Book a free 15-min call.",
      eyebrow: { en: "For US businesses hiring remote talent", es: "Para empresas en EE.UU. que contratan talento remoto" },
      headline: { en: "Hire LATAM Agents <span class=\"serif-i accent\">for Your US Business</span>", es: "Contrata Agentes de LATAM <span class=\"serif-i accent\">para tu Negocio en EE.UU.</span>" },
      subheadline: { en: "Vetted, psychologist-screened bilingual agents from Colombia, Venezuela, Mexico, Peru, Ecuador, and Argentina, working by day 7, from <strong>$1,497</strong>. You employ them directly.", es: "Agentes bilingues evaluados por psicologos de Colombia, Venezuela, Mexico, Peru, Ecuador y Argentina, trabajando desde el dia 7, desde <strong>$1,497</strong>. Los contratas directamente." },
      primaryCta: { en: "Book Your Free 15-Min Call", es: "Agenda tu llamada gratis de 15 min" },
      formTitle: { en: "Hire your LATAM agent", es: "Contrata tu agente de LATAM" },
      secondaryCtaText: "No contracts · You own the hire day 1",
      bullets: ["Working by day 7", "Psychologist-screened", "From $1,497 one-time", "45-day free replacement"],
      formSubtitle: "A human replies within one business day. No spam.",
      roleExamples: ["Bilingual customer service agent", "Bilingual sales agent", "Bilingual virtual assistant"]
    }
  }
];

module.exports = { adLandingMap };
