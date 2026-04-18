const CS_DATA = {
  center: {
    id: "cs",
    label: "Computer\nScience",
    icon: "⬡",
    color: "#4f98a3"
  },
  sections: [
    {
      id: "theory",
      label: "Теоретическая\nинформатика",
      icon: "∑",
      color: "#7a39bb",
      colorDark: "#a86fdf",
      angle: 270,
      title: "Теоретическая информатика",
      subtitle: "Математические основы вычислений",
      description: "Теоретическая информатика изучает фундаментальные вопросы: что можно вычислить, насколько быстро и с какими ресурсами? Это математическая основа всей CS.",
      topics: [
        { name: "Теория автоматов", desc: "Конечные автоматы, регулярные языки, КС-грамматики, машины Тьюринга" },
        { name: "Теория сложности", desc: "Классы P, NP, NP-полнота, сведения, доказательства сложности" },
        { name: "Теория вычислимости", desc: "Проблема остановки, неразрешимые задачи, тезис Чёрча-Тьюринга" },
        { name: "Теория информации", desc: "Энтропия Шеннона, сжатие данных, пропускная способность каналов" },
        { name: "Криптография", desc: "Симметричное и асимметричное шифрование, хэш-функции, протоколы с нулевым разглашением" },
        { name: "Логика", desc: "Логика высказываний, предикатов, модальная логика, доказательство теорем" }
      ],
      links: [
        { text: "Sipser: Теория вычислений", url: "https://www.amazon.com/Introduction-Theory-Computation-Michael-Sipser/dp/113318779X" },
        { text: "Арора, Барак: Вычислительная сложность", url: "https://theory.cs.princeton.edu/complexity/" }
      ]
    },
    {
      id: "arch",
      label: "Архитектура\nкомпьютеров",
      icon: "⬚",
      color: "#964219",
      colorDark: "#bb653b",
      angle: 306,
      title: "Архитектура компьютеров",
      subtitle: "Организация и устройство вычислительных систем",
      description: "Изучает физическое и логическое устройство ЭВМ — от транзисторов до операционных систем. Охватывает всё, что находится «под» языком программирования.",
      topics: [
        { name: "Логические схемы", desc: "Булева алгебра, вентили, комбинационные и последовательностные схемы, АЛУ" },
        { name: "Процессоры (ISA)", desc: "RISC vs CISC, конвейеризация, суперскалярность, x86-64, ARM, RISC-V" },
        { name: "Иерархия памяти", desc: "Регистры, кэш (L1/L2/L3), DRAM, SSD/HDD, политики вытеснения, когерентность" },
        { name: "Параллелизм", desc: "SIMD, многоядерность, NUMA, GPU-архитектуры, синхронизация" },
        { name: "Операционные системы", desc: "Планировщики, управление памятью, файловые системы, системные вызовы" },
        { name: "Компиляторы", desc: "Лексический/синтаксический анализ, IR, оптимизация, кодогенерация" }
      ],
      links: [
        { text: "Patterson & Hennessy: Организация ЭВМ", url: "https://www.amazon.com/Computer-Organization-Design-RISC-V-Architecture/dp/0128203315" },
        { text: "CS:APP — Bryant & O'Hallaron", url: "https://csapp.cs.cmu.edu/" }
      ]
    },
    {
      id: "algorithms",
      label: "Алгоритмы и\nструктуры данных",
      icon: "λ",
      color: "#437a22",
      colorDark: "#6daa45",
      angle: 342,
      title: "Алгоритмы и структуры данных",
      subtitle: "Основа эффективного программирования",
      description: "Алгоритмы — это точные инструкции решения задач; структуры данных — способы организации информации. Вместе они определяют производительность любой программы.",
      topics: [
        { name: "Сортировка и поиск", desc: "QuickSort, MergeSort, HeapSort, бинарный поиск, хэш-таблицы" },
        { name: "Графовые алгоритмы", desc: "BFS/DFS, Дейкстра, Беллман-Форд, A*, остовные деревья (Kruskal, Prim)" },
        { name: "Деревья", desc: "BST, AVL, красно-чёрные деревья, B-деревья, кучи, segment tree, trie" },
        { name: "Динамическое программирование", desc: "Запоминание, табуляция, задачи: LCS, рюкзак, матричное умножение" },
        { name: "Жадные алгоритмы", desc: "Критерии применимости, расписания, сжатие Хаффмана, алгоритмы на графах" },
        { name: "Строки и тексты", desc: "KMP, Boyer-Moore, Rabin-Karp, суффиксные деревья и массивы" }
      ],
      links: [
        { text: "CLRS: Алгоритмы (Кормен и др.)", url: "https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/" },
        { text: "Визуализации: VisuAlgo", url: "https://visualgo.net/" }
      ]
    },
    {
      id: "languages",
      label: "Языки\nпрограммирования",
      icon: "{}",
      color: "#0e7c6e",
      colorDark: "#2fb8a4",
      angle: 18,
      title: "Языки программирования",
      subtitle: "Теория, парадигмы и реализация",
      description: "Изучает формальные основы языков: как они определяются, транслируются и исполняются. Охватывает теорию типов, парадигмы и реализацию интерпретаторов.",
      topics: [
        { name: "Парадигмы", desc: "Императивное, объектно-ориентированное, функциональное, логическое, реактивное программирование" },
        { name: "Системы типов", desc: "Статическая/динамическая типизация, вывод типов (Hindley-Milner), зависимые типы, generics" },
        { name: "Формальные грамматики", desc: "BNF/EBNF, LL/LR-парсинг, генераторы парсеров (ANTLR, Yacc), PEG-грамматики" },
        { name: "Семантика", desc: "Операционная, денотационная и аксиоматическая семантика, λ-исчисление" },
        { name: "Интерпретаторы и VM", desc: "AST-интерпретаторы, байт-код, JIT-компиляция, GC-алгоритмы" },
        { name: "Метапрограммирование", desc: "Макросы, рефлексия, кодогенерация, DSL-проектирование, шаблоны C++" }
      ],
      links: [
        { text: "PLAI: Programming Languages", url: "https://www.plai.org/" },
        { text: "Crafting Interpreters (Nystrom)", url: "https://craftinginterpreters.com/" }
      ]
    },
    {
      id: "ai",
      label: "Искусственный\nинтеллект",
      icon: "◈",
      color: "#d19900",
      colorDark: "#e8af34",
      angle: 54,
      title: "Искусственный интеллект",
      subtitle: "Машинное обучение, нейросети и рассуждения",
      description: "ИИ создаёт системы, способные воспринимать, рассуждать и действовать. От классических экспертных систем до современных LLM и диффузионных моделей.",
      topics: [
        { name: "Машинное обучение", desc: "Линейные модели, деревья решений, SVM, ансамбли (Random Forest, XGBoost)" },
        { name: "Глубокое обучение", desc: "CNN, RNN/LSTM, Transformer, диффузионные модели, GAN" },
        { name: "Обработка языка (NLP)", desc: "Токенизация, эмбеддинги, механизм внимания, BERT, GPT, LLaMA" },
        { name: "Компьютерное зрение", desc: "Детекция объектов, сегментация, YOLO, ViT, генерация изображений" },
        { name: "Обучение с подкреплением", desc: "MDP, Q-learning, Policy Gradient, PPO, AlphaGo/AlphaZero" },
        { name: "Поиск и планирование", desc: "Минимакс, Альфа-бета, MCTS, логические агенты, constraint satisfaction" }
      ],
      links: [
        { text: "fast.ai: Практический DL", url: "https://www.fast.ai/" },
        { text: "Andrej Karpathy: Zero to Hero", url: "https://karpathy.ai/zero-to-hero.html" }
      ]
    },
    {
      id: "databases",
      label: "Базы\nданных",
      icon: "◷",
      color: "#006494",
      colorDark: "#5591c7",
      angle: 90,
      title: "Базы данных",
      subtitle: "Хранение, запрос и управление данными",
      description: "Базы данных — фундамент информационных систем. Охватывают реляционные и NoSQL хранилища, транзакции, оптимизацию запросов и распределённые системы.",
      topics: [
        { name: "Реляционная модель", desc: "Нормализация (1NF–BCNF), реляционная алгебра, SQL (DDL/DML/DCL)" },
        { name: "Транзакции и ACID", desc: "Атомарность, согласованность, изолированность, долговечность, уровни изоляции, MVCC" },
        { name: "Хранилища и индексы", desc: "B+-деревья, хэш-индексы, LSM-деревья (RocksDB), columnstore" },
        { name: "NoSQL системы", desc: "Документные (MongoDB), ключ-значение (Redis), wide-column (Cassandra), графовые (Neo4j)" },
        { name: "Распределённые БД", desc: "CAP-теорема, консенсус (Raft/Paxos), репликация, шардирование, CockroachDB" },
        { name: "Потоковые данные", desc: "Apache Kafka, Flink, time-series (InfluxDB, TimescaleDB), OLAP vs OLTP" }
      ],
      links: [
        { text: "CMU 15-445: Системы БД", url: "https://15445.courses.cs.cmu.edu/" },
        { text: "Designing Data-Intensive Apps", url: "https://dataintensive.net/" }
      ]
    },
    {
      id: "networks",
      label: "Сети и\nраспред. системы",
      icon: "⬡",
      color: "#a12c7b",
      colorDark: "#d163a7",
      angle: 126,
      title: "Сети и распределённые системы",
      subtitle: "Связь, протоколы, масштабирование",
      description: "От физического уровня передачи сигналов до глобальных распределённых систем с тысячами узлов. Включает сетевые протоколы, безопасность и облачную архитектуру.",
      topics: [
        { name: "Модель TCP/IP", desc: "Физический, канальный, сетевой (IP/BGP), транспортный (TCP/UDP), прикладной уровни" },
        { name: "Протоколы приложений", desc: "HTTP/1.1, HTTP/2, HTTP/3 (QUIC), WebSocket, gRPC, MQTT, DNS" },
        { name: "Безопасность сетей", desc: "TLS/SSL, PKI, OAuth 2.0, JWT, межсетевые экраны, VPN, DDoS-защита" },
        { name: "Распределённые системы", desc: "Консистентность, согласованность в конечном счёте, CRDT, распределённые транзакции" },
        { name: "Облачная архитектура", desc: "Микросервисы, service mesh (Istio), Kubernetes, serverless, event-driven" },
        { name: "CDN и балансировка", desc: "Алгоритмы балансировки, edge computing, кэширование, Anycast routing" }
      ],
      links: [
        { text: "Computer Networks: Tanenbaum", url: "https://www.amazon.com/Computer-Networks-Andrew-Tanenbaum/dp/0132126958" },
        { text: "High Scalability", url: "http://highscalability.com/" }
      ]
    },
    {
      id: "security",
      label: "Информационная\nбезопасность",
      icon: "⊕",
      color: "#c0392b",
      colorDark: "#e74c3c",
      angle: 162,
      title: "Информационная безопасность",
      subtitle: "Защита систем, данных и коммуникаций",
      description: "Изучает методы защиты от атак на всех уровнях — от уязвимостей в коде до социальной инженерии. Объединяет криптографию, сетевую безопасность и безопасную разработку.",
      topics: [
        { name: "Threat Modeling", desc: "STRIDE, PASTA, Attack Trees, MITRE ATT&CK, анализ поверхности атаки" },
        { name: "Уязвимости и эксплойты", desc: "Buffer overflow, SQL injection, XSS, CSRF, RCE, CVE-процесс, CWE-классификация" },
        { name: "Пентест и Red Team", desc: "Разведка (OSINT), эксплуатация (Metasploit), повышение привилегий, lateral movement" },
        { name: "Криптография прикладная", desc: "AES, RSA, ECC, TLS-рукопожатие, PKI, HSM, управление ключами" },
        { name: "Безопасная разработка", desc: "OWASP Top 10, SAST/DAST, fuzzing, code review, DevSecOps, SDL" },
        { name: "Форензика", desc: "Анализ памяти/диска, сетевой форензик, incident response, цепочка доказательств" }
      ],
      links: [
        { text: "OWASP Top 10", url: "https://owasp.org/www-project-top-ten/" },
        { text: "The Web Application Hacker's Handbook", url: "https://portswigger.net/web-security" }
      ]
    },
    {
      id: "software_eng",
      label: "Программная\nинженерия",
      icon: "◻",
      color: "#1a6b8a",
      colorDark: "#3d9bbd",
      angle: 198,
      title: "Программная инженерия",
      subtitle: "Процессы, архитектура и качество ПО",
      description: "Дисциплина создания надёжного и поддерживаемого программного обеспечения в команде. Охватывает архитектуру, методологии разработки, тестирование и DevOps.",
      topics: [
        { name: "Паттерны проектирования", desc: "Gang of Four (Creational/Structural/Behavioral), SOLID, DRY, YAGNI, KISS" },
        { name: "Архитектурные стили", desc: "Монолит, микросервисы, CQRS, Event Sourcing, Hexagonal, Clean Architecture" },
        { name: "Методологии", desc: "Agile, Scrum, Kanban, XP, SAFe, планирование спринтов, ретроспективы" },
        { name: "Тестирование", desc: "Unit, integration, e2e, TDD, BDD, property-based testing, мутационное тестирование" },
        { name: "CI/CD и DevOps", desc: "Git flow, GitHub Actions, Docker, Kubernetes, IaC (Terraform), мониторинг" },
        { name: "Качество кода", desc: "Code review, статический анализ, рефакторинг, техдолг, документирование" }
      ],
      links: [
        { text: "Clean Code — Robert C. Martin", url: "https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882" },
        { text: "Software Engineering at Google", url: "https://abseil.io/resources/swe-book" }
      ]
    },
    {
      id: "blockchain",
      label: "Блокчейн",
      icon: "⛓",
      color: "#e67e22",
      colorDark: "#f39c12",
      angle: 234,
      title: "Блокчейн и децентрализованные системы",
      subtitle: "Распределённый реестр, смарт-контракты, криптоэкономика",
      description: "Блокчейн — класс распределённых систем с криптографически верифицируемой историей транзакций. Объединяет криптографию, теорию игр, p2p-сети и экономику.",
      topics: [
        { name: "Криптографические примитивы", desc: "Хэш-функции (SHA-256, Keccak), ECDSA, EdDSA, Merkle-деревья, ZK-доказательства" },
        { name: "Консенсус-протоколы", desc: "PoW, PoS, DPoS, BFT, Tendermint, Nakamoto consensus, Casper FFG" },
        { name: "Смарт-контракты", desc: "EVM, Solidity, формальная верификация, уязвимости (reentrancy, frontrunning)" },
        { name: "Кошельки и кастодия", desc: "HD-кошельки (BIP32/39/44), мультисиг, MPC-кастодия, аппаратные кошельки" },
        { name: "Масштабирование (L2)", desc: "Rollups (Optimistic/ZK), state channels, Plasma, sharding, Validium" },
        { name: "DeFi и протоколы", desc: "AMM (Uniswap), lending (Aave), оракулы (Chainlink), MEV, мосты между сетями" }
      ],
      links: [
        { text: "Bitcoin Whitepaper — Satoshi Nakamoto", url: "https://bitcoin.org/bitcoin.pdf" },
        { text: "Ethereum: Mastering Ethereum", url: "https://github.com/ethereumbook/ethereumbook" }
      ]
    }
  ]
};
