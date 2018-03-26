# jQuery and Bootstrap 4 Year Calendar
This is simple jQuery and Bootstrap 4 calendar. Hope some1 will like it.

## DEMO
[Simple demo](https://allset.pl/zatorck/jquery-bootstrap-year-calendar/examples/basic.html "Simple demo")

## Author
Piotr Zatorski
Website: [allset.pl](https://allset.pl "Allset")

## Instalation
Download `jquery.bootstrap.year.calendar.min.css` and `jquery.bootstrap.year.calendar.min.js` and include them in right places on your site.

## Basic Usage
```html
  <div class="calendar"></div>
  <script> $('#calendar').calendar();</script>
```

## Options refenece
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

 Option name: `minYear`
Description:  min year to show
Default: *null*
Accepts: *integer*

Option name: `cols`
Description:  add  bootstrap cols-*cols* class to months view
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
Description:  add  bootstrap cols-xl-*cols* class to months view
Default: *3*
Accepts: *integer*  (1-12)

Option name: `addClassOnClick`
Description:  add  class to day on click
Default: *false*
Accepts: *integer*  (1-12)

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
Description; Append text to specyfic day.
Parameters: *(text*(**string**)*, year*(**integer**)*, month*(**integer**)*, day*(**integer**)*, classes*(**string**)*)*

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
There are 4 events available at the moment. You can use is simply calling it, like in example.

Event name: `jqyc.changeYearToPrevious`
Tiggered: When year is changed to previous

Event name: `jqyc.changeYearToNext` .
Tiggered: When year is changed to next

 Event name: `jqyc.changeYear` .
Tiggered: When year is changed to any

Event name: `jqyc.dayChoose` .
Tiggered: When any day is choosen
  
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



