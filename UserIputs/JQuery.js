$(function () {
    var stichwoerter = ["F0 - Nachschau", "F0 - Nachschau nach Blitzeinschlag", "F0 - Kleinbrand", "F1 - Garagenbrand",
        "F1 - brennender PKW", "F1 - Brennt Gartenhaus",
        "F1 - Flächenbrand", "F2 - Zimmerbrand", "F2 - Waldbrand klein", "F3 - Gebäudebrand", "F3 - BMA", "F3 - Dachstuhlbrand", "F4 - Großflächenbrand",
        "F4 - Waldbrand groß", "TH0 Unterstützung RD", "TH0 - Türöffnung", "TH0 - Ölspur",
        "TH1 - Personensuche", "TH1 - Sturmschaden klein", "TH1 - Wasserschaden", "TH1 - Person hinter Tür", "TH2 - Verkehrsunfall",
        "TH2 - Wasserrettung", "TH2 - Unfall", "TH3 - Gefäudeeinsturz", "TH3 Sturmschaden groß",
        "TH4 - VU mit Gefahrgut", "Gefahrguteinsatz", "Alarmstufenerhöhung auf F1", "Alarmstufenerhöhung auf F2",
        "Alarmstufenerhöhung auf F3", "Alarmstufenerhöhung auf F4", "Alarmstufenerhöhung auf TH1", "Alarmstufenerhöhung auf TH2",
        "Alarmstufenerhöhung auf TH3", "Alarmstufenerhöhung auf zu TH4", "Profealarm"]; //Stichwörtersammlung / Array
    $("#In_keyword").autocomplete({
        source: stichwoerter,
    });
});