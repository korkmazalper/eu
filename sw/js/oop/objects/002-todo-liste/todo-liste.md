# Aufgabe - Todo-Liste Entwicklung

Sie möchten ein webbasiertes Aufgabenverwaltungssystem entwickeln. Dieses System soll es den Benutzern ermöglichen, die zu erledigenden Aufgaben aufzulisten, den Erledigungsstatus dieser Aufgaben zu aktualisieren und unnötige Aufgaben zu löschen. Bei der Verwirklichung dieses Projekts sollten alle folgenden Merkmale berücksichtigt werden:

1. allgemeine Funktionen
   - Die Benutzer sollten in der Lage sein, neue Aufgaben über ein Textfeld hinzuzufügen.
   - Die Aufgaben sollten in einer Liste angezeigt werden.
   - Neben jeder Aufgabe sollte es zwei Schaltflächen geben:
   - Schaltfläche Erledigt: Zum Ändern, ob die Aufgabe erledigt ist oder nicht.
   - Schaltfläche „Löschen“: Um die Aufgabe aus der Liste zu entfernen.
   - Erledigte Aufgaben müssen durch einen durchgestrichenen Text gekennzeichnet sein.
2. technische Anforderungen
   - Ihre Anwendung sollte mit HTML, CSS und JavaScript entwickelt werden.
   - Ihre Anwendung sollte nach den Prinzipien der objektorientierten Programmierung (OOP) aufgebaut sein. In diesem
     **Zusammenhang:**
   - Jede Aufgabe muss durch eine `Task-Klasse` repräsentiert werden.
   - Die Liste der Aufgaben sollte von einer `TaskList-Klasse` verwaltet werden.
   - Es sollte eine `App-Klasse` vorhanden sein, die die Benutzerinteraktionen steuert.
   - DieTask-Klasse sollte die Eigenschaften jeder Aufgabe enthalten, wie z. B. Beschreibung und erledigt.
   - `TaskList-Klasse`:
   - Sie sollte für das Hinzufügen einer neuen Aufgabe zur Liste zuständig sein.
   - Sie sollte die Möglichkeit bieten, Aufgaben zu löschen und deren Erledigungsstatus zu ändern.
   - Sie sollte eine `render()` -Methode enthalten, um die Aufgabenliste im DOM zu aktualisieren.
   - Die `App-Klasse` muss Aufgaben vom Benutzer erhalten und mit der `TaskList-Klasse` interagieren.

3) Benutzeroberfläche
   Es ist ein einfaches, benutzerfreundliches Interface-Design erforderlich:
   Es sollte ein Texteingabefeld(<input>) und eine Schaltfläche „Aufgabe einfügen“ vorhanden sein.
   Es sollte ein <ul> oder <ol> Tag vorhanden sein, in dem die Aufgaben aufgelistet werden.
   Die Aufgabenelemente(<li>) sollten jeweils einen Beschreibungstext, eine Schaltfläche „Abschließen“ und eine Schaltfläche „Löschen“ enthalten.
   CSS verwenden:
   Die Listenelemente(<li>) sollten ästhetisch dargestellt werden, mit Platz dazwischen, und der Erledigungsstatus sollte visuell erkennbar sein.
   Das Seitenlayout und die Schaltflächen sollten einfach und benutzerfreundlich sein.

4. optionale Erweiterungen
   Fügen Sie zusätzliche Funktionen hinzu, wie z.B. das Erledigungsdatum von Aufgaben.
   Schaffen Sie eine Struktur, die es ermöglicht, den Ort der Aufgaben durch Ziehen und Ablegen zu ändern.
   Durch die Verwendung eines lokalen Speichers kann sichergestellt werden, dass die Aufgaben nicht verloren gehen, wenn die Seite aktualisiert wird.
   **Beispiel-Szenario:**
   Ein Benutzer betritt die Webanwendung, gibt „Shop“ ein und klickt auf die Schaltfläche „Aufgabe einfügen“. Diese Aufgabe wird der Liste hinzugefügt. Der Benutzer kann die Erledigung dieser Aufgabe markieren, indem er auf die Schaltfläche „Erledigt“ neben der Aufgabe „Einkaufen“ klickt und sie als durchgestrichen anzeigt. Wenn er/sie der Meinung ist, dass diese Aufgabe nicht mehr notwendig ist, kann er/sie sie aus der Aufgabenliste entfernen, indem er/sie auf die Schaltfläche „Löschen“ klickt.
   Schreiben Sie die HTML-, CSS- und JavaScript-Codes, die für dieses Aufgabenverwaltungssystem erforderlich sind.
