#!/bin/bash
set -ev

cd api/
rake test

cd -

cd web/
CI=true npm test
