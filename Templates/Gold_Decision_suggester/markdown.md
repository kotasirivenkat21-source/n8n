# Gold & Silver Market Intelligence & Prediction

A personal project built with n8n to explore how AI agents can help research and analyse the gold and silver markets.

## Why I started this project

I was thinking about how gold and silver prices change and how many things influence them. Sometimes it's inflation, sometimes interest rates, the US dollar, geopolitical situations, or even industrial demand.

To understand the market properly, we need to look at several things together. Searching for all this information manually takes a lot of time.

That's where I got the idea of building this project.

Instead of checking different sources one by one, I wanted to create a workflow that collects market information, organises it, and passes it to different AI agents for analysis.

I decided to use n8n because I wanted to understand how different services and AI agents could work together in a single automated process.

## What I have built so far

The workflow is divided into different stages.

### Market research

I added 11 Brave Search nodes to collect information about:

- Indian gold prices
- Indian silver prices
- Global gold and silver news
- Federal Reserve interest rates
- US dollar movements
- Inflation
- Central-bank gold purchases
- Geopolitical risks
- Silver industrial demand
- Investment demand

The idea is to collect information from different areas that might influence gold and silver prices instead of depending on just one source.

### Processing the research

After collecting the search results, the workflow processes them and prepares a research brief.

It collects available titles, links, dates, and descriptions and organises the information so the AI agents can use it.

### AI agents

I currently have three agents working in the analysis stage:

**Gold Bull Analyst**

Looks at positive market factors that could support gold prices.

**Gold Bear Analyst**

Looks at negative factors that could put pressure on gold prices.

**Gold Judge**

Reviews both perspectives and prepares a combined market assessment.

The planned output includes 1-year, 3-year, and 5-year outlooks for gold and silver, along with probabilities, confidence levels, and BUY / WAIT / AVOID recommendations.

### Historical data

I also created two n8n Data Tables:

- `historical_market_events`
- `historical_metal_prices`

The purpose is to give the agents some historical context instead of making them depend entirely on current news.

The market-events table currently has 11 records, but they still need independent verification. The historical metal-prices table is connected but does not yet contain the complete dataset.

### Final report

After the analysis, the workflow validates important prediction fields and prepares a final market report.

I also added validation to check probability totals and missing prediction horizons.

---

## What works right now?

- The overall n8n workflow has been designed.
- All 11 Brave Search nodes have been created and configured.
- Search-result processing and research brief generation are implemented.
- Gold Bull and Gold Bear agents are implemented.
- Gold Judge is implemented.
- Historical data tables are connected.
- Prediction validation and final report generation are implemented.
- A test execution completed without node errors.

One thing worth mentioning: the successful test included simulated search results. I still need to verify the complete research process using actual live search results.

## What is still missing?

I don't want to present this as a finished prediction system because there are still some important things to complete.

1. The historical gold and silver price dataset is not ready.
2. The existing historical market events need verification.
3. Separate Silver Bull and Silver Bear agents still need to be added.
4. Automatic extraction of accurate Indian gold and silver prices needs improvement.
5. All Brave Search nodes need proper live testing.
6. Search results need better verification for relevance, dates, and source reliability.
7. Prediction accuracy needs to be evaluated using reliable historical data.

## The biggest challenge: Historical data

This part took more time than I initially expected.

I wanted to collect approximately 20 years of monthly Indian gold and silver prices and connect them with the actual news events that influenced the market.

I tried finding this information online, but it was not as straightforward as I expected. A lot of historical information is spread across different reports and PDFs. Finding the correct figures, checking their accuracy, and matching them with historical events is a time-consuming process.

I do have some historical data, but I wasn't confident enough about its accuracy to use it for analysis.

So I decided not to fill the database with information that might be incorrect.

Instead, I focused on designing the complete workflow first. The process is built, but the historical-data part still needs proper research and verification.

## What I want to improve next

My next steps are:

- Get reliable monthly historical prices for both metals.
- Complete the historical event database.
- Test all 11 Brave Search nodes with live results.
- Improve automatic price extraction.
- Add Silver Bull and Silver Bear agents.
- Improve how the AI agents share and evaluate information.
- Test predictions against actual market movements.
- Improve the final report with better historical comparisons.

## Technologies used

- n8n – Workflow automation
- Brave Search – Market information collection
- AI Agents – Market analysis
- n8n Data Tables – Historical data storage
- JSON – Workflow configuration and export

## How to try the workflow

1. Download the workflow JSON from this repository.
2. Import it into your n8n workspace.
3. Configure your own AI connections and credentials.
4. Create the required Data Tables.
5. Add historical data when available.
6. Test the search nodes with live results.
7. Run the workflow and review the generated report.

Credentials and gateway access are not included in the exported workflow. You will need to configure your own connections.

## A final note

This is not a project I consider finished yet.

My first goal was to build the complete process and see how market research, historical information, and multiple AI agents could work together.

That part gave me a good starting point. Now I need to concentrate more on the quality of the information going into the system.

I would rather have less data that I can trust than a large dataset filled with information I cannot verify.

There is still a lot to improve, and that's part of the project.
 
---

**Disclaimer:** This project is for learning and market research. Its AI-generated analysis is not financial advice and should not be used as the only basis for investment decisions.
