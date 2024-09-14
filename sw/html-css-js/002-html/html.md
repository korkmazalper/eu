# HTML

## Definition

HTML ist die Standard-Auszeichnungssprache zum Erstellen von Webseiten.

## Was ist HTML?

- HTML steht für **Hyper Text Markup Language**
- HTML ist die **Standard-Auszeichnungssprache** zum Erstellen von Webseiten
- HTML beschreibt die Struktur einer Webseite
- HTML besteht aus einer Reihe von Elementen
- HTML-Elemente teilen dem Browser mit, wie der Inhalt angezeigt werden soll

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Title</title>
  </head>

  <body>
    <h1>Heading</h1>
    <p>paragraph.</p>
  </body>
</html>
```

In dieser simplen HTML:

`<!DOCTYPE html>`: Diese Deklaration teilt dem Browser mit, dass es sich um ein HTML5-Dokument handelt. Sie ist essentiell für die korrekte Darstellung der Seite.
`<html></html>`: Das Wurzel- oder Stammelement aller HTML-Dokumente. Es umhüllt alle anderen Elemente.
`<head></head>`: Hier befinden sich Metadaten, die Informationen über das Dokument liefern, aber nicht direkt angezeigt werden. Dazu gehören beispielsweise der Titel, Keywords für Suchmaschinen oder Links zu Stylesheets.
`<title></title>`: Der Titel der Seite. Er wird in der Registerkarte des Browsers angezeigt und ist wichtig für die Suchmaschinenoptimierung (SEO).
`<body></body>`: Der sichtbare Teil der Webseite. Hier wird der eigentliche Inhalt platziert, wie zum Beispiel:
`<h1></h1>`: Die wichtigste Überschrift auf der Seite.
`<p></p>`: Ein Absatz für normalen Text.
Zusätzliche Elemente: Bilder (`<img>`), Links (`<a>`), Tabellen (`<table>`), Listen (`<ul>`, `<ol>`), Formulare (`<form>`) und viele mehr.

## Was ist ein HTML-Element?

- Ein HTML-Element wird durch ein Start-Tag, Inhalt und ein End-Tag definiert:

``< tagname >`` ***Hier kommt der Inhalt hin***``< /tagname >``

\* **Hinweis**: Manche HTML-Elemente haben keinen Inhalt (wie das ``<br>``-Element). Diese Elemente werden als leere Elemente bezeichnet. Leere Elemente haben kein End-Tag.
