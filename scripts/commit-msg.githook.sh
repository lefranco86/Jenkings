#!/bin/bash
files=$(git diff --cached --name-only | grep '\.js$')

# Prevent ESLint help message if no files matched
if [[ $files = "" ]] ; then
  exit 0
fi

echo $files | xargs eslint

rc=$?
if [[ $rc != 0 ]] ; then
  echo "ESLint check failed, commit denied"
  exit $rc
fi
