export const projects = [
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
      "This project simulates the how market data flows from exchange to the client. A server will read a dummmy file that contains market data in their native protocol and sends it through a TCP connection through RabbitMQ 's topic exchange. Another client application will receive the data and trys to build the book, the book state is then published over the another TCP connection to any client subscribing to the market data to display a dart board.",
    image: "./project-2.gif",
    link: "https://github.com/alanriya",
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
    title: "Market Data Backtester Library",
    subtitle: "python 3.9",
    description:
      "A backtesting engine that allows users to define rules or entered machine learning models for entering he trade and see the performance matrix over the defined time period. For reusability purpose, several task like performance matrix, lot sizing and allocation are generalised into library. This will serve as the backbone when doing any kind of analysis from which any instrument will run through this framework for profitability analysis.",
    image: "./project-3.gif",
    link: "https://github.com/alanriya",
  },
];

export const backgrounds = [
  {
    cardTitle: 'Singapore Armed Forces, Detachment Commander',
    cardSubtitle:
      "Served my nation for 2 years as an Artillery Commander",
    title: "May 2013 - March 2015",
    cardDetailedText: "Led a detachment of 8 soldiers in providing timely artillery fire when called upon.",
  },
  {
    cardTitle: 'BondIT Global, Data Analyst Internship',
    cardSubtitle:
      "Embarked on a 6 months internship at a Financial Technology in Israel.",
    title: "Jan 2018 - Jun 2019",
    cardDetailedText: "Led the research of an algorithm analysing the interpolated and zero-volatility spreads of similar bond groups using Python which was subsequently implemented in the mainframe and improved BondIT's proactive trade call",
  },
  {
    cardTitle: 'Finally an NUS Grad!',
    cardSubtitle:
      "Graduated with Bachelors in Chemical Engineering (Honours with Distinction) from National University of Singapore.",
    title: "Jun 2019",
    cardDetailedText: "graduated with CAP of 4.25 / 5.00 and awarded President's Sport Team of the Year and NUS sports team of the year.",
  },
  {
    cardTitle: 'Dymon Asia, Data Intelligence Internship',
    cardSubtitle: "Started an exciting internship with the largest hedge fund in Singapore.",
    title: "Aug 2019 - Oct 2019",
    cardDetailedText: "Automated the infrastructure of data intelligence risk reports which reduced the amount of time needed for portfolio managers to analyze the current positions held.",
  },
  {
    cardTitle: 'Master Degree in Financial Engineering',
    cardSubtitle:
      "Graduated with a master's degree from Nanyang Technological University and certificate in Computational Finance from Carnegie Mellon University",
    title: "May 2021",
    cardDetailedText: "Learned various option pricing techniques, time series modelling, stochastic calculus and C++ programming."
  },
  {
    cardTitle: 'LegendArb Financial Group, Quantitative Analyst',
    cardSubtitle:
      "Started my first job",
    title: "Feb 2020 - Nov 2021",
    cardDetailedText: "Exposed to multiple areas of a proprietary trading business: database development, infrastructure development, market connectivity, trading alpha research and trading operations.",
  },
];

export const skills = [
  "Python",
  "C++",
  "Excel",
  "Javascipt (React Framework)",
  "Apache AirFlow",
  "Apache Spark (Big Data Analytics)",
  "Docker",
  "RabbitMQ",
  "C# - still in process of learning"
];