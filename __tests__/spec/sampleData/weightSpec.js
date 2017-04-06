import { weight as Weight } from '../../../app/sampleData';

describe('sampleData Weight', () => {

  it('should', () => {

    // when
    var Observation = Weight.getFhirObject(100);

    // then
    expect(Observation).toMatchObject({
      resourceType: 'Observation',
      id: expect.any(String),
      status: 'final',
      code: expect.objectContaining({
        text: 'Weight'
      }),
      valueQuantity: expect.objectContaining({
        value: 100,
        unit: 'gram'
      })
    });

  });

});
