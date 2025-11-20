/*
let problems1 = [
    // --- 1: Testo e Caratteri Speciali (Escape) ---
    {
        "title": "Testo Semplice",
        "description": "Scrivere testo normale.",
        "latex": String.raw`\text{Ciao}`
    },
    {
        "title": "Percentuale",
        "description": "Scrivere il simbolo %.",
        "latex": String.raw`50\%`
    },
    {
        "title": "Dollaro",
        "description": "Scrivere il simbolo $.",
        "latex": String.raw`10\$`
    },
    {
        "title": "E-commerciale",
        "description": "Scrivere il simbolo &.",
        "latex": String.raw`\text{M \& L}`
    },
    {
        "title": "Cancelletto",
        "description": "Scrivere il simbolo #.",
        "latex": String.raw`\#1`
    },
    {
        "title": "Underscore",
        "description": "Scrivere il simbolo _.",
        "latex": String.raw`\text{mio\_file}`
    },
    {
        "title": "Parentesi Graffe",
        "description": "Scrivere i simboli { e }.",
        "latex": String.raw`\{ a + b \}`
    },
    {
        "title": "Backslash",
        "description": "Scrivere il simbolo \.",
        "latex": String.raw`\backslash`
    },
    {
        "title": "Spazio (Comando)",
        "description": "Aggiungere uno spazio medio.",
        "latex": String.raw`A \quad B`
    },

    // --- 2: Formattazione Testo e Font ---
    {
        "title": "Testo Grassetto",
        "description": "Usare \textbf.",
        "latex": String.raw`\text{\textbf{Importante}}`
    },
    {
        "title": "Testo Corsivo",
        "description": "Usare \textit.",
        "latex": String.raw`\text{\textit{Nota}}`
    },
    {
        "title": "Grassetto Matematico",
        "description": "Usare \mathbf.",
        "latex": String.raw`\mathbf{v}`
    },
    {
        "title": "Corsivo Matematico",
        "description": "Usare \mathit.",
        "latex": String.raw`\mathit{f(x)}`
    },
    {
        "title": "Font Sans-Serif",
        "description": "Usare \mathsf.",
        "latex": String.raw`\mathsf{T}`
    },
    {
        "title": "Font Typewriter",
        "description": "Usare \mathtt.",
        "latex": String.raw`\mathtt{Codice}`
    },
    {
        "title": "Testo Normale in Formula",
        "description": "Usare \text.",
        "latex": String.raw`x = 5 \text{ (se } y > 0 \text{)}`
    },
    {
        "title": "Dimensione: small",
        "description": "Rimpicciolire il testo.",
        "latex": String.raw`\small \text{nota a piè pagina}`
    },
    {
        "title": "Sottolineato",
        "description": "Usare underline.",
        "latex": String.raw`\underline{\text{Sottolineato}}`
    },

    // --- 3: Operatori Matematici Semplici ---
    {
        "title": "Addizione",
        "description": "Matematica di base.",
        "latex": String.raw`1 + 1 = 2`
    },
    {
        "title": "Sottrazione",
        "description": "Matematica di base.",
        "latex": String.raw`5 - 3 = 2`
    },
    {
        "title": "Moltiplicazione (times)",
        "description": "Il simbolo 'per'.",
        "latex": String.raw`a \times b`
    },
    {
        "title": "Divisione (div)",
        "description": "Il simbolo 'diviso'.",
        "latex": String.raw`x \div y`
    },
    {
        "title": "Più o Meno",
        "description": "Simbolo 'pm'.",
        "latex": String.raw`\pm 5`
    },
    {
        "title": "Punto (Moltiplicazione)",
        "description": "Simbolo 'cdot'.",
        "latex": String.raw`x \cdot y`
    },
    {
        "title": "Non Uguale",
        "description": "Simbolo 'neq'.",
        "latex": String.raw`x \neq y`
    },
    {
        "title": "Minore o Uguale",
        "description": "Simbolo 'leq'.",
        "latex": String.raw`i \leq n`
    },
    {
        "title": "Maggiore o Uguale",
        "description": "Simbolo 'geq'.",
        "latex": String.raw`j \geq 0`
    },
    {
        "title": "Circa Uguale",
        "description": "Simbolo 'approx'.",
        "latex": String.raw`\pi \approx 3.14`
    },

    // --- 4: Lettere Greche ---
    {
        "title": "Alpha",
        "description": "Lettera greca.",
        "latex": String.raw`\alpha`
    },
    {
        "title": "Beta",
        "description": "Lettera greca.",
        "latex": String.raw`\beta`
    },
    {
        "title": "Gamma (minuscola)",
        "description": "Lettera greca.",
        "latex": String.raw`\gamma`
    },
    {
        "title": "Gamma (maiuscola)",
        "description": "Lettera greca.",
        "latex": String.raw`\Gamma`
    },
    {
        "title": "Delta (minuscola)",
        "description": "Lettera greca.",
        "latex": String.raw`\delta`
    },
    {
        "title": "Delta (maiuscola)",
        "description": "Lettera greca.",
        "latex": String.raw`\Delta`
    },
    {
        "title": "Epsilon",
        "description": "Lettera greca.",
        "latex": String.raw`\epsilon`
    },
    {
        "title": "Theta (minuscola)",
        "description": "Lettera greca.",
        "latex": String.raw`\theta`
    },
    {
        "title": "Theta (maiuscola)",
        "description": "Lettera greca.",
        "latex": String.raw`\Theta`
    },
    {
        "title": "Pi Greco",
        "description": "Costante matematica.",
        "latex": String.raw`\pi`
    },
    {
        "title": "Mu",
        "description": "Lettera greca.",
        "latex": String.raw`\mu`
    },
    {
        "title": "Sigma (minuscola)",
        "description": "Lettera greca.",
        "latex": String.raw`\sigma`
    },
    {
        "title": "Sigma (maiuscola)",
        "description": "Simbolo di sommatoria.",
        "latex": String.raw`\Sigma`
    },
    {
        "title": "Omega (minuscola)",
        "description": "Lettera greca.",
        "latex": String.raw`\omega`
    },
    {
        "title": "Omega (maiuscola)",
        "description": "Lettera greca.",
        "latex": String.raw`\Omega`
    },

    // --- 5: Esponenti e Indici ---
    {
        "title": "Esponente Semplice",
        "description": "Al quadrato.",
        "latex": String.raw`x^2`
    },
    {
        "title": "Indice Semplice",
        "description": "Variabile con indice.",
        "latex": String.raw`x_1`
    },
    {
        "title": "Esponente Multiplo",
        "description": "Usare le parentesi {}.",
        "latex": String.raw`e^{i\pi}`
    },
    {
        "title": "Indice Multiplo",
        "description": "Usare le parentesi {}.",
        "latex": String.raw`x_{i+1}`
    },
    {
        "title": "Esponente e Indice",
        "description": "Entrambi sulla stessa x.",
        "latex": String.raw`x_i^2`
    },
    {
        "title": "Formula Chimica (Acqua)",
        "description": "Indici.",
        "latex": String.raw`H_2O`
    },
    {
        "title": "Formula Chimica (CO2)",
        "description": "Indici.",
        "latex": String.raw`CO_2`
    },
    {
        "title": "Gradi",
        "description": "Un angolo retto.",
        "latex": String.raw`90^\circ`
    },
    {
        "title": "Apice (Testo)",
        "description": "Esponente nel testo.",
        "latex": String.raw`\text{1}^{\text{o}} \text{ posto}`
    },
    {
        "title": "Formula di Einstein",
        "description": "Un classico.",
        "latex": String.raw`E = mc^2`
    },
    {
        "title": "Teorema di Pitagora",
        "description": "Un classico.",
        "latex": String.raw`a^2 + b^2 = c^2`
    },

    // --- 6: Frazioni e Radici ---
    {
        "title": "Frazione Semplice",
        "description": "Comando 'frac'.",
        "latex": String.raw`\frac{1}{2}`
    },
    {
        "title": "Frazione Complessa",
        "description": "Numeratore e denominatore.",
        "latex": String.raw`\frac{x+1}{y-1}`
    },
    {
        "title": "Frazione Annidata",
        "description": "Frazione dentro frazione.",
        "latex": String.raw`\frac{1}{1 + \frac{1}{x}}`
    },
    {
        "title": "Radice Quadrata",
        "description": "Comando 'sqrt'.",
        "latex": String.raw`\sqrt{x}`
    },
    {
        "title": "Radice Quadrata (complessa)",
        "description": "Comando 'sqrt' con esponente.",
        "latex": String.raw`\sqrt{b^2 - 4ac}`
    },
    {
        "title": "Radice Cubica",
        "description": "Con argomento opzionale [].",
        "latex": String.raw`\sqrt[3]{8}`
    },
    {
        "title": "Radice n-esima",
        "description": "Radice generica.",
        "latex": String.raw`\sqrt[n]{x}`
    },
    {
        "title": "Frazione e Radice",
        "description": "Combinazione.",
        "latex": String.raw`\frac{\sqrt{x}}{y^2}`
    },

    // --- 7: Simboli Vari (Logica, Insiemi, Frecce) ---
    {
        "title": "Infinito",
        "description": "Simbolo 'infty'.",
        "latex": String.raw`\infty`
    },
    {
        "title": "Appartenenza (Insiemi)",
        "description": "Simbolo 'in'.",
        "latex": String.raw`x \in A`
    },
    {
        "title": "Non Appartenenza",
        "description": "Simbolo 'notin'.",
        "latex": String.raw`y \notin B`
    },
    {
        "title": "Unione",
        "description": "Simbolo 'cup'.",
        "latex": String.raw`A \cup B`
    },
    {
        "title": "Intersezione",
        "description": "Simbolo 'cap'.",
        "latex": String.raw`A \cap B`
    },
    {
        "title": "Sottoinsieme",
        "description": "Simbolo 'subset'.",
        "latex": String.raw`A \subset B`
    },
    {
        "title": "Sottoinsieme o Uguale",
        "description": "Simbolo 'subseteq'.",
        "latex": String.raw`A \subseteq B`
    },
    {
        "title": "Per Ogni (Quantificatore)",
        "description": "Simbolo 'forall'.",
        "latex": String.raw`\forall x`
    },
    {
        "title": "Esiste (Quantificatore)",
        "description": "Simbolo 'exists'.",
        "latex": String.raw`\exists y`
    },
    {
        "title": "Freccia Destra (Semplice)",
        "description": "Simbolo 'to'.",
        "latex": String.raw`A \to B`
    },
    {
        "title": "Freccia Destra (Lunga)",
        "description": "Simbolo 'rightarrow'.",
        "latex": String.raw`A \rightarrow B`
    },
    {
        "title": "Freccia Destra (Doppia)",
        "description": "Simbolo 'Rightarrow'.",
        "latex": String.raw`P \Rightarrow Q`
    },
    {
        "title": "Freccia Doppia",
        "description": "Simbolo 'iff'.",
        "latex": String.raw`P \iff Q`
    },
    {
        "title": "Freccia Lunga Doppia",
        "description": "Simbolo 'Longleftrightarrow'.",
        "latex": String.raw`A \Longleftrightarrow B`
    },
    {
        "title": "Derivata Parziale",
        "description": "Simbolo 'partial'.",
        "latex": String.raw`\frac{\partial f}{\partial x}`
    },
    {
        "title": "Nabla (Gradiente)",
        "description": "Simbolo 'nabla'.",
        "latex": String.raw`\nabla f`
    },
    {
        "title": "Puntini (orizzontali)",
        "description": "Simbolo 'ldots'.",
        "latex": String.raw`1, 2, \ldots, n`
    },
    {
        "title": "Puntini (centrali)",
        "description": "Simbolo 'cdots'.",
        "latex": String.raw`a_1 + a_2 + \cdots + a_n`
    },
    {
        "title": "Accento (Vettore)",
        "description": "Simbolo 'vec'.",
        "latex": String.raw`\vec{v}`
    },
    {
        "title": "Accento (Punto)",
        "description": "Simbolo 'dot' (derivata).",
        "latex": String.raw`\dot{x}`
    },
    {
        "title": "Accento (Tilde)",
        "description": "Simbolo 'tilde'.",
        "latex": String.raw`\tilde{f}`
    },
    {
        "title": "Accento (Barra)",
        "description": "Simbolo 'bar' (media).",
        "latex": String.raw`\bar{x}`
    },

    // --- 8: Operatori (Limiti, Somme) e Ambienti ---
    {
        "title": "Sommatoria (Semplice)",
        "description": "Simbolo 'sum'.",
        "latex": String.raw`\sum_{i=1}^n`
    },
    {
        "title": "Produttoria (Semplice)",
        "description": "Simbolo 'prod'.",
        "latex": String.raw`\prod_{i=1}^n`
    },
    {
        "title": "Limite",
        "description": "Simbolo 'lim'.",
        "latex": String.raw`\lim_{x \to 0}`
    },
    {
        "title": "Sistema di Equazioni",
        "description": "Ambiente 'cases'.",
        "latex": String.raw`\begin{cases} x + y = 1 \\ x - y = 0 \end{cases}`
    },
    {
        "title": "Matrice 2x2 (Parentesi)",
        "description": "Ambiente 'pmatrix'.",
        "latex": String.raw`\begin{pmatrix} a & b \\ c & d \end{pmatrix}`
    },
    {
        "title": "Matrice Identità 2x2",
        "description": "Ambiente 'pmatrix'.",
        "latex": String.raw`I = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}`
    },
    {
        "title": "Matrice 2x2 (Quadre)",
        "description": "Ambiente 'bmatrix'.",
        "latex": String.raw`\begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}`
    },
    {
        "title": "Vettore Colonna",
        "description": "Ambiente 'pmatrix'.",
        "latex": String.raw`\begin{pmatrix} x \\ y \end{pmatrix}`
    },
    {
        "title": "Parentesi Grandi",
        "description": "Usare \left( e \right).",
        "latex": String.raw`\left( \frac{a}{b} \right)`
    },
    {
        "title": "Parentesi Quadre Grandi",
        "description": "Usare \left[ e \right].",
        "latex": String.raw`\left[ \frac{1}{2} \right]`
    },
    {
        "title": "Parentesi Graffe Grandi",
        "description": "Usare \left\{ e \right\}.",
        "latex": String.raw`\left\{ \sum_{i=1}^n i \right\}`
    },
    {
        "title": "Sopra e Sotto (stackrel)",
        "description": "Mettere testo sopra un simbolo.",
        "latex": String.raw`A \stackrel{f}{\to} B`
    },
    {
        "title": "Area Cerchio",
        "description": "Formula completa.",
        "latex": String.raw`A = \pi r^2`
    },
    {
        "title": "Formula Quadratica (Semplice)",
        "description": "Parte della formula.",
        "latex": String.raw`x = \frac{-b \pm \sqrt{\Delta}}{2a}`
    }
];
*/

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