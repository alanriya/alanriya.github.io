// All site content lives here. Edit this file to update the website.

export const profile = {
  name: "Alan Lee",
  role: "Quantitative Developer, Assistant Vice President",
  headline: "I build the data and infrastructure that takes quantitative research into production.",
  summary:
    "Quantitative developer at GIC working on point-in-time data platforms, continuous derivative price series and production quant libraries. Previously systematic trading infrastructure at LegendArb. MSc Financial Engineering.",
  location: "Singapore",
  email: "alan.leeyungchong@gmail.com",
  emailSubject: "Hello Alan",
  github: "https://github.com/alanriya",
  linkedin: "https://www.linkedin.com/in/alanleeyc/",
  photo: "/images/profile.jpg",
  facts: [
    { label: "Currently", value: "Quant Developer, AVP, GIC" },
    { label: "CFA Program", value: "Level 1 passed, Level 2 candidate" },
    { label: "Education", value: "MSc Financial Engineering, NTU" },
    { label: "Certified", value: "GCP Data Engineer, AWS DevOps Pro" },
  ],
};

// Newest first. Add a new job by copying a block to the top of the list.
export const experience = [
  {
    company: "GIC",
    role: "Quantitative Developer, Assistant Vice President",
    period: "Mar 2023 – Present",
    location: "Singapore",
    bullets: [
      "Quant platform modernisation: co-leading the move from EC2-based Airflow to a Databricks Delta Lake architecture, built for distributed processing while keeping point-in-time (PIT) auditability for backtesting.",
      "Macro asset returns: built continuous, jump-free derivative price series using GSCI methodology, plus a Databricks ingestion pipeline that proxies non-tradable instruments with PIT accuracy.",
      "Cloud migration: moved quant-critical apps (Axioma and Mosek optimisation services, Model Management) from EC2 to Kubernetes (EKS) with Datadog and Splunk observability, API Gateway authentication and blue-green production deployment.",
      "Quant library: standardised production testing and CI/CD, cutting model-to-production latency for Portfolio Managers.",
      "Researcher toolkit: built a self-service environment so quant researchers can take models from research to production with minimal developer involvement.",
    ],
  },
  {
    company: "Lynx Analytics",
    role: "Data Engineer",
    period: "May 2022 – Feb 2023",
    location: "Singapore",
    bullets: [
      "Engineered ETL/ELT pipelines with Apache Airflow on AWS for large-scale data ingestion in digital transformation projects.",
      "Optimised data storage and retrieval for reliability and performance for downstream analytics teams.",
    ],
  },
  {
    company: "LegendArb Financial Group",
    role: "Quantitative Analyst",
    period: "Feb 2020 – Nov 2021",
    location: "Singapore",
    bullets: [
      "Designed and deployed an internal TimescaleDB market database consolidating TSE, OSE and TAIFEX equity index futures feeds for strategy development.",
      "Developed a real-time risk and P&L monitoring system in React to track positions, automate broker reconciliation and support hedging.",
      "Built auction-phase order book analytics on Tokyo Stock Exchange Flex-Full data: detecting Funari orders and computing indicative closing prices.",
      "Applied Vector Auto-Regressive (VAR) models to market volume impact, generating automated execution recommendations for traders.",
    ],
  },
];

export const education = [
  {
    school: "Nanyang Technological University, with Tepper School of Business, Carnegie Mellon University",
    degree: "MSc Financial Engineering, Certificate in Computational Finance",
    period: "2019 – 2020",
    note: "Option pricing, time series modelling, stochastic calculus.",
  },
  {
    school: "National University of Singapore",
    degree: "BEng Chemical Engineering, Honours with Distinction",
    period: "2015 – 2019",
    note: "President's Sport Team of the Year; NUS Sports Team of the Year.",
  },
  {
    school: "Tel Aviv University",
    degree: "Entrepreneurship Studies",
    period: "",
    note: "IoT Hackathon 2018 (Ben Gurion University): 1st runner-up.",
  },
];

