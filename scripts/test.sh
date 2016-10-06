#!/bin/bash
set -ev

cd api/
# bin/rake test

cd -

cd web/
CI=true npm test
