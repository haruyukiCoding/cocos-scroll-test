System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, EventHandler, Label, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, item3;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      EventHandler = _cc.EventHandler;
      Label = _cc.Label;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7e512k6IRpI3LudDaVN9nSi", "item3", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventHandler', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("item3", item3 = (_dec = ccclass('item3'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property({
        type: [EventHandler],
        tooltip: "进入ScrollView时回调"
      }), _dec5 = property({
        type: [EventHandler],
        tooltip: "离开ScrollView时回调"
      }), _dec(_class = (_class2 = class item3 extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "nameLabel", _descriptor, this);

          _initializerDefineProperty(this, "descLabel", _descriptor2, this);

          _initializerDefineProperty(this, "onEnterScorllViewEvents", _descriptor3, this);

          _initializerDefineProperty(this, "onExitScorllViewEvents", _descriptor4, this);

          this.isShowing = false;
        }

        /**
         * Item 进入 ScrollView 的时候回调
         */
        publishOnEnterScrollView() {
          if (this.onEnterScorllViewEvents.length === 0) {
            return;
          }

          this.onEnterScorllViewEvents.forEach(event => {
            event.emit([]);
          });
        }
        /**
         * Item 离开 ScrollView 的时候回调
         */


        publishOnExitScrollView() {
          if (this.onExitScorllViewEvents.length === 0) {
            return;
          }

          this.onExitScorllViewEvents.forEach(event => {
            event.emit([]);
          });
        }

        setValue(name, desc) {
          this.nameLabel.string = name;
          this.descLabel.string = desc;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nameLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "descLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "onEnterScorllViewEvents", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "onExitScorllViewEvents", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d31a8ada2b0e75a8afccd36da4bd94efc3cdaf82.js.map