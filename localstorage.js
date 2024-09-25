function save(toDoCount, saveOutputDom = true) {
    try {
        localStorage.setItem("toDoCount", toDoCount);
        if (saveOutputDom) {
            let dom = document.getElementById("output");
            localStorage.setItem("dom", dom.innerHTML);
        }
        return 0;
    } catch (error) {
        console.error(error);
        return 1;
    }
}

function load(loadOutputDom = true) {
    try {
        if (loadOutputDom) {
            let dom = document.getElementById("output");
            dom.innerHTML = localStorage.getItem("dom");
        }
        return localStorage.getItem("toDoCount");
    } catch (error) {
        console.error(error);
        return -1;
    }
}
