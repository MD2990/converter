export function fromMeter(b, e, r) {
  //  convert meters to kilometers
  const convertMetersToKilometers = () => {
    r.results = Number(e / 1000).toFixed(4);
  };

  //  convert meters to centimeters
  const convertMetersToCentimeters = () => {
    r.results = Number(e * 100).toFixed(2);
  };

  //  convert meters to millimeters
  const convertMetersToMillimeters = () => {
    r.results = Number(e * 1000).toFixed(2);
  };
  //  convert meters to micrometers
  const convertMetersToMicrometers = () => {
    r.results = Number(e * 1000000).toFixed(2);
  };

  //  convert meters to nanometers
  const convertMetersToNanometers = () => {
    r.results = Number(e * 1000000000).toFixed(2);
  };
  //  convert meters to miles

  const convertMetersToMiles = () => {
    r.results = Number(e / 1609.344).toFixed(6);
  };
  //  convert meters to yards
  const convertMetersToYards = () => {
    r.results = Number(e / 0.9144).toFixed(6);
  };
  //  convert meters to Feet
  const convertMetersToFeet = () => {
    r.results = Number(e / 0.3048).toFixed(6);
  };

  //  convert meters to inches
  const convertMetersToInches = () => {
    r.results = Number(e / 0.0254).toFixed(6);
  };

  switch (b) {
    case "Meter":
      r.results = "Convert to ...";
      break;
    case "Kilometer":
      convertMetersToKilometers(e);

      break;
    case "Centimeter":
      convertMetersToCentimeters(e);
      break;
    case "Millimeter":
      convertMetersToMillimeters(e);
      break;
    case "Micrometer":
      convertMetersToMicrometers(e);
      break;
    case "Nanometer":
      convertMetersToNanometers(e);
      break;
    case "Mile":
      convertMetersToMiles(e);
      break;
    case "Yard":
      convertMetersToYards(e);
      break;
    case "Feet":
      convertMetersToFeet(e);
      break;
    case "Inch":
      convertMetersToInches(e);

      break;

    default:
      results = 0;
      break;
  }
}
export function fromKilometer(b, e, r) {
  //  convert kilometers to meters
  const convertKilometersToMeters = () => {
    r.results = Number(e * 1000).toFixed(2);
  };
  //  convert kilometers to centimeters
  const convertKilometersToCentimeters = () => {
    r.results = Number(e * 100000).toFixed(2);
  };
  //  convert kilometers to millimeters
  const convertKilometersToMillimeters = () => {
    r.results = Number(e * 1000000).toFixed(2);
  };
  //  convert kilometers to micrometers
  const convertKilometersToMicrometers = () => {
    r.results = Number(e * 1000000000).toFixed(2);
  };
  //  convert kilometers to nanometers
  const convertKilometersToNanometers = () => {
    r.results = Number(e * 1000000000000).toFixed(2);
  };
  //  convert kilometers to miles
  const convertKilometersToMiles = () => {
    r.results = Number(e / 1.60934).toFixed(6);
  };
  //  convert kilometers to yards
  const convertKilometersToYards = () => {
    r.results = Number(e / 0.0009144).toFixed(4);
  };
  //  convert kilometers to Feet
  const convertKilometersToFeet = () => {
    r.results = Number(e / 0.0003048).toFixed(3);
  };
  //  convert kilometers to inches
  const convertKilometersToInches = () => {
    r.results = Number(e * 39370).toFixed(3);
  };

  //  convert kilometers to inches

  switch (b) {
    case "Kilometer":
      r.results = "Convert To ...";
      break;
    case "Meter":
      convertKilometersToMeters(e);
      break;
    case "Centimeter":
      convertKilometersToCentimeters(e);
      break;
    case "Millimeter":
      convertKilometersToMillimeters(e);
      break;
    case "Micrometer":
      convertKilometersToMicrometers(e);
      break;
    case "Nanometer":
      convertKilometersToNanometers(e);
      break;
    case "Mile":
      convertKilometersToMiles(e);
      break;
    case "Yard":
      convertKilometersToYards(e);
      break;
    case "Feet":
      convertKilometersToFeet(e);
      break;
    case "Inch":
      convertKilometersToInches(e);
      break;
    default:
      r.results = 0;
      break;
  }
}

