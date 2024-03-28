import spiderplant from '../Assets/Plant-Items/Spiderplant.jpeg'
import Fiddleleaffig from './Plant-Items/Plant1.jpg'
import Peacelily from './Plant-Items/Plant2.jpg'
import Mint from './Plant-Items/Plant6.jpg'
import Aloevera from './Plant-Items/Plant7.jpg'
import bostonfern from './Plant-Items/Bostonfern.jpeg'
import rosemary from './Plant-Items/rosemary.png'
let all_product = [
  {
    id: 1,
    name: "Spider Plant",
    category: "null",
    image: spiderplant,
    new_price: 50.0,
    old_price: 80.5,
  },
  {
    id:2,
    name:"Fiddle Leaf Fig",
    category: "Aesthetic",
    image:Fiddleleaffig,
    new_price:150.00,
    old_price:80.50,
  },
  {id:3,
    name:"Peace Lily",
    category: "Aesthetic",
    image:Peacelily,
    new_price:120.00,
    old_price:120.50,
  },
  {id:4,
    name:"Mint",
    category: "Herb",
    image:Mint,
    new_price:80.00,
    old_price:100.50,
  },
  {id:5,
    name:"Aloe Vera",
    desc: "Discover the natural wonders of our fresh Aloe Vera plant, meticulously nurtured for optimal health and vitality. Renowned for its healing properties and air-purifying abilities, this versatile succulent is a must-have addition to any indoor garden or living space.",
    inst:["Sunlight: Place your Aloe Vera plant in a location with bright, indirect sunlight. A south- or west-facing window is ideal. While Aloe Vera enjoys sunlight, direct exposure to intense sunlight for extended periods may cause its leaves to turn brown or yellow.","Watering: Aloe Vera is a drought-tolerant plant and prefers dry conditions. Water your plant deeply but infrequently, allowing the soil to dry out completely between waterings. Overwatering can lead to root rot, so err on the side of underwatering rather than overwatering.", "Potting Soil: Use a well-draining potting mix specifically formulated for succulents or cacti. Aloe Vera plants thrive in sandy or gritty soil that allows excess moisture to drain away quickly."],
    category: "Medicinal",
    image:Aloevera,
    new_price:200.00,
    old_price:150.00,
  },
  {id:6,
    name:"Boston Fern",
    category: "Aesthetic",
    image:bostonfern,
    new_price:200.00,
    old_price:150.00,
  },
  {id:7,
    name:"Rosemary",
    category: "Herb",
    image:rosemary,
    new_price:200.00,
    old_price:150.00,
  },
  
];

export default all_product;
