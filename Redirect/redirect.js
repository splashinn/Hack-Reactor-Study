<script type="text/javascript">
    var timer;
    var heartbeat;
    var lastInterval;

    function clearTimers() {
        clearTimeout(timer);
        clearTimeout(heartbeat);
    }

    window.addEventListener("pageshow", function(evt){
        clearTimers();
    }, false);

    window.addEventListener("pagehide", function(evt){
        clearTimers();
    }, false);

    function getTime() {
        return (new Date()).getTime();
    }

    // For all other browsers except Safari (which do not support pageshow and pagehide properly)
    function intervalHeartbeat() {
        var now = getTime();
        var diff = now - lastInterval - 200;
        lastInterval = now;
        if(diff > 1000) { // don't trigger on small stutters less than 1000ms
            clearTimers();
        }
    }

    function launch_app_or_alt_url(el) {
        lastInterval = getTime();
        heartbeat = setInterval(intervalHeartbeat, 200);
        document.location = 'myapp://customurl';
        timer = setTimeout(function () {
            document.location = 'http://alternate.url.com';
        }, 2000);
    }

    $(".source_url").click(function(event) {
        launch_app_or_alt_url($(this));
        event.preventDefault();
    });
</script>
