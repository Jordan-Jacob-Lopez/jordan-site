// lib/work.ts
export type WorkItem = {
  slug: string;   // used in the URL, e.g., /work/title-maintenance
  tag: string;    // small label above the title
  title: string;  // page H1
  impact: string; // quick outcome line
  summary: string;// short teaser used on the homepage
  body?: string;  // longer narrative shown on the case page
};

export const WORK: WorkItem[] = [
  {
    slug: "title-maintenance",
    tag: "Capital One · Auto Finance",
    title: "Title maintenance experience",
    impact: "-$800k/yr ops cost; higher status transparency; fewer inbound calls",
    summary:
      "Led strategy and delivery of a self-serve title maintenance flow with a mobile-native and web customer experience experience, proactive comms and a modernized agent UI.",
    body:
      "Problem\n" +
      "Customers needed registration/titling documents and historically had to call support. The legacy flow created delays, low transparency, and high agent load.\n\n" +
      "Approach\n" +
      "• Defined an end-to-end strategy to move title maintenance into the Capital One app and web.\n" +
      "• Designed a simple request flow that clarifies what to submit and what happens next.\n" +
      "• Coupled the UX with a communications plan (email, SMS, push) tied to key milestones.\n" +
      "• Modernized the agent UI to streamline exception handling and reduce context switching.\n\n" +
      "Outcomes\n" +
      "• Reduced avoidable calls by enabling self-serve requests and status visibility.\n" +
      "• Faster cycle times from clearer inputs and fewer back-and-forths.\n" +
      "• Ops savings and happier customers through transparency and proactive comms.",
  },
  {
    slug: "total-loss-experience",
    tag: "Capital One · Auto Finance",
    title: "Total loss customer experience",
    impact: "Reduced confusion for 100k customers/yr; faster time-to-resolution; fewer status inquiries",
    summary:
      "Built a mobile-native and web journey that explains total-loss steps and sends milestone comms across the claim lifecycle.",
    body:
      "Problem\n" +
      "Customers in a total-loss situation lacked clarity on next steps, timelines, and required documents.\n\n" +
      "Approach\n" +
      "• Designed mobile and web experiences that outline the journey, requirements, and current status.\n" +
      "• Triggered emails and texts at key stages to set expectations and reduce uncertainty.\n" +
      "• Coordinated with claims/ops teams to align statuses and definitions across systems.\n\n" +
      "Outcomes\n" +
      "• Fewer status-check calls and a smoother end-to-end experience.\n" +
      "• Better preparedness (customers show up with the right info the first time).",
  },
  {
    slug: "regression-testing-platform",
    tag: "Capital One · Ledger validation",
    title: "Regression testing & ledger validation platform",
    impact: "Validated 7M+ accounts across 100+ attributes; de-risked migration",
    summary:
      "Led a regression tool and validation strategy to compare legacy vs new platform behavior—including a newly coded ledger.",
    body:
      "Problem\n" +
      "Large platform migration with material financial risk required evidence that new behavior matched business rules and legacy outcomes where intended.\n\n" +
      "Approach\n" +
      "• Delivered a data-driven comparison tool to evaluate 7M+ accounts across 100+ attributes.\n" +
      "• Defined sampling and risk-based validation, focusing on high-impact segments and edge cases.\n" +
      "• Partnered with finance and engineering to reconcile differences and codify rule intent.\n\n" +
      "Outcomes\n" +
      "• Confidence in parity where required and clear documentation where the new platform intentionally diverged.\n" +
      "• Faster, auditable sign-off for migration readiness.",
  },
  {
    slug: "architecture-development-analysis",
    tag: "Northrop Grumman · Space Systems",
    title: "Architecture development & analysis",
    impact: "Improved interface clarity; better model fidelity; actionable engineering insights",
    summary:
      "Led architecture development for a missile-defense satellite program; analyzed interfaces and simulated improvements.",
    body:
      "Problem\n" +
      "Complex, multi-team software interfaces created ambiguity and made modeling fidelity hard to maintain.\n\n" +
      "Approach\n" +
      "• Worked across disciplines to document and refine interfaces between key software components.\n" +
      "• Built and ran simulations to evaluate proposed code changes and quantify effects.\n" +
      "• Facilitated design reviews to drive alignment on trade-offs and next steps.\n\n" +
      "Outcomes\n" +
      "• Clearer architecture artifacts, fewer integration surprises, and better simulation results.",
  },
  {
    slug: "jordans-financial-page",
    tag: "Personal project",
    title: "Jordan’s financial page",
    impact: "Shareable fundamentals; repeatable publishing framework",
    summary:
      "Built a site for approachable financial basics and a repeatable framework for articles/stories on the space.",
    body:
      "Goal\n" +
      "Create a friendly, practical place to learn financial fundamentals and collect perspectives on notable events.\n\n" +
      "Approach\n" +
      "• Designed a simple information architecture for topics and story posts.\n" +
      "• Wrote reusable templates so new posts stay consistent and fast to publish.\n" +
      "• Focused on clarity over jargon; added references and calculators where helpful.\n\n" +
      "Status\n" +
      "Iterating on initial content, adding more examples, and exploring light interactivity.",
  },
];

  