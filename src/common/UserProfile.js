export class UserProfile {
    constructor() {
        this._isMale = true;
        this._isFemale = false;
        this.heightInches = 60;
        this.weightPounds = 130;
        this.ageYears = 40;
    }
    
    toggleGender() {
        this._isMale = !this._isMale;
    }
    
    get isMale() {
        return this._isMale;
    }
    
    set isMale(value) {
        this._isMale = !!value;
        this._isFemale = !this._isMale;
    }
    
    get isFemale() {
        return this._isFemale;
    }
    
    set isFemale(value) {
        this._isFemale = !!value;
        this._isMale = !this._isFemale;
    }
}