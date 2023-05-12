const Cars = require('../src/application/car_service');
const Constants = require('../src/utils/Constants');
const Utils = require('../src/utils/utils');
const CarsRepository = require('../src/port/car_repository');

jest.mock('../src/port/car_repository');

it('should create a car', async () => {
    const data = {
        placa: 'OPTBR77',
        marca: 'VOLSKW',
        nome: 'FOX',
        ano: 2015,
        km: 160900,
    };

    const id = Utils.generateUuid();

    CarsRepository.create.mockResolvedValue({ ...data, id });

    const response = await Cars.create(data);

    expect(response).toEqual({ ...data, id });
});

it('should not create a car', async () => {
    const data = {
        marca: 'CHEVROLET',
        nome: 'VECTRA',
        ano: 2003,
        km: 1800670,
    };

    const response = await Cars.create(data);

    expect(response.name).toEqual(Constants.ErrorValidation.name);
});

it('should update a car', async () => {
    const data = {
        id: Utils.generateUuid(),
        placa: 'XYZ12310',
        km: 85007,
    };

    CarsRepository.update.mockResolvedValue(data);

    const response = await Cars.update(data);

    expect(response).toEqual(data);
});

it('should not update a car', async () => {
    const data = {
        id: Utils.generateUuid(),
        nome: 'UP',
        km: 22080,
    };

    const response = await Cars.update(data);

    expect(response.name).toEqual(Constants.ErrorValidation.name);
});

it('should delete a car', async () => {
    const data = {
        placa: 'PZA0665',
    };

    CarsRepository.deleteByPlaca.mockResolvedValue(data);

    const response = await Cars.deleteByPlaca(data);

    expect(response).toEqual(data);
});

it('should not delete a car', async () => {
    const data = {
        nome: 'UNO',
    };

    const response = await Cars.deleteByPlaca(data);

    expect(response.name).toEqual(Constants.ErrorValidation.name);
});

it('should get all cars', async () => {
    const data = [
        {
            placa: 'QPD3500',
        },
        {
            placa: 'EEX0860',
        },
    ];

    CarsRepository.list.mockResolvedValue(data);

    const response = await Cars.list();

    expect(response).toEqual(data);
});

it('should not get all cars', async () => {
    const data = [
        {
            nome: 'MOBI',
        },
        {
            nome: 'SENTRA',
        },
    ];

    const response = await Cars.list(data);

    expect(response.placa).toEqual(Constants.ErrorValidation.placa);
});

it('should get car by placa', async () => {
    const data = {
        placa: 'HDT1001',
    };

    CarsRepository.getByPlaca.mockResolvedValue(data);

    const response = await Cars.listByPlaca(data);

    expect(response).toEqual(data);
});

it('should not get car by placa', async () => {
    const data = {
        nome: 'POLO',
    };

    const response = await Cars.listByPlaca(data);

    expect(response.name).toEqual(Constants.ErrorValidation.name);
});