export function fromCentimeter(b, e, r) {
  //  convert centimeters to meters
  const convertCentimetersToMeters = () => {
    r.results = Number(e / 100).toFixed(2);
  };
  //  convert centimeters to kilometers
  const convertCentimetersToKilometers = () => {
    r.results = Number(e / 100000).toFixed(2);
  };
  //  convert centimeters to millimeters
  const convertCentimetersToMillimeters = () => {
    r.results = Number(e * 10).toFixed(2);
  };
  //  convert centimeters to micrometers
  const convertCentimetersToMicrometers = () => {
    r.results = Number(e * 10000).toFixed(2);
  };
  //  convert centimeters to nanometers
  const convertCentimetersToNanometers = () => {
    r.results = Number(e * 10000000).toFixed(2);
  };
  //  convert centimeters to miles
  const convertCentimetersToMiles = () => {
    r.results = Number(e / 160934).toFixed(6);
  };
  //  convert centimeters to yards
  const convertCentimetersToYards = () => {
    r.results = Number(e / 91.44).toFixed(6);
  };
  //  convert centimeters to Feet
  const convertCentimetersToFeet = () => {
    r.results = Number(e / 30.48).toFixed(6);
  };
  //  convert centimeters to inches
  const convertCentimetersToInches = () => {
    r.results = Number(e / 2.54).toFixed(6);
  };

  switch (b) {
    case "Centimeter":
      r.results = "Convert To ...";
      break;
    case "Meter":
      convertCentimetersToMeters(e);
      break;
    case "Kilometer":
      convertCentimetersToKilometers(e);
      break;
    case "Millimeter":
      convertCentimetersToMillimeters(e);
      break;
    case "Micrometer":
      convertCentimetersToMicrometers(e); //  convert centimeters to micrometers
      break;
    case "Nanometer":
      convertCentimetersToNanometers(e);
      break;
    case "Mile":
      convertCentimetersToMiles(e);
      break;
    case "Yard":
      convertCentimetersToYards(e);
      break;
    case "Feet":
      convertCentimetersToFeet(e);
      break;
    case "Inch":
      convertCentimetersToInches(e);
      break;
    default:
      r.results = 0;
      break;
  }
}
export function fromMillimeter(b, e, r) {
  //  convert millimeters to meters
  const convertMillimetersToMeters = () => {
    r.results = Number(e / 1000).toFixed(2);
  };
  //  convert millimeters to kilometers
  const convertMillimetersToKilometers = () => {
    r.results = Number(e / 1000000).toFixed(2);
  };
  //  convert millimeters to centimeters
  const convertMillimetersToCentimeters = () => {
    r.results = Number(e / 10).toFixed(2);
  };
  //  convert millimeters to micrometers
  const convertMillimetersToMicrometers = () => {
    r.results = Number(e * 1000).toFixed(2);
  };
  //  convert millimeters to nanometers
  const convertMillimetersToNanometers = () => {
    r.results = Number(e * 1000000).toFixed(2);
  };
  //  convert millimeters to miles
  const convertMillimetersToMiles = () => {
    r.results = Number(e / 1609344).toFixed(6);
  };
  //  convert millimeters to yards
  const convertMillimetersToYards = () => {
    r.results = Number(e / 914.4).toFixed(6);
  };
  //  convert millimeters to Feet
  const convertMillimetersToFeet = () => {
    r.results = Number(e / 304.8).toFixed(6);
  };
  //  convert millimeters to inches
  const convertMillimetersToInches = () => {
    r.results = Number(e / 25.4).toFixed(6);
  };

  switch (b) {
    case "Millimeter":
      r.results = "Convert To ...";
      break;
    case "Meter":
      convertMillimetersToMeters(e);
      break;
    case "Kilometer":
      convertMillimetersToKilometers(e);
      break;
    case "Centimeter":
      convertMillimetersToCentimeters(e);
      break;
    case "Micrometer":
      convertMillimetersToMicrometers(e);
      break;
    case "Nanometer":
      convertMillimetersToNanometers(e);
      break;
    case "Mile":
      convertMillimetersToMiles(e);
      break;
    case "Yard":
      convertMillimetersToYards(e);
      break;
    case "Feet":
      convertMillimetersToFeet(e);
      break;
    case "Inch":
      convertMillimetersToInches(e);
      break;
    default:
      r.results = 0;
      break;
  }
}

