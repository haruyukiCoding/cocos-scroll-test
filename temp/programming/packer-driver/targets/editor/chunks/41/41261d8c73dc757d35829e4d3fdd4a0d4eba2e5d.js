System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, EventHandler, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, ScrollViewPlusItem;

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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d4342TAy+VKK5o6UfK0YIB0", "ScrollViewPlusItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventHandler', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 用法：
       *
       *      1. 将本组件挂载在Item节点上
       * 		2. 在属性面板上指定事件数组回调，即可监听 Item 「进入」和「离开」ScrollView可视区域的事件
       *
       */

      _export("ScrollViewPlusItem", ScrollViewPlusItem = (_dec = ccclass('ScrollViewPlusItem'), _dec2 = property({
        type: [EventHandler],
        tooltip: "进入ScrollView时回调"
      }), _dec3 = property({
        type: [EventHandler],
        tooltip: "离开ScrollView时回调"
      }), _dec4 = property({
        type: [EventHandler],
        tooltip: "进入ScrollView之后，位置发生改变时回调"
      }), _dec(_class = (_class2 = class ScrollViewPlusItem extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "onEnterScorllViewEvents", _descriptor, this);

          _initializerDefineProperty(this, "onExitScorllViewEvents", _descriptor2, this);

          _initializerDefineProperty(this, "onPositionChangeEvents", _descriptor3, this);

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
        /**
         * Item 进入 ScrollView 后，位置发生移动时回调，离开ScrollView后不会回调
         *
         * @param xOffsetPercent 相对于 ScrollView 可视区域中心点，X的偏移量百分比，取值范围：[0, 1]。其中，0：为在可视区域最左边，1：为可视区域最右边
         * @param yOffsetPercent 相对于 ScrollView 可视区域中心点，Y的偏移量百分比，取值范围：[0, 1]。其中，0：为在可视区域最下边，1：为可视区域最上边
         */


        publishOnPositionChange(xOffsetPercent, yOffsetPercent) {
          if (this.onPositionChangeEvents.length == 0) {
            return;
          }

          this.onPositionChangeEvents.forEach(event => {
            event.emit([xOffsetPercent, yOffsetPercent]);
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "onEnterScorllViewEvents", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "onExitScorllViewEvents", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "onPositionChangeEvents", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=41261d8c73dc757d35829e4d3fdd4a0d4eba2e5d.js.map