const formatTime = date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    let hour = date.getHours()
    let minute = date.getMinutes() + 30
    const second = date.getSeconds()
    console.log(minute)
    if (minute >= 60) {
        hour += 1;
        minute = minute % 60;
    }
    hour = hour % 24;
    // return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
    return [hour, minute].map(formatNumber).join(':')
}

const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : '0' + n
}

module.exports = {
    formatTime: formatTime
}