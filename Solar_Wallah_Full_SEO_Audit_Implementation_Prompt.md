# Solar Wallah — Master SEO Audit + Implementation Prompt

You are acting as a **senior technical SEO engineer, local SEO specialist, on-page SEO strategist, website performance engineer and conversion optimization expert**.

Your task is to perform a **complete SEO audit of the existing Solar Wallah website and directly implement the necessary fixes**.

The website is an existing **static HTML + CSS + JavaScript project**.

## VERY IMPORTANT — DO NOT CHANGE THE TECH STACK

The website already uses:

- HTML
- CSS
- JavaScript
- External CSS files
- External JS files
- Static folder structure
- Individual HTML pages
- City folders

**DO NOT migrate the project to React, Next.js, Vite, Astro, WordPress or another framework.**

**DO NOT rebuild the website from scratch.**

Preserve the existing design, branding, content that is already correct, functionality and URL structure unless a specific SEO problem requires a change.

If a URL absolutely must change, implement the correct permanent redirect from the old URL to the new canonical URL and update internal links, sitemap and canonical tags.

---

# BUSINESS INFORMATION

Brand:

**Solar Wallah**

Website:

**https://solarwallah.online/**

Phone / WhatsApp:

**+91 95806 59559**

Primary email:

**hello@solarwallah.online**

Business type:

Solar panel installation and rooftop solar solutions.

Primary priority markets:

### Priority 1
**Ayodhya / Faizabad**

### Priority 2
**Sultanpur**

### Priority 3
**Gonda**

Secondary cities already present on the website:

Lucknow  
Barabanki  
Amethi  
Prayagraj  
Gorakhpur

Do not remove the secondary city pages.

However, for this SEO implementation, allocate the highest optimization effort to:

**Ayodhya/Faizabad, Sultanpur and Gonda.**

---

# PRIMARY SEO OBJECTIVE

The primary goal is to improve the website's ability to rank and generate qualified leads for high-intent local searches such as:

### Ayodhya

- solar panel installation in Ayodhya
- solar company in Ayodhya
- solar panel installer in Ayodhya
- rooftop solar installation in Ayodhya
- solar panel installation Ayodhya
- solar company near me
- solar panel installation near me
- solar panel price in Ayodhya
- 3kW solar system in Ayodhya
- 5kW solar system in Ayodhya
- solar subsidy in Ayodhya

### Sultanpur

- solar panel installation in Sultanpur
- solar company in Sultanpur
- solar panel installer in Sultanpur
- rooftop solar installation in Sultanpur
- solar panel installation Sultanpur
- solar panel price in Sultanpur
- 3kW solar system in Sultanpur
- 5kW solar system in Sultanpur
- solar subsidy in Sultanpur

### Gonda

- solar panel installation in Gonda
- solar company in Gonda
- solar panel installer in Gonda
- rooftop solar installation in Gonda
- solar panel installation Gonda
- solar panel price in Gonda
- 3kW solar system in Gonda
- 5kW solar system in Gonda
- solar subsidy in Gonda

---

# IMPORTANT LOCAL SEO RULE

Do NOT attempt to rank the website by stuffing the exact phrase:

**“solar panel installation near me”**

onto pages repeatedly.

Treat “near me” primarily as a **local-search / Google Business Profile visibility objective**, while city-specific queries such as:

**solar panel installation in Ayodhya**

should be targeted primarily through the website's organic city pages.

Google states that local rankings are mainly influenced by **relevance, distance and prominence**. Prominence can be influenced by things such as reviews and links.

Therefore:

### Website strategy

Optimize strongly for:

**solar panel installation in Ayodhya**

**solar company in Ayodhya**

etc.

### Local SEO strategy

Prepare the website and business information to support:

**solar panel installation near me**

**solar company near me**

and Google Maps/local-pack visibility.

Do not create a fake “near me” landing page.

---

# PHASE 1 — COMPLETE WEBSITE DISCOVERY

Before modifying anything, crawl and inventory the entire project.

Inspect:

- every HTML file
- every folder
- every CSS file
- every JS file
- every image
- every SVG
- robots.txt
- sitemap.xml
- favicon
- manifest if present
- redirects
- internal links
- external links
- canonical tags
- meta tags
- structured data
- headers
- footer
- navigation
- forms
- WhatsApp links
- phone links
- image paths
- broken assets
- 404s where detectable
- duplicate content
- city pages
- service pages
- legal pages
- blog pages if present

