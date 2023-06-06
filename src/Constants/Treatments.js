import facial from '../Asset/images/facial.png'
import manicure from '../Asset/images/manicure.png'
import waxing from '../Asset/images/waxing.png'

const Services = [
    {
        id:1,
        title:'Nails',
        icon:manicure,
        price:30,
        services: ['consultaion','nail polish','decoration']
    },
    {
        id:2,
        title:'Waxing',
        icon:waxing,
        price:50,
        services: ['consultaion','Wash and dry the area','Remove the cloth strip']
    },
    {
        id:3,
        title:'Spa',
        icon:facial,
        price:85,
        services: ['consultaion','Shampooing','Hair mask','Massage']
    }
]

export default Services