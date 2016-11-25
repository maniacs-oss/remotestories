#!/bin/bash
set -ev

cd api/
rubocop
rake test

cd -

cd web/
CI=true npm test
