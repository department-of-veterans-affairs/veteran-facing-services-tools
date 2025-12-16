#!/bin/bash
set -e

echo "Running postinstall for trusted packages..."

# Run lerna bootstrap from root to set up monorepo
echo "Running lerna bootstrap..."
cd ../.. && yarn bootstrap && cd packages/documentation

# Run postinstall for gatsby (static site generator)
if [ -d "node_modules/gatsby" ]; then
  echo "Running gatsby postinstall..."
  cd node_modules/gatsby && node scripts/postinstall.js && cd ../..
fi

# Run postinstall for sharp (native image processing library used by gatsby)
if [ -d "node_modules/sharp" ]; then
  echo "Building sharp native bindings..."
  cd node_modules/sharp && npm run install --ignore-scripts=false && cd ../..
fi

echo "Postinstall complete!"
