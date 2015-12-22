export function genderFilterFactory () {
    return function (input) {
            var check = !!input;
            return check ? 'Male' : 'Female';
        };
}