export class UnitOfMeasureState {
    
    constructor() {
        this._usMeasure = true;
        this._metricMeasure = false;
    }
    
    toggle() {
        this._usMeasure = !this._usMeasure;         
    }
    
    get usMeasure() {
        return this._usMeasure;
    }
    
    set usMeasure(value) {
        this._usMeasure = !!value;
        this._metricMeasure = !this._usMeasure;
    }
    
    get metricMeasure() {
        return this._metricMeasure;
    }
    
    set metricMeasure(value) {
        this._metricMeasure = !!value;
        this._usMeasure = !this._metricMeasure;
    }
}