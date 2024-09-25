function save(taskCounter, saveOutputDom = true) {
    try {
        localStorage.setItem("taskCounter", taskCounter);
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
        return localStorage.getItem("taskCounter");
    } catch (error) {
        console.error(error);
        return -1;
    }
}