Create a complete page inventory.

For every indexable page record:

```text
URL
File path
Page type
Title
Meta description
H1
Canonical
Indexability
Word/content coverage
Primary keyword
Secondary keywords
Internal links
Images
Alt text
Schema
Status
SEO score
Priority
```

Do this before making changes.

---

# PHASE 2 — CREATE AN SEO BASELINE

Before changes, create:

`SEO-AUDIT-BEFORE.md`

Include:

Technical SEO:
On-page SEO:
Local SEO:
Content:
Internal linking:
Performance:
Accessibility:
Structured data:
Indexability:
Conversion optimization:

Then classify findings:

### CRITICAL
Problems that can prevent crawling/indexing or cause severe SEO issues.

### HIGH
Issues likely to materially affect rankings or conversions.

### MEDIUM
Important optimization opportunities.

### LOW
Minor improvements.

Do not make vague recommendations.

For every issue specify:

```text
Problem
Affected URL/file
Why it matters
Current state
Recommended fix
Implementation status
```

---

# PHASE 3 — CRAWLABILITY & INDEXABILITY AUDIT

Audit the website for:

- robots.txt errors
- accidental disallow rules
- noindex tags
- nofollow mistakes
- canonical errors
- canonical loops
- canonical pointing to unrelated URLs
- HTTP URLs
- www/non-www inconsistencies
- duplicate URLs
- duplicate pages
- redirect chains
- redirect loops
- broken internal links
- orphan pages
- inaccessible pages
- incorrect sitemap URLs
- non-canonical URLs in sitemap
- redirecting URLs in sitemap
- 404 URLs in sitemap
- invalid URLs
- missing sitemap
- incorrect robots.txt
- accidental indexing of utility pages
- duplicate title pages
- duplicate descriptions
- blocked CSS/JS/images where relevant

Verify that every important page is:

**200 OK**

**indexable**

**self-canonical**

**internally linked**

**included in sitemap**

where appropriate.

---

# PHASE 4 — WWW / NON-WWW / HTTPS AUDIT

Determine which version of the domain is intended to be canonical:

`https://solarwallah.online/`

or

`https://www.solarwallah.online/`

Do not arbitrarily change it.

Inspect the actual deployment behavior.

Ensure:

- one canonical hostname
- HTTPS everywhere
- HTTP redirects to HTTPS
- non-preferred hostname redirects to preferred hostname
- no redirect chains
- canonical tags use the preferred hostname
- sitemap uses the preferred hostname
- Open Graph URLs use the preferred hostname
- internal links use the preferred hostname

Do not create mixed www/non-www internal links.

---

# PHASE 5 — URL ARCHITECTURE

Preserve existing useful indexed URLs whenever possible.

Current city structure may look like:

```text
/cities/ayodhya/
/cities/sultanpur/
/cities/gonda/
/cities/lucknow/
/cities/barabanki/
/cities/amethi/
/cities/prayagraj/
/cities/gorakhpur/
```

Do not change this merely for cosmetic reasons.

Check whether each URL is:

- short
- descriptive
- lowercase
- readable
- stable
- canonical
- consistent

Do not create keyword-stuffed URLs.

---

# PHASE 6 — TITLE TAG AUDIT

Audit EVERY indexable page.

Every important page must have:

- unique title
- clear search intent
- city/service relevance where appropriate
- natural wording
- brand at the end where useful
- no keyword stuffing
- no duplicate title

Priority title examples:

### Homepage

`Solar Panel Installation in Uttar Pradesh | Solar Wallah`

### Ayodhya

`Solar Panel Installation in Ayodhya & Faizabad | Solar Wallah`

### Sultanpur

`Solar Panel Installation in Sultanpur | Solar Wallah`

### Gonda

`Solar Panel Installation in Gonda | Solar Wallah`

### Residential Solar

`Residential Rooftop Solar Installation | Solar Wallah`

### Commercial Solar

`Commercial Solar Installation in Uttar Pradesh | Solar Wallah`

Do not blindly use these if the actual page content doesn't support them. Make titles accurately describe the page.

---

# PHASE 7 — META DESCRIPTION AUDIT

Create unique descriptions for every important page.

Descriptions should:

- accurately summarize the page
- include primary topic naturally
- include location when relevant
- communicate a benefit
- encourage clicks
- not be stuffed with keywords
- not be identical across city pages

