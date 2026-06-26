Number.prototype.formatMoney = function (value, decimal, comma, showIfZero = false) {
    var v = this;
    if (isNaN(this)) v = 0;
    else
        v = parseFloat(this);

    var n = this; value = isNaN(value = Math.abs(value)) ? 2 : value, decimal = decimal === undefined ? "." : decimal, comma = comma === undefined ? "," : comma, s = n < 0 ? "-" : "", i = parseInt(n = Math.abs(+n || 0).toFixed(value)) + "", j = (j = i.length) > 3 ? j % 3 : 0;
    if ((showIfZero && v === 0) || v !== 0)
        return s + (j ? i.substr(0, j) + comma : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + comma) + (value ? decimal + Math.abs(n - i).toFixed(value).slice(2) : "");
    else
        return "";
};

Number.isInteger = Number.isInteger || function (value) {
    return typeof value === 'number' &&
        isFinite(value) &&
        Math.floor(value) === value;
};

String.prototype.addSpaceProperCase = function (value) {
    var __me = this;
    if (value === undefined && typeof __me === 'string')
        value = this.toString();

    if (value === undefined || value == null)
        return "";
    else
        return value.replace(/([A-Z])/g, ' $1').trim();
};

//START this is the important part.call the exposed function inside angular component
function updatePropertyDataValue(sValueControlID) {
    var __ref = window["angularPropertyDataUpdateValue"];
    if (__ref) {
        __ref.zone.run(() => { __ref.componentFn(sValueControlID); });
    }
}
function showRefreshPropertyData(sValueControlID) {
    var __ref = window["angularPropertyShowRefresh"];
    if (__ref) {
        __ref.zone.run(() => { __ref.componentFn(sValueControlID); });
    }
}
function refreshPropertyDataValue(sValueControlID) {
    var __ref = window["angularPropertyDataRefresh"];
    if (__ref) {
        __ref.zone.run(() => { __ref.componentFn(sValueControlID); });
    }
}
//END - this is the important part.call the exposed function inside angular component

$(document).ready(function () {
    $(".modalTrigger").click(function () {
        var __x = $(this).siblings('.modal');
        if (__x !== null)
            if (__x.hasClass("hide")) {
                __x.removeClass("hide");
                __x.css("display", "block");
            }
        //$(this).siblings('.modal').toggle("hide");
        return false;
    });
    $(".close").click(function () {
        $(this).parent('.modal').addClass("hide");
        return false;
    });
    try {
        $('.help-trigger').tooltipster({
            delay: 10,
            fixedWidth: 200,
            maxWidth: 220,
            position: 'top',
            touchDevices: true,
            marginLeft: '2px'
        });
    } catch (ex) {
        // Nothing
    }
});

