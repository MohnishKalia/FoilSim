import React from "react";

/**
 * Class shape
 * This class has all the variables and functions common to all the five shapes
 * used in the Foil Sim Student program
 */
export class Shape {
    /**
     * Constructor receives
     * angle
     * camber
     * thickness
     * velocity
     * altitude
     * chord
     * span
     * wing Area
     *
     * Shape object is created with 8 parameters
     */

    constructor(
        angle,
        camber,
        thickness,
        velocity,
        altitude,
        chord,
        span,
        wingArea
    ) {
        this.angle = angle;
        this.camber = camber;
        this.thickness = thickness;
        this.velocity = velocity;
        this.altitude = altitude;
        this.chord = chord;
        this.span = span;
        this.wingArea = wingArea;
    }

    /**
     *
     * @param {number} angle - expressed in degrees
     */
    setAngle(angle) {
        this.angle = angle;
    }

    /**
     *
     * @param {number} camber - as percentage of chord
     */
    setCamber(camber) {
        this.camber = camber;
    }

    /**
     *
     * @param {number} thickness - as percentage of chord
     */
    setThickness(thickness) {
        this.thickness = thickness;
    }

    /**
     *
     * @param {number} velocity
     */
    setVelocity(velocity) {
        this.velocity = velocity;
    }

    /**
     *
     * @param {number} altitude
     */
    setAltitude(altitude) {
        this.altitude = altitude;
    }

    /**
     *
     * @param {number} chord
     */
    setChord(chord) {
        this.chord = chord;
    }

    /**
     *
     * @param {number} span
     */
    setSpan(span) {
        this.span = span;
    }

    /**
     *
     * @param {number} wingArea
     */
    setWingArea(wingArea) {
        this.wingArea = wingArea;
    }

    /**
     * returns angle value in degrees
     */
    getAngle() {
        return this.angle;
    }

    /**
     * returns camber value
     */
    getCamber() {
        return this.camber;
    }

    /**
     * returns thickness value
     */
    getThickness() {
        return this.thickness;
    }

    /**
     * returns velocity value
     */
    getVelocity() {
        return this.velocity;
    }

    /**
     * returns altitude value
     */
    getAltitude() {
        return this.altitude;
    }

    /**
     * returns chord value
     */
    getChord() {
        return this.chord;
    }

    /**
     * returns span value
     */

    getSpan() {
        return this.span;
    }

    /**
     * returns aspect ratio
     * the aspect ratio is the span divided by the chord
     */
    getAspr() {
        var chord = this.getChord();
        var span = this.getSpan();
        var aspr = span / chord;

        return aspr;
    }

    /**
     * returns wing area
     */
    getWingArea() {
        return this.wingArea;
    }

    /**
     * returns ideal gas constant for earth
     */
    getRGasEarth() {
        var rgas = 1716;
        return rgas;
    }

    /**
     * returns gama earth
     */
    getGamaEarth() {
        var gama = 1.4;

        return gama;
    }

    /**
     * this function returns the conversion factor to convert degrees to radians
     */
    getConvDr() {
        var convdr = Math.PI / 180;
        return convdr;
    }

    /**
     * This function returns the division of PI over 2
     */
    getPiD2() {
        var pid2 = Math.PI / 2.0;
        return pid2;
    }

    /**
     * This function returns the vacuum permeability
     */
    getMu0() {
        var mu0 = 0.000000362;

        return mu0;
    }

    /**
     * This function returns the conversion factor for velocity units
     * The function knows if we are using imperial or metric units
     */
    getVconv() {
        var vconv = 0;
        var units = document.getElementById("unitsButton").innerHTML;

        if (units == "english â–¼") vconv = 0.6818;
        else if (units == "metric â–¼") vconv = 1.097;

        return vconv;
    }

    /**
     * This function returns the conversion factor for lenght units
     * The function knows if we are using imperial or metric units
     */
    getLconv() {
        var lconv = 0;
        var units = document.getElementById("unitsButton").innerHTML;

        if (units == "english â–¼") lconv = 1.0;
        else if (units == "metric â–¼") lconv = 0.3048;

        return lconv;
    }

    /**
     * This function returns the conversion factor for force units
     * The function knows if we are using imperial or metric units
     */
    getFconv() {
        var fconv = 0;
        var units = document.getElementById("unitsButton").innerHTML;

        if (units == "english â–¼") fconv = 1.0;
        else if (units == "metric â–¼") fconv = 4.448;

        return fconv;
    }

    /**
     * This function returns the conversion factor for pressure units
     * The function knows if we are using imperial or metric units
     */
    getPconv() {
        var pconv = 0;
        var units = document.getElementById("unitsButton").innerHTML;

        if (units == "english â–¼") pconv = 14.7;
        else if (units == "metric â–¼") pconv = 101.3;

        return pconv;
    }

    /**
     * This function returns the Hite
     * The hite is the altitude divided by the lenght conversion factor
     */
    getHite() {
        var altitude = this.getAltitude();
        var lconv = this.getLconv();
        var hite = altitude / lconv;

        return hite;
    }

