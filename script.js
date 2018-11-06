(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = featuresTabs;
function featuresTabs() {
  var id = document.getElementById.bind(document),
      q = document.querySelector.bind(document),
      all = document.querySelectorAll.bind(document);
}

},{}],2:[function(require,module,exports){
"use strict";

var _features_tabs = require("./components/features_tabs");

var _features_tabs2 = _interopRequireDefault(_features_tabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.addEventListener("load", function () {
	var myTabs = document.querySelectorAll(".FeaturesTab-link");

	function myTabClicks(tabClickEvent) {
		for (var i = 0; i < myTabs.length; i++) {
			myTabs[i].classList.remove("active");
		}
		var clickedTab = tabClickEvent.currentTarget;
		clickedTab.classList.add("active");
		tabClickEvent.preventDefault();
		var myContentPanes = document.querySelectorAll(".FeaturesTab-tab");
		for (i = 0; i < myContentPanes.length; i++) {
			myContentPanes[i].classList.remove("active");
		}
		var anchorReference = tabClickEvent.target;
		var activePaneId = anchorReference.getAttribute("href");
		var activePane = document.querySelector(activePaneId);
		activePane.classList.add("active");
	}

	for (var i = 0; i < myTabs.length; i++) {
		myTabs[i].addEventListener("click", myTabClicks);
	}
});

},{"./components/features_tabs":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvY29tcG9uZW50cy9mZWF0dXJlc190YWJzLmpzIiwic3JjL2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7a0JDQXdCLFk7QUFBVCxTQUFTLFlBQVQsR0FBdUI7QUFDcEMsTUFBTSxLQUFLLFNBQVMsY0FBVCxDQUF3QixJQUF4QixDQUE2QixRQUE3QixDQUFYO0FBQUEsTUFDRSxJQUFJLFNBQVMsYUFBVCxDQUF1QixJQUF2QixDQUE0QixRQUE1QixDQUROO0FBQUEsTUFFRSxNQUFNLFNBQVMsZ0JBQVQsQ0FBMEIsSUFBMUIsQ0FBK0IsUUFBL0IsQ0FGUjtBQUtEOzs7OztBQ05EOzs7Ozs7QUFDQSxPQUFPLGdCQUFQLENBQXdCLE1BQXhCLEVBQWdDLFlBQVc7QUFDekMsS0FBSSxTQUFTLFNBQVMsZ0JBQVQsQ0FBMEIsbUJBQTFCLENBQWI7O0FBRUEsVUFBUyxXQUFULENBQXFCLGFBQXJCLEVBQW9DO0FBQ3BDLE9BQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxPQUFPLE1BQTNCLEVBQW1DLEdBQW5DLEVBQXdDO0FBQ3ZDLFVBQU8sQ0FBUCxFQUFVLFNBQVYsQ0FBb0IsTUFBcEIsQ0FBMkIsUUFBM0I7QUFDQTtBQUNELE1BQUksYUFBYSxjQUFjLGFBQS9CO0FBQ0EsYUFBVyxTQUFYLENBQXFCLEdBQXJCLENBQXlCLFFBQXpCO0FBQ0EsZ0JBQWMsY0FBZDtBQUNBLE1BQUksaUJBQWlCLFNBQVMsZ0JBQVQsQ0FBMEIsa0JBQTFCLENBQXJCO0FBQ0EsT0FBSyxJQUFJLENBQVQsRUFBWSxJQUFJLGVBQWUsTUFBL0IsRUFBdUMsR0FBdkMsRUFBNEM7QUFDM0Msa0JBQWUsQ0FBZixFQUFrQixTQUFsQixDQUE0QixNQUE1QixDQUFtQyxRQUFuQztBQUNBO0FBQ0QsTUFBSSxrQkFBa0IsY0FBYyxNQUFwQztBQUNBLE1BQUksZUFBZSxnQkFBZ0IsWUFBaEIsQ0FBNkIsTUFBN0IsQ0FBbkI7QUFDQSxNQUFJLGFBQWEsU0FBUyxhQUFULENBQXVCLFlBQXZCLENBQWpCO0FBQ0EsYUFBVyxTQUFYLENBQXFCLEdBQXJCLENBQXlCLFFBQXpCO0FBQ0M7O0FBRUQsTUFBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLE9BQU8sTUFBM0IsRUFBbUMsR0FBbkMsRUFBd0M7QUFDeEMsU0FBTyxDQUFQLEVBQVUsZ0JBQVYsQ0FBMkIsT0FBM0IsRUFBb0MsV0FBcEM7QUFDQTtBQUNELENBdkJEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmVhdHVyZXNUYWJzKCl7XHJcbiAgY29uc3QgaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZC5iaW5kKGRvY3VtZW50KSxcclxuICAgIHEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yLmJpbmQoZG9jdW1lbnQpLFxyXG4gICAgYWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbC5iaW5kKGRvY3VtZW50KVxyXG4gIFxyXG5cclxufSIsImltcG9ydCBmZWF0dXJlc1RhYnMgZnJvbSBcIi4vY29tcG9uZW50cy9mZWF0dXJlc190YWJzXCI7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbigpIHtcclxuICB2YXIgbXlUYWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5GZWF0dXJlc1RhYi1saW5rXCIpO1xyXG5cclxuICBmdW5jdGlvbiBteVRhYkNsaWNrcyh0YWJDbGlja0V2ZW50KSB7XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG15VGFicy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRteVRhYnNbaV0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuXHRcdH1cclxuXHRcdHZhciBjbGlja2VkVGFiID0gdGFiQ2xpY2tFdmVudC5jdXJyZW50VGFyZ2V0O1xyXG5cdFx0Y2xpY2tlZFRhYi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG5cdFx0dGFiQ2xpY2tFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0dmFyIG15Q29udGVudFBhbmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5GZWF0dXJlc1RhYi10YWJcIik7XHJcblx0XHRmb3IgKGkgPSAwOyBpIDwgbXlDb250ZW50UGFuZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0bXlDb250ZW50UGFuZXNbaV0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuXHRcdH1cclxuXHRcdHZhciBhbmNob3JSZWZlcmVuY2UgPSB0YWJDbGlja0V2ZW50LnRhcmdldDtcclxuXHRcdHZhciBhY3RpdmVQYW5lSWQgPSBhbmNob3JSZWZlcmVuY2UuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtcclxuXHRcdHZhciBhY3RpdmVQYW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihhY3RpdmVQYW5lSWQpO1xyXG5cdFx0YWN0aXZlUGFuZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gIH1cclxuICBcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IG15VGFicy5sZW5ndGg7IGkrKykge1xyXG5cdFx0bXlUYWJzW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBteVRhYkNsaWNrcylcclxuXHR9XHJcbn0pOyJdfQ==
