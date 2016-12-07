#!/bin/bash
set -e

git config credential.helper "store --file=.git/credentials"
echo "https://${GH_TOKEN}:@github.com" > .git/credentials

if ! git remote | grep api > /dev/null; then
  git remote add api https://github.com/ayrbot/remotestories-api.git
fi

git push api `git subtree split --prefix api master`:master --force

if ! git remote | grep web > /dev/null; then
  git remote add web https://github.com/ayrbot/remotestories-web.git
fi

git push web `git subtree split --prefix web master`:master --force
