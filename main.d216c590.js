parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){return o(e)||a(e)||n(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}function a(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function o(e){if(Array.isArray(e))return r(e)}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var i=document.querySelector("body"),l=document.querySelector("tbody"),c=document.querySelector("table");c.addEventListener("click",function(t){var n=t.target.closest("th"),a=n.cellIndex,o=[];"ASC"===n.direction?(n.direction="DESC",o=e(l.rows).sort(function(e,t){var n=e.cells[a].innerText.replace(/[$,]/g,""),o=t.cells[a].innerText.replace(/[$,]/g,"");return isNaN(n)?n.localeCompare(o):n-o})):(n.direction="ASC",o=e(l.rows).sort(function(e,t){var n=e.cells[a].innerText.replace(/[$,]/g,""),o=t.cells[a].innerText.replace(/[$,]/g,"");return isNaN(n)?o.localeCompare(n):o-n})),l.append.apply(l,e(o))}),l.addEventListener("click",function(e){e.stopPropagation();var t=e.target.closest("tr"),n=document.querySelector(".active");n?(n.classList.remove("active"),t.classList.add("active")):t.classList.add("active")});var s=function(e,t,n){var a=document.createElement("div"),o=document.createElement("h1"),r=document.createElement("p");a.classList="notification",a.dataset.qa="notification",a.classList.add(n),o.classList="title",o.textContent=e,r.textContent=t,a.append(o),a.append(r),i.append(a),setTimeout(function(){a.remove()},2e3)};i.insertAdjacentHTML("beforeend",'<form class="new-employee-form">\n      <label>Name:\n        <input name="name" type="text" data-qa="name">\n      </label>\n      <label>Position:\n        <input name="position" type="text" data-qa="position">\n      </label>\n      <label> Office:\n        <select name="office" data-qa="office" >\n         <option value="Tokyo">Tokyo</option>\n         <option value="Singapore">Singapore</option>\n         <option value="London">London</option>\n         <option value="New York">New York</option>\n         <option value="Edinburgh">Edinburgh</option>\n         <option value="San Francisco">San Francisco</option>\n        </select>\n      </label>\n      <label>Age:\n        <input name="age" type="number" data-qa="age">\n      </label>\n      <label>Salary:\n        <input name="salary" type="number" data-qa="salary">\n      </label>\n      <button>Save to table</button>\n     </form>');var u=document.querySelector("form");function d(e){e.tBodies[0].addEventListener("dblclick",function(e){if(e.preventDefault(),"TD"===e.target.tagName){var t=e.target,n=t.textContent,a=window.getComputedStyle(t).width;t.innerHTML='\n      <input\n        name="change"\n        class="cell-input"\n        value="'.concat(n,'"\n      >\n    ');var o=t.querySelector(".cell-input");o.style.maxWidth=a,o.addEventListener("blur",function(e){t.innerHTML=o.value?o.value:n}),o.addEventListener("keypress",function(e){"Enter"===e.key&&(t.innerHTML=o.value?o.value:n)})}})}u.addEventListener("submit",function(e){e.preventDefault();var t=new FormData(u),n=document.createElement("tr"),a=[t.get("name"),t.get("position"),t.get("office"),t.get("age"),t.get("salary")];if(t.get("name").length<4)s("Wrong!","Name should have at least 4 letters!","error");else if(t.get("name")&&t.get("position")&&t.get("age")&&t.get("salary"))if(t.get("age")<18||t.get("age")>90)s("Wrong!","Age must be between 18 and 90","error");else{for(var o=0;o<a.length;o++){var r=document.createElement("td");if(o===a.length-1){var i=parseInt(a[o]);r.textContent="$".concat(i.toLocaleString("en-US"))}else r.textContent=a[o];n.append(r)}l.append(n),s("Done!","New employee added to table","success"),u.reset()}else s("Wrong!","Please, fill in all fields","error")}),d(c);
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.d216c590.js.map