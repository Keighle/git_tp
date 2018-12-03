class Date1{
    year : number;
    month : number;
    day : number;
    yearPlus : number = 1;
    constructor(year : number, month : number, day : number ){
        this.year = year;
        this.month = month;
        this.day = day;
    }
    getyear():number {
        return this.year;
    }

    setyear(year :number ) {
        this.year = year;
    }

    getmonth(): number {
        return this.month;
    }

    setmonth(month : number){
        this.month = month; 
    }

    getday():number {
        return this.day;
    }

    setday(day : number) {
        this.day = day;
    }

    toString(){
        let date:string = this.year+'-'+this.month+'-'+this.day;
        return date;
    } 

    create(year:number, month:number, day:number) {
        this.year = year;
        this.month = month;
        this.day = day;
        let defaulDate : string = this.year+"-"+this.month+"-"+this.day;
      return defaulDate;
    }

    setDate(year:number, month:number, day:number) {
        this.year = year;
        this.month = month;
        this.day = day;
        if(month <= 13 && day <= 31)
      return this.create(year,month,day);
    }

    yesterday():string{
     return this.create(this.year,this.month,(this.day - 1));
    }

    tomorrow():string {
     return this.create(this.year,this.month,(this.day + 1));
    }

    addDay(dayPlus:number = 1) {
    return this.create(this.year,this.month,(this.day + dayPlus));
    }

     subDay(dayPlus:number = 1) {
    return this.create(this.year,this.month,(this.day - dayPlus));
        }

    addmonth(monthPlus : number = 1){
        return this.create(this.year,this.month,(this.day + monthPlus));
        }

    addyear(yearPlus:number = 1) {
        return this.create(this.year,this.month,(this.day + yearPlus));
        }

    submonth(monthPlus:number = 1) {
            return this.create(this.year,this.month,(this.day - monthPlus));
            }
    subyear(yearPlus:number = 1) {
            return this.create(this.year,this.month,(this.day - yearPlus));
        }
    } 
