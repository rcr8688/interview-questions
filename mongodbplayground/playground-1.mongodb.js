/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/
// Select the database to use.
use("mongodbVSCodePlaygroundDB");

// // Insert a few documents into the sales collection.
// db.getCollection('sales').insertMany([
//   { 'item': 'abc', 'price': 10, 'quantity': 2, 'date': new Date('2014-03-01T08:00:00Z') },
//   { 'item': 'jkl', 'price': 20, 'quantity': 1, 'date': new Date('2014-03-01T09:00:00Z') },
//   { 'item': 'xyz', 'price': 5, 'quantity': 10, 'date': new Date('2014-03-15T09:00:00Z') },
//   { 'item': 'xyz', 'price': 5, 'quantity': 20, 'date': new Date('2014-04-04T11:21:39.736Z') },
//   { 'item': 'abc', 'price': 10, 'quantity': 10, 'date': new Date('2014-04-04T21:23:13.331Z') },
//   { 'item': 'def', 'price': 7.5, 'quantity': 5, 'date': new Date('2015-06-04T05:08:13Z') },
//   { 'item': 'def', 'price': 7.5, 'quantity': 10, 'date': new Date('2015-09-10T08:43:00Z') },
//   { 'item': 'abc', 'price': 10, 'quantity': 5, 'date': new Date('2016-02-06T20:20:13Z') },
// ]);

// // Run a find command to view items sold on April 4th, 2014.
// const salesOnApril4th = db.getCollection('sales').find({
//   date: { $gte: new Date('2014-04-04'), $lt: new Date('2014-04-05') }
// }).count();

// // Print a message to the output window.
// console.log(`${salesOnApril4th} sales occurred in 2014.`);

// // Here we run an aggregation and open a cursor to the results.
// // Use '.toArray()' to exhaust the cursor to return the whole result set.
// // You can use '.hasNext()/.next()' to iterate through the cursor page by page.
// db.getCollection('sales').aggregate([
//   // Find all of the sales that occurred in 2014.
//   { $match: { date: { $gte: new Date('2014-01-01'), $lt: new Date('2015-01-01') } } },
//   // Group the total sales for each product.
//   { $group: { _id: '$item', totalSaleAmount: { $sum: { $multiply: [ '$price', '$quantity' ] } } } }
// ]);

// db.saleswithfilter.insertMany([
//   {
//     _id: 0,
//     items: [
//       { item_id: 43, quantity: 2, price: 10, name: "pen" },
//       { item_id: 2, quantity: 1, price: 240, name: "briefcase" },
//     ],
//   },
//   {
//     _id: 1,
//     items: [
//       { item_id: 23, quantity: 3, price: 110, name: "notebook" },
//       { item_id: 103, quantity: 4, price: 5, name: "pen" },
//       { item_id: 38, quantity: 1, price: 300, name: "printer" },
//     ],
//   },
//   {
//     _id: 2,
//     items: [{ item_id: 4, quantity: 1, price: 23, name: "paper" }],
//   },
// ]);

// db.getCollection("user").aggregate([
//   {
//     $project: {
//       _id: 0,
//       name: 1,
//     },
//   },
// ]);

// db.getCollection("user").aggregate([
//   {$replaceRoot: {
//     newRoot: {$mergeObjects:[{_id:"$_id",first:"",last:""},"$name"]}
//   }}
// ])

// db.getCollection("orders").aggregate([
//   {
//     $lookup: {
//       from: "inventory",
//       localField: "item",
//       foreignField: "sku",
//       as: "inventory_docs",
//     },
//   },
// ]);

// db.getCollection("orders").aggregate([
//   {$set: {
//     totalPrice: {$sum:"$price"}
//   }}
// ])

// db.getCollection("orders").aggregate([
//   {
//     $group: {
//       _id: "$item",
//       totalSaleAmount: { $sum: { $multiply: ["$price", "$quantity"] } },
//     },
//   },
//   {
//     $match: {
//       totalSaleAmount: { $gt: 20 },
//     },
//   },
// ]);

