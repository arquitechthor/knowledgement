/**
 * CONFIGURACIÓN DEL SITIO — Knowledgement
 * =========================================
 *
 * Para agregar nuevo contenido:
 *
 *  1. Agrega tu archivo .md en docs/content/Carrera Arquitechthor/...
 *     (puedes crear subcarpetas si lo necesitas)
 *
 *  2. Agrega una entrada en el array `nav` siguiendo el patrón:
 *
 *     // Página simple (sin hijos):
 *     { title: "Mi tema", icon: "📄", file: "content/Carrera Arquitechthor/Mi tema.md" }
 *
 *     // Tema con sub-páginas:
 *     {
 *       title: "Mi tema",
 *       icon: "📁",
 *       file: "content/Carrera Arquitechthor/Mi tema.md",   // índice del tema (opcional)
 *       children: [
 *         { title: "Sub-página 1", file: "content/Carrera Arquitechthor/Mi tema/Sub-página 1.md" },
 *       ]
 *     }
 *
 *     // Sección nueva (level):
 *     { id: "level-X", section: "Level X — Nombre", icon: "🆕", items: [ ... ] }
 *
 *  3. ¡Guarda y listo! No se necesita compilar ni instalar nada.
 *
 * =========================================
 */

const SITE_CONFIG = {
  title: "Knowledgement",
  description: "Base de conocimientos de informática y desarrollo de software",

  /** URL del repositorio — se usa en el botón de GitHub */
  githubUrl: "https://github.com/arquitechthor/knowledgement",

  /** Árbol de navegación */
  nav: [

    // =========================================
    // LEVEL 0 — EXTRA SKILLS
    // =========================================
    {
      id: "level-0",
      section: "Level 0 — Extra Skills",
      icon: "⭐",
      items: [
        {
          title: "Scrum",
          icon: "🔄",
          file: "content/Carrera Arquitechthor/Scrum.md",
          children: [
            { title: "¿Qué es agilidad?",                          file: "content/Carrera Arquitechthor/Scrum/Qué es agilidad.md" },
            { title: "El manifiesto ágil",                         file: "content/Carrera Arquitechthor/Scrum/El manifiesto ágil.md" },
            { title: "Principios del manifiesto ágil",             file: "content/Carrera Arquitechthor/Scrum/Principios del manifiesto ágil.md" },
            { title: "¿Qué es Scrum y para qué sirve?",           file: "content/Carrera Arquitechthor/Scrum/Qué es scrum y para qué sirve.md" },
            { title: "Valores de Scrum",                           file: "content/Carrera Arquitechthor/Scrum/Valores de scrum.md" },
            { title: "Términos básicos y 11 elementos",            file: "content/Carrera Arquitechthor/Scrum/Términos básicos y los 11 elementos fundamentales.md" },
            { title: "Product Owner",                              file: "content/Carrera Arquitechthor/Scrum/Product owner.md" },
            { title: "Development Team",                           file: "content/Carrera Arquitechthor/Scrum/Development team.md" },
            { title: "Scrum Team",                                 file: "content/Carrera Arquitechthor/Scrum/Scrum team.md" },
            { title: "Scrum Master",                               file: "content/Carrera Arquitechthor/Scrum/Scrum master.md" },
            { title: "Sprint Planning",                            file: "content/Carrera Arquitechthor/Scrum/Sprint planning.md" },
            { title: "Daily Meeting",                              file: "content/Carrera Arquitechthor/Scrum/Daily meeting.md" },
            { title: "Sprint Review",                              file: "content/Carrera Arquitechthor/Scrum/Sprint review.md" },
            { title: "Retrospectiva",                              file: "content/Carrera Arquitechthor/Scrum/Retrospectiva.md" },
            { title: "Stakeholder",                                file: "content/Carrera Arquitechthor/Scrum/Stakeholder.md" },
            { title: "Kanban",                                     file: "content/Carrera Arquitechthor/Scrum/Kanban.md" },
            { title: "Team Agreements",                            file: "content/Carrera Arquitechthor/Scrum/Team agreements.md" },
          ]
        },
        {
          title: "English",
          icon: "🇬🇧",
          file: "content/Carrera Arquitechthor/English.md",
          children: [
            { title: "Articles A and An",                          file: "content/Carrera Arquitechthor/English/Articles a and an.md" },
            { title: "Conditionals",                               file: "content/Carrera Arquitechthor/English/Conditionals.md" },
            { title: "Present Perfect",                            file: "content/Carrera Arquitechthor/English/Present perfect.md" },
            { title: "Past Perfect",                               file: "content/Carrera Arquitechthor/English/Past perfect.md" },
            { title: "Past Perfect – Exposición",                  file: "content/Carrera Arquitechthor/English/Past perfect expo.md" },
            { title: "Reported Speech",                            file: "content/Carrera Arquitechthor/English/Reported speech.md" },
            { title: "Programming Vocabulary",                     file: "content/Carrera Arquitechthor/English/Programming vocabulary.md" },
            { title: "How to Keep Studying While Traveling",       file: "content/Carrera Arquitechthor/English/How to keep studying while traveling.md" },
            { title: "Lecciones en YouTube",                       file: "content/Carrera Arquitechthor/English/Lecciones en youtube.md" },
            { title: "Music to Enjoy",                             file: "content/Carrera Arquitechthor/English/Music to enjoy.md" },
          ]
        },
        {
          title: "GNU / Linux",
          icon: "🐧",
          file: "content/Carrera Arquitechthor/Gnu linux.md",
          children: [
            { title: "Lista de comandos interesantes",             file: "content/Carrera Arquitechthor/GNU Linux/Lista de comandos interesantes.md" },
          ]
        },
      ]
    },

    // =========================================
    // LEVEL 1 — FUNDAMENTOS
    // =========================================
    {
      id: "level-1",
      section: "Level 1 — Fundamentos",
      icon: "🏗️",
      items: [
        {
          title: "IDE",
          icon: "💻",
          file: "content/Carrera Arquitechthor/Ide.md",
          children: [
            { title: "IntelliJ IDEA",                              file: "content/Carrera Arquitechthor/IDE/Intellij.md" },
            { title: "IntelliJ — Plugins",                         file: "content/Carrera Arquitechthor/IDE/IntelliJ/Plugins.md" },
            { title: "Visual Studio Code",                         file: "content/Carrera Arquitechthor/IDE/Visual studio code.md" },
            { title: "VS Code — Plugins",                          file: "content/Carrera Arquitechthor/IDE/Visual Studio Code/Plugins.md" },
          ]
        },
        {
          title: "Conceptos básicos de programación",
          icon: "📐",
          file: "content/Carrera Arquitechthor/Conceptos básicos de programación.md",
          children: [
            { title: "Programación orientada a objetos",           file: "content/Carrera Arquitechthor/Conceptos básicos de programación/Programación orientada a objetos.md" },
            { title: "Cláusulas de guarda",                        file: "content/Carrera Arquitechthor/Conceptos básicos de programación/Clausulas de guarda.md" },
          ]
        },
        {
          title: "Principios de programación",
          icon: "📜",
          file: "content/Carrera Arquitechthor/Principios de programación.md",
          children: [
            { title: "DDD — Domain-Driven Design",                 file: "content/Carrera Arquitechthor/Principios de Programación/Ddd.md" },
          ]
        },
        {
          title: "Versioning",
          icon: "🔀",
          file: "content/Carrera Arquitechthor/Versioning.md",
          children: [
            { title: "Git",                                        file: "content/Carrera Arquitechthor/Versioning/Git.md" },
            { title: "Git — Lista de comandos",                    file: "content/Carrera Arquitechthor/Versioning/Git/Lista de comandos.md" },
            { title: "Git — Notas interesantes",                   file: "content/Carrera Arquitechthor/Versioning/Git/Notas interesantes.md" },
            { title: "Conventional Commits",                       file: "content/Carrera Arquitechthor/Versioning/Conventional commits.md" },
          ]
        },
        {
          title: "Bases de datos",
          icon: "🗄️",
          file: "content/Carrera Arquitechthor/Bases de datos.md",
          children: [
            { title: "MySQL",                                      file: "content/Carrera Arquitechthor/Bases de Datos/Mysql.md" },
            { title: "Oracle",                                     file: "content/Carrera Arquitechthor/Bases de Datos/Oracle.md" },
            { title: "PostgreSQL",                                 file: "content/Carrera Arquitechthor/Bases de Datos/Postgres.md" },
            { title: "MongoDB",                                    file: "content/Carrera Arquitechthor/Bases de Datos/Mongodb.md" },
            { title: "Redis",                                      file: "content/Carrera Arquitechthor/Bases de Datos/Redis.md" },
            { title: "H2",                                         file: "content/Carrera Arquitechthor/Bases de Datos/H2.md" },
          ]
        },
      ]
    },

    // =========================================
    // LEVEL 2 — PROGRAMACIÓN
    // =========================================
    {
      id: "level-2",
      section: "Level 2 — Programación",
      icon: "⚙️",
      items: [
        {
          title: "Frontend",
          icon: "🖼️",
          file: "content/Carrera Arquitechthor/Frontend.md",
          children: [
            { title: "JavaScript",                                 file: "content/Carrera Arquitechthor/Frontend/Javascript.md" },
            { title: "JavaScript — Debugging",                     file: "content/Carrera Arquitechthor/Frontend/JavaScript/Debugging.md" },
            { title: "Jest",                                       file: "content/Carrera Arquitechthor/Frontend/Jest.md" },
            { title: "Bibliotecas y Frameworks",                   file: "content/Carrera Arquitechthor/Frontend/Bibliotecas y frameworks.md" },
            { title: "Angular",                                    file: "content/Carrera Arquitechthor/Frontend/Bibliotecas y Frameworks/Angular.md" },
            { title: "React.js",                                   file: "content/Carrera Arquitechthor/Frontend/Bibliotecas y Frameworks/Reactjs.md" },
          ]
        },
        {
          title: "Java",
          icon: "☕",
          file: "content/Carrera Arquitechthor/Java.md",
          children: [
            { title: "Lombok",                                     file: "content/Carrera Arquitechthor/Java/Lombok.md" },
            { title: "Streams",                                    file: "content/Carrera Arquitechthor/Java/Stream.md" },
            { title: "Programación funcional",                     file: "content/Carrera Arquitechthor/Java/Programación funcional.md" },
            { title: "Dependencias",                               file: "content/Carrera Arquitechthor/Java/Dependencias.md" },
            { title: "Maven",                                      file: "content/Carrera Arquitechthor/Java/Dependencias/Maven.md" },
          ]
        },
        {
          title: "Testing",
          icon: "🧪",
          file: "content/Carrera Arquitechthor/Testing.md",
          children: [
            { title: "JUnit",                                      file: "content/Carrera Arquitechthor/Testing/Junit.md" },
            { title: "TDD",                                        file: "content/Carrera Arquitechthor/Testing/Tdd.md" },
            { title: "Mitos del testing",                          file: "content/Carrera Arquitechthor/Testing/Mitos.md" },
          ]
        },
        {
          title: "Spring Framework",
          icon: "🍃",
          file: "content/Carrera Arquitechthor/Spring framework.md",
          children: [
            { title: "Cache",                                      file: "content/Carrera Arquitechthor/Spring Framework/Cache.md" },
            { title: "Spring AI",                                  file: "content/Carrera Arquitechthor/Spring Framework/Spring ai.md" },
            { title: "Ámbito de un Bean",                          file: "content/Carrera Arquitechthor/Spring Framework/Qué es el ámbito de un bean.md" },
          ]
        },
        {
          title: "Queues",
          icon: "📨",
          file: "content/Carrera Arquitechthor/Queues.md",
          children: [
            { title: "Apache Kafka",                               file: "content/Carrera Arquitechthor/Queues/Apache kafka.md" },
          ]
        },
        {
          title: "REST API",
          icon: "🌐",
          file: "content/Carrera Arquitechthor/Rest api.md",
          children: [
            { title: "Web Service",                                file: "content/Carrera Arquitechthor/Rest API/Web service.md" },
            { title: "Apigee",                                     file: "content/Carrera Arquitechthor/Rest API/Apigee.md" },
          ]
        },
        {
          title: "gRPC",
          icon: "📡",
          file: "content/Carrera Arquitechthor/Grpc.md",
          children: [
            { title: "¿Qué es gRPC?",                              file: "content/Carrera Arquitechthor/gRPC/Qué es grpc.md" },
          ]
        },
      ]
    },

    // =========================================
    // LEVEL 3 — INGENIERÍA DE SOFTWARE
    // =========================================
    {
      id: "level-3",
      section: "Level 3 — Ingeniería de Software",
      icon: "🏛️",
      items: [
        {
          title: "Clean Code",
          icon: "✨",
          file: "content/Carrera Arquitechthor/Clean code.md",
        },
        {
          title: "SOLID",
          icon: "🧱",
          file: "content/Carrera Arquitechthor/Solid.md",
          children: [
            { title: "Introducción del autor",                     file: "content/Carrera Arquitechthor/SOLID/Introducción del autor.md" },
            { title: "Introducción personal",                      file: "content/Carrera Arquitechthor/SOLID/Introducción personal.md" },
            { title: "SRP — Responsabilidad única",                file: "content/Carrera Arquitechthor/SOLID/Srp el principio de responsabilidad única.md" },
            { title: "OCP — Abierto-cerrado",                      file: "content/Carrera Arquitechthor/SOLID/Ocp principio abierto-cerrado.md" },
            { title: "LSP — Sustitución de Liskov",                file: "content/Carrera Arquitechthor/SOLID/Lsp el principio de sustitución de liskov.md" },
            { title: "ISP — Segregación de interfaces",            file: "content/Carrera Arquitechthor/SOLID/Isp el principio de segregación de interfaces.md" },
            { title: "DIP — Inversión de dependencia",             file: "content/Carrera Arquitechthor/SOLID/Dip el principio de inversión de dependencia.md" },
          ]
        },
        {
          title: "Design Patterns",
          icon: "🎨",
          file: "content/Carrera Arquitechthor/Design patterns.md",
          children: [
            { title: "Strategy",                                   file: "content/Carrera Arquitechthor/Design Patterns/Strategy.md" },
          ]
        },
        {
          title: "Complejidad",
          icon: "📊",
          file: "content/Carrera Arquitechthor/Complejidad.md",
        },
      ]
    },

    // =========================================
    // LEVEL 4 — ARQUITECTURA / DEVOPS
    // =========================================
    {
      id: "level-4",
      section: "Level 4 — Arquitectura / DevOps",
      icon: "🏢",
      items: [
        {
          title: "CI/CD",
          icon: "🚀",
          file: "content/Carrera Arquitechthor/Cd ci.md",
        },
        {
          title: "Arquitectura",
          icon: "🏛️",
          file: "content/Carrera Arquitechthor/Arquitectura.md",
          children: [
            { title: "¿Qué es arquitectura?",                      file: "content/Carrera Arquitechthor/Arquitectura/Qué es arquitectura.md" },
            { title: "Arquitectura de microservicios",             file: "content/Carrera Arquitechthor/Arquitectura/Arquitectura de microservicios.md" },
            { title: "Resiliencia",                                file: "content/Carrera Arquitechthor/Arquitectura/Resiliencia.md" },
          ]
        },
        {
          title: "Docker",
          icon: "🐳",
          file: "content/Carrera Arquitechthor/Dockers.md",
          children: [
            { title: "¿Qué es Docker?",                            file: "content/Carrera Arquitechthor/Dockers/Qué es docker.md" },
            { title: "¿Qué es un contenedor?",                     file: "content/Carrera Arquitechthor/Dockers/Qué es un contenedor.md" },
            { title: "¿Por qué Docker?",                           file: "content/Carrera Arquitechthor/Dockers/Por qué docker.md" },
            { title: "Descarga e instalación",                     file: "content/Carrera Arquitechthor/Dockers/Descarga.md" },
            { title: "Arquitectura Docker",                        file: "content/Carrera Arquitechthor/Dockers/Arquitectura docker.md" },
            { title: "Comandos",                                   file: "content/Carrera Arquitechthor/Dockers/Comandos.md" },
          ]
        },
        {
          title: "Kubernetes",
          icon: "☸️",
          file: "content/Carrera Arquitechthor/Kubernetes.md",
        },
        {
          title: "Monitoring",
          icon: "📈",
          file: "content/Carrera Arquitechthor/Monitoring.md",
        },
        {
          title: "DevOps",
          icon: "♾️",
          file: "content/Carrera Arquitechthor/Devops.md",
        },
      ]
    },

    // =========================================
    // LEVEL 5 — CLOUD
    // =========================================
    {
      id: "level-5",
      section: "Level 5 — Cloud",
      icon: "☁️",
      items: [
        {
          title: "Cloud Computing",
          icon: "☁️",
          file: "content/Carrera Arquitechthor/Cloud computing.md",
          children: [
            { title: "AWS",                                        file: "content/Carrera Arquitechthor/Cloud Computing/Aws.md" },
            { title: "AWS — Enlaces",                              file: "content/Carrera Arquitechthor/Cloud Computing/AWS/Enlaces.md" },
          ]
        },
        {
          title: "Microservices with Spring Cloud",
          icon: "🌐",
          file: "content/Carrera Arquitechthor/Microservices with spring cloud.md",
          children: [
            { title: "Ventajas de los microservicios",             file: "content/Carrera Arquitechthor/Microservices with Spring Cloud/Ventajas de los microservicios.md" },
            { title: "Desafíos",                                   file: "content/Carrera Arquitechthor/Microservices with Spring Cloud/Desafíos.md" },
            { title: "Paradigmas de comunicación",                 file: "content/Carrera Arquitechthor/Microservices with Spring Cloud/Paradigmas de comunicación.md" },
            { title: "Config Server",                              file: "content/Carrera Arquitechthor/Microservices with Spring Cloud/Config server.md" },
            { title: "Config",                                     file: "content/Carrera Arquitechthor/Microservices with Spring Cloud/Config.md" },
            { title: "Registry — Service Discovery",               file: "content/Carrera Arquitechthor/Microservices with Spring Cloud/Registry.md" },
            { title: "API Gateway / Edge Service",                 file: "content/Carrera Arquitechthor/Microservices with Spring Cloud/Api gateway edge service.md" },
            { title: "Load Balancer",                              file: "content/Carrera Arquitechthor/Microservices with Spring Cloud/Load balancer.md" },
            { title: "Circuit Breaker",                            file: "content/Carrera Arquitechthor/Microservices with Spring Cloud/Circuit breaker.md" },
            { title: "Patrones de resiliencia",                    file: "content/Carrera Arquitechthor/Microservices with Spring Cloud/Patrones de resiliencia.md" },
            { title: "Feign",                                      file: "content/Carrera Arquitechthor/Microservices with Spring Cloud/Feign.md" },
            { title: "Sleuth — Distributed Tracing",               file: "content/Carrera Arquitechthor/Microservices with Spring Cloud/Sleuth.md" },
            { title: "Actuator",                                   file: "content/Carrera Arquitechthor/Microservices with Spring Cloud/Actuator.md" },
            { title: "Log Center",                                 file: "content/Carrera Arquitechthor/Microservices with Spring Cloud/Log center.md" },
            { title: "Monitoring",                                 file: "content/Carrera Arquitechthor/Microservices with Spring Cloud/Monitoring.md" },
            { title: "Enlaces",                                    file: "content/Carrera Arquitechthor/Microservices with Spring Cloud/Enlaces.md" },
          ]
        },
      ]
    },

    // =========================================
    // EXTRAS
    // =========================================
    {
      id: "extras",
      section: "Extras",
      icon: "🔗",
      items: [
        {
          title: "Next to Study",
          icon: "📋",
          file: "content/Carrera Arquitechthor/Next to study.md",
        },
        {
          title: "Enlaces",
          icon: "🔗",
          file: "content/Carrera Arquitechthor/Enlaces.md",
        },
      ]
    },

  ] // end nav
}; // end SITE_CONFIG
