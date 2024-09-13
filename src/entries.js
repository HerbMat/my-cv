const education = {
    title: "Education",
    entries: [
        {
            years: {from: "2016", to: "2018"},
            entry: {title: "Master of Science", place: "Technical University of Lodz", city: "Łódź"}
        },
        {
            years: {from: "2012", to: "2016"},
            entry: {title: "Bachelor of Engineering", place: "Technical University of Lodz", city: "Łódź"}
        }
    ]
}

const experience = {
    title: "Experience",
    entries: [
        {
            years: {from: "11.2021", to: "Current"},
            entry: {
                position: "IT Consultant",
                company: "Technical University of Lodz",
                city: "Łódź",
                description: `Team Leader. Current work. Developing streaming platform by using kubernetes, AWS and microservices. Managing several projects. Designing solutions.`,
                technologies: `Java 17, Spring, GIT, Scrum, Gitlab pipelines, Jenkins, Rancher, Kubernetes, Jira , Junit 5, TestNg, Mongodb, Apache Kafka, Swagger, Kong, Kubectl, Helm, Jmeter, AWS, Spock, Kotlin ,Kotest, Terraform, Oracle`
            }
        },
        {
            years: {from: "06.2021", to: "10.2021"},
            entry: {
                position: "Senior Developer",
                company: "Bank New York Mellon",
                city: "Wrocław",
                description: `Senior Developer. Developing microservices for processing data and reporting.`,
                technologies: `Java 11, Spring, GIT, Scrum, Gitlab pipelines, Jira , Junit 5, MS Sql, Oracle Sql, Splunk, Kibana, Swagger, Apache Spark`
            }
        },
        {
            years: {from: "09.2020", to: "06.2021"},
            entry: {
                position: "Full Stack Developer",
                company: "GFT",
                city: "Łódź",
                description: `Full Stack Developer. Multiple projects from managing and developing big applications in java EE to creating microservices in Java 11 and Spring Boot. PWA application in react.`,
                technologies: `Java 11, Spring, GIT, Scrum, Scala, Scala-test, MongoDB`
            }
        },
        {
            years: {from: "06.2018", to: "08.2020"},
            entry: {
                position: "Full Stack Developer",
                company: "Sii",
                city: "Łódź",
                description: `Full Stack Developer. Multiple projects from managing and developing big applications in java EE to creating microservices in Java 11 and Spring Boot. PWA application in react.`,
                technologies: `Java 11, Mapstruct, Spock, Junit 5, Mockito, REST, SOAP, Lombok, VueJs, ES6, Azure, CosmosDB, Swagger 2, Maven, JIB, Docker, Kubernetes, GIT, JPA, Spring MockMVC, JWT, Flyway, MongoDB`
            }
        },
        {
            years: {from: "05.2017", to: "06.2018"},
            entry: {
                position: "Junior Java Developer",
                company: "Hycom",
                city: "Łódź",
                description: `Hybris Developer. Developing brand new ecommerce site for one of biggest companies in Poland in Hybris.`,
                technologies: `Hybris, Spring, JUnit 4, Power Mock, SOAP, JSP, Jira, Jenkins, Ant, Maven, Guava, Mockito, GIT`
            }
        },
        {
            years: {from: "01.2016", to: "05.2017"},
            entry: {
                position: "Software Developer Associate",
                company: "Accenture",
                city: "Łódź",
                description: `Magento Developer - Developing from scratch multiple shops written in Magento 1.`,
                technologies: `Magento 1, PHPUnit, Vagrant, Scrum, Ansible, Jira, Jenkins, REST, GIT, Redis`
            }
        },
        {
            years: {from: "07.2015", to: "09.2015"},
            entry: {
                position: "Web Developer",
                company: "Lakion",
                city: "Łódź",
                description: `Internship.`,
                technologies: `PHP, Symfony, Doctrine, Bootstrap, Phpspec, Behat, BDD, Scrum, REST, Ajax, GIT`
            }
        },
        {
            years: {from: "02.2015", to: "05.2015"},
            entry: {
                position: "Web Developer",
                company: "Ericpol",
                city: "Łódź",
                description: `Łódź, Internship, Internal application written in PHP,CSS and JS.`,
                technologies: `PHP, CSS, Javascript, Scrum, GIT`
            }
        },
        {
            years: {from: "07.2014", to: "07.2014"},
            entry: {
                position: "Graphic Designer",
                company: "Madhouse sp. z.o.o",
                city: "Warszawa",
                description: `Internship. Creating ad by using  Adobe Premiere Pro, Adobe Photoshop.`,
                technologies: `Adobe Premiere Pro, Adobe Photoshop`
            }
        },
    ]
}

