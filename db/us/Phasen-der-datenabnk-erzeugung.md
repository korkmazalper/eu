# Vier Phasen vom Datenbankanlegen

## Sammeln von Kundenanfragen:

Anforderungen der Kunden analysieren.
Ziel: Die Bedürfnisse und Erwartungen der Kunden dokumentieren.

## Konzeptionelle Phase:

- Erstellung eines ERD (Entity-Relationship-Diagramms).
- Ein Konzept, das sowohl Kunden als auch Entwicklern verständlich ist.
- Darstellung der Entitäten und deren Beziehungen.
- Fokus: Abstraktes Datenmodell ohne technische Details.
- **Unabhängig von einer spezifischen Datenbanktechnologie**.
- M:N Beziehungen werden nicht aufgelöst.

## Logische Phase:

- **Übersetzung des ERD in ein logisches Datenbankmodell**.
- **Entitäten werden als Datenbankentitäten beschrieben**. 
- Definition von **Attributen, abstrakte Datentypen von Attributen** (``date, int``,  ), **Primärschlüsseln** und **Fremdschlüsseln**.
- **Technologieunabhängig**, aber präziser als das ERD.
- Verknüpfungstabellen(Zwischentabellen) werden erstellt, **um die M:N-Beziehungen aufzulösen**.

## Physische Datenbankerstellung:

Umsetzung des logischen Modells in ein DBMS (z. B. MySQL, PostgreSQL).
Erstellung von Tabellen, Datentypen, Constraints und Indexen.
Ziel: Fertige, einsatzbereite Datenbank.