Example:

### Ayodhya

`Looking for solar panel installation in Ayodhya or Faizabad? Explore rooftop solar solutions for homes and businesses from Solar Wallah. Get a free quote.`

Create similarly unique descriptions for Sultanpur and Gonda.

Do not write one template and change only the city name.

---

# PHASE 8 — H1 / H2 / H3 AUDIT

Every indexable page must have:

- one clear H1
- logical H2s
- logical H3s
- no skipped hierarchy where avoidable
- no headings used purely for styling
- headings aligned with search intent

Priority city H1 examples:

### Ayodhya

`Solar Panel Installation in Ayodhya & Faizabad`

### Sultanpur

`Solar Panel Installation in Sultanpur`

### Gonda

`Solar Panel Installation in Gonda`

Check all pages for:

- missing H1
- multiple H1s
- generic H1
- H1 mismatch with title
- keyword stuffing
- repeated headings

---

# PHASE 9 — AYODHYA SEO OPTIMIZATION

Treat Ayodhya as the primary local SEO market.

Audit:

`/cities/ayodhya/`

Make this page significantly stronger than a generic location template.

It should naturally cover:

- solar panel installation in Ayodhya
- solar company in Ayodhya
- rooftop solar
- residential solar
- commercial solar
- on-grid solar
- hybrid solar
- solar system sizing
- installation process
- cost factors
- subsidy information
- service areas
- FAQs
- contact/quote CTA

Also naturally use:

**Ayodhya**

**Faizabad**

without keyword stuffing.

Do NOT create a separate duplicate Faizabad page unless there is a legitimate reason and substantially unique useful content.

---

# PHASE 10 — SULTANPUR SEO OPTIMIZATION

Audit:

`/cities/sultanpur/`

Create a genuinely useful page targeting:

- solar panel installation in Sultanpur
- solar company in Sultanpur
- rooftop solar installation in Sultanpur
- residential solar
- commercial solar
- system sizing
- cost factors
- subsidy
- FAQs
- local service coverage
- projects
- CTA

The page must be genuinely different from Ayodhya.

---

# PHASE 11 — GONDA SEO OPTIMIZATION

Audit:

`/cities/gonda/`

Target:

- solar panel installation in Gonda
- solar company in Gonda
- solar installer in Gonda
- rooftop solar installation in Gonda
- residential solar
- commercial solar
- subsidy
- installation process
- FAQs
- projects
- local service area
- quote CTA

Again, do not clone the Ayodhya page.

---

# CRITICAL CITY PAGE RULE

Do NOT create city pages that differ only by city name.

Do NOT generate hundreds of doorway pages.

Do NOT produce large amounts of automatically generated city content solely to rank for location keywords.

Every priority city page should eventually be supported by genuine local information, real projects, real service coverage, customer questions, photographs or other first-hand business evidence.

---

# PHASE 12 — CONTENT DEPTH AUDIT

Evaluate each priority city page based on:

### Relevance

Does it genuinely answer what a person searching for solar installation in that city needs?

### Completeness

Does it cover:

- services
- system sizes
- installation
- pricing factors
- subsidy
- process
- FAQs
- contact
- service area

### First-hand experience

Is there evidence Solar Wallah actually operates in the city?

### Trust

Is there enough information to make a visitor comfortable contacting the company?

### Conversion

Can the visitor immediately:

- call
- WhatsApp
- request a quote

Do not blindly target a word count.

Focus on satisfying the user's intent.

---

# PHASE 13 — KEYWORD MAPPING

Create a keyword-to-page map.

Example:

```text
solar panel installation in ayodhya
→ /cities/ayodhya/

solar company in ayodhya
→ /cities/ayodhya/

solar panel installation in sultanpur
→ /cities/sultanpur/

solar company in sultanpur
→ /cities/sultanpur/

solar panel installation in gonda
→ /cities/gonda/

solar company in gonda
→ /cities/gonda/

solar panel installation
→ /solar-panel-installation/

residential solar
→ /residential-solar/

commercial solar
→ /commercial-solar/

solar subsidy
→ /solar-subsidy/

3kw solar system
→ appropriate dedicated page/article

5kw solar system
→ appropriate dedicated page/article
```

Identify cannibalization.

If multiple pages are targeting the same primary keyword without a strong reason, recommend consolidation or clearer intent separation.

---

# PHASE 14 — ON-PAGE SEO

