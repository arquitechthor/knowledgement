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
 *     { title: "Mi tema", icon: "📄", file: "content/Carrera Arquitechthor/Mi tema.html" }
 *
 *     // Tema con sub-páginas:
 *     {
 *       title: "Mi tema",
 *       icon: "📁",
 *       file: "content/Carrera Arquitechthor/Mi tema.html",   // índice del tema (opcional)
 *       children: [
 *         { title: "Sub-página 1", file: "content/Carrera Arquitechthor/Mi tema/Sub-página 1.html" },
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
          file: "content/Carrera Arquitechthor/Scrum.html",
          children: [
            { title: "¿Qué es agilidad?",                          file: "content/Carrera Arquitechthor/Scrum/Qué es agilidad.html" },
            { title: "El manifiesto ágil",                         file: "content/Carrera Arquitechthor/Scrum/El manifiesto ágil.html" },
            { title: "Principios del manifiesto ágil",             file: "content/Carrera Arquitechthor/Scrum/Principios del manifiesto ágil.html" },
            { title: "¿Qué es Scrum y para qué sirve?",           file: "content/Carrera Arquitechthor/Scrum/Qué es scrum y para qué sirve.html" },
            { title: "Valores de Scrum",                           file: "content/Carrera Arquitechthor/Scrum/Valores de scrum.html" },
            { title: "Términos básicos y 11 elementos",            file: "content/Carrera Arquitechthor/Scrum/Términos básicos y los 11 elementos fundamentales.html" },
            { title: "Product Owner",                              file: "content/Carrera Arquitechthor/Scrum/Product owner.html" },
            { title: "Development Team",                           file: "content/Carrera Arquitechthor/Scrum/Development team.html" },
            { title: "Scrum Team",                                 file: "content/Carrera Arquitechthor/Scrum/Scrum team.html" },
            { title: "Scrum Master",                               file: "content/Carrera Arquitechthor/Scrum/Scrum master.html" },
            { title: "Sprint Planning",                            file: "content/Carrera Arquitechthor/Scrum/Sprint planning.html" },
            { title: "Daily Meeting",                              file: "content/Carrera Arquitechthor/Scrum/Daily meeting.html" },
            { title: "Sprint Review",                              file: "content/Carrera Arquitechthor/Scrum/Sprint review.html" },
            { title: "Retrospectiva",                              file: "content/Carrera Arquitechthor/Scrum/Retrospectiva.html" },
            { title: "Stakeholder",                                file: "content/Carrera Arquitechthor/Scrum/Stakeholder.html" },
            { title: "Kanban",                                     file: "content/Carrera Arquitechthor/Scrum/Kanban.html" },
            { title: "Team Agreements",                            file: "content/Carrera Arquitechthor/Scrum/Team agreements.html" },
          ]
        },
        {
          title: "English",
          icon: "🇬🇧",
          file: "content/Carrera Arquitechthor/English.html",
          children: [
            { title: "Articles A and An",                          file: "content/Carrera Arquitechthor/English/Articles a and an.html" },
            { title: "Conditionals",                               file: "content/Carrera Arquitechthor/English/Conditionals.html" },
            { title: "Present Perfect",                            file: "content/Carrera Arquitechthor/English/Present perfect.html" },
            { title: "Past Perfect",                               file: "content/Carrera Arquitechthor/English/Past perfect.html" },
            { title: "Past Perfect – Exposición",                  file: "content/Carrera Arquitechthor/English/Past perfect expo.html" },
            { title: "Reported Speech",                            file: "content/Carrera Arquitechthor/English/Reported speech.html" },
            { title: "Programming Vocabulary",                     file: "content/Carrera Arquitechthor/English/Programming vocabulary.html" },
            { title: "How to Keep Studying While Traveling",       file: "content/Carrera Arquitechthor/English/How to keep studying while traveling.html" },
            { title: "Lecciones en YouTube",                       file: "content/Carrera Arquitechthor/English/Lecciones en youtube.html" },
            { title: "Music to Enjoy",                             file: "content/Carrera Arquitechthor/English/Music to enjoy.html" },
          ]
        },
        {
          title: "GNU / Linux",
          icon: "🐧",
          file: "content/Carrera Arquitechthor/Gnu linux.html",
          children: [
            { title: "Lista de comandos interesantes",             file: "content/Carrera Arquitechthor/GNU Linux/Lista de comandos interesantes.html" },
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
          file: "content/Carrera Arquitechthor/Ide.html",
          children: [
            { title: "IntelliJ IDEA",                              file: "content/Carrera Arquitechthor/IDE/Intellij.html" },
            { title: "IntelliJ — Plugins",                         file: "content/Carrera Arquitechthor/IDE/IntelliJ/Plugins.html" },
            { title: "Visual Studio Code",                         file: "content/Carrera Arquitechthor/IDE/Visual studio code.html" },
            { title: "VS Code — Plugins",                          file: "content/Carrera Arquitechthor/IDE/Visual Studio Code/Plugins.html" },
          ]
        },
        {
          title: "Conceptos básicos de programación",
          icon: "📐",
          file: "content/Carrera Arquitechthor/Conceptos básicos de programación.html",
          children: [
            { title: "Programación orientada a objetos",           file: "content/Carrera Arquitechthor/Conceptos básicos de programación/Programación orientada a objetos.html" },
            { title: "Cláusulas de guarda",                        file: "content/Carrera Arquitechthor/Conceptos básicos de programación/Clausulas de guarda.html" },
          ]
        },
        {
          title: "Principios de programación",
          icon: "📜",
          file: "content/Carrera Arquitechthor/Principios de programación.html",
          children: [
            { title: "DDD — Domain-Driven Design",                 file: "content/Carrera Arquitechthor/Principios de Programación/Ddd.html" },
          ]
        },
        {
          title: "Versioning",
          icon: "🔀",
          file: "content/Carrera Arquitechthor/Versioning.html",
          children: [
            { title: "Git",                                        file: "content/Carrera Arquitechthor/Versioning/Git.html" },
            { title: "Git — Lista de comandos",                    file: "content/Carrera Arquitechthor/Versioning/Git/Lista de comandos.html" },
            { title: "Git — Notas interesantes",                   file: "content/Carrera Arquitechthor/Versioning/Git/Notas interesantes.html" },
            { title: "Conventional Commits",                       file: "content/Carrera Arquitechthor/Versioning/Conventional commits.html" },
          ]
        },
        {
          title: "Bases de datos",
          icon: "🗄️",
          file: "content/Carrera Arquitechthor/Bases de datos.html",
          children: [
            { title: "MySQL",                                      file: "content/Carrera Arquitechthor/Bases de Datos/Mysql.html" },
            { title: "Oracle",                                     file: "content/Carrera Arquitechthor/Bases de Datos/Oracle.html" },
            { title: "PostgreSQL",                                 file: "content/Carrera Arquitechthor/Bases de Datos/Postgres.html" },
            { title: "MongoDB",                                    file: "content/Carrera Arquitechthor/Bases de Datos/Mongodb.html" },
            { title: "Redis",                                      file: "content/Carrera Arquitechthor/Bases de Datos/Redis.html" },
            { title: "H2",                                         file: "content/Carrera Arquitechthor/Bases de Datos/H2.html" },
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
          file: "content/Carrera Arquitechthor/Frontend.html",
          children: [
            { title: "JavaScript",                                 file: "content/Carrera Arquitechthor/Frontend/Javascript.html" },
            { title: "JavaScript — Debugging",                     file: "content/Carrera Arquitechthor/Frontend/JavaScript/Debugging.html" },
            { title: "Jest",                                       file: "content/Carrera Arquitechthor/Frontend/Jest.html" },
            { title: "Bibliotecas y Frameworks",                   file: "content/Carrera Arquitechthor/Frontend/Bibliotecas y frameworks.html" },
            { title: "Angular",                                    file: "content/Carrera Arquitechthor/Frontend/Bibliotecas y Frameworks/Angular.html" },
            { title: "React.js",                                   file: "content/Carrera Arquitechthor/Frontend/Bibliotecas y Frameworks/Reactjs.html" },
          ]
        },
        {
          title: "Java",
          icon: "☕",
          file: "content/Carrera Arquitechthor/Java.html",
          children: [
            { title: "Lombok",                                     file: "content/Carrera Arquitechthor/Java/Lombok.html" },
            { title: "Streams",                                    file: "content/Carrera Arquitechthor/Java/Stream.html" },
            { title: "Programación funcional",                     file: "content/Carrera Arquitechthor/Java/Programación funcional.html" },
            { title: "Dependencias",                               file: "content/Carrera Arquitechthor/Java/Dependencias.html" },
            { title: "Maven",                                      file: "content/Carrera Arquitechthor/Java/Dependencias/Maven.html" },
          ]
        },
        {
          title: "Testing",
          icon: "🧪",
          file: "content/Carrera Arquitechthor/Testing.html",
          children: [
            { title: "JUnit",                                      file: "content/Carrera Arquitechthor/Testing/Junit.html" },
            { title: "TDD",                                        file: "content/Carrera Arquitechthor/Testing/Tdd.html" },
            { title: "Mitos del testing",                          file: "content/Carrera Arquitechthor/Testing/Mitos.html" },
          ]
        },
        {
          title: "Spring Framework",
          icon: "🍃",
          file: "content/Carrera Arquitechthor/Spring framework.html",
          children: [
            { title: "Cache",                                      file: "content/Carrera Arquitechthor/Spring Framework/Cache.html" },
            { title: "Spring AI",                                  file: "content/Carrera Arquitechthor/Spring Framework/Spring ai.html" },
            { title: "Ámbito de un Bean",                          file: "content/Carrera Arquitechthor/Spring Framework/Qué es el ámbito de un bean.html" },
          ]
        },
        {
          title: "Queues",
          icon: "📨",
          file: "content/Carrera Arquitechthor/Queues.html",
          children: [
            { title: "Apache Kafka",                               file: "content/Carrera Arquitechthor/Queues/Apache kafka.html" },
          ]
        },
        {
          title: "REST API",
          icon: "🌐",
          file: "content/Carrera Arquitechthor/Rest api.html",
          children: [
            { title: "Web Service",                                file: "content/Carrera Arquitechthor/Rest API/Web service.html" },
            { title: "Apigee",                                     file: "content/Carrera Arquitechthor/Rest API/Apigee.html" },
          ]
        },
        {
          title: "gRPC",
          icon: "📡",
          file: "content/Carrera Arquitechthor/Grpc.html",
          children: [
            { title: "¿Qué es gRPC?",                              file: "content/Carrera Arquitechthor/gRPC/Qué es grpc.html" },
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
          file: "content/Carrera Arquitechthor/Clean code.html",
        },
        {
          title: "SOLID",
          icon: "🧱",
          file: "content/Carrera Arquitechthor/Solid.html",
          children: [
            { title: "Introducción del autor",                     file: "content/Carrera Arquitechthor/SOLID/Introducción del autor.html" },
            { title: "Introducción personal",                      file: "content/Carrera Arquitechthor/SOLID/Introducción personal.html" },
            { title: "SRP — Responsabilidad única",                file: "content/Carrera Arquitechthor/SOLID/Srp el principio de responsabilidad única.html" },
            { title: "OCP — Abierto-cerrado",                      file: "content/Carrera Arquitechthor/SOLID/Ocp principio abierto-cerrado.html" },
            { title: "LSP — Sustitución de Liskov",                file: "content/Carrera Arquitechthor/SOLID/Lsp el principio de sustitución de liskov.html" },
            { title: "ISP — Segregación de interfaces",            file: "content/Carrera Arquitechthor/SOLID/Isp el principio de segregación de interfaces.html" },
            { title: "DIP — Inversión de dependencia",             file: "content/Carrera Arquitechthor/SOLID/Dip el principio de inversión de dependencia.html" },
          ]
        },
        {
          title: "Design Patterns",
          icon: "🎨",
          file: "content/Carrera Arquitechthor/Design patterns.html",
          children: [
            { title: "Strategy",                                   file: "content/Carrera Arquitechthor/Design Patterns/Strategy.html" },
          ]
        },
        {
          title: "Complejidad",
          icon: "📊",
          file: "content/Carrera Arquitechthor/Complejidad.html",
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
          file: "content/Carrera Arquitechthor/Cd ci.html",
        },
        {
          title: "Arquitectura",
          icon: "🏛️",
          file: "content/Carrera Arquitechthor/Arquitectura.html",
          children: [
            { title: "¿Qué es arquitectura?",                      file: "content/Carrera Arquitechthor/Arquitectura/Qué es arquitectura.html" },
            { title: "Arquitectura de microservicios",             file: "content/Carrera Arquitechthor/Arquitectura/Arquitectura de microservicios.html" },
            { title: "Resiliencia",                                file: "content/Carrera Arquitechthor/Arquitectura/Resiliencia.html" },
          ]
        },
        {
          title: "Docker",
          icon: "🐳",
          file: "content/Carrera Arquitechthor/Dockers.html",
          children: [
            { title: "¿Qué es Docker?",                            file: "content/Carrera Arquitechthor/Dockers/Qué es docker.html" },
            { title: "¿Qué es un contenedor?",                     file: "content/Carrera Arquitechthor/Dockers/Qué es un contenedor.html" },
            { title: "¿Por qué Docker?",                           file: "content/Carrera Arquitechthor/Dockers/Por qué docker.html" },
            { title: "Descarga e instalación",                     file: "content/Carrera Arquitechthor/Dockers/Descarga.html" },
            { title: "Arquitectura Docker",                        file: "content/Carrera Arquitechthor/Dockers/Arquitectura docker.html" },
            { title: "Comandos",                                   file: "content/Carrera Arquitechthor/Dockers/Comandos.html" },
          ]
        },
        {
          title: "Kubernetes",
          icon: "☸️",
          file: "content/Carrera Arquitechthor/Kubernetes.html",
        },
        {
          title: "Monitoring",
          icon: "📈",
          file: "content/Carrera Arquitechthor/Monitoring.html",
        },
        {
          title: "DevOps",
          icon: "♾️",
          file: "content/Carrera Arquitechthor/Devops.html",
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
          file: "content/Carrera Arquitechthor/Cloud computing.html",
          children: [
            { title: "AWS",                                        file: "content/Carrera Arquitechthor/Cloud Computing/Aws.html" },
            { title: "AWS — Enlaces",                              file: "content/Carrera Arquitechthor/Cloud Computing/AWS/Enlaces.html" },
          ]
        },
        {
          title: "Microservices with Spring Cloud",
          icon: "🌐",
          file: "content/Carrera Arquitechthor/Microservices with spring cloud.html",
          children: [
            { title: "Ventajas de los microservicios",             file: "content/Carrera Arquitechthor/Microservices with Spring Cloud/Ventajas de los microservicios.html" },
            { title: "Desafíos",                                   file: "content/Carrera Arquitechthor/Microservices with Spring Cloud/Desafíos.html" },
            { title: "Paradigmas de comunicación",                 file: "content/Carrera Arquitechthor/Microservices with Spring Cloud/Paradigmas de comunicación.html" },
            { title: "Config Server",                              file: "content/Carrera Arquitechthor/Microservices with Spring Cloud/Config server.html" },
            { title: "Config",                                     file: "content/Carrera Arquitechthor/Microservices with Spring Cloud/Config.html" },
            { title: "Registry — Service Discovery",               file: "content/Carrera Arquitechthor/Microservices with Spring Cloud/Registry.html" },
            { title: "API Gateway / Edge Service",                 file: "content/Carrera Arquitechthor/Microservices with Spring Cloud/Api gateway edge service.html" },
            { title: "Load Balancer",                              file: "content/Carrera Arquitechthor/Microservices with Spring Cloud/Load balancer.html" },
            { title: "Circuit Breaker",                            file: "content/Carrera Arquitechthor/Microservices with Spring Cloud/Circuit breaker.html" },
            { title: "Patrones de resiliencia",                    file: "content/Carrera Arquitechthor/Microservices with Spring Cloud/Patrones de resiliencia.html" },
            { title: "Feign",                                      file: "content/Carrera Arquitechthor/Microservices with Spring Cloud/Feign.html" },
            { title: "Sleuth — Distributed Tracing",               file: "content/Carrera Arquitechthor/Microservices with Spring Cloud/Sleuth.html" },
            { title: "Actuator",                                   file: "content/Carrera Arquitechthor/Microservices with Spring Cloud/Actuator.html" },
            { title: "Log Center",                                 file: "content/Carrera Arquitechthor/Microservices with Spring Cloud/Log center.html" },
            { title: "Monitoring",                                 file: "content/Carrera Arquitechthor/Microservices with Spring Cloud/Monitoring.html" },
            { title: "Enlaces",                                    file: "content/Carrera Arquitechthor/Microservices with Spring Cloud/Enlaces.html" },
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
          file: "content/Carrera Arquitechthor/Next to study.html",
        },
        {
          title: "Enlaces",
          icon: "🔗",
          file: "content/Carrera Arquitechthor/Enlaces.html",
        },
      ]
    },

  ] // end nav
}; // end SITE_CONFIG
