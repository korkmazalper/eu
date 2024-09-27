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
`<body></body>`: Der **sichtbare** Teil der Webseite. Hier wird der **eigentliche Inhalt** platziert, wie zum Beispiel:
`<h1></h1>`: Die wichtigste Überschrift auf der Seite.
`<p></p>`: Ein Absatz für normalen Text.
Zusätzliche Elemente: Bilder (`<img>`), Links (`<a>`), Tabellen (`<table>`), Listen (`<ul>`, `<ol>`), Formulare (`<form>`) und viele mehr.

## head-Tag

Dieser markiert den ersten Abschnitt eines HTML-Dokuments. Er muss zwingend ein TITLE-Element enthalten, das den Titel der Seite festlegt. Schauen wir uns den HEAD-Bereich des folgenden HTML-Codes an:

```html
<html>
  <head>
    <title>EIN EINFACHER HTML-TEXT</title>
  </head>
</html>
```

### title-Tag

Mit dem `title`-Tag legen Sie den Titel Ihrer Webseite fest. Dieser Titel wird, wie oben gezeigt, in der Titelleiste des Browsers angezeigt.
Der Titel sollte kurz und prägnant sein und den Inhalt und die Funktion der Seite beschreiben.

### meta-Tag

Mit dem `meta`-Tag können Sie eine Beschreibung Ihrer Seite erstellen und den Seiteninhalt mit passenden Schlüsselwörtern kennzeichnen. Einige wichtige `meta`-Tags und ihre Bedeutung:

#### Keywords

Hier werden die Schlüsselwörter aufgeführt, die den Inhalt Ihrer Seite beschreiben.

```html
<html>
  <head>
    <title>PROGRAMMIERSPRACHEN</title>
    <meta
      name="keywords"
      content="Programmiersprachen, Softwareentwicklung, Coding"
    />
  </head>
</html>
```

Mit dem `meta`-Tag können Sie auch den Zeichensatz der Seite festlegen

```html
<html>
  <head>
    <title>PROGRAMMIERSPRACHEN</title>
    <meta http-equiv="Content-type" content="Text/html" ;charset="UTF8" />
  </head>
</html>
```

### Andere `head`-Tags

- `<link>`: Verknüpft externe Ressourcen wie Stylesheets (CSS) oder Favicons mit der HTML-Datei.
- `<script>`: Fügt Skripte (z.B. JavaScript) in die Seite ein.
- `<style>`: Definiert Inline-Styles, also CSS-Styles, die direkt im `<head>`-Bereich stehen.

### Warum sind diese Tags wichtig?

- **SEO**: Suchmaschinen nutzen die Informationen im <head>-Bereich, um die Relevanz einer Seite für bestimmte Suchanfragen zu bestimmen.
- **Browserkompatibilität**: Die richtige Einstellung von charset sorgt dafür, dass Sonderzeichen korrekt angezeigt werden.
- **Benutzererfahrung**: viewport optimiert die Darstellung der Seite auf verschiedenen Geräten.
- **Struktur**: Der `<head>`-Bereich gibt der Webseite eine klare Struktur und macht sie für **<u>Entwickler</u>** und **<u>Suchmaschinen</u>** leichter lesbar.

## Was ist ein HTML-Element?

- Ein HTML-Element wird durch ein Start-Tag Inhalt und ein End-Tag definiert:
  `< tagname >` **_Hier kommt der Inhalthin_**`< /tagname >`.

  **Hinweis**: Manche HTML-Elemente haben keinen Inhalt (wie das `<br />`-Element). Diese Elemente werden als leere Elemente bezeichnet. Leere Elemente haben kein End-Tag.

## HTML-Überschriften

`<h1>` HTML-Überschriften werden mit den „to “-Tags definiert
` <h6>`. `<h1>`definiert die wichtigste Überschrift. `<h6>` definiert die unwichtigste Überschrift.

```html
<h1>Überschrift 1</h1>
<h2>Überschrift 2</h2>
<h3>Überschrift 3</h3>
```

## Verschachtelte HTML-Elemente

HTML-Elemente können verschachtelt sein (das heißt, Elemente können andere Elemente enthalten).

- Alle HTML-Dokumente bestehen aus verschachtelten HTML-Elementen.
- Das `<html>` Element ist das Stammelement und definiert das gesamte HTML-Dokument.
- Es hat ein Start-Tag `<html>` und ein End-Tag `</html>`.
- Dann `<html>` gibt es innerhalb des Elements ein `<head>` Element und ein `<body>` Element.
- Das `<body>` Element definiert den Hauptteil des Dokuments. - Es hat ein Start-Tag `<body>` und ein End-Tag `</body>`.

## Leere HTML-Elemente

- HTML-Elemente ohne Inhalt werden
  als leere Elemente bezeichnet. - Das `<br />` Tag definiert
  einen **Zeilenumbruch**.

## HTML-Tags für Formatierungen

-`strong`: Dieser Tag gibt an, dass der eingeschlossene Text
besonders wichtig oder dringend ist. Semantisch gesehen betont
er die Bedeutung des Textes. Browser zeigen ihn meist fett
formatiert an.

- `b`: Dieser Tag dient lediglich zur visuellen
  Hervorhebung. Er betont den Text zwar auch, aber ohne eine
  besondere semantische Bedeutung zu vermitteln.
