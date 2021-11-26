function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

var Logger$1 = /*#__PURE__*/function () {
  function Logger() {
    _classCallCheck(this, Logger);
  }

  _createClass(Logger, null, [{
    key: "logToConsole",
    value: function logToConsole(messages) {
      console.group("%cFound dl_view_item", "background-color: #e0005a ; color: #ffffff ; font-weight: bold ; padding: 4px ;");
      console.log("Found dl_view_item");
      console.groupEnd();
    }
  }, {
    key: "logToToast",
    value: function logToToast(message) {
      Toastify({
        text: message,
        // duration: 5000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top",
        // `top` or `bottom`
        position: "left",
        // `left`, `center` or `right`
        stopOnFocus: true,
        // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)"
        },
        onClick: function onClick() {} // Callback after click

      }).showToast();
    }
  }]);

  return Logger;
}();

var DLEvent = /*#__PURE__*/function () {
  function DLEvent(dataLayerObject) {
    _classCallCheck(this, DLEvent);

    this.dataLayerObject = dataLayerObject;
  }

  _createClass(DLEvent, [{
    key: "logVerificationOutcome",
    value: function logVerificationOutcome(messages) {
      // Log details in console
      Logger.logToToast(message[0]); // Log toast

      Logger.logToConsole(messages);
    }
  }, {
    key: "isString",
    value: function isString(val) {}
  }, {
    key: "isNumber",
    value: function isNumber(val) {}
  }, {
    key: "isUndefined",
    value: function isUndefined(val) {
      return typeof val === 'undefined' || val == null;
    }
  }]);

  return DLEvent;
}();
var DLViewItem = /*#__PURE__*/function (_DLEvent) {
  _inherits(DLViewItem, _DLEvent);

  var _super = _createSuper(DLViewItem);

  function DLViewItem(dataLayerObject) {
    _classCallCheck(this, DLViewItem);

    return _super.call(this, dataLayerObject);
  } // Should return an array of messages starting with the event type we are verifying + whether it was verified or not.


  _createClass(DLViewItem, [{
    key: "verify",
    value: function verify() {
      this.logVerificationOutcome();
    }
  }]);

  return DLViewItem;
}(DLEvent);

evaluateDLEvent('id');

function evaluateDLEvent(dlEventId) {
  var dlEventObect = dataLayer.find(function (dlEvent) {
    return dlEvent['gtm.uniqueEventId'] === dlEventId;
  });
  var dlEventName = dlEventObect.event;

  switch (dlEventName) {
    case 'dl_view_item':
      // Find the object based on id in the DLEvent object
      Logger$1.logToConsole(dlEventName);
      var dlViewItem = new DLViewItem(dlEventObject);
      dlViewItem.verify();
      break;

    case 'dl_add_to_cart':
      console.log(dlEventName);
      break;

    case 'dl_login':
      console.log(dlEventName);
      break;

    case 'dl_user_data':
      console.log(dlEventName);
      break;
  }
}
