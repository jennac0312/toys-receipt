const receipt1 = {
    customer: 'Brandy',
    order: 100,
    toyInfo: [
        {toy: 'Rubber Duck', price: 5},
        {toy: 'Disney Mermaid', price: 25},
        {toy: 'Troll Doll', price: 5},
    ],
    image: 'https://media1.giphy.com/media/oFRZcmbND30HlIAvND/giphy.gif?cid=6c09b952trsf2bo0cnpmf7eqak4zzkug9k58i71hfxbl4qpc&ep=v1_stickers_related&rid=giphy.gif&ct=s'

}

const receipt2 = {
    customer: 'Michael',
    order: 101,
    toyInfo: [
        {toy: 'Monster Truck', price: 20},
        {toy: 'Ninja Turtle', price: 10}
    ],
    image: 'https://thumbs.gfycat.com/ConstantTeemingAntarcticfurseal-max-1mb.gif'
}
const receipt3 = {
    customer: 'Tiana',
    order: 102,
    toyInfo: [
        {toy: 'Slime', price: 5},
        {toy: 'Fidget Spinner', price: 5},
        {toy: 'Wall-E Robot', price: 20},
        {toy: 'Princess Costume', price: 30},
    ],
    image: 'https://www.pngall.com/wp-content/uploads/12/Wall-E-PNG-Cutout.png'
}


module.exports = [receipt1,receipt2,receipt3]