For every indexable page inspect and fix:

- title
- meta description
- H1
- headings
- keyword intent
- introductory content
- semantic relevance
- internal links
- image alt
- image filenames
- anchor text
- canonical
- schema
- Open Graph
- content structure
- CTA placement

Do not over-optimize.

The goal is a natural, useful page.

---

# PHASE 15 — INTERNAL LINKING

Build a deliberate internal-linking system.

Homepage should link to:

- Solar Installation
- Residential Solar
- Commercial Solar
- Solar Subsidy
- Solar Calculator
- Ayodhya
- Sultanpur
- Gonda

Service pages should link naturally to relevant city pages.

City pages should link to relevant services.

Blog articles should link to relevant service and city pages.

Projects should link to relevant city pages.

Examples:

`Solar Panel Installation in Ayodhya`

`Residential Solar Solutions`

`Solar Subsidy Guide`

`3kW Solar System`

Do not use repetitive exact-match anchors in every location.

Audit for:

- orphan pages
- too few internal links
- excessive sitewide links
- broken links
- irrelevant links
- poor anchor text
- deep click depth

Priority city pages should be easy for crawlers and users to reach.

---

# PHASE 16 — IMAGE SEO

Audit every important image.

Check:

- filename
- alt text
- dimensions
- compression
- format
- lazy loading
- width/height attributes
- CLS risk
- responsive behavior

Prefer:

WebP / AVIF

where appropriate.

Examples of useful filenames:

```text
solar-panel-installation-ayodhya.webp
rooftop-solar-installation-sultanpur.webp
solar-panel-installation-gonda.webp
```

Do not force keywords into image alt text.

Alt text should describe the actual image.

Only use location names when they are accurate.

---

# PHASE 17 — STRUCTURED DATA

Audit and implement valid structured data where appropriate.

Potential types:

### Homepage

Organization  
WebSite

### Service pages

Service  
BreadcrumbList

### City pages

BreadcrumbList

Appropriate LocalBusiness/organization information only where accurate and justified.

### Blog

Article  
BreadcrumbList

Do NOT create fake review schema.

Do NOT invent:

- ratings
- reviews
- awards
- certifications
- addresses
- business relationships

Validate JSON-LD syntax.

Ensure structured data matches visible page content.

---

# PHASE 18 — LOCAL BUSINESS ENTITY SIGNALS

Make sure the website provides a consistent business identity.

Audit:

Business name  
Phone  
Website  
Email  
Business category  
Business description  
Service coverage  
Business address if legitimately applicable  
Social profiles  
Google Business Profile link

Keep business information consistent.

---

# PHASE 19 — SERVICE-AREA BUSINESS AUDIT

Solar Wallah is primarily a service business.

Do not invent physical offices in:

Ayodhya  
Sultanpur  
Gonda  
Lucknow  
etc.

unless those locations actually exist and meet eligibility requirements.

The website can have city service pages without pretending that Solar Wallah has a physical storefront in each city.

If preparing GBP recommendations, follow Google's actual service-area-business guidelines.

---

# PHASE 20 — GOOGLE BUSINESS PROFILE READINESS

The website itself cannot change GBP settings unless an approved integration exists.

Therefore:

DO NOT pretend to modify Google Business Profile.

Instead create:

`GOOGLE-BUSINESS-PROFILE-SEO-PLAN.md`

Include recommendations for:

- primary category
- secondary categories
- business description
- services
- service areas
- photos
- posts
- review generation
- website URL
- phone number
- business hours
- social links
- NAP consistency

Make the recommendations factual and avoid unsupported claims.

---

# PHASE 21 — “NEAR ME” STRATEGY

Do not:

- create spammy near-me pages
- repeat “near me” dozens of times
- hide keyword lists
- stuff city names in footers

Instead optimize the site for the entities and topics underlying those searches:

Solar panel installation  
Rooftop solar  
Solar company  
Residential solar  
Commercial solar

and reinforce local relevance through:

Ayodhya  
Sultanpur  
Gonda

alongside accurate business/contact information.

Create a section in the final SEO report:

## Near-Me SEO Strategy

Explain separately:

Website actions  
Google Business Profile actions  
Review strategy  
Local authority/backlink strategy  
Citation consistency  
Project evidence

---

# PHASE 22 — LOCAL CONTENT STRATEGY

Recommend and implement the highest-value content opportunities for the three target cities.

