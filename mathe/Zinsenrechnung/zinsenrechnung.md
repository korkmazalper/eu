# Zinsenrechnung

## Was sind Zinsen?

Definition:

- Geld, das die Bank zahlt, wenn Erspartes angelegt wurde.
- Geld, das der Bank gezahlt werden muss, wenn Geld geliehen wurde.
- Zinsen ==> Leihgebühr

## Die Formel

Ein Zinsbetrag wird mit der Zinsformel berechnet:

$$
\begin{align}
Zinsen &= Kapital \times \frac{Zinssatz}{100} \\
Z &= K_{0} \times \frac{p}{100}
\end{align}
$$

**$K$** steht für das Kapital, z.B. das Geld. **$p$** ist der Zinssatz, mit dem das Kapital verzinst wird. **$Z$** steht für die Zinsen.

Am Ende gehören dir dein **Startkapital ($Z_{0}$)** und deine Zinsen, z.B. nach einem Jahr. Du rechnest beide Werte zusammen und du erhältst dein **Endkapital ($K_{n}$)**, z.B. nach einem Jahr **Endkapital ($K_{1}$)**.

$$
K_{1}=K_{0}+Z
$$

**Vorsicht**: Wenn man Zinsen für mehrere Jahre berechnen möchte, muss man das Endkapital des vorherigen Jahres als Startkapital verwenden.

## Jahreszins berechnen

Stell dir vor, du hast 5.000 €, die du auf ein Sparbuch bei der Bank anlegen möchtest. Die Bank bietet dir an, dass du für eine Dauer von 1 Jahr 5 % Zinsen erhältst. Wie viel Geld hast du am Ende des Jahres?

**Lösung:**

Fangen wir damit an, dass du das Startkapital und den Zinssatz bestimmst. Zu Beginn haben wir Folgendes:

$$
\begin{align}
K\_{0} &=5.000 € \\
p &=5\%
\end{align}
$$

Mit Hilfe von Gleichung (1) können wir die Zinsen berechnen:

$$
\begin{align}
Z &= K_{0} \times \frac{p}{100} \\
Z &= 5000 \times \frac{5}{100} \\
Z &=250 €
\end{align}
$$

Dann kann man das Endkapital berechnen als:

$$
\begin{align}
K_{1}&=K_{0}+Z \\
K_{1}&=5000+250 \\
K_{1}&=5250 €
\end{align}
$$

## Zinseszinsrechnung (für mehrere Jahre)

Bei der Zinseszinsrechnung werden die Zinsen am Ende eines Jahres zum Kapital hinzugefügt. Das Kapital wächst dadurch jedes Jahr, und die Zinsen für das nächste Jahr werden auf das neue Kapital berechnet.

**Aufgabe:**
Frau Mustermann legt einen Geldbetrag für drei Jahren bei der Bank an.

- Zinssatz im 1.Jahr: 2,75 %
- Zinssatz im 2.Jahr: 3,00 %
- Zinssatz im 3.Jahr: 3,50 %

Am Ende des ersten Jahres werden 206,25 Euro Zinsen gutgeschrieben.

a- Wie viel Geld erhält Frau Mustermann in den drei Jahren insgesamt?
b- Um wie Viel Prozent erhöht sich das Kapital im Laufe der drei Jahren?

**Lösung:**

Nach einem Jahr erhält Frau Mustermann 206,25 Euro an Zinsen. Zunächst muss das Anfangskapital ermittelt werden.

$$
\begin{align}
Z_1 &= K_0 \times \frac{p}{100} \\
206,25 &= K_0 \times \frac{2,75}{100} \\
K_0&=7500 Euro
\end{align}
$$

a- Am Ende des ersten Jahres beträgt das Gesamtkapital:

$$
\begin{align}
K_1 &= K_0+Z_1 \\
K_1 &= 7500+206,25 \\
K_1 &= 7706,25 \\
\end{align}
$$

Der Zinsertrag im zweiten Jahr beträgt:

$$
\begin{align}
Z_2=K_1 \times \frac{p_2}{100} \\
Z_2=7706,25 \times \frac{3,00}{100} \\
Z_2=231,1875
\end{align}
$$

und das Endkapital nach zwei Jahren ist:

$$
\begin{align}
K_2=K_1 +Z_2 \\
Z_2=7706,25 + 231,1875 \\
Z_2=7937,4375
\end{align}
$$

$K_2$ ist das Anfangskapital des dritten Jahres.

Die Zinsen nach dem dritten Jahr betragen:

$$
\begin{align}
Z_3=K_2 \times \frac{p_3}{100} \\
Z_3=7937,4375 \times \frac{3,50}{100} \\
Z_3=277,81
\end{align}
$$

und das Endkapital nach dem dritten Jahr ist:

$$
\begin{align}
K_3=K_2 +Z_3 \\
K_3=7937,4375 + 277,81 \\
Z_2=8215,2475
\end{align}
$$

Die prozentuale Erhöhung des Anfangskapitals wird durch eine einfache Prozentrechnung berechnet. Der Unterschied zwischen dem Anfangskapital und dem Endkapital nach drei Jahren beträgt 8215,2475 - 7500 = 715,2475.

$$
\begin{align}
\frac{715,2475}{7500}&=\frac{x}{100} \\
x&=9,54 \%
\end{align}
$$
