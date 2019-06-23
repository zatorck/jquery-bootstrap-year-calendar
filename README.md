# jQuery and Bootstrap 3/4 Year Calendar
This is simple jQuery and Bootstrap 3&4 calendar. Hope some1 will like it.

## DEMO
[Simple demo](https://allset.pl/zatorck/jquery-bootstrap-year-calendar/examples/basic.html "Simple demo")

## Author
Piotr Zatorski
Website: [allset.pl](https://allset.pl "Allset")

## Instalation
Download `jquery.bootstrap.year.calendar.min.css` and `jquery.bootstrap.year.calendar.min.js` and include them in right places on your site.

## Basic Usage
```html
  <div id="calendar"></div>
  <script> $('#calendar').calendar();</script>
```

## Options refenece
Option name: `boostrapVersion`  
Description:  choose boostrap compatibile
Default: *4*  
Accepts: *integer * (3 or 4)
 
Option name: `showHeaders`  
Description:  determine if show months name  
Default: *true*  
Accepts: *boolean*  
  
Option name: `startYear`  
Description:  start calendar from this year  
Default: current year  
Accepts: *integer*  
  
Option name: `maxYear`  
Description:  max year to show  
Default: *null*  
Accepts: *integer*  
  
Option name: `maxDay`  
Description:  max day able to choose  
Default: *null*  
Accepts: *integer*  
  
Option name: `maxMonth`    
Description:  max month able to choose  
Default: *null*    
Accepts: *integer*  
  
Option name: `maxDayMessage`    
Description:  Massage to alert when not max day is clicked  
Default: *You can not choose day from past*  
Accepts: *string or false*    
  
 Option name: `minYear`  
Description:  min year to show  
Default: *null*  
Accepts: *integer*  
  
Option name: `minDay`  
Description:  min day able to choose  
Default: *null*  
Accepts: *integer*  
  
Option name: `minMonth`    
Description:  min month able to choose  
Default: *null*    
Accepts: *integer*  
  
Option name: `minDayMessage`    
Description:  Massage to alert when not min day is clicked  
Default: *You can not choose day from past*  
Accepts: *string or false*    
    
Option name: `cols`  
Description:  add  bootstrap cols-*cols* class to months view (IGNORE IT IN BOOTSTRAP 3)  
Default: *12*  
Accepts: *integer*  (1-12)  
  
Option name: `colsSm`  
Description:  add  bootstrap cols-sm-*cols* class to months view  
Default: *6*  
Accepts: *integer*  (1-12)  
  
Option name: `colMd`  
Description:  add  bootstrap cols-md-*cols* class to months view  
Default: *4*
Accepts: *integer*  (1-12)

Option name: `colsLg`  
Description:  add  bootstrap cols-lg-*cols* class to months view  
Default: *3*  
Accepts: *integer*  (1-12)  
  
Option name: `colsXl`  
Description:  add  bootstrap cols-xl-*cols* class to months view   (IGNORE IT IN BOOTSTRAP 3)  
Default: *3*  
Accepts: *integer*  (1-12)  
  
Option name: `mode`  
Description:  choose mode of using (check mode *xxx* options reference)   
Default: *classic*  
Accepts: *string* (accepts: classic, rangepicker)   

Option name: `startFromSunday`  
Description: choose to start calendar form sunday    
Default: *false*  
Accepts: *boolean* 


## Mode: classic  function refenece
Option name: `addUniqueClassOnClick`  
Description:  add  class to day on click  
Default: *false*  
Accepts: *integer*   
 
## Mode: rangepicker  function refenece
Option name: `maxDaysToChoose`  
Description:  choose how many days user can choose;  
Default: *false*  
Accepts: *integer*   
   
Option name: `maxDaysToChooseMessage`    
Description:  massage to alert when choosen more than maxDaysToChoose in range picker  
Default: *Maximum days to choose is: * -here you got maxDaysToChoose integer.  
Accepts: *string or false* 
 
## Options example
You need to choose option when initalizing calendar like this
```html
<script>
	$('#calendar').calendar({
		showHeaders: false
	});
</script>
```

## Function refence
Function name: `appendText`  
Description: Append text to specyfic day.  
Parameters: *(text*(**string (also accepts html)**)*, year*(**integer**)*, month*(**integer**)*, day*(**integer**)*, classes*(**string**)*)*   

Function name: `clearText`  
Description: Clear text to specyfic day.  
Parameter: *year*(**integer**)*, month*(**integer**)*, day*(**integer**)*, classes*(**string**)*)*   

Function name: `clearTextFromAll`  
Description: Clear text from all days.   
Parameter: *none*

Function name: `recalcHeight`  
Description: Recalc tables height, in case of columns mismatch   
Parameters: *none*

## Mode: rangepicker functions reference
Function name: `addRange`  
Description: Add range form rangepicker programmatically (eg. for reading from database)  
Parameters: *startYear*(**integer**)*, startMonth*(**integer**)*, startDay*(**integer**)*, *endYear*(**integer**)*, *endMonth*(**integer**)*, *endDay*(**integer**)*

## Functions example
```html
<div class="calendar"></div>
$('.calendar').calendar();
$('.calendar').calendar('appendText', '(3)', 2018, 3, 4);
```

#### Protip for *appendText*  function
If you want to use it with chaning year funcionality, you need to use event called `changeYear`. See this example:
```html
<div class="calendar"></div>
<script>
    $('.calendar').calendar();

    appendToCalendar();
    $('.calendar').on('jqyc.changeYear', function (event) {
        appendToCalendar();
    });

    function appendToCalendar() {
        $('.calendar').calendar('appendText', '(3)', 2018, 3, 4);
    }
</script>
```

## Events reference
There are 7 events available at the moment. You can use is simply calling it, like in example.

Event name: `jqyc.changeYearToPrevious`
Tiggered: When year is changed to previous

Event name: `jqyc.changeYearToNext` .
Tiggered: When year is changed to next

 Event name: `jqyc.changeYear` .
Tiggered: When year is changed to any

Event name: `jqyc.dayChoose` .
Tiggered: When day in range is choosen

Event name: `jqyc.notMinDayChoose` .
Tiggered: When day out of range is choosen

Event name: `jqyc.notMaxDayChoose` .
Tiggered: When day out of range is choosen

Event name: `jqyc.outOfRangeDayChoose` .
Tiggered: When day out of range is choosen

## Mode: rangepicker events reference
Event name: `jqyc.rangeChoose` .
Tiggered: When valid range is choosen
  
## Event example
```html
<div class="container">
    <div class="calendar"></div>
</div>
<script>
    $('.calendar').calendar();

	//tiggered when year is chaned to previous
    $('.calendar').on('jqyc.changeYearToPrevious', function (event) {
        var currentYear = $(this).find('.jqyc-change-year').data('year');
        console.log(currentYear);
    });

	//tiggered when year is chaned to next
    $('.calendar').on('jqyc.changeYearToNext', function (event) {
        var currentYear = $(this).find('.jqyc-next-year').data('year');
        console.log(currentYear);
    });

	//tiggered when day is clicked
    $('.calendar').on('jqyc.dayChoose', function (event) {
        var choosenYear = $(this).data('year');
        var choosenMonth = $(this).data('month');
        var choosenDay = $(this).data('day-of-month');
        var date = new Date(choosenYear, choosenMonth, choosenDay);
        console.log(date);
    });

    //tiggered when range is choosen (ONLY FOR MODE: RANGEPICKER)
    $('.calendar').on('jqyc.rangeChoose', function (event) {
        var startChoosenYear = $(this).data('rangepicker-start-year');
        var startChoosenMonth = $(this).data('rangepicker-start-month');
        var startChoosenDay = $(this).data('rangepicker-start-day-of-month');
        var startDate = new Date(startChoosenYear, startChoosenMonth, startChoosenDay);
        console.log(startDate);

        var endChoosenYear = $(this).data('rangepicker-end-year');
        var endChoosenMonth = $(this).data('rangepicker-end-month');
        var endChoosenDay = $(this).data('rangepicker-end-day-of-month');
        var endDate = new Date(endChoosenYear, endChoosenMonth, endChoosenDay);
        console.log(endDate);
    });
</script>
```

## l10n
Localization is very easy. You can simply localize Your calendar by passing options at the calendar declaration. See example above.
```html
<div class="calendar"></div>
<script>
    $('.calendar').calendar({
        l10n:{
            jan: "Styczeń",
            feb: "Luty",
            mar: "Marzec",
            apr: "Kwiecień",
            may: "Maj",
            jun: "Czerwiec",
            jul: "Lipiec",
            aug: "Sierpień",
            sep: "Wrzesień",
            oct: "Październik",
            nov: "Listopad",
            dec: "Grudzień",
            mn: "Pm",
            tu: "Wt",
            we: 'Śr',
            th: 'Cz',
            fr: 'Pt',
            sa: 'So',
            su: 'Nd'
        }
    });
</script>
```

### Bug report
If You found any bug please report me on github, I will do my best to repeair it.