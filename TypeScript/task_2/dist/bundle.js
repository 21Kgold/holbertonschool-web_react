!function(e){var o={};function r(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=o,r.d=function(e,o,t){r.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,o){if(1&o&&(e=r(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var n in e)r.d(t,n,function(o){return e[o]}.bind(null,n));return t},r.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(o,"a",o),o},r.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},r.p="",r(r.s=0)}([function(e,o,r){"use strict";r.r(o),r.d(o,"Director",(function(){return t})),r.d(o,"Teacher",(function(){return n})),r.d(o,"createEmployee",(function(){return u})),r.d(o,"isDirector",(function(){return c})),r.d(o,"executeWork",(function(){return i}));var t=function(){function e(){}return e.prototype.workFromHome=function(){return"Working from home"},e.prototype.getCoffeeBreak=function(){return"Getting a coffee break"},e.prototype.workDirectorTasks=function(){return"Getting to director tasks"},e}(),n=function(){function e(){}return e.prototype.workFromHome=function(){return"Cannot work from home"},e.prototype.getCoffeeBreak=function(){return"Cannot have a break"},e.prototype.workTeacherTasks=function(){return"Getting to work"},e}(),u=function(e){return"number"==typeof e&&e<500?new n:new t},c=function(e){return void 0!==e.workDirectorTasks},i=function(e){return c(e)?e.workDirectorTasks():e.workTeacherTasks()},f=function(e){return"Math"===e?"Teaching Math":"Teaching History"};console.log(u(200)),console.log(u(1e3)),console.log(u("$500"));var a=u(501);console.log(typeof a),console.log(a.getCoffeeBreak()),console.log(a.workFromHome());var l=u(400);console.log(typeof l),console.log(i(u(200))),console.log(i(u(1e3))),console.log(f("Math")),console.log(f("History"))}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvbWFpbi50cyJdLCJuYW1lcyI6WyJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZXhwb3J0cyIsIm1vZHVsZSIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsIkRpcmVjdG9yIiwid29ya0Zyb21Ib21lIiwiZ2V0Q29mZmVlQnJlYWsiLCJ3b3JrRGlyZWN0b3JUYXNrcyIsIlRlYWNoZXIiLCJ3b3JrVGVhY2hlclRhc2tzIiwiY3JlYXRlRW1wbG95ZWUiLCJzYWxhcnkiLCJpc0RpcmVjdG9yIiwiZW1wbG95ZWUiLCJ1bmRlZmluZWQiLCJleGVjdXRlV29yayIsInRlYWNoQ2xhc3MiLCJ0b2RheUNsYXNzIiwiY29uc29sZSIsImxvZyIsImEiLCJiIl0sIm1hcHBpbmdzIjoiYUFDRSxJQUFJQSxFQUFtQixHQUd2QixTQUFTQyxFQUFvQkMsR0FHNUIsR0FBR0YsRUFBaUJFLEdBQ25CLE9BQU9GLEVBQWlCRSxHQUFVQyxRQUduQyxJQUFJQyxFQUFTSixFQUFpQkUsR0FBWSxDQUN6Q0csRUFBR0gsRUFDSEksR0FBRyxFQUNISCxRQUFTLElBVVYsT0FOQUksRUFBUUwsR0FBVU0sS0FBS0osRUFBT0QsUUFBU0MsRUFBUUEsRUFBT0QsUUFBU0YsR0FHL0RHLEVBQU9FLEdBQUksRUFHSkYsRUFBT0QsUUFLZkYsRUFBb0JRLEVBQUlGLEVBR3hCTixFQUFvQlMsRUFBSVYsRUFHeEJDLEVBQW9CVSxFQUFJLFNBQVNSLEVBQVNTLEVBQU1DLEdBQzNDWixFQUFvQmEsRUFBRVgsRUFBU1MsSUFDbENHLE9BQU9DLGVBQWViLEVBQVNTLEVBQU0sQ0FBRUssWUFBWSxFQUFNQyxJQUFLTCxLQUtoRVosRUFBb0JrQixFQUFJLFNBQVNoQixHQUNYLG9CQUFYaUIsUUFBMEJBLE9BQU9DLGFBQzFDTixPQUFPQyxlQUFlYixFQUFTaUIsT0FBT0MsWUFBYSxDQUFFQyxNQUFPLFdBRTdEUCxPQUFPQyxlQUFlYixFQUFTLGFBQWMsQ0FBRW1CLE9BQU8sS0FRdkRyQixFQUFvQnNCLEVBQUksU0FBU0QsRUFBT0UsR0FFdkMsR0FEVSxFQUFQQSxJQUFVRixFQUFRckIsRUFBb0JxQixJQUMvQixFQUFQRSxFQUFVLE9BQU9GLEVBQ3BCLEdBQVcsRUFBUEUsR0FBOEIsaUJBQVZGLEdBQXNCQSxHQUFTQSxFQUFNRyxXQUFZLE9BQU9ILEVBQ2hGLElBQUlJLEVBQUtYLE9BQU9ZLE9BQU8sTUFHdkIsR0FGQTFCLEVBQW9Ca0IsRUFBRU8sR0FDdEJYLE9BQU9DLGVBQWVVLEVBQUksVUFBVyxDQUFFVCxZQUFZLEVBQU1LLE1BQU9BLElBQ3RELEVBQVBFLEdBQTRCLGlCQUFURixFQUFtQixJQUFJLElBQUlNLEtBQU9OLEVBQU9yQixFQUFvQlUsRUFBRWUsRUFBSUUsRUFBSyxTQUFTQSxHQUFPLE9BQU9OLEVBQU1NLElBQVFDLEtBQUssS0FBTUQsSUFDOUksT0FBT0YsR0FJUnpCLEVBQW9CNkIsRUFBSSxTQUFTMUIsR0FDaEMsSUFBSVMsRUFBU1QsR0FBVUEsRUFBT3FCLFdBQzdCLFdBQXdCLE9BQU9yQixFQUFnQixTQUMvQyxXQUE4QixPQUFPQSxHQUV0QyxPQURBSCxFQUFvQlUsRUFBRUUsRUFBUSxJQUFLQSxHQUM1QkEsR0FJUlosRUFBb0JhLEVBQUksU0FBU2lCLEVBQVFDLEdBQVksT0FBT2pCLE9BQU9rQixVQUFVQyxlQUFlMUIsS0FBS3VCLEVBQVFDLElBR3pHL0IsRUFBb0JrQyxFQUFJLEdBSWpCbEMsRUFBb0JBLEVBQW9CbUMsRUFBSSxHLCtCQ3RFckQsOE5BQU8sSUFBTUMsRUFBUSxXQUNqQixjQWFKLE9BWEksWUFBQUMsYUFBQSxXQUNJLE1BQU8scUJBR1gsWUFBQUMsZUFBQSxXQUNJLE1BQU8sMEJBR1gsWUFBQUMsa0JBQUEsV0FDSSxNQUFPLDZCQUVmLEVBZHFCLEdBZ0JSQyxFQUFPLFdBQUcsY0FhdkIsT0FYSSxZQUFBSCxhQUFBLFdBQ0ksTUFBTyx5QkFHWCxZQUFBQyxlQUFBLFdBQ0ksTUFBTyx1QkFHWCxZQUFBRyxpQkFBQSxXQUNJLE1BQU8sbUJBRWYsRUFib0IsR0FlUEMsRUFBaUIsU0FBQ0MsR0FDM0IsTUFBdUIsaUJBQWIsR0FBeUJBLEVBQVMsSUFDakMsSUFBSUgsRUFFUixJQUFJSixHQUdGUSxFQUFhLFNBQUNDLEdBQ3ZCLFlBQTZEQyxJQUFyREQsRUFBK0JOLG1CQUc5QlEsRUFBYyxTQUFDRixHQUN4QixPQUFJRCxFQUFXQyxHQUNKQSxFQUFTTixvQkFFVE0sRUFBU0osb0JBTWxCTyxFQUFhLFNBQUNDLEdBQ2hCLE1BQW1CLFNBQWZBLEVBQ08sZ0JBQ0Ysb0JBS2JDLFFBQVFDLElBQUlULEVBQWUsTUFDM0JRLFFBQVFDLElBQUlULEVBQWUsTUFDM0JRLFFBQVFDLElBQUlULEVBQWUsU0FDM0IsSUFBTVUsRUFBSVYsRUFBZSxLQUN6QlEsUUFBUUMsV0FBVSxHQUNsQkQsUUFBUUMsSUFBSUMsRUFBRWQsa0JBQ2RZLFFBQVFDLElBQUlDLEVBQUVmLGdCQUNkLElBQU1nQixFQUFJWCxFQUFlLEtBQ3pCUSxRQUFRQyxXQUFVLEdBQ2xCRCxRQUFRQyxJQUFJSixFQUFZTCxFQUFlLE9BQ3ZDUSxRQUFRQyxJQUFJSixFQUFZTCxFQUFlLE9BQ3ZDUSxRQUFRQyxJQUFJSCxFQUFXLFNBQ3ZCRSxRQUFRQyxJQUFJSCxFQUFXIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImV4cG9ydCBpbnRlcmZhY2UgRGlyZWN0b3JJbnRlcmZhY2Uge1xyXG4gICAgd29ya0Zyb21Ib21lKCk6IHN0cmluZztcclxuICAgIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZztcclxuICAgIHdvcmtEaXJlY3RvclRhc2tzKCk6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUZWFjaGVySW50ZXJmYWNlIHtcclxuICAgIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmc7XHJcbiAgICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmc7XHJcbiAgICB3b3JrVGVhY2hlclRhc2tzKCk6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERpcmVjdG9yID0gY2xhc3MgRGlyZWN0b3IgaW1wbGVtZW50cyBEaXJlY3RvckludGVyZmFjZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gICAgd29ya0Zyb21Ib21lKCkge1xyXG4gICAgICAgIHJldHVybiAnV29ya2luZyBmcm9tIGhvbWUnO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENvZmZlZUJyZWFrKCkge1xyXG4gICAgICAgIHJldHVybiAnR2V0dGluZyBhIGNvZmZlZSBicmVhayc7XHJcbiAgICB9XHJcblxyXG4gICAgd29ya0RpcmVjdG9yVGFza3MoKSB7XHJcbiAgICAgICAgcmV0dXJuICdHZXR0aW5nIHRvIGRpcmVjdG9yIHRhc2tzJztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFRlYWNoZXIgPSBjbGFzcyBUZWFjaGVyIGltcGxlbWVudHMgVGVhY2hlckludGVyZmFjZSB7XHJcblxyXG4gICAgd29ya0Zyb21Ib21lKCkge1xyXG4gICAgICAgIHJldHVybiAnQ2Fubm90IHdvcmsgZnJvbSBob21lJztcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb2ZmZWVCcmVhaygpIHtcclxuICAgICAgICByZXR1cm4gJ0Nhbm5vdCBoYXZlIGEgYnJlYWsnO1xyXG4gICAgfVxyXG5cclxuICAgIHdvcmtUZWFjaGVyVGFza3MoKSB7XHJcbiAgICAgICAgcmV0dXJuICdHZXR0aW5nIHRvIHdvcmsnO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlRW1wbG95ZWUgPSAoc2FsYXJ5OiBudW1iZXIgfCBzdHJpbmcpOiBUZWFjaGVySW50ZXJmYWNlIHwgRGlyZWN0b3JJbnRlcmZhY2UgPT4ge1xyXG4gICAgaWYgKHR5cGVvZihzYWxhcnkpID09PSAnbnVtYmVyJyAmJiBzYWxhcnkgPCA1MDApIHtcclxuICAgICAgICByZXR1cm4gbmV3IFRlYWNoZXIoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBuZXcgRGlyZWN0b3IoKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGlzRGlyZWN0b3IgPSAoZW1wbG95ZWU6IFRlYWNoZXJJbnRlcmZhY2UgfCBEaXJlY3RvckludGVyZmFjZSk6IGVtcGxveWVlIGlzIERpcmVjdG9ySW50ZXJmYWNlID0+IHtcclxuICAgIHJldHVybiAoZW1wbG95ZWUgYXMgRGlyZWN0b3JJbnRlcmZhY2UpLndvcmtEaXJlY3RvclRhc2tzICE9PSB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBleGVjdXRlV29yayA9IChlbXBsb3llZTogVGVhY2hlckludGVyZmFjZSB8IERpcmVjdG9ySW50ZXJmYWNlKSA9PiB7XHJcbiAgICBpZiAoaXNEaXJlY3RvcihlbXBsb3llZSkpIHtcclxuICAgICAgICByZXR1cm4gZW1wbG95ZWUud29ya0RpcmVjdG9yVGFza3MoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGVtcGxveWVlLndvcmtUZWFjaGVyVGFza3MoKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgU3ViamVjdHMgPSAnTWF0aCcgfCAnSGlzdG9yeSc7XHJcblxyXG5jb25zdCB0ZWFjaENsYXNzID0gKHRvZGF5Q2xhc3M6IFN1YmplY3RzKTogc3RyaW5nID0+IHtcclxuICAgIGlmICh0b2RheUNsYXNzID09PSAnTWF0aCcpIHtcclxuICAgICAgICByZXR1cm4gJ1RlYWNoaW5nIE1hdGgnO1xyXG4gICAgfSByZXR1cm4gJ1RlYWNoaW5nIEhpc3RvcnknO1xyXG59XHJcblxyXG5cclxuXHJcbmNvbnNvbGUubG9nKGNyZWF0ZUVtcGxveWVlKDIwMCkpO1xyXG5jb25zb2xlLmxvZyhjcmVhdGVFbXBsb3llZSgxMDAwKSk7XHJcbmNvbnNvbGUubG9nKGNyZWF0ZUVtcGxveWVlKCckNTAwJykpO1xyXG5jb25zdCBhID0gY3JlYXRlRW1wbG95ZWUoNTAxKTtcclxuY29uc29sZS5sb2codHlwZW9mKGEpKTtcclxuY29uc29sZS5sb2coYS5nZXRDb2ZmZWVCcmVhaygpKTtcclxuY29uc29sZS5sb2coYS53b3JrRnJvbUhvbWUoKSk7XHJcbmNvbnN0IGIgPSBjcmVhdGVFbXBsb3llZSg0MDApO1xyXG5jb25zb2xlLmxvZyh0eXBlb2YoYikpO1xyXG5jb25zb2xlLmxvZyhleGVjdXRlV29yayhjcmVhdGVFbXBsb3llZSgyMDApKSk7XHJcbmNvbnNvbGUubG9nKGV4ZWN1dGVXb3JrKGNyZWF0ZUVtcGxveWVlKDEwMDApKSk7XHJcbmNvbnNvbGUubG9nKHRlYWNoQ2xhc3MoJ01hdGgnKSk7XHJcbmNvbnNvbGUubG9nKHRlYWNoQ2xhc3MoJ0hpc3RvcnknKSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=