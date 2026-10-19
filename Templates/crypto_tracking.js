{
  "nodes": [
    {
      "parameters": {
        "rule": {
          "interval": [
            {
              "field": "hours"
            }
          ]
        }
      },
      "type": "n8n-nodes-base.scheduleTrigger",
      "typeVersion": 1.4,
      "position": [
        -2208,
        -832
      ],
      "id": "cf461757-613a-4587-a07c-58f351765a46",
      "name": "Schedule Trigger"
    },
    {
      "parameters": {
        "promptType": "define",
        "text": "100-coin candidate list\n\nMajor / long-history\n\nBitcoin (BTC)\nEthereum (ETH)\nXRP (XRP)\nBNB (BNB)\nCardano (ADA)\nDogecoin (DOGE)\nSolana (SOL)\nTRON (TRX)\nAvalanche (AVAX)\nChainlink (LINK)\nPolkadot (DOT)\nLitecoin (LTC)\nBitcoin Cash (BCH)\nStellar (XLM)\nEthereum Classic (ETC)\nMonero (XMR)\nCosmos (ATOM)\nUniswap (UNI)\nAave (AAVE)\nNEAR Protocol (NEAR)\n\nHigh-volatility / major market-cycle coins\n21. Shiba Inu (SHIB)\n22. Pepe (PEPE)\n23. Sui (SUI)\n24. Toncoin (TON)\n25. Aptos (APT)\n26. Internet Computer (ICP)\n27. Filecoin (FIL)\n28. Algorand (ALGO)\n29. VeChain (VET)\n30. Tezos (XTZ)\n31. EOS (EOS)\n32. IOTA (IOTA)\n33. Quant (QNT)\n34. Hedera (HBAR)\n35. The Graph (GRT)\n36. Arbitrum (ARB)\n37. Optimism (OP)\n38. Injective (INJ)\n39. Render (RENDER)\n40. THORChain (RUNE)\n\nDeFi / infrastructure\n41. Maker (MKR)\n42. Lido DAO (LDO)\n43. Curve DAO (CRV)\n44. PancakeSwap (CAKE)\n45. Compound (COMP)\n46. Synthetix (SNX)\n47. Cosmos Hub (ATOM)\n48. Immutable (IMX)\n49. The Sandbox (SAND)\n50. Decentraland (MANA)\n51. Axie Infinity (AXS)\n52. Gala (GALA)\n53. ApeCoin (APE)\n54. Chiliz (CHZ)\n55. Enjin Coin (ENJ)\n56. Basic Attention Token (BAT)\n57. 1inch (1INCH)\n58. SushiSwap (SUSHI)\n59. Fantom / Sonic (FTM/S)\n60. Flow (FLOW)\n\nPayment / established altcoins\n61. Dash (DASH)\n62. Zcash (ZEC)\n63. Zilliqa (ZIL)\n64. Basic Attention Token (BAT)\n65. Waves (WAVES)\n66. NEO (NEO)\n67. Ontology (ONT)\n68. ICON (ICX)\n69. Ravencoin (RVN)\n70. Decred (DCR)\n\nNewer major-cycle coins\n71. Sei (SEI)\n72. Celestia (TIA)\n73. Starknet (STRK)\n74. Mantle (MNT)\n75. Kaspa (KAS)\n76. Ondo (ONDO)\n77. Ethena (ENA)\n78. Jupiter (JUP)\n79. Wormhole (W)\n80. Worldcoin / World (WLD)\n\nMeme / sentiment-driven\n81. Bonk (BONK)\n82. Floki (FLOKI)\n83. Brett (BRETT)\n84. dogwifhat (WIF)\n85. Mog Coin (MOG)\n86. Brett (BRETT)\n87. Popcat (POPCAT)\n88. Book of Meme (BOME)\n89. Turbo (TURBO)\n90. Dogelon Mars (ELON)\n\nAdditional historically prominent / high-volatility assets\n91. Terra Classic (LUNC)\n92. Terra (LUNA)\n93. EOS (EOS)\n94. NEM (XEM)\n95. Siacoin (SC)\n96. Storj (STORJ)\n97. 0x (ZRX)\n98. Loopring (LRC)\n99. OMG Network (OMG)\n100. SushiSwap (SUSHI)",
        "options": {
          "systemMessage": "pick this coins from the tool http request node connected this agent and do maths calculations and give me each coin price return data in json format that output even understand non developer also\n"
        }
      },
      "type": "@n8n/n8n-nodes-langchain.agent",
      "typeVersion": 3.1,
      "position": [
        -2000,
        -832
      ],
      "id": "6133886c-c142-4420-8c32-13f4c8d11d56",
      "name": "AI Agent"
    },
    {
      "parameters": {
        "model": {
          "__rl": true,
          "mode": "list",
          "value": "gpt-5-mini",
          "cachedResultName": "gpt-5-mini",
          "cachedResultUrl": ""
        },
        "builtInTools": {},
        "options": {}
      },
      "type": "@n8n/n8n-nodes-langchain.lmChatOpenAi",
      "typeVersion": 1.3,
      "position": [
        -2000,
        -608
      ],
      "id": "c617f019-678c-4851-b12c-6d0d0d6031e0",
      "name": "OpenAI Chat Model",
      "credentials": {
        "openAiApi": {
          "id": "LZWDTrrlyuPCs1Ob",
          "name": "OpenAI account"
        }
      }
    },
    {
      "parameters": {
        "url": "https://data-api.binance.vision/api/v3/ticker/price",
        "options": {}
      },
      "type": "n8n-nodes-base.httpRequestTool",
      "typeVersion": 4.5,
      "position": [
        -1856,
        -544
      ],
      "id": "22964c1b-1d63-4545-af66-b411d1115be3",
      "name": "HTTP Request"
    },
    {
      "parameters": {
        "fieldToSplitOut": "output",
        "options": {}
      },
      "type": "n8n-nodes-base.splitOut",
      "typeVersion": 1,
      "position": [
        -1616,
        -848
      ],
      "id": "c725dfb3-7a4e-42b4-8c1e-ec09f67bc1d6",
      "name": "Split Out"
    },
    {
      "parameters": {
        "mode": "raw",
        "jsonOutput": "{\"coins\": [{\"coin\": \"bitcoin\", \"price\": 115234.5}, {\"coin\": \"ethereum\", \"price\": 4187.2}, {\"coin\": \"ripple\", \"price\": 2.84}, {\"coin\": \"binancecoin\", \"price\": 921.35}, {\"coin\": \"cardano\", \"price\": 0.71}, {\"coin\": \"dogecoin\", \"price\": 0.215}, {\"coin\": \"solana\", \"price\": 218.6}, {\"coin\": \"tron\", \"price\": 0.268}, {\"coin\": \"avalanche-2\", \"price\": 34.75}, {\"coin\": \"chainlink\", \"price\": 21.4}, {\"coin\": \"polkadot\", \"price\": 6.35}, {\"coin\": \"litecoin\", \"price\": 108.9}, {\"coin\": \"bitcoin-cash\", \"price\": 512.0}, {\"coin\": \"stellar\", \"price\": 0.335}, {\"coin\": \"ethereum-classic\", \"price\": 24.1}, {\"coin\": \"monero\", \"price\": 168.5}, {\"coin\": \"cosmos\", \"price\": 6.8}, {\"coin\": \"uniswap\", \"price\": 9.45}, {\"coin\": \"aave\", \"price\": 178.3}, {\"coin\": \"near\", \"price\": 4.55}, {\"coin\": \"shiba-inu\", \"price\": 1.62e-05}, {\"coin\": \"pepe\", \"price\": 9.1e-06}, {\"coin\": \"sui\", \"price\": 3.42}, {\"coin\": \"the-open-network\", \"price\": 3.15}, {\"coin\": \"aptos\", \"price\": 8.2}, {\"coin\": \"internet-computer\", \"price\": 9.85}, {\"coin\": \"filecoin\", \"price\": 4.6}, {\"coin\": \"algorand\", \"price\": 0.215}, {\"coin\": \"vechain\", \"price\": 0.0345}, {\"coin\": \"tezos\", \"price\": 0.82}, {\"coin\": \"eos\", \"price\": 0.65}, {\"coin\": \"iota\", \"price\": 0.185}, {\"coin\": \"quant-network\", \"price\": 105.4}, {\"coin\": \"hedera-hashgraph\", \"price\": 0.205}, {\"coin\": \"the-graph\", \"price\": 0.135}, {\"coin\": \"arbitrum\", \"price\": 0.72}, {\"coin\": \"optimism\", \"price\": 1.62}, {\"coin\": \"injective-protocol\", \"price\": 14.3}, {\"coin\": \"render-token\", \"price\": 5.85}, {\"coin\": \"thorchain\", \"price\": 1.95}, {\"coin\": \"maker\", \"price\": 1620.0}, {\"coin\": \"lido-dao\", \"price\": 1.28}, {\"coin\": \"curve-dao-token\", \"price\": 0.68}, {\"coin\": \"pancakeswap-token\", \"price\": 2.35}, {\"coin\": \"compound-governance-token\", \"price\": 48.7}, {\"coin\": \"havven\", \"price\": 1.35}, {\"coin\": \"immutable-x\", \"price\": 0.95}, {\"coin\": \"the-sandbox\", \"price\": 0.315}, {\"coin\": \"decentraland\", \"price\": 0.335}, {\"coin\": \"axie-infinity\", \"price\": 5.6}, {\"coin\": \"gala\", \"price\": 0.0225}, {\"coin\": \"apecoin\", \"price\": 0.98}, {\"coin\": \"chiliz\", \"price\": 0.058}, {\"coin\": \"enjincoin\", \"price\": 0.135}, {\"coin\": \"basic-attention-token\", \"price\": 0.185}, {\"coin\": \"1inch\", \"price\": 0.235}, {\"coin\": \"sushi\", \"price\": 0.68}, {\"coin\": \"sonic-3\", \"price\": 0.485}, {\"coin\": \"flow\", \"price\": 0.42}, {\"coin\": \"dash\", \"price\": 24.6}, {\"coin\": \"zcash\", \"price\": 38.9}, {\"coin\": \"zilliqa\", \"price\": 0.0125}, {\"coin\": \"waves\", \"price\": 0.98}, {\"coin\": \"neo\", \"price\": 8.75}, {\"coin\": \"ontology\", \"price\": 0.155}, {\"coin\": \"icon\", \"price\": 0.135}, {\"coin\": \"ravencoin\", \"price\": 0.0175}, {\"coin\": \"decred\", \"price\": 14.2}, {\"coin\": \"sei-network\", \"price\": 0.245}, {\"coin\": \"celestia\", \"price\": 3.65}, {\"coin\": \"starknet\", \"price\": 0.185}, {\"coin\": \"mantle\", \"price\": 0.985}, {\"coin\": \"kaspa\", \"price\": 0.0895}, {\"coin\": \"ondo-finance\", \"price\": 0.795}, {\"coin\": \"ethena\", \"price\": 0.415}, {\"coin\": \"jupiter-exchange-solana\", \"price\": 0.485}, {\"coin\": \"wormhole\", \"price\": 0.115}, {\"coin\": \"worldcoin-wld\", \"price\": 1.05}, {\"coin\": \"bonk\", \"price\": 1.75e-05}, {\"coin\": \"floki\", \"price\": 0.000112}, {\"coin\": \"based-brett\", \"price\": 0.062}, {\"coin\": \"dogwifcoin\", \"price\": 0.72}, {\"coin\": \"mog-coin\", \"price\": 1.45e-06}, {\"coin\": \"popcat\", \"price\": 0.285}, {\"coin\": \"book-of-meme\", \"price\": 0.0045}, {\"coin\": \"turbo\", \"price\": 0.0042}, {\"coin\": \"dogelon-mars\", \"price\": 2.1e-07}, {\"coin\": \"terra-luna\", \"price\": 8.75e-05}, {\"coin\": \"terra-luna-2\", \"price\": 0.235}, {\"coin\": \"nem\", \"price\": 0.0245}, {\"coin\": \"siacoin\", \"price\": 0.0068}, {\"coin\": \"storj\", \"price\": 0.315}, {\"coin\": \"0x\", \"price\": 0.245}, {\"coin\": \"loopring\", \"price\": 0.115}, {\"coin\": \"omisego\", \"price\": 0.485}, {\"coin\": \"polygon-ecosystem-token\", \"price\": 0.385}, {\"coin\": \"crypto-com-chain\", \"price\": 0.145}, {\"coin\": \"okb\", \"price\": 48.6}, {\"coin\": \"leo-token\", \"price\": 8.95}, {\"coin\": \"fetch-ai\", \"price\": 0.685}]}",
        "includeOtherFields": true,
        "include": "selected",
        "options": {}
      },
      "type": "n8n-nodes-base.set",
      "typeVersion": 3.5,
      "position": [
        -1472,
        -848
      ],
      "id": "716a9676-5deb-47df-bf3e-83cae2cb5263",
      "name": "Edit Fields1"
    },
    {
      "parameters": {
        "operation": "append",
        "documentId": {
          "__rl": true,
          "value": "1eUCCx-mM2VGXEG0M021s1OTd7dACgCyKI5L54uSDU8Q",
          "mode": "list",
          "cachedResultName": "Crypto ",
          "cachedResultUrl": "https://docs.google.com/spreadsheets/d/1eUCCx-mM2VGXEG0M021s1OTd7dACgCyKI5L54uSDU8Q/edit?usp=drivesdk"
        },
        "sheetName": {
          "__rl": true,
          "value": "gid=0",
          "mode": "list",
          "cachedResultName": "crypto",
          "cachedResultUrl": "https://docs.google.com/spreadsheets/d/1eUCCx-mM2VGXEG0M021s1OTd7dACgCyKI5L54uSDU8Q/edit#gid=0"
        },
        "columns": {
          "mappingMode": "autoMapInputData",
          "value": {},
          "matchingColumns": [
            "coins"
          ],
          "schema": [
            {
              "id": "coins",
              "displayName": "coins",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": false
            }
          ],
          "attemptToConvertTypes": false,
          "convertFieldsToString": false
        },
        "options": {}
      },
      "type": "n8n-nodes-base.googleSheets",
      "typeVersion": 4.7,
      "position": [
        -1312,
        -848
      ],
      "id": "8d1f193a-9087-4920-9a83-1d0220312893",
      "name": "Append row in sheet1",
      "credentials": {
        "googleSheetsOAuth2Api": {
          "id": "gwWPq6tPmk6y5Wbk",
          "name": "Google Sheets account"
        }
      }
    },
    {
      "parameters": {
        "documentId": {
          "__rl": true,
          "value": "1eUCCx-mM2VGXEG0M021s1OTd7dACgCyKI5L54uSDU8Q",
          "mode": "list",
          "cachedResultName": "Crypto ",
          "cachedResultUrl": "https://docs.google.com/spreadsheets/d/1eUCCx-mM2VGXEG0M021s1OTd7dACgCyKI5L54uSDU8Q/edit?usp=drivesdk"
        },
        "sheetName": {
          "__rl": true,
          "value": "gid=0",
          "mode": "list",
          "cachedResultName": "crypto",
          "cachedResultUrl": "https://docs.google.com/spreadsheets/d/1eUCCx-mM2VGXEG0M021s1OTd7dACgCyKI5L54uSDU8Q/edit#gid=0"
        },
        "options": {}
      },
      "type": "n8n-nodes-base.googleSheets",
      "typeVersion": 4.7,
      "position": [
        -1136,
        -848
      ],
      "id": "26a6f1f2-751a-4ab0-9e9c-5d28c8b82837",
      "name": "Get row(s) in sheet",
      "credentials": {
        "googleSheetsOAuth2Api": {
          "id": "gwWPq6tPmk6y5Wbk",
          "name": "Google Sheets account"
        }
      }
    },
    {
      "parameters": {},
      "type": "n8n-nodes-base.limit",
      "typeVersion": 1,
      "position": [
        -912,
        -848
      ],
      "id": "aab81e57-439b-4b86-8627-d1b9442f438d",
      "name": "Limit"
    },
    {
      "parameters": {
        "promptType": "define",
        "text": "={{ $json.output }} and {{ $json.output }}",
        "options": {
          "systemMessage": "now compare the coins and price and give me the coins which has more difference i want top 20 coins\nfrom both inputs i gaven"
        }
      },
      "type": "@n8n/n8n-nodes-langchain.agent",
      "typeVersion": 3.1,
      "position": [
        -736,
        -528
      ],
      "id": "dab7a0c7-d629-4b73-8e69-6a1c70065aa6",
      "name": "AI Agent4"
    },
    {
      "parameters": {
        "model": {
          "__rl": true,
          "mode": "list",
          "value": "gpt-5-mini"
        },
        "builtInTools": {},
        "options": {}
      },
      "type": "@n8n/n8n-nodes-langchain.lmChatOpenAi",
      "typeVersion": 1.3,
      "position": [
        -736,
        -352
      ],
      "id": "07b3121e-62d5-4159-87f7-f963a89b1f50",
      "name": "OpenAI Chat Model2",
      "credentials": {
        "openAiApi": {
          "id": "LZWDTrrlyuPCs1Ob",
          "name": "OpenAI account"
        }
      }
    },
    {
      "parameters": {
        "sendTo": "copyninga06@gmail.com",
        "subject": "Crypto Alert",
        "emailType": "text",
        "message": "={{ $json.output }}",
        "options": {}
      },
      "type": "n8n-nodes-base.gmail",
      "typeVersion": 2.2,
      "position": [
        -368,
        -528
      ],
      "id": "b69b750b-7873-4a2f-b5e1-34d15f3fe503",
      "name": "Send a message",
      "webhookId": "9d2ba60b-d88d-493f-ab96-681fe775559a",
      "credentials": {
        "gmailOAuth2": {
          "id": "hySBAq4n51jv7elz",
          "name": "Gmail account"
        }
      }
    },
    {
      "parameters": {
        "promptType": "define",
        "text": "={{ $json.coins }}",
        "options": {
          "systemMessage": "u just not use just give input as output as it is nothing to do"
        }
      },
      "type": "@n8n/n8n-nodes-langchain.agent",
      "typeVersion": 3.1,
      "position": [
        -576,
        -864
      ],
      "id": "089dd16e-3b04-442d-871d-f212dbd51474",
      "name": "AI Agent1"
    },
    {
      "parameters": {
        "model": {
          "__rl": true,
          "mode": "list",
          "value": "claude-sonnet-5",
          "cachedResultName": "Claude Sonnet 5"
        },
        "options": {}
      },
      "type": "@n8n/n8n-nodes-langchain.lmChatAnthropic",
      "typeVersion": 1.6,
      "position": [
        -576,
        -704
      ],
      "id": "0aac2e20-30ef-40f0-9705-788c6a229fd6",
      "name": "Anthropic Chat Model",
      "credentials": {}
    }
  ],
  "connections": {
    "Schedule Trigger": {
      "main": [
        [
          {
            "node": "AI Agent",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "AI Agent": {
      "main": [
        [
          {
            "node": "Split Out",
            "type": "main",
            "index": 0
          },
          {
            "node": "AI Agent4",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "OpenAI Chat Model": {
      "ai_languageModel": [
        [
          {
            "node": "AI Agent",
            "type": "ai_languageModel",
            "index": 0
          }
        ]
      ]
    },
    "HTTP Request": {
      "ai_tool": [
        [
          {
            "node": "AI Agent",
            "type": "ai_tool",
            "index": 0
          }
        ]
      ]
    },
    "Split Out": {
      "main": [
        [
          {
            "node": "Edit Fields1",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Edit Fields1": {
      "main": [
        [
          {
            "node": "Append row in sheet1",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Append row in sheet1": {
      "main": [
        [
          {
            "node": "Get row(s) in sheet",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Get row(s) in sheet": {
      "main": [
        [
          {
            "node": "Limit",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Limit": {
      "main": [
        [
          {
            "node": "AI Agent1",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "AI Agent4": {
      "main": [
        [
          {
            "node": "Send a message",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "OpenAI Chat Model2": {
      "ai_languageModel": [
        [
          {
            "node": "AI Agent4",
            "type": "ai_languageModel",
            "index": 0
          }
        ]
      ]
    },
    "AI Agent1": {
      "main": [
        [
          {
            "node": "AI Agent4",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Anthropic Chat Model": {
      "ai_languageModel": [
        [
          {
            "node": "AI Agent1",
            "type": "ai_languageModel",
            "index": 0
          }
        ]
      ]
    }
  },
  "pinData": {},
  "meta": {
    "templateCredsSetupCompleted": true,
    "instanceId": "1072b012a139594fb9e9ef8fe5abfa65f3317676e374af2bfc7c9549c8a2b27c"
  }
}