Priority topics:

### Ayodhya

Solar Panel Installation Cost in Ayodhya  
3kW Solar System in Ayodhya  
5kW Solar System in Ayodhya  
Solar Subsidy in Ayodhya  
Rooftop Solar Guide for Ayodhya Homeowners

### Sultanpur

Solar Panel Installation Cost in Sultanpur  
3kW Solar System in Sultanpur  
Solar Subsidy in Sultanpur  
Rooftop Solar Guide for Sultanpur

### Gonda

Solar Panel Installation Cost in Gonda  
3kW Solar System in Gonda  
Solar Subsidy in Gonda  
Rooftop Solar Guide for Gonda

Do not automatically create all articles if the website does not have enough unique useful information.

Prioritize quality over quantity.

---

# PHASE 23 — CONTENT CANNIBALIZATION

Identify if:

Homepage  
Service pages  
City pages  
Blog pages

are competing for the same keyword.

Create a table:

```text
Keyword
Current pages
Likely primary page
Problem
Recommended action
```

Fix cannibalization through:

- clearer page intent
- internal links
- title/H1 changes
- content differentiation
- canonicalization
- consolidation when necessary

Do not delete an indexed URL merely because it isn't currently ranking.

---

# PHASE 24 — CONTENT QUALITY

For every important page check:

- factual accuracy
- usefulness
- originality
- readability
- first-hand experience
- trust
- clarity
- completeness
- local relevance

Remove:

- repetitive filler
- generic AI-sounding paragraphs
- meaningless keyword blocks
- exaggerated promises
- unsupported statistics
- fake testimonials
- fake awards
- fake certifications
- fake customer counts

The goal is satisfying the user's purpose rather than producing search-engine-first content.

---

# PHASE 25 — E-E-A-T / TRUST SIGNAL AUDIT

Audit whether the site clearly communicates:

Who Solar Wallah is  
What Solar Wallah does  
Where Solar Wallah operates  
How customers can contact Solar Wallah  
What services are offered  
How installation works  
What happens after installation  
What warranties actually apply  
What components are actually used  
What government/subsidy assistance actually means

Add trust sections where useful.

Never invent evidence.

If information is missing, create a clearly marked placeholder rather than fabricating it.

---

# PHASE 26 — CONTACT & CONVERSION SEO

Audit every important page for conversion opportunities.

Primary CTA:

**Get Free Solar Quote**

Secondary CTA:

**WhatsApp Us**

Third CTA:

**Call Now**

Use:

`tel:+919580659559`

and:

`https://wa.me/919580659559`

Create contextual WhatsApp messages.

For Ayodhya:

`Hi Solar Wallah, I am looking for solar panel installation in Ayodhya.`

For Sultanpur:

`Hi Solar Wallah, I am looking for solar panel installation in Sultanpur.`

For Gonda:

`Hi Solar Wallah, I am looking for solar panel installation in Gonda.`

Ensure buttons are functional on both mobile and desktop.

---

# PHASE 27 — MOBILE SEO

Perform a complete mobile audit.

Test:

320px  
375px  
390px  
430px  
768px

Check:

- horizontal overflow
- navigation
- buttons
- typography
- forms
- CTA visibility
- fixed WhatsApp bar
- image sizing
- calculators
- tables
- accordions
- footer
- tap targets

The main content must remain immediately accessible.

---

# PHASE 28 — CORE WEB VITALS

Audit and optimize:

### LCP

Improve:

- hero image
- font loading
- server response
- render blocking resources

### CLS

Fix:

- images without dimensions
- dynamically inserted content
- font shifts
- layout jumps

### INP

Reduce:

- excessive JavaScript
- expensive event handlers
- unnecessary animations
- huge DOM complexity

Also audit:

TTFB  
FCP  
TBT  
resource size  
JS execution  
CSS size  
image size

Do not sacrifice accessibility or functionality merely to hit a score.

---

# PHASE 29 — CSS AUDIT

Inspect the entire CSS codebase.

Find:

- duplicate CSS
- unused rules
- giant CSS files
- conflicting selectors
- repeated media queries
- inline styles
- hardcoded desktop-only dimensions
- overflow problems
- unnecessary animations

Refactor where useful without changing visual identity.

Keep reusable styles in:

`/assets/css/`

Do not put large amounts of duplicated CSS inside each HTML page.

---

# PHASE 30 — JAVASCRIPT AUDIT

