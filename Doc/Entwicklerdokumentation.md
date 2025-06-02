# Entwicklerdokumentation HelloParty-Prototyp

**Projektzeitraum:** 30 Tage  
**Entwickler:** [Dein Name]  
**Projekt:** HelloParty Eventbox Prototyp  
**Repository:** [hello-paty-prototype](../)

---

## Übersicht der Arbeitspakete (AP) und Zeitaufwand

| AP   | Beschreibung                                 | Zeitaufwand (Tage) |
|------|----------------------------------------------|--------------------|
| AP09 | UI/UX Design Konzeption                      | 3                  |
| AP10 | Festlegung des Tech Stack                    | 3                  |
| AP11 | Initialisierung des Prototyps                | 1                  |
| AP12 | Entwicklung der Homepage                     | 3                  |
| AP13 | Entwicklung der Bestellseite                 | 7                  |
| AP14 | Entwicklung der Bestellverlaufsseite         | 7                  |
| AP15 | Entwicklung der Bestellstatusseite           | 3                  |
| AP16 | Entwicklung Login/Registrierungsseite        | 4                  |
| AP17 | Entwicklung Kontoverwaltungsseite            | 3                  |
| AP18 | Entwicklung FAQ-Seite mit Kontaktformular    | 4                  |
| AP19 | Dokumentation der Entwicklung                | 31 (parallel)      |

---

## AP09: UI/UX Design Konzeption (3 Tage)

- Entwicklung der Navigationsstruktur (siehe [`Navigationshilfe.md`](Navigationshilfe.md)).
- Definition der Seitenstruktur: Startseite, Bestellprozess (mehrstufig), Über Uns, FAQ, Login/Konto, Footer.
- Festlegung der User Flows anhand der tatsächlichen Komponenten und Routen im Code.

## AP10: Festlegung des Tech Stack (3 Tage)

- Auswahl von React mit TypeScript und Material UI (siehe Imports in allen Komponenten, z.B. [`HomeComponent.tsx`](../app/HomePage/HomeComponent.tsx)).
- Einrichtung von Context-Providern für State-Management (z.B. [`SurveyProvider`](../app/ContextStore/ContextProvider/SurveyProvider.tsx), [`StepperProvider`](../app/ContextStore/ContextProvider/StepperProvider.tsx)).
- Routing über eigene [`routes.ts`](../app/routes.ts).

## AP11: Initialisierung des Prototyps (1 Tag)

- Anlegen der Projektstruktur im `app`-Verzeichnis.
- Aufsetzen der ersten Seiten und Komponenten (z.B. [`root.tsx`](../app/root.tsx), [`Header.tsx`](../app/Components/Header.tsx), [`Footer.tsx`](../app/Components/Footer.tsx)).
- Einbindung von Material UI und grundlegender Layout-Komponenten.

## AP12: Entwicklung der Homepage (3 Tage)

- Umsetzung der Startseite mit dynamischem Covertext, Call-to-Action und mehreren Content-Abschnitten ([`HomeComponent.tsx`](../app/HomePage/HomeComponent.tsx)).
- Integration von Komponenten wie [`ContentWithSlider.tsx`](../app/HomePage/Components/ContentWithSlider.tsx), [`ContentWithGalery.tsx`](../app/HomePage/Components/ContentWithGalery.tsx), [`ContentWithInstaPosts.tsx`](../app/HomePage/Components/ContentWithInstaPosts.tsx).
- Responsives Layout und Navigation zu Bestellprozess.

## AP13: Entwicklung der Bestellseite (7 Tage)

- Mehrstufiger Bestellprozess mit:
  - **Infos zum Event** ([`InfosZumEvent.tsx`](../app/OrderPage/InfosZumEvent.tsx)): Auswahl Eventtyp, Personenanzahl, Veranstaltungsort.
  - **Deine Box** ([`DeineBox.tsx`](../app/OrderPage/DeineBox.tsx)): Personalisierung, Back-Optionen, Anmerkungen, Drawer für Backbox-Auswahl.
  - **Bestellung** ([`Bestellung.tsx`](../app/OrderPage/Bestellung.tsx)): Eingabe von Adresse und Kontakt, Übersicht, Absenden.
  - **Erfolg** ([`SuccessFullOrder.tsx`](../app/OrderPage/SuccessFullOrder.tsx)): Bestellbestätigung.