export function fromMicrometer(b, e, r) {
  //  convert micrometers to meters
  const convertMicrometersToMeters = () => {
    r.results = Number(e / 1000000).toFixed(2);
  };
  //  convert micrometers to kilometers
  const convertMicrometersToKilometers = () => {
    r.results = Number(e / 1000000000).toFixed(2);
  };
  //  convert micrometers to centimeters
  const convertMicrometersToCentimeters = () => {
    r.results = Number(e / 10000).toFixed(2);
  };
  //  convert micrometers to millimeters
  const convertMicrometersToMillimeters = () => {
    r.results = Number(e / 1000).toFixed(2);
  };
  //  convert micrometers to nanometers
  const convertMicrometersToNanometers = () => {
    r.results = Number(e * 1000).toFixed(2);
  };
  //  convert micrometers to miles
  const convertMicrometersToMiles = () => {
    r.results = Number(e / 1609344000).toFixed(6);
  };
  //  convert micrometers to yards
  const convertMicrometersToYards = () => {
    r.results = Number(e / 91440000).toFixed(6);
  };
  //  convert micrometers to Feet
  const convertMicrometersToFeet = () => {
    r.results = Number(e / 304800000).toFixed(6);
  };
  //  convert micrometers to inches
  const convertMicrometersToInches = () => {
    r.results = Number(e / 25400000).toFixed(6);
  };

  switch (b) {
    case "Micrometer":
      r.results = "Convert To ...";
      break;
    case "Meter":
      convertMicrometersToMeters(e);
      break;
    case "Kilometer":
      convertMicrometersToKilometers(e);
      break;
    case "Centimeter":
      convertMicrometersToCentimeters(e);
      break;
    case "Millimeter":
      convertMicrometersToMillimeters(e);
      break;
    case "Nanometer":
      convertMicrometersToNanometers(e);
      break;
    case "Mile":
      convertMicrometersToMiles(e);
      break;
    case "Yard":
      convertMicrometersToYards(e);
      break;
    case "Feet":
      convertMicrometersToFeet(e);
      break;
    case "Inch":
      convertMicrometersToInches(e);
      break;
    default:
      r.results = 0;
      break;
  }
}

export function fromNanometer(b, e, r) {
  //  convert nanometers to meters
  const convertNanometersToMeters = () => {
    r.results = Number(e / 1000000000).toFixed(2);
  };
  //  convert nanometers to kilometers
  const convertNanometersToKilometers = () => {
    r.results = Number(e / 1000000000000).toFixed(2);
  };
  //  convert nanometers to centimeters
  const convertNanometersToCentimeters = () => {
    r.results = Number(e / 10000000).toFixed(2);
  };
  //  convert nanometers to millimeters
  const convertNanometersToMillimeters = () => {
    r.results = Number(e / 1000000).toFixed(2);
  };
  //  convert nanometers to micrometers
  const convertNanometersToMicrometers = () => {
    r.results = Number(e / 1000).toFixed(2);
  };
  //  convert nanometers to miles
  const convertNanometersToMiles = () => {
    r.results = Number(e / 1609344000000).toFixed(6);
  };
  //  convert nanometers to yards
  const convertNanometersToYards = () => {
    r.results = Number(e / 91440000000).toFixed(6);
  };
  //  convert nanometers to Feet
  const convertNanometersToFeet = () => {
    r.results = Number(e / 304800000000).toFixed(6);
  };
  //  convert nanometers to inches
  const convertNanometersToInches = () => {
    r.results = Number(e / 25400000).toFixed(6);
  };

  switch (b) {
    case "Nanometer":
      r.results = "Convert To ...";
      break;
    case "Meter":
      convertNanometersToMeters(e);
      break;
    case "Kilometer":
      convertNanometersToKilometers(e);
      break;
    case "Centimeter":
      convertNanometersToCentimeters(e);
      break;
    case "Millimeter":
      convertNanometersToMillimeters(e);
      break;
    case "Micrometer":
      convertNanometersToMicrometers(e);
      break;
    case "Mile":
      convertNanometersToMiles(e);
      break;
    case "Yard":
      convertNanometersToYards(e);
      break;
    case "Feet":
      convertNanometersToFeet(e);
      break;
    case "Inch":
      convertNanometersToInches(e);
      break;
    default:
      r.results = 0;
      break;
  }
}

