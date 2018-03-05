/**
 * jQuery  Bootstrap year calendar 1.0.0
 * Copyright 2018, Allset
 * Licensed under the MIT license.

 * @author Piotr Zatorski
 */
(function ($) {

    var methods = {
        init: function (options) {

        },
        destroy: function () {
            this.empty();
        },
        bind: function (event) {
            alert('event');

        },
        hide: function () {
            this.hide();
        }
    };

    $.fn.calendar = function (options) {
        $calendar = this;


        if (methods[options]) {
            return methods[options].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof options === 'object' || !options) {

            settings = $.extend({}, $.fn.calendar.defaults, options);

            createWholeCalendar(settings, this);

            $calendar.find('.jqyc-prev-year').on("click", showPreviousYear,);
            $calendar.find('.jqyc-next-year').on("click", showNextYear);
            $calendar.find('.jqyc-not-empty-td').on("click", triggerDayChoose);

            function showPreviousYear() {
                var currentYear = parseInt($(this).parent().parent().data('currentYear'));

                $calendar.trigger('jqyc.changeYearToPrevious');
                settings.startYear = settings.startYear - 1;
                createWholeCalendar(settings, $calendar);
                $calendar.find('.jqyc-prev-year').on("click", showPreviousYear);
                $calendar.find('.jqyc-next-year').on("click", showNextYear);
                $(this).parent().parent().data('currentYear', currentYear);
            }

            function showNextYear() {
                var currentYear = parseInt($(this).parent().parent().data('currentYear'));
                settings.startYear = settings.startYear + 1;
                createWholeCalendar(settings, $calendar);
                $calendar.trigger('jqyc.changeYearToNext');
                $calendar.find('.jqyc-prev-year').on("click", showPreviousYear);
                $calendar.find('.jqyc-next-year').on("click", showNextYear);
                $(this).parent().parent().data('currentYear', currentYear);
            }

            function triggerDayChoose() {
                $calendar.data('day-of-month', $(this).data('day-of-month'));
                $calendar.data('month', $(this).data('month'));
                $calendar.data('year', $(this).data('year'));
                $calendar.trigger('jqyc.dayChoose');
            }

            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + options + ' does not exist on jQuery.tooltip');
        }


    };


    var currentDate = new Date();

    $.fn.calendar.defaults = {
        showHeaders: true,
        startYear: currentDate.getFullYear(),
        maxYear: null,
        minYear: null,
        cols: 12,
        colsSm: 6,
        colsMd: 4,
        colsLg: 3,
        colsXl: 3,
        i10n: {
            jan: "January",
            feb: "February",
            mar: "March",
            apr: "April",
            may: "May",
            jun: "June",
            jul: "July",
            aug: "Augst",
            sep: "September",
            oct: "October",
            nov: "November",
            dec: "December",
            mn: "Mn",
            tu: "Tu",
            we: 'We',
            th: 'TH',
            fr: 'Fr',
            sa: 'Sa',
            su: 'Su'
        }
    };


    function createWholeCalendar(settings, $this) {
        $this.empty();


        var year = settings.startYear;
        var firstDayOfCurrentYear = new Date(year, 0).getDay();
        var leapYear = ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
        if (leapYear) {
            var daysOfFeb = 29;
        } else {
            daysOfFeb = 28;
        }

        var domSkeleton = '<div class="jqyc" ><div class="jqyc-year-chooser border-top border-bottom row align-items-center" data-current-year="' + year + '">' +
            '<div class="col text-left">' +
            '   <button type="button" class="btn btn-primary btn-sm jqyc-prev-year jqyc-change-year" data-year="' + (year - 1) + '">&larr;</button>' +
            '</div>' +
            '<div class="col text-center text-muted"><small>' + (year - 1) + '</small></div>' +
            '<div class="jqyc-year col">' + year + '</div>' +
            '<div class="col text-center text-muted"><small>' + (year + 1) + '</small></div>' +
            '<div class="col text-right">' +
            '   <button type="button" class="btn btn-primary btn-sm jqyc-next-year jqyc-change-year" data-year="' + (year) + '">&rarr;</button>' +
            '</div>' +
            '</div>' +
            '<div class="jqyc-months mt-4">' +
            '<div class="jqyc-month jqyc-jan" data-month="1" data-year="' + year + '"></div>' +
            '<div class="jqyc-month jqyc-feb" data-month="2" data-year="' + year + '"></div>' +
            '<div class="jqyc-month jqyc-mar" data-month="3" data-year="' + year + '"></div>' +
            '<div class="jqyc-month jqyc-apr" data-month="4" data-year="' + year + '"></div>' +
            '<div class="jqyc-month jqyc-may" data-month="5" data-year="' + year + '"></div>' +
            '<div class="jqyc-month jqyc-jun" data-month="6" data-year="' + year + '"></div>' +
            '<div class="jqyc-month jqyc-jul" data-month="7" data-year="' + year + '"></div>' +
            '<div class="jqyc-month jqyc-aug" data-month="8" data-year="' + year + '"></div>' +
            '<div class="jqyc-month jqyc-sep" data-month="9" data-year="' + year + '"></div>' +
            '<div class="jqyc-month jqyc-oct" data-month="10" data-year="' + year + '"></div>' +
            '<div class="jqyc-month jqyc-nov" data-month="11" data-year="' + year + '"></div>' +
            '<div class="jqyc-month jqyc-dec" data-month="12" data-year="' + year + '"></div>' +
            '</div></div>';

        var tableSkeleton = '<table class="table table-sm jqyc-table">' +
            '<thead>' +
            '<tr class="jqyc-tr jqyc-thead-tr">' +
            '<th class="jqyc-th" scope="col">' + settings.i10n.mn + '</th>' +
            '<th class="jqyc-th" scope="col">' + settings.i10n.tu + '</th>' +
            '<th class="jqyc-th" scope="col">' + settings.i10n.we + '</th>' +
            '<th class="jqyc-th" scope="col">' + settings.i10n.th + '</th>' +
            '<th class="jqyc-th" scope="col">' + settings.i10n.fr + '</th>' +
            '<th class="jqyc-th" scope="col">' + settings.i10n.sa + '</th>' +
            '<th class="jqyc-th" scope="col">' + settings.i10n.su + '</th>' +
            '</tr>' +
            '</thead>' +
            '<tbody></tbody>' +
            '</table>';

        var $html = $($this);

        $html.append(domSkeleton);


        var results = jqycGetMonthHTMLStringWithData(firstDayOfCurrentYear, 1, year, 31);
        var monthHTMLString = results.monthHTMLString;
        if (settings.showHeaders) {
            $html.find('.jqyc-jan').append('<h5 class="jqyc-header">' + settings.i10n.jan + '</h5>');
        }
        $html.find('.jqyc-jan').append(tableSkeleton).find('tbody').append(monthHTMLString);

        var results = jqycGetMonthHTMLStringWithData(results.firstDayOfPreviousMonth, 2, year, daysOfFeb)
        var monthHTMLString = results.monthHTMLString;
        if (settings.showHeaders) {
            $html.find('.jqyc-feb').append('<h5 class="jqyc-header">' + settings.i10n.feb + '</h5>');
        }
        $html.find('.jqyc-feb').append(tableSkeleton).find('tbody').append(monthHTMLString);

        var results = jqycGetMonthHTMLStringWithData(results.firstDayOfPreviousMonth, 3, year, 31)
        var monthHTMLString = results.monthHTMLString;
        if (settings.showHeaders) {
            $html.find('.jqyc-mar').append('<h5 class="jqyc-header">' + settings.i10n.mar + '</h5>');
        }
        $html.find('.jqyc-mar').append(tableSkeleton).find('tbody').append(monthHTMLString);

        var results = jqycGetMonthHTMLStringWithData(results.firstDayOfPreviousMonth, 4, year, 30)
        var monthHTMLString = results.monthHTMLString;
        if (settings.showHeaders) {
            $html.find('.jqyc-apr').append('<h5 class="jqyc-header">' + settings.i10n.apr + '</h5>');
        }
        $html.find('.jqyc-apr').append(tableSkeleton).find('tbody').append(monthHTMLString);

        var results = jqycGetMonthHTMLStringWithData(results.firstDayOfPreviousMonth, 5, year, 31)
        var monthHTMLString = results.monthHTMLString;
        if (settings.showHeaders) {
            $html.find('.jqyc-may').append('<h5 class="jqyc-header">' + settings.i10n.may + '</h5>');
        }
        $html.find('.jqyc-may').append(tableSkeleton).find('tbody').append(monthHTMLString);

        var results = jqycGetMonthHTMLStringWithData(results.firstDayOfPreviousMonth, 6, year, 30)
        var monthHTMLString = results.monthHTMLString;
        if (settings.showHeaders) {
            $html.find('.jqyc-jun').append('<h5 class="jqyc-header">' + settings.i10n.jun + '</h5>');
        }
        $html.find('.jqyc-jun').append(tableSkeleton).find('tbody').append(monthHTMLString);

        var results = jqycGetMonthHTMLStringWithData(results.firstDayOfPreviousMonth, 7, year, 31)
        var monthHTMLString = results.monthHTMLString;
        if (settings.showHeaders) {
            $html.find('.jqyc-jul').append('<h5 class="jqyc-header">' + settings.i10n.jul + '</h5>');
        }
        $html.find('.jqyc-jul').append(tableSkeleton).find('tbody').append(monthHTMLString);

        var results = jqycGetMonthHTMLStringWithData(results.firstDayOfPreviousMonth, 8, year, 31)
        var monthHTMLString = results.monthHTMLString;
        if (settings.showHeaders) {
            $html.find('.jqyc-aug').append('<h5 class="jqyc-header">' + settings.i10n.aug + '</h5>');
        }
        $html.find('.jqyc-aug').append(tableSkeleton).find('tbody').append(monthHTMLString);

        var results = jqycGetMonthHTMLStringWithData(results.firstDayOfPreviousMonth, 9, year, 30)
        var monthHTMLString = results.monthHTMLString;
        if (settings.showHeaders) {
            $html.find('.jqyc-sep').append('<h5 class="jqyc-header">' + settings.i10n.sep + '</h5>');
        }
        $html.find('.jqyc-sep').append(tableSkeleton).find('tbody').append(monthHTMLString);

        var results = jqycGetMonthHTMLStringWithData(results.firstDayOfPreviousMonth, 10, year, 31)
        var monthHTMLString = results.monthHTMLString;
        if (settings.showHeaders) {
            $html.find('.jqyc-oct').append('<h5 class="jqyc-header">' + settings.i10n.oct + '</h5>');
        }
        $html.find('.jqyc-oct').append(tableSkeleton).find('tbody').append(monthHTMLString);

        var results = jqycGetMonthHTMLStringWithData(results.firstDayOfPreviousMonth, 11, year, 30)
        var monthHTMLString = results.monthHTMLString;
        if (settings.showHeaders) {
            $html.find('.jqyc-nov').append('<h5 class="jqyc-header">' + settings.i10n.nov + '</h5>');
        }
        $html.find('.jqyc-nov').append(tableSkeleton).find('tbody').append(monthHTMLString);

        var results = jqycGetMonthHTMLStringWithData(results.firstDayOfPreviousMonth, 12, year, 31)
        var monthHTMLString = results.monthHTMLString;
        if (settings.showHeaders) {
            $html.find('.jqyc-dec').append('<h5 class="jqyc-header">' + settings.i10n.dec + '</h5>');
        }
        $html.find('.jqyc-dec').append(tableSkeleton).find('tbody').append(monthHTMLString);

        if (settings.cols != 12) {
            $this.find('.jqyc-months').addClass('row');
            $this.find('.jqyc-month').addClass('col-' + settings.cols)
        }

        if (settings.colsSm != 12) {
            $this.find('.jqyc-months').addClass('row');
            $this.find('.jqyc-month').addClass('col-sm-' + settings.colsSm)
        }

        if (settings.colsMd != 12) {
            $this.find('.jqyc-months').addClass('row');
            $this.find('.jqyc-month').addClass('col-md-' + settings.colsMd)
        }

        if (settings.colsLg != 12) {
            $this.find('.jqyc-months').addClass('row');
            $this.find('.jqyc-month').addClass('col-lg-' + settings.colsLg)
        }

        if (settings.colsXl != 12) {
            $this.find('.jqyc-months').addClass('row');
            $this.find('.jqyc-month').addClass('col-xl-' + settings.colsXl)
        }

        if (settings.minYear && settings.minYear >= year) {
            $calendar.find('.jqyc-prev-year').hide();
        }

        if (settings.maxYear && settings.maxYear <= year) {
            $calendar.find('.jqyc-next-year').hide();
        }

    }

    function jqycGetMonthHTMLStringWithData(firstDay, month, year, days = 31) {

        if (firstDay == 0) {
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
                monthHTMLString = monthHTMLString +
                    '<td class="jqyc-not-empty-td jqyc-td jqyc-day-' + d
                    + ' jqyc-day-of-' + month + '-month" data-month="' + month
                    + '" data-day-of-month="' + d + '" data-year="' + year + '">' + d + '</td>';
            }
            if (i % 7 == 0) {
                monthHTMLString = monthHTMLString + '</tr>'
            }
            i++;
            d++;
        }

        return {monthHTMLString: monthHTMLString, firstDayOfPreviousMonth: (i % 7)};
    }


}(jQuery));



