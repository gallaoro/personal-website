---
path: /blog/2020-04-hello-world
date: 2020-04-05T00:00:00.000Z
tags:
  - hello-world
title: Test markdown rendering
online: true
---
# Headings

# Vorrei raccontarvi

## della volta in cui

### il presidente dell'INPS

#### diede la colpa agli hacker

##### invece che assumersi

###### le sue responsabilità

# Unordered list

* Erano i primi di aprile,
* eravamo tutti chiusi in casa
* e la gente era molto preoccupata.
    * Alle partite IVA (neanche tutte)
        * erano stati concessi
        * 600 euro per l'emergenza

# Ordered list

1. La grande idea fu quella di
2. organizzare un grande click-day
3. nel quale ogni partita IVA avrebbe dovuto
    1. entrare nel sito dell'INPS
        1. e inoltrare la richiesta
        2. per ricevere gli agognati 600 euro

# Link

Il sito in causa è [https://inps.it](https://inps.it "pippo"); che nel momento il cui scrivo nemmeno risponde.  
Ma mica serve chiedere a [google] per avere qualcosa di fatto bene.  
[AgID][1] c'è tanto lavoro da fare. Davvero tanto.

[1]: https://agid.gov.it
[google]: https://www.wired.com/story/google-coronavirus-site-testing-trump-pence/  "spoiler alert: le società di consulenza si basano su neolaureati sfruttati"

# Image

<div class="max-w-2xl">
  <img class="max-h-full" src="/img/diamo-la-colpa-ai-runner.png" title="Wikipedia logo is lit" alt="wikipedia logo">
</div>

# Enphasis

Quindi una volta arrivato il *click-day* tutto il sitema iniziò ad esplodere.

**Mario Rossi** vedeva i dati di **Luciano Vangone** e __Luciano Vangone__ quelli di __Pasquale Tridico__.

Il sistema non riusciva a gestire tutte le richieste e quindi il ***click-day*** venne ~~annullato~~  rimandato.

# Blockquotes

> "abbiamo ricevuto nei giorni scorsi e anche stamattina violenti attacchi hacker"  
> \- Pasquale Tridico, presidente INPS

# Tables

| Quindi          | venne a galla         | che     |
| --------------- |:---------------------:|:-------:|
| il sito non era | stato hackerato       | ma dai? |
| tridico aveva   | detto una panzana     | ma dai? |
| nessuno avrebbe | risposto dell'errore  | ma dai? |

# Code block

Questo è un blocco di codice originale copiato dal sito dell'INPS

```javascript
function CambiaLingua(slingua) {
    if (window.location.href.indexOf('?') !== -1) {
        var pippo = window.location.href.replace('lang=EN', '').replace('lang=IT', '').replace('lang=ES', '').replace('lang=FR', '').replace('lang=DE', '');
        var pippo = pippo.replace('lang=en', '').replace('lang=it', '').replace('lang=es', '').replace('lang=fr', '').replace('lang=de', '') + '&lang=' + slingua;
        pippo = pippo.replace('&&', '&').replace('default.aspx?&', 'default.aspx?');
        window.location = pippo;
    } else {
        //C15
        window.location = window.location.href + '?lang=' + slingua;
    }

}

```

---

<div class="py-8">
  <p>Mi pare che venga renderizzato tutto bene</p>
</div>
