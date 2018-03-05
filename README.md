# jQuery and Bootstrap 4 Year Calendar
This is simple jQuery and Bootstrap 4 calendar. Hope some1 will like it.

##DEMO
[Simple demo](https://allset.pl/zatorck/jquery-bootstrap-year-calendar/examples/basic.html "Simple demo")

##Author
Piotr Zatorski
[Allset](https://allset.pl "Allset")

##Instalation
Download `jquery.bootstrap.year.calendar.css` and `jquery.bootstrap.year.calendar.js` or `jquery.bootstrap.year.calendar.min.css` and `jquery.bootstrap.year.calendar.min.js` and include them in right places on your site.

##Basic Usage
```html
  <div class="calendar"></div>
  <script> $('#calendar').calendar();</script>
```

##Options example
You need to choose option when initalizing calendar like this
```html
<script>
	$('#calendar').calendar({
		showHeader: false
	});
</script>
```

##Options refenece
`showHeaders` - determine if show months name (default: *true*) (accepts: *boolean*)

`startYear` - start from this year (default is current year) (accepts: *integer*)

`maxYear` - max year to show (default: *null*) (accepts: *integer* or *null*)

`minYear` - min year to show  (default: *null*) (accepts: *integer* or *null*)

`cols` - bootstrap cols  (default: *12*) (accepts: *integer*  from 1 to 12)

`colsSm` - bootstrap SM cols  (default: *6*) (accepts: *integer*  from 1 to 12)

`colsMd` - bootstrap MD cols  (default: *4*) (accepts: *integer*  from 1 to 12)

`colsLG` - bootstrap LG cols  (default: *3*) (accepts: *integer*  from 1 to 12)

`colsXL` - bootstrap XL cols  (default: *3*) (accepts: *integer*  from 1 to 12)

##Events
There are 3 events available at the moment. You can use is simply calling it, like in example.

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
