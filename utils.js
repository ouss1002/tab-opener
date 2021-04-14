const _ = require("underscore");

pathToChrome = "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe";

cia_link = "https://www.cia.gov/the-world-factbook/countries/"

keys = [
    "Norway", 
	"Switzerland", 
	"Australia", 
	"Germany", 
	"Singapore", 
	"Sweden", 
	"Finland", 
	"Canada", 
	"(US),(United States),(United-States)", 
	"(UK),(United Kingdom),(United-Kingdom)", 
	"Japan", 
	"(South Korea),(South-Korea)", 
	"Israel", 
	"Luxemburg", 
	"Spain", 
	"Czechia", 
	"France", 
	"Greece", 
	"Poland", 
	"(Saudi Arabia),(Saudi-Arabia) ", 
	"Qatar", 
	"Chile", 
	"Argentina", 
	"Russia", 
	"Romania", 
	"Turkey", 
	"Malaysia", 
	"Iran", 
	"Thailand", 
	"Mexico", 
	"Brazil", 
	"Colombia", 
	"Algeria", 
	"China", 
	"Ukraine", 
	"Mongolia", 
	"World", 
	"Indonesia", 
	"(South Africa),(South-Africa)", 
	"Bolivia", 
	"Gabon", 
	"Egypt", 
	"Vietnam", 
	"Morocco", 
	"India", 
	"Kenya", 
	"Pakistan", 
	"Nigeria", 
	"Madagascar", 
	"(Ivory Coast),(Ivory-Coast)", 
	"Togo", 
	"Senegal", 
	"Haiti", 
	"Ethiopia", 
	"Guinea", 
	"Mali", 
	"(Burkina Faso),(Burkina-Faso)", 
	"Niger"
];
values = [
    "norway", 
	
	"switzerland", 
	
	"australia", 
	
	"germany", 
	
	"singapore", 
	
	"sweden", 
	
	"finland", 
	
	"canada", 
	
	"united-states", 
	
	"united-kingdom", 
	
	"japan", 
	
	"korea-south", 
	
	"israel", 
	
	"luxemburg",
    "spain", 
	
	"czechia", 
	
	"france", 
	
	"greece", 
	
	"poland", 
	
	"saudi-arabia ", 
	
	"qatar ", 
	
	"chile", 
	
	"argentina", 
	
	"russia", 
	
	"romania", 
	
	"turkey", 
	
	"malaysia", 
	
	"iran", 
	
	"thailand", 
	
	"mexico", 
	
	"brazil", 
	
	"colombia", 
	
	"algeria", 
	
	"china", 
	
	"ukraine", 
	
	"mongolia", 
	
	"world", 
	
	"indonesia", 
	
	"south-africa", 
	
	"bolivia", 
	
	"gabon", 
	
	"egypt", 
	
	"vietnam", 
	
	"morocco", 
	
	"india", 
	
	"kenya", 
	
	"pakistan", 
	
	"nigeria", 
	
	"madagascar", 
	
	"cote-divoire", 
	
	"togo", 
	
	"senegal", 
	
	"haiti", 
	
	"ethiopia", 
	
	"guinea", 
	
	"mali", 
	
	"burkina-faso", 
	
	"niger"
];
countries = {};

const zipped = _.zip(keys, values);

for(tuple of zipped) {
    keys = tuple[0].split(",");
    value = tuple[1];
    for(key of keys) {
        let str = key.replace("(", "");
        str = key.replace(")", "");
        
        countries[str] = value;
        countries[str.toUpperCase()] = value;
        countries[str.toLowerCase()] = value;
    }
}

module.exports = {
    pathToChrome,
    cia_link,
    countries,
}