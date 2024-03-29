export const projects = [
  {
    title: "High Availability Airflow",
    subtitle: "Dual Airflow Scheduler running on Docker Swarm",
    description:
      "This project demonstrates my proficiency in building a robust data pipeline orchestration system, underscoring my strong grasp of DevOps principles. By leveraging Docker Swarm for container orchestration, I showcase my expertise in creating scalable and efficient infrastructure solutions. Implementing dual Airflow schedulers reflects my strategic thinking, ensuring continuous workflow execution and highlighting my commitment to building reliable and resilient systems.",
    image: "./ha-airflow-swarm.png",
    link: "https://github.com/alanriya/bug-free-octo-potato",
  },
  {
    title: "Search Engine with Term Frequency - Inverse Document Frequency (TF-IDF) score",
    subtitle: "Python Algorithm Console Application",
    description:
      "This is a basic big data project to build an efficient search engine that performs search on Wikipedia pages. This projects creates inverted index creation and query search mechanism. After creating the index, user may enter search term and the console application shall return the list of most relevant pages pertaining to the search. The data is found on: https://dumps.wikimedia.org/enwiki/20230920/",
    image: "./searchEngine.gif",
    link: "https://github.com/alanriya/symmetrical-search",
  },
  {
    title: "Project Blaze",
    subtitle: "Big Data Architecture: Lambda Data Processing Model",
    description:
      "As a seasoned developer, I design and executed of a cutting-edge Lambda data processing architecture, seamlessly integrating real-time stream processing with a parallel batch layer. Leveraging  Apache Kafka, Apache Spark, Apache Airflow and Apache Flink with Timescale Database as a robust time series database, I ensured robustness in handling high volumes of data while maintaining fault tolerance and scalability. The architecture delivered enhanced efficiency, minimized downtime, and optimized costs, showcasing my expertise in architecting Lambda solutions with a keen focus on performance, reliability, and strategic optimization.",
    image: "./blaze-project.png",
    link: "https://github.com/alanriya/turbo-waddle",
  },
  {
    title: "Derivative Pricer",
    subtitle: "C++ and Qt6 Framework",
    description:
      "Interface using C++ Qt6 framework to compute various derivative's arbitrage-free price using Monte Carlos simulation for Vanilla and Exotic Option and risk-neutral Binary Tree Pricing for American Option. The project focuses on good programming practises such as packaging reusable components like generation of random numbers and parameters integral. Abstract classes have been created to allow easy extension to other options if its payoff may be define. Vanilla Options, Simple Exotic Option and American Options can be valued.",
    image: "./optionPricer.gif",
    link: "https://github.com/alanriya/OptionPricer", 
  },
  {
    title: "Market Data DartBoard",
    subtitle: "Python 3.9 and RabbitMQ",
    description:
      "This project simulates the how market data flows from exchange to the client. A server will read a dummmy file that contains market data in their native protocol and sends it through a TCP connection through RabbitMQ 's topic exchange. Another client application will receive the data and trys to build the book, the book state is then published over the another TCP connection to any client subscribing to the market data to display a dart board. This project still lacks a frontend UI that is fast enough to handle large volume of data and rendering them at the same time.",
    image: "./marketParser.gif",
    link: "https://github.com/alanriya/dataTransfer",
  },
  {
    title: "Data Engineering Pipeline using Docker and Airflow",
    subtitle: "Python 3.9, Airflow 2.2.3 , Docker 19.3",
    description:
      "A big part as a developer or researcher is collecting data for downstream users or this is a mock project that offers a platform to easily create automated task and schedule it for run at regular time or time intervals. A big part of being productive is to use airflow to orchestrate repetitive but time consuming jobs. This project is an example of a complete pipeline that allows one to schedule for various tasks like checking if API is available, downloading data, inserting data into local database. The airflow also provides email and slack messaging capability to send message when some of the tasks went wrong. I have only set up the email capability for now.",
    image: "./airflow.gif",
    link: "https://github.com/alanriya/airflowPipeline",
  },
  {
    title: "Trading Platform",
    subtitle: "C# .NET 6.0 framework",
    description:
      "This is a trading platform set up using C#. it consists of the market data injector, simulated exchange, orderbook, strategy component. The data is first read from the txt file and pass the message down using multicast UDP. The orderbook object will process the message received from the UDP channel and builds the book. The Strategy object is a simple strategy that buys when instrument price is higher than a certain price. When the condition is met, the strategy will place an buy order to the simulated exchange at the best ask price. The exchange will reply with the filled order. At the end of the trading session, the all the position in the strategy will be reversed and the pnl will be computed.",
    image: "./tradingPlatform.gif",
    link: "https://github.com/alanriya/TradingPlatformSample",
  }
];

