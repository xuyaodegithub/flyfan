const index = {
    changeTime(val, num) {
        if (val) {
            let data = new Date(val)
            let year = data.getFullYear()
            let month = data.getMonth() + 1
            let day = data.getDate()
            let hour = data.getHours()
            let min = data.getMinutes()
            let sec = data.getSeconds()
            if (month.length < 2) {
                month = '0' + month
            }
            //console.log(year+'-'+month+'-'+day+' '+hour+':'+min+':'+sec)
            // return year+'-'+month+'-'+day+' '+hour+':'+min+':'+sec
            if (month < 10) {
                month = '0' + month
            }
            if (day < 10) {
                day = '0' + day
            }
            if (hour < 10) {
                hour = '0' + hour
            }
            if (min < 10) {
                min = '0' + min
            }
            if (sec < 10) {
                sec = '0' + sec
            }
            if (num) {
                return year + '-' + month + '-' + day + ' ' + hour + ':' + min + ':' + sec
            } else {
                return year + '-' + month + '-' + day
            }
        } else {
            return ''
        }
    },
    getLastMonth() {
        var now = new Date();
        var year = now.getFullYear();//getYear()+1900=getFullYear()
        var month = now.getMonth() + 1;//0-11表示1-12月
        var day = now.getDate();
        var dateObj = {};
        if (parseInt(month) < 10) {
            month = "0" + month;
        }
        if (parseInt(day) < 10) {
            day = "0" + day;
        }

        dateObj.now = year + '-' + month + '-' + day;

        if (parseInt(month) == 1) {//如果是1月份，则取上一年的12月份
            dateObj.last = (parseInt(year) - 1) + '-12-' + day;
            return dateObj;
        }

        var preSize = new Date(year, parseInt(month) - 1, 0).getDate();//上月总天数
        if (preSize < parseInt(day)) {//上月总天数<本月日期，比如3月的30日，在2月中没有30
            dateObj.last = year + '-' + month + '-01';
            return dateObj;
        }

        if (parseInt(month) <= 10) {
            dateObj.last = year + '-0' + (parseInt(month) - 1) + '-' + day;
            return dateObj;
        } else {
            dateObj.last = year + '-' + (parseInt(month) - 1) + '-' + day;
            return dateObj;
        }

    },
    reduceDimension(arr) {//数组降维//
        let ret = [];
        let toArr = function (arr) {
            arr.forEach(function (item) {
                item instanceof Array ? toArr(item) : ret.push(item);
            });
        }
        toArr(arr);
        return ret;
    },
    bankFilter(params){
        let reg = /^(.{4})(?:\d+)(.{4})$/;
        if (!params) return;
        return (params + '').replace(reg, '$1 **** **** $2');
    }
}
export default index
