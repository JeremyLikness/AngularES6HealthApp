import {bmiFilterFactory} from './filters/bmiFilter.js';
import {genderFilterFactory} from './filters/genderFilter.js';
import {uomFilterFactory} from './filters/uomFilter.js';
import {weightFilterFactory} from './filters/weightFilter.js';
import {heightFilterFactory} from './filters/heightFilter.js';

import {ToggleBlock} from './directives/toggleBlock.js';

import {UnitOfMeasureState} from './common/UnitOfMeasureState.js';
import {Conversions} from './common/Conversions.js';

import {UomController} from './controllers/UomController.js';

let toggleBlockFactory = () => new ToggleBlock();

class AngularApp {
    
    constructor() {
        
        var healthApp = angular.module("healthApp", []);
        
        healthApp.filter("bmi", bmiFilterFactory);
        healthApp.filter("gender", genderFilterFactory);
        healthApp.filter("uom", uomFilterFactory);
        healthApp.filter("weight", weightFilterFactory);
        healthApp.filter("height", heightFilterFactory);
        
        healthApp.directive("toggleBlock", toggleBlockFactory);
        
        healthApp.service("uomService", UnitOfMeasureState);
        healthApp.service("conversionService", Conversions);
        
        healthApp.controller("uomCtrl", ["uomService", UomController]);
    }
} 
 
var app = new AngularApp();