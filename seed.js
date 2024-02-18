const mongoose = require('mongoose');
const Product = require('./models/Product.js');

connectDB(`mongodb+srv://malay4singh:DLmtMbBjtXbk0SKw@e-commerce.zdizx0e.mongodb.net/?retryWrites=true&w=majority`);

createProduct(
        [
                {
                "title": "Smartphone",
                "price": 15000,
                "category": "Electronics",
                "desc": "A high-performance smartphone with advanced features.",
                "image": ""
                },
                {
                "title": "Laptop",
                "price": 50000,
                "category": "Electronics",
                "desc": "Powerful laptop with a sleek design, perfect for work or entertainment.",
                "image": ""
                },
                {
                "title": "Headphones",
                "price": 2500,
                "category": "Electronics",
                "desc": "High-quality headphones for an immersive audio experience.",
                "image": ""
                },
                {
                "title": "Smartwatch",
                "price": 10000,
                "category": "Electronics",
                "desc": "Stay connected with this stylish and functional smartwatch.",
                "image": ""
                },
                {
                "title": "Tablet",
                "price": 20000,
                "category": "Electronics",
                "desc": "Portable tablet for work and entertainment on the go.",
                "image": ""
                },
                {
                "title": "Camera",
                "price": 30000,
                "category": "Electronics",
                "desc": "Capture memories with stunning clarity with this high-quality camera.",
                "image": ""
                },
                {
                "title": "Gaming Console",
                "price": 35000,
                "category": "Electronics",
                "desc": "Experience immersive gaming with the latest gaming console.",
                "image": ""
                },
                {
                "title": "Wireless Speaker",
                "price": 5000,
                "category": "Electronics",
                "desc": "Enjoy wireless music streaming with this compact and powerful speaker.",
                "image": ""
                },
                {
                "title": "External Hard Drive",
                "price": 4000,
                "category": "Electronics",
                "desc": "Expand your storage capacity with this reliable external hard drive.",
                "image": ""
                },
                {
                "title": "Wireless Earbuds",
                "price": 3000,
                "category": "Electronics",
                "desc": "Enjoy hassle-free music listening with these wireless earbuds.",
                "image": ""
                },
                {
                "title": "T-Shirt",
                "price": 500,
                "category": "Clothing",
                "desc": "Comfortable and stylish t-shirt for everyday wear.",
                "image": ""
                },
                {
                "title": "Jeans",
                "price": 1500,
                "category": "Clothing",
                "desc": "Classic jeans made from durable denim.",
                "image": ""
                },
                {
                "title": "Dress",
                "price": 3000,
                "category": "Clothing",
                "desc": "Elegant dress for special occasions.",
                "image": ""
                },
                {
                "title": "Sweatshirt",
                "price": 2000,
                "category": "Clothing",
                "desc": "Stay warm and stylish with this cozy sweatshirt.",
                "image": ""
                },
                {
                "title": "Jacket",
                "price": 4000,
                "category": "Clothing",
                "desc": "Durable jacket suitable for outdoor adventures.",
                "image": ""
                },
                {
                "title": "Skirt",
                "price": 1500,
                "category": "Clothing",
                "desc": "Flattering skirt for a feminine look.",
                "image": ""
                },
                {
                "title": "Formal Shirt",
                "price": 1000,
                "category": "Clothing",
                "desc": "Classic formal shirt for professional attire.",
                "image": ""
                },
                {
                "title": "Sneakers",
                "price": 2500,
                "category": "Clothing",
                "desc": "Stylish and comfortable sneakers for everyday wear.",
                "image": ""
                },
                {
                "title": "Socks",
                "price": 200,
                "category": "Clothing",
                "desc": "Soft and breathable socks for all-day comfort.",
                "image": ""
                },
                {
                "title": "Swimwear",
                "price": 1500,
                "category": "Clothing",
                "desc": "Fashionable swimwear for your next beach vacation.",
                "image": ""
                },
                {
                "title": "Fiction Book",
                "price": 600,
                "category": "Books",
                "desc": "Engaging fiction book that will keep you hooked till the end.",
                "image": ""
                },
                {
                "title": "Programming Book",
                "price": 1200,
                "category": "Books",
                "desc": "Comprehensive guide to programming concepts and techniques.",
                "image": ""
                },
                {
                "title": "Self-Help Book",
                "price": 800,
                "category": "Books",
                "desc": "Inspiring self-help book to improve your personal development.",
                "image": ""
                },
                {
                "title": "Cookbook",
                "price": 1000,
                "category": "Books",
                "desc": "Delicious recipes for every occasion in this cookbook.",
                "image": ""
                },
                {
                "title": "Biography",
                "price": 900,
                "category": "Books",
                "desc": "Inspiring biography of a notable figure.",
                "image": ""
                },
                {
                "title": "Travel Guide",
                "price": 700,
                "category": "Books",
                "desc": "Plan your next adventure with this comprehensive travel guide.",
                "image": ""
                },
                {
                "title": "Art Book",
                "price": 1500,
                "category": "Books",
                "desc": "Explore the world of art with this beautifully illustrated book.",
                "image": ""
                },
                {
                "title": "History Book",
                "price": 1100,
                "category": "Books",
                "desc": "Fascinating journey through historical events and figures.",
                "image": ""
                },
                {
                "title": "Science Book",
                "price": 1300,
                "category": "Books",
                "desc": "Discover the wonders of science with this informative book.",
                "image": ""
                },
                {
                "title": "Poetry Book",
                "price": 500,
                "category": "Books",
                "desc": "Collection of beautiful poems to stir your emotions.",
                "image": ""
                },
                {
                "title": "Refrigerator",
                "price": 30000,
                "category": "Home Appliances",
                "desc": "Keep your food fresh and cool with this spacious refrigerator.",
                "image": ""
                },
                {
                "title": "Washing Machine",
                "price": 20000,
                "category": "Home Appliances",
                "desc": "Efficient washing machine for hassle-free laundry.",
                "image": ""
                },
                {
                "title": "Microwave Oven",
                "price": 8000,
                "category": "Home Appliances",
                "desc": "Versatile microwave oven for quick and easy cooking.",
                "image": ""
                },
                {
                "title": "Air Conditioner",
                "price": 35000,
                "category": "Home Appliances",
                "desc": "Stay cool and comfortable with this powerful air conditioner.",
                "image": ""
                },
                {
                "title": "Vacuum Cleaner",
                "price": 5000,
                "category": "Home Appliances",
                "desc": "Efficient vacuum cleaner for a spotless home.",
                "image": ""
                },
                {
                "title": "Water Purifier",
                "price": 10000,
                "category": "Home Appliances",
                "desc": "Ensure clean and safe drinking water with this water purifier.",
                "image": ""
                },
                {
                "title": "Toaster",
                "price": 1500,
                "category": "Home Appliances",
                "desc": "Start your day with perfectly toasted bread using this toaster.",
                "image": ""
                },
                {
                "title": "Electric Kettle",
                "price": 1000,
                "category": "Home Appliances",
                "desc": "Boil water quickly and easily with this electric kettle.",
                "image": ""
                },
                {
                "title": "Juicer Mixer Grinder",
                "price": 3000,
                "category": "Home Appliances",
                "desc": "Multi-functional appliance for all your juicing and grinding needs.",
                "image": ""
                },
                {
                "title": "Rice Cooker",
                "price": 2000,
                "category": "Home Appliances",
                "desc": "Cook perfect rice every time with this convenient rice cooker.",
                "image": ""
                },
                {
                "title": "Board Game",
                "price": 1000,
                "category": "Toys & Games",
                "desc": "Gather your friends and family for hours of fun with this classic board game.",
                "image": ""
                },
                {
                "title": "LEGO Set",
                "price": 2000,
                "category": "Toys & Games",
                "desc": "Unleash your creativity with this exciting LEGO set.",
                "image": ""
                },
                {
                "title": "Puzzle",
                "price": 500,
                "category": "Toys & Games",
                "desc": "Challenge your mind with this engaging puzzle.",
                "image": ""
                },
                {
                "title": "Action Figure",
                "price": 300,
                "category": "Toys & Games",
                "desc": "Collectible action figure of your favorite character.",
                "image": ""
                },
                {
                "title": "Doll",
                "price": 400,
                "category": "Toys & Games",
                "desc": "Adorable doll for imaginative play.",
                "image": ""
                },
                {
                "title": "Remote Control Car",
                "price": 1500,
                "category": "Toys & Games",
                "desc": "Race around with this exciting remote control car.",
                "image": ""
                },
                {
                "title": "Soft Toy",
                "price": 300,
                "category": "Toys & Games",
                "desc": "Cute and cuddly soft toy for children of all ages.",
                "image": ""
                },
                {
                "title": "Building Blocks",
                "price": 800,
                "category": "Toys & Games",
                "desc": "Colorful building blocks for creative play.",
                "image": ""
                },
                {
                "title": "Toy Kitchen Set",
                "price": 1000,
                "category": "Toys & Games",
                "desc": "Let your child's imagination run wild with this toy kitchen set.",
                "image": ""
                },
                {
                "title": "Toy Train Set",
                "price": 1200,
                "category": "Toys & Games",
                "desc": "Choo choo! All aboard the fun train with this toy train set.",
                "image": ""
                },
                {
                "title": "Football",
                "price": 1000,
                "category": "Sports & Outdoors",
                "desc": "Classic football for a game with friends.",
                "image": ""
                },
                {
                "title": "Basketball",
                "price": 800,
                "category": "Sports & Outdoors",
                "desc": "Shoot hoops and improve your skills with this basketball.",
                "image": ""
                },
                {
                "title": "Yoga Mat",
                "price": 500,
                "category": "Sports & Outdoors",
                "desc": "Stay fit and healthy with this comfortable yoga mat.",
                "image": ""
                },
                {
                "title": "Tennis Racket",
                "price": 1500,
                "category": "Sports & Outdoors",
                "desc": "Hit the court and play tennis with this high-quality racket.",
                "image": ""
                },
                {
                "title": "Bicycle",
                "price": 5000,
                "category": "Sports & Outdoors",
                "desc": "Explore the outdoors and stay active with this durable bicycle.",
                "image": ""
                },
                {
                "title": "Hiking Backpack",
                "price": 2000,
                "category": "Sports & Outdoors",
                "desc": "Pack your essentials and hit the trails with this spacious hiking backpack.",
                "image": ""
                },
                {
                "title": "Camping Tent",
                "price": 3000,
                "category": "Sports & Outdoors",
                "desc": "Enjoy the great outdoors with this sturdy and easy-to-set-up camping tent.",
                "image": ""
                },
                {
                "title": "Fishing Rod",
                "price": 1200,
                "category": "Sports & Outdoors",
                "desc": "Cast your line and reel in the big catch with this fishing rod.",
                "image": ""
                },
                {
                "title": "Soccer Cleats",
                "price": 2000,
                "category": "Sports & Outdoors",
                "desc": "Dominate the field with these comfortable and durable soccer cleats.",
                "image": ""
                },
                {
                "title": "Swimming Goggles",
                "price": 400,
                "category": "Sports & Outdoors",
                "desc": "Protect your eyes while swimming with these high-quality goggles.",
                "image": ""
                },
                {
                "title": "Face Cream",
                "price": 800,
                "category": "Beauty & Health",
                "desc": "Hydrate and nourish your skin with this luxurious face cream.",
                "image": ""
                },
                {
                "title": "Shampoo",
                "price": 300,
                "category": "Beauty & Health",
                "desc": "Keep your hair clean and healthy with this refreshing shampoo.",
                "image": ""
                },
                {
                "title": "Conditioner",
                "price": 400,
                "category": "Beauty & Health",
                "desc": "Restore shine and softness to your hair with this moisturizing conditioner.",
                "image": ""
                },
                {
                "title": "Lipstick",
                "price": 500,
                "category": "Beauty & Health",
                "desc": "Add a pop of color to your lips with this long-lasting lipstick.",
                "image": ""
                },
                {
                "title": "Perfume",
                "price": 1500,
                "category": "Beauty & Health",
                "desc": "Stay fresh and fragrant all day with this captivating perfume.",
                "image": ""
                },
                {
                "title": "Sunscreen",
                "price": 600,
                "category": "Beauty & Health",
                "desc": "Protect your skin from harmful UV rays with this effective sunscreen.",
                "image": ""
                },
                {
                "title": "Face Mask",
                "price": 200,
                "category": "Beauty & Health",
                "desc": "Revitalize your skin with this nourishing face mask.",
                "image": ""
                },
                {
                "title": "Body Lotion",
                "price": 400,
                "category": "Beauty & Health",
                "desc": "Keep your skin soft and moisturized with this hydrating body lotion.",
                "image": ""
                },
                {
                "title": "Hair Brush",
                "price": 200,
                "category": "Beauty & Health",
                "desc": "Detangle and style your hair effortlessly with this versatile hair brush.",
                "image": ""
                },
                {
                "title": "Nail Polish",
                "price": 300,
                "category": "Beauty & Health",
                "desc": "Add a pop of color to your nails with this vibrant nail polish.",
                "image": ""
                },
                {
                "title": "Cookware Set",
                "price": 3000,
                "category": "Kitchen & Dining",
                "desc": "Upgrade your kitchen with this high-quality cookware set.",
                "image": ""
                },
                {
                "title": "Dinnerware Set",
                "price": 2000,
                "category": "Kitchen & Dining",
                "desc": "Elevate your dining experience with this elegant dinnerware set.",
                "image": ""
                },
                {
                "title": "Cutlery Set",
                "price": 1500,
                "category": "Kitchen & Dining",
                "desc": "Complete your table setting with this stylish cutlery set.",
                "image": ""
                },
                {
                "title": "Blender",
                "price": 2500,
                "category": "Kitchen & Dining",
                "desc": "Blend smoothies and soups with ease using this powerful blender.",
                "image": ""
                },
                {
                "title": "Coffee Maker",
                "price": 2000,
                "category": "Kitchen & Dining",
                "desc": "Start your day right with a cup of freshly brewed coffee from this coffee maker.",
                "image": ""
                },
                {
                "title": "Teapot",
                "price": 1000,
                "category": "Kitchen & Dining",
                "desc": "Brew the perfect cup of tea with this classic teapot.",
                "image": ""
                },
                {
                "title": "Cutting Board",
                "price": 300,
                "category": "Kitchen & Dining",
                "desc": "Prepare ingredients with ease on this durable cutting board.",
                "image": ""
                },
                {
                "title": "Dish Rack",
                "price": 500,
                "category": "Kitchen & Dining",
                "desc": "Keep your kitchen organized with this convenient dish rack.",
                "image": ""
                },
                {
                "title": "Food Storage Containers",
                "price": 800,
                "category": "Kitchen & Dining",
                "desc": "Store leftovers and ingredients in these airtight food storage containers.",
                "image": ""
                },
                {
                "title": "Salt and Pepper Shakers",
                "price": 200,
                "category": "Kitchen & Dining",
                "desc": "Add flavor to your meals with these stylish salt and pepper shakers.",
                "image": ""
                },
                {
                "title": "Sofa",
                "price": 25000,
                "category": "Furniture",
                "desc": "Relax in style with this comfortable and elegant sofa.",
                "image": ""
                },
                {
                "title": "Dining Table",
                "price": 15000,
                "category": "Furniture",
                "desc": "Gather your family and friends for meals around this spacious dining table.",
                "image": ""
                },
                {
                "title": "Bed",
                "price": 30000,
                "category": "Furniture",
                "desc": "Get a good night's sleep on this luxurious and sturdy bed.",
                "image": ""
                },
                {
                "title": "Wardrobe",
                "price": 20000,
                "category": "Furniture",
                "desc": "Organize your clothes and accessories with this spacious wardrobe.",
                "image": ""
                },
                {
                "title": "Coffee Table",
                "price": 8000,
                "category": "Furniture",
                "desc": "Complete your living room setup with this stylish coffee table.",
                "image": ""
                },
                {
                "title": "Bookshelf",
                "price": 10000,
                "category": "Furniture",
                "desc": "Display your book collection with pride on this sturdy bookshelf.",
                "image": ""
                },
                {
                "title": "Desk",
                "price": 12000,
                "category": "Furniture",
                "desc": "Create a productive workspace with this spacious and functional desk.",
                "image": ""
                },
                {
                "title": "Cabinet",
                "price": 15000,
                "category": "Furniture",
                "desc": "Store your belongings neatly in this stylish and versatile cabinet.",
                "image": ""
                },
                {
                "title": "Side Table",
                "price": 5000,
                "category": "Furniture",
                "desc": "Add functionality and style to your living space with this sleek side table.",
                "image": ""
                },
                {
                "title": "TV Stand",
                "price": 10000,
                "category": "Furniture",
                "desc": "Display your TV and media devices on this modern TV stand.",
                "image": ""
                },
                {
                "title": "Car",
                "price": 800000,
                "category": "Automotive",
                "desc": "Get behind the wheel of this sleek and powerful car.",
                "image": ""
                },
                {
                "title": "Motorcycle",
                "price": 150000,
                "category": "Automotive",
                "desc": "Hit the road with this stylish and agile motorcycle.",
                "image": ""
                },
                {
                "title": "Bicycle",
                "price": 10000,
                "category": "Automotive",
                "desc": "Enjoy eco-friendly transportation with this reliable bicycle.",
                "image": ""
                },
                {
                "title": "Scooter",
                "price": 60000,
                "category": "Automotive",
                "desc": "Navigate city streets with ease on this convenient scooter.",
                "image": ""
                },
                {
                "title": "Truck",
                "price": 1500000,
                "category": "Automotive",
                "desc": "Transport goods with efficiency and power in this sturdy truck.",
                "image": ""
                },
                {
                "title": "RV",
                "price": 2000000,
                "category": "Automotive",
                "desc": "Embark on epic road trips and adventures in this spacious RV.",
                "image": ""
                },
                {
                "title": "ATV",
                "price": 300000,
                "category": "Automotive",
                "desc": "Conquer off-road terrain with this rugged and versatile ATV.",
                "image": ""
                },
                {
                "title": "Electric Car",
                "price": 1200000,
                "category": "Automotive",
                "desc": "Go green with this environmentally-friendly electric car.",
                "image": ""
                },
                {
                "title": "Golf Cart",
                "price": 200000,
                "category": "Automotive",
                "desc": "Navigate the golf course in style with this sleek golf cart.",
                "image": ""
                },
                {
                "title": "Jet Ski",
                "price": 500000,
                "category": "Automotive",
                "desc": "Zoom across the water with speed and agility on this thrilling jet ski.",
                "image": ""
                },
                {
                "title": "Dog Food",
                "price": 800,
                "category": "Pets",
                "desc": "Nutritious dog food for your furry friend's health and happiness.",
                "image": ""
                },
                {
                "title": "Cat Food",
                "price": 600,
                "category": "Pets",
                "desc": "Delicious cat food to keep your feline friend satisfied and healthy.",
                "image": ""
                },
                {
                "title": "Fish Tank",
                "price": 2000,
                "category": "Pets",
                "desc": "Create a beautiful underwater habitat for your pet fish with this fish tank.",
                "image": ""
                },
                {
                "title": "Bird Cage",
                "price": 1500,
                "category": "Pets",
                "desc": "Provide a comfortable home for your pet bird with this spacious bird cage.",
                "image": ""
                },
                {
                "title": "Rabbit Hutch",
                "price": 2500,
                "category": "Pets",
                "desc": "Give your pet rabbit plenty of space to roam with this sturdy rabbit hutch.",
                "image": ""
                },
                {
                "title": "Hamster Cage",
                "price": 1000,
                "category": "Pets",
                "desc": "Create a cozy home for your pet hamster with this compact hamster cage.",
                "image": ""
                },
                {
                "title": "Reptile Tank",
                "price": 3000,
                "category": "Pets",
                "desc": "Set up the perfect habitat for your pet reptile with this spacious tank.",
                "image": ""
                },
                {
                "title": "Guinea Pig Cage",
                "price": 2000,
                "category": "Pets",
                "desc": "Give your pet guinea pig a comfortable and safe home with this cage.",
                "image": ""
                },
                {
                "title": "Turtle Tank",
                "price": 4000,
                "category": "Pets",
                "desc": "Create an aquatic paradise for your pet turtle with this tank.",
                "image": ""
                },
                {
                "title": "Horse Feed",
                "price": 1000,
                "category": "Pets",
                "desc": "Provide your majestic steed with nutritious and delicious horse feed.",
                "image": ""
                },
                {
                "title": "Notebook",
                "price": 100,
                "category": "Office Supplies",
                "desc": "Jot down notes and ideas in this handy notebook.",
                "image": ""
                },
                {
                "title": "Pen Set",
                "price": 50,
                "category": "Office Supplies",
                "desc": "Write in style with this sleek and comfortable pen set.",
                "image": ""
                },
                {
                "title": "Stapler",
                "price": 200,
                "category": "Office Supplies",
                "desc": "Keep your documents organized with this reliable stapler.",
                "image": ""
                },
                {
                "title": "Paper Clips",
                "price": 20,
                "category": "Office Supplies",
                "desc": "Secure your papers together with these sturdy paper clips.",
                "image": ""
                },
                {
                "title": "File Organizer",
                "price": 300,
                "category": "Office Supplies",
                "desc": "Keep your desk clutter-free with this convenient file organizer.",
                "image": ""
                },
                {
                "title": "Whiteboard",
                "price": 1000,
                "category": "Office Supplies",
                "desc": "Brainstorm and collaborate with ease using this versatile whiteboard.",
                "image": ""
                },
                {
                "title": "Desk Lamp",
                "price": 500,
                "category": "Office Supplies",
                "desc": "Illuminate your workspace with this adjustable desk lamp.",
                "image": ""
                },
                {
                "title": "Calculator",
                "price": 300,
                "category": "Office Supplies",
                "desc": "Make quick calculations with this easy-to-use calculator.",
                "image": ""
                },
                {
                "title": "Filing Cabinet",
                "price": 1500,
                "category": "Office Supplies",
                "desc": "Organize your documents and files with this spacious filing cabinet.",
                "image": ""
                },
                {
                "title": "Binder Clips",
                "price": 30,
                "category": "Office Supplies",
                "desc": "Secure large stacks of paper with these durable binder clips.",
                "image": ""
                }
        ]
)

async function connectDB(url){
        await mongoose.connect(url);
        console.log('Database Connected');
}

async function createProduct(product){
        await Product.deleteMany({});
        await Product.create(product);
        console.log("Data added Successfully");
}