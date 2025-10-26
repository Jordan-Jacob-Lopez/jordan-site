// lib/work.ts
export type WorkItem = {
    slug: string;
    tag: string;
    title: string;
    impact: string;
    summary: string;
    body?: string;
  };
  
  export const WORK: WorkItem[] = [
    {
      slug: "title-maintenance",
      tag: "Capital One · Self-Serve",
      title: "Title maintenance experience",
      impact: "-$800k/yr op-ex, +status transparency",
      summary:
        "Shipped a self-serve title maintenance flow with clear comms and agent tooling across DMV integrations.",
      body:
        "Problem: customers lacked status visibility and agents had fragmented tools. Approach: redesigned end-to-end with self-serve flows, proactive comms, and unified agent surfaces. Outcomes: reduced support volume, improved SLA adherence, and clearer tracking.",
    },
  ];
  