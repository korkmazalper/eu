# Hypertext Markup Language (HTML)

## Entwicklungsumgebung

### Visual Studio Code

Visual Studio Code (**VS Code**) ist ein kostenloser, Open-Source (quelloffener) Code-Editor, der von Microsoft entwickelt wurde. Er ist plattformübergreifend verfügbar und läuft auf Windows, macOS und Linux. Vs Code unterstützt viele, verschiedene Programmiersprachen.

#### Installation der Erweiterungen

- Öffne Visual Studio Code.
- Gehe zum Extensions-Panel (Symbol mit den Quadraten auf der linken Seite) oder **CTRL+SHIFT+X**

1. **Live Server Extension** : Diese Erweiterung startet einen lokalen Entwicklungsserver mit Live-Reload-Funktion. Das bedeutet, dass jede Änderung, die du an deiner HTML- oder CSS-Datei vornimmst, automatisch im Browser angezeigt wird, ohne dass du die Seite manuell neu laden musst.

2. **Javascript Code Snippet**: Diese Erweiterung bietet eine Sammlung von vorgefertigten Code-Snippets für JavaScript, insbesondere für die ES6-Version (ECMAScript 2015). Sie erleichtert das Schreiben von häufig verwendeten JavaScript-Strukturen und -Funktionen

3. **Auto Rename Tag**: Diese Erweiterung sorgt dafür, dass beim Umbenennen eines HTML-Tags automatisch das dazugehörige schließende Tag ebenfalls umbenannt wird.

Idealerweise benutzt man eine bestimmte Verzeichnisordnung um die Projektdaten zu speichern.

### Projektverzeichnisstruktur

Mit der zunehmenden Anzahl von Dateien in Html-Projekten gibt es Schwierigkeiten und Komplexität beim Auffinden von Dateien. Aus diesem Grund verwenden die Unternehmen in der Praxis Projektstrukturen im Rahmen ihrer eigenen Entscheidungen.

```
project-root/
│
├── index.html
├── css/
│ ├── main.css
│ └── reset.css
├── js/
│ ├── main.js
│ └── helper.js
├── images/
│ ├── logo.png
│ └── background.jpg
├── fonts/
│ ├── OpenSans-Regular.ttf
│ └── Roboto-Bold.ttf
├── libs/
│ ├── jquery.js
│ └── bootstrap.css
└── assets/
    ├── videos/
    │ └── intro.mp4
    └── docs/
      └── resume.pdf

```

Ein Beispiel **Shell-Script** kann wie folgt geschrieben werden.

```sh
#!/bin/bash

mkdir project-root-l
cd project-root-l

touch index.html


mkdir css
touch css/main.css
touch css/reset.css


mkdir js
touch js/main.js
touch js/helper.js


mkdir images
touch images/logo.png
touch images/background.jpg


mkdir fonts
touch fonts/OpenSans-Regular.ttf
touch fonts/Roboto-Bold.ttf


mkdir libs
touch libs/jquery.js
touch libs/bootstrap.css


mkdir -p assets/videos
touch assets/videos/sample.mp4

mkdir -p assets/docs
touch assets/docs/sample.pdf

echo "Die Projektverzeichnisstruktur wurde erfolgreich erstellt."

```

Um diesen Skript auszuführen:

```shell
chmod +x createproject.sh
./createproject.sh

```

Bei Windows kann man eine Batch-Datei erstellt, deren Inhalt:

```batch

@echo off

mkdir project-root
cd project-root

type nul > index.html

mkdir css
type nul > css\main.css
type nul > css\reset.css

mkdir js
type nul > js\main.js
type nul > js\helper.js

mkdir images
type nul > images\logo.png
type nul > images\background.jpg

mkdir fonts
type nul > fonts\OpenSans-Regular.ttf
type nul > fonts\Roboto-Bold.ttf

mkdir libs
type nul > libs\jquery.js
type nul > libs\bootstrap.css

mkdir assets\videos
type nul > assets\videos\intro.mp4

mkdir assets\docs
type nul > assets\docs\resume.pdf

echo Die Projektverzeichnisstruktur wurde erfolgreich erstellt.

```

Das mit der Erweiterung .bat gespeicherte Batch-Skript kann auf der Kommandozeile durch Aufruf des Dateinamens ausgeführt werden.

Beispiel:

```shell
create_project.bat

```
