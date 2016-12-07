#!/bin/bash
set -e

cd api/
bundle install
rake db:setup

cd -

cd web/

curl -o- -L https://yarnpkg.com/install.sh | bash
export PATH=$HOME/.yarn/bin:$PATH
yarn install
