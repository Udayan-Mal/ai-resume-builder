#!/bin/bash

# Script to add rounded corners to images
# Usage: ./scripts/round-corners.sh [filename] [radius]

# Default values
FILENAME=${1:-"board-img.png"}
RADIUS=${2:-20}

echo "Adding rounded corners to: $FILENAME with radius: $RADIUS"

# Run the Node.js script
node scripts/add-rounded-corners.js "$FILENAME" "$RADIUS"

echo "Done! Check public/images/ for the rounded version." 