    /**
     * This function returns the relative humidity
     */
    getRelativeHumidity() {
        var rlhum;

        if (environmentSelect <= 2) rlhum = 0.0;
        else if (environmentSelect == 3) rlhum = 100.0;

        return rlhum;
    }

    /**
     * This function returns the earth temperature in kelvins it is dependent on the altitude
     * */

    getTempEarth() {
        var hite = this.getHite();
        var tempEarth = 0;

        if (hite <= 36152)
            // troposphere
            tempEarth = 518.6 - (3.56 * hite) / 1000;
        else if (hite >= 36152 && hite <= 82345)
            // Stratosphere
            tempEarth = 389.98;

        return tempEarth;
    }

    /**
     * This function returns the pressure of the earth it is dependent on the altitude
     */
    getPressureEarth() {
        var tempEarth = this.getTempEarth();
        var hite = this.getHite();
        var pressureEarth = 0;

        if (hite <= 36152)
            // troposphere
            pressureEarth = 2116.0 * Math.pow(tempEarth / 518.6, 5.256);
        else if (hite >= 36152 && hite <= 82345)
            // stratosphere
            pressureEarth =
                2116 * 0.2236 * Math.exp((36000.0 - hite) / (53.35 * 389.98));

        return pressureEarth;
    }

    /**
     * This function returns the temperature of the earth in Farenheit
     */
    getTemfEarth() {
        var tempEarth = this.getTempEarth();
        var temf = tempEarth - 459.6;

        if (temf <= 0.0) temf = 0.0;

        return temf;
    }

    /**
     * This function returs the pressure vapor of the earth
     */
    getPvapEarth() {
        var temf = this.getTemfEarth();
        var rlhum = 0.0;
        var pvap = (rlhum * (2.685 + 0.00354 * Math.pow(temf, 2.245))) / 100;

        return pvap;
    }

    /**
     * This function returns the density of the air on earth
     */
    getRhoEarth() {
        var ps0 = this.getPressureEarth();
        var rgas = this.getRGasEarth();
        var ts0 = this.getTempEarth();
        var rho = ps0 / (rgas * ts0);
        var pvap = this.getPvapEarth();
        var rho = (ps0 - 0.379 * pvap) / (rgas * ts0);

        return rho;
    }

    /**
     * This function returns the viscosity of the earth
     */
    getViscosEarth() {
        var mu0 = this.getMu0();
        var ts0 = this.getTempEarth();
        var viscos =
            ((mu0 * 717.408) / (ts0 + 198.72)) * Math.pow(ts0 / 518.688, 1.5);

        return viscos;
    }

    /**
     * This function returns the ideal gas constant for Mars
     */
    getRGasMars() {
        var rgas = 1149;

        return rgas;
    }

    /**
     * This function returns the gama value for Mars
     */
    getGamaMars() {
        var gama = 1.29;
        return gama;
    }

    /**
     * This function returns the temperature of Mars in Kelvin
     */
    getTempMars() {
        var hite = this.getHite();
        var tempMars = 0;

        if (hite <= 22960)
            // troposphere
            tempMars = 434.02 - (0.548 * hite) / 1000;
        else if (hite > 22960)
            // Stratosphere
            tempMars = 449.36 - (1.217 * hite) / 1000;

        return tempMars;
    }

    /**
     * This function returns the pressure of Mars
     */
    getPressureMars() {
        var hite = this.getHite();
        var pressureMars = 0;

        if (hite <= 22960)
            // troposphere
            pressureMars = 14.62 * Math.pow(2.71828, -0.00003 * hite);
        else if (hite > 22960)
            // Stratosphere
            pressureMars = 14.62 * Math.pow(2.71828, -0.00003 * hite);

        return pressureMars;
    }

    /**
     * This function returns the density of Mars
     */
    getRhoMars() {
        var ts0 = this.getTempMars();
        var rgas = this.getRGasMars();
        var ps0 = this.getPressureMars();
        var rho = ps0 / (rgas * ts0);

        return rho;
    }

    /**
     * This function returns the viscosity of Mars
     */
    getViscosMars() {
        var ts0 = this.getTempMars();
        var mu0 = this.getMu0();
        var viscos =
            ((mu0 * 717.408) / (ts0 + 198.72)) * Math.pow(ts0 / 518.688, 1.5);

        return viscos;
    }

    /**
     * This function returns the depht of the shape in the water
     */
    getHiteConstWater() {
        var altitude = this.getAltitude();
        var lconv = this.getLconv();
        var hite = -altitude / lconv;

        return hite;
    }

    /**
     * This function returns the water temperature in Kelvins
     */
    getWaterTemp() {
        var temp = 520;
        return temp;
    }

    /**
     * This function returns the density of water in slug/ft3
     */
    getRhoWater() {
        var rho = 1.94;
        return rho;
    }

    /**
     * This function returns the water pressure
     */
    getPressureWater() {
        var g0;
        if (getUnits() == 1) g0 = 32.2;
        else if (getUnits() == 2) g0 = 9.81;
        var hite = this.getHiteConstWater();
        var rho = this.getRhoWater();
        var ps0 = 2116 - rho * g0 * hite;
        return ps0;
    }