Inspect all JS.

Look for:

- unnecessary libraries
- blocking scripts
- console errors
- broken event listeners
- unused code
- repeated scripts
- heavy DOM operations
- layout-triggering JS

Do not remove functionality.

Use `defer` where appropriate.

Keep non-critical JavaScript out of the critical rendering path where possible.

---

# PHASE 31 — SEMANTIC HTML

Audit the HTML structure.

Use meaningful semantic elements:

`header`

`nav`

`main`

`section`

`article`

`footer`

`button`

`form`

`label`

`address`

where appropriate.

Do not use divs for everything.

Ensure links use actual `<a href="">` elements so crawlers can discover them.

---

# PHASE 32 — ACCESSIBILITY

Audit:

- form labels
- alt text
- heading structure
- contrast
- focus states
- keyboard navigation
- buttons
- links
- mobile interactions
- ARIA only where necessary

Do not sacrifice accessibility for SEO.

---

# PHASE 33 — SITEMAP

Create or fix:

`/sitemap.xml`

It must contain only:

- canonical
- indexable
- 200-status
- important URLs

Do NOT include:

- redirects
- 404s
- noindex URLs
- parameter URLs
- development pages

Include:

Homepage  
Service pages  
Priority city pages  
Secondary city pages  
Important project pages  
Important blog pages  
Important legal pages where appropriate

Make sure every URL is absolute and uses the canonical domain.

---

# PHASE 34 — ROBOTS.TXT

Create/fix:

`/robots.txt`

Ensure it does not accidentally block:

- important HTML
- CSS
- JS
- images
- city pages

Include the sitemap URL.

Do not blindly disallow large areas of the site.

---

# PHASE 35 — CANONICALIZATION

Every unique indexable page should have an appropriate canonical.

Examples:

```html
<link rel="canonical" href="https://solarwallah.online/cities/ayodhya/">
```

```html
<link rel="canonical" href="https://solarwallah.online/cities/sultanpur/">
```

```html
<link rel="canonical" href="https://solarwallah.online/cities/gonda/">
```

Avoid:

- missing canonicals
- wrong canonicals
- canonicalizing unique pages to homepage
- canonical chains
- inconsistent trailing slash behavior

---

# PHASE 36 — OPEN GRAPH / SOCIAL META

Every important page should have:

`og:title`

`og:description`

`og:image`

`og:url`

`og:type`

`twitter:card`

Use appropriate page-specific images.

---

# PHASE 37 — FAVICON / BRANDING

Ensure:

- favicon exists
- favicon path works from root pages
- favicon path works from nested city pages
- Apple touch icon if appropriate
- manifest if used
- logo alt text exists
- brand name is consistent as:

**Solar Wallah**

Do not accidentally use the old brand:

**Solar Wale**

anywhere.

Search the entire project for:

`Solar Wale`

and identify outdated references.

Replace only where the business name is intended to be the new brand.

---

# PHASE 38 — PHONE / WHATSAPP CONSISTENCY

Search all files for:

`9580659559`

Ensure all important contact points use the correct business number.

Check:

- header
- footer
- hero
- contact
- city pages
- service pages
- mobile sticky bar
- WhatsApp buttons
- structured data if appropriate
- Open Graph or contact references

Use consistent formatting.

---

# PHASE 39 — EMAIL CONSISTENCY

Search the entire project for email addresses.

Primary:

`hello@solarwallah.online`

Ensure there aren't accidental references to:

- old domain
- placeholder email
- AI-generated fake address

Use:

`mailto:hello@solarwallah.online`

where appropriate.

---

# PHASE 40 — INTERNAL SEARCH / NAVIGATION

Check that users can easily navigate:

Home
Services
Cities
Projects
Calculator
About
Contact

Priority city pages should never be more than a few clicks away.

---

# PHASE 41 — FAQ OPTIMIZATION

Review every FAQ.

FAQs must:

- answer genuine user questions
- be unique to the page
- not be keyword stuffed
- be visible to users
- be technically accessible
- not contain fabricated claims

For Ayodhya, include location-relevant questions.

Same for Sultanpur and Gonda.

Do not simply duplicate identical FAQs across every city page.

---

# PHASE 42 — SOLAR SUBSIDY CONTENT

Audit the subsidy page.

Make sure claims are carefully qualified.

Do not promise subsidy eligibility to everybody.

