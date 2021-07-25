module.exports = get_Day

function get_Day(){

    var today = new Date();

    var options = {

        weekday : "long",
    };

    var day = today.toLocaleDateString("en-US",options);
    return day;
}