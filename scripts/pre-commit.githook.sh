#!/bin/zsh
# Les commandes sont exécuté dans le répertoire racine de Jenkings

path_result=$(echo $PATH | grep /usr/local/bin);
if [[ path_result != "" ]]; then
    export PATH=/usr/local/bin:$PATH
fi

eslint .;
if [[ $? != 0 ]]; then
  echo "ERROR: Check eslint hints."
  exit 1 # reject
fi

# Lancé les suite de tests
npm test;
