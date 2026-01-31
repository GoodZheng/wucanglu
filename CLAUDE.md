# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

物藏录 (wucanglu) is a uTools plugin for managing personal items and subscriptions. Built with vanilla JavaScript in a single HTML file, it uses a modular class-based architecture with local storage.

## Architecture

The codebase follows a layered class architecture:

```
App (Main Application)
├── Storage (Item Storage)
│   ├── items, categories, channels, settings
├── SubscriptionStorage (Subscription Storage)
│   ├── subscriptions, subscriptionCategories, reminderLog
├── ItemUI (Item Interface)
├── SubscriptionUI (Subscription Interface)
└── SubscriptionManager (Subscription Business Logic)
```

### Key Classes

- **App**: Main controller, handles routing between panels, chart rendering, stats updates
- **Storage**: Manages item data with localStorage/utools DB fallback
- **SubscriptionStorage**: Manages subscription data separately from items
- **SubscriptionUI**: Handles all subscription-related UI operations
- **SubscriptionManager**: Business logic for subscription calculations (billing cycles, expenses)

## Critical Conventions and Gotchas

### 1. Property Naming Consistency
**CRITICAL**: Class properties must match between constructor and methods.
- `SubscriptionUI` constructor saves parameter as `this.storage`
- Methods must use `this.storage`, NOT `this.subscriptionStorage`
- This was a recurring bug documented in `docs/issues.md`

### 2. cycleType Values
Subscription billing cycles must use these exact values (matching HTML options):
- `day` (NOT `daily`)
- `week` (NOT `weekly`)
- `month` (NOT `monthly`)
- `quarter` (NOT `quarterly`)
- `year` (NOT `yearly`)
- `lifetime`

MISMATCH between HTML (`month`/`quarter`/`year`) and analytics code (`monthly`/`quarterly`/`yearly`) caused subscription expenses to show as 0.

### 3. Storage Instance Separation
App class maintains TWO separate storage instances:
```javascript
this.storage = new Storage();              // For items
this.subscriptionStorage = new SubscriptionStorage();  // For subscriptions
```
Be careful which one to use in App methods:
- `updateStats()`: Must use `this.subscriptionStorage.getSubscriptions()`
- `renderItemsAnalytics()`: Uses `this.storage.getItems()`
- `renderSubscriptionAnalytics()`: Uses `this.subscriptionStorage.getSubscriptions()`

### 4. Panel Display Control
Navigation uses `data-active-tab` attribute on body:
```javascript
document.body.dataset.activeTab = 'items';  // or 'subscription', 'analytics', 'settings'
```
CSS handles button visibility based on this attribute. Do NOT use inline styles for show/hide.

### 5. showToast Method
UI classes (like `SubscriptionUI`) do NOT have `showToast`. They must call via App reference:
```javascript
// SubscriptionUI constructor
constructor(storage, manager, app) {
    this.app = app;  // Save App reference
}

// Use in methods
this.app.showToast('message', 'success');
```

### 6. Date Handling
- Use YYYY-MM-DD format for storage
- Avoid `toISOString()` - it converts to UTC causing date shifts
- Use local date methods: `new Date().toISOString().split('T')[0]`

### 7. Billing Cycle Calculations
When converting subscription costs to monthly/yearly:
- Day: ×30 (monthly), ×365 (yearly)
- Week: ×4.33 (monthly), ×52 (yearly)
- Month: ×1 (monthly), ×12 (yearly)
- Quarter: ÷3 (monthly), ×4 (yearly)
- Year: ÷12 (monthly), ×1 (yearly)
- Lifetime: 0 (excluded from recurring calculations)

## Known Issues

See `docs/issues.md` for detailed problem history. Key recurring issues:
1. Property naming mismatches in SubscriptionUI
2. Storage instance confusion in App class
3. cycleType value mismatches between HTML and JavaScript
4. Global search-replace operations affecting unintended code

## Development Workflow

This is a uTools plugin. Development:
1. Edit `index.html` directly (contains all HTML, CSS, JavaScript)
2. Reload in uTools development mode to test
3. No build process required
4. Git commit excludes `.claude/settings.local.json`
