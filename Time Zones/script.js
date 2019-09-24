const clockPl = () => {

    const time = new Date();
    const seconds = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds();
    const minutes = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
    const hours = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();

    document.querySelector('.clockpl span').textContent = `${hours}:${minutes}:${seconds}`;
}

const clockNy = () => {

    const time = new Date(new Date().toLocaleString("en-US", {
        timeZone: "America/New_York"
    }));
    // const seconds = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds();
    const seconds = time.getSeconds().toString().padStart(2, 0);
    const minutes = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
    const hours = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();

    document.querySelector('.clockny span').textContent = `${hours}:${minutes}:${seconds}`;
}

const clockRu = () => {

    const time = new Date(new Date().toLocaleString("en-RU", {
        timeZone: "Europe/Moscow"
    }));
    const seconds = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds();
    const minutes = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
    const hours = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();

    document.querySelector('.clockru span').textContent = `${hours}:${minutes}:${seconds}`;
}

const clockCh = () => {

    const time = new Date(new Date().toLocaleString("en-CN", {
        timeZone: "Asia/Shanghai"
    }));
    const seconds = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds();
    const minutes = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
    const hours = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();

    document.querySelector('.clockch span').textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(clockPl, 1000);
setInterval(clockNy, 1000);
setInterval(clockRu, 1000);
setInterval(clockCh, 1000);