Do not hardcode outdated government numbers without verification.

Where applicable, provide official-source links.

Make a note in the audit that subsidy information should be reviewed whenever government rules change.

---

# PHASE 43 — BUSINESS SCHEMA ACCURACY

Audit:

Organization schema  
LocalBusiness schema  
Service schema

Only use factual information.

Do not create separate fake LocalBusiness entities for each city if there isn't a legitimate separate business location.

---

# PHASE 44 — PROJECT SEO

If a projects section exists, optimize it.

Every genuine project should eventually be capable of having:

Project title  
City  
System size  
Property type  
Installation photos  
Description  
Components where appropriate  
Customer requirement  
Installation process  
Results if accurately measurable

Example:

`/projects/3kw-rooftop-solar-ayodhya/`

Do not publish fake projects.

If actual projects are not yet available, create the project infrastructure without inventing project data.

---

# PHASE 45 — BLOG SEO

Audit all existing blog articles.

For each:

- title
- H1
- search intent
- keyword cannibalization
- internal links
- author information
- dates
- images
- schema
- CTA
- factual accuracy
- city relevance

Improve existing articles before creating unnecessary new articles.

---

# PHASE 46 — SEARCH INTENT CLASSIFICATION

For every important keyword classify:

**Transactional**

**Commercial investigation**

**Informational**

**Local**

Then assign the keyword to the correct page.

Example:

`solar panel installation in ayodhya`
→ local + transactional
→ Ayodhya city page

`3kw solar system price`
→ commercial investigation
→ dedicated 3kW page/article

`solar subsidy`
→ informational/commercial
→ subsidy page

`solar panel installation`
→ transactional
→ main service page

---

# PHASE 47 — TECHNICAL SEO SCORECARD

After changes, calculate:

### Technical SEO

95+/100 target

### Indexability

95+/100

### On-page SEO

90+/100

### Local SEO readiness

90+/100

### Performance

90+/100 where realistically achievable without harming functionality

### Accessibility

90+/100

These are internal audit goals, not guarantees of Google rankings.

---

# PHASE 48 — RANKING READINESS

For each priority city create an evaluation:

## AYODHYA

Current status:
Technical:
On-page:
Content:
Local:
Authority:
Trust:
Conversion:
Biggest weakness:
Top 5 actions:

## SULTANPUR

Same structure.

## GONDA

Same structure.

Do not pretend to know current ranking position unless actual search data is available.

---

# PHASE 49 — GOOGLE SEARCH CONSOLE ANALYSIS

If Google Search Console is accessible through an available integration, inspect:

- queries
- impressions
- clicks
- CTR
- average position
- pages
- indexing
- sitemap
- indexing issues
- enhancement reports

Specifically search for queries containing:

`Ayodhya`

`Faizabad`

`Sultanpur`

`Gonda`

`solar`

`installation`

`company`

`rooftop`

`panel`

`3kw`

`5kw`

`subsidy`

Identify:

### Quick wins

Queries where the site already receives impressions but ranks poorly.

Prioritize pages in approximately positions 5–30 for improvement.

If Search Console is NOT accessible, do not pretend that you inspected it. Instead provide a manual GSC checklist.

---

# PHASE 50 — PAGE-BY-PAGE SEO REPORT

After auditing, produce:

`SEO-AUDIT-AFTER.md`

with a table:

```text
URL
Primary Keyword
SEO Title
H1
Canonical
Indexable
Schema
Internal Links
Content Quality
Local Relevance
Performance
Priority
Changes Made
```

---

# PHASE 51 — IMPLEMENT THE FIXES

This is critical:

**Do not only give me recommendations.**

Actually modify the project files and implement all safe/high-confidence SEO fixes.

Fix:

- titles
- meta descriptions
- H1s
- headings
- canonicals
- internal links
- alt text
- schema
- robots
- sitemap
- Open Graph
- favicon paths
- phone links
- WhatsApp links
- email
- semantic HTML
- performance issues
- CSS issues
- JS issues
- mobile SEO issues
- broken links
- duplicate metadata

Do not merely write a report.

---

# PHASE 52 — DO NOT BREAK EXISTING FUNCTIONALITY

Before and after changes verify:

- navigation
- forms
- WhatsApp
- phone buttons
- calculator
- mobile menu
- accordions
- sliders
- animations
- footer
- city links
- service links
- contact forms

Do not sacrifice functionality for SEO.

---

