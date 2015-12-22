export function uomFilterFactory() {
    return function (input) {
            var check = !!input;
            return check ? 'U.S.' : 'Metric';
        };
}