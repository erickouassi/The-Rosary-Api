# The Rosary API

Daily Rosary prayers, aligned with the Roman Catholic liturgical calendar — available in English and French.

## Overview

The Rosary API is a JavaScript‑based service that provides the Roman Catholic daily Rosary prayers for any date in the current year.  
It automatically selects the appropriate set of mysteries according to:

- **Weekday tradition** (Joyful, Sorrowful, Glorious, Luminous)
- **Liturgical season** (Advent, Christmas, Epiphany, Ordinary Time, Lent, Easter)

This makes it easy to integrate daily Rosary content into apps, websites, or devotional tools.

## Features

- 📅 **Daily prayers** based on the current date
- ⛪ **Liturgical season awareness** (Advent, Lent, Easter, etc.)
- 🌍 **Localization**: English (`en`) and French (`fr`)
- 🔗 **Simple REST API** endpoint
- 🕊️ **Structured JSON output** with mysteries, prayers, and seasonal notes

## Installation (Optional for Local Development)

```js
git clone https://github.com/erickouassi/The-Rosary-Api.git
cd The-Rosary-Api
npm install
npm start
```


## Endpoint & API Usage
Go to: [https://therosaryapi.cf/](https://therosaryapi.cf/)

## Contributing

Contributions are welcome!

- Fork the repository <br>
- Create a feature branch<br>
- Submit a pull request

## Quick Start

You can call the Rosary API from any JavaScript or Node.js application using `fetch`.

### Example with `fetch`

```js
// Fetch today's Rosary in English
fetch('https://the-rosary-api.vercel.app/v1/today')
  .then(res => res.json())
  .then(data => {
    if (data && data.length > 0) {
      const today = data[0]; // first item in the array
      console.log('Today date:', today.rosary_date);   // or today.currentDate for full text
      console.log('Season:', today.season);
      console.log('Mystery Set:', today.mystery);
    }
  })
  .catch(err => console.error('API fetch error:', err));
```
### Output Example
Today date: 2025-12-16<br>
Season: Advent<br>
Mystery Set: Sorrowful

## Prototype Reference

The Rosary API powers devotional tools like [https://dailyrosary.cf](https://dailyrosary.cf/), a prototype web app that demonstrates how the API can be used to:

- Fetch the daily Rosary prayers automatically
- Detect the liturgical season (Advent, Christmas, Lent, Easter, etc.)
- Display the correct set of mysteries for the day

This prototype can serve as inspiration for building your own apps, parish websites, or prayer group resources.









