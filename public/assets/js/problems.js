let problems = [
    // 10 domande semplici sul testo
    {
        "title": "Testo Semplice",
        "description": "Scrivere testo.",
        "latex": String.raw`\text{Ciao mi chiamo Giovanni,} \\ \text{per gli amici GioGino.}`
    },
    {
        "title": "Testo Semplice",
        "description": "Scrivere testo.",
        "latex": String.raw`\text{\textbf{Sistemi Operativi} è un esame semplice!}`
    },
    {
        "title": "Testo Semplice",
        "description": "Scrivere testo.",
        "latex": String.raw`\text{Hello LaTeX}`
    },
    {
        "title": "Testo Semplice",
        "description": "Scrivere testo.",
        "latex": String.raw`\text{\textit{git commit} -am "Hello Git"}`
    },
    {
        "title": "Testo Semplice",
        "description": "Scrivere testo.",
        "latex": String.raw`\text{\texttt{print("Hello World")}}`
    },
    {
        "title": "Testo Semplice",
        "description": "Scrivere testo.",
        "latex": String.raw`\text{Amo la didattica \textbf{innovativa}}`
    },
    {
        "title": "Testo Semplice",
        "description": "Scrivere testo.",
        "latex": String.raw`\text{Il mio nick è Igor\_Miti}`
    },
    {
        "title": "Testo Semplice",
        "description": "Scrivere testo.",
        "latex": String.raw`\text{Il simbolo di Docker \textbf{NON} è uno squalo\textbf{!!!}}`
    },
    {
        "title": "Testo Semplice",
        "description": "Scrivere testo.",
        "latex": String.raw`\text{Questa\_è\_la\_snake\_case\_notation}`
    },
    {
        "title": "Testo Semplice",
        "description": "Scrivere testo.",
        "latex": String.raw`\text{La pizza con l'ananas è \underline{sottovalutata}}`
    },
    // 10 frasi testuali con più caratteri di escaping
    {
        "title": "Testo Semplice",
        "description": "Scrivere testo.",
        "latex": String.raw`\text{\texttt{int Mio\_Portafoglio = 5\$;}}`
    },
    {
        "title": "Testo Semplice",
        "description": "Scrivere testo.",
        "latex": String.raw`\text{Grazie all'escaping posso scrivere \{\_\}}`
    },
    {
        "title": "Testo Semplice",
        "description": "Scrivere testo.",
        "latex": String.raw`\text{Fare sia la graffa aperta \{ che quella chiusa \} è difficile}`
    },
    {
        "title": "Testo Semplice",
        "description": "Scrivere testo.",
        "latex": String.raw`\text{Progressi esami: 100\% completati, 0\% incompleti}`
    },
    {
        "title": "Testo Semplice",
        "description": "Scrivere testo.",
        "latex": String.raw`\text{Underscore \_, dollaro \$, graffe \{percentuale \%\}}`
    },
    {
        "title": "Testo Semplice",
        "description": "Scrivere testo.",
        "latex": String.raw`\text{5\%, 25\%, 40\% \& 30\%}`
    },
    {
        "title": "Testo Semplice",
        "description": "Scrivere testo.",
        "latex": String.raw`\text{L'\textbf{AND} logico si rappresenta con due \&\& ?}`
    },
    {
        "title": "Testo Semplice",
        "description": "Scrivere testo.",
        "latex": String.raw`\text{Commento in Python: \#} \\ \text{Commento in C: \%}`
    },
    {
        "title": "Testo Semplice",
        "description": "Scrivere testo.",
        "latex": String.raw`\text{Amo fare escaping: \%, \&, \%, \#, \$.}`
    },
    {
        "title": "Testo Semplice",
        "description": "Scrivere testo.",
        "latex": String.raw`\text{My\_Name\_Is\_Giovanni\_Giorgio}`
    },
    // 10 equazioni semplici
    {
        "title": "Matematica Semplice",
        "description": "Scrivere l'espressione.",
        "latex": String.raw`2 + 5 = 7`
    },
    {
        "title": "Matematica Semplice",
        "description": "Scrivere l'espressione.",
        "latex": String.raw`2^2 = 4 + 0`
    },
    {
        "title": "Matematica Semplice",
        "description": "Scrivere l'espressione.",
        "latex": String.raw`x^2 - 1 = 0.999`
    },
    {
        "title": "Matematica Semplice",
        "description": "Scrivere l'espressione.",
        "latex": String.raw`x_0 + x_1 + ... + x_{n - 1}`
    },
    {
        "title": "Matematica Semplice",
        "description": "Scrivere l'espressione.",
        "latex": String.raw`\sqrt{x^4 + x^0}`
    },
    {
        "title": "Matematica Semplice",
        "description": "Scrivere l'espressione.",
        "latex": String.raw`X^y = 400\$`
    },
    {
        "title": "Matematica Semplice",
        "description": "Scrivere l'espressione.",
        "latex": String.raw`(45 + 5) - 10 = x_{soluzione}`
    },
    {
        "title": "Matematica Semplice",
        "description": "Scrivere l'espressione.",
        "latex": String.raw`X_{i}^{5} = 32`
    },
    {
        "title": "Matematica Semplice",
        "description": "Scrivere l'espressione.",
        "latex": String.raw`5^2 = x_x`
    },
    {
        "title": "Matematica Semplice",
        "description": "Scrivere l'espressione.",
        "latex": String.raw`[(2 + x) - x] = 2`
    },
    // 10 equazioni con lettere greche
    {
        "title": "Matematica Semplice",
        "description": "Scrivere l'espressione.",
        "latex": String.raw`\epsilon + \theta + \beta`
    },
    {
        "title": "Matematica Semplice",
        "description": "Scrivere l'espressione.",
        "latex": String.raw`\alpha + \Gamma + \Theta`
    },
    {
        "title": "Matematica Semplice",
        "description": "Scrivere l'espressione.",
        "latex": String.raw`\alpha + \beta + \eta`
    },
    {
        "title": "Matematica Semplice",
        "description": "Scrivere l'espressione.",
        "latex": String.raw`\sum_{i = 0}^{k} x_i`
    },
    {
        "title": "Matematica Semplice",
        "description": "Scrivere l'espressione.",
        "latex": String.raw`\theta_1 + \theta_2 = \Theta`
    },
    {
        "title": "Matematica Semplice",
        "description": "Scrivere l'espressione.",
        "latex": String.raw`\phi_i + x_1 = \alpha`
    },
    {
        "title": "Matematica Semplice",
        "description": "Scrivere l'espressione.",
        "latex": String.raw`\omega^2 + \Omega_1`
    },
    {
        "title": "Matematica Semplice",
        "description": "Scrivere l'espressione.",
        "latex": String.raw`\Phi + \phi + \eta + \epsilon`
    },
    {
        "title": "Matematica Semplice",
        "description": "Scrivere l'espressione.",
        "latex": String.raw`\Sigma + \sum_{i}`
    },
    {
        "title": "Matematica Semplice",
        "description": "Scrivere l'espressione.",
        "latex": String.raw`\theta_i - \alpha * \theta_{i - 1}`
    },
    // 10 equazioni leggermente complesse
    {
        "title": "Matematica Semplice",
        "description": "Scrivere l'espressione.",
        "latex": String.raw`\frac{1}{2}`
    },
    {
        "title": "Matematica Semplice",
        "description": "Scrivere l'espressione.",
        "latex": String.raw`\frac{x+1}{y-1}`
    },
    {
        "title": "Matematica Semplice",
        "description": "Scrivere l'espressione.",
        "latex": String.raw`\frac{1}{1 + \frac{1}{x}}`
    },
    {
        "title": "Matematica Semplice",
        "description": "Scrivere l'espressione.",
        "latex": String.raw`\sqrt{x}`
    },
    {
        "title": "Matematica Semplice",
        "description": "Scrivere l'espressione.",
        "latex": String.raw`\sqrt{b^2 - 4ac}`
    },
    {
        "title": "Matematica Semplice",
        "description": "Scrivere l'espressione.",
        "latex": String.raw`\sqrt[3]{8}`
    },
    {
        "title": "Matematica Semplice",
        "description": "Scrivere l'espressione.",
        "latex": String.raw`\sqrt[n]{x}`
    },
    {
        "title": "Matematica Semplice",
        "description": "Scrivere l'espressione.",
        "latex": String.raw`\frac{\sqrt{x}}{y^2}`
    },
    {
        "title": "Matematica Semplice",
        "description": "Scrivere l'espressione.",
        "latex": String.raw`A = \pi r^2`
    },
    {
        "title": "Matematica Semplice",
        "description": "Scrivere l'espressione.",
        "latex": String.raw`x = \frac{-b \pm \sqrt{\Delta}}{2a}`
    }
    // 10 domande matematica e testo
    {
        "title": "Matematica e testo",
        "description": "Scrivere espressioni, testo o entrambi.",
        "latex": String.raw`\text{Michelino è l'uomo } \alpha \text{ del \textbf{Politecnico}\textit{!}}`
    },
    {
        "title": "Matematica e testo",
        "description": "Scrivere espressioni, testo o entrambi.",
        "latex": String.raw`\text{Risolvere la seguente \textbf{equazione}:} \\ \Theta = 2 + 2`
    },
    {
        "title": "Matematica e testo",
        "description": "Scrivere espressioni, testo o entrambi.",
        "latex": String.raw`\text{Risolvi queste \textbf{operazioni}:} \\ 5 + 2 = \\ 2 + 0 = \\ 3 - 5 = `
    },
    {
        "title": "Matematica e testo",
        "description": "Scrivere espressioni, testo o entrambi.",
        "latex": String.raw`\text{while(\textbf{True}):} \\ \alpha = \alpha*3`
    },
    {
        "title": "Matematica e testo",
        "description": "Scrivere espressioni, testo o entrambi.",
        "latex": String.raw`\text{\underline{I matematici amano le lettere} } \alpha, \beta, \phi, \text{ \textbf{ecc.}}`
    },
    {
        "title": "Matematica e testo",
        "description": "Scrivere espressioni, testo o entrambi.",
        "latex": String.raw`\text{\textit{Tutto} è \textbf{iniziato} da un} \\ 2 + 2 = 4`
    },
    {
        "title": "Matematica e testo",
        "description": "Scrivere espressioni, testo o entrambi.",
        "latex": String.raw`15 + 18 \text{ \texttt{quanto fa?}}`
    },
    {
        "title": "Matematica e testo",
        "description": "Scrivere espressioni, testo o entrambi.",
        "latex": String.raw`\text{Risolvi la sommatoria: } \sum_{i = 1}^{5} (x_i^2 + 3^1)`
    },
    {
        "title": "Matematica e testo",
        "description": "Scrivere espressioni, testo o entrambi.",
        "latex": String.raw`\text{Questo è alpha maiuscolo: } \Alpha \\ \text{Questo è un prodotto: } \Alpha_1 * \alpha_2 * 5`
    },
    {
        "title": "Matematica e testo",
        "description": "Scrivere espressioni, testo o entrambi.",
        "latex": String.raw`\text{Conosci gli altri numeri di: } \pi = 3.14 \text{\textbf{???}}`
    },
    // 10 domande di sintassi LaTeX
    {
        "title": "Sintassi LaTeX",
        "description": "Scrivere sintassi LaTeX",
        "latex": String.raw`\text{\textbackslash section\{Questa è una sezione!\}} \\ \text{\textbackslash subsection\{Questa è una sotto-sezione!\}}`
    },
    {
        "title": "Sintassi LaTeX",
        "description": "Scrivere sintassi LaTeX",
        "latex": String.raw`\text{\textbackslash begin\{itemize\}} \\ \text{\textbackslash item Sono un oggetto alla \textbf{lista}} \\ \text{\textbackslash end\{itemize\}}`
    },
    {
        "title": "Sintassi LaTeX",
        "description": "Scrivere sintassi LaTeX",
        "latex": String.raw`\text{\textbackslash begin\{enumerate\}} \\ \text{\textbackslash item Sono un oggetto \textbf{numerato} alla \textbf{lista}} \\ \text{\textbackslash end\{enumerate\}}`
    },
    {
        "title": "Sintassi LaTeX",
        "description": "Scrivere sintassi LaTeX",
        "latex": String.raw`\text{\% Questo è un commento. Sotto definisco un pacchetto} \\ \text{\textbackslash usepackage\{amsmath\}}`
    },
    {
        "title": "Sintassi LaTeX",
        "description": "Scrivere sintassi LaTeX",
        "latex": String.raw`\text{\textbackslash title\{Il mio primo progetto di IngSoft\}} \\ \text{\textbackslash author\{Ottone Erminio\}}`
    },
    {
        "title": "Sintassi LaTeX",
        "description": "Scrivere sintassi LaTeX",
        "latex": String.raw`\text{\textbackslash begin\{abstract\}} \\ \text{In questo \textbf{Abstract} posso \textit{sintetizzare} l'intero lavoro} \\ \text{\textbackslash end\{abstract\}}`
    },
    {
        "title": "Sintassi LaTeX",
        "description": "Scrivere sintassi LaTeX",
        "latex": String.raw`\text{Qui di seguito abbiamo l'\textbf{\underline{immagine}}} \\ \text{\textbackslash includegraphics\{poliba.png\}}`
    },
    {
        "title": "Sintassi LaTeX",
        "description": "Scrivere sintassi LaTeX",
        "latex": String.raw`\text{\textbackslash includegraphics[width=0.8\textbackslash textwidth]\{poliba.png\}}`
    },
    {
        "title": "Sintassi LaTeX",
        "description": "Scrivere sintassi LaTeX",
        "latex": String.raw`\text{\textbackslash title\{Tutta la storia di Lello e Loconte\}} \\ \text{\textbackslash begin\{document\}} \\ \text{\textbackslash maketitle}`
    },
    {
        "title": "Sintassi LaTeX",
        "description": "Scrivere sintassi LaTeX",
        "latex": String.raw`\text{\textbackslash begin\{document\}} \\ \text{Salve, mi chiamo \textbf{studente\_X} e non ho passato \textbf{Sistemi Operativi}.} \\ \text{\textbackslash end\{document\}}`
    },
];