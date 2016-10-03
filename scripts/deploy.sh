#!/bin/bash
set -e

# if ! git remote | grep api > /dev/null; then
#   git remote add api "https://:$HEROKU_AUTH_TOKEN@git.heroku.com/remotestories-api.git"
# fi
#
# git subtree push --prefix api/ api master

if ! git remote | grep web > /dev/null; then
  git remote add web "https://:$HEROKU_AUTH_TOKEN@git.heroku.com/remotestories.git"
fi

git subtree push --prefix web/ web master
