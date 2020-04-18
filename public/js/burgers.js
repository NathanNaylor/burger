$(".new-burger").on("click", function() {
    event.preventDefault();

    const newBurger = {
        burger_name: $("#name").val().trim(),
        devoured: false
    };

    console.log(newBurger)

    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(() => {
        console.log("hello")
        location.reload();
    });
});