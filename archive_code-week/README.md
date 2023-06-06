## Nome progetto: Archive

# Descrizione

Il cliente ci ha richiesto un piccolo archivio di utenti.

# Target

Utenti generici

# Linee guida

Endpoint che restituisce i 10 utenti in archivio:
`https://jsonplaceholder.typicode.com/users`

Per ogni oggetto restituito bisognerà aggiungere una nuova chiave denominata "active" che
può essere valorizzata con true o false. Genera questo valore in maniera generica. Decidi tu
come.

# Layout

Bisogna prevedere un layout diviso in 3 sezioni:

- Sezione 1: La pagina avrà un titolo in alto con testo "Archive";
- Sezione 2: La lista contatti con active a true
- Sezione 3: Qui mettiamo un titolo con "utenti non abilitati" e inseriamo sotto gli utenti
  che hanno "active" valorizzato a false.

Per ogni card "contatto" bisognerà sempre mostrare le informazioni anagrafiche (name e
email obbligatorie, il resto delle informazioni a scelta tua).
