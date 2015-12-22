export function weightFilterFactory () {
    return function (input) {
            var check = !!input;
            return check ? 'lbs.' : 'kgs.';
        };
}