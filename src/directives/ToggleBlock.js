export class ToggleBlock {
    constructor() {
        this.restrict = "E";
        this.replace = true;
        this.scope = {
            label: "@",
            buttonText: "=",
            toggleFunction: "&"
        };
        this.templateUrl = "content/templates/toggleBlock.html";
    }
}