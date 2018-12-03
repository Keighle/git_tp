var Date1 = /** @class */ (function () {
    function Date1(year, month, day) {
        this.yearPlus = 1;
        this.year = year;
        this.month = month;
        this.day = day;
    }
    Date1.prototype.getyear = function () {
        return this.year;
    };
    Date1.prototype.setyear = function (year) {
        this.year = year;
    };
    Date1.prototype.getmonth = function () {
        return this.month;
    };
    Date1.prototype.setmonth = function (month) {
        this.month = month;
    };
    Date1.prototype.getday = function () {
        return this.day;
    };
    Date1.prototype.setday = function (day) {
        this.day = day;
    };
    Date1.prototype.toString = function () {
        var date = this.year + '-' + this.month + '-' + this.day;
        return date;
    };
    Date1.prototype.create = function (year, month, day) {
        this.year = year;
        this.month = month;
        this.day = day;
        var defaulDate = this.year + "-" + this.month + "-" + this.day;
        return defaulDate;
    };
    Date1.prototype.setDate = function (year, month, day) {
        this.year = year;
        this.month = month;
        this.day = day;
        if (month <= 13 && day <= 31)
            return this.create(year, month, day);
    };
    Date1.prototype.yesterday = function () {
        return this.create(this.year, this.month, (this.day - 1));
    };
    Date1.prototype.tomorrow = function () {
        return this.create(this.year, this.month, (this.day + 1));
    };
    Date1.prototype.addDay = function (dayPlus) {
        if (dayPlus === void 0) { dayPlus = 1; }
        return this.create(this.year, this.month, (this.day + dayPlus));
    };
    Date1.prototype.subDay = function (dayPlus) {
        if (dayPlus === void 0) { dayPlus = 1; }
        return this.create(this.year, this.month, (this.day - dayPlus));
    };
    Date1.prototype.addmonth = function (monthPlus) {
        if (monthPlus === void 0) { monthPlus = 1; }
        return this.create(this.year, this.month, (this.day + monthPlus));
    };
    Date1.prototype.addyear = function (yearPlus) {
        if (yearPlus === void 0) { yearPlus = 1; }
        return this.create(this.year, this.month, (this.day + yearPlus));
    };
    Date1.prototype.submonth = function (monthPlus) {
        if (monthPlus === void 0) { monthPlus = 1; }
        return this.create(this.year, this.month, (this.day - monthPlus));
    };
    Date1.prototype.subyear = function (yearPlus) {
        if (yearPlus === void 0) { yearPlus = 1; }
        return this.create(this.year, this.month, (this.day - yearPlus));
    };
    return Date1;
}());