export function fromMile(b, e, r) {
  //  convert miles to meters
  const convertMilesToMeters = () => {
    r.results = Number(e * 1609344).toFixed(2);
  };
  //  convert miles to kilometers
  const convertMilesToKilometers = () => {
    r.results = Number(e * 1.60934).toFixed(2);
  };
  //  convert miles to centimeters
  const convertMilesToCentimeters = () => {
    r.results = Number(e * 160934.4).toFixed(2);
  };
  //  convert miles to millimeters
  const convertMilesToMillimeters = () => {
    r.results = Number(e * 1609344).toFixed(2);
  };
  //  convert miles to micrometers
  const convertMilesToMicrometers = () => {
    r.results = Number(e * 1609344000).toFixed(2);
  };
  //  convert miles to nanometers
  const convertMilesToNanometers = () => {
    r.results = Number(e * 1609344000000).toFixed(2);
  };
  //  convert miles to yards
  const convertMilesToYards = () => {
    r.results = Number(e * 1760).toFixed(2);
  };
  //  convert miles to Feet
  const convertMilesToFeet = () => {
    r.results = Number(e * 5280).toFixed(2);
  };
  //  convert miles to inches
  const convertMilesToInches = () => {
    r.results = Number(e * 63360).toFixed(2);
  };

  switch (b) {
    case "Mile":
      r.results = "Convert To ...";
      break;
    case "Meter":
      convertMilesToMeters(e);
      break;
    case "Kilometer":
      convertMilesToKilometers(e);
      break;
    case "Centimeter":
      convertMilesToCentimeters(e);
      break;
    case "Millimeter":
      convertMilesToMillimeters(e);
      break;
    case "Micrometer":
      convertMilesToMicrometers(e);
      break;
    case "Nanometer":
      convertMilesToNanometers(e);
      break;
    case "Yard":
      convertMilesToYards(e);
      break;
    case "Feet":
      convertMilesToFeet(e);
      break;
    case "Inch":
      convertMilesToInches(e);
      break;
    default:
      r.results = 0;
      break;
  }
}

export function fromYard(b, e, r) {
  //  convert yards to meters
  const convertYardsToMeters = () => {
    r.results = Number(e * 0.9144).toFixed(2);
  };
  //  convert yards to kilometers
  const convertYardsToKilometers = () => {
    r.results = Number(e * 0.0009144).toFixed(2);
  };
  //  convert yards to centimeters
  const convertYardsToCentimeters = () => {
    r.results = Number(e * 91.44).toFixed(2);
  };
  //  convert yards to millimeters
  const convertYardsToMillimeters = () => {
    r.results = Number(e * 914.4).toFixed(2);
  };
  //  convert yards to micrometers
  const convertYardsToMicrometers = () => {
    r.results = Number(e * 914400).toFixed(2);
  };
  //  convert yards to nanometers
  const convertYardsToNanometers = () => {
    r.results = Number(e * 914400000).toFixed(2);
  };
  //  convert yards to miles
  const convertYardsToMiles = () => {
    r.results = Number(e * 0.000568181818181818).toFixed(2);
  };
  //  convert yards to Feet
  const convertYardsToFeet = () => {
    r.results = Number(e * 3).toFixed(2);
  };
  //  convert yards to inches
  const convertYardsToInches = () => {
    r.results = Number(e * 36).toFixed(2);
  };

  switch (b) {
    case "Yard":
      r.results = "Convert To ...";
      break;
    case "Meter":
      convertYardsToMeters(e);
      break;
    case "Kilometer":
      convertYardsToKilometers(e);
      break;
    case "Centimeter":
      convertYardsToCentimeters(e);
      break;
    case "Millimeter":
      convertYardsToMillimeters(e);
      break;
    case "Micrometer":
      convertYardsToMicrometers(e);
      break;
    case "Nanometer":
      convertYardsToNanometers(e);
      break;
    case "Mile":
      convertYardsToMiles(e);
      break;
    case "Feet":
      convertYardsToFeet(e);
      break;
    case "Inch":
      convertYardsToInches(e);
      break;
    default:
      r.results = 0;
      break;
  }
}

