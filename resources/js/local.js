var appointment_list = [];
var appointments = [];
var total_price = 0;
var temp = [];
var database = [];
var appointment_id = 0;

function detectMob() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];

    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}
$(document).ready(function(){
    $('.aniview').AniView();

    $("#close-loading-box").click(function(){
        
        
        $.alert({
            title:'Emin misiniz?', 
            content: "Yükleniyor penceresini kapattıktan sonra işlem yapabilme yetkisine sahip olursunuz, sistem'den cevap gelmeden başka bir işlem yapmanız durumunda yarım kalan işlemleriniz ortaya çıkabilir.", 
            type: 'red', 
            typeAnimated: true, 
            buttons: {
                ok:{
                    text:'Kabul Ediyorum, Kapat',
                    btnClass: 'btn-default', action: function(){
                        $(".loading-box").hide();
                    }
                }
            }
        })

    });

    $("#next-step").click(function(){
        var active_step = $("form").data('step');
        var length_step = $(".step").length;
        var next_step = active_step+1;
        if ( next_step <= length_step ) {
            $("form").data('step', next_step);
            $(".step").hide();
            $(".step-"+next_step).fadeIn();
            $("#prev-step").show();

            if ( next_step == 3 ) {
                $( ".content .jobs_input" ).attr("data-calculate", "off");
                $( ".step-"+next_step+" .content" ).css({"background-color" : "#FFFFFF"});
                $( ".jobs_input" ).prop("checked", false);
                $( ".step-"+next_step+" .content .jobs_input" ).attr("data-calculate", "on");

                var package_id = $("input[name='package']:checked").val();
                if ( typeof package_id != "undefined" ) {
                    var package_price = $("input[name='package']:checked").data('price');
                    total_price = 0;
                    calculate_price(package_price);

                    // Ajax Post
                    $.ajaxSetup({
                        headers: {
                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                        }
                    });
                    $.post('/package/jobs/list',{ package_id: package_id }).done(function( data ) {
                        data.forEach(element => {
                            document.getElementById( "extra_items"+element.job_id ).checked = true;
                            $(".extra_items"+element.job_id).css({"background-color" : "rgba(0, 123, 255,0.05)"});
                            $(".extra_items"+element.job_id+" .jobs_input").attr("data-calculate", "off");
                        });
                    });
                }
            }else if ( next_step == 4 ) {
                render_calendar();
            }else if( next_step == 5 ){

                var etext = "";

                if ( appointment_list.length < 1 ) {
                    etext = "Sonraki adıma geçebilmek için en az 1 adet randevu oluşturmalısınız.";
                }else if ( appointment_list.length > 1 ) {
                    etext = "Sonraki adıma geçebilmek için en fazla 1 adet randevu oluşturmalısınız.";
                }
                
                if ( appointment_list.length < 1 || appointment_list.length > 1  ) {

                    var isMobile = detectMob();
                    if ( isMobile ) {
                        var appointment_start_date = $("#appointment_start_date").val();
                        var appointment_end_date = $("#appointment_end_date").val();

                        if ( appointment_start_date != null && appointment_end_date != null ) {
                            var name1 = $("#customer_name1").val();
                            var name2 = $("#customer_name2").val();
                            if ( name1 == "" ) {
                                name1 = "Yazılmamış";
                            }
                            if ( name2 == "" ) {
                                name2 = "Yazılmamış";
                            }
                            name = name1+" & "+name2;

                            // Ajax Post
                            $.ajaxSetup({
                                headers: {
                                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                                }
                            });
                            $.post("/appointment/new/ajax",{ appointment_name: name, appointment_start: appointment_start_date, appointment_end: appointment_end_date })
                            .fail(function( err ){
                                console.log(err);
                                appointment_list = [];
                                $(".step-"+next_step).hide();
                                next_step = next_step-1;
                                $(".step-"+next_step).fadeIn();
                                $("form").data('step', next_step);
                                $.alert({
                                    title:'Randevu Hatası', 
                                    content: etext, 
                                    type: 'red', 
                                    typeAnimated: true, 
                                    buttons: {
                                        ok:{
                                            text:'Tamam',
                                            btnClass: 'btn-default', action: function(){}
                                        }
                                    }
                                })
                            })
                            .done(function( data, status ) {
                                $("#appointment_start_date").prop('disabled', true);
                                $("#appointment_end_date").prop('disabled', true);
                                // oluşturulan randevuların idlerini arraya kaydet.
                                appointment_list.push( { id: data, title: name, start: appointment_start_date, end: appointment_end_date } );
                            });
                        }else{
                            appointment_list = [];
                            $(".step-"+next_step).hide();
                            next_step = next_step-1;
                            $(".step-"+next_step).fadeIn();
                            $("form").data('step', next_step);
                            $.alert({
                                title:'Randevu Hatası', 
                                content: etext, 
                                type: 'red', 
                                typeAnimated: true, 
                                buttons: {
                                    ok:{
                                        text:'Tamam',
                                        btnClass: 'btn-default', action: function(){}
                                    }
                                }
                            })
                        }
                    }else{
                        appointment_list = [];
                        $(".step-"+next_step).hide();
                        next_step = next_step-1;
                        $(".step-"+next_step).fadeIn();
                        $("form").data('step', next_step);
                        $.alert({
                            title:'Randevu Hatası', 
                            content: etext, 
                            type: 'red', 
                            typeAnimated: true, 
                            buttons: {
                                ok:{
                                    text:'Tamam',
                                    btnClass: 'btn-default', action: function(){}
                                }
                            }
                        })
                    }
                }else{

                    // Ajax Post
                    $.ajaxSetup({
                        headers: {
                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                        }
                    });
                    $.post('/user/available/list/ajax',{ id:appointment_list[0].id, start: appointment_list[0].start, end: appointment_list[0].end }).done(function( data ) {
                        $("#available_users").html(" ");
                        if (data.length <= 0) {
                            var isMobile = detectMob();
                            if ( isMobile ) {
                                appointment_list = [];
                                $("#appointment_start_date").prop('disabled', false);
                                $("#appointment_end_date").prop('disabled', false);
                            }
                            $("#available_users").html("<div class='col-12'><div class='alert alert-warning'>Bu tarihler arasında müsait kullanıcı bulunamadı.</div></div>");
                        }else{
                            data.forEach(user => {                       
                                $("#available_users").append('<div class="col-lg-4"><div class="content" style="padding: 0px;"><div class="form-group" style="font-size: 17px; padding: 0px;"><label for="users'+user.id+'" style="display: block; width: 100%; min-height: 60px;padding: 15px 20px;"><input type="checkbox" class="users_input" name="users[]" data-name="'+user.name+'" id="users'+user.id+'" value="'+user.id+'"> <span>'+user.name+'</span></label></div></div></div>');
                            });
                        }
                    });

                }
            }else if ( next_step == 6 ) {
                database = [];
                $("#next-step").hide();
                $("#result #appointment_list").html(" ");
                $("#result #package").html(" ");
                $("#result #job_list").html(" ");
                $("#result #user_list").html(" ");
                $("#result #customer_list").html(" ");

                // Customers
                var customer_name1 = $("#customer_name1").val();
                var customer_name2 = $("#customer_name2").val();
                var customer_phone1 = $("#customer_phone1").val();
                var customer_instagram1 = $("#customer_instagram1").val();
                var customer_phone2 = $("#customer_phone2").val();
                var customer_instagram2 = $("#customer_instagram2").val();
                if ( customer_name1 == "" ) {
                    customer_name1 = "Yazılmamış";
                }
                if ( customer_name2 == "" ) {
                    customer_name2 = "Yazılmamış";
                }
                name = customer_name1+" & "+customer_name2;
                $("#customer_list").append("<span class='badge badge-secondary' style='padding: 5px 10px;margin-right: 5px;font-size: 14px;'>" + name + "<span>");

                // add appointment_list
                database.push( {"name1":customer_name1} );
                database.push( {"name2":customer_name2} );
                database.push( {"customer_phone1":customer_phone1} );
                database.push( {"customer_instagram1":customer_instagram1} );
                database.push( {"customer_phone2":customer_phone2} );
                database.push( {"customer_instagram2":customer_instagram2} );
                // add appointment_list
                database.push( {appointment_list} );

                // Appointments
                appointment_list.forEach(element => {
                    var date = new Date(element.start);
                    var start = date.getFullYear() + "-" + ("0" + (date.getMonth()+1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2) + " " + ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2) + ":" + ("0" + date.getMilliseconds()).slice(-2);
                    
                    var date = new Date(element.end);
                    var end = date.getFullYear() + "-" + ("0" + (date.getMonth()+1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2) + " " + ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2) + ":" + ("0" + date.getMilliseconds()).slice(-2);
                    
                    $("#result #appointment_list").append("<span class='badge badge-danger' style='padding: 5px 10px;margin-right: 5px;font-size: 14px;'>" + start + "<br>" + end + "<span>");
                });

                // Package
                var package = $("input[name='package']:checked").data('name');
                $("#result #package").append("<span class='badge badge-primary' style='padding: 5px 10px;margin-right: 5px;font-size: 14px;'>"+package + "<span>");
                // add package
                package = $("input[name='package']:checked").val();
                database.push( {"package": package} );

                // Jobs
                var checkedValue = null; 
                var inputElements = document.getElementsByClassName('jobs_input');
                for(var i=0; inputElements[i]; ++i){
                    if(inputElements[i].checked){
                        checkedValue = inputElements[i].value;
                        var job_name = $("#extra_items"+checkedValue).data('name');
                        $("#result #job_list").append("<span class='badge badge-info' style='padding: 5px 10px;margin-right: 5px;font-size: 14px;'>"+job_name + "<span>");
                        var job_id = $("#extra_items"+checkedValue).val();
                        temp.push( job_id );
                    }
                }
                var jobs = temp;
                database.push( { jobs } );
                temp = [];

                // Users
                var checkedValue = null; 
                var inputElements = document.getElementsByClassName('users_input');
                for(var i=0; inputElements[i]; ++i){
                    if(inputElements[i].checked){
                        checkedValue = inputElements[i].value;
                        var user_name = $("#users"+checkedValue).data('name');
                        $("#result #user_list").append("<span class='badge badge-warning' style='padding: 5px 10px;margin-right: 5px;font-size: 14px;'>"+user_name + "<span>");
                        var user_id = $("#users"+checkedValue).val();
                        temp.push( user_id );
                    }
                }
                var users = temp;
                database.push( { users } );
                temp = [];

                // Total Price
                $("#total_calculated_price").html("<span class='badge' style='background-color: transparent;padding: 5px 10px;margin-right: 5px;font-size: 14px;' id='totalamount'>" + total_price.toFixed(2) + " ₺<span>");
                database.push( {'total_price': total_price.toFixed(2) } );
                appointment_id = database[6]['appointment_list'][0]['id'];
            }else{
                $("#next-step").show();
            }
        }
    })

    $("#prev-step").click(function(){
        var active_step = $("form").data('step');
        var length_step = $(".step").length;
        var next_step = active_step-1;
        if ( next_step > 0 && next_step < length_step ) {
            $("form").data('step', next_step);
            $(".step").hide();
            $(".step-"+next_step).fadeIn();
            if ( next_step <= 1 ) {
                $("#prev-step").hide();
            }
            if ( next_step == 3 ) {
                render_calendar();
            }
            if ( next_step == 6 ) {
                $("#next-step").hide();
            }else{
                $("#next-step").show();
            }
        }else{
            $("#prev-step").hide();
        }
    })


    $(".jobs_input").change(function () {
        var job_price = $(this).data("price");
        if ( $(this).attr('data-calculate') == "on" ) {
            if ( $(this).is(":checked") ) {
                calculate_price( job_price );
            }else{
                calculate_price( job_price, '-' );
            }
        }
    });


    // Save all data
    $("#finish").click(function () {
        $(".spinner-border",this).show();
        $(this).prop("disabled", true);

        
        var discount = $("#discount").val();
        discount = parseFloat(discount);
        database.push( {'discount': discount } );

        // Ajax Post
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        $.post('/appointment/save/ajax',{ appointment: database }).done(function( data, status ) {
            $("#finish .spinner-border").hide();
            $("#finish .fa-check").show();
            $("#finish").removeClass('btn-primary').addClass('btn-success');

            $(".success-area").show();
            var new_link = "";
        
            new_link = "/appointment/image/add/" + appointment_id;
            $("#add_image_link").attr("href", new_link);

            new_link = "/appointment/print/" + appointment_id;
            $("#print_contract").attr("href", new_link);
        });
    });

    $("#discount50").change(function(){
        if ( $(this).is(':checked') ) {
            calculate_price(50, '-');
            $("#discount").val(50);
        }else{
            calculate_price(50, '+');
            $("#discount").val(0);
        }
    });
})

function calculate_price(price, operation="+") {
    $("#total_price").html(" ");
    if ( operation != 'discount' ) {
        if ( operation == "+" ) {
            total_price = parseFloat(total_price) + parseFloat(price);
        }else{
            total_price = parseFloat(total_price) - parseFloat(price);
        }
    }else{
        total_price = parseFloat(total_price) - parseFloat(price);
    }
    $("#total_price").html(total_price.toFixed(2));
    return total_price;
}

function calculate_discount() {
    var discount = $("#discount").val();
    var total = $("#total_price").html();
    var result = parseFloat(total);
    if ( discount >= 0 && discount != '') {
        result = parseFloat(total) - parseFloat(discount);
        if ( result <= 0 ) {
            result = 0;
        }
    }
    $("#totalamount").html(result.toFixed(2));
}