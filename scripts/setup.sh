#!/bin/bash
set -e

cd api/
bundle install

cd -

cd web/
npm install
