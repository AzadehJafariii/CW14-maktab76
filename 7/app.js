$(document).ready(function () {

    $('#form').submit(validaeForm);
        
        function validaeForm() {

       if ($.trim($("#name").val()) === "" && $.trim($("#lname").val()) === "") {
            alert('you did not fill out 2 fields');
            return false;
        }
        else if ($.trim($("#name").val()) === "" || $.trim($("#lname").val()) === "") {
            alert('you did not fill out 1 field');
            return false;
        }
        else{
            alert('submit sccessfully.')
        }

    };

})

