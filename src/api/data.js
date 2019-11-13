import React from "react";
import UseIconsMilk from "../components/UseIconsMilk";
import UseIcons from "../components/UseIcons";

export const data = [
  {
    name: "Dairy Milk",
    id: 1,
    alt: [
      {
        name: "Soy Milk",
        id: 11,
        description:
          "Widely available and versatile. It can be used in sweet and savory dishes as well as coffee.",
        recipe: {
          title: "",
          text: ""
        },
        use: <UseIconsMilk raw coffee baking cooking />
      },
      {
        name: "Oat Milk",
        id: 12,
        description:
          "Great for breakfast cereals, baking and coffee. Oat Milk is healthy, cheap and easy to make at home, with only two ingredients.",
        recipe: {
          title: "Recipe",
          text:
            "1 part oats and 2 parts water. Optional: Add 1-2 dates for light sweetness. Blend, strain and store refridgerated for up to 4 days."
        },
        use: <UseIconsMilk raw coffee baking />
      },
      {
        name: "Almond Milk",
        id: 13,
        description:
          "Great for breakfast cereals, baking and coffee. Almond Milk has a mild nutty flavor, is healthy and easy to make at home, with only two ingredients.",
        recipe: {
          title: "Recipe",
          text:
            "1 part almonds and 2 parts water. Optional: Add 1-2 dates for light sweetness. Blend, strain and store refridgerated for up to 4 days."
        },
        use: <UseIconsMilk raw coffee baking />
      },
      {
        name: "Cashew Milk",
        id: 14,
        description:
          "Great for breakfast cereals, baking and coffee. Optional: Add 1-2 dates for light sweetness. Cashew Milk has a distinct nutty flavor, is healthy and easy to make at home, with only two ingredients.",
        recipe: {
          title: "Recipe",
          text:
            "1 part cashews and 2 parts water. Optional: Add 1-2 dates for light sweetness. Blend, strain and store refridgerated for up to 5 days."
        },
        use: <UseIconsMilk raw baking cooking />
      }
    ]
  },
  {
    name: "Egg",
    id: 2,
    alt: [
      {
        name: "Chia Egg",
        id: 21,
        description:
          "Raw egg(white) consistency, great for baking, very easy to make.",
        recipe: {
          title: "Recipe",
          text:
            "1 tbsp chia seeds, 2 tbsp water, let sit for 15minutes or until slimy."
        },
        use: <UseIcons raw baking />
      },
      {
        name: "Flax Egg",
        id: 22,
        description:
          "Raw egg(white) consistency, very easy to make and affordable.",
        recipe: {
          title: "Recipe",
          text:
            "1 tbsp ground fax seeds, 2 tbsp water, let sit for 15minutes or until slimy."
        },
        use: <UseIcons baking />
      },
      {
        name: "Aquafaba",
        id: 23,
        description: "Chickpea water that can be whipped like egg white.",
        recipe: {
          title: "Recipe",
          text: "Whisk with a handheld mixer until fluffy."
        },
        use: <UseIcons raw baking />
      },
      {
        name: "Chickpea Flour",
        id: 24,
        description:
          "A great way to replace egg in omelettes, quiche or tarte.",
        recipe: {
          title: "Recipe",
          text:
            "1 part chickpea flour, 2 parts nut milk or water. Mix well and add up to 4 parts vegetable stock, cook until thickened."
        },
        use: <UseIcons baking cooking />
      },
      {
        name: "Silken Tofu",
        id: 25,
        description: "A great way to replace egg in desserts, quiche or tarte.",
        recipe: {
          title: "Recipe",
          text: "Blend and thin out with water if needed."
        },
        use: <UseIcons raw baking cooking />
      }
    ]
  },
  {
    id: 3,
    name: "Butter",
    alt: [
      {
        name: "Margerine",
        id: 31,
        description:
          "Diary free margerines, made of sunflower or rapeseed oil for example, are great alternatives for cooking and baking.",
        recipe: {
          title: "",
          text: ""
        },
        use: <UseIcons raw baking cooking />
      },
      {
        name: "Vegan Butter",
        id: 32,
        description:
          "Vegan butter is a great alternative for raw uses - like on bread.",
        recipe: {
          title: "",
          text: ""
        },
        use: <UseIcons raw baking cooking />
      }
    ]
  },
  {
    id: 4,
    name: "Cream",
    alt: [
      {
        name: "Coconut Cream",
        id: 41,
        description:
          "Because of it's naturally high fat content, coconut cream is a great alternative for dairy cream or condensed milk. Serve with desserts or use for cooking.",
        recipe: {
          title: "Recipe",
          text:
            "Chill a can of full-fat coconut milk until firm. Pour away the liquid and whip the remains with a handheld mixer."
        },
        // use: ['raw', 'baking', 'cooking']
        use: <UseIcons raw baking cooking />
      }
    ]
  },
  {
    id: 5,
    name: "Buttermilk",
    alt: [
      {
        name: "Nut-Buttermilk",
        id: 51,
        description:
          "An easy to make, inexpensive and healthy alternative. Great for baking and sweet dishes like pancakes.",
        recipe: {
          title: "Recipe",
          text:
            "250mL of nut milk, 1 tbsp of apple cider vinegar or fresh lemon juice. Let sit for 15minutes, stirring occasionally."
        },
        use: <UseIcons raw baking cooking />
      }
    ]
  },
  {
    id: 6,
    name: "Cheese",
    alt: [
      {
        name: "Vegan Cheese",
        id: 61,
        description:
          "There is a wide variety of plant-based 'cheeses', sliced or shredded, that look, taste and melt like dairy.",
        recipe: {
          title: "",
          text: ""
        },
        use: <UseIcons raw cooking />
      }
    ]
  },
  {
    id: 7,
    name: "Gelatin",
    alt: [
      {
        name: "Agar Agar",
        id: 71,
        description:
          "Gained from algae, it has a neutral taste and the same thickening and binding properties as the bone-marrow substract gelatin. It is great for baking, jelly or candy making.",
        recipe: {
          title: "",
          text: "1 tsp gelatin = 1 teaspoon agar powder"
        },
        use: <UseIcons raw baking cooking />
      },
      {
        name: "Potatoe Starch",
        id: 72,
        description:
          "One of the most popular starch thickeners. Great for sauces, gravies, pie fillings, and puddings. Liquids thickened with potato starch should never be boiled because it will loose its power to thicken.",
        recipe: {
          title: "",
          text: ""
        },
        use: <UseIcons raw baking cooking />
      },
      {
        name: "Corn Starch",
        id: 73,
        description:
          "One of the most popular starch thickeners. Great for sauces, gravies, pie fillings, and puddings.",
        recipe: {
          title: "",
          text: ""
        },
        use: <UseIcons raw baking cooking />
      }
    ]
  },
  {
    id: 8,
    name: "Sour Cream",
    alt: [
      {
        name: "Cashew Sour Cream",
        id: 81,
        description: "A rich, hearty alternative - easily made and customized.",
        recipe: {
          title: "Recipe",
          text:
            "150g cashews, soaked for 2-3hours, 2 tbsp fresh lemon juice, 1 tsp apple cider vinegar, 1 tsp garlic powder and a dash of salt. Blend and store refridgerated."
        },
        use: <UseIcons raw cooking />
      }
    ]
  },
  {
    id: 9,
    name: "Bacon",
    alt: [
      {
        name: "Smoked Tofu Bacon",
        id: 91,
        description: "",
        recipe: {
          title: "Recipe",
          text:
            "1 block extra firm tofu, drained and patted dry. Slice thinly. Mix 1 cup soy sauce, 2 tablespoons tomato paste, 2 tbsp vegan Worcestershire sauce, 2 tbsp Maple Syrup, 2 tbsp Liquid Smoke, 2 cups water. Marinade the sliced tofu for at least 4 hours. Cook or bake until brown."
        },
        use: <UseIcons raw cooking />
      },
      {
        name: "Rice Paper Bacon",
        description: "",
        recipe: {
          title: "Recipe",
          text:
            "3 sheets rice paper, 1 tbsp soy sauce, 1/2 tbsp peanut oil, 1 tsp miso paste, 1 tsp mustard, 1 tsp smoked paprika, 1/2 tsp garlic powder, 1/2 tsp salt. Mix everything but the rice paper. Cut rice paper in stripes, quickly wet, pull through marinade and place on baking tray. Bake for 8-10minutes. "
        },
        use: <UseIcons raw cooking />
      }
    ]
  },
  {
    id: 10,
    name: "Scrambled Egg",
    alt: [
      {
        name: "Scrambled Tofu",
        id: 101,
        description: "",
        recipe: {
          title: "Recipe",
          text:
            "Crumble a block of firm or semi-firm tofu, add salt and pepper to taste and cumin for yellow color. Optional: add black salt for eggy taste. Cook in pan for 5-10minutes."
        },
        use: <UseIcons cooking />
      }
    ]
  },
  {
    id: 11,
    name: "Yoghurt",
    alt: [
      {
        name: "Soy Yoghurt",
        id: 111,
        description:
          "Widely available and versatile, un-flavoured or natural options often have a distinct soy-flavour.",
        recipe: {
          title: "",
          text: ""
        },
        use: <UseIcons raw baking />
      },
      {
        name: "Coconut Yoghurt",
        id: 112,
        description:
          "Rich and creamy thanks to the coconut's high fat content. Very similiar to dairy in texture.",
        recipe: {
          title: "",
          text: ""
        },
        use: <UseIcons raw baking cooking />
      },
      {
        name: "Almond Yoghurt",
        id: 113,
        description: "A great option for breakfasts and sweet dishes.",
        recipe: {
          title: "",
          text: ""
        },
        use: <UseIcons raw baking />
      }
    ]
  },
  {
    id: 12,
    name: "Mayonnaise",
    alt: [
      {
        name: "Vegan Mayonnaise",
        id: 121,
        description:
          "There are many egg-free alternatives to conventional mayonnaise.",
        recipe: {
          title: "",
          text: ""
        },
        use: <UseIcons raw />
      }
    ]
  },
  {
    id: 13,
    name: "Chicken Stock",
    alt: [
      {
        name: "Vegetable Stock",
        id: 131,
        description: "A simple replacement that will work great.",
        recipe: {
          title: "",
          text: ""
        },
        use: <UseIcons cooking />
      }
    ]
  },
  {
    id: 14,
    name: "Beef Stock",
    alt: [
      {
        name: "Vegetable Stock",
        id: 131,
        description: "A simple replacement that will work great.",
        recipe: {
          title: "",
          text: ""
        },
        use: <UseIcons cooking />
      }
    ]
  },
  {
    id: 15,
    name: "Condensed Milk",
    alt: [
      {
        name: "Coconut Cream",
        id: 41,
        description: "An easy diy",
        recipe: {
          title: "Recipe",
          text:
            "Bring the coconut milk to a boil, then let simmer for abut 40 minutes or until the milk has reduced by half. "
        },
        use: <UseIcons raw baking cooking />
      }
    ]
  },
  {
    id: 16,
    name: "Worcestershire Sauce",
    alt: [
      {
        name: "Vegan Worcestershire Sauce",
        id: 161,
        description: "Choose storebought alternatives or make your own.",
        recipe: {
          title: "Recipe",
          text:
            "2 cups apple cider vinegar, 1/2 cup soy sauce, 1/4 cup brown sugar, 1 tsp ground ginger, 1 tsp ground mustard, 1 tsp onion powder, 1 clove garlic (crushed), 1/2 tsp cinnamon, 1/2 tsp black pepper. Mix and bring to a boil. Simmer for 20minutes. Strain and let cool."
        },
        use: <UseIcons raw cooking />
      }
    ]
  },
  {
    id: 17,
    name: "Parmesan",
    alt: [
      {
        name: "Cashew Parmesan",
        id: 171,
        description:
          "Especially great for raw use, on pasta, salad dishes or even pizza.",
        recipe: {
          title: "Recipe",
          text:
            "3/4 cup raw cashews, 3 tbsp nutritional yeast, 3/4 tsp sea salt, 1/4 tsp garlic powder. Blend / pulse until fine meal consistency is achieved."
        },
        use: <UseIcons raw cooking />
      }
    ]
  },
  {
    id: 18,
    name: "Cream Cheese",
    alt: [
      {
        name: "Cashew Cream Cheese",
        id: 181,
        description: "Great dip or topping for bread or bagels.",
        recipe: {
          title: "Recipe",
          text:
            "1 cup raw cashews (soaked in water 4-8 hours, drained and rinsed), 1-2 tbsp lemon juice, 1/2 tsp salt. Blend until smooth. Optional: Add stir-ins of choice (chives, roasted garlic, veggies, strawberries, sun-dried tomatoes, or roasted red peppers)."
        },
        use: <UseIcons raw cooking />
      }
    ]
  },
  {
    id: 19,
    name: "Milk Chocolate",
    alt: [
      {
        name: "Dark Chocolate",
        id: 191,
        description:
          "Many dark chocolates are dairy-free. Check the ingredients list.",
        recipe: {
          title: "",
          text: ""
        },
        use: <UseIcons raw baking />
      },
      {
        name: "Nut Milk Chocolate",
        id: 192,
        description: "",
        recipe: {
          title: "",
          text: ""
        },
        use: <UseIcons raw baking />
      }
    ]
  },
  {
    id: 20,
    name: "Honey",
    alt: [
      {
        name: "Maple Syrup",
        id: 201,
        description: "",
        recipe: {
          title: "",
          text: ""
        },
        use: <UseIcons raw baking cooking />
      },
      {
        name: "Agave Syrup",
        id: 202,
        description: "",
        recipe: {
          title: "",
          text: ""
        },
        use: <UseIcons raw baking cooking />
      },
      {
        name: "Raw Brown Sugar",
        id: 203,
        description: "",
        recipe: {
          title: "",
          text: ""
        },
        use: <UseIcons raw baking cooking />
      }
    ]
  },
  {
    id: 21,
    name: "Sugar",
    alt: [
      {
        name: "Maple Syrup",
        id: 201,
        description: "",
        recipe: {
          title: "",
          text: ""
        },
        use: <UseIcons raw baking cooking />
      },
      {
        name: "Agave Syrup",
        id: 202,
        description: "",
        recipe: {
          title: "",
          text: ""
        },
        use: <UseIcons raw baking cooking />
      },
      {
        name: "Raw Brown Sugar",
        id: 203,
        description: "",
        recipe: {
          title: "",
          text: ""
        },
        use: <UseIcons raw baking cooking />
      }
    ]
  },
  {
    id: 22,
    name: "Pulled Pork",
    alt: [
      {
        name: "Pulled Jackfruit",
        id: 221,
        description:
          "Looks, smells and tastes amazingly similar. Either buy a marinated jackfruit or marinate it yourself.",
        recipe: {
          title: "Recipe",
          text:
            "1 can jackfruit, rinsed dried, sorted. 1 pinch sea salt and black pepper, 1 tbsp avocado oil, 1/4 cup diced red or white onion, 2 cloves garlic (minced), 1/2 cup vegetable stock, 1/2 cup cashew milk, 1 tsp maple syrup, 1 tbsp lime juice, 1/2 tsp sea salt, 1/2 tbsp tamari, 1/2 tsp smoked paprika. Blend and add jackfruit, stir to coat. Let sit for 10minutes and cook for ca. 5min."
        },
        use: <UseIcons cooking />
      }
    ]
  },
  {
    id: 23,
    name: "Pulled Chicken",
    alt: [
      {
        name: "Pulled Jackfruit",
        id: 221,
        description:
          "Looks, smells and tastes amazingly similar. Either buy a marinated jackfruit or marinate it yourself.",
        recipe: {
          title: "Recipe",
          text:
            "1 can jackfruit, rinsed dried, sorted. 1 pinch sea salt and black pepper, 1 tbsp avocado oil, 1/4 cup diced red or white onion, 2 cloves garlic (minced), 1/2 cup vegetable stock, 1/2 cup cashew milk, 1 tsp maple syrup, 1 tbsp lime juice, 1/2 tsp sea salt, 1/2 tbsp tamari, 1/2 tsp smoked paprika. Blend and add jackfruit, stir to coat. Let sit for 10minutes and cook for ca. 5min."
        },
        use: <UseIcons cooking />
      }
    ]
  },
  {
    id: 24,
    name: "Salmon",
    alt: [
      {
        name: "Marinated Carrot",
        id: 241,
        description: "",
        recipe: {
          title: "",
          text: ""
        },
        use: <UseIcons raw cooking />
      },
      {
        name: "Vegan Lox",
        id: 242,
        description: "",
        recipe: {
          title: "",
          text: ""
        },
        use: <UseIcons raw cooking />
      }
    ]
  },
  {
    id: 25,
    name: "Ground Beef",
    alt: [
      {
        name: "Minced Tofu",
        id: 251,
        description: "",
        recipe: {
          title: "",
          text: ""
        },
        use: <UseIcons cooking />
      }
    ]
  },
  {
    id: 26,
    name: "Gummibears",
    alt: [
      {
        name: "Vegan Gummibears",
        id: 261,
        description: "",
        recipe: {
          title: "",
          text: ""
        },
        use: <UseIcons raw />
      }
    ]
  }
];
