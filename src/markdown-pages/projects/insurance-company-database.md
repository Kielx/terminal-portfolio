---
slug: "projects/insurance-company-database"
nameOfClass: "projects-items"
title: "Insurance Company Database"
added: "2023-01-14"
listName: "💾 /Insurance-DB"
video: "false"
popupImageSrc: "https://raw.githubusercontent.com/Kielx/Insurance-company-database/master/images/data_warehouse.png"
popupImageAlt: "App screenshot"
popupGithubLink: "https://github.com/Kielx/Insurance-company-database"
techIcons: [
        "oracle",
        "python",
      ]
---

The goal of the project was to create a fragment of an insurance company's database and a data warehouse based on it. The database contains information about the insurance company's customers, employees and branches, as well as the insurance policies between these entities. The database and warehouse designed this way allows for easy visualization and development of summaries of the work of all branches, employees, as well as policies taken by clients. The assumption is that a company can offer different types of policies - e.g., home insurance, vehicle insurance - and each customer can take out an unlimited number of policies. The project was developed entirely in the environment offered by Oracle, using SQL Developer and SQL Developer Data Modeler, as well as the SQL*Loader tool. The scripts generating the data with which the database was fed were written in Python using the Faker library.
