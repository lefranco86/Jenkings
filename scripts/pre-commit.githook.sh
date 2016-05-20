#!/bin/zsh
# Les commandes sont exécuté dans le répertoire racine de Jenkings

export PATH=/usr/local/bin:$PATH

e=$(eslint .)
echo "${e}";
if [[ "$e" != *"0 problems"* ]]; then
  echo "ERROR: Check eslint hints."
  exit 1 # reject
fi

# Lancé les suite de tests
npm test;
