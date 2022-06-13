var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function () {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '79999999999',
            address: {
                postalcode: '49095780',
                street: 'Rua Jasiel de Brito Côrtes',
                number: '200',
                details: 'Ao lado do Alamedas jabotiana',
                district: 'Jabotiana',
                city_state: 'Aracaju/SE'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data

    }

}