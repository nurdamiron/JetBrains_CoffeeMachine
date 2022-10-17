Skip to content
Search or jump to…
Pulls
Issues
Marketplace
Explore
 
@nurdashymside 
bywjge
/
Hyperskill_Coffee_Machine
Public
Code
Issues
Pull requests
Actions
Projects
Security
Insights
Hyperskill_Coffee_Machine/main.js /
@bywjge
bywjge Add files via upload
Latest commit 49b8053 on 31 Jul
 History
 1 contributor
217 lines (156 sloc)  5.69 KB

// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')
action = 'a'
water = 400
milk = 540
beans = 120
cups = 9
money = 550
while (action !== 'exit') {
  action = input(`\nWrite action (buy, fill, take, remaining, exit):\n`)

  if (action === 'buy') {
    let buy = input(`\nWhat do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:\n`)
    switch (buy) {
      case "1" : {
        if (water>=250) {
          if (beans>=16) {
            water -= 250
            beans -= 16
            money += 4
            cups--
            console.log(`I have enough resources, making you a coffee!`)

          } else {
            console.log(`Sorry, not enough coffee beans!`)
          }
        } else {
          console.log(`Sorry, not enough water!`)
        }
        break
      }

      case "2" : {
        if (water>=350) {
          if (milk>=75) {
            if (beans>=20) {
              water -= 350
              milk -= 75
              beans -= 20
              money += 7
              cups--
              console.log(`I have enough resources, making you a coffee!`)

            } else {
              console.log(`Sorry, not enough coffee beans!`)
            }
          } else {
            console.log(`Sorry, not enough milk!`)
          }

        } else {
          console.log(`Sorry, not enough water!`)
        }
        break
      }

      case "3" : {
        if (water>=200) {
          if (milk>=100) {
            if (beans>=12) {
              water -= 200
              milk -= 100
              beans -= 12
              money += 6
              cups--
              console.log(`I have enough resources, making you a coffee!`)

            } else {
              console.log(`Sorry, not enough coffee beans!`)
            }
          } else {
            console.log(`Sorry, not enough milk!`)
          }

        } else {
          console.log(`Sorry, not enough water!`)
        }
        break
      }

      case "back" : continue

    }
  }

  if (action === 'remaining') {
    console.log(`\nThe coffee machine has:\n${water} ml of water\n${milk} ml of milk\n${beans} g of coffee beans\n${cups} disposable cups\n$${money} of money\n`)

  }

  if (action === "fill") {
    let water1 = input('Write how many ml of water you want to add:\n')
    let milk1 = input('Write how many ml of milk you want to add:\n')
    let beans1 = input('Write how many grams of coffee beans you want to add:\n')
    let cups1 = input('Write how many disposable coffee cups you want to add:\n')
    water += Number(water1)
    milk += Number(milk1)
    beans += Number(beans1)
    cups += Number(cups1)
  }

  if (action === "take") {
    console.log(`I gave you $${money}`)
    money = 0
  }

}



























// console.log(`The coffee machine has:\n400 ml of water\n540 ml of milk\n120 g of coffee beans\n9 disposable cups\n$550 of money\n`)
//
// let action = input('Write action (buy, fill, take):\n')
//
// if (action === 'buy') {
//   let buy = input('What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:\n')
//   if (buy === '1') {
//     console.log(`The coffee machine has:\n150 ml of water\n540 ml of milk\n104 g of coffee beans\n8 disposable cups\n$554 of money\n`)
//
//   }
//   if (buy === '2') {
//     console.log(`The coffee machine has:\n50 ml of water\n465 ml of milk\n100 g of coffee beans\n8 disposable cups\n$557 of money\n`)
//
//   }
//   if (buy === '3') {
//     console.log(`The coffee machine has:\n200 ml of water\n440 ml of milk\n108 g of coffee beans\n8 disposable cups\n$556 of money\n`)
//
//   }
// }
//
// if (action === 'fill') {
//   let water = input('Write how many ml of water you want to add:\n')
//   let milk = input('Write how many ml of milk you want to add:\n')
//   let coffee = input('Write how many grams of coffee beans you want to add:\n')
//   let cups = input('Write how many disposable coffee cups you want to add:\n')
//   console.log(`The coffee machine has:\n${400+Number(water)} ml of water\n${540+Number(milk)} ml of milk\n${120+Number(coffee)} g of coffee beans\n${9 + Number(cups)} disposable cups\n$550 of money\n`)
//
// }
//
// if (action === 'take') {
//   console.log(`The coffee machine has:\n400 ml of water\n540 ml of milk\n120 g of coffee beans\n9 disposable cups\n$0 of money\n`)
//
// }

















//
// let water = input('Write how many ml of water the coffee machine has:\n')
// let milk = input('Write how many ml of milk the coffee machine has:\n')
// let grams = input('Write how many grams of coffee beans the coffee machine has:\n')
// let cups = input('Write how many cups of coffee you will need:\n')
//
// max_water = Math.floor(water / 200)
// max_milk = Math.floor(milk / 50)
// max_grams = Math.floor(grams / 15)
// max_nums = Math.min(max_water, max_milk, max_grams)
// if (cups > max_nums){
//   console.log(`No, I can make only ${max_nums} cups of coffee`)
// }
// else if (cups == max_nums){
//   console.log(`Yes, I can make that amount of coffee`)
// }
// else {
//   console.log(`Yes, I can make that amount of coffee (and even ${max_nums - cups} more than that)`)
// }

// console.log()
// let count = input('Write how many cups of coffee you will need:\n')
// console.log(`For ${count} cups of coffee you will need:\n${count * 200} ml of water\n${count * 50} ml of milk\n${count * 15} g of coffee beans`)

// console.log("Starting to make a coffee")
// console.log("Grinding coffee beans")
// console.log("Boiling water")
// console.log("Mixing boiled water with crushed coffee beans")
// console.log("Pouring coffee into the cup")
// console.log("Pouring some milk into the cup")
// console.log("Coffee is ready!")
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
Hyperskill_Coffee_Machine/main.js at main · bywjge/Hyperskill_Coffee_Machine