function showPopupAfterPB() {
    var _p = $('input[id$=hpopi]').val();
    if (trim(_p) !== "")
        if ($find(_p) !== null)
            $find(_p).show();
}
function showPopup(id) {
    var _p = $('input[id$=hpopi]').val(id);
    if ($find(id) !== null)
        $find(id).show();
}
function hidePopup(id) {
    var _p = $('input[id$=hpopi]').val("");
    if (trim(id) !== "")
        if ($find(id) !== null)
            $find(id).hide();
}
function processClick(b) {
    if (b.click)
        b.click();
    else {
        if (document.createEvent) {
            var e = document.createEvent('MouseEvent');
            e.initEvent('click', true, true);
            b.dispatchEvent(e);
        }
    }
}
function readCookie(a) {
    var b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
    return b ? b.pop() : '';
}
function writeCookie(name, value) {
    var days = 365;
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}
function isNumber(s) {
    if (s === "" || s === null) {
        return false;
    } else {
        var number = parseInt(s);
        if (number === 'NaN') {
            return false;
        } else {
            return true;
        }
    }
}
window.onerror = telerror;
function IncBrMsg() {
    var ua = navigator.userAgent;
    var version = 0, brV = false;
    var x = document.createElement("div");
    x.innerHTML = "<div style='text-align:center;font-size:20px;padding:10px 0;background:#FFEEA9;border-bottom:1px solid #CCC'>You are using an unsupported browser, some features may not work. <br> Please upgrade to IE11+ or Chrome 39+ or Firefox 42+.</div>"
    if (/Trident.*rv[ :]*11\./.test(ua)) { version = 11; brV = true; isIE = true; }
    if (/MSIE (\d+\.\d+);/.test(ua)) { version = new Number(RegExp.$1); brV = false; isIE = true; }
    if (/Firefox[\/\s](\d+\.\d+)/.test(ua)) { version = new Number(RegExp.$1); brV = version >= 39; }
    if (ua.lastIndexOf('Chrome/') > 0) { version = ua.substr(ua.lastIndexOf('Chrome/') + 7, 2); brV = version >= 46; }
    if (ua.lastIndexOf('Safari/') > 0) { version = ua.substr(ua.lastIndexOf('Safari/') + 7, 2); brV = version >= 6; }
    if (ua.indexOf("Android") >= 0) { version = parseFloat(ua.slice(ua.indexOf("Android") + 8)); brV = version >= 2; }

    if (!brV) document.body.insertBefore(x, document.body.firstChild);
}
function NoCookieMsg() {
    document.cookie = "tc";
    if (document.cookie.indexOf("tc") === -1) {
        var c = document.createElement("div");
        c.innerHTML = "<div style='text-align:center;font-size:20px;padding:10px 0;background:#FFEEA9;border-bottom:1px solid #CCC'>Cookies are disabled. Please enable cookies to experience full functionality of IAMOREA platform</div>"
        document.body.insertBefore(c, document.body.firstChild);
    }
}
function WebService() {
    this.type = 'POST';
    this.url;
    this.data;
    this.contentType = 'application/json; charset=utf-8';
    this.dataType = 'json';
    this.cache = false;
    this.context = document.body;
    this.errMessage;
}
(function () {
    this.success = function (response) { return (typeof response !== 'undefined') ? response : null; };
    this.failure = function (response) { return (typeof response !== 'undefined') ? response : null; };
    this.error = function (jqXHR, textStatus, errorThrown) { };
    this.execute = function () {
        try {
            $.ajax({
                type: this.type,
                url: sessionID + this.url,
                data: this.data,
                contentType: this.contentType,
                dataType: this.dataType,
                cache: this.cache,
                context: this.context,
                success: this.success,
                failure: this.failure,
                error: this.error,
                async: this.async
            });
        }
        catch (err) {
            if (typeof err.message !== 'undefined')
                this.errMessage = err.message;
            else
                this.errMessage = err;
            this.failure();
        }
    };
}).call(WebService.prototype);

