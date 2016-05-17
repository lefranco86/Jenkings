# !/bin/bash
# Les commandes sont exécuté dans le répertoire racine de Jenkings

# Init git pre-commit hook
ln -s -f ../../scripts/pre-commit.githook.sh .git/hooks/pre-commit;
chmod +x .git/hooks/pre-commit;

# Checkout to develop
git checkout develop;
