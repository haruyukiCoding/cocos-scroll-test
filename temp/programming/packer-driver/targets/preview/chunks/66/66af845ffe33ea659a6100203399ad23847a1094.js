System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, ScrollView, Vec3, Rect, UITransform, ScrollViewPlusItem, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, ScrollViewPlus;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfScrollViewPlusItem(extras) {
    _reporterNs.report("ScrollViewPlusItem", "./ScrollViewPlusItem", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      ScrollView = _cc.ScrollView;
      Vec3 = _cc.Vec3;
      Rect = _cc.Rect;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      ScrollViewPlusItem = _unresolved_2.ScrollViewPlusItem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c93a8oSY55HWZsgXynSUxaX", "ScrollViewPlus", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'ScrollView', 'Vec2', 'Vec3', 'Rect', 'UITransform', 'UIOpacity']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 用法：
       *
       *      1. 将本组件挂载在节点上即可，和正常ScrollView使用一致
       *
       * 原理：
       *
       *      1. 滚动时，判断子节点是否进入了/离开了可视区域
       *      2. 根据结果回调对应事件，在可以实现类似以下功能：
       *          * 控制可视区域Item显示（透明度改为 255 ），非可视区域Item隐藏（透明度改为 0 ）
       */

      _export("default", ScrollViewPlus = (_dec = ccclass('ScrollViewPlus'), _dec2 = property({
        tooltip: "是否计算在可视区域中Item的相对位置（可能会相对耗性能）"
      }), _dec(_class = (_class2 = class ScrollViewPlus extends ScrollView {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "caculatePosition", _descriptor, this);
        }

        onEnable() {
          super.onEnable();
          this.node.on("scrolling", this._onScrollingDrawCallOpt, this);
        }

        onDisable() {
          super.onDisable();
          this.node.off("scrolling", this._onScrollingDrawCallOpt, this);
        }

        _onScrollingDrawCallOpt() {
          if (this.content.children.length == 0) {
            return;
          }

          this.optDc();
        }

        optDc() {
          ScrollViewPlus.optDc(this, this.caculatePosition);
        }
        /**
         * 优化 ScrollView Content 节点 DC，可以手动调用
         *
         * 具体为
         *
         * 1. 进入ScrollView可视区域是，回调对应 Content 子节点上挂载的 ScollViewPlusItem 组件的 onEnterScorllViewEvents 数组事件
         * 2. 退出ScrollView可视区域是，回调对应 Content 子节点上挂载的 ScollViewPlusItem 组件的 onExitScorllViewEvents 数组事件
         */


        static optDc(scrollView, caculatePosition) {
          // 获取 ScrollView Node 的 UITransform 组件
          var uiTransform = scrollView.node.getComponent(UITransform);

          if (uiTransform) {
            // 获取 ScrollView Node 的父节点的 UITransform 组件
            var parentTransform = scrollView.node.parent.getComponent(UITransform);

            if (parentTransform) {
              // 将 Vec3 的位置转换为 Vec2
              var scrollViewPosition = scrollView.node.position;
              var svLeftBottomPoint = parentTransform.convertToWorldSpaceAR(new Vec3(scrollViewPosition.x - uiTransform.anchorX * uiTransform.width, scrollViewPosition.y - uiTransform.anchorY * uiTransform.height, scrollViewPosition.z)); // 求出 ScrollView 可视区域在世界坐标系中的矩形（碰撞盒）

              var svBBoxRect = new Rect(svLeftBottomPoint.x, svLeftBottomPoint.y, uiTransform.width, uiTransform.height); // 遍历 ScrollView Content 内容节点的子节点

              scrollView.content.children.forEach(childNode => {
                // 获取子节点的 UITransform 组件
                var childTransform = childNode.getComponent(UITransform); // 没有绑定指定组件的子节点不处理

                var itemComponent = childNode.getComponent(_crd && ScrollViewPlusItem === void 0 ? (_reportPossibleCrUseOfScrollViewPlusItem({
                  error: Error()
                }), ScrollViewPlusItem) : ScrollViewPlusItem);

                if (itemComponent == null) {
                  return;
                } // 如果相交了，那么就显示，否则就隐藏


                if (childTransform.getBoundingBoxToWorld().intersects(svBBoxRect)) {
                  if (!itemComponent.isShowing) {
                    itemComponent.isShowing = true;
                    itemComponent.publishOnEnterScrollView();
                  }
                } else {
                  if (itemComponent.isShowing) {
                    itemComponent.isShowing = false;
                    itemComponent.publishOnExitScrollView();
                  }
                }
              });
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "caculatePosition", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=66af845ffe33ea659a6100203399ad23847a1094.js.map