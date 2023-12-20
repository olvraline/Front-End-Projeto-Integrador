function CloseMobileFilters() {
    $("#mobile-filters-div").addClass("hidden")
    $("#cards-div").removeClass("hidden")
}

function ApproveMobileFilters() {
    $("#mobile-filters-div").addClass("hidden")
    $("#cards-div").removeClass("hidden")
}

$(() => {
    $("#filter-icon").click(() => {
        $("#mobile-filters-div").removeClass("hidden")
        $("#cards-div").addClass("hidden")
        return
    })

})