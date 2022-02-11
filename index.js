const returnFirstTwoDrivers = function (drivers){return drivers.slice(0,2)};
const returnLastTwoDrivers = function (drivers) {return drivers.slice(2,4)};
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function fareMultiplier(fare) {
        return fare * multiplier;
    }

}


function fareDoubler(fare){
    return fare *2
}
    
function fareTripler(fare){
    return fare * 3
}



console.log(returnFirstTwoDrivers(drivers))
function selectDifferentDrivers(arrayOfDrivers, functions) {
   return functions(arrayOfDrivers);
}

     





