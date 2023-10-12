# Labbgrund till Moment 4 i kursen DT084G, Introdktion till programmering i JavaScript

# Information
Denna uppgift är skriven och gjord av Linus Lundgren. Student-id: lilu2303. 

# Beskrivning
Denna uppgift/ labb går ut på att göra en "Att göra"-lista. Användaren av webbplatsen ska kunna lagra saker som ska göras i en lista som presenteras på webbplatsen.
Det ska gå att lägga till saker i listan från ett textfält. Textfältet ska kollas innan lagring för att se att det innehåller fem tecken eller mer, är texten kortare ska det inte gå att lagra, och användaren ska få ett meddelande om att texten är för kort.
Listan ska lagras med hjälp av Web Storage API, och läsas in på nytt när sidan laddas om.

Nedan beskrivs det steg för steg hur jag gjorde för att lössa uppgiften: 
1. Skapa variabler
2. Skapa händelsehanterare
3. Skapa start-funktion
4. Skapa inaktivera lägg till-knappen
5. Programet läser in kurslistan
7. Skapa kontrollera input
8. Skapa kontroll av korrekt längd
9. Skapa lägga till kurs
10. Skapa skapar nytt element 
11. Lägger till till listan
12. Lägger till en klickhanterare
13. Raderar input-fält
14. Anropar lagring
15. Spara kurser 
16. Läser in kurslistan
17. Rensar storage
18. Loopar genom listan och lagrar till temporär array
19. Konverterar till JSON-sträng
20. Lagra i web storage
21. Läsa in kurser igen
22. Läser in och konverterar JSON till array
23. Loopa igenom arrayen
24. Skapar nya element 
25. Lägger till till listan
26. Lägg till en klickhanterare
27. Lagra listan 