# PHASE 53 — FINAL SEO QA

After implementation:

Run another full crawl.

Look for:

- broken links
- broken assets
- missing titles
- missing descriptions
- missing H1
- duplicate titles
- duplicate descriptions
- incorrect canonical
- noindex issues
- schema errors
- missing alt attributes
- JS console errors
- CSS errors
- mobile overflow
- incorrect WhatsApp links
- incorrect telephone links
- old brand references
- old email/domain references
- sitemap errors

Fix all high-priority issues discovered during QA.

---

# PHASE 54 — CREATE SEO CHANGELOG

Create:

`SEO-CHANGELOG.md`

Document:

```text
Date
File
Old state
New state
Reason
Expected SEO benefit
```

Group changes into:

Technical
On-page
Local
Content
Performance
Accessibility
Conversion

---

# PHASE 55 — CREATE 90-DAY SEO ROADMAP

Create:

`SEO-90-DAY-PLAN.md`

Prioritize:

## Month 1

Technical foundation  
Ayodhya optimization  
Sultanpur optimization  
Gonda optimization  
Google Business Profile readiness  
Indexing/canonical cleanup  
Internal linking

## Month 2

Real project content  
Local reviews  
City content  
Local citations  
Industry links  
Local partnerships

## Month 3

Content expansion  
Backlinks  
Search Console opportunity optimization  
Project case studies  
Local authority expansion

Make Ayodhya the strongest SEO market.

---

# PHASE 56 — PRIORITY ORDER

Do NOT treat all SEO tasks equally.

Use this exact order:

### P0 — CRITICAL

Indexability  
Canonical  
Robots  
Sitemap  
HTTPS  
Redirects  
Broken pages  
Major technical errors

### P1 — HIGH

Ayodhya page  
Sultanpur page  
Gonda page  
Titles  
H1s  
Meta descriptions  
Internal linking  
Structured data  
Local entity signals

### P2 — HIGH

Core Web Vitals  
Mobile UX  
Image optimization  
Conversion CTAs  
FAQ improvements  
Content quality

### P3 — MEDIUM

Blog optimization  
Projects architecture  
Additional supporting content  
Advanced internal linking

### P4 — OFF-SITE

Google Business Profile  
Reviews  
Local citations  
Backlinks  
Local partnerships  
Digital PR

Do not spend all your effort on blog writing before P0/P1 problems are fixed.

---

# PHASE 57 — FINAL OUTPUT

When finished, provide me with:

### 1. Overall SEO score

### 2. Critical issues found

### 3. Critical issues fixed

### 4. Ayodhya page score

### 5. Sultanpur page score

### 6. Gonda page score

### 7. Technical SEO changes

### 8. On-page SEO changes

### 9. Local SEO recommendations

### 10. Internal linking changes

### 11. Content gaps

### 12. Schema changes

### 13. Performance changes

### 14. Remaining issues

### 15. Exact next actions

### 16. Files modified

### 17. Files created

### 18. 90-day SEO roadmap

---

# FINAL QUALITY STANDARD

The final Solar Wallah website should communicate to Google and users:

**Solar Wallah is a real solar installation business.**

**Solar Wallah serves Ayodhya/Faizabad, Sultanpur and Gonda.**

**Solar Wallah provides relevant solar installation services.**

**Each priority city has genuinely useful local information.**

**The website is technically crawlable and indexable.**

**The content is useful rather than keyword stuffed.**

**The website works extremely well on mobile.**

**The website loads quickly.**

**Users can easily request a quote through WhatsApp, phone or form.**

The goal is NOT to manipulate Google's algorithm.

The goal is to build the strongest possible **technical SEO + local relevance + topical authority + trust + conversion foundation** for Solar Wallah.

Do not make unrealistic guarantees such as “this will rank #1”.

Focus on identifying and fixing real SEO problems and creating the strongest foundation for sustainable ranking growth.

---

# IMPORTANT FINAL INSTRUCTION

**Start by auditing the existing website first. Do not immediately rewrite everything.**

Use the existing project as the source of truth.

Before changing any file:

1. Inspect it.
2. Understand its purpose.
3. Identify the specific SEO problem.
4. Make the smallest safe change that solves the problem.
5. Verify that the page still works.
6. Continue to the next issue.

At the end, perform a second full SEO audit to verify that the changes actually improved the implementation.

**Do not stop after generating the report. Implement the fixes.**
