/*
 * Portfolio content lives here, separate from presentation logic.
 * Edit projects, skills, jobs and principles without changing HTML/CSS.
 * All figures are based on the résumé provided by Matteo Alauddin.
 */
window.PORTFOLIO_DATA = {
  email: 'mohd.alauddin107@gmail.com',
  technologies: [
    'Python', 'FastAPI', 'asyncio', 'LangGraph', 'LangChain', 'PostgreSQL',
    'Redis', 'Celery', 'OpenTelemetry', 'AWS', 'Kubernetes', 'PyTorch', 'Kafka'
  ],
  pipeline: {
    input: 'Speech transcription and validated input enter the processing pipeline.',
    queue: 'Bounded concurrency, retries, backpressure, and idempotent job execution.',
    llm: 'Multi-step LLM calls and tools coordinate document-generation workflows.',
    output: 'Clinical documents are generated with attention to correctness, structure, and reliability.'
  },
  projects: [
    {
      id: 'clinical-ai',
      number: '01',
      title: 'Clinical AI Documentation Platform',
      shortTitle: 'Clinical AI Platform',
      category: 'AI / HEALTHCARE',
      filters: ['ai', 'backend'],
      dates: '2023 — PRESENT',
      company: 'HEIDI HEALTH',
      description: 'Production backend services coordinating transcription, LLM processing and structured clinical documentation at scale.',
      spotlight: '28%',
      spotlightLabel: 'less end-to-end latency',
      tags: ['Python', 'FastAPI', 'asyncio', 'Celery', 'AWS EKS'],
      art: 'clinical',
      challenge: 'Clinical documentation workflows need to move reliably between speech transcription, model processing, and generated notes, even when dependency performance changes or demand spikes.',
      contribution: [
        'Developed FastAPI and aiohttp services connecting speech transcription, LLM processing and document generation.',
        'Redesigned async jobs with bounded concurrency, backpressure, retries and idempotent execution.',
        'Improved PostgreSQL access patterns and introduced stronger health checks, deployment verification and rollback procedures.'
      ],
      outcomes: ['28% lower end-to-end processing latency', '75,000+ consultation jobs supported weekly', '2.3× worker throughput and job failure rate reduced from 2.4% to 0.6%'],
      note: 'Employer project. Source code and live internal systems are not public.'
    },
    {
      id: 'llm-eval',
      number: '02',
      title: 'LLM Evaluation & Observability Framework',
      shortTitle: 'LLM Evaluation',
      category: 'AI / RELIABILITY',
      filters: ['ai'],
      dates: '2024 — PRESENT',
      company: 'HEIDI HEALTH',
      description: 'Evaluation, tracing, and diagnostics that make clinical AI workflows easier to test, measure, and improve.',
      spotlight: '560+',
      spotlightLabel: 'clinical test scenarios',
      tags: ['Pytest', 'LangSmith', 'LangGraph', 'OpenTelemetry', 'Grafana'],
      art: 'evaluation',
      challenge: 'LLM outputs can drift in factual accuracy, formatting, or completeness. Teams need reproducible checks and traceability across model and service boundaries.',
      contribution: [
        'Built automated evaluations covering factual accuracy, formatting, completeness and prompt regressions.',
        'Used LangSmith, model traces, OpenTelemetry, Prometheus and Grafana to connect quality signals with service telemetry.',
        'Made background-job and external dependency failures easier to diagnose across system boundaries.'
      ],
      outcomes: ['560+ clinical evaluation scenarios', '33% fewer post-deployment quality issues', 'Incident diagnosis time reduced from 52 to 18 minutes'],
      note: 'Employer project. Examples are high-level to avoid exposing sensitive systems.'
    },
    {
      id: 'visual-intelligence',
      number: '03',
      title: 'Visual Intelligence Processing Pipeline',
      shortTitle: 'Visual Intelligence',
      category: 'COMPUTER VISION / DATA',
      filters: ['vision', 'backend'],
      dates: '2021 — 2023',
      company: 'IPSOS',
      description: 'High-throughput ingestion and processing services for consumer images, classification requests, and visual analytics.',
      spotlight: '1.2M',
      spotlightLabel: 'images processed per week',
      tags: ['Python', 'FastAPI', 'PyTorch', 'OpenCV', 'Kafka'],
      art: 'vision',
      challenge: 'Image analysis must absorb irregular ingestion spikes while protecting downstream inference services and preserving consistent data availability.',
      contribution: [
        'Created asynchronous APIs for image ingestion, classification requests, and analytics results.',
        'Built preprocessing and recognition workflows with PyTorch and OpenCV.',
        'Reworked worker pipelines using Kafka and Redis to improve performance during ingestion peaks.'
      ],
      outcomes: ['Approximately 1.2 million images processed per week', '1.9× sustained pipeline throughput', '37% less queue delay under peak traffic'],
      note: 'Employer project. Source code and production data are not public.'
    },
    {
      id: 'cv-quality',
      number: '04',
      title: 'Computer Vision Quality Toolkit',
      shortTitle: 'Vision Quality Toolkit',
      category: 'COMPUTER VISION / EVALUATION',
      filters: ['vision'],
      dates: '2022 — 2023',
      company: 'IPSOS',
      description: 'Automated validation, dataset checks, and experimental augmentation for challenging visual classification cases.',
      spotlight: '31%',
      spotlightLabel: 'broader rare-case coverage',
      tags: ['PyTorch', 'OpenCV', 'Diffusion Models', 'Pytest'],
      art: 'quality',
      challenge: 'Rare and difficult visual scenarios were underrepresented in evaluation data, making it harder to assess model behavior before release.',
      contribution: [
        'Contributed automated checks for classification input and output quality.',
        'Explored image augmentation using diffusion models in late 2022.',
        'Worked with data scientists to make validation sets more representative.'
      ],
      outcomes: ['31% improvement in rare-scenario test coverage', '21% fewer false-positive results in internal validation datasets across image preprocessing work'],
      note: 'Employer project. Model assets and datasets are not available publicly.'
    },
    {
      id: 'booking-platform',
      number: '05',
      title: 'Booking & Business Integration Platform',
      shortTitle: 'Booking Platform',
      category: 'BACKEND / TRANSACTIONS',
      filters: ['backend'],
      dates: '2019 — 2021',
      company: 'CODIMENTA',
      description: 'Transaction-safe APIs for bookings, inventory, customer management, payments, and third-party integrations.',
      spotlight: '15K',
      spotlightLabel: 'monthly transactions supported',
      tags: ['Django REST', 'PostgreSQL', 'Redis', 'Celery'],
      art: 'booking',
      challenge: 'Business applications handling bookings and payments require predictable performance, correct transaction handling and dependable third-party integrations.',
      contribution: [
        'Built Django REST Framework modules for booking, inventory and order management.',
        'Integrated payment gateways, notifications and external APIs with retries and duplicate-transaction safeguards.',
        'Optimized database access and added Redis caching and automated release checks.'
      ],
      outcomes: ['Approximately 15,000 transactions per month', 'Duplicate booking and payment records reduced from 1.1% to 0.2%', 'p95 API latency reduced from 680 ms to 310 ms in internal load tests'],
      note: 'Employer project. No public repository or demo provided.'
    }
  ],
  skills: [
    {
      number: '01 / 04', icon: '⌘',
      title: 'Backend & APIs',
      desc: 'Typed Python services, concurrency-aware APIs, and maintainable application architecture.',
      points: ['Async Python & asyncio', 'FastAPI · aiohttp · Django', 'REST APIs · gRPC · SQLAlchemy'],
      tags: ['Python', 'FastAPI', 'Pydantic', 'Django']
    },
    {
      number: '02 / 04', icon: '✳',
      title: 'AI Platforms & LLMs',
      desc: 'Production orchestration and evaluation for real-world ML and language-model workflows.',
      points: ['LLM orchestration & tool use', 'LangChain · LangGraph · LangSmith', 'Prompt & regression evaluation'],
      tags: ['LLMs', 'RAG', 'PyTorch', 'NLP']
    },
    {
      number: '03 / 04', icon: '▤',
      title: 'Data & Async Workloads',
      desc: 'High-throughput task processing, careful data modeling, and queues designed for recovery.',
      points: ['Celery · Kafka · RabbitMQ', 'PostgreSQL · Redis · MongoDB', 'Retries · backpressure · idempotency'],
      tags: ['PostgreSQL', 'Redis', 'Kafka', 'Celery']
    },
    {
      number: '04 / 04', icon: '◈',
      title: 'Cloud & Reliability',
      desc: 'Observable cloud services with repeatable delivery and practical incident investigation.',
      points: ['AWS · Docker · Kubernetes', 'Terraform · Helm · CI/CD', 'Tracing · metrics · root cause analysis'],
      tags: ['AWS', 'OpenTelemetry', 'Grafana', 'Terraform']
    }
  ],
  experience: [
    {
      company: 'Heidi Health', location: 'MELBOURNE, AUSTRALIA · REMOTE',
      role: 'Senior Backend Engineer', dates: 'SEP 2023 — PRESENT', range: '2023 / NOW',
      summary: 'Building the backend foundations for clinical transcription, AI-assisted documentation, and integrations with healthcare systems.',
      bullets: ['Reduced end-to-end processing latency by 28% while supporting 75K+ weekly jobs.', 'Improved worker throughput 2.3× and automated workflow completion from 89% to 96%.', 'Introduced evaluation, tracing, deployment checks, and production diagnostics.'],
      tags: ['Python', 'FastAPI', 'LangGraph', 'AWS', 'OpenTelemetry']
    },
    {
      company: 'Ipsos', location: 'PARIS, FRANCE · REMOTE',
      role: 'Backend Software Engineer', dates: 'APR 2021 — JUL 2023', range: '2021 / 2023',
      summary: 'Developing APIs and large-scale processing pipelines for image recognition and AI-assisted consumer intelligence.',
      bullets: ['Supported image processing of approximately 1.2M images each week.', 'Improved peak-traffic queue performance and sustained throughput.', 'Expanded CV evaluation tooling and improved operational observability.'],
      tags: ['Python', 'FastAPI', 'PyTorch', 'Kafka', 'Kubernetes']
    },
    {
      company: 'Codimenta', location: 'DUBAI, UAE · ONSITE',
      role: 'Backend Engineer / Engineering Intern', dates: 'APR 2017 — FEB 2021', range: '2017 / 2021',
      summary: 'Progressed from internship to full-time backend engineering, building booking, inventory, and payment integrations.',
      bullets: ['Built 25+ REST API endpoints during the internship period.', 'Supported approximately 15K monthly transactions in production applications.', 'Improved duplicate-transaction safeguards and p95 response times.'],
      tags: ['Python', 'Django', 'PostgreSQL', 'Redis', 'GitLab CI']
    }
  ],
  principles: [
    { number: '01', title: 'Architect for the failure path', desc: 'Timeouts, retries, duplicate events, and partial failures are first-class design concerns — not afterthoughts.' },
    { number: '02', title: 'Measure before optimizing', desc: 'Use latency distributions, query plans, throughput, and trace data to target the real bottleneck.' },
    { number: '03', title: 'Make AI quality observable', desc: 'Regression suites, model traces, and outcome-focused evaluation turn changing model behavior into actionable evidence.' },
    { number: '04', title: 'Ship safely, improve continuously', desc: 'Small changes, reliable deployments, health checks, and clear rollback paths make production delivery dependable.' }
  ]
};
