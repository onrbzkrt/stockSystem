// Bootstrap Datepicker
$(function() {
    var isRtl = $('html').attr('dir') === 'rtl';

    $('#datepicker-base').datepicker({
        orientation: isRtl ? 'auto right' : 'auto left'
    });
    $('#datepicker-features').datepicker({
        calendarWeeks:         true,
        todayBtn:              'linked',
        daysOfWeekDisabled:    '1',
        clearBtn:              true,
        todayHighlight:        true,
        multidate:             true,
        daysOfWeekHighlighted: '1,2',
        orientation: isRtl ? 'auto left' : 'auto right',

        beforeShowMonth: function(date) {
            if (date.getMonth() === 8) {
                return false;
            }
        },

        beforeShowYear: function(date){
            if (date.getFullYear() === 2014) {
                return false;
            }
        }
    });
    $('#datepicker-range').datepicker({
        orientation: isRtl ? 'auto right' : 'auto left'
    });
    $('#datepicker-inline').datepicker();
});

// Bootstrap Daterangepicker
$(function() {
    var isRtl = $('body').attr('dir') === 'rtl' || $('html').attr('dir') === 'rtl';

    $('#daterange-1').daterangepicker({
        opens: (isRtl ? 'left' : 'right'),
        showWeekNumbers: true
    });

    $('#daterange-2').daterangepicker({
        timePicker: true,
        timePickerIncrement: 30,
        locale: {
            format: 'MM/DD/YYYY h:mm A'
        },
        opens: (isRtl ? 'left' : 'right')
    });

    $('#daterange-3').daterangepicker({
            singleDatePicker: true,
            showDropdowns: true,
            opens: (isRtl ? 'left' : 'right'),
            locale: {
                format: 'DD/MM/YYYY'
            }
        }, function(start, end, label) {
            var years = moment().diff(start, 'years');

            // alert("You are " + years + " years old.");
        }
    );

    // Button

    var start = moment().subtract(29, 'days');
    var end = moment();

    function cb(start, end) {
        var date_start = new Date(start);
        var date_end = new Date(end);

        var options = { year: 'numeric', month: 'short', day: 'numeric' };

        // console.log(date_start.toLocaleDateString('tr-TR', options))

        $('#daterange-4').html(date_start.toLocaleDateString('tr-TR', options) + ' - ' + date_end.toLocaleDateString('tr-TR', options));

        $('#baslangic_tarihi').val(start.format('YYYY-MM-DD'));
        $('#bitis_tarihi').val(end.format('YYYY-MM-DD'));
        $('#daterange-4').html(date_start.toLocaleDateString('tr-TR', options) + ' - ' + date_end.toLocaleDateString('tr-TR', options));
    }

    $('#daterange-4').daterangepicker({
        startDate: start,
        endDate: end,
        timePicker24Hour: true,
        ranges: {
            'Bugün': [moment(), moment()],
            'Dün': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Son 7 Gün': [moment().subtract(6, 'days'), moment()],
            'Son 30 Gün': [moment().subtract(29, 'days'), moment()],
            'Bu Ay': [moment().startOf('month'), moment().endOf('month')],
            'Geçen Ay': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        },
        opens: (isRtl ? 'left' : 'right'),
        locale: {
            "format": "DD/MM/YYYY",
            "separator": " - ",
            "applyLabel": "Uygula",
            "cancelLabel": "Vazgeç",
            "fromLabel": "Dan",
            "toLabel": "a",
            "customRangeLabel": "Seç",
            "daysOfWeek": [
                "Pz",
                "Pt",
                "Sl",
                "Çr",
                "Pr",
                "Cm",
                "Ct"
            ],
            "monthNames": [
                "Ocak",
                "Şubat",
                "Mart",
                "Nisan",
                "Mayıs",
                "Haziran",
                "Temmuz",
                "Ağustos",
                "Eylül",
                "Ekim",
                "Kasım",
                "Aralık"
            ],
            "firstDay": 1
        }
    }, cb);

    cb(start, end);
});

// Bootstrap Material DateTimePicker
$(function() {
    $('#b-m-dtp-date').bootstrapMaterialDatePicker({
        weekStart: 1,
        time: false,
        clearButton: true,
        format : 'DD/MM/YYYY',
        lang: 'tr',
        cancelText: 'Geri',
        okText: 'OK',
        clearText: 'Temizle',
    });

    $('#b-m-dtp-time').bootstrapMaterialDatePicker({
        weekStart: 1,
        time: false,
        clearButton: true,
        format : 'DD/MM/YYYY',
        lang: 'tr',
        cancelText: 'Geri',
        okText: 'OK',
        clearText: 'Temizle',
    });

    $('#b-m-dtp-datetime').bootstrapMaterialDatePicker({
        weekStart: 1,
        format : 'dddd DD MMMM YYYY - HH:mm',
        shortTime: true,
        nowButton : true,
        minDate : new Date()
    });
});

// jQuery Timepicker
$(function() {
    var isRtl = $('body').attr('dir') === 'rtl' || $('html').attr('dir') === 'rtl';

    $('#timepicker-example-1').timepicker({
        scrollDefault: 'now',
        orientation: (isRtl ? 'r' : 'l')
    });

    $('#timepicker-example-2').timepicker({
        minTime: '2:00pm',
        maxTime: '11:30pm',
        showDuration: true,
        orientation: (isRtl ? 'r' : 'l')
    });

    $('#timepicker-example-3').timepicker({
        disableTimeRanges: [
            ['1am', '2am'],
            ['3am', '4:01am']
        ],
        orientation: (isRtl ? 'r' : 'l')
    });

    $('#timepicker-example-4').timepicker({
        'timeFormat': 'H:i:s',
        orientation: (isRtl ? 'r' : 'l')
    });
    $('#timepicker-example-5').timepicker({
        'timeFormat': 'h:i A',
        orientation: (isRtl ? 'r' : 'l')
    });

    $('#timepicker-example-6').timepicker({
        'step': 15,
        orientation: (isRtl ? 'r' : 'l')
    });
});

