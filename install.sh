#!/usr/bin/env bash

ROOT_UID=0
DEST_DIR=

# Destination directory
if [ "$UID" -eq "$ROOT_UID" ]; then
  DEST_DIR="/usr/share/icons"
else
  DEST_DIR="$HOME/.local/share/icons"
  mkdir -p $DEST_DIR
fi

if [ -d "$DEST_DIR/Vimix-forest-cursors" ]; then
  rm -rf "$DEST_DIR/Vimix-forest-cursors"
fi

cp -r dist/ $DEST_DIR/Vimix-forest-cursors

echo "Finished..."

