export class UserProfileController {
    constructor(userProfile, uomService, conversionService) {
        this.userProfile = userProfile;
        this.uomService = uomService;
        this.conversionService = conversionService;
        this._weightVal = uomService.usMeasure ? 
                userProfile.weightPounds : conversionService.poundsToKilograms(
                    userProfile.weightPounds);
        this._wasMetric = uomService.metricMeasure;
        this._ageValue = userProfile.ageYears;
    }
    
    get minHeightRange() {
        return this.uomService.usMeasure ? 24 : 60;
    }
    
    get maxHeightRange() {
        return this.uomService.usMeasure ? 84 : 215;
    }
    
    get heightValue() {
        return this.uomService.usMeasure ? 
            this.userProfile.heightInches : 
            this.conversionService.inchesToCentimeters(this.userProfile.heightInches);
    }
    
    set heightValue(value) {
        var incoming = Number(value);
        this.userProfile.heightInches = this.uomService.usMeasure ? 
            incoming : 
            this.conversionService.centimetersToInches(incoming);
    }
    
    get minWeightRange() {
        return this.uomService.metricMeasure ? 9 : 20;
    }
    
    get maxWeightRange() {
        return this.uomService.metricMeasure ? 182 : 400; 
    }
    
    get weightValue() {
        if (this.uomService.metricMeasure !== this._wasMetric) {
            this._wasMetric = this.uomService.metricMeasure;
            if (this._wasMetric) {
                this._weightVal = Math.round(this.conversionService.poundsToKilograms(
                    Number(this._weightVal)
                ));
            }
            else {
                this._weightVal = Math.round(this.conversionService.kilogramsToPounds(
                    Number(this._weightVal)
                ));
            }
        }
        return this._weightVal;
    }
    
    set weightValue(value) {
        var incoming = Number(value), adjustedWeight = incoming;
        this._weightVal = value;
        if (this.uomService.metricMeasure) {
            adjustedWeight = this.conversionService.kilogramsToPounds(incoming);                        
        }
        if (adjustedWeight >= 20 && adjustedWeight <= 400) {
            this.userProfile.weightPounds = adjustedWeight;
        }
    }
    
    get ageValue() {
        return this._ageValue;
    }
    
    set ageValue(value) {
        var incoming = Number(value);
        this._ageValue = value;
        if (incoming >= 13 && incoming <= 120) {
            this.userProfile.ageYears = incoming;
        }
    }
}