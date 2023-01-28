document.addEventListener('keydown', function(event) {
    
    switch(event.key)
    {
        case "ArrowUp":
        case "ArrowRight":
        case "ArrowDown":
        case "ArrowLeft":
            alert(event.key)

    }
});