    /**
     * This function returns the dynamic pressure of water
     */
    getQ0Water() {
        var vconv = this.getVconv();
        var vfsd = this.getVelocity();
        var rho = this.getRhoWater();
        var q0 = (0.5 * rho * vfsd * vfsd) / (vconv * vconv);

        return q0;
    }

    /**
     * This function returns the vacuum permeability
     */
    getMu0Water() {
        var mu0 = 0.0000272;
        return mu0;
    }

    /**
     * This function returns the viscosity of water
     */
    getViscosWater() {
        var ts0 = this.getWaterTemp();
        var mu0 = this.getMu0Water();
        var viscos =
            ((mu0 * 717.408) / (ts0 + 198.72)) * Math.pow(ts0 / 518.688, 1.5);
        return viscos;
    }

    /**
     * This function returns the gas constant for Venus
     */
    getRGasVenus() {
        var rgas = 1149;
        return rgas;
    }

    /**
     * This function returns the gama value for Venus
     */
    getGamaVenus() {
        var gama = 1.29;
        return gama;
    }

    /**
     * This function returns the Venus surface temperature in Kelvins
     */
    getTempVenus() {
        var ts0 = 1331.6;
        return ts0;
    }

    /**
     * This function returns the Surface pressure of Venus
     */
    getPressureVenus() {
        var ps0 = 194672;
        return ps0;
    }

    /**
     * This function returns the surface density of Venus
     */
    getRhoVenus() {
        var ts0 = this.getTempVenus();
        var rgas = this.getRGasVenus();
        var ps0 = this.getPressureVenus();
        var rho = ps0 / (rgas * ts0);

        return rho;
    }

    /**
     * This function returns the viscosity of Venus
     */
    getViscosVenus() {
        var ts0 = this.getTempVenus();
        var mu0 = this.getMu0();
        var viscos =
            ((mu0 * 717.408) / (ts0 + 198.72)) * Math.pow(ts0 / 518.688, 1.5);

        return viscos;
    }

    /**
     * This function returns the dynamic pressure of Earth
     */
    getQ0Earth() {
        var vconv = this.getVconv();
        var vfsd = this.getVelocity();
        var rho = this.getRhoEarth();
        var q0 = (0.5 * rho * vfsd * vfsd) / (vconv * vconv);
        return q0;
    }

    /**
     * This function returns the dynamic pressure of Mars
     */
    getQ0Mars() {
        var vconv = this.getVconv();
        var vfsd = this.getVelocity();
        var rho = this.getRhoMars();
        var q0 = (0.5 * rho * vfsd * vfsd) / (vconv * vconv);
        return q0;
    }

    /**
     * This function returns the dynamic pressure of Venus
     */
    getQ0Venus() {
        var vconv = this.getVconv();
        var vfsd = this.getVelocity();
        var rho = this.getRhoVenus();
        var q0 = (0.5 * rho * vfsd * vfsd) / (vconv * vconv);
        return q0;
    }

    /**
     * This function returns the Pt0 of Earth
     */
    getPt0Earth() {
        var q0 = this.getQ0Earth();
        var ps0 = this.getPressureEarth();
        var pt0 = ps0 + q0;
        return pt0;
    }

    /**
     * This function returns the Pt0 of Mars
     */
    getPt0Mars() {
        var q0 = this.getQ0Mars();
        var ps0 = this.getPressureMars();
        var pt0 = ps0 + q0;
        return pt0;
    }

    /**
     * This function returns the Pt0 of Venus
     */
    getPt0Venus() {
        var q0 = this.getQ0Venus();
        var ps0 = this.getPressureVenus();
        var pt0 = ps0 + q0;
        return pt0;
    }

    /**
     * This function returns the Reynolds number
     * environmentSelect = 1, Reynolds number on Earth conditions
     * environmentSelect = 2, Reynolds number on Mars conditions
     * environmentSelect = 3, Reynolds number on Water constant density conditions
     * environmentSelect = 4, Reynolds number on Venus Surface
     */
    getReynolds() {
        var rho = 0;
        var viscos = 0;

        if (environmentSelect == 1) {
            rho = this.getRhoEarth();
            viscos = this.getViscosEarth();
        } else if (environmentSelect == 2) {
            rho = this.getRhoMars();
            viscos = this.getViscosMars();
        } else if (environmentSelect == 3) {
            rho = this.getRhoWater();
            viscos = this.getViscosWater();
        } else if (environmentSelect == 4) {
            rho = this.getRhoVenus();
            viscos = this.getViscosVenus();
        }
        var lconv = this.getLconv();
        var chord = this.getChord();
        var vfsd = this.getVelocity();
        var vconv = this.getVconv();
        var reynolds = ((((vfsd / vconv) * chord) / lconv) * rho) / viscos;

        return reynolds;
    }
}

/**
 * The Airfoil class is a child class of Shape
 * The Airfoil class constructor uses the same parameters as Shape
 * Therefore, we call the Shape constructor using the super() method
 * This class gives us more precise methods of the Airfoil like the Geometry, Lift, Drag.
 */

export class Airfoil extends Shape {
    constructor(
        angle,
        camber,
        thickness,
        velocity,
        altitude,
        chord,
        span,
        wingArea
    ) {
        super(angle, camber, thickness, velocity, altitude, chord, span, wingArea);
    }

