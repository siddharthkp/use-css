"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var count = 0;
createStyleTag();

function useCSS(styles) {
  var className = insertStyles(styles);
  return className;
}

function createStyleTag() {
  var container = document.head.querySelector('#usecss');

  if (!container) {
    var _container = document.createElement('style');

    _container.id = 'usecss';
    document.head.append(_container);
  }

  return container;
}

var stylesArray = [];

function getExistingClassName(styles) {
  var existingStyles = stylesArray.find(function (pair) {
    return pair.styles === styles;
  });
  if (existingStyles) return existingStyles.className;else return false;
}

function insertStyles(styles) {
  var existingClassName = getExistingClassName(styles);
  if (existingClassName) return existingClassName;
  var className = 'c' + count++;
  var raw = ".".concat(className, " {").concat(styles, "}");
  stylesArray.push({
    className: className,
    styles: styles
  });
  var container = document.head.querySelector('#usecss');
  container.append(raw);
  return className;
}

var _default = useCSS;
exports.default = _default;
