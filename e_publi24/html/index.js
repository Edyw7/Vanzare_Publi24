$(function () {
    function display(bool) {
        if (bool) {
            $("#container").fadeIn(400);
            $("#startscreen ").fadeIn(400);
            $("#info").hide()
            $("#done").hide()



            

            
        } else {
            $("#container").hide();
        }
    }

    display(false)

    window.addEventListener('message', function(event) {
        var item = event.data;
        if (item.type === "ui") {
            if (item.status == true) {
                display(true)
            } else {
                display(false)
            }
        }
    })
    document.onkeyup = function (data) {
        if (data.which == 27) {
            $.post(`http://${GetParentResourceName()}/exit`, JSON.stringify({}));
            return
        }
    };
    $("#start").click(function () {
        
       $("#startscreen").fadeOut(400)
       $("#info").fadeIn(500)
       $("#warn").hide()

       document.getElementById('firstname').value = ''
       document.getElementById('lastname').value = ''
       document.getElementById('age').value = ''
       document.getElementById('rage').value = ''
       document.getElementById('why').value = ''
       document.getElementById('gender').value = ''
       document.getElementById('id').value = ''
       document.getElementById('dis').value = ''








    })


    var first = document.getElementById('firstname')
    var last = document.getElementById('lastname')
    var age = document.getElementById('age')
    var rage = document.getElementById('rage')
    var why = document.getElementById('why') 
    var gender = document.getElementById('gender')
    var id = document.getElementById('id')
    var dis = document.getElementById('dis')


        $(".sumbit").click(function() {
                if($(first , last , age , rage, why , gender, id, dis).val() === '') {
                    $("#warn").fadeIn(400)
                    return
                    
                } else{
       
          
              
            
                $("#warn").fadeOut(400)
                $("#info").fadeOut(400)
                $("#done").fadeIn(400)
                $.post(
                    `http://${GetParentResourceName()}/name`,
                  JSON.stringify({
                    plate: $("#firstname").val(),     
                    lastname: $("#lastname").val(),
                    age: $("#age").val(),
                    rage: $("#rage").val(),
                    why: $("#why").val(),
                    gender: $("#gender").val(),
                    id: $("#id").val(),
                    dis: $("#dis").val(),
                  })
                );
            }
        
    })

    $(".exit").click(function() {
        $.post(`http://${GetParentResourceName()}/exit`, JSON.stringify({}));
        return
    })
    




        
    

        
    

})
