class Temperature {
    celcius;
    constructor(celcius) {

        this.celcius = celcius;

    }
    convertCtoF() {
        return (this.celcius * 1.8) + 32;
    }
    convertCtoK() {
        return this.celcius + 273;
    }
}
let celcius25 = new Temperature(-225)
document.write(celcius25.celcius + "độ C đổi sang" + celcius25.convertCtoF()+"F" );
document.write("</br>");
document.write(celcius25.celcius + "độ C đổi sang" + celcius25.convertCtoK()+"K" );