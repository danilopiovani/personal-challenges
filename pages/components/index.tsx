import { FormulationTitle, StepProgressBar } from 'components';
import { useState } from 'react';

import type { NextPage } from 'next';

const Components: NextPage = () => {
  const steps = [
    'Details',
    'texture',
    'Standards',
    'Performance',
    'Fragrances',
    'Colour',
    'Ingredients',
    'Exclusions',
  ];
  const mainObject = {
    productId: 'http://product.atelier.co/b1af4f1f-7d54-556f-be95-113469727830',
    paymentId: null,
    name: 'Product Danilo XPTO',
    brandName: 'Beauty for Mens',
    productName: 'Dr. Moisturiser',
    category: {
      id: 'http://category.atelier.co/facecare',
      label: 'Face Care',
    },
    subCategory: {
      id: 'http://category.atelier.co/moisturiser',
      label: 'Moisturiser',
    },
    marketPosition: {
      id: 'http://marketposition.atelier.co/mid',
      label: 'Mid-market',
    },
    basePrice: null,
    texture: {
      id: 'http://texture.atelier.co/lotion',
      image: 'https://pub.d.atelier.co/static/textures/lotion.jpg',
      notation: 40,
      label: 'Lotion',
      viscosityScale: [
        {
          label: 'Thin',
          value: '0.2',
        },
        {
          label: 'Standard',
          value: '0.5',
        },
        {
          label: 'Thick',
          value: '0.8',
        },
      ],
    },
    volume: {
      id: 'http://volumerange.atelier.co/00510100',
      label: '51ML - 100ML',
      volumeMax: 100,
      volumeMin: 51,
      __typename: 'Volume',
    },
    orderQuantity: null,
    markets: [
      {
        id: 'http://standard.atelier.co/regionAUNZ',
        label: 'Australia & New Zealand',
      },
      {
        id: 'http://standard.atelier.co/regionUS',
        label: 'United States',
        __typename: 'Standard',
      },
      {
        id: 'http://standard.atelier.co/regionCA',
        label: 'Canada',
        __typename: 'Standard',
      },
      {
        id: 'http://standard.atelier.co/regionUK',
        label: 'UK',
        __typename: 'Standard',
      },
      {
        id: 'http://standard.atelier.co/regionEU',
        label: 'Europe',
        __typename: 'Standard',
      },
    ],
    standards: [
      {
        id: 'http://standard.atelier.co/cleansephora',
        label: 'Clean at Sephora',
      },
    ],
    formulationColour: {
      id: 'http://colour.atelier.co/A5D6A7',
      label: 'Watermelon Pink',
      hex: '#ef9a9a',
    },
    exclusions: [
      {
        id: 'http://ingredient.atelier.co/34121',
        label: 'Glycine Soja Oil',
        __typename: 'Ingredients',
      },
      {
        id: 'http://ingredient.atelier.co/38808',
        label: 'Udder Extract',
        __typename: 'Ingredients',
      },
      {
        id: 'http://ingredient.atelier.co/57981',
        label: 'Oryza Sativa Powder',
        __typename: 'Ingredients',
      },
    ],
    chemistRecommendation: false,
    productMOQ: '1000',
    formulationStart: false,
    formulationDone: false,
    samples: [
      {
        sampleNumber: 1,
        performance: [
          {
            id: 'http://performance.atelier.co/antioxidant',
            label: 'Antioxidant',
            color: '#f79e80',
          },
          {
            id: 'http://performance.atelier.co/blurring',
            label: 'Blurring',
            color: '#fdd093',
          },
          {
            id: 'http://performance.atelier.co/chemicalexfoliation',
            label: 'Chemical Exfoliation',
            color: '#b0dba5',
          },
          {
            id: 'http://performance.atelier.co/moisturising',
            label: 'Moisturising',
            color: '#fdeeab',
          },
          {
            id: 'http://performance.atelier.co/oilcontrolling',
            label: 'Oil-controlling',
            color: '#cba1ec',
          },
        ],
        performanceComment: null,
        fragrances: [
          {
            id: 'http://fragrance.atelier.co/bergamot',
            label: 'Bergamot',
            strength: 50,
          },
          {
            id: 'http://fragrance.atelier.co/fingerLime',
            label: 'Finger Lime',
            strength: 50,
          },
        ],
        fragrancesCategories: ['Citrus'],
        ingredients: [
          {
            id: 'http://ingredient.atelier.co/33935',
            performance: ['http://performance.atelier.co/antioxidant'],
            label: 'Ferulic Acid',
            __typename: 'Ingredients',
          },
          {
            id: 'http://ingredient.atelier.co/34238',
            performance: ['http://performance.atelier.co/antioxidant'],
            label: 'Helianthus Annuus (Sunflower) Seed Oil',
            __typename: 'Ingredients',
          },
          {
            id: 'http://ingredient.atelier.co/35012',
            performance: ['http://performance.atelier.co/antioxidant'],
            label: 'Limnanthes Alba (Meadowfoam) Seed Oil',
            __typename: 'Ingredients',
          },
          {
            id: 'http://ingredient.atelier.co/59126',
            performance: ['http://performance.atelier.co/antioxidant'],
            label: 'Resveratrol',
            __typename: 'Ingredients',
          },
          {
            id: 'http://ingredient.atelier.co/75265',
            performance: ['http://performance.atelier.co/blurring'],
            label: 'Coco-Betaine',
            __typename: 'Ingredients',
          },
        ],
        fragranceDerived: 'natural',
        viscosity: 50,
        fragranceFeedback: 50,
        sampleComment: null,
        colourFeedback: null,
        sampleId:
          'http://sample.atelier.co/7d1dcf96-7d7b-5a18-a07a-00e6f3ff77cb',
        orderId: null,
        orderCreatedAt: null,
      },
    ],
    primary: {
      primaryPackaging: {
        id: null,
        orderId: null,
        orderCreatedAt: null,
      },
      productImg: null,
      productDimensions: {
        diameter: '',
        width: '',
        height: '',
      },
      manufacturer: {
        hasMadeProductsFor: [],
        certifications: [],
        location: null,
        size: null,
        specialty: null,
      },
      closure: {
        img: null,
        dimensions: {
          diameter: '',
          width: '',
          height: '',
        },
        components: [
          {
            label: '',
            colour: '',
            materials: [],
          },
        ],
      },
      vessel: {
        img: null,
        dimensions: {
          diameter: '',
          width: '',
          height: '',
        },
        components: [
          {
            size: '',
            label: '',
            colour: '',
            materials: [],
          },
        ],
      },
      print: {
        method: null,
        artworkFile: null,
      },
    },
    primaryDone: false,
    secondary: {},
    formulationPrice: '6.88',
  };
  const textures = [
    {
      id: 'http://texture.atelier.co/cream',
      label: 'Cream',
      image: 'https://pub.d.atelier.co/static/textures/cream.jpg',
      notation: 60,
      viscosityScale: [
        {
          label: 'Thin',
          value: '0.2',
          __typename: 'TextureScales',
        },
        {
          label: 'Standard',
          value: '0.5',
          __typename: 'TextureScales',
        },
        {
          label: 'Thick',
          value: '0.8',
          __typename: 'TextureScales',
        },
      ],
      __typename: 'Texture',
    },
    {
      id: 'http://texture.atelier.co/gel',
      label: 'Gel',
      image: 'https://pub.d.atelier.co/static/textures/gel.jpg',
      notation: 50,
      viscosityScale: [
        {
          label: 'Thin',
          value: '0.2',
          __typename: 'TextureScales',
        },
        {
          label: 'Standard',
          value: '0.5',
          __typename: 'TextureScales',
        },
        {
          label: 'Thick',
          value: '0.8',
          __typename: 'TextureScales',
        },
      ],
      __typename: 'Texture',
    },
    {
      id: 'http://texture.atelier.co/balm',
      label: 'Balm',
      image: 'https://pub.d.atelier.co/static/textures/balm.jpg',
      notation: 80,
      viscosityScale: [
        {
          label: 'Thin',
          value: '0.2',
          __typename: 'TextureScales',
        },
        {
          label: 'Standard',
          value: '0.5',
          __typename: 'TextureScales',
        },
        {
          label: 'Thick',
          value: '0.8',
          __typename: 'TextureScales',
        },
      ],
      __typename: 'Texture',
    },
    {
      id: 'http://texture.atelier.co/butter',
      label: 'Butter',
      image: 'https://pub.d.atelier.co/static/textures/butter.jpg',
      notation: 70,
      viscosityScale: [
        {
          label: 'Thin',
          value: '0.2',
          __typename: 'TextureScales',
        },
        {
          label: 'Standard',
          value: '0.5',
          __typename: 'TextureScales',
        },
        {
          label: 'Thick',
          value: '0.8',
          __typename: 'TextureScales',
        },
      ],
      __typename: 'Texture',
    },
    {
      id: 'http://texture.atelier.co/lotion',
      label: 'Lotion',
      image: 'https://pub.d.atelier.co/static/textures/lotion.jpg',
      notation: 40,
      viscosityScale: [
        {
          label: 'Thin',
          value: '0.2',
          __typename: 'TextureScales',
        },
        {
          label: 'Standard',
          value: '0.5',
          __typename: 'TextureScales',
        },
        {
          label: 'Thick',
          value: '0.8',
          __typename: 'TextureScales',
        },
      ],
      __typename: 'Texture',
    },
  ];
  const countries = [
    {
      id: 'http://standard.atelier.co/regionAUNZ',
      label: 'Australia & New Zealand',
      __typename: 'Standard',
    },
    {
      id: 'http://standard.atelier.co/regionUS',
      label: 'United States',
      __typename: 'Standard',
    },
    {
      id: 'http://standard.atelier.co/regionCA',
      label: 'Canada',
      __typename: 'Standard',
    },
    {
      id: 'http://standard.atelier.co/regionUK',
      label: 'UK',
      __typename: 'Standard',
    },
    {
      id: 'http://standard.atelier.co/regionEU',
      label: 'Europe',
      __typename: 'Standard',
    },
    {
      id: 'http://standard.atelier.co/regionJP',
      label: 'Japan',
      __typename: 'Standard',
    },
    {
      id: 'http://standard.atelier.co/regionCN',
      label: 'China',
      __typename: 'Standard',
    },
    {
      id: 'http://standard.atelier.co/regionRestAsia',
      label: 'Rest of Asia',
      __typename: 'Standard',
    },
    {
      id: 'http://standard.atelier.co/regionAfrica',
      label: 'Africa',
      __typename: 'Standard',
    },
    {
      id: 'http://standard.atelier.co/regionSouthAmerica',
      label: 'South America',
      __typename: 'Standard',
    },
    {
      id: 'http://standard.atelier.co/regionCentralAmerica',
      label: 'Central America',
      __typename: 'Standard',
    },
    {
      id: 'http://standard.atelier.co/regionMiddleEast',
      label: 'Middle East',
      __typename: 'Standard',
    },
  ];
  const standards = [
    {
      id: 'http://standard.atelier.co/cleansephora',
      label: 'Clean at Sephora',
      __typename: 'Standard',
    },
  ];
  const performances = [
    {
      id: 'http://performance.atelier.co/antioxidant',
      label: 'Antioxidant',
      __typename: 'performance',
    },
    {
      id: 'http://performance.atelier.co/balancing',
      label: 'Balancing',
      __typename: 'performance',
    },
    {
      id: 'http://performance.atelier.co/blurring',
      label: 'Blurring',
      __typename: 'performance',
    },
    {
      id: 'http://performance.atelier.co/cleansing',
      label: 'Cleansing',
      __typename: 'performance',
    },
    {
      id: 'http://performance.atelier.co/emollient',
      label: 'Emollient',
      __typename: 'performance',
    },
    {
      id: 'http://performance.atelier.co/physicalexfoliation',
      label: 'Physical Exfoliation',
      __typename: 'performance',
    },
    {
      id: 'http://performance.atelier.co/chemicalexfoliation',
      label: 'Chemical Exfoliation',
      __typename: 'performance',
    },
    {
      id: 'http://performance.atelier.co/fastdrying',
      label: 'Fast-drying',
      __typename: 'performance',
    },
    {
      id: 'http://performance.atelier.co/hydrating',
      label: 'Hydrating',
      __typename: 'performance',
    },
    {
      id: 'http://performance.atelier.co/moisturelock',
      label: 'Moisture-lock',
      __typename: 'performance',
    },
    {
      id: 'http://performance.atelier.co/moisturising',
      label: 'Moisturising',
      __typename: 'performance',
    },
    {
      id: 'http://performance.atelier.co/nourishing',
      label: 'Nourishing',
      __typename: 'performance',
    },
    {
      id: 'http://performance.atelier.co/oilcontrolling',
      label: 'Oil-controlling',
      __typename: 'performance',
    },
    {
      id: 'http://performance.atelier.co/phbalancing',
      label: 'pH Balancing',
      __typename: 'performance',
    },
    {
      id: 'http://performance.atelier.co/plumping',
      label: 'Plumping',
      __typename: 'performance',
    },
    {
      id: 'http://performance.atelier.co/firming',
      label: 'Firming',
      __typename: 'performance',
    },
    {
      id: 'http://performance.atelier.co/skinprotecting',
      label: 'Skin Protecting',
      __typename: 'performance',
    },
    {
      id: 'http://performance.atelier.co/smoothing',
      label: 'Smoothing',
      __typename: 'performance',
    },
    {
      id: 'http://performance.atelier.co/soothing',
      label: 'Soothing',
      __typename: 'performance',
    },
    {
      id: 'http://performance.atelier.co/brightening',
      label: 'Brightening',
      __typename: 'performance',
    },
    {
      id: 'http://performance.atelier.co/evensskintone',
      label: 'Evens Skin Tone',
      __typename: 'performance',
    },
    {
      id: 'http://performance.atelier.co/supportsskinmicrobiome',
      label: 'Supports Skin Microbiome',
      __typename: 'performance',
    },
    {
      id: 'http://performance.atelier.co/antiaging',
      label: 'Anti-aging',
      __typename: 'performance',
    },
  ];
  const fragranceTypes = [
    'Natural',
    'Synthetic',
    'Fragrance Free',
    'I don’t mind',
  ];
  const fragrances = [
    {
      id: 'http://fragrance.atelier.co/citrus',
      label: 'Citrus',
      notes: [
        {
          id: 'http://fragrance.atelier.co/bergamot',
          label: 'Bergamot',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/bloodOrange',
          label: 'Blood Orange',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/citrone',
          label: 'Citrone',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/fingerLime',
          label: 'Finger Lime',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/grapefruit',
          label: 'Grapefruit',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/lemon',
          label: 'Lemon',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/lemonBalm',
          label: 'Lemon Balm',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/mandarin',
          label: 'Mandarin',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/neroli',
          label: 'Neroli',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/orange',
          label: 'Orange',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/pomelo',
          label: 'Pomelo',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/sweetLime',
          label: 'Sweet Lime',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/yuzu',
          label: 'Yuzu',
          __typename: 'Standard',
        },
      ],
      __typename: 'Fragrance',
    },
    {
      id: 'http://fragrance.atelier.co/floral',
      label: 'Floral',
      notes: [
        {
          id: 'http://fragrance.atelier.co/acacia',
          label: 'Acacia',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/apricotBlossom',
          label: 'Apricot Blossom',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/aztecLily',
          label: 'Aztec Lily',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/banksia',
          label: 'Banksia',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/bergamotBlossom',
          label: 'Bergamot Blossom',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/camellia',
          label: 'Camellia',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/cardamomFlower',
          label: 'Cardamom Flower',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/carnation',
          label: 'Carnation',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/chamomile',
          label: 'Chamomile',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/cherryBlossom',
          label: 'Cherry Blossom',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/clover',
          label: 'Clover',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/cottonFlower',
          label: 'Cotton Flower',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/dandelion',
          label: 'Dandelion',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/figBlossom',
          label: 'Fig Blossom',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/geranium',
          label: 'Geranium',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/goldenrod',
          label: 'Goldenrod',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/hibiscus',
          label: 'Hibiscus',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/iris',
          label: 'Iris',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/jasmine',
          label: 'Jasmine',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/lotus',
          label: 'Lotus',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/magnolia',
          label: 'Magnolia',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/nasturtium',
          label: 'Nasturtium',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/orchid',
          label: 'Orchid',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/rose',
          label: 'Rose',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/snowdrops',
          label: 'Snowdrops',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/sourCherryBlossom',
          label: 'Sour Cherry Blossom',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/ylangYlang',
          label: 'YlangYlang',
          __typename: 'Standard',
        },
      ],
      __typename: 'Fragrance',
    },
    {
      id: 'http://fragrance.atelier.co/fruity',
      label: 'Fruity',
      notes: [
        {
          id: 'http://fragrance.atelier.co/apple',
          label: 'Apple',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/apricot',
          label: 'Apricot',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/blackberry',
          label: 'Blackberry',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/cherry',
          label: 'Cherry',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/cloudberry',
          label: 'Cloudberry',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/cranberry',
          label: 'Cranberry',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/cucumber',
          label: 'Cucumber',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/darkPlum',
          label: 'Dark Plum',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/fig',
          label: 'Fig',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/grape',
          label: 'Grape',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/kiwi',
          label: 'Kiwi',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/lychee',
          label: 'Lychee',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/nashiPear',
          label: 'Nashi Pear',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/peach',
          label: 'Peach',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/pear',
          label: 'Pear',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/persimmon',
          label: 'Persimmon',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/pineapple',
          label: 'Pineapple',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/plum',
          label: 'Plum',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/pomegranate',
          label: 'Pomegranate',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/pricklyPear',
          label: 'Prickly Pear',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/quandong',
          label: 'Quandong',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/raspberry',
          label: 'Raspberry',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/redCurrant',
          label: 'Red Currant',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/sarsaparilla',
          label: 'Sarsaparilla',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/seaBuckthornBerries',
          label: 'Sea Buckthorn Berries',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/snowberry',
          label: 'Snowberry',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/sourCherry',
          label: 'Sour Cherry',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/strawberry',
          label: 'Strawberry',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/watermelon',
          label: 'Watermelon',
          __typename: 'Standard',
        },
      ],
      __typename: 'Fragrance',
    },
    {
      id: 'http://fragrance.atelier.co/herbaceous',
      label: 'Herbaceous',
      notes: [
        {
          id: 'http://fragrance.atelier.co/agave',
          label: 'Agave',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/aloeVera',
          label: 'Aloe Vera',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/angelica',
          label: 'Angelica',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/arnica',
          label: 'Arnica',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/barley',
          label: 'Barley',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/basil',
          label: 'Basil',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/bayHerbaceous',
          label: 'Bay',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/betelLeaf',
          label: 'Betel Leaf',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/borage',
          label: 'Borage',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/bran',
          label: 'Bran',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/burdock',
          label: 'Burdock',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/cannabis',
          label: 'Cannabis',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/cedarHerbaceous',
          label: 'Cedar',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/centellaAsiatica',
          label: 'Centella Asiatica',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/chicory',
          label: 'Chicory',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/chive',
          label: 'Chive',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/cilantro',
          label: 'Cilantro',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/clarySage',
          label: 'Clary Sage',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/corianderHerbaceous',
          label: 'Coriander',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/fern',
          label: 'Fern',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/gingerHerbaceous',
          label: 'Ginger',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/gingko',
          label: 'Gingko',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/ginseng',
          label: 'Ginseng',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/grass',
          label: 'Grass',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/lantanaLeaf',
          label: 'Lantana Leaf',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/lapsangSouchong',
          label: 'Lapsang Souchong',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/lemongrass',
          label: 'Lemongrass',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/lovage',
          label: 'Lovage',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/marigold',
          label: 'Marigold',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/marjoram',
          label: 'Marjoram',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/matcha',
          label: 'Matcha',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/mate',
          label: 'Mate',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/mint',
          label: 'Mint',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/nettle',
          label: 'Nettle',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/oliveLeaf',
          label: 'Olive Leaf',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/orchidLeaf',
          label: 'Orchid Leaf',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/oregano',
          label: 'Oregano',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/palmarosa',
          label: 'Palmarosa',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/pandanus',
          label: 'Pandanus',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/parsley',
          label: 'Parsley',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/purslane',
          label: 'Purslane',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/rosemary',
          label: 'Rosemary',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/rue',
          label: 'Rue',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/sage',
          label: 'Sage',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/sawPalmetto',
          label: 'Saw Palmetto',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/seaweed',
          label: 'Seaweed',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/shiso',
          label: 'Shiso',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/tansy',
          label: 'Tansy',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/tarragon',
          label: 'Tarragon',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/teakHerbaceous',
          label: 'Teak',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/thistle',
          label: 'Thistle',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/thyme',
          label: 'Thyme',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/tulsi',
          label: 'Tulsi',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/valerian',
          label: 'Valerian',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/wormwood',
          label: 'Wormwood',
          __typename: 'Standard',
        },
      ],
      __typename: 'Fragrance',
    },
    {
      id: 'http://fragrance.atelier.co/musky',
      label: 'Musky',
      notes: [
        {
          id: 'http://fragrance.atelier.co/aldron',
          label: 'Aldron',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/amber',
          label: 'Amber',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/ambergris',
          label: 'Ambergris',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/ambrarome',
          label: 'Ambrarome',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/ambrette',
          label: 'Ambrette',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/bacon',
          label: 'Bacon',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/beeswax',
          label: 'Beeswax',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/caviar',
          label: 'Caviar',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/cheese',
          label: 'Cheese',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/fur',
          label: 'Fur',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/goatsMilk',
          label: "Goat's Milk",
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/kephalis',
          label: 'Kephalis',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/leather',
          label: 'Leather',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/milk',
          label: 'Milk',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/musk',
          label: 'Musk',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/oysters',
          label: 'Oysters',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/seaShells',
          label: 'Sea Shells',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/suede',
          label: 'Suede',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/truffle',
          label: 'Truffle',
          __typename: 'Standard',
        },
      ],
      __typename: 'Fragrance',
    },
    {
      id: 'http://fragrance.atelier.co/nutty',
      label: 'Nutty',
      notes: [
        {
          id: 'http://fragrance.atelier.co/almondNutty',
          label: 'Almond',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/arganNutty',
          label: 'Argan',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/brazilNut',
          label: 'Brazil Nut',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/chia',
          label: 'Chia',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/conifer',
          label: 'Conifer',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/macadamia',
          label: 'Macadamia',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/malt',
          label: 'Malt',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/peanut',
          label: 'Peanut',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/shea',
          label: 'Shea',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/walnut',
          label: 'Walnut',
          __typename: 'Standard',
        },
      ],
      __typename: 'Fragrance',
    },
    {
      id: 'http://fragrance.atelier.co/spicy',
      label: 'Spicy',
      notes: [
        {
          id: 'http://fragrance.atelier.co/anise',
          label: 'Anise',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/baySpicy',
          label: 'Bay',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/cacaoSpicy',
          label: 'Cacao',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/caraway',
          label: 'Caraway',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/cardamom',
          label: 'Cardamom',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/cassia',
          label: 'Cassia',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/cinnamon',
          label: 'Cinnamon',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/clove',
          label: 'Clove',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/coffee',
          label: 'Coffee',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/corianderSpicy',
          label: 'Coriander',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/cumin',
          label: 'Cumin',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/dill',
          label: 'Dill',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/fennel',
          label: 'Fennel',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/fenugreek',
          label: 'Fenugreek',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/galangal',
          label: 'Galangal',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/gingerSpicy',
          label: 'Ginger',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/licorice',
          label: 'Licorice',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/mace',
          label: 'Mace',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/mustardSeed',
          label: 'Mustard Seed',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/nutmeg',
          label: 'Nutmeg',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/pepper',
          label: 'Pepper',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/pimento',
          label: 'Pimento',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/pinkPepper',
          label: 'Pink Pepper',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/saffron',
          label: 'Saffron',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/starAnise',
          label: 'Star Anise',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/sumac',
          label: 'Sumac',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/tamarind',
          label: 'Tamarind',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/tonkaBean',
          label: 'Tonka Bean',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/toscanol',
          label: 'Toscanol',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/turmeric',
          label: 'Turmeric',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/vanillaSpicy',
          label: 'Vanilla',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/wasabi',
          label: 'Wasabi',
          __typename: 'Standard',
        },
      ],
      __typename: 'Fragrance',
    },
    {
      id: 'http://fragrance.atelier.co/sweet',
      label: 'Sweet',
      notes: [
        {
          id: 'http://fragrance.atelier.co/agarwood',
          label: 'Agarwood',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/butterscotch',
          label: 'Butterscotch',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/cacaoSweet',
          label: 'Cacao',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/caramel',
          label: 'Caramel',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/chocolate',
          label: 'Chocolate',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/coconut',
          label: 'Coconut',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/frankincense',
          label: 'Frankincense',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/honey',
          label: 'Honey',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/honeysuckle',
          label: 'Honeysuckle',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/hyssop',
          label: 'Hyssop',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/imortelle',
          label: 'Imortelle',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/lavandin',
          label: 'Lavandin',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/niaouli',
          label: 'Niaouli',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/roseGeranium',
          label: 'Rose geranium',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/rosewood',
          label: 'Rosewood',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/sweetOrange',
          label: 'Sweet orange',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/tagetes',
          label: 'Tagetes',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/vanillaSweet',
          label: 'Vanilla',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/violetLeaf',
          label: 'Violet leaf',
          __typename: 'Standard',
        },
      ],
      __typename: 'Fragrance',
    },
    {
      id: 'http://fragrance.atelier.co/woody',
      label: 'Woody',
      notes: [
        {
          id: 'http://fragrance.atelier.co/almondWoody',
          label: 'Almond',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/amaranth',
          label: 'Amaranth',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/amyris',
          label: 'Amyris',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/arganWoody',
          label: 'Argan',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/australianBlueCypress',
          label: 'Australian Blue Cypress',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/balsam',
          label: 'Balsam',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/baobab',
          label: 'Baobab',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/beech',
          label: 'Beech',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/birch',
          label: 'Birch',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/brazilian',
          label: 'Brazilian',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/buddhaWood',
          label: 'Buddha Wood',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/cedarWoody',
          label: 'Cedar',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/cherryTree',
          label: 'Cherry Tree',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/cypress',
          label: 'Cypress',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/dreamwood',
          label: 'Dreamwood',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/ebonyTree',
          label: 'Ebony Tree',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/elm',
          label: 'Elm',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/eucalyptus',
          label: 'Eucalyptus',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/figTree',
          label: 'Fig Tree',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/fir',
          label: 'Fir',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/grassTree',
          label: 'Grass Tree',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/hinokiWood',
          label: 'Hinoki Wood',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/ironwood',
          label: 'Ironwood',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/ishpink',
          label: 'Ishpink',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/kark',
          label: 'Kark',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/laotianOud',
          label: 'Laotian Oud',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/larch',
          label: 'Larch',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/lichen',
          label: 'Lichen',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/mahogany',
          label: 'Mahogany',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/manuka',
          label: 'Manuka',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/maple',
          label: 'Maple',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/mesquiteWood',
          label: 'Mesquite Wood',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/neem',
          label: 'Neem',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/oak',
          label: 'Oak',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/oliveTree',
          label: 'Olive Tree',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/oud',
          label: 'Oud',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/paloSanto',
          label: 'Palo Santo',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/patchouli',
          label: 'Patchouli',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/pineTree',
          label: 'Pine Tree',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/poplar',
          label: 'Poplar',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/sandalwood',
          label: 'Sandalwood',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/sawdust',
          label: 'Sawdust',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/sequoia',
          label: 'Sequoia',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/spruce',
          label: 'Spruce',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/teakWoody',
          label: 'Teak',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/vetiver',
          label: 'Vetiver',
          __typename: 'Standard',
        },
        {
          id: 'http://fragrance.atelier.co/whiteWillow',
          label: 'White Willow',
          __typename: 'Standard',
        },
      ],
      __typename: 'Fragrance',
    },
  ];
  const colourPallet = [
    {
      hex: '#FFEBEE',
      id: 'http://colour.atelier.co/FFEBEE',
      label: 'Baby Pink',
      __typename: 'FormulationColours',
    },
    {
      hex: '#FFCDD2',
      id: 'http://colour.atelier.co/FFCDD2',
      label: 'Pink',
      __typename: 'FormulationColours',
    },
    {
      hex: '#EF9A9A',
      id: 'http://colour.atelier.co/EF9A9A',
      label: 'Watermelon Pink',
      __typename: 'FormulationColours',
    },
    {
      hex: '#F3E5F5',
      id: 'http://colour.atelier.co/F3E5F5',
      label: 'Soft Lavender',
      __typename: 'FormulationColours',
    },
    {
      hex: '#E1BEE7',
      id: 'http://colour.atelier.co/E1BEE7',
      label: 'Lilac',
      __typename: 'FormulationColours',
    },
    {
      hex: '#CE93D8',
      id: 'http://colour.atelier.co/CE93D8',
      label: 'Purple',
      __typename: 'FormulationColours',
    },
    {
      hex: '#E8F5E9',
      id: 'http://colour.atelier.co/E8F5E9',
      label: 'Pistachio',
      __typename: 'FormulationColours',
    },
    {
      hex: '#C8E6C9',
      id: 'http://colour.atelier.co/C8E6C9',
      label: 'Fern Green',
      __typename: 'FormulationColours',
    },
    {
      hex: '#A5D6A7',
      id: 'http://colour.atelier.co/A5D6A7',
      label: 'Green',
      __typename: 'FormulationColours',
    },
    {
      hex: '#FCE4EC',
      id: 'http://colour.atelier.co/FCE4EC',
      label: 'Powder Pink',
      __typename: 'FormulationColours',
    },
    {
      hex: '#F8BBD0',
      id: 'http://colour.atelier.co/F8BBD0',
      label: 'Taffy Pink',
      __typename: 'FormulationColours',
    },
    {
      hex: '#F48FB1',
      id: 'http://colour.atelier.co/F48FB1',
      label: 'Bubblegum Pink',
      __typename: 'FormulationColours',
    },
    {
      hex: '#EDE7F6',
      id: 'http://colour.atelier.co/EDE7F6',
      label: 'Light Violet',
      __typename: 'FormulationColours',
    },
    {
      hex: '#D1C4E9',
      id: 'http://colour.atelier.co/D1C4E9',
      label: 'Violet',
      __typename: 'FormulationColours',
    },
    {
      hex: '#B39DDB',
      id: 'http://colour.atelier.co/B39DDB',
      label: 'Orchid',
      __typename: 'FormulationColours',
    },
    {
      hex: '#F1F8E9',
      id: 'http://colour.atelier.co/F1F8E9',
      label: 'Powder Green',
      __typename: 'FormulationColours',
    },
    {
      hex: '#DCEDC8',
      id: 'http://colour.atelier.co/DCEDC8',
      label: 'Tea Green',
      __typename: 'FormulationColours',
    },
    {
      hex: '#C5E1A5',
      id: 'http://colour.atelier.co/C5E1A5',
      label: 'Pear Green',
      __typename: 'FormulationColours',
    },
    {
      hex: '#FBE9E7',
      id: 'http://colour.atelier.co/FBE9E7',
      label: 'Soft Pink',
      __typename: 'FormulationColours',
    },
    {
      hex: '#FFCCBC',
      id: 'http://colour.atelier.co/FFCCBC',
      label: 'Peach',
      __typename: 'FormulationColours',
    },
    {
      hex: '#FFAB91',
      id: 'http://colour.atelier.co/FFAB91',
      label: 'Coral Pink',
      __typename: 'FormulationColours',
    },
    {
      hex: '#E0F7FA',
      id: 'http://colour.atelier.co/E0F7FA',
      label: 'Light Blue',
      __typename: 'FormulationColours',
    },
    {
      hex: '#B2EBF2',
      id: 'http://colour.atelier.co/B2EBF2',
      label: 'Baby Turquoise',
      __typename: 'FormulationColours',
    },
    {
      hex: '#80DEEA',
      id: 'http://colour.atelier.co/80DEEA',
      label: 'Electric Blue',
      __typename: 'FormulationColours',
    },
    {
      hex: '#F9FBE7',
      id: 'http://colour.atelier.co/F9FBE7',
      label: 'Powder Lime Green',
      __typename: 'FormulationColours',
    },
    {
      hex: '#F0F4C3',
      id: 'http://colour.atelier.co/F0F4C3',
      label: 'Baby Lime Green',
      __typename: 'FormulationColours',
    },
    {
      hex: '#E6EE9C',
      id: 'http://colour.atelier.co/E6EE9C',
      label: 'Lime Green',
      __typename: 'FormulationColours',
    },
    {
      hex: '#FFFDE7',
      id: 'http://colour.atelier.co/FFFDE7',
      label: 'Baby Yellow',
      __typename: 'FormulationColours',
    },
    {
      hex: '#FFF9C4',
      id: 'http://colour.atelier.co/FFF9C4',
      label: 'Lemonade Yellow',
      __typename: 'FormulationColours',
    },
    {
      hex: '#FFF59D',
      id: 'http://colour.atelier.co/FFF59D',
      label: 'Yellow',
      __typename: 'FormulationColours',
    },
    {
      hex: '#E3F2FD',
      id: 'http://colour.atelier.co/E3F2FD',
      label: 'Powder Blue',
      __typename: 'FormulationColours',
    },
    {
      hex: '#BBDEFB',
      id: 'http://colour.atelier.co/BBDEFB',
      label: 'Sky Blue',
      __typename: 'FormulationColours',
    },
    {
      hex: '#81D4FA',
      id: 'http://colour.atelier.co/81D4FA',
      label: 'Sea Blue',
      __typename: 'FormulationColours',
    },
    {
      hex: '#EFEBE9',
      id: 'http://colour.atelier.co/EFEBE9',
      label: 'Oat',
      __typename: 'FormulationColours',
    },
    {
      hex: '#D7CCC8',
      id: 'http://colour.atelier.co/D7CCC8',
      label: 'Earl Grey',
      __typename: 'FormulationColours',
    },
    {
      hex: '#BCAAA4',
      id: 'http://colour.atelier.co/BCAAA4',
      label: 'Coffee',
      __typename: 'FormulationColours',
    },
    {
      hex: '#FFF8E1',
      id: 'http://colour.atelier.co/FFF8E1',
      label: 'Cream',
      __typename: 'FormulationColours',
    },
    {
      hex: '#FFECB3',
      id: 'http://colour.atelier.co/FFECB3',
      label: 'Light Orange',
      __typename: 'FormulationColours',
    },
    {
      hex: '#FFE082',
      id: 'http://colour.atelier.co/FFE082',
      label: 'Gold',
      __typename: 'FormulationColours',
    },
    {
      hex: '#E1F5FE',
      id: 'http://colour.atelier.co/E1F5FE',
      label: 'Baby Blue',
      __typename: 'FormulationColours',
    },
    {
      hex: '#B3E5FC',
      id: 'http://colour.atelier.co/B3E5FC',
      label: 'Baby Blue',
      __typename: 'FormulationColours',
    },
    {
      hex: '#8BCEFF',
      id: 'http://colour.atelier.co/8BCEFF',
      label: 'Cornflower',
      __typename: 'FormulationColours',
    },
    {
      hex: '#FAFAFA',
      id: 'http://colour.atelier.co/FAFAFA',
      label: 'Coconut',
      __typename: 'FormulationColours',
    },
    {
      hex: '#F5F5F5',
      id: 'http://colour.atelier.co/F5F5F5',
      label: 'Fog Grey',
      __typename: 'FormulationColours',
    },
    {
      hex: '#EEEEEE',
      id: 'http://colour.atelier.co/EEEEEE',
      label: 'Light Chrome',
      __typename: 'FormulationColours',
    },
    {
      hex: '#FFF3E0',
      id: 'http://colour.atelier.co/FFF3E0',
      label: 'Soft Peach',
      __typename: 'FormulationColours',
    },
    {
      hex: '#FFE0B2',
      id: 'http://colour.atelier.co/FFE0B2',
      label: 'Sherbet ',
      __typename: 'FormulationColours',
    },
    {
      hex: '#FFCC80',
      id: 'http://colour.atelier.co/FFCC80',
      label: 'Orange',
      __typename: 'FormulationColours',
    },
    {
      hex: '#E0F2F1',
      id: 'http://colour.atelier.co/E0F2F1',
      label: 'Light Turquoise',
      __typename: 'FormulationColours',
    },
    {
      hex: '#B2DFDB',
      id: 'http://colour.atelier.co/B2DFDB',
      label: 'Tiffany Blue',
      __typename: 'FormulationColours',
    },
    {
      hex: '#80CBC4',
      id: 'http://colour.atelier.co/80CBC4',
      label: 'Teal',
      __typename: 'FormulationColours',
    },
    {
      hex: '#ECEFF1',
      id: 'http://colour.atelier.co/ECEFF1',
      label: 'Light Grey',
      __typename: 'FormulationColours',
    },
    {
      hex: '#CFD8DC',
      id: 'http://colour.atelier.co/CFD8DC',
      label: 'Cool Grey',
      __typename: 'FormulationColours',
    },
    {
      hex: '#B0BEC5',
      id: 'http://colour.atelier.co/B0BEC5',
      label: 'Grey',
      __typename: 'FormulationColours',
    },
  ];
  const colorTypes = ['Colour', 'Colourless', 'No added colour'];
  const [currentStep, setCurrentStep] = useState(2);
  const [complete, setComplete] = useState(false);
  return (
    <div>
      <div className="flex h-screen flex-col overflow-y-hidden">
        <div className="flex flex-row gap-3 bg-sky-500 pt-6 px-10">
          <div className="btn text-3xl text-white pr-10 pb-6">ATELIER</div>
          <div className="flex flex-row gap-4 items-end">
            <button className="btn bg-white p-3 rounded-t-lg text-slate-700 uppercase text-sm font-bold h-10">
              Formulation
            </button>
            <button className="btn bg-gray-100 p-3 rounded-t-lg text-gray-300  uppercase text-sm font-bold h-10">
              Primary Packaging
            </button>
            <button className="btn bg-gray-100 p-3 rounded-t-lg text-gray-300  uppercase text-sm font-bold h-10">
              Secondary Packaging
            </button>
          </div>
        </div>
        <div className="flex h-full">
          <div className="col w-9/12 shadow-lg flex-col justify-center content-center">
            <div className="flex flex-col gap-10 items-center justify-start px-2 py-10">
              <StepProgressBar
                steps={steps}
                currentStep={currentStep}
                complete={complete}
              />
            </div>
            <div className="flex flex-col items-center justify-start gap-10">
              {currentStep === 1 && (
                <div className="w-2/3 flex flex-col gap-5 items-center justify-start">
                  <FormulationTitle>
                    Let’s Build Your Beauty Brand. <br /> Make Your Product
                    Today!
                  </FormulationTitle>
                  <form className="w-full flex flex-col bg-gradient-to-r from-cyan-400 to-sky-500 p-10 rounded-lg">
                    <div className="flex flex-wrap -mx-3 mb-6">
                      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 ">
                        <label className="block uppercase tracking-wide text-white text-sm font-bold mb-2">
                          WHAT’S THE NAME OF YOUR BRAND?
                        </label>
                        <input
                          className="appearance-none block w-full bg-white text-slate-500 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-first-name"
                          type="text"
                          placeholder="BRAND NAME"
                        />
                      </div>
                      <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-white text-sm font-bold mb-2">
                          WHAT IS YOUR PRODUCT NAME?
                        </label>
                        <input
                          className="appearance-none block w-full bg-white text-slate-500 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-last-name"
                          type="text"
                          placeholder="PRODUCT NAME"
                        />
                      </div>
                    </div>
                    <div className="w-full flex flex-wrap">
                      <label className="block uppercase tracking-wide text-white text-sm font-bold mb-2">
                        WHAT TYPE OF BRAND ARE YOU? WHERE DO YOU WANT YOUR
                        PRODUCT TO SIT IN MARKET?
                      </label>
                    </div>
                    <div className="w-full flex flex-wrap gap-10 justify-center border rounded p-5">
                      <button className="h-16 px-6 btn text-md text-slate-400 items-center justify-start border rounded-lg bg-white border-white hover:border-slate-500 cursor-pointer">
                        EASILY ACCESSIBLE ($)
                      </button>
                      <button className="h-16 px-6 btn text-md text-slate-400 items-center justify-start rounded-lg hover:border-slate-500 cursor-pointer border-2 border-green-500 bg-green-100">
                        MID MARKET ($$)
                      </button>
                      <button className="h-16 px-6 btn text-md text-slate-400 items-center justify-start border rounded-lg bg-white border-white hover:border-slate-500 cursor-pointer">
                        HIGH-END LUXE ($$$)
                      </button>
                    </div>
                    <div className="capitalize w-full text-white text-4xl p-4 pt-10 text-center">
                      What would you like to make?
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2 py-5">
                      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-white text-sm font-bold mb-2">
                          CATEGORY
                        </label>
                        <div className="relative">
                          <select
                            className="block appearance-none w-full bg-white border border-gray-200 text-gray-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-state"
                          >
                            <option>FACE CARE</option>
                            <option>BODY CARE</option>
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
                            <svg
                              className="fill-current h-4 w-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-white text-sm font-bold mb-2">
                          SUB-CATEGORY
                        </label>
                        <div className="relative">
                          <select
                            className="uppercase block appearance-none w-full bg-white border border-gray-200 text-gray-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-state"
                          >
                            <option>Moisturiser</option>
                            <option>Eye Cream</option>
                            <option>Toner</option>
                            <option>Physical Exfoliator</option>
                            <option>Chemical Exfoliator</option>
                            <option>Serum</option>
                            <option>Mask</option>
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
                            <svg
                              className="fill-current h-4 w-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-white text-sm font-bold mb-2">
                          VOLUME
                        </label>
                        <div className="relative">
                          <select
                            className="block appearance-none w-full bg-white border border-gray-200 text-gray-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-state"
                          >
                            <option>5ML - 10ML</option>
                            <option>11ML - 50ML</option>
                            <option>51ML - 100ML</option>
                            <option>101ML - 250ML</option>
                            <option>251ML - 500ML</option>
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
                            <svg
                              className="fill-current h-4 w-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="w-full flex gap-5 items-center justify-between">
                    <button
                      onClick={() => {
                        setComplete(false);
                        setCurrentStep(1);
                      }}
                      className="bg-white text-slate-500 font-bold py-3 px-4 rounded-lg text-sm border"
                    >
                      CANCEL
                    </button>
                    <button
                      onClick={() => setCurrentStep((prev) => prev + 1)}
                      className="bg-sky-600 text-white font-bold py-3 px-4 rounded-lg text-sm"
                    >
                      NEXT
                    </button>
                  </div>
                </div>
              )}
              {currentStep === 2 && (
                <div className="w-2/3 flex flex-col gap-5 items-center justify-start">
                  <FormulationTitle>
                    Unleash the Perfect Texture for your product.
                  </FormulationTitle>
                  <div className="w-full flex flex-col bg-gradient-to-r from-cyan-400 to-sky-500 p-10 rounded-lg">
                    <div className="w-full flex flex-row gap-5">
                      {textures.map((item, index) => (
                        <div
                          key={`textures__${index}`}
                          className="w-full flex flex-col items-center justify-start border-2 rounded-lg border-white hover:border-sky-500 cursor-pointer"
                        >
                          <img
                            className="w-40 h-40 object-cover rounded-t"
                            src={item.image}
                          />
                          <p className="uppercase text-sky-500 text-lg text-center bg-white w-full rounded-b">
                            {item.label}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="capitalize w-full text-white text-4xl p-4 pt-10 text-center">
                      amazing! let’s set your viscosity!
                    </div>

                    <div className="relative pt-1">
                      <input
                        type="range"
                        className="form-range appearance-none w-full h-1 p-0 bg-gray-100 rounded-full focus:outline-none focus:ring-0 focus:shadow-none"
                        id="customRange1"
                        min="0"
                        max="5"
                        step="0.5"
                      />
                    </div>
                    <div className="w-full flex flex-row gap-5 justify-between">
                      <p className="text-white uppercase">Thin</p>
                      <p className="text-white uppercase">Thick</p>
                    </div>
                  </div>
                  <div className="w-full flex gap-5 items-center justify-between">
                    <button
                      onClick={() => {
                        setCurrentStep(1);
                      }}
                      className="bg-white text-slate-500 font-bold py-3 px-4 rounded-lg text-sm border"
                    >
                      BACK
                    </button>
                    <button
                      onClick={() => setCurrentStep((prev) => prev + 1)}
                      className="bg-sky-600 text-white font-bold py-3 px-4 rounded-lg text-sm"
                    >
                      NEXT
                    </button>
                  </div>
                </div>
              )}
              {currentStep === 3 && (
                <div className="w-2/3 flex flex-col gap-5 items-center justify-start">
                  <FormulationTitle>
                    High-Quality Formulations Meeting Industry Regulations
                  </FormulationTitle>
                  <div className="w-full flex flex-col bg-gradient-to-r from-cyan-400 to-sky-500 p-10 rounded-lg">
                    <div className="capitalize w-full text-white text-4xl pb-10 text-center">
                      Where your product will be sold?
                    </div>
                    <div className="w-full grid grid-cols-4 gap-5">
                      {countries.map((item, index) => (
                        <button
                          key={`countries__${index}`}
                          className={`h-16 btn text-slate-500 p-2 items-center justify-start border rounded-lg bg-white border-white hover:border-slate-500 cursor-pointer ${
                            index < 3 &&
                            'border-2 border-green-500 bg-green-100'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                    <div className="capitalize w-full text-white text-4xl p-4 pt-10 text-center">
                      Do you want to add a beauty standard?
                    </div>
                    <div className="w-full grid grid-cols-4 gap-5">
                      {standards.map((item, index) => (
                        <button
                          key={`standards__${index}`}
                          className={`h-16 btn text-slate-500 p-2 items-center justify-start border rounded-lg bg-white border-white hover:border-slate-500 cursor-pointer ${
                            index < 3 &&
                            'border-2 border-green-500 bg-green-100'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="w-full flex gap-5 items-center justify-between">
                    <button
                      onClick={() => {
                        setCurrentStep(2);
                      }}
                      className="bg-white text-slate-500 font-bold py-3 px-4 rounded-lg text-sm border"
                    >
                      BACK
                    </button>
                    <button
                      onClick={() => setCurrentStep((prev) => prev + 1)}
                      className="bg-sky-600 text-white font-bold py-3 px-4 rounded-lg text-sm"
                    >
                      NEXT
                    </button>
                  </div>
                </div>
              )}
              {currentStep === 4 && (
                <div className="w-2/3 flex flex-col gap-5 items-center justify-start">
                  <FormulationTitle>
                    how you’d like your formulation to perform?
                  </FormulationTitle>
                  <div className="w-full flex flex-col bg-gradient-to-r from-cyan-400 to-sky-500 p-10 rounded-lg">
                    <div className="w-full grid grid-cols-4 gap-5">
                      {performances.map((item, index) => (
                        <button
                          key={`performance__${index}`}
                          className={`h-16 btn p-2 text-slate-500  items-center justify-start border-2 rounded-lg bg-white border-white hover:border-slate-500 cursor-pointer ${
                            index < 3 &&
                            'border-2 border-green-500 bg-green-100'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="w-full flex gap-5 items-center justify-between">
                    <button
                      onClick={() => {
                        setCurrentStep(3);
                      }}
                      className="bg-white text-slate-500 font-bold py-3 px-4 rounded-lg text-sm border"
                    >
                      BACK
                    </button>
                    <button
                      onClick={() => setCurrentStep((prev) => prev + 1)}
                      className="bg-sky-600 text-white font-bold py-3 px-4 rounded-lg text-sm"
                    >
                      NEXT
                    </button>
                  </div>
                </div>
              )}
              {currentStep === 5 && (
                <div className="w-2/3 flex flex-col gap-5 items-center justify-start">
                  <FormulationTitle>
                    Define the fragrance you’re looking for.
                  </FormulationTitle>
                  <div className="w-full flex flex-col bg-gradient-to-r from-cyan-400 to-sky-500 p-10 rounded-lg h-full">
                    <div className="capitalize w-full text-white text-4xl pb-5 text-center">
                      what is your desired fragrance?
                    </div>
                    <div className="w-full flex flex-row gap-5 pb-8 justify-center items-center content-center">
                      {fragranceTypes.map((item, index) => (
                        <button
                          key={`fragTypes__${index}`}
                          className={` uppercase h-16 w-48 btn text-slate-500 p-2 items-center justify-start border rounded-lg bg-white border-white hover:border-slate-500 cursor-pointer ${
                            index === 1 &&
                            'border-2 border-green-500 bg-green-100'
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                    <div className="w-full flex flex-row gap-2">
                      <div className="w-1/6 flex flex-col content-center justify-center gap-2 rounded-lg bg-white bg-opacity-30 p-3">
                        <div className="uppercase  w-full text-white font-bold text-md text-center pb-5">
                          filter by category
                        </div>

                        {fragrances.map((item, index) => (
                          <button
                            key={`frag__${index}`}
                            className="h-8 btn uppercase text-xs items-center justify-start border rounded-lg bg-white border-white hover:border-slate-500 cursor-pointer"
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                      <div className="w-5/6 flex flex-col gap-2 p-4 rounded-lg bg-white bg-opacity-30">
                        <div className="uppercase w-full text-white font-bold text-md text-center py-3">
                          fragrance notes
                        </div>
                        <div className="w-full grid grid-cols-5 gap-2 justify-start items-start content-start ">
                          {fragrances
                            ?.filter(
                              (fragrance) =>
                                fragrance?.id ===
                                'http://fragrance.atelier.co/woody'
                            )?.[0]
                            .notes.map((item, index) => (
                              <button
                                key={`notes__${index}`}
                                className="text-xs text-slate-600 h-8 btn items-center justify-start border rounded-lg bg-white bg-opacity-30 border-white hover:border-slate-500 cursor-pointer"
                              >
                                {item.label}
                              </button>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex gap-5 items-center justify-between">
                    <button
                      onClick={() => {
                        setCurrentStep(4);
                      }}
                      className="bg-white text-slate-500 font-bold py-3 px-4 rounded-lg text-sm border"
                    >
                      BACK
                    </button>
                    <button
                      onClick={() => setCurrentStep((prev) => prev + 1)}
                      className="bg-sky-600 text-white font-bold py-3 px-4 rounded-lg text-sm"
                    >
                      NEXT
                    </button>
                  </div>
                </div>
              )}
              {currentStep === 6 && (
                <div className="w-2/3 flex flex-col gap-5 items-center justify-start">
                  <FormulationTitle>
                    cool! let’s choose a colour to shine your product!
                  </FormulationTitle>
                  <div className="w-full flex flex-col bg-gradient-to-r from-cyan-400 to-sky-500 p-10 rounded-lg h-full">
                    <div className="capitalize w-full text-white text-4xl pb-10 text-center">
                      Let's start selecting the colour type.
                    </div>
                    <div className="w-full flex flex-row gap-5 pb-10 justify-center items-center content-center">
                      {colorTypes.map((item, index) => (
                        <button
                          key={`colorTypes__${index}`}
                          className={`uppercase h-16 w-48 btn text-slate-500 p-2 items-center justify-start border rounded-lg bg-white border-white hover:border-slate-500 cursor-pointer ${
                            index === 0 &&
                            'border-2 border-green-500 bg-green-100'
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                    <div className="capitalize w-full text-white text-4xl pb-10 text-center">
                      what is your target colour?
                    </div>
                    <div className="w-full flex flex-row justify-center items-center content-center">
                      <div className="w-fit grid grid-cols-9 gap-2 justify-center">
                        {colourPallet.map((item, index) => (
                          <div
                            key={`colour__${index}`}
                            style={{
                              backgroundColor: item.hex,
                            }}
                            className="h-8 w-8 btn text-xs items-center justify-start border rounded-full bg-white border-white hover:border-slate-500 cursor-pointer"
                          ></div>
                        ))}
                      </div>
                      <div className="w-2/6 flex flex-col justify-center items-center gap-3">
                        <div
                          className="w-24 h-24 rounded-full border-2 border-white"
                          style={{
                            background: `${colourPallet[2]?.hex || ''}`,
                          }}
                        />
                        <p className="text-white uppercase">
                          {colourPallet[2]?.label || ''}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex gap-5 items-center justify-between">
                    <button
                      onClick={() => {
                        setCurrentStep(5);
                      }}
                      className="bg-white text-slate-500 font-bold py-3 px-4 rounded-lg text-sm border"
                    >
                      BACK
                    </button>
                    <button
                      onClick={() => setCurrentStep((prev) => prev + 1)}
                      className="bg-sky-600 text-white font-bold py-3 px-4 rounded-lg text-sm"
                    >
                      NEXT
                    </button>
                  </div>
                </div>
              )}
              {currentStep === 7 && (
                <div className="w-2/3 flex flex-col gap-5 items-center justify-start">
                  <FormulationTitle>
                    Select up to 5 call-out ingredients for your formulation.
                  </FormulationTitle>
                  <div className="w-full flex gap-5 items-center justify-between">
                    <button
                      onClick={() => {
                        setCurrentStep(6);
                      }}
                      className="bg-white text-slate-500 font-bold py-3 px-4 rounded-lg text-sm border"
                    >
                      BACK
                    </button>
                    <button
                      onClick={() => setCurrentStep((prev) => prev + 1)}
                      className="bg-sky-600 text-white font-bold py-3 px-4 rounded-lg text-sm"
                    >
                      NEXT
                    </button>
                  </div>
                </div>
              )}
              {currentStep === 8 && (
                <div className="w-2/3 flex flex-col gap-5 items-center justify-start">
                  <FormulationTitle>
                    Are there any other ingredients that you would like to
                    exclude from your formulation?
                  </FormulationTitle>
                  <div className="w-full flex gap-5 items-center justify-between">
                    <button
                      onClick={() => {
                        setCurrentStep(7);
                      }}
                      className="bg-white text-slate-500 font-bold py-3 px-4 rounded-lg text-sm border"
                    >
                      BACK
                    </button>
                    <button
                      onClick={() => setCurrentStep((prev) => prev + 1)}
                      className="bg-sky-600 text-white font-bold py-3 px-4 rounded-lg text-sm"
                    >
                      NEXT
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="col px-8 w-3/12 flex flex-col justify-start bg-gray-100 bg-opacity-2 overflow-y-auto ">
            <h1 className="flex justify-center p-6 py-10 text-2xl text-sky-500 uppercase font-bold">
              Formulation Overview
            </h1>
            <div className="flex flex-row gap-3 pb-5">
              <div className="flex flex-col w-1/2">
                <div className="block uppercase tracking-wide text-slate-500 text-md font-bold mb-2">
                  Brand
                </div>
                <div className="block uppercase tracking-wide text-slate-400 text-xs mb-2">
                  {mainObject.brandName}
                </div>
              </div>
              <div className="flex flex-col">
                <div className="block uppercase tracking-wide text-slate-500 text-md font-bold mb-2">
                  Product Name
                </div>
                <div className="block uppercase tracking-wide text-slate-400 text-xs mb-2">
                  {mainObject.productName}
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-3 pb-5">
              <div className="flex flex-col w-1/2">
                <div className="block uppercase tracking-wide text-slate-500 text-md font-bold mb-2">
                  Category
                </div>
                <div className="block uppercase tracking-wide text-slate-400 text-xs mb-2">
                  {mainObject.category.label}
                </div>
                <div className="block uppercase tracking-wide text-slate-500 text-md font-bold mb-2">
                  Sub-Category
                </div>
                <div className="block uppercase tracking-wide text-slate-400 text-xs mb-2">
                  {mainObject.subCategory.label}
                </div>
                <div className="block uppercase tracking-wide text-slate-500 text-md font-bold mb-2">
                  Volume
                </div>
                <div className="block uppercase tracking-wide text-slate-400 text-xs mb-2">
                  {mainObject.volume.label}
                </div>
              </div>
              <div className="flex flex-col">
                <div className="block uppercase tracking-wide text-slate-500 text-md font-bold mb-2">
                  Texture
                </div>
                <div className="uppercase tracking-wide text-slate-400 text-xs mb-2 flex flex-col gap-2">
                  <div className="w-full flex flex-col items-center justify-start border-2 rounded-lg border-white hover:border-sky-500 cursor-pointer">
                    <img
                      className="w-24 h-24 object-cover rounded-t"
                      src={mainObject.texture.image}
                    />
                    <p className="uppercase h-5 text-sky-500 text-center text-xs bg-white w-full rounded-b flex items-center justify-center">
                      {mainObject.texture.label}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="block uppercase tracking-wide text-slate-500 text-md font-bold mb-2 ">
              Finishes
            </div>
            <div className="flex flex-row gap-3 pb-5">
              <div className="flex flex-col w-1/2">
                <div className="block uppercase tracking-wide text-slate-500 text-xs font-bold mb-2">
                  Fragrances
                </div>
                <div className="uppercase tracking-wide text-slate-400 text-xs mb-2 flex flex-col gap-2">
                  {mainObject.samples[0].fragrances.map((item, index) => {
                    return (
                      <div key={`frag__${index}`} className="flex gap-2">
                        {item?.label}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-col">
                <div className="block uppercase tracking-wide text-slate-500 text-xs font-bold mb-2">
                  Colour
                </div>
                <div className="uppercase tracking-wide text-slate-400 text-xs mb-2 flex flex-row justify-center items-center gap-2">
                  <div
                    className={`w-4 h-4 border rounded`}
                    style={{
                      backgroundColor: mainObject.formulationColour.hex,
                    }}
                  ></div>
                  {mainObject.formulationColour.label}
                </div>
              </div>
            </div>

            <div className="block uppercase tracking-wide text-slate-500 text-md font-bold mb-2">
              Standards
            </div>
            <div className="flex flex-row gap-3 pb-5">
              <div className="flex flex-col w-1/2">
                <div className="block uppercase tracking-wide text-slate-500 text-xs font-bold mb-2">
                  Countries
                </div>
                <div className="uppercase tracking-wide text-slate-400 text-xs mb-2 pb-2 flex flex-col gap-2">
                  {mainObject.markets.map((market, index) => {
                    return (
                      <div key={`ovvMarkets__${index}`} className="flex gap-2">
                        {market.label}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-col">
                <div className="uppercase tracking-wide text-slate-500 text-xs font-bold mb-2 flex flex-col gap-2">
                  COSMETIC STANDARDS
                </div>
                <div className="block uppercase tracking-wide text-slate-400 text-xs mb-2">
                  {mainObject.standards.map((standard, index) => {
                    return (
                      <div key={`standards__${index}`} className="flex gap-2">
                        {standard.label}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="block uppercase tracking-wide text-slate-500 text-md font-bold mb-2">
              Performance & Ingredients
            </div>
            <div className="block uppercase tracking-wide text-slate-500 text-xs font-bold mb-2">
              Performance
            </div>
            <div className="block uppercase tracking-wide text-slate-400 text-xs mb-2">
              {mainObject.samples[0].performance.map((perform, index) => {
                return (
                  <div
                    key={`perf__${index}`}
                    className="uppercase tracking-wide text-slate-400 text-xs mb-2 flex flex-row items-center gap-3"
                  >
                    <div
                      className={`w-4 h-4 border rounded-full`}
                      style={{
                        backgroundColor: perform.color,
                      }}
                    ></div>
                    {perform.label}
                  </div>
                );
              })}
            </div>

            <div className="block uppercase tracking-wide text-slate-500 text-xs font-bold mb-2 pt-5">
              Ingredients
            </div>
            <div className="uppercase tracking-wide text-slate-400 text-xs mb-2 flex flex-col gap-2">
              {mainObject.samples[0].ingredients.map((item, index) => {
                return (
                  <div key={`ingri__${index}`} className="flex gap-2">
                    {item.label}
                  </div>
                );
              })}
            </div>
            <div className="block uppercase tracking-wide text-slate-500 text-xs font-bold mb-2 pt-5">
              Exclusions
            </div>
            <div className="uppercase tracking-wide text-slate-400 text-xs mb-2 flex flex-col gap-2">
              {mainObject.standards.length > 0 && (
                <div className="flex gap-2">
                  {mainObject.standards.map((standard, index) => {
                    return (
                      <div key={`std__${index}`} className="flex gap-2">
                        Exclusions from {standard.label}
                      </div>
                    );
                  })}
                </div>
              )}
              {mainObject.exclusions.map((item, index) => {
                return (
                  <div key={`exc__${index}`} className="flex gap-2">
                    {item?.label}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Components;
