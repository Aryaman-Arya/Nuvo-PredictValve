#!/bin/bash

# Script to import a .glb file into the PredictValve project

echo "🔧 PredictValve 3D Model Import Script"
echo "========================================"

# Check if a file path was provided
if [ $# -eq 0 ]; then
    echo "❌ Error: Please provide the path to your .glb file"
    echo "Usage: ./import-model.sh /path/to/your/heart-model.glb"
    echo ""
    echo "Example: ./import-model.sh ~/Downloads/heart-model.glb"
    exit 1
fi

SOURCE_FILE="$1"
TARGET_DIR="public/models"
TARGET_FILE="$TARGET_DIR/heart-model.glb"

# Check if source file exists
if [ ! -f "$SOURCE_FILE" ]; then
    echo "❌ Error: Source file '$SOURCE_FILE' not found"
    exit 1
fi

# Check if it's actually a .glb file
if [[ ! "$SOURCE_FILE" == *.glb ]]; then
    echo "⚠️  Warning: File doesn't have .glb extension"
    echo "Are you sure this is a GLB file? (y/n)"
    read -r response
    if [[ ! "$response" =~ ^[Yy]$ ]]; then
        echo "❌ Import cancelled"
        exit 1
    fi
fi

# Create target directory if it doesn't exist
mkdir -p "$TARGET_DIR"

# Copy the file
echo "📁 Copying $SOURCE_FILE to $TARGET_FILE..."
cp "$SOURCE_FILE" "$TARGET_FILE"

# Check if copy was successful
if [ $? -eq 0 ]; then
    echo "✅ Successfully imported model!"
    echo "📊 File size: $(du -h "$TARGET_FILE" | cut -f1)"
    echo ""
    echo "🔄 The website will automatically use your GLB model."
    echo "   If the model doesn't load, it will fallback to the custom heart model."
    echo ""
    echo "🌐 Your website is running at: http://localhost:5174"
else
    echo "❌ Error: Failed to copy file"
    exit 1
fi 