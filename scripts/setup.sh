#!/bin/bash
set -e

cd api/
bundle install
rake db:setup

cd -

cd web/
npm install