- `em`: Dieser Tag gibt an, dass der eingeschlossene Text betont werden soll.
  Er kann auch verwendet werden, um einen Begriff zu definieren
  oder einen Gedanken hervorzuheben.
- `i`: Dieser Tag dient ebenfalls zur visuellen Hervorhebung. Er wird oft für kursive Schrift verwendet, aber ohne eine besondere semantische Bedeutung.
- Das `<mark >`-Tag in HTML dient dazu, Textpassagen hervorzuheben, die aufgrund ihrer aktuellen Relevanz im Kontext besonders beachtet werden sollen. Es ist eine relativ neue Ergänzung zu HTML und wird häufig verwendet, um Suchergebnisse oder zitierte Passagen zu markieren.
- Das `<del >`-Tag in HTML dient dazu, Textpassagen zu markieren, die als gelöscht oder entfernt betrachtet werden sollen.
- Das `<del >`-Tag ist ein nützliches Werkzeug, um Änderungen in einem Text anzuzeigen und die Lesbarkeit zu verbessern.
  Es ist besonders hilfreich, wenn es um die Dokumentation
  von Änderungen oder die Korrektur von Fehlern geht.
- Das `<ins >`-Tag in HTML wird verwendet, um Textpassagen zu
  markieren, die einem Dokument hinzugefügt wurden. Es
  ist das Gegenstück zum `<del >`-Tag, das für gelöschten Text steht.
- Die HTML-Tags `<sub >` und `<sup >` dienen dazu, Text innerhalb eines Elements entweder tiefzustellen (Subskript) oder hochzustellen (Superskript). Diese Formatierung ist besonders nützlich für:
- Mathematische Ausdrücke: z.B. x², A³
- Chemische Formeln: z.B. H₂O.

## HTML- Attribute

HTML-Attribute liefern zusätzliche Informationen zu HTML-Elementen.

- Alle HTML-Elemente können **Attribute haben**
- Attribute liefern **zusätzliche Informationen** über Elemente
- Attribute werden **_immer_** **im Starttag** angegeben
- Attribute kommen normalerweise in **Name/Wert-Paaren** vor, wie: name="value"

### Das href-Attribut

Das `<a>` Tag definiert einen Hyperlink. Das `href` Attribut gibt die URL der Seite an, auf die der Link verweist:

```html
<a href="https://www.google.de">Google</a>
```

### Das src-Attribut

Der `<img>` Tag dient dazu, ein Bild in eine HTML-Seite einzubetten. Das `src` Attribut gibt den Pfad zum anzuzeigenden Bild an:

```html
<img src="./img/bird.jpg" />
```

Es gibt zwei Möglichkeiten, die URL im Attribut anzugeben `src` :

1. **Absolute URL** – Links zu einem externen Bild, das auf einer anderen Website gehostet wird.
   Beispiel:

```html
<img
  src="https://plus.unsplash.com/premium_photo-1675714692342-01dfd2e6b6b5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
/>
```

2. Relative URL – Links zu einem Bild, das auf der Website gehostet wird. Hier enthält die URL nicht den Domänennamen. Wenn die URL ohne Schrägstrich beginnt, ist sie relativ zur aktuellen Seite.

```html
<img src="./img/bird.jpg" />
```

### Die Breite und Höhe Attribute

Das `<img>`Tag sollte außerdem die Attribute widthund enthalten height, die die Breite und Höhe des Bildes (in Pixeln) angeben.

```html
<img src="./img/bird.jpg" width="500" height="600" />
```

### Das alt-Attribut

Das erforderliche altAttribut für den `<img>` Tag gibt einen alternativen Text für ein Bild an, wenn das Bild aus irgendeinem Grund nicht angezeigt werden kann. Dies kann an einer langsamen Verbindung, einem Fehler im `src` Attribut oder daran liegen, dass der Benutzer einen Screenreader verwendet.

```html
<img src="./img/bird.jpg" width="500" height="600" alt="Vogel" />
```

### Das style-Attribut

Mit dem `style` Attribut können Sie die Breite und Höhe eines Bildes festlegen.

```html
<img
  src="./img/bird.jpg"
  width="500"
  height="600"
  alt="Vogel"
  style="width:150px;height:200px"
/>
```

Die Attribute `width` und `height` definieren immer die Breite und Höhe des Bildes in Pixeln.

### Breite und Höhe oder Style?

Die Attribute width, height, und style sind alle in HTML gültig. ``style` verhindert, dass Stylesheets die Größe von Bildern ändern.

### Bild als Link

Um ein Bild als Link zu verwenden, fügen Sie das `<img>` Tag in das `<a>` Tag ein:

```html
<a href="https://www.google.de">
  <img
    src="./img/bird.jpg"
    width="500"
    height="600"
    alt="Vogel"
    style="width:150px;height:200px"
  />
</a>
```

### Bild Floating

Verwenden Sie die `float` Eigenschaft, um das Bild rechts oder links neben einem Text schweben zu lassen:

```html
<p>
  <img src="./img/bird.jpg" style="float:right;width:42px;height:42px;" />
  Das Bild wird rechts neben dem Text angezeigt.
</p>

<p>
  <img src="./img/bird.jpg" style="float:left;width:42px;height:42px;" />
  Das Bild wird links neben dem Text angezeigt.
</p>
```