function telerror(e, u, m) {
    return false;
}
function ltrim(str) {
    if (str) {
        for (var k = 0; k < str.length && isWhitespace(str.charAt(k)); k++);
        return str.substring(k, str.length);
    } else return "";
}
function rtrim(str) {
    try {
        for (var j = str.length - 1; j >= 0 && isWhitespace(str.charAt(j)); j--);
        return str.substring(0, j + 1);
    }
    catch (e) {
        // Nothing
    }
}
function trim(str) {
    return ltrim(rtrim(str));
}
function isWhitespace(charToCheck) {
    var whitespaceChars = " \t\n\r\f";
    return (whitespaceChars.indexOf(charToCheck) !== -1);
}
function tableHeight() {
    var myHeight = 0;
    if (typeof (window.innerWidth) === 'number') {
        //Non-IE
        myWidth = window.innerWidth;
        myHeight = window.innerHeight;

    }
    else {
        if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
            //IE 6+ in 'standards compliant mode'
            myWidth = document.documentElement.clientWidth;
            myHeight = document.documentElement.clientHeight;
        }
        else {
            if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
                //IE 4 compatible
                myHeight = document.body.clientHeight;
            }
        }
    }

    return myHeight;
}
function tableWidth() {

    var myWidth = 0;
    if (typeof (window.innerWidth) === 'number') {
        //Non-IE
        myWidth = window.innerWidth;
        myHeight = window.innerHeight;

    }
    else {
        if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
            //IE 6+ in 'standards compliant mode'
            myWidth = document.documentElement.clientWidth;
            myHeight = document.documentElement.clientHeight;
        }
        else {
            if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
                //IE 4 compatible
                myHeight = document.body.clientHeight;
                myWidth = document.body.clientWidth;
            }
        }
    }

    return myWidth;
}
//To add options to the drop down
function addOption(selectObject, optionText, optionValue) {
    var optionObject = new Option(optionText, optionValue);
    var optionRank = selectObject.options.length;
    selectObject.options[optionRank] = optionObject;
}
//Checks for Numeric values only (restricts Non-Numeric values)
function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;

    return true;
}
function isOnlyNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    return (event.shiftKey === false && (charCode >= 48 && charCode <= 57)) || (charCode === 8) || (charCode === 9) || (charCode === 13) || (charCode === 127);
}
function isOnlyMoneyKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    return (event.shiftKey === false && (charCode >= 48 && charCode <= 57)) || (charCode === 8) || (charCode === 9) || (charCode === 13) || (charCode === 46) || charCode === 190 || charCode === 188 || charCode === 109 || charCode === 110 || (charCode === 190) || (charCode === 127);
}
function isOnlyDateKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    return (event.shiftKey === false && (charCode >= 48 && charCode <= 57)) || (charCode === 8) || (charCode === 9) || (charCode === 13) || (charCode === 191) || (charCode === 127);
}

//Checks for Numeric values only (restricts Non-Numeric values)
function allowNegativeNumbers(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    return (charCode === 45 || (event.shiftKey === false && (charCode >= 48 && charCode <= 57))) || (charCode === 8) || (charCode === 9) || (charCode === 13) || (charCode === 127);
}
/*Max Length Label Counter Handler*/
function checkTextAreaMaxLength(textBox, e, length, cid) {
    var mLen = textBox["MaxLength"];
    if (null === mLen)
        mLen = length;

    var maxLength = parseInt(mLen);
    if (!checkSpecialKeys(e)) {
        if (textBox.value.length > maxLength - 1) {
            if (window.event) {//IE
                e.returnValue = false;
                return false;
            }
            else//FF
                e.preventDefault();
        }
    }
    updateCounter(textBox.value.length, maxLength, textBox, cid);
}
function checkSpecialKeys(e) {
    if (e.keyCode !== 8 && e.keyCode !== 46 && e.keyCode !== 35 && e.keyCode !== 36 && e.keyCode !== 37 && e.keyCode !== 38 && e.keyCode !== 39 && e.keyCode !== 40)
        return false;
    else
        return true;
}
function fnPaste(textBox, length, cid) {
    var mLen = textBox["MaxLength"];
    if (null === mLen)
        mLen = length;

    var maxLength = parseInt(mLen);

    var objTxtBox = textBox;//window.event.srcElement;
    event.returnValue = false; // Cancel the default behavior
    var PasteData = window.clipboardData.getData("Text");
    if ((objTxtBox.value.length + PasteData.length) > maxLength) {
        objTxtBox.value = objTxtBox.value + PasteData.substr(0, maxLength - objTxtBox.value.length - 1);
    }
    updateCounter(objTxtBox.value.length, maxLength, textBox, cid);
}
function updateCounter(currentLength, maxLength, textBox, cid) {
    try {
        var _thiLevelLablesList = textBox.parentNode.getElementsByTagName("label");
        var _counter = null;
        for (i = 0; i < _thiLevelLablesList.length; i++) {
            if (_thiLevelLablesList[i].id.substr(0, 5) === "__LM_") _counter = _thiLevelLablesList[i];
        }

        if (_counter === null) {
            _counter = document.getElementById(cid);
        }
        if (null !== _counter) {
            _counter.style.visibility = "visible";
            var __left = maxLength - currentLength;
            _counter.innerHTML = "(" + __left.toString().trim() + " characters left)";
        }
    } catch (err) {
        //Nothing
    }
}
/*End - Max Length Counter handler*/
function ValidateDate(sender, args) {
    if (args.get_newValue() !== "") {
        date = args.get_newValue().toString();
        var mo, day, yr;
        var delimChar = (date.indexOf("/") !== -1) ? "/" : "-";

        var delim1 = date.indexOf(delimChar);

        var delim2 = date.lastIndexOf(delimChar);
        if (sender._dateFormat === "dd/MM/yyyy" || sender._dateFormat === "dd-MM-yyyy") {
            day = parseInt(date.substring(0, delim1), 10);
            mo = parseInt(date.substring(delim1 + 1, delim2), 10);
            yr = parseInt(date.substring(delim2 + 1), 10);
        }
        else if (sender._dateFormat === "MM/dd/yyyy" || sender._dateFormat === "MM-dd-yyyy") {
            mo = parseInt(date.substring(0, delim1), 10);
            day = parseInt(date.substring(delim1 + 1, delim2), 10);
            yr = parseInt(date.substring(delim2 + 1), 10);
        }
        var testDate = new Date(yr, mo - 1, day);
        if ((testDate.getMonth() + 1 !== mo) || (testDate.getDate() !== day) || (testDate.getFullYear() !== yr)) {
            alert("Date is not valid.Date format is: " + sender._dateFormat);
            args.set_cancel(true);
            var datepicker = $find(sender._clientID);
            datepicker.clear();
        }
    }
}

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] === variable) { return pair[1]; }
    }
    return (false);
}

