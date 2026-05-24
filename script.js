document.addEventListener("DOMContentLoaded", () => {

    // 1. Navigazione Fluida del Tasto "Analizza le Esche" della Hero
    const btnScopri = document.getElementById("btn-scopri");
    if (btnScopri) {
        btnScopri.addEventListener("click", () => {
            document.getElementById("meccanismi").scrollIntoView({ behavior: "smooth" });
        });
    }

    // 2. Reindirizzamento dinamico delle Cards su GitHub Pages
    // Al click, porta l'utente ad una pagina di approfondimento specifica
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.addEventListener("click", () => {
            const destinazione = card.getAttribute("data-page");
            // Nota: Per farlo funzionare su GitHub, creerai in seguito i file 'urgenza.html', ecc.
            window.location.href = destinazione; 
        });
    });

    // 3. Bottone di Segnalazione Urgente
    const btnSegnala = document.getElementById("btn-segnala");
    if (btnSegnala) {
        btnSegnala.addEventListener("click", () => {
            alert("⚠️ Sistema di segnalazione Garzillo's Foundation:\nInvia la mail sospetta a: report@garzillofoundation.org per l'analisi sandbox.");
        });
    }

    // 4. Logica di Scansione Intelligente del Simulatore
    const btnScanner = document.getElementById("btn-scanner");
    const inputScanner = document.getElementById("scanner-input");
    const resultBox = document.getElementById("scanner-result");

    if (btnScanner && inputScanner && resultBox) {
        btnScanner.addEventListener("click", () => {
            const testoInserito = inputScanner.value.trim().toLowerCase();

            if (testoInserito === "") {
                alert("Per favore, inserisci un indirizzo email o un link da controllare.");
                return;
            }

            // Reset dello stato del box dei risultati
            resultBox.classList.remove("hidden", "result-danger", "result-safe");
            resultBox.innerHTML = "Analisi euristica dei metadati in corso...";
            resultBox.classList.add("result-safe"); // temporaneo per l'animazione

            // Simuliamo un ritardo di scansione di 1 secondo per dare realismo
            setTimeout(() => {
                resultBox.classList.remove("result-safe");
                
                // Lista di parole chiave tipiche dei domini fraudolenti (Falsi brand)
                const parolePericolose = ["poste", "banca", "paypal-update", "verifica-conto", "pacco-giacenza", "crypto", "secure-login"];
                
                // Controllo se l'input contiene termini truffa
                let IsPericoloso = parolePericolose.some(parola => testoInserito.includes(parola));

                // Se contiene estensioni strane o non è un dominio istituzionale reale
                if (testoInserito.endsWith(".xyz") || testoInserito.endsWith(".info") || IsPericoloso) {
                    resultBox.classList.add("result-danger");
                    resultBox.innerHTML = `🚨 <strong>RISCHIO ELEVATO DETECTED:</strong> Il dominio "${testoInserito}" mostra pattern tipici di spoofing e strutture di attrazione emotiva. Non cliccare sui link allegati.`;
                } else {
                    resultBox.classList.add("result-safe");
                    resultBox.innerHTML = `✅ <strong>DOMINIO PULITO O NOTO:</strong> "${testoInserito}" non è presente nei database attivi dei server di phishing di Garzillo's Foundation. Verifica comunque sempre i certificati SSL.`;
                }
            }, 1000);
        });
    }
});