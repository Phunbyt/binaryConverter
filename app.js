class InputCovert {
    constructor() {
        this.digitInput = document.querySelector(".number-input");
        this.binaryInput = document.querySelector(".binary-input");
        this.convertBtn = document.querySelector(".convert-btn");
        this.reset = document.querySelector(".reset");
        this.binaryWarn = document.querySelector(".binary-warn");
        this.decimalWarn = document.querySelector(".decimal-warn");
    }

    resetInput() {
        this.binaryWarn.style.display = `none`;
        this.decimalWarn.style.display = `none`;
        this.binaryInput.value = "";
        this.digitInput.value = ``;
    }

    checkDigInput() {
        const digitNumber = this.digitInput.value;

        if (isNaN(digitNumber) || digitNumber == "") {
            this.digitInput.value = ``;
            this.decimalWarn.style.display = `block`;
            return false;
        } else {
            this.binaryWarn.style.display = `none`;
            this.decimalWarn.style.display = `none`;
            const digContainer = Number(digitNumber);
            this.binaryInput.value = digContainer.toString(2);
        }
    }

    checkBinInput() {
        const binaryNumber = this.binaryInput.value;

        if (isNaN(binaryNumber) || binaryNumber == "") {
            this.binaryInput.value = "";
            this.binaryWarn.style.display = `block`;
            return false;
        } else {
            const binContainer = Number(binaryNumber);

            if (
                binContainer.toLocaleString().includes(2) ||
                binContainer.toLocaleString().includes(3) ||
                binContainer.toLocaleString().includes(4) ||
                binContainer.toLocaleString().includes(5) ||
                binContainer.toLocaleString().includes(6) ||
                binContainer.toLocaleString().includes(7) ||
                binContainer.toLocaleString().includes(8) ||
                binContainer.toLocaleString().includes(9)
            ) {
                this.decimalWarn.style.display = `none`;
                this.binaryInput.value = ``;
                this.binaryWarn.style.display = `block`;
                return false;
            } else {
                this.binaryWarn.style.display = `none`;
                this.digitInput.value = parseInt(binContainer, 2);
            }
        }
    }
}

const converted = new InputCovert();

converted.convertBtn.addEventListener("click", function() {
    converted.checkBinInput();
    converted.checkDigInput();
});

converted.reset.addEventListener("click", function() {
    converted.resetInput();
});