String.format = function () {
    var s = arguments[0];
    for (var i = 0; i < arguments.length - 1; i++) {
        var reg = new RegExp("\\{" + i + "\\}", "gm");
        s = s.replace(reg, arguments[i + 1]);
    }
    return s;
};

var PDF_MARGIN_BOTTOM = 0;

alert.Show = function (message, redirectURL, isModal, dnld, title) {
    if (message === null) message = "";
    var __d = $('#alertDialog');
    var myBtns = { Ok: function () { __d.html('').dialog('close'); $(this.focus()); } }
    if (dnld) {
        myBtns['Download'] = function () {
            downloadPDF(__d.html(), true);
        }
    }
    if (__d.dialog !== null) {
        if (title && title !== null) __d.attr('title', title);
        message = message.replace('\n', '').replace('\t', '').replace('\r', '').replace("'", "&#34;");
        __d.bind('contextmenu', function (e) { return false; }).html(message);
        if (redirectURL !== null && redirectURL !== "")
            __d.dialog({ isModal: true, width: '90%', closeOnEscape: false, resizable: false, buttons: myBtns, close: function () { window.location = redirectURL; } });
        else
            __d.dialog({ isModal: true, width: '90%', closeOnEscape: false, resizable: false, buttons: myBtns });
    }
    else {
        message = message.Replace('\n', '').Replace('\t', '').Replace('\r', '').Replace("'", "");
        alert(message);
        if (redirectURL !== null && redirectURL !== "")
            window.location = redirectURL;
    }
};

alert.Confirm = function (message, title, okFunction, cancelFunction, dnld) {
    if (message === null) message = "";
    var __d = $('#alertDialog');
    var myBtns = {
        Ok: function () {
            if (okFunction)
                okFunction();
            else
                return true;
            __d.html('').dialog('close');
            $(this.focus());
        }, Cancel: function () {
            if (cancelFunction)
                cancelFunction();
            else
                return false;

            __d.html('').dialog('close');
        }
    };
    if (dnld) {
        myBtns['Download'] = function () {
            downloadPDF(__d.html(), true);
        };
    }

    if (__d.dialog !== null) {
        if (title && title !== null) __d.attr('title', title);
        message = message.replace('\n', '').replace('\t', '').replace('\r', '').replace("'", "&#34;");
        __d.bind('contextmenu', function (e) { return false; }).html(message);
        __d.dialog({ isModal: true, width: '90%', closeOnEscape: false, resizable: false, buttons: myBtns });
    }
    else {
        message = message.Replace('\n', '').Replace('\t', '').Replace('\r', '').Replace("'", "");
        return confirm(message);
    }
};

