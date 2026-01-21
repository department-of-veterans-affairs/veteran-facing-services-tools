#!/bin/bash
set -e

echo "Running postinstall for trusted packages..."

# Bootstrap monorepo packages without running scripts (avoid infinite loop)
echo "Bootstrapping monorepo packages..."
npx lerna bootstrap --ignore-scripts

# Check where gatsby is installed
echo "Checking for gatsby installation..."
if [ -d "node_modules/gatsby" ]; then
  echo "✓ Found gatsby in root node_modules"
  ls -la node_modules/gatsby/cli.js || echo "✗ gatsby CLI not found in expected location"
else
  echo "✗ gatsby NOT found in root node_modules"
fi

if [ -d "packages/documentation/node_modules/gatsby" ]; then
  echo "✓ Found gatsby in packages/documentation/node_modules"
else
  echo "✗ gatsby NOT found in packages/documentation/node_modules"
fi

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
