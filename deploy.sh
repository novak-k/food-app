#!/bin/zsh

rm -rf /Applications/MAMP/htdocs/food
mkdir /Applications/MAMP/htdocs/food
cp -R "$(pwd)"/dist /Applications/MAMP/htdocs/food/
cp -R "$(pwd)"/css /Applications/MAMP/htdocs/food/
cp -R "$(pwd)"/index.html /Applications/MAMP/htdocs/food/
cp -R "$(pwd)"/img /Applications/MAMP/htdocs/food/
cp -R "$(pwd)"/icons /Applications/MAMP/htdocs/food/

