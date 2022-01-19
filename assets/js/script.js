$(function() {
    $("#enviarCorreo").click(function (){
        $("#modalCorreo").modal('show')
    })

    $(".card-title").click(function(){
        $(".card-text").toggle()
    })

    $('body').on('dblclick','h4',function(){
        $(this).css("color","red")
    })
})
//Para que los tooltip funcionen//
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})