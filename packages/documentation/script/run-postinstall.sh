#!/bin/bash
set -e

echo "Running postinstall for trusted packages..."

# Run postinstall for gatsby (static site generator)
echo "Building gatsby..."
cd node_modules/gatsby && npm run install --ignore-scripts=false && cd ../..

# Run postinstall for sharp (native image processing library used by gatsby)
if [ -d "node_modules/sharp" ]; then
  echo "Building sharp native bindings..."
  cd node_modules/sharp && npm run install --ignore-scripts=false && cd ../..
fi

echo "Postinstall complete!"
