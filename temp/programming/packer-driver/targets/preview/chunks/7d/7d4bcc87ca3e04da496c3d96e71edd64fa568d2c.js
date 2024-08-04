System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, ScrollView, Vec3, Rect, UITransform, UIOpacity, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, ScrollViewRendererCtrl;

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
      ScrollView = _cc.ScrollView;
      Vec3 = _cc.Vec3;
      Rect = _cc.Rect;
      UITransform = _cc.UITransform;
      UIOpacity = _cc.UIOpacity;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f4dd3zEvn9KMKfL0gWfIkcA", "ScrollViewRendererCtrl", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'ScrollView', 'Vec2', 'Vec3', 'Rect', 'UITransform', 'UIOpacity']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ScrollViewRendererCtrl", ScrollViewRendererCtrl = (_dec = ccclass('ScrollViewRendererCtrl'), _dec2 = property(ScrollView), _dec(_class = (_class2 = class ScrollViewRendererCtrl extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "scrollView", _descriptor, this);
        }

        start() {}

        update(deltaTime) {}

        calculate() {
          // 获取 ScrollView Node 的 UITransform 组件
          var uiTransform = this.scrollView.node.getComponent(UITransform);

          if (uiTransform) {
            // 获取 ScrollView Node 的父节点的 UITransform 组件
            var parentTransform = this.scrollView.node.parent.getComponent(UITransform);

            if (parentTransform) {
              // 将 Vec3 的位置转换为 Vec2
              var scrollViewPosition = this.scrollView.node.position;
              var svLeftBottomPoint = parentTransform.convertToWorldSpaceAR(new Vec3(scrollViewPosition.x - uiTransform.anchorX * uiTransform.width, scrollViewPosition.y - uiTransform.anchorY * uiTransform.height, scrollViewPosition.z)); // 求出 ScrollView 可视区域在世界坐标系中的矩形（碰撞盒）

              var svBBoxRect = new Rect(svLeftBottomPoint.x, svLeftBottomPoint.y, uiTransform.width, uiTransform.height);
              console.log('ScrollView Bounding Box:', svBBoxRect); // 遍历 ScrollView Content 内容节点的子节点

              this.scrollView.content.children.forEach(childNode => {
                // 获取子节点的 UITransform 组件
                var childTransform = childNode.getComponent(UITransform);

                if (childTransform) {
                  // 获取子节点的包围盒
                  var childBoundingBox = childTransform.getBoundingBoxToWorld(); // 获取子节点的 UIOpacity 组件

                  var childOpacity = childNode.getComponent(UIOpacity);

                  if (!childOpacity) {
                    // 如果子节点没有 UIOpacity 组件，则添加一个
                    childOpacity = childNode.addComponent(UIOpacity);
                  } // 对每个子节点的包围盒做和 ScrollView 可视区域包围盒做碰撞判断
                  // 如果相交了，那么就显示，否则就隐藏


                  if (childBoundingBox.intersects(svBBoxRect)) {
                    if (childOpacity.opacity !== 255) {
                      childOpacity.opacity = 255; // childNode.emit("on_enter_scroll_view");
                    }
                  } else {
                    if (childOpacity.opacity !== 0) {
                      childOpacity.opacity = 0; // childNode.emit("on_exit_scroll_view");
                    }
                  }
                }
              });
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scrollView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7d4bcc87ca3e04da496c3d96e71edd64fa568d2c.js.map