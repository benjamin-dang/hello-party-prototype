# Hinweise zu diesem Projekt

Dieses Projekt wurde für eine benotete Abgabe erstellt und dient als Präsentation, nicht als voll funktionsfähige App.

## Bekannte Bugs

- Order Stepper funktioniert nicht, wenn Seiten außerhalb des gewünschten Flows aufgerufen werden  
  → Der Button zum Navigieren und Fortschreiten des Steppers sollte an die Stepper-Komponenten und nicht an die Gesamtseite gebunden sein.
- Die Validierung von Formularen ist teilweise unvollständig oder nicht vorhanden.
- Nach dem Login/Registrieren erfolgt keine echte Authentifizierung, sondern nur eine Simulation.
- Die Bestellhistorie wird nur im lokalen Zustand gespeichert und geht beim Neuladen verloren.
- Einige Navigationslinks (z.B. Footer) führen zu Platzhalterseiten oder sind nicht implementiert.
- Responsives Design ist nicht in allen Komponenten vollständig umgesetzt.
- Die FAQ-Seite sendet keine echten Nachrichten, sondern zeigt nur eine Erfolgsmeldung.
- Bilder werden teilweise als Platzhalter angezeigt, abhängig von Umgebungsvariablen.

Diese Fehler sind für die Präsentation nicht kritisch.

## Startanleitung

1. **Voraussetzungen:**  
   - Node.js (empfohlen: >=18)
   - npm oder yarn

2. **Abhängigkeiten installieren:**  
   ```sh
   npm install
   # oder
   yarn install
   ```

3. **Entwicklungsserver starten:**  
   ```sh
   npm run dev
   # oder
   yarn dev
   ```

4. **Anwendung öffnen:**  
   Im Browser `http://localhost:5173` aufrufen (Port kann abweichen, siehe Terminalausgabe).

---

Weitere Dokumentationen:
- [Navigationshilfe.md](Navigationshilfe.md)
- [Entwicklerdokumentation.md](Entwicklerdokumentation.md)

