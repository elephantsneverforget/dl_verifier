import Joi from 'joi';

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

var products = Joi.array().items(Joi.object({
  name: Joi.string().alphanum().min(1).required(),
  id: Joi.string().alphanum().min(10).required().messages({
    'any.required': "\"id\" is a required field on the ecommerce object and should represent the product SKU"
  }),
  product_id: Joi.string().alphanum().min(10).required().messages({
    'any.required': "\"product_id\" is a required field on the ecommerce object and should represent the product ID."
  }),
  variant_id: Joi.string().alphanum().min(2).required().messages({
    'any.required': "\"product_id\" is a required field on the ecommerce object and should represent the Shopify variant ID."
  }),
  image: Joi.string().alphanum().required().messages({
    'any.required': "\"image\" is a required field on the ecommerce object and should be a valid URL."
  }),
  price: Joi.string().alphanum().required().messages({
    'any.required': "\"price\" is a required field on the ecommerce object."
  })
}).min(1).required() // Must match
);

try {
  console.log(products.validate([{
    name: 'h'
  }], {
    abortEarly: false
  }));
} catch (e) {
  console.log(e.error); // console.log(e);
}

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
      var Joi = require('joi');

      var dlViewItemSchema = Joi.object({
        event: Joi.string('dl_view_item'),
        event_id: Joi.alphanum().min(5),
        ecommerce: Joi.object({
          currencyCode: Joi.string(3),
          detail: Joi.object({
            actionField: Joi.object({
              list: Joi.string()
            }),
            products: products
          })
        })
      });
      dlViewItemSchema.validate(this.dataLayerObject);
      this.logVerificationOutcome();
    }
  }]);

  return DLViewItem;
}(DLEvent);

function evaluateDLEvent(dlEventId) {
  var dlEventObect = dataLayer.find(function (dlEvent) {
    return dlEvent['gtm.uniqueEventId'] === dlEventId;
  });
  debugger;
  console.log("Found event object:" + dlEventId);
  console.log(dlEventObect);
  var dlEventName = dlEventObect.event;

  switch (dlEventName) {
    case 'dl_view_item':
      Logger$1.logToConsole(dlEventName);

      var _dlViewItem = new DLViewItem(dlEventObject);

      _dlViewItem.verify();

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
} // Each time the tag fires pass event name + event object


evaluateDLEvent('id');
var dlViewItem = new DLViewItem({
  event: 'dl_view_item',
  id: '3qwr'
});
console.log(dlViewItem.verify()); // evaluateDLEvent({{dlv - DL Verifier - GTM unique event ID}});
