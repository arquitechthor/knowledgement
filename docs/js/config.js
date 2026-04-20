/**
 * CONFIGURACIÓN DEL SITIO — Knowledgement
 * =========================================
 *
 * Para agregar nuevo contenido:
 *
 *  1. Crea tu archivo .html en docs/content/ (en la subcarpeta correspondiente)
 *
 *  2. Agrega una entrada en el array `nav` siguiendo el patrón:
 *
 *     // Página simple (sin hijos):
 *     { title: "Mi tema", icon: "📄", file: "content/mi-tema.html" }
 *
 *     // Tema con sub-páginas:
 *     {
 *       title: "Mi tema",
 *       icon: "📁",
 *       file: "content/mi-tema.html",   // índice del tema (opcional)
 *       children: [
 *         { title: "Sub-página 1", file: "content/mi-tema/sub-pagina-1.html" },
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
          file: "content/scrum.html",
          children: [
            { title: "¿Qué es agilidad?",                          file: "content/scrum/que-es-agilidad.html" },
            { title: "El manifiesto ágil",                         file: "content/scrum/el-manifiesto-agil.html" },
            { title: "Principios del manifiesto ágil",             file: "content/scrum/principios-del-manifiesto-agil.html" },
            { title: "¿Qué es Scrum y para qué sirve?",           file: "content/scrum/que-es-scrum-y-para-que-sirve.html" },
            { title: "Valores de Scrum",                           file: "content/scrum/valores-de-scrum.html" },
            { title: "Términos básicos y 11 elementos",            file: "content/scrum/terminos-basicos-y-los-11-elementos-fundamentales.html" },
            { title: "Product Owner",                              file: "content/scrum/product-owner.html" },
            { title: "Development Team",                           file: "content/scrum/development-team.html" },
            { title: "Scrum Team",                                 file: "content/scrum/scrum-team.html" },
            { title: "Scrum Master",                               file: "content/scrum/scrum-master.html" },
            { title: "Sprint Planning",                            file: "content/scrum/sprint-planning.html" },
            { title: "Daily Meeting",                              file: "content/scrum/daily-meeting.html" },
            { title: "Sprint Review",                              file: "content/scrum/sprint-review.html" },
            { title: "Retrospectiva",                              file: "content/scrum/retrospectiva.html" },
            { title: "Stakeholder",                                file: "content/scrum/stakeholder.html" },
            { title: "Kanban",                                     file: "content/scrum/kanban.html" },
            { title: "Team Agreements",                            file: "content/scrum/team-agreements.html" },
          ]
        },
        {
          title: "English",
          icon: "🇬🇧",
          file: "content/english.html",
          children: [
            { title: "Articles A and An",                          file: "content/english/articles-a-and-an.html" },
            { title: "Conditionals",                               file: "content/english/conditionals.html" },
            { title: "Present Perfect",                            file: "content/english/present-perfect.html" },
            { title: "Past Perfect",                               file: "content/english/past-perfect.html" },
            { title: "Past Perfect – Exposición",                  file: "content/english/past-perfect-expo.html" },
            { title: "Reported Speech",                            file: "content/english/reported-speech.html" },
            { title: "Programming Vocabulary",                     file: "content/english/programming-vocabulary.html" },
            { title: "How to Keep Studying While Traveling",       file: "content/english/how-to-keep-studying-while-traveling.html" },
            { title: "Lecciones en YouTube",                       file: "content/english/lecciones-en-youtube.html" },
            { title: "Music to Enjoy",                             file: "content/english/music-to-enjoy.html" },
          ]
        },
        {
          title: "GNU / Linux",
          icon: "🐧",
          file: "content/gnu-linux.html",
          children: [
            { title: "Lista de comandos interesantes",             file: "content/gnu-linux/lista-de-comandos-interesantes.html" },
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
          file: "content/ide.html",
          children: [
            { title: "IntelliJ IDEA",                              file: "content/ide/intellij.html" },
            { title: "IntelliJ — Plugins",                         file: "content/ide/intellij/plugins.html" },
            { title: "Visual Studio Code",                         file: "content/ide/visual-studio-code.html" },
            { title: "VS Code — Plugins",                          file: "content/ide/visual-studio-code/plugins.html" },
          ]
        },
        {
          title: "Conceptos básicos de programación",
          icon: "📐",
          file: "content/conceptos-basicos-de-programacion.html",
          children: [
            { title: "Programación orientada a objetos",           file: "content/conceptos-basicos-de-programacion/programacion-orientada-a-objetos.html" },
            { title: "Cláusulas de guarda",                        file: "content/conceptos-basicos-de-programacion/clausulas-de-guarda.html" },
          ]
        },
        {
          title: "Principios de programación",
          icon: "📜",
          file: "content/principios-de-programacion.html",
          children: [
            { title: "DDD — Domain-Driven Design",                 file: "content/principios-de-programacion/ddd.html" },
          ]
        },
        {
          title: "Versioning",
          icon: "🔀",
          file: "content/versioning.html",
          children: [
            { title: "Git",                                        file: "content/versioning/git.html" },
            { title: "Git — Lista de comandos",                    file: "content/versioning/git/lista-de-comandos.html" },
            { title: "Git — Notas interesantes",                   file: "content/versioning/git/notas-interesantes.html" },
            { title: "Conventional Commits",                       file: "content/versioning/conventional-commits.html" },
          ]
        },
        {
          title: "Bases de datos",
          icon: "🗄️",
          file: "content/bases-de-datos.html",
          children: [
            { title: "MySQL",                                      file: "content/bases-de-datos/mysql.html" },
            { title: "Oracle",                                     file: "content/bases-de-datos/oracle.html" },
            { title: "PostgreSQL",                                 file: "content/bases-de-datos/postgres.html" },
            { title: "MongoDB",                                    file: "content/bases-de-datos/mongodb.html" },
            { title: "Redis",                                      file: "content/bases-de-datos/redis.html" },
            { title: "H2",                                         file: "content/bases-de-datos/h2.html" },
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
          file: "content/frontend.html",
          children: [
            { title: "JavaScript",                                 file: "content/frontend/javascript.html" },
            { title: "JavaScript — Debugging",                     file: "content/frontend/javascript/debugging.html" },
            { title: "Jest",                                       file: "content/frontend/jest.html" },
            { title: "Bibliotecas y Frameworks",                   file: "content/frontend/bibliotecas-y-frameworks.html" },
            { title: "Angular",                                    file: "content/frontend/bibliotecas-y-frameworks/angular.html" },
            { title: "React.js",                                   file: "content/frontend/bibliotecas-y-frameworks/reactjs.html" },
          ]
        },
        {
          title: "Java",
          icon: "☕",
          file: "content/java.html",
          children: [
            { title: "Lombok",                                     file: "content/java/lombok.html" },
            { title: "Streams",                                    file: "content/java/stream.html" },
            { title: "Programación funcional",                     file: "content/java/programacion-funcional.html" },
            { title: "Dependencias",                               file: "content/java/dependencias.html" },
            { title: "Maven",                                      file: "content/java/dependencias/maven.html" },
          ]
        },
        {
          title: "Testing",
          icon: "🧪",
          file: "content/testing.html",
          children: [
            { title: "JUnit",                                      file: "content/testing/junit.html" },
            { title: "TDD",                                        file: "content/testing/tdd.html" },
            { title: "Mitos del testing",                          file: "content/testing/mitos.html" },
          ]
        },
        {
          title: "Spring Framework",
          icon: "🍃",
          file: "content/spring-framework.html",
          children: [
            { title: "Cache",                                      file: "content/spring-framework/cache.html" },
            { title: "Spring AI",                                  file: "content/spring-framework/spring-ai.html" },
            { title: "Ámbito de un Bean",                          file: "content/spring-framework/que-es-el-ambito-de-un-bean.html" },
          ]
        },
        {
          title: "Queues",
          icon: "📨",
          file: "content/queues.html",
          children: [
            { title: "Apache Kafka",                               file: "content/queues/apache-kafka.html" },
          ]
        },
        {
          title: "REST API",
          icon: "🌐",
          file: "content/rest-api.html",
          children: [
            { title: "Web Service",                                file: "content/rest-api/web-service.html" },
            { title: "Apigee",                                     file: "content/rest-api/apigee.html" },
          ]
        },
        {
          title: "gRPC",
          icon: "📡",
          file: "content/grpc.html",
          children: [
            { title: "¿Qué es gRPC?",                              file: "content/grpc/que-es-grpc.html" },
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
          file: "content/clean-code.html",
        },
        {
          title: "SOLID",
          icon: "🧱",
          file: "content/solid.html",
          children: [
            { title: "Introducción del autor",                     file: "content/solid/introduccion-del-autor.html" },
            { title: "Introducción personal",                      file: "content/solid/introduccion-personal.html" },
            { title: "SRP — Responsabilidad única",                file: "content/solid/srp-el-principio-de-responsabilidad-unica.html" },
            { title: "OCP — Abierto-cerrado",                      file: "content/solid/ocp-principio-abierto-cerrado.html" },
            { title: "LSP — Sustitución de Liskov",                file: "content/solid/lsp-el-principio-de-sustitucion-de-liskov.html" },
            { title: "ISP — Segregación de interfaces",            file: "content/solid/isp-el-principio-de-segregacion-de-interfaces.html" },
            { title: "DIP — Inversión de dependencia",             file: "content/solid/dip-el-principio-de-inversion-de-dependencia.html" },
          ]
        },
        {
          title: "Design Patterns",
          icon: "🎨",
          file: "content/design-patterns.html",
          children: [
            { title: "Strategy",                                   file: "content/design-patterns/strategy.html" },
          ]
        },
        {
          title: "Complejidad",
          icon: "📊",
          file: "content/complejidad.html",
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
          file: "content/cd-ci.html",
        },
        {
          title: "Arquitectura",
          icon: "🏛️",
          file: "content/arquitectura.html",
          children: [
            { title: "¿Qué es arquitectura?",                      file: "content/arquitectura/que-es-arquitectura.html" },
            { title: "Arquitectura de microservicios",             file: "content/arquitectura/arquitectura-de-microservicios.html" },
            { title: "Resiliencia",                                file: "content/arquitectura/resiliencia.html" },
          ]
        },
        {
          title: "Docker",
          icon: "🐳",
          file: "content/dockers.html",
          children: [
            { title: "¿Qué es Docker?",                            file: "content/dockers/que-es-docker.html" },
            { title: "¿Qué es un contenedor?",                     file: "content/dockers/que-es-un-contenedor.html" },
            { title: "¿Por qué Docker?",                           file: "content/dockers/por-que-docker.html" },
            { title: "Descarga e instalación",                     file: "content/dockers/descarga.html" },
            { title: "Arquitectura Docker",                        file: "content/dockers/arquitectura-docker.html" },
            { title: "Comandos",                                   file: "content/dockers/comandos.html" },
          ]
        },
        {
          title: "Kubernetes",
          icon: "☸️",
          file: "content/kubernetes.html",
        },
        {
          title: "Monitoring",
          icon: "📈",
          file: "content/monitoring.html",
        },
        {
          title: "DevOps",
          icon: "♾️",
          file: "content/devops.html",
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
          file: "content/cloud-computing.html",
          children: [
            { title: "AWS",                                        file: "content/cloud-computing/aws.html" },
          ]
        },
        {
          title: "Microservices with Spring Cloud",
          icon: "🌐",
          file: "content/microservices-with-spring-cloud.html",
          children: [
            { title: "Ventajas de los microservicios",             file: "content/microservices-with-spring-cloud/ventajas-de-los-microservicios.html" },
            { title: "Desafíos",                                   file: "content/microservices-with-spring-cloud/desafios.html" },
            { title: "Paradigmas de comunicación",                 file: "content/microservices-with-spring-cloud/paradigmas-de-comunicacion.html" },
            { title: "Config Server",                              file: "content/microservices-with-spring-cloud/config-server.html" },
            { title: "Config",                                     file: "content/microservices-with-spring-cloud/config.html" },
            { title: "Registry — Service Discovery",               file: "content/microservices-with-spring-cloud/registry.html" },
            { title: "API Gateway / Edge Service",                 file: "content/microservices-with-spring-cloud/api-gateway-edge-service.html" },
            { title: "Load Balancer",                              file: "content/microservices-with-spring-cloud/load-balancer.html" },
            { title: "Circuit Breaker",                            file: "content/microservices-with-spring-cloud/circuit-breaker.html" },
            { title: "Patrones de resiliencia",                    file: "content/microservices-with-spring-cloud/patrones-de-resiliencia.html" },
            { title: "Feign",                                      file: "content/microservices-with-spring-cloud/feign.html" },
            { title: "Sleuth — Distributed Tracing",               file: "content/microservices-with-spring-cloud/sleuth.html" },
            { title: "Actuator",                                   file: "content/microservices-with-spring-cloud/actuator.html" },
            { title: "Log Center",                                 file: "content/microservices-with-spring-cloud/log-center.html" },
            { title: "Monitoring",                                 file: "content/microservices-with-spring-cloud/monitoring.html" },
            { title: "Enlaces",                                    file: "content/microservices-with-spring-cloud/enlaces.html" },
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
          file: "content/next-to-study.html",
        },
        {
          title: "Enlaces",
          icon: "🔗",
          file: "content/enlaces.html",
        },
      ]
    },

  ] // end nav
}; // end SITE_CONFIG
