#!/bin/bash
set -e

git config credential.helper "store --file=.git/credentials"
echo "https://${GH_TOKEN}:@github.com" > .git/credentials

if ! git remote | grep api > /dev/null; then
  git remote add api https://github.com/ayrbot/remotestories-api.git
fi

git subtree push --prefix api/ api master

if ! git remote | grep web > /dev/null; then
  git remote add web https://github.com/ayrbot/remotestories-web.git
fi

git subtree push --prefix web/ web master
