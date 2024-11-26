## Hack the Recipe

![alt text](image.png)
Aufgabe:

- Erstellen Sie ein Rezeptobjekt, in dem die Zutaten mit ihren Mengen und Einheiten gespeichert werden. Beispiel: Die Eigenschaft „Floor“ hat einen Wert, der selbst ein Objekt ist, mit zwei Eigenschaften:
  quantity (Ganzzahl)
  unit (Zeichenfolge).
  Protokollieren Sie das Rezept in der Konsole.

- Schreiben Sie eine Funktion hackRecipe, die zwei Parameter verwendet: „ingredient“ und „quantityToAdd“. Die Funktion führt Folgendes aus:

  - Ändert das Rezept, indem „quantityToAdd“ zur „ingredient“-quantity hinzugefügt wird.
  - Protokolliert in der Konsole etwas wie: „10 g Salz hinzugefügt“.
  - Protokolliert das neue Rezept in der Konsole.

- Schreiben Sie eine neue Funktion hackRecipeFaster, sodass sie nur einen Parameter benötigt: die Zutat. Die hinzuzufügenden Mengen hängen von den Einheiten der Zutaten ab. Zum Beispiel: "Floor" wird in Gramm gemessen, sodass Sie 10 g hinzufügen, wenn Sie die Menge ändern.

![alt text](image-1.png)

```js
var recipe = {
  floor: {
    quantity: 200,
    unit: 'g'
  },
  sugar: {
    quantity: 150,
    unit: 'g'
  },
  butter: {
    quantity: 125,
    unit: 'g'
  },
  milk: {
    quantity: 125,
    unit: 'g'
  },
  eggs: {
    quantity: 2,
    unit: 'units'
  },
  vanillaEssense: {
    quantity: 1,
    unit: 'teaspoon'
  },
  salt: {
    quantity: 0.5,
    unit: 'teaspoon'
  },
  bakingPowder: {
    quantity: 2,
    unit: 'teaspoon'
  }
}
```
