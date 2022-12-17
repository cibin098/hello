$(document).ready(function(){
    $("#signup").validate({
        rules:{
            txtname :{
                required: true,
                minlength:4,
            
            },
            checkgender:{
                required: true
            },
            dateofc:{
                required:true
            },
            messages:{
              txtname:{
                required:"Enterr the name",
                minlength:"Enter atleast 4 character",
              }
            }
        }
    })
})