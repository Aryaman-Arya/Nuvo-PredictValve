#!/bin/bash

# Script to add a .glb file to the PredictValve project

echo "🔧 PredictValve GLB Model Setup"
echo "================================"

# Check if a file path was provided
if [ $# -eq 0 ]; then
    echo "❌ Error: Please provide the path to your .glb file"
    echo "Usage: ./add-glb-model.sh /path/to/your/model.glb"
    echo ""
    echo "Example: ./add-glb-model.sh ~/Downloads/heart-model.glb"
    echo ""
    echo "After running this script, your GLB model will be available at:"
    echo "http://localhost:5173/"
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
        echo "❌ Setup cancelled"
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
    echo "✅ Successfully added GLB model!"
    echo "📊 File size: $(du -h "$TARGET_FILE" | cut -f1)"
    echo ""
    echo "🔄 The website will automatically use your GLB model."
    echo "   If the model doesn't load, it will fallback to the custom heart model."
    echo ""
    echo "🌐 Your website is running at: http://localhost:5173"
    echo ""
    echo "💡 To use a different GLB file:"
    echo "   1. Replace the file in public/models/heart-model.glb"
    echo "   2. Refresh your browser"
    echo "   3. The new model will load automatically"
else
    echo "❌ Error: Failed to copy file"
    exit 1
fi 