export function fromFeet(b, e, r) {
  //  convert feet to meters
  const convertFeetToMeters = () => {
    r.results = Number(e * 0.3048).toFixed(2);
  };
  //  convert feet to kilometers
  const convertFeetToKilometers = () => {
    r.results = Number(e * 0.0003048).toFixed(2);
  };
  //  convert feet to centimeters
  const convertFeetToCentimeters = () => {
    r.results = Number(e * 30.48).toFixed(2);
  };
  //  convert feet to millimeters
  const convertFeetToMillimeters = () => {
    r.results = Number(e * 304.8).toFixed(2);
  };
  //  convert feet to micrometers
  const convertFeetToMicrometers = () => {
    r.results = Number(e * 304800).toFixed(2);
  };
  //  convert feet to nanometers
  const convertFeetToNanometers = () => {
    r.results = Number(e * 304800000).toFixed(2);
  };
  //  convert feet to miles
  const convertFeetToMiles = () => {
    r.results = Number(e * 0.0001893939393939394).toFixed(2);
  };
  //  convert feet to yards
  const convertFeetToYards = () => {
    r.results = Number(e * 0.3333333333333333).toFixed(2);
  };
  //  convert feet to inches
  const convertFeetToInches = () => {
    r.results = Number(e * 12).toFixed(2);
  };

  switch (b) {
    case "Feet":
      r.results = "Convert To ...";
      break;
    case "Meter":
      convertFeetToMeters(e);
      break;
    case "Kilometer":
      convertFeetToKilometers(e);
      break;
    case "Centimeter":
      convertFeetToCentimeters(e);
      break;
    case "Millimeter":
      convertFeetToMillimeters(e);
      break;
    case "Micrometer":
      convertFeetToMicrometers(e);
      break;
    case "Nanometer":
      convertFeetToNanometers(e);
      break;
    case "Mile":
      convertFeetToMiles(e);
      break;
    case "Yard":
      convertFeetToYards(e);
      break;
    case "Inch":
      convertFeetToInches(e);
      break;
    default:
      r.results = 0;
      break;
  }
}

export function fromInch(b, e, r) {
  //  convert inches to meters
  const convertInchesToMeters = () => {
    r.results = Number(e * 0.0254).toFixed(2);
  };
  //  convert inches to kilometers
  const convertInchesToKilometers = () => {
    r.results = Number(e * 0.0000254).toFixed(2);
  };
  //  convert inches to centimeters
  const convertInchesToCentimeters = () => {
    r.results = Number(e * 2.54).toFixed(2);
  };
  //  convert inches to millimeters
  const convertInchesToMillimeters = () => {
    r.results = Number(e * 25.4).toFixed(2);
  };
  //  convert inches to micrometers
  const convertInchesToMicrometers = () => {
    r.results = Number(e * 25400).toFixed(2);
  };
  //  convert inches to nanometers
  const convertInchesToNanometers = () => {
    r.results = Number(e * 25400000).toFixed(2);
  };
  //  convert inches to miles
  const convertInchesToMiles = () => {
    r.results = Number(e * 0.0000157828283).toFixed(2);
  };
  //  convert inches to yards
  const convertInchesToYards = () => {
    r.results = Number(e * 0.02777777777777778).toFixed(2);
  };
  //  convert inches to feet
  const convertInchesToFeet = () => {
    r.results = Number(e * 0.08333333333333333).toFixed(2);
  };

  switch (b) {
    case "Inch":
      r.results = "Convert To ...";
      break;
    case "Meter":
      convertInchesToMeters(e);
      break;
    case "Kilometer":
      convertInchesToKilometers(e);
      break;
    case "Centimeter":
      convertInchesToCentimeters(e);
      break;
    case "Millimeter":
      convertInchesToMillimeters(e);
      break;
    case "Micrometer":
      convertInchesToMicrometers(e);
      break;
    case "Nanometer":
      convertInchesToNanometers(e);
      break;
    case "Mile":
      convertInchesToMiles(e);
      break;
    case "Yard":
      convertInchesToYards(e);
      break;
    case "Feet":
      convertInchesToFeet(e);
      break;
    default:
      r.results = 0;
      break;
  }
}