export const projects = [
  {
    title: "Derivative Pricer",
    summary:
      "C++/Qt6 app pricing vanilla, exotic and American options with Monte Carlo and risk-neutral binary trees. Extensible through abstract payoff classes.",
    tags: ["C++", "Qt6", "Monte Carlo"],
    image: "/images/projects/derivative-pricer.gif",
    link: "https://github.com/alanriya/OptionPricer",
  },
  {
    title: "Trading Platform",
    summary:
      "Market data injector over multicast UDP, simulated exchange, order book and a simple strategy that trades and reports end-of-day P&L.",
    tags: ["C#", ".NET 6", "UDP"],
    image: "/images/projects/trading-platform.gif",
    link: "https://github.com/alanriya/TradingPlatformSample",
  },
  {
    title: "Market Data DartBoard",
    summary:
      "Simulates exchange-to-client market data flow: native-protocol feed over RabbitMQ, order book reconstruction, and book state published to subscribers.",
    tags: ["Python", "RabbitMQ", "TCP"],
    image: "/images/projects/market-data-dartboard.gif",
    link: "https://github.com/alanriya/dataTransfer",
  },
  {
    title: "Project Blaze",
    summary:
      "Lambda architecture combining real-time stream processing with a parallel batch layer, backed by a time series database.",
    tags: ["Kafka", "Spark", "Flink", "Airflow", "TimescaleDB"],
    image: "/images/projects/project-blaze.png",
    link: "https://github.com/alanriya/turbo-waddle",
  },
  {
    title: "High Availability Airflow",
    summary:
      "Dual Airflow schedulers on Docker Swarm so workflows keep running through node failure.",
    tags: ["Airflow", "Docker Swarm"],
    image: "/images/projects/high-availability-airflow.png",
    link: "https://github.com/alanriya/bug-free-octo-potato",
  },
  {
    title: "Spark-Hadoop Prescriber Analytics",
    summary:
      "End-to-end data pipeline on a self-hosted Hadoop/YARN/Spark cluster with Hive and Postgres metadata, producing BI reports from healthcare data.",
    tags: ["Spark", "Hadoop", "Hive", "Postgres"],
    image: "/images/projects/spark-hadoop-prescriber-analytics.png",
    link: "https://github.com/alanriya/spark-pipeline",
  },
  {
    title: "Terraform on Kind",
    summary:
      "Deploys containerised applications to a local Kubernetes cluster with Terraform.",
    tags: ["Terraform", "Kubernetes"],
    image: "/images/projects/terraform-kind-cluster.png",
    link: "https://github.com/alanriya/terraform-kind-playground",
  },
  {
    title: "TF-IDF Search Engine",
    summary:
      "Inverted index and ranked query search over Wikipedia dumps, as a Python console app.",
    tags: ["Python", "TF-IDF"],
    image: "/images/projects/tfidf-search-engine.gif",
    link: "https://github.com/alanriya/symmetrical-search",
  },
  {
    title: "Airflow Data Pipeline",
    summary:
      "Scheduled pipeline that checks API availability, downloads data, loads a local database and sends email alerts on failure.",
    tags: ["Airflow", "Docker", "Python"],
    image: "/images/projects/airflow-data-pipeline.gif",
    link: "https://github.com/alanriya/airflowPipeline",
  },
];

export const skills = [
  {
    group: "Credentials",
    items: [
      "CFA Level 1 (passed)",
      "CFA Level 2 (candidate)",
      "Google Professional Data Engineer",
      "AWS DevOps Professional",
      "Udacity Data Scientist Nanodegree",
    ],
  },
  {
    group: "Quant & Finance",
    items: [
      "Point-in-time backtesting data",
      "Continuous futures price series (GSCI)",
      "Time series modelling (VAR)",
      "Option pricing",
      "Order book analytics",
      "Risk & P&L monitoring",
    ],
  },
  { group: "Languages", items: ["Python", "SQL", "Bash", "R"] },
  {
    group: "Data Platform",
    items: ["Databricks", "Delta Lake", "Snowflake", "Spark", "PostgreSQL", "TimescaleDB"],
  },
  { group: "Streaming & Orchestration", items: ["Airflow", "Flink", "Kafka", "RabbitMQ"] },
  {
    group: "Cloud & DevOps",
    items: ["AWS (EKS, MWAA)", "Google Cloud Platform", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Linux (Ubuntu, RHEL)"],
  },
  { group: "Observability", items: ["Datadog", "Splunk", "Prometheus", "Grafana", "StatsD"] },
];
