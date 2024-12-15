function loadScript(src, callback) {
    console.log("Script is loading")

    const script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(null, script)
    script.onerror = () => callback(new Error('failed'))
    document.head.appendChild(script);
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", function(error, script){
    if(error){
        console.log("Error loading script")
    }
    else{
        console.log("Script loaded successfully")
    }
})