const skills = {
    title: "Skills",
    skills: [
        {
            name: "Java",
            level: "Advanced",
            description: "Maven, Gradle, JPA, JUnit, Mockito, PowerMock, Spring, Axon, Hamcrest, Lombok, Mapstruct, Guava, JSP, Freemarker, JBehave, Serenity, JIB, Flyway, Hibernate, Quarkus, Mongo-panache, smallrye-jwt"
        },
        {
            name: "Groovy",
            level: "Intermediate",
            description: "Spock"
        },
        {
            name: "Kotlin",
            level: "Intermediate",
            description: "Kotest"
        },
        {
            name: "PHP",
            level: "Basic",
            description: "Ajax, JQuery, VueJs, Yarn, ES 6, JSON, React, Nodejs, Express, Jest, Nightwatch, SocketIO, Oboe.js, Web components"
        },
        {
            name: "Javascript",
            level: "Beginner",
            description: "Ajax, JQuery, VueJs, Yarn, ES 6, JSON, React, Nodejs, Express, Jest, Nightwatch, SocketIO, Oboe.js, Web components"
        },
        {
            name: "Typescript",
            level: "Beginner",
            description: ""
        },
        {
            name: "C, C++",
            level: "Basic",
            description: ""
        },
        {
            name: "Python",
            level: "Beginner",
            description: "RPi.GPIO. Flask, Flask-SocketIO, BeautifulSoap"
        },
        {
            name: "SQL",
            level: "Beginner",
            description: "MS SQL, MySQL, PostgreSql, IBM DB2"
        },
        {
            name: "CSS",
            level: "Beginner",
            description: "Bootstrap, MaterializeCss, SCSS"
        },
        {
            name: "HTML",
            level: "Intermediate",
            description: ""
        },
        {
            name: "XML",
            level: "Intermediate",
            description: ""
        },
        {
            name: "YAML",
            level: "Intermediate",
            description: ""
        },
        {
            name: "REST, SOAP",
            level: "Intermediate",
            description: ""
        },
        {
            name: "GraphQL",
            level: "Basic",
            description: ""
        },
        {
            name: "NoSql",
            level: "Beginner",
            description: ""
        },
        {
            name: "Agile Development",
            level: "Intermediate",
            description: "Experience with Agile programming, Scrum, BDD, TDD"
        },
        {
            name: "Linux",
            level: "Proficient",
            description: "Ability to use Linux (Ubuntu, Mint, Fedora, Centos)"
        },
    ]
}

const tools = {
    title: "Tools",
    tools: [
        {
            name: "GIT",
            level: "Intermediate",
            description: ""
        },
        {
            name: "Terraform",
            level: "Beginner",
            description: ""
        },
        {
            name: "Helm",
            level: "Beginner",
            description: ""
        },
        {
            name: "HTML",
            level: "Basic",
            description: ""
        },
        {
            name: "SVN",
            level: "Basic",
            description: ""
        },
        {
            name: "Apache",
            level: "Basic",
            description: ""
        },
        {
            name: "Apache Spark",
            level: "Basic",
            description: ""
        },
        {
            name: "Apache Kafka",
            level: "Intermediate",
            description: ""
        },
        {
            name: "Virtual Box",
            level: "Beginner",
            description: ""
        },
        {
            name: "Docker",
            level: "Intermediate",
            description: "Docker Compose"
        },
        {
            name: "Kubernetes",
            level: "Intermediate",
            description: ""
        },
        {
            name: "Jenkins",
            level: "Basic",
            description: ""
        },
        {
            name: "Jira",
            level: "Basic",
            description: ""
        },
        {
            name: "Travis",
            level: "Basic",
            description: ""
        },
        {
            name: "Jacoco",
            level: "Basic",
            description: ""
        },
        {
            name: "Azure",
            level: "Basic",
            description: ""
        },
        {
            name: "AWS",
            level: "Intermediate",
            description: ""
        },
        {
            name: "Latex",
            level: "Basic",
            description: ""
        },
    ]
}

const languages = {
    title: "Languages",
    languages: [
        {
            name: "Polish",
            level: "Native",
            description: ""
        },
        {
            name: "English",
            level: "Upper-Intermediate",
            description: "Conversationally fluent, B2"
        },
        {
            name: "Spanish",
            level: "Beginner",
            description: "Beginner, A1"
        }
    ]
}

const links = {
    title: "Links",
    entries: [
        {
            "title": "Github",
            "link": "https://github.com/HerbMat"
        }
    ]
}

export { education, experience, skills, tools, languages, links }