---
title: Getting Started
layout: ../../../layouts/DocsLayout.astro
---

# Getting Started

Learn how to get started with our amazing framework.

## Installation

To install the framework, run the following command:

```bash
npm install @amazing/framework
```

## Basic Usage

Here's a simple example of how to use the framework:

```javascript
import { createApp } from '@amazing/framework';

const app = createApp({
  // your configuration here
});
```

### Configuration Options

The framework supports various configuration options:

- `debug`: Enable debug mode
- `theme`: Custom theme settings
- `plugins`: Array of plugins to use

## Advanced Features

### Custom Components

You can create custom components like this:

```javascript
const CustomComponent = {
  name: 'CustomComponent',
  setup() {
    // component logic here
  }
};
```

### State Management

The framework includes a powerful state management system.