$.makeTable = function (jsonData) {
    try {
        if (jsonData.length > 0) {
            var table = $("<table class=dynamic style='border:1px solid black'>");
            var tblHeader = "<tr>";
            for (var k in jsonData[0])
                if (!k.startsWith("_"))
                    tblHeader += "<th>" + k + "</th>";
            tblHeader += "</tr>";
            $(tblHeader).appendTo(table);
            $.each(jsonData, function (index, value) {
                var TableRow = "<tr>";
                $.each(value, function (key, val) {
                    if (!key.startsWith("_"))
                        TableRow += "<td valign=top>" + val + "</td>";
                });
                TableRow += "</tr>";
                $(table).append(TableRow);
            });
        }
        return $(table);
    }
    catch (e) { return $('<table style="border:1px solid black"><tr><td></td></tr></table>'); }
};

function captchaValid() {
    if ($('.g-recaptcha') !== null)
        return $('.g-recaptcha')[0].getResponse().length > 0;
    else
        return false;
}

function cleanHTML(e) {
    $("textarea, input[type='text']").change(function () {
        var className = $(this).attr('class');
        if (className === undefined || (className !== undefined && className.indexOf("ignore") === -1)) {
            html = $(this).val(); //get the value
            //.replace("a" , "b")  works only on first occurrence of "a"
            html = html.replace(/</g, ""); //before: if there's space after < remove
            html = html.replace(/>/g, ""); // add space after <
            $(this).val(html); //set new value
        }
    });
}

function scriptExists(url) { return $('script[src="' + url + '"]').length; }

function requireOnce(url, p) {
    if (!scriptExists(url)) {
        var s = document.createElement('script');
        var __s = url + (p !== null && p !== 'undefined' ? '?' + p : '');
        s.setAttribute('src', __s);
        document.body.appendChild(s);
    }
}

//create a in-memory div, set it's inner text(which jQuery automatically encodes)
//then grab the encoded contents back out.  The div never exists on the page.
function htmlEncode(value) {
    return $('<div/>').text(value).html();
};
function htmlDecode(value) {
    return $('<div/>').html(value).text();
}

function preview(h) {
    var myIcon = '<i class="icon icon-flag-checkered icon-large pull-left"></i>';
    var wWidth = $(window).width();
    var dWidth = Math.floor(wWidth * 0.8, 0);
    var wHeight = $(window).height();
    var dHeight = Math.floor(wHeight * 0.8, 0);
    var _d = $("#alertDialog");
    _d.html(h);
    _d.dialog({
        modal: true, width: dWidth + "px",
        resizable: false, closeonEscape: true,
        close: function () { $(this).dialog("close"); }
        , title: '', closeText: ''
        , buttons: { "print": function () { $(this).print(); } }
        , open: function () { $(this).parent().children(".ui-dialog-titlebar").prepend(myIcon); }
    });
}
function toDate(v) {
    var from = v.split("/");
    return new Date(from[2], from[1] - 1, from[0]);
}

function _post(path, params, method) {
    method = method || "post"; // Set method to post by default if not specified.

    // The rest of this code assumes you are not using a library.
    // It can be made less wordy if you use one.
    var form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", path);

    for (var key in params) {
        if (params.hasOwnProperty(key)) {
            var hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", key);
            hiddenField.setAttribute("value", params[key]);

            form.appendChild(hiddenField);
        }
    }

    document.body.appendChild(form);
    form.submit();
}

function post(path, parameters) {
    var form = $('<form></form>');

    form.attr("method", "post");
    form.attr("action", path);

    $.each(parameters, function (key, value) {
        var field = $('<input></input>');

        field.attr("type", "hidden");
        field.attr("name", key);
        field.attr("value", value);

        form.append(field);
    });

    // The form needs to be a part of the document in
    // order for us to be able to submit it.
    $(document.body).append(form);
    form.submit();
}

