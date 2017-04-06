import {
  Observation,
  CodeableConcept,
  Quantity
} from 'fhir-proof';

module.exports = {

  label: 'Weight',

  identifier: 'weight',

  unit: 'gram',

  normalize: val => val,

  getFhirObject(weightValue) {
 
    const code = CodeableConcept({
      text: this.label,
    });

    const quantity = Quantity({
      value: weightValue,
      unit: this.unit,
    });

    return Observation({
      status: 'final',
      code: code,
      valueQuantity: quantity
    });
  },

  getFhirDoc(weightValue) {
    return JSON.stringify(this.getFhirObject(weightValue));
  }

};