export const backgrounds = [
  {
    cardTitle: 'BondIT Global, Data Analyst Internship',
    cardSubtitle:
      "Embarked on a 6-months internship at a Financial Technology company in Israel.",
    title: "Jan 2018 - Jun 2019",
    cardDetailedText: "Led the research of an algorithm analysing the interpolated and zero-volatility spreads of similar bond groups using Python which was subsequently implemented in the mainframe and improved BondIT's proactive trade call",
  },
  {
    cardTitle: 'Bachelors in Engineering',
    cardSubtitle:
      "Graduated with Bachelors in Chemical Engineering (Honours with Distinction) from National University of Singapore.",
    title: "Jun 2019",
    cardDetailedText: "Graduated with CAP of 4.25 / 5.00 and was awarded President's Sport Team of the Year and NUS Sports Team of the Year.",
  },
  {
    cardTitle: `Post Graduate Degree`,
    cardSubtitle:
      "Graduated with a Financial Engineering master's degree from Nanyang Technological University and certificate in Computational Finance from Carnegie Mellon University",
    title: "May 2021",
    cardDetailedText: "Learned various option pricing techniques, time series modelling, stochastic calculus and C++ programming."
  },
  {
    cardTitle: 'LegendArb Financial Group, Quantitative Developer/ Analyst',
    cardSubtitle:
      "Exposure to small proprietary trading shop",
    title: "Feb 2020 - Nov 2021",
    cardDetailedText: "Exposed to multiple areas of a proprietary trading business: database development, infrastructure development, market connectivity, trading alpha research and trading operations.",
  },
  {
    cardTitle: 'Lynx Analytics Pte Ltd, Data Engineer',
    cardSubtitle:
      "Exploring a career in Big Data Engineering focusing on data orchestration and devops",
    title: "May 2022 - March 2023",
    cardDetailedText: "Built Big Data Engineering solutions for partnering clients in the healthcare industry. Learned a lot in the area of Data Orchestration using Apache Airflow, and received my Professional Google Data Engineer Certification.",
  },
  {
    cardTitle: 'GIC Pte Ltd, Investment Insights Group - Core Strategist, Quantitative Developer',
    cardSubtitle:
      "Working in Multi-Asset Quantitative Strategy team within GIC",
    title: "March 2023 - Present",
    cardDetailedText: "Deployed and maintained MAQS's quantitative research library and data orchestration platform in multi-node setup using docker swarm and MWAA setup. Set up CICD workflow with Github actions. Earned AWS DevOps, implemented in-depth on data processing model like lambda architecture",
  },

];

export const skills = [
  "Python",
  "Java for Big Data Analytics and Engineering",
  "Javascipt (React Framework)",
  "Structured Database: PostgreSQL, TimescaleDB",
  "Unstructured Database: Cassandra DB", 
  "Enterprise Monitoring: Datadog Integration",
  "Data Orchestration: Apache AirFlow",
  "Apache Spark (Big Data Analytics)",
  "GCP and AWS for distributed elastic computing orchestration",
  "Docker, Docker Swarm, Kubernetes Basics",
  "RabbitMQ/ Apache Kafka", 
  "AWS CI/CD",
  "GitHub Actions for CI/CD",
  "Microsoft Excel",
];
