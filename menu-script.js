// Menu Tabs Content fucntionality for viewing items
$(document).ready(function () {
    const activeTab = $("#italianPrep, #hotCoffee, #coldCoffee, #tea")

    $('#italianPrep').click(function(){
        $('.italian_list').removeClass('is-hidden');
        
    })
    $('#hotCoffee').click(function(){

        $('.hotCoffee_list').removeClass('is-hidden');
        
    })
    $('#coldCoffee').click(function(){

        // $('#coldCoffee').addClass('is-active');
        $('.coldCoffee_list').removeClass('is-hidden');
        
    })
    $('#tea').click(function(){

        // $('#tea').addClass('is-active');
        $('.italian_list').removeClass('is-hidden');
        
    })

});