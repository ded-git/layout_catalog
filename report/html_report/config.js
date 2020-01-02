report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/Entire_document_1024px.png",
        "test": "../bitmaps_test/20200102-163600/Entire_document_1024px.png",
        "selector": "document",
        "fileName": "Entire_document_1024px.png",
        "label": "Entire document",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -50
          },
          "misMatchPercentage": "12.00",
          "analysisTime": 217
        },
        "diffImage": "../bitmaps_test/20200102-163600/failed_diff_Entire_document_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Entire_document_1200px.png",
        "test": "../bitmaps_test/20200102-163600/Entire_document_1200px.png",
        "selector": "document",
        "fileName": "Entire_document_1200px.png",
        "label": "Entire document",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -50
          },
          "misMatchPercentage": "10.24",
          "analysisTime": 225
        },
        "diffImage": "../bitmaps_test/20200102-163600/failed_diff_Entire_document_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Header_tag_1024px.png",
        "test": "../bitmaps_test/20200102-163600/Header_tag_1024px.png",
        "selector": "header",
        "fileName": "Header_tag_1024px.png",
        "label": "Header tag",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.82",
          "analysisTime": 445
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Header_tag_1200px.png",
        "test": "../bitmaps_test/20200102-163600/Header_tag_1200px.png",
        "selector": "header",
        "fileName": "Header_tag_1200px.png",
        "label": "Header tag",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.70",
          "analysisTime": 695
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Nav_tag_1024px.png",
        "test": "../bitmaps_test/20200102-163600/Nav_tag_1024px.png",
        "selector": "nav",
        "fileName": "Nav_tag_1024px.png",
        "label": "Nav tag",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -2,
            "height": 0
          },
          "misMatchPercentage": "13.07",
          "analysisTime": 580
        },
        "diffImage": "../bitmaps_test/20200102-163600/failed_diff_Nav_tag_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Nav_tag_1200px.png",
        "test": "../bitmaps_test/20200102-163600/Nav_tag_1200px.png",
        "selector": "nav",
        "fileName": "Nav_tag_1200px.png",
        "label": "Nav tag",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -2,
            "height": 0
          },
          "misMatchPercentage": "13.07",
          "analysisTime": 183
        },
        "diffImage": "../bitmaps_test/20200102-163600/failed_diff_Nav_tag_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Link_with_data-qa_hover_1024px.png",
        "test": "../bitmaps_test/20200102-163600/Link_with_data-qa_hover_1024px.png",
        "selector": "[data-qa=\"nav-hover\"]",
        "fileName": "Link_with_data-qa_hover_1024px.png",
        "label": "Link with data-qa_hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Link_with_data-qa_hover_1200px.png",
        "test": "../bitmaps_test/20200102-163600/Link_with_data-qa_hover_1200px.png",
        "selector": "[data-qa=\"nav-hover\"]",
        "fileName": "Link_with_data-qa_hover_1200px.png",
        "label": "Link with data-qa_hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Link_with_class_is-active_1024px.png",
        "test": "../bitmaps_test/20200102-163600/Link_with_class_is-active_1024px.png",
        "selector": "a.is-active",
        "fileName": "Link_with_class_is-active_1024px.png",
        "label": "Link with class_is-active",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -305,
            "height": -206
          },
          "misMatchPercentage": "2.38",
          "analysisTime": 528
        },
        "diffImage": "../bitmaps_test/20200102-163600/failed_diff_Link_with_class_is-active_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Link_with_class_is-active_1200px.png",
        "test": "../bitmaps_test/20200102-163600/Link_with_class_is-active_1200px.png",
        "selector": "a.is-active",
        "fileName": "Link_with_class_is-active_1200px.png",
        "label": "Link with class_is-active",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -305,
            "height": -206
          },
          "misMatchPercentage": "2.38",
          "analysisTime": 238
        },
        "diffImage": "../bitmaps_test/20200102-163600/failed_diff_Link_with_class_is-active_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Main_tag_1024px.png",
        "test": "../bitmaps_test/20200102-163600/Main_tag_1024px.png",
        "selector": "main",
        "fileName": "Main_tag_1024px.png",
        "label": "Main tag",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -80,
            "height": 0
          },
          "misMatchPercentage": "36.24",
          "analysisTime": 233
        },
        "diffImage": "../bitmaps_test/20200102-163600/failed_diff_Main_tag_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Main_tag_1200px.png",
        "test": "../bitmaps_test/20200102-163600/Main_tag_1200px.png",
        "selector": "main",
        "fileName": "Main_tag_1200px.png",
        "label": "Main tag",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -256,
            "height": 0
          },
          "misMatchPercentage": "33.77",
          "analysisTime": 221
        },
        "diffImage": "../bitmaps_test/20200102-163600/failed_diff_Main_tag_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card_1024px.png",
        "test": "../bitmaps_test/20200102-163600/Card_with_data-qa_card_1024px.png",
        "selector": "[data-qa=\"card\"]",
        "fileName": "Card_with_data-qa_card_1024px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "13.51",
          "analysisTime": 212
        },
        "diffImage": "../bitmaps_test/20200102-163600/failed_diff_Card_with_data-qa_card_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card_1024px.png",
        "test": "../bitmaps_test/20200102-163600/Card_with_data-qa_card_1024px.png",
        "selector": "[data-qa=\"card\"].__n1",
        "fileName": "Card_with_data-qa_card_1024px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "13.51",
          "analysisTime": 534
        },
        "diffImage": "../bitmaps_test/20200102-163600/failed_diff_Card_with_data-qa_card_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card_1024px.png",
        "test": "../bitmaps_test/20200102-163600/Card_with_data-qa_card_1024px.png",
        "selector": "[data-qa=\"card\"].__n2",
        "fileName": "Card_with_data-qa_card_1024px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "13.51",
          "analysisTime": 405
        },
        "diffImage": "../bitmaps_test/20200102-163600/failed_diff_Card_with_data-qa_card_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card_1024px.png",
        "test": "../bitmaps_test/20200102-163600/Card_with_data-qa_card_1024px.png",
        "selector": "[data-qa=\"card\"].__n3",
        "fileName": "Card_with_data-qa_card_1024px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "13.51",
          "analysisTime": 444
        },
        "diffImage": "../bitmaps_test/20200102-163600/failed_diff_Card_with_data-qa_card_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card_1024px.png",
        "test": "../bitmaps_test/20200102-163600/Card_with_data-qa_card_1024px.png",
        "selector": "[data-qa=\"card\"].__n4",
        "fileName": "Card_with_data-qa_card_1024px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "13.51",
          "analysisTime": 525
        },
        "diffImage": "../bitmaps_test/20200102-163600/failed_diff_Card_with_data-qa_card_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card_1024px.png",
        "test": "../bitmaps_test/20200102-163600/Card_with_data-qa_card_1024px.png",
        "selector": "[data-qa=\"card\"].__n5",
        "fileName": "Card_with_data-qa_card_1024px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "13.51",
          "analysisTime": 421
        },
        "diffImage": "../bitmaps_test/20200102-163600/failed_diff_Card_with_data-qa_card_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card_1024px.png",
        "test": "../bitmaps_test/20200102-163600/Card_with_data-qa_card_1024px.png",
        "selector": "[data-qa=\"card\"].__n6",
        "fileName": "Card_with_data-qa_card_1024px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "13.51",
          "analysisTime": 554
        },
        "diffImage": "../bitmaps_test/20200102-163600/failed_diff_Card_with_data-qa_card_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card_1024px.png",
        "test": "../bitmaps_test/20200102-163600/Card_with_data-qa_card_1024px.png",
        "selector": "[data-qa=\"card\"].__n7",
        "fileName": "Card_with_data-qa_card_1024px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "13.51",
          "analysisTime": 713
        },
        "diffImage": "../bitmaps_test/20200102-163600/failed_diff_Card_with_data-qa_card_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card_1200px.png",
        "test": "../bitmaps_test/20200102-163600/Card_with_data-qa_card_1200px.png",
        "selector": "[data-qa=\"card\"]",
        "fileName": "Card_with_data-qa_card_1200px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "13.51",
          "analysisTime": 357
        },
        "diffImage": "../bitmaps_test/20200102-163600/failed_diff_Card_with_data-qa_card_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card_1200px.png",
        "test": "../bitmaps_test/20200102-163600/Card_with_data-qa_card_1200px.png",
        "selector": "[data-qa=\"card\"].__n1",
        "fileName": "Card_with_data-qa_card_1200px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "13.51",
          "analysisTime": 213
        },
        "diffImage": "../bitmaps_test/20200102-163600/failed_diff_Card_with_data-qa_card_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card_1200px.png",
        "test": "../bitmaps_test/20200102-163600/Card_with_data-qa_card_1200px.png",
        "selector": "[data-qa=\"card\"].__n2",
        "fileName": "Card_with_data-qa_card_1200px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "13.51",
          "analysisTime": 228
        },
        "diffImage": "../bitmaps_test/20200102-163600/failed_diff_Card_with_data-qa_card_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card_1200px.png",
        "test": "../bitmaps_test/20200102-163600/Card_with_data-qa_card_1200px.png",
        "selector": "[data-qa=\"card\"].__n3",
        "fileName": "Card_with_data-qa_card_1200px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "13.51",
          "analysisTime": 703
        },
        "diffImage": "../bitmaps_test/20200102-163600/failed_diff_Card_with_data-qa_card_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card_1200px.png",
        "test": "../bitmaps_test/20200102-163600/Card_with_data-qa_card_1200px.png",
        "selector": "[data-qa=\"card\"].__n4",
        "fileName": "Card_with_data-qa_card_1200px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "13.51",
          "analysisTime": 489
        },
        "diffImage": "../bitmaps_test/20200102-163600/failed_diff_Card_with_data-qa_card_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card_1200px.png",
        "test": "../bitmaps_test/20200102-163600/Card_with_data-qa_card_1200px.png",
        "selector": "[data-qa=\"card\"].__n5",
        "fileName": "Card_with_data-qa_card_1200px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "13.51",
          "analysisTime": 727
        },
        "diffImage": "../bitmaps_test/20200102-163600/failed_diff_Card_with_data-qa_card_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card_1200px.png",
        "test": "../bitmaps_test/20200102-163600/Card_with_data-qa_card_1200px.png",
        "selector": "[data-qa=\"card\"].__n6",
        "fileName": "Card_with_data-qa_card_1200px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "13.51",
          "analysisTime": 258
        },
        "diffImage": "../bitmaps_test/20200102-163600/failed_diff_Card_with_data-qa_card_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card_1200px.png",
        "test": "../bitmaps_test/20200102-163600/Card_with_data-qa_card_1200px.png",
        "selector": "[data-qa=\"card\"].__n7",
        "fileName": "Card_with_data-qa_card_1200px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "13.51",
          "analysisTime": 220
        },
        "diffImage": "../bitmaps_test/20200102-163600/failed_diff_Card_with_data-qa_card_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card-hover_1024px.png",
        "test": "../bitmaps_test/20200102-163600/Card_with_data-qa_card-hover_1024px.png",
        "selector": "[data-qa=\"card\"]",
        "fileName": "Card_with_data-qa_card-hover_1024px.png",
        "label": "Card with data-qa_card-hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "7.11",
          "analysisTime": 492
        },
        "diffImage": "../bitmaps_test/20200102-163600/failed_diff_Card_with_data-qa_card-hover_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card-hover_1024px.png",
        "test": "../bitmaps_test/20200102-163600/Card_with_data-qa_card-hover_1024px.png",
        "selector": "[data-qa=\"card\"].__n1",
        "fileName": "Card_with_data-qa_card-hover_1024px.png",
        "label": "Card with data-qa_card-hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "7.11",
          "analysisTime": 596
        },
        "diffImage": "../bitmaps_test/20200102-163600/failed_diff_Card_with_data-qa_card-hover_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card-hover_1024px.png",
        "test": "../bitmaps_test/20200102-163600/Card_with_data-qa_card-hover_1024px.png",
        "selector": "[data-qa=\"card\"].__n2",
        "fileName": "Card_with_data-qa_card-hover_1024px.png",
        "label": "Card with data-qa_card-hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "7.11",
          "analysisTime": 453
        },
        "diffImage": "../bitmaps_test/20200102-163600/failed_diff_Card_with_data-qa_card-hover_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card-hover_1024px.png",
        "test": "../bitmaps_test/20200102-163600/Card_with_data-qa_card-hover_1024px.png",
        "selector": "[data-qa=\"card\"].__n3",
        "fileName": "Card_with_data-qa_card-hover_1024px.png",
        "label": "Card with data-qa_card-hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "7.11",
          "analysisTime": 319
        },
        "diffImage": "../bitmaps_test/20200102-163600/failed_diff_Card_with_data-qa_card-hover_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card-hover_1024px.png",
        "test": "../bitmaps_test/20200102-163600/Card_with_data-qa_card-hover_1024px.png",
        "selector": "[data-qa=\"card\"].__n4",
        "fileName": "Card_with_data-qa_card-hover_1024px.png",
        "label": "Card with data-qa_card-hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "7.11",
          "analysisTime": 322
        },
        "diffImage": "../bitmaps_test/20200102-163600/failed_diff_Card_with_data-qa_card-hover_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card-hover_1024px.png",
        "test": "../bitmaps_test/20200102-163600/Card_with_data-qa_card-hover_1024px.png",
        "selector": "[data-qa=\"card\"].__n5",
        "fileName": "Card_with_data-qa_card-hover_1024px.png",
        "label": "Card with data-qa_card-hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "7.11",
          "analysisTime": 585
        },
        "diffImage": "../bitmaps_test/20200102-163600/failed_diff_Card_with_data-qa_card-hover_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card-hover_1024px.png",
        "test": "../bitmaps_test/20200102-163600/Card_with_data-qa_card-hover_1024px.png",
        "selector": "[data-qa=\"card\"].__n6",
        "fileName": "Card_with_data-qa_card-hover_1024px.png",
        "label": "Card with data-qa_card-hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "7.11",
          "analysisTime": 327
        },
        "diffImage": "../bitmaps_test/20200102-163600/failed_diff_Card_with_data-qa_card-hover_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card-hover_1024px.png",
        "test": "../bitmaps_test/20200102-163600/Card_with_data-qa_card-hover_1024px.png",
        "selector": "[data-qa=\"card\"].__n7",
        "fileName": "Card_with_data-qa_card-hover_1024px.png",
        "label": "Card with data-qa_card-hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "7.11",
          "analysisTime": 78
        },
        "diffImage": "../bitmaps_test/20200102-163600/failed_diff_Card_with_data-qa_card-hover_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card-hover_1200px.png",
        "test": "../bitmaps_test/20200102-163600/Card_with_data-qa_card-hover_1200px.png",
        "selector": "[data-qa=\"card\"]",
        "fileName": "Card_with_data-qa_card-hover_1200px.png",
        "label": "Card with data-qa_card-hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "7.11",
          "analysisTime": 424
        },
        "diffImage": "../bitmaps_test/20200102-163600/failed_diff_Card_with_data-qa_card-hover_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card-hover_1200px.png",
        "test": "../bitmaps_test/20200102-163600/Card_with_data-qa_card-hover_1200px.png",
        "selector": "[data-qa=\"card\"].__n1",
        "fileName": "Card_with_data-qa_card-hover_1200px.png",
        "label": "Card with data-qa_card-hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "7.11",
          "analysisTime": 406
        },
        "diffImage": "../bitmaps_test/20200102-163600/failed_diff_Card_with_data-qa_card-hover_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card-hover_1200px.png",
        "test": "../bitmaps_test/20200102-163600/Card_with_data-qa_card-hover_1200px.png",
        "selector": "[data-qa=\"card\"].__n2",
        "fileName": "Card_with_data-qa_card-hover_1200px.png",
        "label": "Card with data-qa_card-hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "7.11",
          "analysisTime": 337
        },
        "diffImage": "../bitmaps_test/20200102-163600/failed_diff_Card_with_data-qa_card-hover_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card-hover_1200px.png",
        "test": "../bitmaps_test/20200102-163600/Card_with_data-qa_card-hover_1200px.png",
        "selector": "[data-qa=\"card\"].__n3",
        "fileName": "Card_with_data-qa_card-hover_1200px.png",
        "label": "Card with data-qa_card-hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "7.11",
          "analysisTime": 300
        },
        "diffImage": "../bitmaps_test/20200102-163600/failed_diff_Card_with_data-qa_card-hover_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card-hover_1200px.png",
        "test": "../bitmaps_test/20200102-163600/Card_with_data-qa_card-hover_1200px.png",
        "selector": "[data-qa=\"card\"].__n4",
        "fileName": "Card_with_data-qa_card-hover_1200px.png",
        "label": "Card with data-qa_card-hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "7.11",
          "analysisTime": 315
        },
        "diffImage": "../bitmaps_test/20200102-163600/failed_diff_Card_with_data-qa_card-hover_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card-hover_1200px.png",
        "test": "../bitmaps_test/20200102-163600/Card_with_data-qa_card-hover_1200px.png",
        "selector": "[data-qa=\"card\"].__n5",
        "fileName": "Card_with_data-qa_card-hover_1200px.png",
        "label": "Card with data-qa_card-hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "7.11",
          "analysisTime": 361
        },
        "diffImage": "../bitmaps_test/20200102-163600/failed_diff_Card_with_data-qa_card-hover_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card-hover_1200px.png",
        "test": "../bitmaps_test/20200102-163600/Card_with_data-qa_card-hover_1200px.png",
        "selector": "[data-qa=\"card\"].__n6",
        "fileName": "Card_with_data-qa_card-hover_1200px.png",
        "label": "Card with data-qa_card-hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "7.11",
          "analysisTime": 393
        },
        "diffImage": "../bitmaps_test/20200102-163600/failed_diff_Card_with_data-qa_card-hover_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card-hover_1200px.png",
        "test": "../bitmaps_test/20200102-163600/Card_with_data-qa_card-hover_1200px.png",
        "selector": "[data-qa=\"card\"].__n7",
        "fileName": "Card_with_data-qa_card-hover_1200px.png",
        "label": "Card with data-qa_card-hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "7.11",
          "analysisTime": 260
        },
        "diffImage": "../bitmaps_test/20200102-163600/failed_diff_Card_with_data-qa_card-hover_1200px.png"
      },
      "status": "fail"
    }
  ]
});