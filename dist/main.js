import joi from 'joi';

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

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

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
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

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }

      return desc.value;
    };
  }

  return _get.apply(this, arguments);
}

var Logger = /*#__PURE__*/function () {
  function Logger() {
    _classCallCheck(this, Logger);
  }

  _createClass(Logger, null, [{
    key: "logToConsole",
    value: function logToConsole(errors, verificationSummary) {
      console.group("%c" + verificationSummary, "background-color: #e0005a ; color: #ffffff ; font-weight: bold ; padding: 4px ;");
      if (errors) errors.forEach(function (error) {
        return console.log(error);
      });
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

var getEventNameSchema = function getEventNameSchema(eventName) {
  return joi.string().valid(eventName).required().messages({
    "any.required": "\"event\" is a required field on the data layer object and should contain and event name such as dl_view_item, dl_add_to_cart etc..."
  });
};

var eventId = joi.string().min(7).required().messages({
  "any.required": "\"event_id\" is a required field. It should be a UUID like value."
});

var DLEvent = /*#__PURE__*/function () {
  function DLEvent(dataLayerObject) {
    _classCallCheck(this, DLEvent);

    this.dataLayerObject = dataLayerObject;
    this._verified = false;
    this._errors;
    this._verificationSummary;
    this._isValid;
  }

  _createClass(DLEvent, [{
    key: "verify",
    value: function verify(schemas, eventName) {
      if (this._verified === true) throw new Error("Can't call verify more than once.");
      var dlEventSchema = joi.object().keys(_objectSpread2({
        event: getEventNameSchema(eventName),
        event_id: eventId
      }, schemas));
      var validation = dlEventSchema.validate(this.dataLayerObject, {
        abortEarly: false,
        allowUnknown: true
      });

      if (validation.error) {
        this._isValid = false;
        this._errors = validation.error;
        this._verificationSummary = "".concat(eventName, " event with event_id ").concat(this.dataLayerObject.event_id, " is invalid");
      } else {
        this._isValid = true;
        this._verificationSummary = "".concat(eventName, " event with event_id: ").concat(this.dataLayerObject.event_id, " is valid.");
      }

      return validation;
    }
  }, {
    key: "getErrors",
    value: function getErrors() {
      return this._errors;
    }
  }, {
    key: "isValid",
    value: function isValid() {
      return this._isValid;
    }
  }, {
    key: "getVerificationSummary",
    value: function getVerificationSummary() {
      return this._verificationSummary;
    }
  }, {
    key: "logVerificationOutcome",
    value: function logVerificationOutcome() {
      // Log details in console
      Logger.logToToast(this._verificationSummary); // Log toast

      Logger.logToConsole(this._errors, this._verificationSummary);
    }
  }]);

  return DLEvent;
}();

var products = joi.array().items(joi.object({
  name: joi.string().min(1).required(),
  id: joi.string().min(2).required().messages({
    "any.required": "\"id\" is a required field on the ecommerce object and should represent the product SKU"
  }),
  product_id: joi.string().min(5).required().messages({
    "any.required": "\"product_id\" is a required field on the ecommerce object and should represent the product ID."
  }),
  variant_id: joi.string().min(2).required().messages({
    "any.required": "\"product_id\" is a required field on the ecommerce object and should represent the Shopify variant ID."
  }),
  image: joi.string().required().messages({
    "any.required": "\"image\" is a required field on the ecommerce object and should be a valid URL."
  }),
  brand: joi.string().required().messages({
    "any.required": "\"brand\" is a required field on the ecommerce object."
  }),
  category: joi.string().required().messages({
    "any.required": "\"category\" is a required field on the ecommerce object."
  }),
  variant: joi.string().required().messages({
    "any.required": "\"variant\" is a required field on the ecommerce object."
  }),
  price: joi.string().required().messages({
    "any.required": "\"price\" is a required field on the ecommerce object."
  })
}) // Must match
).min(1).required().messages({
  "any.required": "You must have at least one product in the \"products\" array."
});

var ecommerce = joi.object().keys({
  currencyCode: joi.string().min(3).max(3).required().messages({
    "any.required": "\"currencyCode\" is a required field on the ecommerce object and should contain a currency code such as \"USD\"."
  }),
  detail: joi.object().keys({
    actionField: joi.object().keys({
      list: joi.string().required().messages({
        "any.required": "\"list\" is a required field on the actionField object and should contain the collection path to the product."
      }),
      action: joi.string().required().messages({
        "any.required": "\"action\" is a required field on the actionField object and should contain the string 'detail'"
      })
    }).required(),
    products: products
  }).required()
}).required().messages({
  'any.required': "\"ecommerce\" is a required field on the data layer object."
});

var dl_view_item_schema_example = {
  "event": "dl_view_item",
  "event_id": "231f2c91-c2f3-421f-9d20-bb46a956e87a",
  "ecommerce": {
    "currencyCode": "USD",
    "detail": {
      "actionField": {
        "list": "/collections/games",
        "action": "detail"
      },
      "products": [{
        "id": "CHESS-SET",
        // SKU
        "name": "Gold Chess Set",
        "brand": "Chess Inc.",
        "category": "Games",
        "variant": "Large Board",
        "price": "199.00",
        "list": "/collections/games",
        "product_id": "7112843886744",
        "variant_id": "41275778367640",
        "compare_at_price": "0.0",
        "image": "//cdn.shopify.com/s/files/1/0200/7616/products/arena-concrete-chess-set_f75103a8-2ecc-4d91-8d6c-d80b2501dbd7.png?v=1636459884",
        "inventory": "20"
      }]
    }
  }
};

var DLEventViewItem = /*#__PURE__*/function (_DLEvent) {
  _inherits(DLEventViewItem, _DLEvent);

  var _super = _createSuper(DLEventViewItem);

  function DLEventViewItem(dataLayerObject) {
    var _this;

    _classCallCheck(this, DLEventViewItem);

    _this = _super.call(this, dataLayerObject);
    _this.schemaExample = dl_view_item_schema_example;
    return _this;
  } // Add anything additional to 'event_id' and 'event' that requires verification.


  _createClass(DLEventViewItem, [{
    key: "verify",
    value: function verify() {
      return _get(_getPrototypeOf(DLEventViewItem.prototype), "verify", this).call(this, {
        ecommerce: ecommerce
      }, "dl_view_item");
    }
  }]);

  return DLEventViewItem;
}(DLEvent);

function evaluateDLEvent(dlEventId) {
  var dlEventObect = window.dataLayer.find(function (dlEvent) {
    return dlEvent["gtm.uniqueEventId"] === dlEventId;
  });
  var dlEventName = dlEventObect.event;

  if (dlEventName in dlEventMap) {
    var dlEvent = new dlEventMap[dlEventName](dlEventObect);
    dlEvent.verify();
    dlEvent.logVerificationOutcome();
  } else {
    console.log("Event name: " + dlEventName + " not in available data layer verifiers");
  }
}

var dlEventMap = {
  'dl_view_item': DLEventViewItem // 'dl_add_to_cart': DLAddToCart,

};

export { DLEventViewItem, evaluateDLEvent };
