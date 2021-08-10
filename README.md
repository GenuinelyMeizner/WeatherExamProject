# Weather Exam Project
Det er nødvendigt at have Java 11.0 installeret på sin maskine, for at kunne kompilere vores applikation. Det vil være nødvendigt at have installeret en IDE, som f.eks. IntelliJ IDEA, Ecplise, NetBeans, JGRASP osv. der alle supportere Java.

Når du har programmet åbent i din foretrukne IDE, er det vigtigt at du 'refresher' MAVEN, såfremt at alle 'dependencies' bliver 'loadet'.

Derfra kan man kunne tilgå vores applikation via: http://localhost:1000/  i ens webbrowser.

# Database
For at kunne visualisere databasen og se vores tabeller, kan man downloade MySQL Workbench fra MySQL, eller benytte sig af en H2 Database. Du kan vælge mellem disse, ved at ændre i filen 'application.properties'.

Du kan benytte H2-Database, hvis du ønsker. Login informationen er klaret i application.properties, så du kan blot trykke på 'connect' for at få adgang.

Bemærk at H2 ikke er 'persistent', dvs. at hver gang du kompilerer programmet, mister du den data, du har skabt. Hvis du ønsker at den skal være 'persistent', skal du benytte MYSQL Workbench, hvorefter du skaber en ny 'connection' samt sætter 'application.properties' op til din egen 'connection', hvor du ændre 'spring.jpa.hibernate.ddl-auto=create-drop' til ' spring.jpa.hibernate.ddl-auto=update'.

Du tilgår H2 ved at gå ind på følgende url: http://localhost:1000/h2-console 

MySQL Workbench download: https://dev.mysql.com/downloads/windows/installer/8.0.html 

Alt test data bliver indsat når programmet kompilerer, så du ikke behøver at uploade et SQL-script.

God fornøjelse!
