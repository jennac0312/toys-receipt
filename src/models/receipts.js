const receipt1 = {
    customer: 'Brandy',
    order: 100,
    toyInfo: [
        {toy: 'Rubber Duck', price: 5},
        {toy: 'Disney Mermaid', price: 25},
        {toy: 'Troll Doll', price: 5},
    ]

}
const receipt2 = {
    customer: 'Michael',
    order: 101,
    toyInfo: [
        {toy: 'Monster Truck', price: 20},
        {toy: 'Ninja Turtle', price: 10}
    ]
}
const receipt3 = {
    customer: 'Tiana',
    order: 102,
    toyInfo: [
        {toy: 'Slime', price: 5},
        {toy: 'Fidget Spinner', price: 5},
        {toy: 'Wall-E Robot', price: 20},
        {toy: 'Princess Costume', price: 30},
    ]
}


module.exports = [receipt1,receipt2,receipt3]