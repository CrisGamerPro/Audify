# MP4 to MP3 Converter

## 1. Project Overview
- **Name**: MP4 to MP3 Converter
- **Type**: Single-page web application
- **Core functionality**: Convert MP4 video files to MP3 audio format entirely in the browser using FFmpeg.wasm
- **Target users**: Content creators, musicians, anyone needing to extract audio from video files

## 2. UI/UX Specification

### Layout Structure
- **Container**: Centered card layout, max-width 640px
- **Sections**: Header, Drop zone, File list, Progress, Download buttons

### Visual Design
- **Color Palette**:
  - Background: `#0a0a0b`
  - Card background: `#131316`
  - Primary accent: `#e84545`
  - Secondary: `#2a2a2e`
  - Text primary: `#f5f5f5`
  - Text secondary: `#6b6b70`
  - Success: `#22c55e`
  - Border: `#2a2a2e`
- **Typography**: "DM Sans", 700 for title
- **Spacing**: 48px card padding, 32px section gaps

### Components
- Drop zone with dashed border
- File items with status
- Convert button
- Download buttons
- Progress bar

## 3. Functionality
- Drag/drop or click to select MP4 files
- Convert using FFmpeg.wasm
- Download MP3 files
- Download all as ZIP

## 4. Acceptance Criteria
- Dark modern theme
- MP4 file input via drag/drop and click
- FFmpeg.wasm conversion
- MP3 download capability