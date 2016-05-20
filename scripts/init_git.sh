# !/bin/bash
# Les commandes sont exécuté dans le répertoire racine de Jenkings

# Init git pre-commit hook
echo "Configuration des hooks";
ln -s -f ../../scripts/pre-commit.githook.sh .git/hooks/pre-commit;
ln -s -f ../../scripts/commit-msg.githook.sh .git/hooks/commit-msg;

chmod +x .git/hooks/pre-commit;
chmod +x .git/hooks/commit-msg;
