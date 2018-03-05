(function ($) {

    $.fn.calendar = function () {

        var currentDate = new Date();
        var currentYear = currentDate.getFullYear();
        var firstDayOfCurrentYear = new Date(currentYear, 0).getDay();
        var currentLeapYear = ((currentYear % 4 == 0) && (currentYear % 100 != 0)) || (currentYear % 400 == 0);
        if(currentLeapYear){
            var daysOfFeb=29;
        }else{
            daysOfFeb = 28;
        }
        var domSkeleton = '<div class="jqyc-months"><div class="jqyc-month jqyc-jan"></div><div class="jqyc-month jqyc-feb"></div><div class="jqyc-month jqyc-mar"></div><div class="jqyc-month jqyc-apr"></div><div class="jqyc-month jqyc-may"></div><div class="jqyc-month jqyc-jun"></div> <div class="jqyc-month jqyc-jul"></div> <div class="jqyc-month jqyc-aug"></div><div class="jqyc-month jqyc-sep"></div><div class="jqyc-month jqyc-oct"></div><div class="jqyc-month jqyc-nov"></div><div class="jqyc-month jqyc-dec"></div></div>'
        var tableSkeleton = '<div class="jqyc-month">' +
            '<table class="table table-sm jqyc-table">' +
            '<thead><tr class="jqyc-tr jqyc-thead-tr"><th class="jqyc-th" scope="col">Mn</th><th class="jqyc-th" scope="col">Tu</th><th class="jqyc-th" scope="col">We</th><th class="jqyc-th" scope="col">Th</th><th class="jqyc-th" scope="col">Fr</th><th class="jqyc-th" scope="col">Sa</th><th class="jqyc-th" scope="col">Su</th></tr></thead>' +
            '<tbody></tbody>' +
            '</table></div>';

        var $html = $(this);

        $html.append(domSkeleton);


        var results = jqycGetMonthHTMLStringWithData(firstDayOfCurrentYear);
        var monthHTMLString = results.monthHTMLString;
        $html.find('.jqyc-jan').append('<h5 class="jqyc-header">January</h5>').append(tableSkeleton).find('tbody').append(monthHTMLString);

        var results = jqycGetMonthHTMLStringWithData(results.firstDayOfPreviousMonth, daysOfFeb)
        var monthHTMLString = results.monthHTMLString;
        $html.find('.jqyc-feb').append('<h5 class="jqyc-header">February</h5>').append(tableSkeleton).find('tbody').append(monthHTMLString);

        var results = jqycGetMonthHTMLStringWithData(results.firstDayOfPreviousMonth, 31)
        var monthHTMLString = results.monthHTMLString;
        $html.find('.jqyc-mar').append('<h5 class="jqyc-header">March</h5>').append(tableSkeleton).find('tbody').append(monthHTMLString);

        var results = jqycGetMonthHTMLStringWithData(results.firstDayOfPreviousMonth, 30)
        var monthHTMLString = results.monthHTMLString;
        $html.find('.jqyc-apr').append('<h5 class="jqyc-header">April</h5>').append(tableSkeleton).find('tbody').append(monthHTMLString);

        var results = jqycGetMonthHTMLStringWithData(results.firstDayOfPreviousMonth, 31)
        var monthHTMLString = results.monthHTMLString;
        $html.find('.jqyc-may').append('<h5 class="jqyc-header">May</h5>').append(tableSkeleton).find('tbody').append(monthHTMLString);

        var results = jqycGetMonthHTMLStringWithData(results.firstDayOfPreviousMonth, 30)
        var monthHTMLString = results.monthHTMLString;
        $html.find('.jqyc-jun').append('<h5 class="jqyc-header">June</h5>').append(tableSkeleton).find('tbody').append(monthHTMLString);

        var results = jqycGetMonthHTMLStringWithData(results.firstDayOfPreviousMonth, 31)
        var monthHTMLString = results.monthHTMLString;
        $html.find('.jqyc-jul').append('<h5 class="jqyc-header">September</h5>').append(tableSkeleton).find('tbody').append(monthHTMLString);

        var results = jqycGetMonthHTMLStringWithData(results.firstDayOfPreviousMonth, 30)
        var monthHTMLString = results.monthHTMLString;
        $html.find('.jqyc-aug').append('<h5 class="jqyc-header">October</h5>').append(tableSkeleton).find('tbody').append(monthHTMLString);

        var results = jqycGetMonthHTMLStringWithData(results.firstDayOfPreviousMonth, 31)
        var monthHTMLString = results.monthHTMLString;
        $html.find('.jqyc-sep').append('<h5 class="jqyc-header">November</h5>').append(tableSkeleton).find('tbody').append(monthHTMLString);

        var results = jqycGetMonthHTMLStringWithData(results.firstDayOfPreviousMonth, 30)
        var monthHTMLString = results.monthHTMLString;
        $html.find('.jqyc-oct').append('<h5 class="jqyc-header">December</h5>').append(tableSkeleton).find('tbody').append(monthHTMLString);

        var results = jqycGetMonthHTMLStringWithData(results.firstDayOfPreviousMonth, 30)
        var monthHTMLString = results.monthHTMLString;
        $html.find('.jqyc-nov').append('<h5 class="jqyc-header">Styczeń</h5>').append(tableSkeleton).find('tbody').append(monthHTMLString);

        var results = jqycGetMonthHTMLStringWithData(results.firstDayOfPreviousMonth, 31)
        var monthHTMLString = results.monthHTMLString;
        $html.find('.jqyc-dec').append('<h5 class="jqyc-header">Styczeń</h5>').append(tableSkeleton).find('tbody').append(monthHTMLString);

        return this;

    };

}(jQuery));

function jqycGetMonthHTMLStringWithData(firstDay, days = 31) {

    if(firstDay == 0){
        firstDay = 7;
    }

    var monthHTMLString = '';

    var d = 1;
    var i = 1;

    while (d <= days) {

        if (i % 7 == 1) {
            monthHTMLString = monthHTMLString + '<tr class="jqyc-tr jqyc-tbody-tr">'
        }
        if (i < firstDay) {
            d--;
            monthHTMLString = monthHTMLString + '<td class="jqyc-empty-td jqyc-td"></td>';
        } else {
            monthHTMLString = monthHTMLString + '<td class="jqyc-not-empty-td jqyc-td">' + d + '</td>';
        }
        if (i % 7 == 0) {
            monthHTMLString = monthHTMLString + '</tr>'
        }
        i++;
        d++;
    }

    return {monthHTMLString: monthHTMLString, firstDayOfPreviousMonth: (i % 7)};
}