function setLatLong() {
    var _v = $('input[id$=mylat]').val().trim();
    if (_v === "" || _v === "0") {
        if (navigator.geolocation) {
            var location_timeout = setTimeout("geolocFail()", 10000);

            navigator.geolocation.getCurrentPosition(function (position) {
                clearTimeout(location_timeout);
                $('input[id$=mylat]').val(position.coords.latitude);
                $('input[id$=mylong]').val(position.coords.longitude);
                $.ajax({
                    type: "POST", contentType: "application/json", dataType: "json",
                    url: ajaxEndPoint + "/setLatLong",
                    data: "{ 'lat' : '" + position.coords.latitude + "', 'lng' : '" + position.coords.longitude + "' } ",
                    error: function (r, s, e) { }
                });
            }, function (error) {
                clearTimeout(location_timeout);
                geolocFail();
            });
        }
    }
}
function geolocFail() {
    $('input[id$=mylat]').val("0");
    $('input[id$=mylong]').val("0");
    $.ajax({
        type: "POST", contentType: "application/json", dataType: "json",
        url: ajaxEndPoint + "/setLatLong",
        data: "{ 'lat' : '0', 'lng' : '0' } ",
        error: function (r, s, e) { }
    });
}

function displayLocation(latitude, longitude) {
    var request = new XMLHttpRequest();

    var method = 'GET';
    var url = '//maps.googleapis.com/maps/api/geocode/json?latlng=' + latitude + ',' + longitude + '&sensor=true';
    var async = true;

    request.open(method, url, async);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            var data = JSON.parse(request.responseText);
            var address = data.results[0];
            if (address !== null && address.formatted_address !== null)
                return address.formatted_address;
            else
                return "";
        }
    };
    request.send();
};

function HttpGet(url) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function () {
        if (xhr.status === 200) {
            return xhr.responseText;
        }
        else {
            return null;
        }
    };
    xhr.send();
}

function HttpPost(url, postData) {
    xhr = new XMLHttpRequest();

    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function () {
        if (xhr.status === 200) {
            return xhr.responseText;
        }
        else if (xhr.status !== 200) {
            return null;
        }
    };
    xhr.send(encodeURI(postData));
}

function HttpPostJSON(url, JSON) {
    var xhr = new XMLHttpRequest();
    xhr.open('PUT', url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function () {
        if (xhr.status === 200) {
            return JSON.parse(xhr.responseText);
        }
    };
    xhr.send(JSON.stringify(JSON));
}

function splitCamelCase(s) {
    return s.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) { return str.toUpperCase(); });
    // insert a space before all caps
    // uppercase the first character
}
function redirectURL(s) {
    $.ajax({
        url: ajaxEndPoint + '/encryptQS',
        data: "{ 's': '" + s + "'}",
        dataType: 'json', type: "POST", contentType: "application/json; charset=utf-8",
        success: function (data) { window.location.replace(data.d); },
        async: false,
        error: function (r, s, e) { }, failure: function (r, s, e) { }
    });
}

function downloadPDF(sHtml, bProtect) {
    var __d = JSON.stringify({ 'sHTML': sHtml, 'bPasswordProtect': bProtect });
    $.ajax({
        url: ajaxEndPoint + '/HtmlToPDF', data: __d, async: false, dataType: 'json', type: "POST", contentType: "application/json; charset=utf-8",
        success: function (data) {
            var arr = data.d;
            var byteArray = new Uint8Array(arr);
            var a = window.document.createElement('a');
            a.href = window.URL.createObjectURL(new Blob([byteArray], { type: 'application/octet-stream' }));
            a.download = "IAMOREA.pdf";
            // Append anchor to body.
            document.body.appendChild(a);
            a.click();
            // Remove anchor from body
            document.body.removeChild(a);
        },
        error: function (r, s, e) {
            alert(r.responseText);
        }, failure: function (r, s, e) {
            alert(r.responseText);
        }
    });
}