    /**
     * This method returns the camber divided by 25 it is used for animation purposes
     */
    getCamVal() {
        var caminpt = this.getCamber();
        var camval = caminpt / 25.0;

        return camval;
    }

    /**
     * This method returns the thickness divided by 25 it is used for animation purposes
     */
    getThkVal() {
        var thkinpt = this.getThickness();
        var thkval = thkinpt / 25.0;

        return thkval;
    }

    /**
     * This method returns the initial ycoordinate for the airfoil
     */

    getYcVal() {
        var camval = this.getCamVal();
        var ycval = camval / 2.0;

        return ycval;
    }

    /**
     * This method returns the radius value of the airfoil
     */
    getRVal() {
        var ycval = this.getYcVal();
        var thkval = this.getThkVal();
        var rval =
            thkval / 4.0 + Math.sqrt((thkval * thkval) / 16.0 + ycval * ycval + 1.0);
        return rval;
    }

    /**
     * This method returns the initial xcoordinate value for the airfoil
     */
    getXcVal() {
        var ycval = this.getYcVal();
        var rval = this.getRVal();
        var xcval = 1.0 - Math.sqrt(rval * rval - ycval * ycval);

        return xcval;
    }

    /**
     * This method returns the beta angle value
     */
    getBeta() {
        var convdr = this.getConvDr();
        var rval = this.getRVal();
        var ycval = this.getYcVal();
        var beta = Math.asin(ycval / rval) / convdr;

        return beta;
    }

    /**
     * This method returns the gama angle value
     */
    getGamval() {
        var convdr = this.getConvDr();
        var beta = this.getBeta();
        var alfval = this.getAngle();
        var rval = this.getRVal();
        var gamval = 2.0 * rval * Math.sin((alfval + beta) * convdr);
        return gamval;
    }

    /**
     * The following functions
     * getLeg()
     * getTeg()
     * getLem()
     * getTem()
     *
     * are used to calculate the chord for calculations
     */
    getLeg() {
        var xcval = this.getXcVal();
        var ycval = this.getYcVal();
        var rval = this.getRVal();
        var leg = xcval - Math.sqrt(rval * rval - ycval * ycval);

        return leg;
    }

    getTeg() {
        var rval = this.getRVal();
        var xcval = this.getXcVal();
        var ycval = this.getYcVal();
        var teg = xcval + Math.sqrt(rval * rval - ycval * ycval);

        return teg;
    }

    getLem() {
        var leg = this.getLeg();
        var lem = leg + 1.0 / leg;

        return lem;
    }

    getTem() {
        var teg = this.getTeg();
        var tem = teg + 1.0 / teg;

        return tem;
    }
    /**
     * This function returns the chord lenght value of the airfoil for calculations
     */
    getChrd() {
        var tem = this.getTem();
        var lem = this.getLem();
        var chrd = tem - lem;

        return chrd;
    }

    /**
     * This function returns the liftCoefficient value for the Joukowski Airfoil
     * It uses the angle value, gamval and chrd value
     *
     */
    getLiftCoefficient() {
        //obtain the inputs
        const pi = Math.PI;

        var angle = this.getAngle();

        //Juokowski geometry
        var liftCoefficient;
        var gamval = this.getGamval();

        // calculate lift coefficient

        //var leg = this.getLeg();
        //var teg = this.getTeg();
        var chrd = this.getChrd();
        liftCoefficient = (gamval * 4.0 * pi) / chrd;

        var stfact;

        if (angle > 10.0) stfact = 0.5 + 0.1 * angle - 0.005 * angle * angle;
        else if (angle < -10) stfact = 0.5 - 0.1 * angle - 0.005 * angle * angle;
        else stfact = 1.0;

        liftCoefficient = liftCoefficient * stfact;

        /**
         * This is for the Aspect Ratio Lift correction
         */
        if (ar == true)
            liftCoefficient =
                liftCoefficient / (1.0 + Math.abs(liftCoefficient) / (pi * 4.0));

        /**
         * If the velocity is 0 then the lift Coefficient is 0
         */
        if (this.getVelocity() == 0) liftCoefficient = 0;

        return liftCoefficient;
    }

    /**
     * This function returns the lift value for the Joukowski Airfoil
     * The inputs are:
     *
     * wingArea
     * angle of attack
     * liftCoefficient
     * dynamic pressure (q0)
     *
     * Depending on the environment the dynamic Pressure will change
     */
    getLift() {
        //obtain the inputs
        const pi = Math.PI;

        var wingArea = this.getWingArea();
        var angle = this.getAngle();
        var radians = (angle * pi) / 180;
        var lift;
        var lconv = this.getLconv();
        var fconv = this.getFconv();

        // calculate lift coefficient
        var vconv = this.getVconv();
        var liftCoefficient = this.getLiftCoefficient();

        //calculate q0
        var q0Earth = this.getQ0Earth();
        var q0Mars = this.getQ0Mars();
        var q0Water = this.getQ0Water();
        var q0Venus = this.getQ0Venus();

        if (environmentSelect == 1) {
            lift = (q0Earth * wingArea * liftCoefficient) / lconv / lconv;
        } else if (environmentSelect == 2) {
            lift = (q0Mars * wingArea * liftCoefficient) / lconv / lconv;
        } else if (environmentSelect == 3) {
            lift = (q0Water * wingArea * liftCoefficient) / lconv / lconv;
        } else if (environmentSelect == 4) {
            lift = (q0Venus * wingArea * liftCoefficient) / lconv / lconv;
        }

        lift = lift * fconv;

        return lift;
    }

