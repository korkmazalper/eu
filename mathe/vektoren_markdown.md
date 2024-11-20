
# Vektoren - Grundlagen und Operationen

## Grundlagen der Vektorrechnung

### Definition eines Vektors
Ein Vektor \(\vec{v}\) ist eine geordnete Menge von Zahlen \((v_1, v_2, \ldots, v_n)\). In \(\mathbb{R}^n\) hat ein Vektor \(n\) Komponenten.

### Darstellungsformen
- Spaltenvektor: \(\vec{v} = \begin{pmatrix} v_1 \\ v_2 \\ \vdots \\ v_n \end{pmatrix}\)
- Zeilenvektor: \(\vec{v} = (v_1, v_2, \ldots, v_n)\)

## Vektoroperationen

### Addition und Subtraktion
Für Vektoren \(\vec{v}\) und \(\vec{w}\) gilt:
\[
\vec{v} \pm \vec{w} = \begin{pmatrix} v_1 \pm w_1 \\ v_2 \pm w_2 \\ \vdots \\ v_n \pm w_n \end{pmatrix}
\]

### Skalare Multiplikation
Für einen Skalar \(\lambda\) und einen Vektor \(\vec{v}\) gilt:
\[
\lambda\vec{v} = \begin{pmatrix} \lambda v_1 \\ \lambda v_2 \\ \vdots \\ \lambda v_n \end{pmatrix}
\]

### Skalarprodukt
Das Skalarprodukt zweier Vektoren \(\vec{v}\) und \(\vec{w}\) ist definiert als:
\[
\vec{v} \cdot \vec{w} = \sum_{i=1}^n v_iw_i = v_1w_1 + v_2w_2 + \cdots + v_nw_n
\]

## Wichtige Eigenschaften

### Länge eines Vektors
Die Länge (oder der Betrag) eines Vektors \(\vec{v}\) ist definiert als:
\[
|\vec{v}| = \sqrt{\vec{v} \cdot \vec{v}} = \sqrt{\sum_{i=1}^n v_i^2}
\]

### Orthogonalität
Zwei Vektoren \(\vec{v}\) und \(\vec{w}\) sind orthogonal (senkrecht zueinander), wenn gilt:
\[
\vec{v} \cdot \vec{w} = 0
\]

## Lineare Unabhängigkeit

### Definition
Vektoren \(\vec{v}_1, \vec{v}_2, \ldots, \vec{v}_k\) sind linear unabhängig, wenn die Gleichung:
\[
\lambda_1\vec{v}_1 + \lambda_2\vec{v}_2 + \cdots + \lambda_k\vec{v}_k = \vec{0}
\]
nur für \(\lambda_1 = \lambda_2 = \cdots = \lambda_k = 0\) erfüllt ist.

## Vektorräume

### Definition
Ein Vektorraum ist eine Menge \(V\) von Vektoren mit den Operationen Addition und skalare Multiplikation, die folgende Axiome erfüllt:
- **Kommutativität**: \(\vec{v} + \vec{w} = \vec{w} + \vec{v}\)
- **Assoziativität**: \((\vec{u} + \vec{v}) + \vec{w} = \vec{u} + (\vec{v} + \vec{w})\)
- **Nullvektor**: \(\exists \vec{0}: \vec{v} + \vec{0} = \vec{v}\)
- **Inverses Element**: \(\forall \vec{v} \exists (-\vec{v}): \vec{v} + (-\vec{v}) = \vec{0}\)
- **Distributivität**: \(\lambda(\vec{v} + \vec{w}) = \lambda\vec{v} + \lambda\vec{w}\)

## Anwendungen

### Geometrische Interpretation
- In \(\mathbb{R}^2\): Punkte in der Ebene
- In \(\mathbb{R}^3\): Punkte im Raum
- Richtung und Größe: Durch Länge und Orientierung des Vektors

### Praktische Beispiele
- Geschwindigkeit und Beschleunigung in der Physik
- Kräfte und Momente in der Mechanik
- Verschiebungen und Transformationen in der Computergrafik

```latex
\documentclass{standalone}
\usepackage{tikz}

\begin{document}
\begin{tikzpicture}
    % Zeichnen der Dreiecksseiten
    \draw[thick] (0,0) -- (3,0) node[midway, below] {3};
    \draw[thick] (3,0) -- (3,4) node[midway, right] {4};
    \draw[thick] (3,4) -- (0,0) node[midway, above left] {5};

    % Rechteckiger Winkel
    \draw (3,0) rectangle +(0.2,0.2);

    % Punkte beschriften
    \node[below left] at (0,0) {A};
    \node[below right] at (3,0) {B};
    \node[above right] at (3,4) {C};
\end{tikzpicture}
\end{document}
```

\documentclass{standalone}
\usepackage{tikz}

\begin{document}
\begin{tikzpicture}
% Zeichnen der Dreiecksseiten
\draw[thick] (0,0) -- (3,0) node[midway, below] {3};
\draw[thick] (3,0) -- (3,4) node[midway, right] {4};
\draw[thick] (3,4) -- (0,0) node[midway, above left] {5};

    % Rechteckiger Winkel
    \draw (3,0) rectangle +(0.2,0.2);

    % Punkte beschriften
    \node[below left] at (0,0) {A};
    \node[below right] at (3,0) {B};
    \node[above right] at (3,4) {C};

\end{tikzpicture}
\end{document}
