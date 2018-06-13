#!/bin/bash
set -xeo pipefail

if [ ! -z ${CIRCLE_TAG} ]; then
  npm --no-git-tag-version version $CIRCLE_TAG
else
  echo 'CIRCLE_TAG not set'
fi