    /**
     * This function returns the dragCoefficient
     * Many of the values were determined experimentally in a wind tunnel
     * They were all taken from the Foil Sim Student Java applet
     *
     * The inputs are:
     *
     * angle of attack
     * camber
     * thickness
     * lift coefficient
     * reynolds number
     */
    getDragCoefficient() {
        var dragco;
        var dragCam0Thk5, dragCam5Thk5, dragCam10Thk5, dragCam15Thk5, dragCam20Thk5;
        var dragCam0Thk10,
            dragCam5Thk10,
            dragCam10Thk10,
            dragCam15Thk10,
            dragCam20Thk10;
        var dragCam0Thk15,
            dragCam5Thk15,
            dragCam10Thk15,
            dragCam15Thk15,
            dragCam20Thk15;
        var dragCam0Thk20,
            dragCam5Thk20,
            dragCam10Thk20,
            dragCam15Thk20,
            dragCam20Thk20;
        var dragThk5, dragThk10, dragThk15, dragThk20;
        var dragCam0, dragCam5, dragCam10, dragCam15, dragCam20;
        var camd = this.getCamber();
        var thkd = this.getThickness();
        var alfd = this.getAngle();

        dragCam0Thk5 =
            -9e-7 * Math.pow(alfd, 3) +
            0.0007 * Math.pow(alfd, 2) +
            0.0008 * alfd +
            0.015;
        dragCam5Thk5 =
            4e-8 * Math.pow(alfd, 5) -
            7e-7 * Math.pow(alfd, 4) -
            1e-5 * Math.pow(alfd, 3) +
            0.0009 * Math.pow(alfd, 2) +
            0.0033 * alfd +
            0.0301;
        dragCam10Thk5 =
            -9e-9 * Math.pow(alfd, 6) -
            6e-8 * Math.pow(alfd, 5) +
            5e-6 * Math.pow(alfd, 4) +
            3e-5 * Math.pow(alfd, 3) -
            0.0001 * Math.pow(alfd, 2) -
            0.0025 * alfd +
            0.0615;
        dragCam15Thk5 =
            8e-10 * Math.pow(alfd, 6) -
            5e-8 * Math.pow(alfd, 5) -
            1e-6 * Math.pow(alfd, 4) +
            3e-5 * Math.pow(alfd, 3) +
            0.0008 * Math.pow(alfd, 2) -
            0.0027 * alfd +
            0.0612;
        dragCam20Thk5 =
            8e-9 * Math.pow(alfd, 6) +
            1e-8 * Math.pow(alfd, 5) -
            5e-6 * Math.pow(alfd, 4) +
            6e-6 * Math.pow(alfd, 3) +
            0.001 * Math.pow(alfd, 2) -
            0.001 * alfd +
            0.1219;

        dragCam0Thk10 =
            -1e-8 * Math.pow(alfd, 6) +
            6e-8 * Math.pow(alfd, 5) +
            6e-6 * Math.pow(alfd, 4) -
            2e-5 * Math.pow(alfd, 3) -
            0.0002 * Math.pow(alfd, 2) +
            0.0017 * alfd +
            0.0196;
        dragCam5Thk10 =
            3e-9 * Math.pow(alfd, 6) +
            6e-8 * Math.pow(alfd, 5) -
            2e-6 * Math.pow(alfd, 4) -
            3e-5 * Math.pow(alfd, 3) +
            0.0008 * Math.pow(alfd, 2) +
            0.0038 * alfd +
            0.0159;
        dragCam10Thk10 =
            -5e-9 * Math.pow(alfd, 6) -
            3e-8 * Math.pow(alfd, 5) +
            2e-6 * Math.pow(alfd, 4) +
            1e-5 * Math.pow(alfd, 3) +
            0.0004 * Math.pow(alfd, 2) -
            3e-5 * alfd +
            0.0624;
        dragCam15Thk10 =
            -2e-9 * Math.pow(alfd, 6) -
            2e-8 * Math.pow(alfd, 5) -
            5e-7 * Math.pow(alfd, 4) +
            8e-6 * Math.pow(alfd, 3) +
            0.0009 * Math.pow(alfd, 2) +
            0.0034 * alfd +
            0.0993;
        dragCam20Thk10 =
            2e-9 * Math.pow(alfd, 6) -
            3e-8 * Math.pow(alfd, 5) -
            2e-6 * Math.pow(alfd, 4) +
            2e-5 * Math.pow(alfd, 3) +
            0.0009 * Math.pow(alfd, 2) +
            0.0023 * alfd +
            0.1581;

        dragCam0Thk15 =
            -5e-9 * Math.pow(alfd, 6) +
            7e-8 * Math.pow(alfd, 5) +
            3e-6 * Math.pow(alfd, 4) -
            3e-5 * Math.pow(alfd, 3) -
            7e-5 * Math.pow(alfd, 2) +
            0.0017 * alfd +
            0.0358;
        dragCam5Thk15 =
            -4e-9 * Math.pow(alfd, 6) -
            8e-9 * Math.pow(alfd, 5) +
            2e-6 * Math.pow(alfd, 4) -
            9e-7 * Math.pow(alfd, 3) +
            0.0002 * Math.pow(alfd, 2) +
            0.0031 * alfd +
            0.0351;
        dragCam10Thk15 =
            3e-9 * Math.pow(alfd, 6) +
            3e-8 * Math.pow(alfd, 5) -
            2e-6 * Math.pow(alfd, 4) -
            1e-5 * Math.pow(alfd, 3) +
            0.0009 * Math.pow(alfd, 2) +
            0.004 * alfd +
            0.0543;
        dragCam15Thk15 =
            3e-9 * Math.pow(alfd, 6) +
            5e-8 * Math.pow(alfd, 5) -
            2e-6 * Math.pow(alfd, 4) -
            3e-5 * Math.pow(alfd, 3) +
            0.0008 * Math.pow(alfd, 2) +
            0.0087 * alfd +
            0.1167;
        dragCam20Thk15 =
            3e-10 * Math.pow(alfd, 6) -
            3e-8 * Math.pow(alfd, 5) -
            6e-7 * Math.pow(alfd, 4) +
            3e-5 * Math.pow(alfd, 3) +
            0.0006 * Math.pow(alfd, 2) +
            0.0008 * alfd +
            0.1859;

        dragCam0Thk20 =
            -3e-9 * Math.pow(alfd, 6) +
            2e-8 * Math.pow(alfd, 5) +
            2e-6 * Math.pow(alfd, 4) -
            8e-6 * Math.pow(alfd, 3) -
            4e-5 * Math.pow(alfd, 2) +
            0.0003 * alfd +
            0.0416;
        dragCam5Thk20 =
            -3e-9 * Math.pow(alfd, 6) -
            7e-8 * Math.pow(alfd, 5) +
            1e-6 * Math.pow(alfd, 4) +
            3e-5 * Math.pow(alfd, 3) +
            0.0004 * Math.pow(alfd, 2) +
            5e-5 * alfd +
            0.0483;
        dragCam10Thk20 =
            1e-8 * Math.pow(alfd, 6) +
            4e-8 * Math.pow(alfd, 5) -
            6e-6 * Math.pow(alfd, 4) -
            2e-5 * Math.pow(alfd, 3) +
            0.0014 * Math.pow(alfd, 2) +
            0.007 * alfd +
            0.0692;
        dragCam15Thk20 =
            3e-9 * Math.pow(alfd, 6) -
            9e-8 * Math.pow(alfd, 5) -
            3e-6 * Math.pow(alfd, 4) +
            4e-5 * Math.pow(alfd, 3) +
            0.001 * Math.pow(alfd, 2) +
            0.0021 * alfd +
            0.139;
        dragCam20Thk20 =
            3e-9 * Math.pow(alfd, 6) -
            7e-8 * Math.pow(alfd, 5) -
            3e-6 * Math.pow(alfd, 4) +
            4e-5 * Math.pow(alfd, 3) +
            0.0012 * Math.pow(alfd, 2) +
            0.001 * alfd +
            0.1856;

        if (liftAnalisis == 2) {
            dragco = 0;
        } else {
            if (-20.0 <= camd && camd < -15.0) {
                dragThk5 =
                    (camd / 5 + 4) * (dragCam15Thk5 - dragCam20Thk5) + dragCam20Thk5;
                dragThk10 =
                    (camd / 5 + 4) * (dragCam15Thk10 - dragCam20Thk10) + dragCam20Thk10;
                dragThk15 =
                    (camd / 5 + 4) * (dragCam15Thk15 - dragCam20Thk15) + dragCam20Thk15;
                dragThk20 =
                    (camd / 5 + 4) * (dragCam15Thk20 - dragCam20Thk20) + dragCam20Thk20;

                if (1.0 <= thkd && thkd <= 5.0) {
                    dragco = dragThk5;
                } else if (5.0 < thkd && thkd <= 10.0) {
                    dragco = (thkd / 5 - 1) * (dragThk10 - dragThk5) + dragThk5;
                } else if (10.0 < thkd && thkd <= 15.0) {
                    dragco = (thkd / 5 - 2) * (dragThk15 - dragThk10) + dragThk10;
                } else if (15.0 < thkd && thkd <= 20.0) {
                    dragco = (thkd / 5 - 3) * (dragThk20 - dragThk15) + dragThk15;
                }
            } else if (-15.0 <= camd && camd < -10.0) {
                dragThk5 =
                    (camd / 5 + 3) * (dragCam10Thk5 - dragCam15Thk5) + dragCam15Thk5;
                dragThk10 =
                    (camd / 5 + 3) * (dragCam10Thk10 - dragCam15Thk10) + dragCam15Thk10;
                dragThk15 =
                    (camd / 5 + 3) * (dragCam10Thk15 - dragCam15Thk15) + dragCam15Thk15;
                dragThk20 =
                    (camd / 5 + 3) * (dragCam10Thk20 - dragCam15Thk20) + dragCam15Thk20;

                if (1.0 <= thkd && thkd <= 5.0) {
                    dragco = dragThk5;
                } else if (5.0 < thkd && thkd <= 10.0) {
                    dragco = (thkd / 5 - 1) * (dragThk10 - dragThk5) + dragThk5;
                } else if (10.0 < thkd && thkd <= 15.0) {
                    dragco = (thkd / 5 - 2) * (dragThk15 - dragThk10) + dragThk10;
                } else if (15.0 < thkd && thkd <= 20.0) {
                    dragco = (thkd / 5 - 3) * (dragThk20 - dragThk15) + dragThk15;
                }
            } else if (-10.0 <= camd && camd < -5.0) {
                dragThk5 =
                    (camd / 5 + 2) * (dragCam5Thk5 - dragCam10Thk5) + dragCam10Thk5;
                dragThk10 =
                    (camd / 5 + 2) * (dragCam5Thk10 - dragCam10Thk10) + dragCam10Thk10;
                dragThk15 =
                    (camd / 5 + 2) * (dragCam5Thk15 - dragCam10Thk15) + dragCam10Thk15;
                dragThk20 =
                    (camd / 5 + 2) * (dragCam5Thk20 - dragCam10Thk20) + dragCam10Thk20;

                if (1.0 <= thkd && thkd <= 5.0) {
                    dragco = dragThk5;
                } else if (5.0 < thkd && thkd <= 10.0) {
                    dragco = (thkd / 5 - 1) * (dragThk10 - dragThk5) + dragThk5;
                } else if (10.0 < thkd && thkd <= 15.0) {
                    dragco = (thkd / 5 - 2) * (dragThk15 - dragThk10) + dragThk10;
                } else if (15.0 < thkd && thkd <= 20.0) {
                    dragco = (thkd / 5 - 3) * (dragThk20 - dragThk15) + dragThk15;
                }
            } else if (-5.0 <= camd && camd < 0) {
                dragThk5 =
                    (camd / 5 + 1) * (dragCam0Thk5 - dragCam5Thk5) + dragCam5Thk5;
                dragThk10 =
                    (camd / 5 + 1) * (dragCam0Thk10 - dragCam5Thk10) + dragCam5Thk10;
                dragThk15 =
                    (camd / 5 + 1) * (dragCam0Thk15 - dragCam5Thk15) + dragCam5Thk15;
                dragThk20 =
                    (camd / 5 + 1) * (dragCam0Thk20 - dragCam5Thk20) + dragCam5Thk20;

                if (1.0 <= thkd && thkd <= 5.0) {
                    dragco = dragThk5;
                } else if (5.0 < thkd && thkd <= 10.0) {
                    dragco = (thkd / 5 - 1) * (dragThk10 - dragThk5) + dragThk5;
                } else if (10.0 < thkd && thkd <= 15.0) {
                    dragco = (thkd / 5 - 2) * (dragThk15 - dragThk10) + dragThk10;
                } else if (15.0 < thkd && thkd <= 20.0) {
                    dragco = (thkd / 5 - 3) * (dragThk20 - dragThk15) + dragThk15;
                }
            } else if (0 <= camd && camd < 5) {
                dragThk5 = (camd / 5) * (dragCam5Thk5 - dragCam0Thk5) + dragCam0Thk5;
                dragThk10 =
                    (camd / 5) * (dragCam5Thk10 - dragCam0Thk10) + dragCam0Thk10;
                dragThk15 =
                    (camd / 5) * (dragCam5Thk15 - dragCam0Thk15) + dragCam0Thk15;
                dragThk20 =
                    (camd / 5) * (dragCam5Thk20 - dragCam0Thk20) + dragCam0Thk20;

                if (1.0 <= thkd && thkd <= 5.0) {
                    dragco = dragThk5;
                } else if (5.0 < thkd && thkd <= 10.0) {
                    dragco = (thkd / 5 - 1) * (dragThk10 - dragThk5) + dragThk5;
                } else if (10.0 < thkd && thkd <= 15.0) {
                    dragco = (thkd / 5 - 2) * (dragThk15 - dragThk10) + dragThk10;
                } else if (15.0 < thkd && thkd <= 20.0) {
                    dragco = (thkd / 5 - 3) * (dragThk20 - dragThk15) + dragThk15;
                }
            } else if (5 <= camd && camd < 10) {
                dragThk5 =
                    (camd / 5 - 1) * (dragCam10Thk5 - dragCam5Thk5) + dragCam5Thk5;
                dragThk10 =
                    (camd / 5 - 1) * (dragCam10Thk10 - dragCam5Thk10) + dragCam5Thk10;
                dragThk15 =
                    (camd / 5 - 1) * (dragCam10Thk15 - dragCam5Thk15) + dragCam5Thk15;
                dragThk20 =
                    (camd / 5 - 1) * (dragCam10Thk20 - dragCam5Thk20) + dragCam5Thk20;

                if (1.0 <= thkd && thkd <= 5.0) {
                    dragco = dragThk5;
                } else if (5.0 < thkd && thkd <= 10.0) {
                    dragco = (thkd / 5 - 1) * (dragThk10 - dragThk5) + dragThk5;
                } else if (10.0 < thkd && thkd <= 15.0) {
                    dragco = (thkd / 5 - 2) * (dragThk15 - dragThk10) + dragThk10;
                } else if (15.0 < thkd && thkd <= 20.0) {
                    dragco = (thkd / 5 - 3) * (dragThk20 - dragThk15) + dragThk15;
                }
            } else if (10 <= camd && camd < 15) {
                dragThk5 =
                    (camd / 5 - 2) * (dragCam15Thk5 - dragCam10Thk5) + dragCam10Thk5;
                dragThk10 =
                    (camd / 5 - 2) * (dragCam15Thk10 - dragCam10Thk10) + dragCam10Thk10;
                dragThk15 =
                    (camd / 5 - 2) * (dragCam15Thk15 - dragCam10Thk15) + dragCam10Thk15;
                dragThk20 =
                    (camd / 5 - 2) * (dragCam15Thk20 - dragCam10Thk20) + dragCam10Thk20;

                if (1.0 <= thkd && thkd <= 5.0) {
                    dragco = dragThk5;
                } else if (5.0 < thkd && thkd <= 10.0) {
                    dragco = (thkd / 5 - 1) * (dragThk10 - dragThk5) + dragThk5;
                } else if (10.0 < thkd && thkd <= 15.0) {
                    dragco = (thkd / 5 - 2) * (dragThk15 - dragThk10) + dragThk10;
                } else if (15.0 < thkd && thkd <= 20.0) {
                    dragco = (thkd / 5 - 3) * (dragThk20 - dragThk15) + dragThk15;
                }
            } else if (15 <= camd && camd <= 20) {
                dragThk5 =
                    (camd / 5 - 3) * (dragCam20Thk5 - dragCam15Thk5) + dragCam15Thk5;
                dragThk10 =
                    (camd / 5 - 3) * (dragCam20Thk10 - dragCam15Thk10) + dragCam15Thk10;
                dragThk15 =
                    (camd / 5 - 3) * (dragCam20Thk15 - dragCam15Thk15) + dragCam15Thk15;
                dragThk20 =
                    (camd / 5 - 3) * (dragCam20Thk20 - dragCam15Thk20) + dragCam15Thk20;

                if (1.0 <= thkd && thkd <= 5.0) {
                    dragco = dragThk5;
                } else if (5.0 < thkd && thkd <= 10.0) {
                    dragco = (thkd / 5 - 1) * (dragThk10 - dragThk5) + dragThk5;
                } else if (10.0 < thkd && thkd <= 15.0) {
                    dragco = (thkd / 5 - 2) * (dragThk15 - dragThk10) + dragThk10;
                } else if (15.0 < thkd && thkd <= 20.0) {
                    dragco = (thkd / 5 - 3) * (dragThk20 - dragThk15) + dragThk15;
                }
            }

            var cldin = this.getLiftCoefficient();

            var reynolds = this.getReynolds();

            /**
             * The following is for the reynolds number correction
             */
            if (reCorrection == true)
                dragco = dragco * Math.pow(50000 / reynolds, 0.11);

            /**
             * The following is for the induced drag option
             */
            if (induced == true)
                dragco = dragco + (cldin * cldin) / (3.1415926 * aspr * 0.85);

            /**
             * If the velocity is 0 then the dragCoefficient will be 0
             */

            if (this.getVelocity() == 0) dragco = 0;
        }

        return dragco;
    }

