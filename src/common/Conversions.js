const centimetersPerInch = 2.54;
const inchesPerFoot = 12;    
const poundsPerKilogram = 2.205;

export class Conversions {
    
    inchesToCentimeters(inches) {
        var input = Number(inches);
        return input * centimetersPerInch;
    }
    
    inchesToFeet(inches) {
        var input = Number(inches);
        return input / inchesPerFoot;
    }
    
    centimetersToInches(centimeters) {
        var input = Number(centimeters);
        return input / centimetersPerInch;
    }
    
    poundsToKilograms(pounds) {
        var input = Number(pounds);
        return input / poundsPerKilogram;
    }
    
    kilogramsToPounds(kg) {
        var input = Number(kg);
        return input * poundsPerKilogram;
    }
}
