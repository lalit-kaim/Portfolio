var animation = bodymovin.loadAnimation({
    container: document.getElementById('lottie'), 
    path: 'loading.json',
    loop: true, 
    autoplay: true, 
    name: "Hello World", 
    })
    function hide(){
        window.onload = function(){
            var hidden = document.getElementById('hidden_container');
            hidden.classList.add('hide_class');
        }
    }
    hide();