    /**
     * This function returns the drag, the inputs are:
     *
     * wingArea
     * dragCoefficient
     * dynamic Pressure (q0), depends on the environment
     *
     *
     */
    getDrag() {
        var drag;
        var area = this.getWingArea();
        var q0Earth = this.getQ0Earth();
        var q0Mars = this.getQ0Mars();
        var q0Water = this.getQ0Water();
        var q0Venus = this.getQ0Venus();
        var lconv = this.getLconv();
        var dragCoeff = this.getDragCoefficient();
        var fconv = this.getFconv();

        if (environmentSelect == 1) {
            drag = (dragCoeff * q0Earth * area) / lconv / lconv; /* drag in lbs */
            drag = drag * fconv;
        } else if (environmentSelect == 2) {
            drag = (dragCoeff * q0Mars * area) / lconv / lconv; /* drag in lbs */
            drag = drag * fconv;
        } else if (environmentSelect == 3) {
            drag = (dragCoeff * q0Water * area) / lconv / lconv;
            drag = drag * fconv;
        } else if (environmentSelect == 4) {
            drag = (dragCoeff * q0Venus * area) / lconv / lconv;
            drag = drag * fconv;
        }

        return drag;
    }

    /**
     * This function returns the liftOverDrag
     */
    getLiftOverDrag() {
        var lift = this.getLift();
        var drag = this.getDrag();
        var liftOverDrag = lift / drag;

        if (this.getVelocity() == 0 || lift == 0 || drag == 0) liftOverDrag = 0;

        return liftOverDrag;
    }
}
