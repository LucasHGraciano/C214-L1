const Constants = require('../src/utils/Constants');
const Validation = require('../src/utils/validation');

it('Caso válido', () => {
    const result = Validation.create({
        placa: 'OPTBR77',
        marca: 'VOLKSW',
        nome: 'FOX',
        ano: 2015,
        km: 160900,
    });
    expect(result).toEqual(undefined);
});

it('Caso inválido - só o parâmetro placa', () => {
    const result = Validation.create({
        placa: 'PZA0665'
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});