// db.saleswithfilter.aggregate([
//   {
//     $project: {
//       items: {
//         $filter: {
//           input: "$items",
//           as: "item",
//           cond: {
//             $gte: ["$$item.price", 10],
//           },
//         },
//       },
//     },
//   },
// ]);

// db.saleswithfilter.aggregate( [
//   {
//      $project: {
//         items: {
//            $filter: {
//               input: "$items",
//               as: "item",
//               cond: { $gte: [ "$$item.price", 10 ] }
//            }
//         }
//      }
//   }
// ] )

// db.getCollection("orders").aggregate({
//   $lookup: {
//     from:'inventory',
//     localField:'item',
//     foreignField:'sku',
//     as:'product_info'
//   }
// })

// db.products.insertMany([
//   {
//     name: "Logitech G Pro X Superlight",
//     brand: "Logitech",
//     price: 149,
//     details: {
//       model: "950-011111",
//       color: "Black",
//       release_year: 2020,
//     },
//     category: ["electronics", "gaming"],
//     ratings: 6.7,
//     discount: 15,
//     available: true,
//   },
//   {
//     name: "Apple iPhone 14 Pro Max",
//     brand: "Apple",
//     price: 1099,
//     details: {
//       model: "A2892",
//       color: "Space Black",
//       release_year: 2022,
//     },
//     category: ["electronics", "mobile"],
//     ratings: 8.2,
//     available: true,
//   },
//   {
//     name: "Samsung Galaxy S23 Ultra",
//     brand: "Samsung",
//     price: 1199,
//     details: {
//       model: "SM-S918U",
//       color: "Phantom Black",
//       release_year: 2023,
//     },
//     category: ["electronics", "mobile"],
//     ratings: 7.9,
//     discount: 10,
//     available: "true",
//   },
//   {
//     name: "Sony PlayStation 5",
//     brand: "Sony",
//     price: 499,
//     details: {
//       model: "CFI-1116A",
//       color: "White",
//       release_year: 2020,
//     },
//     category: ["electronics", "gaming"],
//     ratings: 8.5,
//     available: false,
//   },
//   {
//     name: "Microsoft Xbox Series X",
//     brand: "Microsoft",
//     price: 499,
//     details: {
//       model: "1981",
//       color: "Black",
//       release_year: 2020,
//     },
//     category: ["electronics", "gaming"],
//     ratings: 8.3,
//     discount: 10,
//     available: true,
//   },
//   {
//     name: "Dell XPS 13",
//     brand: "Dell",
//     price: 1299,
//     details: {
//       model: "9315",
//       color: "Platinum Silver",
//       release_year: 2022,
//     },
//     category: ["electronics", "laptop"],
//     ratings: 8.8,
//     available: true,
//   },
//   {
//     name: "Apple MacBook Pro 14",
//     brand: "Apple",
//     price: 1999,
//     details: {
//       model: "MYTR3LL/A",
//       color: "Space Gray",
//       release_year: 2021,
//     },
//     category: ["electronics", "laptop"],
//     ratings: 9.1,
//     discount: 15,
//     available: true,
//   },
//   {
//     name: "Samsung Galaxy Watch 5",
//     brand: "Samsung",
//     price: 279,
//     details: {
//       model: "SM-R900NZSA",
//       color: "Graphite",
//       release_year: 2022,
//     },
//     category: ["electronics", "wearable"],
//     ratings: 7.5,
//     available: true,
//   },
//   {
//     name: "Apple Watch Series 8",
//     brand: "Apple",
//     price: 399,
//     details: {
//       model: "A2892",
//       color: "Midnight",
//       release_year: 2022,
//     },
//     category: ["electronics", "wearable"],
//     ratings: 8.0,
//     discount: 10,
//     available: true,
//   },
//   {
//     name: "Sony WH-1000XM5",
//     brand: "Sony",
//     price: 399,
//     details: {
//       model: "WH-1000XM5",
//       color: "Black",
//       release_year: 2022,
//     },
//     category: ["electronics", "audio"],
//     ratings: 9.2,
//     available: true,
//   },
//   {
//     name: "Bose QuietComfort 45",
//     brand: "Bose",
//     price: 329,
//     details: {
//       model: "785075-0010",
//       color: "Black",
//       release_year: 2021,
//     },
//     category: ["electronics", "audio"],
//     ratings: 8.7,
//     discount: 15,
//     available: true,
//   },
//   {
//     name: "LG OLED C2 Series",
//     brand: "LG",
//     price: 1299,
//     details: {
//       model: "OLED55C2PVA",
//       color: "Black",
//       release_year: 2022,
//     },
//     category: ["electronics", "tv"],
//     ratings: 9.5,
//     available: true,
//   },
//   {
//     name: "Samsung Neo QLED 8K",
//     brand: "Samsung",
//     price: 2999,
//     details: {
//       model: "QN900B",
//       color: "Black",
//       release_year: 2022,
//     },
//     category: ["electronics", "tv"],
//     ratings: 9.3,
//     discount: 20,
//     available: true,
//   },
//   {
//     name: "Apple iPad Pro 12.9",
//     brand: "Apple",
//     price: 1099,
//     details: {
//       model: "M1 Chip",
//       color: "Space Gray",
//       release_year: 2021,
//     },
//     category: ["electronics", "tablet"],
//     ratings: 9.0,
//     available: true,
//   },
//   {
//     name: "Samsung Galaxy Tab S8 Ultra",
//     brand: "Samsung",
//     price: 1099,
//     details: {
//       model: "SM-X900",
//       color: "Graphite",
//       release_year: 2022,
//     },
//     category: ["electronics", "tablet"],
//     ratings: 8.5,
//     discount: 15,
//     available: true,
//   },
//   {
//     name: "Dyson V15 Detect Absolute",
//     brand: "Dyson",
//     price: 799,
//     details: {
//       model: "SV15",
//       color: "Nickel/Iron/Purple",
//       release_year: 2022,
//     },
//     category: ["home appliance", "vacuum cleaner"],
//     ratings: 8.8,
//     available: true,
//   },
//   {
//     name: "iRobot Roomba j7+",
//     brand: "iRobot",
//     price: 899,
//     details: {
//       model: "4550",
//       color: "Black",
//       release_year: 2021,
//     },
//     category: ["home appliance", "robot vacuum"],
//     ratings: 8.2,
//     discount: 10,
//     available: true,
//   },
//   {
//     name: "LG InstaView Door-in-Door Refrigerator",
//     brand: "LG",
//     price: 1999,
//     details: {
//       model: "LRFC2806S",
//       color: "Stainless Steel",
//       release_year: 2022,
//     },
//     category: ["home appliance", "refrigerator"],
//     ratings: 8.6,
//     available: true,
//   },
// ]);

// logical operators:-
// db.products.find({ratings:{$gte:4.5}}).count()
// db.products.find({ratings:{$ne:8.2}})
// db.products.find({ratings:{$lt:8.2}})
// db.products.find({category:{$in:['mobile','laptop']}})
// db.products.find({category:{$nin:['mobile','laptop']}})

// conditional operators:-
// db.products.find({$or:[{ratings:{$lte:5}},{category:'tv'}]})
// db.products.find({$nor:[{ratings:{$lte:5}},{category:'tv'}]})
// db.products.find({$and:[{ratings:{$gte:9}},{category:'tv'},{price:{$lte:1500}}]})
// db.products.find({$and:[{price:{$lt:1500}},{$or:[{category:'tv'},{category:'laptop'}]}]})
// db.products.find({price:{$not:{$gte:500}}}).count()

// Element Operators
// db.products.find({discount:{$exists:true}}).count()
// db.products.find({price:{$type:'number'}})

//  Evaluation Operator
// db.products.find({price:{$mod:[7,2]}})
// db.products.find({name:{$regex:/apple/ig}})
// db.products.find({
//   $expr:{
//     $gt:[{$subtract:['$price','$discount']},1000]
//   }
// })
