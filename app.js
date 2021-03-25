array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
array.forEach(function(element1) {
    array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    array.forEach(function(element2) {
        console.log(String.format("%d X %d = %d\n", element1, element2, element1*element2 ));
    });
});