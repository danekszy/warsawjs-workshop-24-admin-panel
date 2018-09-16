import SomeDataService from '../some-data.service';

describe('getData', () => {
    test('should exist', () => {
        const service = new SomeDataService();
        expect(service.getData).toBeDefined;
    });

    test('should return array', () => {
        const service = new SomeDataService();
        expect(service.getData()).toBeInstanceOf(Array);
    });
});
