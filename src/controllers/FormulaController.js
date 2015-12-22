import {formulaBmr} from '../common/formulaBmr.js';
import {formulaBmi} from '../common/formulaBmi.js';
import {formulaThr} from '../common/formulaThr.js';

export class FormulaController {
    constructor(uomService, userProfile) {
        this.uomService = uomService;
        this.userProfile = userProfile;
    }
    
    makeParameters() {
        return {
            isMale: this.userProfile.isMale,
            height: this.userProfile.heightInches,
            weight: this.userProfile.weightPounds, 
            age: this.userProfile.ageYears
        };
    }
    
    get bmrValue() {
        return formulaBmr(this.makeParameters());
    }
    
    get bmiValue() {
        return formulaBmi(this.makeParameters());
    }
    
    get thrValue() {
        return formulaThr(this.userProfile.ageYears);
    }
}