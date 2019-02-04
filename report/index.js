if (window.location.search.indexOf('?lang=ocaml') === 0)
    document.write('<link rel="stylesheet" href="../ocaml.css" />');
else if (window.location.search.indexOf('?lang=agda') === 0)
    document.write('<link rel="stylesheet" href="../agda.css" />');
else if (window.location.search.indexOf('?lang=haskell') === 0)
    document.write('<link rel="stylesheet" href="../haskell.css" />');