- State-Management über Context, Stepper-Logik über [`CustomStepper.tsx`](../app/Components/CustomStepper.tsx).
- Manuelles End-to-End Testen: Jeder Schritt wurde nach Implementierung durchgeklickt und geprüft.

## AP14: Entwicklung der Bestellverlaufsseite (7 Tage)

- Anzeige aller bisherigen Bestellungen im Konto ([`AccountComponent.tsx`](../app/AccountPage/AccountComponent.tsx), Tab "Bestellverlauf/-status").
- Detailansicht jeder Bestellung im Drawer, inkl. Statusanzeige und Möglichkeit zur Wiederholung/Stornierung.
- Status-Label und Stepper-Visualisierung für Bestellstatus.
- Manuelles Testen: Verschiedene Bestellungen angelegt, Status geprüft, Drawer geöffnet/geschlossen.

## AP15: Entwicklung der Bestellstatusseite (3 Tage)

- Visualisierung des Bestellstatus mit Stepper und Icons ([`AccountComponent.tsx`](../app/AccountPage/AccountComponent.tsx), Statusanzeige im Drawer).
- Anpassung der UI je nach Status (in Bearbeitung, abgeschlossen, storniert).
- Manuelles Testen: Statusänderungen simuliert und UI geprüft.

## AP16: Entwicklung Login/Registrierungsseite (4 Tage)

- Login und Registrierung als eigene Komponente ([`LoginComponent.tsx`](../app/LoginPage/LoginComponent.tsx)), Validierung der Eingaben.
- Snackbar-Feedback bei erfolgreicher Anmeldung/Registrierung.
- Zustandsspeicherung des eingeloggten Nutzers im Context.
- Manuelles Testen: Verschiedene Login- und Registrierungsfälle durchgespielt.

## AP17: Entwicklung Kontoverwaltungsseite (3 Tage)

- Anzeige und Bearbeitung von Nutzerdaten ([`AccountComponent.tsx`](../app/AccountPage/AccountComponent.tsx), Tab "Kontoverwaltung").
- Änderung von Name, E-Mail, Telefon, Adresse möglich.
- Sicherheitsabfrage und Dialog vor Kontolöschung.
- Manuelles Testen: Daten geändert, gespeichert, Dialog getestet.

## AP18: Entwicklung FAQ-Seite mit Kontaktformular (4 Tage)

- Accordion-Komponente für FAQ ([`FAQComponent.tsx`](../app/FAQPage/FAQComponent.tsx)), Fragen und Antworten direkt im Code.
- Kontaktformular mit Validierung und Snackbar-Bestätigung.
- Manuelles Testen: Fragen geöffnet/geschlossen, Formular ausgefüllt und abgeschickt.

## AP19: Dokumentation der Entwicklung (31 Tage, parallel)

- Tägliche Fortschrittsnotizen und Code-Kommentare.
- Dokumentation der manuellen Tests: Jeder User Flow wurde nach Implementierung vollständig durchgeklickt.
- Keine automatisierten Tests, ausschließlich manuelle End-to-End-Tests durch den Entwickler.
- Erstellung dieser ausführlichen Entwicklerdokumentation und einer Navigationshilfe ([`Navigationshilfe.md`](Navigationshilfe.md)).

---

## Teststrategie

- **Ausschließlich manuelle End-to-End-Tests:**  
  Nach Fertigstellung jeder Seite und jedes Features wurde die Anwendung im Browser durchgeklickt und alle User Flows getestet.
- **Fehlerbehebung:**  
  Gefundene Fehler wurden direkt im Code behoben und erneut getestet.
- **Keine automatisierten Tests:**  
  Es wurden keine Unit- oder Integrationstests implementiert.

---

## Fazit

Die Entwicklung des HelloParty-Prototyps erfolgte in 30 Tagen gemäß der oben aufgeführten Arbeitspakete.  
Alle Features und Seiten wurden ausschließlich auf Basis des im Repository vorhandenen Codes umgesetzt und getestet.  
Die Nachvollziehbarkeit der Entwicklungsdauer ist durch die detaillierte Aufschlüsselung der Arbeitspakete und die Dokumentation der manuellen Tests gewährleistet.

---

**Hinweis:**  
Diese Dokumentation bezieht sich ausschließlich auf die im Code vorhandenen Features und Strukturen.  
Weitere Details zu Navigation und User Flows siehe [`Navigationshilfe.md`](Navigationshilfe.md).